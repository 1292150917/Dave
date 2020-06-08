/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-07 16:37:11
 */
const mysql = require('mysql')
//链接数据库
const pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    connectionLimit: 10,
    password: "123456",
    database: "test",
    timezone: "08:00"
})
interface Querys {
    sql?: any,
    values?: any,
    res?: any
}
var querys: any = function ({ sql, values, res }: Querys) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err: any, connection: any) {
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