"use strict";
/*
 * @Author: your name
 * @Date: 2020-06-22 20:07:55
 * @LastEditTime: 2020-06-22 21:26:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodee:\nodeT\Dave\template\mysql\sequelize\indexmodels.ts
 */
var render = function (_a) {
    var server = _a.server, name = _a.name, model = _a.model;
    var Require = '';
    var belongsTo = '';
    name.map(function (v) {
        Require += "\n        var " + v + " = require('./" + v + "');";
        // 获取是否存在关联主键
        var valueList = model[v].filter(function (s) { return s.relevance; });
        if (valueList[0]) {
            valueList[0].relevance.map(function (value) {
                belongsTo += v + ".belongsTo(" + value.elevanceName + ", { foreignKey: '" + value.berelevancePrice + "', targetKey: '" + value.elevancePrice + "' });";
            });
        }
    });
    var template = "\n    " + Require + "\n    \n    " + belongsTo + "\n    \n    module.exports = { " + name.join(',') + " }";
    return template;
};
module.exports = render;
