"use strict"

var express = require("express");
var router = express.Router();
var unity = require('../config/part_unity')
var query = require('../config/mysql');
var fs = require('fs')
var path = require('path')
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
    name.map((s: any) => {
        console.log(json[s])
    })
    data = {
        data: '新增成功！',
        status: 200
    }
    res.send(data)
})
module.exports = router