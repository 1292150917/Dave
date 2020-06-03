/*
 * @Descripttion:
 * @version:
 * @Author: Zhang Zi Fang
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-10-31 16:28:52
 */
import express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var xmlparser = require('express-xml-bodyparser');
const app: express.Application = express();
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info'; // default level is OFF - which means no logs at all.
logger.info('Log from default logger');
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
var query = require('./config/mysql');
// 获取所有数据结构
app.get('/tables', async function(req,res){
	var tables = await query("show tables")
	var key = {}
	var name = "test"
	for(var v in tables){
		 key[tables[v][`Tables_in_${name}`]] = await query(`show full columns from ${tables[v][`Tables_in_${name}`]}`)
	}
	res.send({
		code:200,
		tables:key
	})
})
// 获取表数据
app.get('/tables/listPage', async function(req,res){
	var tables = await query("select * from banner")
	res.send({
		code:200,
		tables
	})
})
// 修改表名字
app.get('/tables/update', async function(req,res){
	var tables = await query("rename table announcement1 to announcement")
	var key = {}
	res.send({
		code:200
	})
})
// 新增表字段
app.get('/tables/add', async function(req,res){
	var tables = await query("ALTER table announcement ADD Birthday date")
	var key = {}
	res.send({
		code:200
	})
})
// 删除表字段
app.get('/alter/delete', async function(req,res){
	var tables = await query("ALTER table announcement DROP COLUMN Birthday")
	var key = {}
	res.send({
		code:200
	})
})

app.listen(8020, function() {
	console.log('Example app listening on port 8020!');
});