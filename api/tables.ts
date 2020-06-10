/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-06-09 19:21:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\tablesListPage.ts
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-11-15 10:37:50
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-03 13:59:08
 */
"use strict"
var unity = require('../config/part_unity')
var query = require('../config/mysql');
class tablesListPage extends unity {
    constructor(req?: any, res?: any) {
        super(req, res);
        this.go()
    }
    async go() {
        var { res, req } = this
        var tables = await query({ sql: "show tables", res })
        var key = {}
        var name = "test"
        for (var v in tables) {
            key[tables[v][`Tables_in_${name}`]] = await query({ sql: `show full columns from ${tables[v][`Tables_in_${name}`]}`, res })
        }
        res.send({
            status: 200,
            data: key
        })
    }
}
module.exports = (req: any, res: any) => new tablesListPage(req, res)