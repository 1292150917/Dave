/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: 
 * @LastEditTime: 2019-10-31 16:19:05
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
var querys:any = function (sql: any, values?: any) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err: any, connection: any) {
            if (err) throw err;
            connection.query(sql, values, function (err: any, results: any, fields: any) {
                if (err) {
                    reject(err)
                }
                resolve(results)
                connection.release();
                if (err) throw err;
            });
        });
    })
}
module.exports = querys