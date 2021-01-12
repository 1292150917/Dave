/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-11-24 21:18:15
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
        try {
            var { surface, Field, Type, Comment, Null, Extra, yuanKey, Default, yuanExtra, Key, yuanField } = req.query
            var sql = `ALTER table ${surface} ADD ${Field} ${Type}`
            if (Comment) {
                sql += ` COMMENT "${Comment}"`
            }
            if (Default && Key != 'true') {
                sql += ` Default "${Default}"`
            }
            if (Null === 'true') {
                // key是否为主键
                sql += ` NOT NULL`
            } else {
                sql += ' NULL'
            }

            if (Key === 'true') {
                if (yuanKey) {
                    if (yuanExtra === 'auto_increment') {
                        // 取消当前主键
                        await query({ sql: `alter table ${surface} modify ${yuanKey} int`, res })
                    }
                    // 取消自动递增
                    await query({ sql: `alter table ${surface} DROP primary key`, res })
                }
                // 设置主键
                sql += ' primary key'
            }

            if (Null === 'true' && Extra === 'true') {
                sql += ' auto_increment'
            }
            var tables = await query({ sql: sql, res })
            res.send({
                status: 200
            })
        } catch (error) {

        }
    }
}
module.exports = (req: any, res: any) => new tablesListPage(req, res)