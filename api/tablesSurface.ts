/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-06-17 23:05:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\tablesSurface.ts
 */
"use strict"
var unity = require('../config/part_unity')
var path = require('path')
var query = require('../config/mysql');
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
        var { res, req } = this
        var query = require('../config/mysql');
        var tables = await query({ sql: "show full tables", res })
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
        table_schema = 'test'`, res
        })
        var list = []
        var json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8")
        json = JSON.parse(json)
        var { database } = this
        tables.forEach((s, i) => {
            // 模型不存在的指定初始化模型
            var name = s[`Tables_in_${database}`]
            if (!json[name]) {
                query({ sql: `show full columns from ${name}` }).then(item => {
                    item.filter(s => {
                        if (s.Extra === "auto_increment") {
                            return;
                        }
                        s.attribute = s.Field;
                        s.add = true;
                        s.querylist = true;
                        s.inquirywayvalue = "=";
                        s.update = true;
                        s.query = true;
                        return s;
                    });
                    json[name] = item
                    fs.writeFileSync(cv('../DaveFile/database/watch.json'), JSON.stringify(json))
                })
            }
            list.push({
                name: name,
                index: i
            })
        })
        list.forEach(s =>{
            s.msg = created.filter(v =>v.TABLE_NAME === s.name)[0]
        })
        res.send({
            status: 200,
            data: list
        })
    }
}
module.exports = (req: any, res: any) => new tablesSurface(req, res)