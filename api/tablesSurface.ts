/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-12-01 14:36:37
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\tablesSurface.ts
 */
"use strict"
var unity = require('../config/part_unity')
var path = require('path')
var fs = require('fs')
function cv(v: any) {
    return path.resolve(__dirname, v)
}
class tablesSurface extends unity {
    constructor(req?: any, res?: any) {
        super(req, res);
        this.go()
    }
    async go() {
        try {
            var { res, req } = this
            var query = require('../config/mysql')(global.webpageView ? req.cookies : '')
            var tables = await query({ sql: "show full tables", res })
            var jsoncurd = {}
            if (global.webpageView) {
                jsoncurd = req.cookies.index
            } else {
                jsoncurd = fs.readFileSync(cv('../config/index.json'), "utf-8")
            }
            jsoncurd = JSON.parse(jsoncurd)
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
            var list: any = []
            var json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8")
            var tableinterface = fs.readFileSync(cv('../DaveFile/database/tableinterface.json'), "utf-8")
            tableinterface = JSON.parse(tableinterface)
            json = JSON.parse(json)
            var { database } = this
            var jsonRender: any = {}
            if (!req.query.name) {
                for (var index in tables) {
                    var name = tables[index][`Tables_in_${database}`]
                    if (!json[name] || req.query.update) {
                        await query({ sql: `show full columns from ${name}`, res }).then(item => {
                            item.filter((s: any) => {
                                if (s.Extra === "auto_increment") {
                                    s.querylist = true
                                    s.update = true;
                                    s.query = true;
                                    s.inquirywayvalue = "=";
                                    s.add = false;
                                    s.delete = true;
                                    return;
                                } else {
                                    s.attribute = s.Field;
                                    s.add = true;
                                    s.querylist = true;
                                    s.inquirywayvalue = "=";
                                    s.update = true;
                                    s.query = true;
                                }
                                return s;
                            });
                            jsonRender[name] = item
                        })
                    } else {
                        jsonRender[name] = json[name]
                    }
                    list.push({
                        name: name,
                        index: index
                    })
                }
            } else {
                var { name } = req.query
                await query({ sql: `show full columns from ${name}`, res }).then(item => {
                    item.filter((s: any) => {
                        if (s.Extra === "auto_increment") {
                            s.querylist = true
                            s.update = true;
                            s.query = true;
                            s.inquirywayvalue = "=";
                            s.add = false;
                            s.delete = true;
                            return;
                        } else {
                            s.attribute = s.Field;
                            s.add = true;
                            s.querylist = true;
                            s.inquirywayvalue = "=";
                            s.update = true;
                            s.query = true;
                        }
                        return s;
                    });
                    jsonRender[name] = item
                    list.push({
                        name: name,
                        index: '0'
                    })
                })
            }

            if (!global.webpageView) {
                fs.writeFileSync(cv('../DaveFile/database/watch.json'), JSON.stringify(jsonRender))
            }
            list.forEach(s => {
                s.tableinterface = tableinterface[s.name]
                s.msg = created.filter(v => v.TABLE_NAME === s.name)[0]
            })
            res.send({
                status: 200,
                data: list,
                jsonRender
            })
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = (req: any, res: any) => new tablesSurface(req, res)