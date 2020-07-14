/*
 * @Author: your name
 * @Date: 2020-06-18 21:06:46
 * @LastEditTime: 2020-06-30 23:02:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\api\apiRender.ts
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
var cmd = require("node-cmd");
var zipper = require("zip-local");
unity = new unity();
function cv(v) {
    return path.resolve(__dirname, v);
}
router.post('/render', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        // 清空之前的所有文件
        function delDir(path) {
            var files = [];
            if (fs.existsSync(path)) {
                files = fs.readdirSync(path);
                files.forEach(function (file, index) {
                    var curPath = path + "/" + file;
                    if (fs.statSync(curPath).isDirectory()) {
                        delDir(curPath); //递归删除文件夹
                    }
                    else {
                        fs.unlinkSync(curPath); //删除文件
                    }
                });
                // fs.rmdirSync(path);
            }
        }
        var name, json, data, documents, jsoncurd, tableinterface, created;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.body.name;
                    json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8");
                    delDir(cv('../DaveFile/database/documents'));
                    json = JSON.parse(json);
                    data = {};
                    fs.writeFileSync(cv('../DaveFile/database/documents.json'), JSON.stringify(json));
                    documents = require('../template/sdk/documents.ts');
                    jsoncurd = fs.readFileSync(cv('../config/index.json'), "utf-8");
                    jsoncurd = JSON.parse(jsoncurd);
                    tableinterface = fs.readFileSync(cv('../DaveFile/database/tableinterface.json'), "utf-8");
                    tableinterface = JSON.parse(tableinterface);
                    return [4 /*yield*/, query({
                            sql: "SELECT\n            TABLE_NAME,\n            TABLE_COMMENT,\n            TABLE_ROWS,\n            CREATE_TIME,\n            UPDATE_TIME\n            FROM\n                information_schema.TABLES\n            WHERE\n            table_schema = '" + jsoncurd.database + "'", res: res
                        })];
                case 1:
                    created = _a.sent();
                    name.map(function (s) {
                        // 注释部分的代码
                        var name = created.filter(function (vname) { return vname.TABLE_NAME === s; });
                        var vname = '';
                        if (name[0]) {
                            var _a = name[0].TABLE_COMMENT.split(';'), v1 = _a[0], v2 = _a[1];
                            if (v2) {
                                vname = v1;
                            }
                        }
                        // 如果备注存在优先使用备注
                        if (tableinterface[s] && tableinterface[s].name) {
                            vname = tableinterface[s].name;
                        }
                        fs.writeFileSync(cv("../DaveFile/database/documents/" + s + ".js"), documents(json[s], s, vname));
                    });
                    cmd.get("apidoc -i DaveFile/database/documents -o apidoc/", function (err, data) {
                        zipper.sync.zip("./apidoc").compress().save("./apidoc.zip");
                        data = {
                            data: '新增成功！',
                            status: 200,
                            json: json
                        };
                        res.send(data);
                    });
                    return [2 /*return*/];
            }
        });
    });
});
router.get('/download', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.download(cv("../apidoc.zip"));
            return [2 /*return*/];
        });
    });
});
module.exports = router;
