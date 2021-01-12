/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-06-18 20:53:22
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
class tablesListPage extends unity {
    constructor(req?: any, res?: any) {
        super(req, res);
        this.go()
    }
    async go() {
        var { res, req } = this
        var query = require('../config/mysql')(global.webpageView ? req.cookies : '');
        var { describe, name, describe } = req.query
        var sql = `create table ${name} (
            id int (11) NOT NULL PRIMARY KEY AUTO_INCREMENT
        )`
        await query({ sql: sql, res })

        await query({ sql: `alter table ${name} comment '${describe}';`, res })
        res.send({
            status: 200
        })
    }
}
module.exports = (req: any, res: any) => new tablesListPage(req, res)