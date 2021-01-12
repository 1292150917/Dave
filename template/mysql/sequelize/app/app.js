/*
 * @Author: your name
 * @Date: 2020-05-19 19:26:16
 * @LastEditTime: 2021-01-12 10:03:29
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \node\app.js
 */
var express = require('express');
var fs = require('fs')
var path = require('path') 
var bodyParser = require('body-parser')

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

var v = fs.readdirSync(path.resolve('./controller'))
v.map(s => {
  var value = `${s.match(/(.+?).js$/)[1]}`
  app.use(`/${value}`, require(`./controller/${value}`));
})

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log('启动成功:端口为' + err.status || 500)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
