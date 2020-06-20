/*
 * @Author: your name
 * @Date: 2020-05-19 19:26:16
 * @LastEditTime: 2020-06-20 17:39:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node\app.js
 */
var express = require('express');
var fs = require('fs')
var path = require('path') 
var bodyParser = require('body-parser')

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
var ue = bodyParser.urlencoded({extended:false})
app.use(bodyParser());

var v = fs.readdirSync(path.resolve('./controller'))
v.map(s => {
  var value = `${s.match(/(.+?).js$/)[1]}`
  app.use(`/${value}`, require(`./controller/${value}`));
})

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
