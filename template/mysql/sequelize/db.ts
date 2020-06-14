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
  timezone : ${db.timezone},
});

exports.sequelize = sequelize;
    `
    return template
}
module.exports = render 