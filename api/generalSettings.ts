/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-11-27 10:06:16
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
        var query = require('../config/mysql')(global.webpageView ? req.cookies : '');
        try {
            if (req.query.type === 'query') {
                if (!global.webpageView) {
                    var relevance = require('../DaveFile/database/relevance.json')
                    res.send({
                        status: 200,
                        data: relevance
                    })
                    return
                } else {
                    return res.send({
                        status: 200,
                        data: req.cookies.relevance ? JSON.parse(req.cookies.relevance) : ''
                    })
                }
            }
            var relevance = require('../DaveFile/database/relevance.json')
            Object.keys(req.query).map((s: any) => {
                relevance[s] = req.query[s]
            })

            if (!global.webpageView) {
                fs.writeFileSync(cv('../DaveFile/database/relevance.json'), JSON.stringify(relevance))
            } else {
                function getData(days) {
                    var date1 = new Date()
                    var date2 = new Date(date1);
                    date2.setDate(date1.getDate() + days);
                    return date2
                }
                res.cookie('relevance', JSON.stringify(relevance), {
                    expires: getData(7)
                })
            }
            res.send({
                status: 200
            })
        } catch (error) {

            console.log(error)
        }
    }
}
module.exports = (req: any, res: any) => new alterUpdate(req, res)