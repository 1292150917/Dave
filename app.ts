/*
 * @Descripttion:
 * @version:
 * @Author: Zhang Zi Fang
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-08 23:08:06
 */
import express = require('express');
var bodyParser = require('body-parser');
const app: express.Application = express();
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info'; // default level is OFF - which means no logs at all.
logger.info('Log from default logger');
// app.use(bodyParser.urlenstatusd({ extended: true, limit: '50mb' }));
// app.use(bodyParser.json({ limit: '50mb' }));
var query = require('./config/mysql');
// 获取所有数据结构
app.get('/tables', async function (req, res) {
	var tables = await query({ sql: "show tables" })
	var key = {}
	var name = "test"
	for (var v in tables) {
		key[tables[v][`Tables_in_${name}`]] = await query({ sql: `show full columns from ${tables[v][`Tables_in_${name}`]}` })
	}
	res.send({
		status: 200,
		data: key
	})
})
// 获取所有表结构
app.get('/tables/surface', async function (req, res) {
	// show table status like 'banner'
	var tables = await query({ sql: "show full tables" })
	var list = []
	var name = "test"
	tables.forEach((s, i) => {
		list.push({
			name: s[`Tables_in_${name}`],
			index: i
		})
	})
	res.send({
		status: 200,
		data: list
	})
})
// 获取表数据
app.get('/tables/listPage', async function (req, res) {
	var tables = await query({ sql: "select * from banner", res })
	res.send({
		status: 200,
		tables
	})
})
// 修改表名字
app.get('/tables/update', async function (req, res) {
	var { yuanName, name } = req.query
	var tables = await query({ sql: `rename table ${yuanName} to ${name}`, res })
	var key = {}
	res.send({
		status: 200
	})
})
// 新增表
app.get('/tables/add', async function (req, res) {
	var { describe, name } = req.query
	var sql = `create table ${name} (
		id int (11) NOT NULL PRIMARY KEY AUTO_INCREMENT
	)`
	await query({ sql: sql, res })
	res.send({
		status: 200
	})
})
// 删除
app.get('/tables/delete', async function (req, res) {
	var { describe, name } = req.query
	var sql = `drop table ${name}`
	await query({ sql: sql, res })
	res.send({
		status: 200
	})
})
// 新增表字段
app.get('/alter/add', async function (req, res) {
	try {
		var { surface, Field, Type, Comment, Null, Extra, yuanKey, Default, yuanExtra, Key, yuanField } = req.query
		var sql = `ALTER table ${surface} ADD ${Field} ${Type}`
		if (Comment) {
			sql += ` COMMENT "${Comment}"`
		}
		if (Default && Key != 'true') {
			sql += ` Default "${Default}"`
		}
		if (Null === 'true') {
			// key是否为主键
			sql += ` NOT NULL`
		} else {
			sql += ' NULL'
		}

		if (Key === 'true') {
			if (yuanKey) {
				if (yuanExtra === 'auto_increment') {
					// 取消当前主键
					await query({ sql: `alter table ${surface} modify ${yuanKey} int`, res })
				}
				// 取消自动递增
				await query({ sql: `alter table ${surface} DROP primary key`, res })
			}
			// 设置主键
			sql += ' primary key'
		}

		if (Null === 'true' && Extra === 'true') {
			sql += ' auto_increment'
		}
		var tables = await query({ sql: sql, res })
		res.send({
			status: 200
		})
	} catch (error) {

	}
})
// 修改表字段
app.get('/alter/update', async function (req, res) {
	try {
		var { surface, Field, Type, yuanField, Comment, Default, Null, Key, yuanKey, Extra, yuanExtra } = req.query
		var notNull = ''
		if (Null === 'true') {
			// key是否为主键
			notNull = `NOT NULL ${Extra === 'true' ? 'auto_increment' : ''}`
		} else {
			notNull = 'NULL'
		}
		// 判断原主键是否为现在的组件 
		if (yuanKey === Field) {
			// 如果当前组件为选中状态 再次为取消
			if (Key === "false") {
				if (yuanExtra === 'auto_increment') {
					// 取消当前主键
					await query({ sql: `alter table ${surface} modify ${Field} int`, res })
				}
				// 删除主键
				await query({ sql: `alter table ${surface} DROP primary key`, res })
			}
		} else {
			if (Key === 'true') {
				if (yuanKey) {
					if (yuanExtra === 'auto_increment') {
						// 取消当前主键
						await query({ sql: `alter table ${surface} modify ${yuanKey} int`, res })
					}
					await query({ sql: `alter table ${surface} DROP primary key`, res })
				}
				// 设置主键
				await query({ sql: `alter table ${surface} add primary key (${yuanField})`, res })
			}
		}
		var sql = `ALTER table ${surface} change ${yuanField} ${Field} ${Type} COMMENT "${Comment}" ${(function () {
			// 默认子递增函数
			return Key === 'true' ? '' : `Default "${Default}"`
		})()} ${notNull}`
		var tables = await query({ sql: sql, res })
		var key = {}
		res.send({
			status: 200
		})
	} catch (error) {

	}
})
// 删除表字段
app.get('/alter/delete', async function (req, res) {
	var { surface, Field, Type } = req.query
	console.log(`ALTER table ${surface} DROP COLUMN ${Field}`)
	var tables = await query({ sql: `ALTER table ${surface} DROP COLUMN ${Field}`, res })
	var key = {}
	res.send({
		status: 200
	})
})

app.listen(8020, function () {
	console.log('Example app listening on port 8020!');
});