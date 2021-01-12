/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-11-25 09:25:03
 */
const mysql = require('mysql')
var config = require('./index')
//链接数据库
interface Querys {
    sql?: any,
    values?: any,
    res?: any
}
function init(res) {
    var craMy = {}
    if (!res) {
        craMy = {
            host: config.host,
            port: config.port,
            user: config.user,
            connectionLimit: config.connectionLimit,
            password: config.password,
            database: config.database,
            timezone: config.timezone
        }
    }else{
        craMy = {
            host: JSON.parse(res.index).host,
            port: JSON.parse(res.index).port,
            user: JSON.parse(res.index).user,
            connectionLimit: JSON.parse(res.index).connectionLimit,
            password: JSON.parse(res.index).password,
            database: JSON.parse(res.index).database,
            timezone: JSON.parse(res.index).timezone
        }
    }
    const pool = mysql.createPool(craMy)
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
    return querys
}
module.exports = init