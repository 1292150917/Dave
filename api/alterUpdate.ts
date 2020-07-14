/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-06-09 19:21:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\alterUpdate.ts
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
class alterUpdate extends unity {
    constructor(req?: any, res?: any) {
        super(req, res);
        this.go()
    }
    async go() {
        var { res, req } = this
        try {
            var { surface, Field, Type, yuanField, Comment, Default, Null, Key, yuanKey, Extra, yuanExtra } = req.query
            var notNull = ''
            if (Null === 'true') {
                // key是否为主键
                notNull = `NOT NULL ${Extra === 'true' ? 'auto_increment' : ''}`
            } else {
                notNull = 'NULL'
            }
            // 判断原主键是否为现在的组件 
            if (yuanKey === Field) {
                // 如果当前组件为选中状态 再次为取消
                if (Key === "false") {
                    if (yuanExtra === 'auto_increment') {
                        // 取消当前主键
                        await query({ sql: `alter table ${surface} modify ${Field} int`, res })
                    }
                    // 删除主键
                    await query({ sql: `alter table ${surface} DROP primary key`, res })
                }
            } else {
                if (Key === 'true') {
                    if (yuanKey) {
                        if (yuanExtra === 'auto_increment') {
                            // 取消当前主键
                            await query({ sql: `alter table ${surface} modify ${yuanKey} int`, res })
                        }
                        await query({ sql: `alter table ${surface} DROP primary key`, res })
                    }
                    // 设置主键
                    await query({ sql: `alter table ${surface} add primary key (${yuanField})`, res })
                }
            }
            var sql = `ALTER table ${surface} change ${yuanField} ${Field} ${Type} COMMENT "${Comment}" ${(function () {
                // 默认子递增函数
                return Key === 'true' ? '' : `Default "${Default}"`
            })()} ${notNull}`
            var tables = await query({ sql: sql, res })
            var key = {}
            res.send({
                status: 200
            })
        } catch (error) {
    
        }
    }
}
module.exports = (req: any, res: any) => new alterUpdate(req, res)