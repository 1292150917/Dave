/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-07-05 20:33:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\alterDelete.ts
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
class alterDelete extends unity {
    constructor(req?: any, res?: any) {
        super(req, res);
        this.go()
    }
    async go() {
        var { res, req } = this

        var query = require('../config/mysql')(global.webpageView ? req.cookies : '');
        var { surface, Field, Type } = req.query
        var tables = await query({ sql: `ALTER table ${surface} DROP COLUMN ${Field}`, res })
        var key = {}
        res.send({
            status: 200
        })
    }
}
module.exports = (req: any, res: any) => new alterDelete(req, res)