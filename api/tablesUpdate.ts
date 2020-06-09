/*
 * @Author: your name
 * @Date: 2020-06-09 19:16:03
 * @LastEditTime: 2020-06-09 19:16:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\code-generation\api\tablesUpdate.ts
 */
/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-06-09 19:11:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\tablesSurface.ts
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
class tablesSurface extends unity {
    constructor(req?: any, res?: any) {
        super(req, res);
        this.go()
    }
    async go() {
        var { res, req } = this
        var { yuanName, name } = req.query
        var tables = await query({ sql: `rename table ${yuanName} to ${name}`, res })
        var key = {}
        res.send({
            status: 200
        })
    }
}
module.exports = (req: any, res: any) => new tablesSurface(req, res)