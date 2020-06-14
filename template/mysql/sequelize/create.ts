import { json } from "express"

/*
 * @Author: your name
 * @Date: 2020-06-14 16:46:44
 * @LastEditTime: 2020-06-14 22:15:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\code-generation\template\mysql\sequelize\create.ts
 */
interface Render {
    addOrm: any //新增字段
}
var render = function ({ addOrm }: Render) {
    // 生成验证规则
    var list:any = []
    addOrm.map((s: any) => {
        if (s.null) {
            list.push({ name: s.name, test: "" })
        }
    })
    var template = `
var express = require('express');
var router = express.Router();
var username = require('../models/username.js').username
function verify (test,val){
    for(var item from test){
        if(!val[test[item].name]){
            return test[item].name + "为空"
        }
    }
}
router.post('/add', function (req, res, next) {
    let { ${addOrm.map((s: any) => {
        return ` ${s.name} `
    })} } = req.body
    // 生成验证规则 name验证字段 test为正则 空验证匹配空数据
    var testList = [
        ${JSON.stringify(list)}
    ]
    var verification = this.verify(testList,req.body)
    if(!verification){
        username.findAll({
            where: {
                ${addOrm.map((s: any) => {
        return ` ${s.name} `
    })}
            }
        }).then((s) => {
            res.send({
                status: 200,
                data: s[0]
            })
        })
    }else{
        res.send({
            status: 201,
            data: verification
        })
        
    }
});
    `
    return template
}
module.exports = render 