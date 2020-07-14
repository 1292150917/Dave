/*
 * @Author: your name
 * @Date: 2020-06-20 16:53:14
 * @LastEditTime: 2020-07-14 22:23:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \easyweb-cloud-web-mastere:\nodeT\Dave\template\mysql\sequelize\db.ts
 */ 
interface Render {
    db: any //新增字段
}
var render = function ({ db }: Render) {
    var template = `
var Sequelize = require("Sequelize");
const sequelize = new Sequelize('${db.database}', '${db.user}', '${db.password}', {
  host: '${db.host}',
  port:${db.port},
  dialect: 'mysql',
  timezone: '+08:00'
  define: {
    timestamps: false
  }
}); 

module.exports = sequelize;
    `
    return template
}
module.exports = render 