/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-06-30 23:09:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\tablesSurface.ts
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var unity = require('../config/part_unity');
var path = require('path');
var query = require('../config/mysql');
var fs = require('fs');
function cv(v) {
    return path.resolve(__dirname, v);
}
var tablesSurface = /** @class */ (function (_super) {
    __extends(tablesSurface, _super);
    function tablesSurface(req, res) {
        var _this = _super.call(this, req, res) || this;
        _this.go();
        return _this;
    }
    tablesSurface.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, res, req, query, tables, jsoncurd, created, list, json, tableinterface, database, jsonRender, _b, _c, _i, index, name;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this, res = _a.res, req = _a.req;
                        query = require('../config/mysql');
                        return [4 /*yield*/, query({ sql: "show full tables", res: res })];
                    case 1:
                        tables = _d.sent();
                        jsoncurd = fs.readFileSync(cv('../config/index.json'), "utf-8");
                        jsoncurd = JSON.parse(jsoncurd);
                        return [4 /*yield*/, query({
                                sql: "SELECT\n                TABLE_NAME,\n                TABLE_COMMENT,\n                TABLE_ROWS,\n                CREATE_TIME,\n                UPDATE_TIME\n                FROM\n                    information_schema.TABLES\n                WHERE\n                table_schema = '" + jsoncurd.database + "'", res: res
                            })];
                    case 2:
                        created = _d.sent();
                        list = [];
                        json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8");
                        tableinterface = fs.readFileSync(cv('../DaveFile/database/tableinterface.json'), "utf-8");
                        tableinterface = JSON.parse(tableinterface);
                        json = JSON.parse(json);
                        database = this.database;
                        jsonRender = {};
                        _b = [];
                        for (_c in tables)
                            _b.push(_c);
                        _i = 0;
                        _d.label = 3;
                    case 3:
                        if (!(_i < _b.length)) return [3 /*break*/, 8];
                        index = _b[_i];
                        name = tables[index]["Tables_in_" + database];
                        if (!(!json[name] || req.query.update)) return [3 /*break*/, 5];
                        return [4 /*yield*/, query({ sql: "show full columns from " + name }).then(function (item) {
                                item.filter(function (s) {
                                    if (s.Extra === "auto_increment") {
                                        return;
                                    }
                                    s.attribute = s.Field;
                                    s.add = true;
                                    s.querylist = true;
                                    s.inquirywayvalue = "=";
                                    s.update = true;
                                    s.query = true;
                                    return s;
                                });
                                jsonRender[name] = item;
                            })];
                    case 4:
                        _d.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        jsonRender[name] = json[name];
                        _d.label = 6;
                    case 6:
                        list.push({
                            name: name,
                            index: index
                        });
                        _d.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 3];
                    case 8:
                        fs.writeFileSync(cv('../DaveFile/database/watch.json'), JSON.stringify(jsonRender));
                        list.forEach(function (s) {
                            s.tableinterface = tableinterface[s.name];
                            s.msg = created.filter(function (v) { return v.TABLE_NAME === s.name; })[0];
                        });
                        res.send({
                            status: 200,
                            data: list
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return tablesSurface;
}(unity));
module.exports = function (req, res) { return new tablesSurface(req, res); };
