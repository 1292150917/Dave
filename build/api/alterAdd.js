/*
 * @Author: your name
 * @Date: 2020-03-21 13:42:27
 * @LastEditTime: 2020-06-09 19:20:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yjhle:\zl-代码\个人\exploit_node\api\tablesListPage.ts
 */
/*
 * @Descripttion:
 * @version:
 * @Author:
 * @Date: 2019-11-15 10:37:50
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-03 13:59:08
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
var query = require('../config/mysql');
var tablesListPage = /** @class */ (function (_super) {
    __extends(tablesListPage, _super);
    function tablesListPage(req, res) {
        var _this = _super.call(this, req, res) || this;
        _this.go();
        return _this;
    }
    tablesListPage.prototype.go = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, res, req, _b, surface, Field, Type, Comment, Null, Extra, yuanKey, Default, yuanExtra, Key, yuanField, sql, tables, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this, res = _a.res, req = _a.req;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 8, , 9]);
                        _b = req.query, surface = _b.surface, Field = _b.Field, Type = _b.Type, Comment = _b.Comment, Null = _b.Null, Extra = _b.Extra, yuanKey = _b.yuanKey, Default = _b.Default, yuanExtra = _b.yuanExtra, Key = _b.Key, yuanField = _b.yuanField;
                        sql = "ALTER table " + surface + " ADD " + Field + " " + Type;
                        if (Comment) {
                            sql += " COMMENT \"" + Comment + "\"";
                        }
                        if (Default && Key != 'true') {
                            sql += " Default \"" + Default + "\"";
                        }
                        if (Null === 'true') {
                            // key是否为主键
                            sql += " NOT NULL";
                        }
                        else {
                            sql += ' NULL';
                        }
                        if (!(Key === 'true')) return [3 /*break*/, 6];
                        if (!yuanKey) return [3 /*break*/, 5];
                        if (!(yuanExtra === 'auto_increment')) return [3 /*break*/, 3];
                        // 取消当前主键
                        return [4 /*yield*/, query({ sql: "alter table " + surface + " modify " + yuanKey + " int", res: res })];
                    case 2:
                        // 取消当前主键
                        _c.sent();
                        _c.label = 3;
                    case 3: 
                    // 取消自动递增
                    return [4 /*yield*/, query({ sql: "alter table " + surface + " DROP primary key", res: res })];
                    case 4:
                        // 取消自动递增
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        // 设置主键
                        sql += ' primary key';
                        _c.label = 6;
                    case 6:
                        if (Null === 'true' && Extra === 'true') {
                            sql += ' auto_increment';
                        }
                        return [4 /*yield*/, query({ sql: sql, res: res })];
                    case 7:
                        tables = _c.sent();
                        res.send({
                            status: 200
                        });
                        return [3 /*break*/, 9];
                    case 8:
                        error_1 = _c.sent();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return tablesListPage;
}(unity));
module.exports = function (req, res) { return new tablesListPage(req, res); };
