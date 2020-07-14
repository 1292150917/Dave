"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var log4js = require('log4js');
var path = require('path');
var logger = log4js.getLogger();
var a = require("./config/index.json");
var fs = require('fs');
logger.level = 'info'; // default level is OFF - which means no logs at all.
logger.info('Log from default logger');
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
// 验证文件格式
try {
    JSON.parse(fs.readFileSync('./config/index.json', "utf-8"));
}
catch (error) {
    fs.writeFileSync('./config/index.json', JSON.stringify({}));
}
app.use('*', function (req, res, next) {
    var json = fs.readFileSync('./config/index.json', "utf-8");
    json = JSON.parse(json);
    if (!json.host && !req.query.host) {
        res.send({ status: 201, msg: "请先链接数据库" });
    }
    else {
        next();
    }
});
// 数据库链接
app.get('/database/create', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var json, sql, db;
        return __generator(this, function (_a) {
            try {
                json = fs.readFileSync('./config/index.json', "utf-8");
                json = JSON.parse(json);
                // 创建数据库
                if (req.query.create) {
                    db = mysql.createConnection({
                        host: req.query.host,
                        port: req.query.port,
                        user: req.query.user,
                        password: req.query.password,
                    });
                    try {
                        sql = "CREATE DATABASE " + req.query.database;
                        db.query(sql, function (err, result) {
                            if (err) {
                                res.send({
                                    status: 200,
                                    msg: "链接错误！",
                                    msgData: err
                                });
                                return;
                            }
                            Object.keys(req.query).map(function (s) {
                                Object.keys(req.query).map(function (s) {
                                    json[s] = req.query[s];
                                });
                                fs.writeFileSync('./config/index.json', JSON.stringify(json));
                            });
                            res.send({
                                status: 200,
                            });
                        });
                    }
                    catch (error) {
                        res.send({
                            status: 500,
                            msg: '未知错误，请查看服务端报错'
                        });
                    }
                    return [2 /*return*/];
                }
                else {
                    db = mysql.createConnection({
                        host: req.query.host,
                        port: req.query.port,
                        user: req.query.user,
                        password: req.query.password,
                        database: req.query.database,
                    });
                    try {
                        db.connect(function (err) {
                            if (err) {
                                res.send({
                                    status: 200,
                                    msg: "链接错误！",
                                    msgData: err
                                });
                                return;
                            }
                            Object.keys(req.query).map(function (s) {
                                Object.keys(req.query).map(function (s) {
                                    json[s] = req.query[s];
                                });
                                fs.writeFileSync('./config/index.json', JSON.stringify(json));
                            });
                            res.send({
                                status: 200,
                            });
                        });
                    }
                    catch (error) {
                        res.send({
                            status: 500,
                            msg: '未知错误，请查看服务端报错'
                        });
                    }
                }
            }
            catch (error) {
                res.send({
                    status: 500,
                    msg: '未知错误，请查看服务端报错'
                });
            }
            return [2 /*return*/];
        });
    });
});
// 代码关联
app.use('/advanced', require('./api/advanced'));
// 文档生成
app.use('/api/apiRender', require('./api/apiRender'));
// 代码生成部分
app.use('/generate', require('./api/generate'));
// 获取所有数据结构
app.use('/surface/curd', require('./api/curd'));
// 获取所有数据结构
app.get('/tables', require('./api/tables'));
app.get('/tables/surface', require('./api/tablesSurface'));
// 获取表数据
app.get('/tables/listPage', require('./api/tablesListPage'));
// 修改表名字
app.get('/tables/update', require('./api/tablesUpdate'));
// 新增表
app.get('/tables/add', require('./api/tablesAdd'));
// 新增表
app.get('/JApplet/code', function (req, res) {
    var codeHtml = require("./template/mysql/sequelize/applet/code");
    res.send({
        status: 200,
        data: [
            {
                name: "service.js",
                msg: codeHtml(req)
            },
            {
                name: "controller.js",
                msg: "\n\t\t\t\tlet express = require('express');\n\t\t\t\tlet router = express.Router();\n\t\t\t\trouter.post('/code', async function (req, res, next) {\n\t\t\t\t\tlet data = await serviceC1232123.add(req,res)\n\t\t\t\t\tres.send(data)\n\t\t\t\t});"
            },
        ]
    });
});
// 删除
app.get('/tables/delete', require('./api/tablesdelete'));
// 新增表字段
app.get('/alter/add', require('./api/alterAdd'));
app.get('/alter/update', require('./api/alterUpdate'));
app.get('/alter/delete', require('./api/alterDelete'));
app.listen(8020, function () {
    console.log('Example app listening on port 8020!');
});
