/*
 * @Author: your name
 * @Date: 2020-06-17 18:29:15
 * @LastEditTime: 2020-07-05 20:35:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\mysql\sequelize\models.ts
 */

interface Render {
    req: any,
}
var render = function (req: Render) {
    console.log(req.query)
    var template = `
    var request = require("request") //利用request包来进行请求发送
    request({
        url: 'https://api.weixin.qq.com/sns/jscode2session',
        data: {
            appid:"${req.query.AppID}",
            secret:"${req.query.AppSecret}",
            js_code:req.query.code, //此处为前端发过来的code编码
            grant_type:"authorization_code"
        },
        header: {
            "content-type": "application/json",
        }
    },function(error, response, body){
        if (!error && response.statusCode == 200) {
            // 此处为请求成功
        }
    })`
    return template
}
module.exports = render 