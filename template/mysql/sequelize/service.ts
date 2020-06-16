
interface Render {
    addOrm: any, //新增字段
    name: any,
    data: any,
    updateOrm: any,
    deleteOrm: any
}
var render = function ({ addOrm, name, updateOrm, deleteOrm }: Render) {
    // 生成验证规则
    var list: any = []
    var toName = name.replace(name[0], (v: any) => { return v.toUpperCase() }) //首字母大写
    addOrm.map((s: any) => {
        if (s.null) {
            list.push({ name: s.name, test: "" })
        }
    })
    // data
    var template = `
var express = require('express');
var router = express.Router();
var ${name} = require('../models/${name}.js').${name}
class Service{
    constructor(){
    }
    verify (test,val){
        for(var item in test){
            if(!val[test[item].name]){
                return test[item].name + "为空"
            }
        }
    }
    // 新增数据
    add(req,res){
        let { ${addOrm.map((s: any) => {
        return ` ${s.name} `
    })} } = req.body
        var data = {}
        // 生成验证规则 name验证字段 test为正则 空验证匹配空数据
        var testList = [
            ${list.length ? JSON.stringify(list) : ''}
        ]
        var verification = this.verify(testList,req.body)
        if(!verification){
            ${name}.findAll({
                where: {
                    ${addOrm.map((s: any) => {
        return ` ${s.name} `
    })}
                }
            }).then((s) => {
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
    }
    // 查询表所有数据
    queryList(req,res){
        ${name}.findAll({
            where: {

            }
        }).then((s) => {
            data = {
                status: 200,
                data: s[0]
            }
        })
    }
    update(req,res){
        ${name}.update({${updateOrm.map((s: any) => {
        return `
                ${s.name}:req.body["${s.name}"]`
    })}
        },{
            where: {
                id:req.body.id
            }
        }).then((s) => {
            data = {
                status: 200,
                data: s[0]
            }
        })
    }
    delete(req,res){
        ${deleteOrm.length != 0 ? (function () {
            return (`if(${deleteOrm.map((s: any, i: number) => { return `!req.body["${s.name}"] ${i !== deleteOrm.length - 1 ? '&& ' : ''}` }).join('')}){
                data = {
                    status: 201,
                    data: '缺少主要参数'
                }
                return
            }
            ${name}.destroy({
                where: {${deleteOrm.map((s: any) => {
                return `
                     ${s.name}:req.body["${s.name}"]`
            })}
                }
            }).then((s) => {
                data = {
                    status: 200,
                    data: '删除成功'
                }
            })`)
        }()) : ''}
        
    }
    query(req,res){
        ${name}.findAll({
            where: {${updateOrm.map((s: any) => {
            return `
                 ${s.name}:req.body["${s.name}"]`
        })}
            }
        }).then((s) => {
            data = {
                status: 200,
                data: s[0]
            }
        })
    }
}
module.exports = Service 
    `
    return template
}
module.exports = render 