"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author:
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 21:31:09
 */
var mysql = require('mysql');
var config = require('./index');
var pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    connectionLimit: config.connectionLimit,
    password: config.password,
    database: config.database,
    timezone: config.timezone
});
var querys = function (_a) {
    var sql = _a.sql, values = _a.values, res = _a.res;
    // 返回一个 Promise
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                res.send({
                    status: 201,
                    msg: err.sqlMessage
                });
                return;
            }
            connection.query(sql, values, function (err, results, fields) {
                if (err) {
                    reject(err);
                    res.send({
                        status: 201,
                        msg: err.sqlMessage,
                        err: err
                    });
                }
                else {
                    resolve(results);
                }
                connection.release();
            });
        });
    });
};
module.exports = querys;
