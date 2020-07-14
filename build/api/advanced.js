/*
 * @Author: your name
 * @Date: 2020-06-21 11:11:30
 * @LastEditTime: 2020-06-21 14:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodee:\nodeT\Dave\api\advanced.ts
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
var fs = require('fs');
var path = require('path');
function cv(v) {
    return path.resolve(__dirname, v);
}
router.post('/relevance', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, fsreadd, json;
        return __generator(this, function (_a) {
            data = {};
            fsreadd = fs.readdirSync(cv(req.body['catalogue']));
            if (fsreadd.join('').includes('package.json')) {
                json = fs.readFileSync(cv('../DaveFile/database/relevance.json'), "utf-8");
                json = JSON.parse(json);
                json["catalogue"] = req.body['catalogue'];
                fs.writeFileSync(cv('../DaveFile/database/relevance.json'), JSON.stringify(json));
                data = {
                    data: '已经成功关联',
                    status: 200
                };
            }
            else {
                data = {
                    msg: '请选择正确的关联目录',
                    status: 201
                };
            }
            res.send(data);
            return [2 /*return*/];
        });
    });
});
router.post('/connectorget', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, json, file, fsreadd, list;
        return __generator(this, function (_a) {
            data = {};
            json = fs.readFileSync(cv('../DaveFile/database/relevance.json'), "utf-8");
            json = JSON.parse(json);
            if (!json["catalogue"]) {
                data = {
                    msg: '请先确定代码目录',
                    status: 201
                };
            }
            else {
                file = path.resolve(json["catalogue"], 'controller');
                fsreadd = fs.readdirSync(file);
                list = [];
                fsreadd.map(function (s) {
                    var content = fs.readFileSync(file + '/' + s, 'utf-8');
                    content.split("/**").map(function (v) {
                        if (v && v.includes('@api')) {
                            var _a = v.split('*/'), v1 = _a[0], v2 = _a[1];
                            var msg = {
                                method: v1.match(/\{(.+?)\}/)[1],
                                url: v1.match(/\/(.+?) /)[1],
                                name: v1.match(/ (.+?)[\n]/g)[0].split(' ')[5],
                            };
                            list.push(msg);
                        }
                    });
                });
                data = { status: 200, data: list };
                res.send(data);
            }
            return [2 /*return*/];
        });
    });
});
module.exports = router;
