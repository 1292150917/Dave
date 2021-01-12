/*
 * @Author: your name
 * @Date: 2020-06-20 16:53:14
 * @LastEditTime: 2020-09-16 16:31:07
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \easyweb-cloud-web-mastere:\nodeT\Dave\template\mysql\sequelize\db.ts
 */ 
interface Render {
    db: any //新增字段
}
var render = function ({ db }: Render) {
    var template = `
var Sequelize = require("sequelize");
const sequelize = new Sequelize('${db.database}', '${db.user}', '${db.password}', {
  host: '${db.host}',
  port:${db.port},
  dialect: 'mysql',
  timezone: '+08:00',
  dialectOptions:{
    dateStrings:true,
    typeCast:true
  },
  define: {
    timestamps: false
  }
}); 

module.exports = sequelize;
    `
    return template
}
module.exports = render 