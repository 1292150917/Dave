/*
 * @Author: your name
 * @Date: 2020-06-17 18:29:15
 * @LastEditTime: 2020-08-07 09:22:28
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\mysql\sequelize\models.ts
 */

interface Render {
    server: any, //新增字段
    name: any,
    model: any
}
// 获取通用数据
var relevance = require("../../../DaveFile/database/relevance.json")
var render = function ({ server, name, model }: Render) {
    // 设置默认值
    if (relevance.fakef && model[relevance.fakef] !== undefined) {
        model[relevance.fakef].defaultValue = relevance.fakefValue
    }
    var template = `
var Sequelize = require("sequelize");
var sequelize = require("../config/db.js")

module.exports = sequelize.define('${name}',${JSON.stringify(model)},{
    freezeTableName: true,
    timestamps: ${(relevance.creationTime && relevance.updateTime) ? true : false},
    ${relevance.creationTime ? `createdAt: "${relevance.creationTime}",` : ''}
    ${relevance.updateTime ? `updatedAt: "${relevance.updateTime}",` : ''}
});`
    return template
}
module.exports = render 