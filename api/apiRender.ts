/*
 * @Author: your name
 * @Date: 2020-06-18 21:06:46
 * @LastEditTime: 2020-06-19 22:55:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\api\apiRender.ts
 */
"use strict"

var express = require("express");
var router = express.Router();
var unity = require('../config/part_unity')
var query = require('../config/mysql');
var fs = require('fs')
var path = require('path')
var cmd = require("node-cmd");
var zipper = require("zip-local");
interface Callback {
    status: number,
    msg?: "",
    data?: object | string
}
unity = new unity()

function cv(v: any) {
    return path.resolve(__dirname, v)
}
router.post('/render', async function (req: req, res: res) {
    var { name } = req.body
    var json = fs.readFileSync(cv('../DaveFile/database/watch.json'), "utf-8")
    json = JSON.parse(json)
    var data = {}
    fs.writeFileSync(cv('../DaveFile/database/documents.json'), JSON.stringify(json))
    var documents = require('../template/sdk/documents.ts')
    name.map((s: any) => {
        fs.writeFileSync(cv(`../DaveFile/database/documents/${s}.js`), documents(json[s], s))
    })
    cmd.get("apidoc -i DaveFile/database/documents -o apidoc/", function (err, data) {
        console.log(data);
        zipper.sync.zip("./apidoc").compress().save("./target.zip");
        data = {
            data: '新增成功！',
            status: 200,
            json
        }
        res.send(data)
    });
})

router.get('/download', async function (req: req, res: res) {
    res.download(cv(`../target.zip`))
})

module.exports = router