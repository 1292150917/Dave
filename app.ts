
import express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql')
const app: express.Application = express();
var log4js = require('log4js');
var path = require('path')
var logger = log4js.getLogger();
var a = require("./config/index.json")
var fs = require('fs')
var cookieParser = require("cookie-parser")
logger.level = 'info'; // default level is OFF - which means no logs at all.
logger.info('Log from default logger');
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
global.webpageView = false  //开启网页版本操作
// 验证文件格式
var uuid = require('node-uuid')
try {
	JSON.parse(fs.readFileSync('./config/index.json', "utf-8"))
} catch (error) {
	fs.writeFileSync('./config/index.json', JSON.stringify({}))
}
app.use(cookieParser())

app.use('*', function (req: any, res: any, next: any) {
	var json = fs.readFileSync('./config/index.json', "utf-8")
	json = JSON.parse(json)
	if (!json.host && !req.query.host && !global.webpageView) {
		res.send({ status: 201, msg: "请先链接数据库" })
	} else {
		if (global.webpageView && !req.query.host && !req.cookies.index) {
			res.send({ status: 201, msg: "请先链接数据库" })
			return
		}
		next()
	}
})
// 数据库链接
app.get('/database/create', async function (req, res) {
	try {
		var json = {}
		if (!global.webpageView) {
			json = fs.readFileSync('./config/index.json', "utf-8")
			json = JSON.parse(json)
		}
		// 创建数据库
		if (req.query.create) {
			db = mysql.createConnection({
				host: req.query.host,
				port: req.query.port,
				user: req.query.user,
				password: req.query.password,
			})
			try {
				let sql = `CREATE DATABASE ${req.query.database}`
				db.query(sql, (err: any, result: any) => {
					if (err) {
						res.send({
							status: 200,
							msg: "链接错误！",
							msgData: err
						})
						return
					}

					Object.keys(req.query).map(s => {
						Object.keys(req.query).map(s => {
							json[s] = req.query[s]
						})
						fs.writeFileSync('./config/index.json', JSON.stringify(json))
					})
					res.send({
						status: 200,
					})
				})
			} catch (error) {
				res.send({
					status: 500,
					msg: '未知错误，请查看服务端报错'
				})
			}
			return
		} else {
			var db = mysql.createConnection({
				host: req.query.host,
				port: req.query.port,
				user: req.query.user,
				password: req.query.password,
				database: req.query.database,
			})
			try {
				db.connect((err: any) => {
					if (err) {
						res.send({
							status: 200,
							msg: "链接错误！",
							msgData: err
						})
						return
					}
					if (!global.webpageView) {
						Object.keys(req.query).map(s => {
							json[s] = req.query[s]
							fs.writeFileSync('./config/index.json', JSON.stringify(json))
						})
					} else {
						function getData(days) {
							var date1 = new Date()
							var date2 = new Date(date1);
							date2.setDate(date1.getDate() + days);
							return date2
						}
						res.cookie('index', JSON.stringify(req.query), {
							expires: getData(7)
						})
					}

					res.send({
						status: 200,
					})
				})
			} catch (error) {
				res.send({
					status: 500,
					msg: '未知错误，请查看服务端报错'
				})
			}
		}
	} catch (error) {
		res.send({
			status: 500,
			msg: '未知错误，请查看服务端报错'
		})
	}
})
// 代码关联
app.use('/advanced', require('./api/advanced'))
// 文档生成
app.use('/api/apiRender', require('./api/apiRender'))
// 代码生成部分
app.use('/generate', require('./api/generate'))

// 获取所有数据结构
app.use('/surface/curd', require('./api/curd'))
// 获取所有数据结构
app.get('/tables', require('./api/tables'))
app.get('/tables/surface', require('./api/tablesSurface'))
// 获取表数据
app.get('/tables/listPage', require('./api/tablesListPage'))
// 修改表名字
app.get('/tables/update', require('./api/tablesUpdate'))
// 新增表
app.get('/tables/add', require('./api/tablesAdd'))
// 接口通用设置
app.get('/api/generalSettings', require('./api/generalSettings'))
// 新增表
app.get('/JApplet/code', function (req, res) {
	var codeHtml = require("./template/mysql/sequelize/applet/code")
	res.send({
		status: 200,
		data: [
			{
				name: "service.js",
				msg: codeHtml(req)
			},
			{
				name: "controller.js",
				msg: `
				let express = require('express');
				let router = express.Router();
				router.post('/code', async function (req, res, next) {
					let data = await serviceC1232123.add(req,res)
					res.send(data)
				});`
			},

		]
	})
})
// 删除
app.get('/tables/delete', require('./api/tablesdelete'))
// 新增表字段
app.get('/alter/add', require('./api/alterAdd'))
app.get('/alter/update', require('./api/alterUpdate'))
app.get('/alter/delete', require('./api/alterDelete'))
app.listen(8020, function () {
	console.log('Example app listening on port 8020!');
});