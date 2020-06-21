/*
 * @Author: your name
 * @Date: 2020-06-21 11:11:30
 * @LastEditTime: 2020-06-21 14:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodee:\nodeT\Dave\api\advanced.ts
 */
"use strict"

var express = require("express");
var router = express.Router();
var unity = require('../config/part_unity')
var query = require('../config/mysql');
var fs = require('fs')
var path = require('path')
interface Callback {
    status: number,
    msg?: "",
    data?: object | string
}
function cv(v: any) {
    return path.resolve(__dirname, v)
}
router.post('/relevance', async function (req: req, res: res) {
    var data = {}
    var fsreadd = fs.readdirSync(cv(req.body['catalogue']))
    if (fsreadd.join('').includes('package.json')) {
        var json = fs.readFileSync(cv('../DaveFile/database/relevance.json'), "utf-8")
        json = JSON.parse(json)
        json["catalogue"] = req.body['catalogue']
        fs.writeFileSync(cv('../DaveFile/database/relevance.json'), JSON.stringify(json))
        data = {
            data: '已经成功关联',
            status: 200
        }
    } else {
        data = {
            msg: '请选择正确的关联目录',
            status: 201
        }
    }
    res.send(data)
})
router.post('/connectorget', async function (req: req, res: res) {
    var data = {}
    var json = fs.readFileSync(cv('../DaveFile/database/relevance.json'), "utf-8")
    json = JSON.parse(json)
    if (!json["catalogue"]) {
        data = {
            msg: '请先确定代码目录',
            status: 201
        }
    } else {
        var file = path.resolve(json["catalogue"], 'controller')
        var fsreadd = fs.readdirSync(file)
        var list = []
        fsreadd.map(s => {
            var content = fs.readFileSync(file + '/' + s, 'utf-8');
            content.split("/**").map(v => {
                if (v && v.includes('@api')) {
                    var [v1, v2] = v.split('*/')
                    var msg = {
                        method:v1.match(/\{(.+?)\}/)[1],
                        url:v1.match(/\/(.+?) /)[1],
                        name:v1.match(/ (.+?)[\n]/g)[0].split(' ')[5],
                    }
                    list.push(msg)
                }
            })
        })
        data = { status: 200, data: list }
        res.send(data)
    }
})
module.exports = router