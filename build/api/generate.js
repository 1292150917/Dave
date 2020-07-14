/*
 * @Author: your name
 * @Date: 2020-06-15 20:18:08
 * @LastEditTime: 2020-06-30 22:55:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\code-generation\api\generate.ts
 */
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
var express = require("express");
var router = express.Router();
var unity = require('../config/part_unity');
var query = require('../config/mysql');
var path = require('path');
var fs = require('fs');
var SequelizeAuto = require('sequelize-auto');
function cv(v) {
    return path.resolve(__dirname, v);
}
unity = new unity();
function fileDisplay(url, list, name) {
    var fsreadd = fs.readdirSync(cv(url));
    for (var i in fsreadd) {
        var item = fsreadd[i];
        var filedir = url + '/' + item;
        if (!fs.statSync(filedir).isDirectory()) {
            // 读取文件内容
            var content = fs.readFileSync(filedir, 'utf-8');
            list.push({
                msg: content,
                name: name ? name + '/' + item : item
            });
        }
        else {
            fileDisplay(filedir, list, name ? name + '/' + item : item); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    }
    return list;
}
function createHtml(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var json, create, jsoncurd, _a, name, ORM, download, data, auto, tables, created, vname, index, addOrm, updateOrm, deleteOrm, jsoncurd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8");
                    create = require(cv('../template/mysql/sequelize/controller.ts'));
                    jsoncurd = fs.readFileSync(cv('../config/index.json'), "utf-8");
                    jsoncurd = JSON.parse(jsoncurd);
                    json = JSON.parse(json);
                    _a = req.body, name = _a.name, ORM = _a.ORM, download = _a.download;
                    data = [];
                    auto = new SequelizeAuto(jsoncurd.database, jsoncurd.user, jsoncurd.password, {
                        host: jsoncurd.host,
                        dialect: jsoncurd.type,
                        directory: false,
                        port: jsoncurd.port,
                        additional: {
                            timestamps: false
                        },
                        tables: name
                    });
                    tables = [];
                    return [4 /*yield*/, query({
                            sql: "SELECT\n            TABLE_NAME,\n            TABLE_COMMENT,\n            TABLE_ROWS,\n            CREATE_TIME,\n            UPDATE_TIME\n            FROM\n                information_schema.TABLES\n            WHERE\n            table_schema = '" + jsoncurd.database + "'", res: res
                        })];
                case 1:
                    created = _b.sent();
                    vname = {};
                    created.map(function (v) {
                        vname[v.TABLE_NAME] = v;
                    });
                    return [4 /*yield*/, new Promise(function (s) {
                            auto.run(function (err) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (err)
                                            throw err;
                                        tables = auto.tables;
                                        s(true);
                                        return [2 /*return*/];
                                    });
                                });
                            });
                        })];
                case 2:
                    _b.sent();
                    for (index in name) {
                        addOrm = [] //可新增的字段
                        ;
                        updateOrm = [] //可更新字段
                        ;
                        deleteOrm = [] //可删除字段
                        ;
                        if (ORM === 'sequelize') {
                            json[name[index]].map(function (s) {
                                if (s.add) {
                                    addOrm.push({
                                        name: s.Field,
                                        null: s.required
                                    });
                                }
                                if (s.update) {
                                    updateOrm.push({
                                        name: s.Field,
                                        item: s
                                    });
                                }
                                if (s.delete) {
                                    deleteOrm.push({
                                        name: s.Field,
                                        item: s
                                    });
                                }
                            });
                            // curd
                            data.push({
                                name: "controller/" + name[index] + ".js",
                                msg: create({ addOrm: addOrm, name: name[index], vname: vname[name[index]] })
                            });
                            data.push({
                                name: "service/" + name[index] + ".js",
                                msg: require(cv('../template/mysql/sequelize/service.ts'))({ addOrm: addOrm, name: name[index], data: json[name[index]], updateOrm: updateOrm, deleteOrm: deleteOrm })
                            });
                            data.push({
                                name: "models/" + name[index] + ".js",
                                msg: require(cv('../template/mysql/sequelize/models.ts'))({ server: json[name[index]], name: name[index], model: tables[name[index]] })
                            });
                        }
                    }
                    jsoncurd = fs.readFileSync(cv('../config/index.json'), "utf-8");
                    jsoncurd = JSON.parse(jsoncurd);
                    data.push({
                        name: "config/db.js",
                        msg: require(cv('../template/mysql/sequelize/db.ts'))({ db: jsoncurd })
                    });
                    if (download) {
                        data.push.apply(data, fileDisplay(cv('../template/mysql/sequelize/app'), [], ''));
                        data.push({
                            name: "models/index.js",
                            msg: require(cv('../template/mysql/sequelize/indexmodels.ts'))({ name: name, model: json })
                        });
                    }
                    res.send({
                        status: 200,
                        msg: data
                    });
                    return [2 /*return*/];
            }
        });
    });
}
router.post('/create', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            createHtml(req, res);
            return [2 /*return*/];
        });
    });
});
router.post('/query', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var json, name;
        return __generator(this, function (_a) {
            json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8");
            json = JSON.parse(json);
            name = req.body.name;
            res.send({
                status: 200,
                data: json[name] ? json[name] : []
            });
            return [2 /*return*/];
        });
    });
});
router.post('/json', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var tableinterface, json, _a, name, datalist, tabledescribes;
        return __generator(this, function (_b) {
            tableinterface = fs.readFileSync(cv('../DaveFile/database/tableinterface.json'), "utf-8");
            json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8");
            json = JSON.parse(json);
            tableinterface = JSON.parse(tableinterface);
            _a = req.body, name = _a.name, datalist = _a.datalist, tabledescribes = _a.tabledescribes;
            json[name] = req.body.datalist;
            tableinterface[name] ? tableinterface[name].name = tabledescribes : tableinterface[name] = { name: tabledescribes };
            fs.writeFileSync(cv('../DaveFile/database/watch.json'), JSON.stringify(json));
            fs.writeFileSync(cv('../DaveFile/database/tableinterface.json'), JSON.stringify(tableinterface));
            res.send({
                status: 200,
                data: '保存成功'
            });
            return [2 /*return*/];
        });
    });
});
router.post('/create', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var json, sql, db;
        return __generator(this, function (_a) {
            json = fs.readFileSync(cv("../config/index.json"), "utf-8");
            json = JSON.parse(json);
            Object.keys(req.query).map(function (s) {
                json[s] = req.query[s];
            });
            fs.writeFileSync(cv('../config/index.json'), JSON.stringify(json));
            // 创建数据库
            if (req.query.create) {
                db = mysql.createConnection({
                    host: req.query.host,
                    port: req.query.port,
                    user: req.query.user,
                    password: req.query.password,
                });
                sql = "CREATE DATABASE " + req.query.database;
                db.query(sql, function (err, result) {
                    if (err) {
                        res.send({
                            status: 200,
                            msg: "链接错误！",
                            msgData: err
                        });
                    }
                });
                res.send({
                    status: 200,
                });
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
                db.connect(function (err) {
                    if (err) {
                        res.send({
                            status: 200,
                            msg: "链接错误！",
                            msgData: err
                        });
                        return;
                    }
                    res.send({
                        status: 200,
                    });
                });
            }
            return [2 /*return*/];
        });
    });
});
module.exports = router;
