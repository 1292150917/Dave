"use strict";
var render = function (_a) {
    var db = _a.db;
    var template = "\nvar Sequelize = require(\"Sequelize\");\nconst sequelize = new Sequelize('" + db.database + "', '" + db.user + "', '" + db.password + "', {\n  host: '" + db.host + "',\n  port:" + db.port + ",\n  dialect: 'mysql',\n  define: {\n    timestamps: false\n  }\n}); \n\nmodule.exports = sequelize;\n    ";
    return template;
};
module.exports = render;
