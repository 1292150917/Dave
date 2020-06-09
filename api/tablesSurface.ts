/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-06-09 22:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\tablesSurface.ts
 */
"use strict"
var unity = require('../config/part_unity')
class tablesSurface extends unity {
    constructor(req?: any, res?: any) {
        super(req, res);
        this.go()
    }
    async go() {
        var { res, req } = this
        var query = require('../config/mysql');
        var tables = await query({ sql: "show full tables",res })
        var list = []
        var name = "test"
        tables.forEach((s, i) => {
            list.push({
                name: s[`Tables_in_${name}`],
                index: i
            })
        })
        res.send({
            status: 200,
            data: list
        })
    }
}
module.exports = (req: any, res: any) => new tablesSurface(req, res)