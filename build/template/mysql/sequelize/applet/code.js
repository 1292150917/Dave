"use strict";
/*
 * @Author: your name
 * @Date: 2020-06-17 18:29:15
 * @LastEditTime: 2020-07-05 20:35:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\mysql\sequelize\models.ts
 */
var render = function (req) {
    console.log(req.query);
    var template = "\n    var request = require(\"request\") //\u5229\u7528request\u5305\u6765\u8FDB\u884C\u8BF7\u6C42\u53D1\u9001\n    request({\n        url: 'https://api.weixin.qq.com/sns/jscode2session',\n        data: {\n            appid:\"" + req.query.AppID + "\",\n            secret:\"" + req.query.AppSecret + "\",\n            js_code:req.query.code, //\u6B64\u5904\u4E3A\u524D\u7AEF\u53D1\u8FC7\u6765\u7684code\u7F16\u7801\n            grant_type:\"authorization_code\"\n        },\n        header: {\n            \"content-type\": \"application/json\",\n        }\n    },function(error, response, body){\n        if (!error && response.statusCode == 200) {\n            // \u6B64\u5904\u4E3A\u8BF7\u6C42\u6210\u529F\n        }\n    })";
    return template;
};
module.exports = render;
