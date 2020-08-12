
interface Render {
    addOrm: any, //新增字段
    name: any,
    data: any,
    updateOrm: any,
    deleteOrm: any
}
var render = function ({ addOrm, name, updateOrm, deleteOrm,data }: Render) {
    // 生成验证规则
    var list: any = []
    var relevanceJson = require("../../../DaveFile/database/relevance.json")
    var tableinterface = require("../../../DaveFile/database/tableinterface.json")
    
    var valueList =data.filter((s: any) => s.relevance)
    var include:any = []
    if(tableinterface[name] && tableinterface[name].relevance){
        tableinterface[name].relevance.map(s =>{
            include.push(...s.relevance)
        })
    }
    var toName = name.replace(name[0], (v: any) => { return v.toUpperCase() }) //首字母大写
    addOrm.map((s: any) => {
        if (s.null) {
            list.push({ name: s.name, test: "" })
        }
    })
    // data
    var template = `
var model = require('../models/index.js')
class Service{
    constructor(){
    }
	 emptyData(msg){
		Object.keys(msg).map(s => {
			if (msg[s] === '' || msg[s] === undefined) {
				delete msg[s]
			}
		})
		return msg
	}
    verify (test,val){
        for(var item in test){
            if(!val[test[item].name]){
                return test[item].name + "为空"
            }
        }
    }
    // 新增数据
    async add(req,res){
        var data = {}
        try {
                // 生成验证规则 name验证字段 test为正则 空验证匹配空数据
                var testList = [
                    ${list.length ? JSON.stringify(list) : ''}
                ]
                var verification = this.verify(testList,req.body)
                if(!verification){
                    var msg = { ${addOrm.map((s: any) => {
                        return `
                        ${s.name}:req.body.${s.name}`
                    })} 
                    }
                    
                    msg = this.emptyData(msg)
                    ${relevanceJson.fakef ? `msg.${relevanceJson.fakef}="${relevanceJson.deleteValue}"` : ''}
                    await model.${name}.create(msg).then((s) => {
                        data = {
                            status: 200,
                            data: s[0]
                        }
                    })
                }else{
                    data = {
                        status: 201,
                        data: verification
                    }
                }
        } catch (error) {
			console.log(error)
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return data
    }
    // 查询表所有数据
    async queryList(req,res){
        var data = {}
        try {
            var {pageSize,page} = req.body
            var where = {}
            var item = ''
            ${relevanceJson.fakef ? `where.${relevanceJson.fakef}="${relevanceJson.deleteValue}"` : ''}
            if(pageSize && page){
                item = await model.${name}.findAndCountAll({ where: where,limit:Number(pageSize), offset:(page - 1) * pageSize })
            }else{
                item = await model.${name}.findAll({ where: where })
            }
            data = {
                status: 200,
                data: item
            }
            
        } catch (error) {
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return {
            data
        }
    }
    async update(req,res){
        var data = {}
        try {
           var update = { ${addOrm.map((s: any) => {
                return `
                ${s.name}:req.body.${s.name}`
                })} 
            }
           update = this.emptyData(update)
                
           ${relevanceJson.fakef ? `update.${relevanceJson.fakef}="${relevanceJson.deleteValue}"` : ''}
                var item = await model.${name}.update(update,{
                    where: {
                        id:req.body.id
                    }
                })
                data = {
                    status: 200,
                    data: '修改成功'
                }
        } catch (error) {
			console.log(error)
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return data
    }
    async delete(req,res){
        var data = {}
        var deleteJson = { ${addOrm.map((s: any) => {
            return `
            ${s.name}:req.body["${s.name}"]`
        })} 
        }
        try {
            ${relevanceJson.fakef ? `deleteJson.${relevanceJson.fakef}="${relevanceJson.deleteValue}"` : ''}
            await model.${name}.update({
                ${relevanceJson.fakef}:"${relevanceJson.deleteValue}"
            },{
                where:deleteJson
            }).then((s) => {
                data = {
                    status: 200,
                    data: '删除成功'
                }
            })
        } catch (error) {
			console.log(error)
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return data
    }
    async query(req,res){
        var data = {}
        try {
            var where = { ${addOrm.map((s: any) => {
                return `
                ${s.name}:req.body.${s.name}`
                })} 
            }
            // 删除无用的数据
            where = this.emptyData(where)
            var item;
            ${relevanceJson.fakef ? `where.${relevanceJson.fakef}="${relevanceJson.deleteValue}"` : ''}
            if(req.body.page && req.body.pageSize){
                item = await model.${name}.findAndCountAll({
                    limit:Number(req.body.pageSize),
                    offset:(req.body.page - 1) * req.body.pageSize,
                    where${include.length === 0 ? '' : ','}
                    ${(function(){
                        if(include.length === 0){
                            return ''
                        }else{
                            var v:any = []
                            include.map(s =>{
                                v.push(`{
                                 model:model.${s.elevanceName}
                              }`)  
                              })
                              var v = v
                              return `include:[
                              ${v}
                            ]`
                        }
                    })()}
                })
            }else{
                item = await model.${name}.findAll({
                    where${include.length === 0 ? '' : ','}
                    ${(function(){
                        if(include.length === 0){
                            return ''
                        }else{
                            var v:any = []
                            include.map(s =>{
                                v.push(`{
                                 model:model.${s.elevanceName}
                              }`)  
                              })
                              var v = v
                              return `include:[
                              ${v}
                            ]`
                        }
                    })()}
                })
            }
             
            data = {
                status: 200,
                data: item
            }
        } catch (error) {
			console.log(error)
            data = {
                status: 500,
                data: '未知错误'
            }
        }
        return  data
    }
}
module.exports = Service 
    `
    return template
}
module.exports = render 