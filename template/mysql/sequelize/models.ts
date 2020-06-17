/*
 * @Author: your name
 * @Date: 2020-06-17 18:29:15
 * @LastEditTime: 2020-06-17 18:39:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\mysql\sequelize\models.ts
 */ 

interface Render {
    server: any, //新增字段
    name:any,
    model:any
}
var render = function ({ server,name,model }: Render) {
    var template = `
var Sequelize = require("sequelize");
var sequelize = require("../config/db.js")

module.exports = sequelize.define('${name}',${JSON.stringify(model)},{
   freezeTableName:true,
   timestamps:false
});`
    return template
}
module.exports = render 