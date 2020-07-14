"use strict";
/*
 * @Author: your name
 * @Date: 2020-06-17 18:29:15
 * @LastEditTime: 2020-06-17 18:39:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\mysql\sequelize\models.ts
 */
var render = function (_a) {
    var server = _a.server, name = _a.name, model = _a.model;
    var template = "\nvar Sequelize = require(\"sequelize\");\nvar sequelize = require(\"../config/db.js\")\n\nmodule.exports = sequelize.define('" + name + "'," + JSON.stringify(model) + ",{\n   freezeTableName:true,\n   timestamps:false\n});";
    return template;
};
module.exports = render;
