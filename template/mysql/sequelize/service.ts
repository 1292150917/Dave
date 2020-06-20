
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
var Sequelize = require("Sequelize");
var db = require('../config/db.js')
var ${name} = require('../models/${name}.js')
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
    async add(req,res){
        let { ${addOrm.map((s: any) => {
        return ` ${s.name} `
    })} } = req.body
        var data = {}
        var msg = {
            id:0
        }
        // 生成验证规则 name验证字段 test为正则 空验证匹配空数据
        var testList = [
            ${list.length ? JSON.stringify(list) : ''}
        ]
        var verification = this.verify(testList,req.body)
        if(!verification){
            ${addOrm.map((s: any) => {
                return `
                req.body["${s.name}"] ? msg["${s.name}"] = req.body["${s.name}"] : ''`
            }).join('')}
            await ${name}.create(msg).then((s) => {
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
        return data
    }
    // 查询表所有数据
    async queryList(req,res){
        var data = {}
        var item = await ${name}.findAll({ where: {} })
        data = {
            status: 200,
            data: item
        }
        return {
            data
        }
    }
    async update(req,res){
        var update = {}
        ${updateOrm.map((s: any) => {
            return `
            req.body["${s.name}"] ? update["${s.name}"] = req.body["${s.name}"] : ''`
        }).join('')}
        
        var item = await ${name}.update(update,{
            where: {
                id:req.body.id
            }
        })
        return {
            status: 200,
            data: '修改成功'
        }
    }
    async delete(req,res){
        var data = {}
        ${deleteOrm.length != 0 ? (function () {
            return (`if(${deleteOrm.map((s: any, i: number) => { return `!req.body["${s.name}"] ${i !== deleteOrm.length - 1 ? '&& ' : ''}` }).join('')}){
                data = {
                    status: 201,
                    data: '缺少主要参数'
                }
                return
            }
            await ${name}.destroy({
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
        return data
        
    }
    async query(req,res){
        var where = {}
        ${addOrm.map((s: any) => {
            return `
            req.body["${s.name}"] ? where["${s.name}"] = req.body["${s.name}"] : ''`
        }).join('')}
        
        var item = await ${name}.findAll({
            where
        })
        return  {
            status: 200,
            data: item
        }
    }
}
module.exports = Service 
    `
    return template
}
module.exports = render 