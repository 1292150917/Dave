"use strict";
/*
 * @Author: your name
 * @Date: 2020-06-20 16:53:14
 * @LastEditTime: 2020-06-21 12:16:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodee:\nodeT\Dave\template\mysql\sequelize\controller.ts
 */
var render = function (_a) {
    var addOrm = _a.addOrm, name = _a.name, vname = _a.vname;
    // 生成验证规则
    var list = [];
    addOrm.map(function (s) {
        if (s.null) {
            list.push({ name: s.name, test: "" });
        }
    });
    var comment = '';
    var _b = vname.TABLE_COMMENT.split(';'), v1 = _b[0], v2 = _b[1];
    v2 ? comment = v1 : '';
    var toName = name.replace(name[0], function (v) { return v.toUpperCase(); }); //首字母大写
    var template = "\nlet express = require('express');\nlet router = express.Router();\nlet service" + toName + " = require('../service/" + name + ".js')\nservice" + toName + " = new service" + toName + "()\n\n/**\n * @api {post} /" + name + "/add " + (comment ? comment : name) + "\u65B0\u589E\n * @apiDescription \"\"\n*/\nrouter.post('/add', async function (req, res, next) {\n    let data = await service" + toName + ".add(req,res)\n    res.send(data)\n});\n\n/**\n * @api {post} /" + name + "/query " + (comment ? comment : name) + "\u67E5\u8BE2\n * @apiDescription \"\"\n*/\nrouter.post('/query', async function (req, res, next) {\n    let data = await service" + toName + ".query(req,res)\n    res.send(data)\n});\n\n/**\n * @api {post} /" + name + "/queryList " + (comment ? comment : name) + "\u6240\u6709\u6570\u636E\n * @apiDescription \"\"\n*/\nrouter.post('/queryList', async function (req, res, next) {\n    let data = await service" + toName + ".queryList(req,res)\n    res.send(data)\n});\n\n/**\n * @api {post} /" + name + "/update " + (comment ? comment : name) + "\u66F4\u65B0\n * @apiDescription \"\"\n*/\nrouter.post('/update', async function (req, res, next) {\n    let data = await service" + toName + ".update(req,res)\n    res.send(data)\n});\n\n/**\n * @api {post} /" + name + "/delete " + (comment ? comment : name) + "\u5220\u9664\u6570\u636E-\u614E\u7528delete\u8BED\u6CD5\n * @apiDescription \"\"\n*/\nrouter.post('/delete', async function (req, res, next) {\n    let data = await service" + toName + ".delete(req,res)\n    res.send(data)\n});\nmodule.exports = router\n    ";
    return template;
};
module.exports = render;
