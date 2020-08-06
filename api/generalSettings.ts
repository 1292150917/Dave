/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-08-06 16:46:27
 * @LastEditors: zhang zi fang
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
var fs = require('fs')
var path = require('path')
function cv(v: any) {
    return path.resolve(__dirname, v)
}

class alterUpdate extends unity {
    constructor(req?: any, res?: any) {
        super(req, res);
        this.go()
    }
    async go() {
        var { res, req } = this
        try {
            if(req.query.type === 'query'){
                var relevance = require('../DaveFile/database/relevance.json')
                res.send({
                    status: 200,
                    data:relevance
                })
                return
            }
            var relevance = require('../DaveFile/database/relevance.json')
            Object.keys(req.query).map((s:any) =>{
                relevance[s] = req.query[s]
            })
            fs.writeFileSync(cv('../DaveFile/database/relevance.json'), JSON.stringify(relevance))
            res.send({
                status: 200
            })
        } catch (error) {

            console.log(error)
        }
    }
}
module.exports = (req: any, res: any) => new alterUpdate(req, res)