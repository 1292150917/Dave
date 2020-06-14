
interface Render {
    server: any //新增字段
}
var render = function ({ server }: Render) {
    var template = `
var Sequelize = require("sequelize");
var sequelize = require("./config/db.js").sequelize;

exports.User = sequelize.define('user',{
    ${server.map((s:any) =>{
        return (`
    ${s.Field}:{
        type:Sequelize.${s.Type},
        ${s.Default ? `defaultValue:${s.Default},` : ''}
    }`)})}
},{
   freezeTableName:true,
   timestamps:false
});`
    return template
}
module.exports = render 