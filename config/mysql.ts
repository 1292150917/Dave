/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 21:31:09
 */
const mysql = require('mysql')
var config = require('./index')
//链接数据库
interface Querys {
    sql?: any,
    values?: any,
    res?: any
}
const pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    connectionLimit: config.connectionLimit,
    password: config.password,
    database: config.database,
    timezone: config.timezone
})
var querys: any = function ({ sql, values, res }: Querys) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err: any, connection: any) {
            if (err) {
                res.send({
                    status: 201,
                    msg: err.sqlMessage
                })
                return
            }
            connection.query(sql, values, function (err: any, results: any, fields: any) {
                if (err) {
                    reject(err)
                    res.send({
                        status: 201,
                        msg: err.sqlMessage,
                        err
                    })
                } else {
                    resolve(results)
                }
                connection.release();
            });
        });
    })
}
module.exports = querys