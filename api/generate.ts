/*
 * @Author: your name
 * @Date: 2020-06-15 20:18:08
 * @LastEditTime: 2020-12-03 13:28:06
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\code-generation\api\generate.ts
 */
"use strict"

var express = require("express");
var router = express.Router();
var unity = require('../config/part_unity')
var path = require('path')
var fs = require('fs')
var SequelizeAuto = require('sequelize-auto')
interface Callback {
    status: number,
    msg?: "",
    data?: object | string
}
function cv(v: any) {
    return path.resolve(__dirname, v)
}
unity = new unity()
function fileDisplay(url: any, list: any, name: any) {
    var fsreadd = fs.readdirSync(cv(url))
    for (let i in fsreadd) {
        var item = fsreadd[i]
        var filedir = url + '/' + item
        if (!fs.statSync(filedir).isDirectory()) {
            // 读取文件内容
            var content = fs.readFileSync(filedir, 'utf-8');
            list.push({
                msg: content,
                name: name ? name + '/' + item : item
            })
        } else {
            fileDisplay(filedir, list, name ? name + '/' + item : item);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    }
    return list
}
async function createHtml(req: any, res: any) {
    var query = require('../config/mysql')(global.webpageView ? req.cookies : '');
    interface ReqBody {
        name: any,
        ORM: string,
        download: string
    }
    var json = ""
    var create = require(cv('../template/mysql/sequelize/controller'))
    var jsoncurd = {}
    if (global.webpageView) {
        json = JSON.stringify(req.body.jsonRender)
        jsoncurd = req.cookies.index
    } else {
        json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8")
        jsoncurd = fs.readFileSync(cv('../config/index.json'), "utf-8")
    }
    jsoncurd = JSON.parse(jsoncurd)
    json = JSON.parse(json)
    var { name, ORM, download }: ReqBody = req.body
    var data: any = []
    var auto = new SequelizeAuto(jsoncurd.database, jsoncurd.user, jsoncurd.password, {
        host: jsoncurd.host,
        dialect: jsoncurd.type,
        directory: false,
        port: jsoncurd.port,
        camelCaseFileName: true,
        additional: {
            timestamps: false
        },
        tables: name
    })
    var tables: any = []
    await new Promise(s => {
        auto.run(async function (err) {
            if (err) throw err;
            tables = auto.tables
            s(true)
        });
    })
    // 获取表注释
    var created = await query({
        sql: `SELECT
            TABLE_NAME,
            TABLE_COMMENT,
            TABLE_ROWS,
            CREATE_TIME,
            UPDATE_TIME
            FROM
                information_schema.TABLES
            WHERE
            table_schema = '${jsoncurd.database}'`, res
    })
    var vname: any = {}
    created.map((v: any) => {
        vname[v.TABLE_NAME] = v
    })
    for (var index in name) {
        var addOrm: any = [] //可新增的字段
        var updateOrm: any = [] //可更新字段
        var deleteOrm: any = [] //可删除字段
        var queryOrm: any = [] //可查询字段
        if (ORM === 'sequelize') {
            json[name[index]].map((s: any) => {
                if (s.add) {
                    addOrm.push({
                        name: s.Field,
                        null: s.required,
                        item: s
                    })
                }
                if (s.update) {
                    updateOrm.push({
                        name: s.Field,
                        item: s
                    })
                }
                if (s.delete) {
                    deleteOrm.push({
                        name: s.Field,
                        item: s
                    })
                }
                if (s.query) {
                    queryOrm.push({
                        name: s.Field,
                        item: s
                    })
                }
            })
            // curd
            data.push({
                name: `controller/${name[index]}.js`,
                msg: create({ addOrm, name: name[index], vname: vname[name[index]] })
            })
            data.push({
                name: `service/${name[index]}.js`,
                msg: require(cv('../template/mysql/sequelize/service'))({ addOrm, name: name[index], data: json[name[index]], updateOrm, deleteOrm, queryOrm })
            })
            data.push({
                name: `models/${name[index]}.js`,
                msg: require(cv('../template/mysql/sequelize/models'))({ server: json[name[index]], name: name[index], model: tables[name[index]] })
            })
        }

    }

    data.push({
        name: "config/db.js",
        msg: require(cv('../template/mysql/sequelize/db'))({ db: jsoncurd })
    })
    data.push({
        name: `models/index.js`,
        msg: require(cv('../template/mysql/sequelize/indexmodels'))({ name: name, model: json })
    })
    if (download) {
        data.push(...fileDisplay(cv('../template/mysql/sequelize/app'), [], ''))
    }
    if (!download) {
        data.push({
            name: `models/${name[index]}.vue`,
            msg: require(cv('../template/views/crud'))({ server: json[name[index]], name: name[index], model: tables[name[index]], body: req.body })
        })
    }

    res.send({
        status: 200,
        msg: data
    })
}
router.post('/create', async function (req: any, res: any) {
    createHtml(req, res)
})
router.post('/query', async function (req: any, res: any) {
    interface ReqBody {
        name: string
    }
    var json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8")
    json = JSON.parse(json)
    var { name }: ReqBody = req.body
    res.send({
        status: 200,
        data: json[name] ? json[name] : []
    })
})
router.post('/json', async function (req: any, res: any) {
    interface ReqBody {
        name: string,
        datalist: any,
        tabledescribes: any
    }
    var tableinterface = fs.readFileSync(cv('../DaveFile/database/tableinterface.json'), "utf-8")
    var json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8")
    json = JSON.parse(json)
    tableinterface = JSON.parse(tableinterface)
    var { name, datalist, tabledescribes }: ReqBody = req.body
    json[name] = req.body.datalist
    tableinterface[name] ? tableinterface[name].name = tabledescribes : tableinterface[name] = { name: tabledescribes }
    tableinterface[name].relevance = []
    datalist.map(s => {
        if (s.relevance) {
            tableinterface[name].relevance.push({
                name: s.Field,
                relevance: s.relevance
            })
        }
    })
    fs.writeFileSync(cv('../DaveFile/database/watch.json'), JSON.stringify(json))
    fs.writeFileSync(cv('../DaveFile/database/tableinterface.json'), JSON.stringify(tableinterface))
    res.send({
        status: 200,
        data: '保存成功'
    })
})
router.post('/create', async function (req: any, res: any) {
    var json = fs.readFileSync(cv("../config/index.json"), "utf-8")
    json = JSON.parse(json)
    Object.keys(req.query).map(s => {
        json[s] = req.query[s]
    })
    fs.writeFileSync(cv('../config/index.json'), JSON.stringify(json))
    // 创建数据库
    if (req.query.create) {
        db = mysql.createConnection({
            host: req.query.host,
            port: req.query.port,
            user: req.query.user,
            password: req.query.password,
        })
        let sql = `CREATE DATABASE ${req.query.database}`
        db.query(sql, (err: any, result: any) => {
            if (err) {
                res.send({
                    status: 200,
                    msg: "链接错误！",
                    msgData: err
                })
            }
        })
        res.send({
            status: 200,
        })
        return
    } else {
        var db = mysql.createConnection({
            host: req.query.host,
            port: req.query.port,
            user: req.query.user,
            password: req.query.password,
            database: req.query.database,
        })
        db.connect((err: any) => {
            if (err) {
                res.send({
                    status: 200,
                    msg: "链接错误！",
                    msgData: err
                })
                return
            }
            res.send({
                status: 200,
            })
        })
    }
})
module.exports = router