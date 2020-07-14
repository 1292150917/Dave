"use strict";
var render = function (_a) {
    var addOrm = _a.addOrm, name = _a.name, updateOrm = _a.updateOrm, deleteOrm = _a.deleteOrm, data = _a.data;
    // 生成验证规则
    var list = [];
    var valueList = data.filter(function (s) { return s.relevance; });
    var relevance = '';
    var include = [];
    if (valueList[0]) {
        valueList.map(function (s) {
            include.push.apply(include, s.relevance);
        });
    }
    var toName = name.replace(name[0], function (v) { return v.toUpperCase(); }); //首字母大写
    addOrm.map(function (s) {
        if (s.null) {
            list.push({ name: s.name, test: "" });
        }
    });
    // data
    var template = "\nvar express = require('express');\nvar Sequelize = require(\"Sequelize\");\nvar db = require('../config/db.js')\nvar model = require('../models/index.js')\nclass Service{\n    constructor(){\n    }\n    verify (test,val){\n        for(var item in test){\n            if(!val[test[item].name]){\n                return test[item].name + \"\u4E3A\u7A7A\"\n            }\n        }\n    }\n    // \u65B0\u589E\u6570\u636E\n    async add(req,res){\n        var data = {}\n        try {\n            let { " + addOrm.map(function (s) {
        return " " + s.name + " ";
    }) + " } = req.body\n                var msg = {\n                    id:0\n                }\n                // \u751F\u6210\u9A8C\u8BC1\u89C4\u5219 name\u9A8C\u8BC1\u5B57\u6BB5 test\u4E3A\u6B63\u5219 \u7A7A\u9A8C\u8BC1\u5339\u914D\u7A7A\u6570\u636E\n                var testList = [\n                    " + (list.length ? JSON.stringify(list) : '') + "\n                ]\n                var verification = this.verify(testList,req.body)\n                if(!verification){\n                    " + addOrm.map(function (s) {
        return "\n                        req.body[\"" + s.name + "\"] ? msg[\"" + s.name + "\"] = req.body[\"" + s.name + "\"] : ''";
    }).join('') + "\n                    await model." + name + ".create(msg).then((s) => {\n                        data = {\n                            status: 200,\n                            data: s[0]\n                        }\n                    })\n                }else{\n                    data = {\n                        status: 201,\n                        data: verification\n                    }\n                }\n        } catch (error) {\n            data = {\n                status: 500,\n                data: '\u672A\u77E5\u9519\u8BEF'\n            }\n        }\n        return data\n    }\n    // \u67E5\u8BE2\u8868\u6240\u6709\u6570\u636E\n    async queryList(req,res){\n        var data = {}\n        try {\n            var item = await model." + name + ".findAll({ where: {} })\n            data = {\n                status: 200,\n                data: item\n            }\n        } catch (error) {\n            data = {\n                status: 500,\n                data: '\u672A\u77E5\u9519\u8BEF'\n            }\n        }\n        return {\n            data\n        }\n    }\n    async update(req,res){\n        var update = {}\n        var data = {}\n        try {\n            " + updateOrm.map(function (s) {
        return "\n                    req.body[\"" + s.name + "\"] ? update[\"" + s.name + "\"] = req.body[\"" + s.name + "\"] : ''";
    }).join('') + "\n                \n                var item = await model." + name + ".update(update,{\n                    where: {\n                        id:req.body.id\n                    }\n                })\n                data = {\n                    status: 200,\n                    data: '\u4FEE\u6539\u6210\u529F'\n                }\n        } catch (error) {\n            data = {\n                status: 500,\n                data: '\u672A\u77E5\u9519\u8BEF'\n            }\n        }\n        return data\n    }\n    async delete(req,res){\n        var data = {}\n        try {\n        \n            " + (deleteOrm.length != 0 ? (function () {
        return ("if(" + deleteOrm.map(function (s, i) { return "!req.body[\"" + s.name + "\"] " + (i !== deleteOrm.length - 1 ? '&& ' : ''); }).join('') + "){\n                    data = {\n                        status: 201,\n                        data: '\u7F3A\u5C11\u4E3B\u8981\u53C2\u6570'\n                    }\n                    return\n                }\n                await model." + name + ".destroy({\n                    where: {" + deleteOrm.map(function (s) {
            return "\n                         " + s.name + ":req.body[\"" + s.name + "\"]";
        }) + "\n                    }\n                }).then((s) => {\n                    data = {\n                        status: 200,\n                        data: '\u5220\u9664\u6210\u529F'\n                    }\n                })");
    }()) : '') + "\n        } catch (error) {\n            data = {\n                status: 500,\n                data: '\u672A\u77E5\u9519\u8BEF'\n            }\n        }\n        return data\n        \n    }\n    async query(req,res){\n        var data = {}\n        var where = {}\n        try {\n            req.body[\"id\"] ? where[\"id\"] = req.body[\"id\"] : ''\n            " + addOrm.map(function (s) {
        return "\n                req.body[\"" + s.name + "\"] ? where[\"" + s.name + "\"] = req.body[\"" + s.name + "\"] : ''";
    }).join('') + "\n            \n            var item = await model." + name + ".findAll({\n                where" + (include.length === 0 ? '' : ',') + "\n                " + (function () {
        if (include.length === 0) {
            return '';
        }
        else {
            var v = [];
            include.map(function (s) {
                v.push("{\n                             model:model." + s.elevanceName + "\n                          }");
            });
            var v = v;
            return "include:[\n                          " + v + "\n                        ]";
        }
    })() + "\n            })\n            data = {\n                status: 200,\n                data: item\n            }\n        } catch (error) {\n            data = {\n                status: 500,\n                data: '\u672A\u77E5\u9519\u8BEF'\n            }\n        }\n        return  data\n    }\n}\nmodule.exports = Service \n    ";
    return template;
};
module.exports = render;
