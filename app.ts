/*
 * @Descripttion:
 * @version:
 * @Author: Zhang Zi Fang
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 23:24:18
 */
import express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql')
const app: express.Application = express();
var monitoring = require('./DaveFile/monitoring.json')
var log4js = require('log4js');
var path = require('path')
var fs = require('fs')
var logger = log4js.getLogger();
logger.level = 'info'; // default level is OFF - which means no logs at all.
logger.info('Log from default logger');
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('*', function (req, res, next) {
	var json = fs.readFileSync('./config/index.json', "utf-8")
	json = JSON.parse(json)
	if (!json.host && !req.query.host) {
		res.send({ status: 201, msg: "请先链接数据库" })
	} else {
		next()
	}
})

// 数据库链接
app.get('/database/create', async function (req, res) {
	var json = fs.readFileSync('./config/index.json', "utf-8")
	json = JSON.parse(json)
	Object.keys(req.query).map(s => {
		json[s] = req.query[s]
	})
	fs.writeFileSync('./config/index.json', JSON.stringify(json))
	// 创建数据库
	if (req.query.create) {
		db = mysql.createConnection({
			host: req.query.host,
			port: req.query.port,
			user: req.query.user,
			password: req.query.password,
		})
		let sql = `CREATE DATABASE ${req.query.database}`
		db.query(sql, (err: any, result: any) => {
			if (err) {
				res.send({
					status: 200,
					msg: "链接错误！",
					msgData: err
				})
			}
		})
		res.send({
			status: 200,
		})
		return
	} else {
		var db = mysql.createConnection({
			host: req.query.host,
			port: req.query.port,
			user: req.query.user,
			password: req.query.password,
			database: req.query.database,
		})
		db.connect((err: any) => {
			if (err) {
				res.send({
					status: 200,
					msg: "链接错误！",
					msgData: err
				})
				return
			}
			res.send({
				status: 200,
			})
		})
	}
})

// 获取所有数据结构
app.get('/tables', require('./api/tables'))

// 获取所有数据结构
app.use('/surface/curd', require('./api/curd'))

app.get('/tables/surface', require('./api/tablesSurface'))
// 获取表数据
app.get('/tables/listPage', require('./api/tablesListPage'))
// 修改表名字
app.get('/tables/update', require('./api/tablesUpdate'))
// 新增表
app.get('/tables/add', require('./api/tablesAdd'))
// 删除
app.get('/tables/delete', require('./api/tablesdelete'))
// 新增表字段
app.get('/alter/add', require('./api/alterAdd'))
app.get('/alter/update', require('./api/alterUpdate'))
app.get('/alter/delete', require('./api/alterDelete'))
app.listen(8020, function () {
	console.log('Example app listening on port 8020!');
});