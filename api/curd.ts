"use strict"

var express = require("express");
var router = express.Router();
var unity = require('../config/part_unity')
var query = require('../config/mysql');
interface Callback {
    status: number,
    msg?: "",
    data?: object | string
}
type req = any;
type res = any;
unity = new unity()
router.post('/add', async function (req: req, res: res) {
    var { form, name } = req.body
    await query({ sql: unity.sqlAdd(name, form), res })
    var data: Callback
    data = {
        data: '新增成功！',
        status: 200
    }
    res.send(data)
})
router.post('/delete', async function (req: req, res: res) {
    var { id, name } = req.body
    await query({ sql: `delete from ${name} where id =${id}`, res })
    var data: Callback
    data = {
        status: 200
    }
    res.send(data)
})
router.post('/update', async function (req: req, res: res) {
    var { name, form } = req.body
    var id = form.id
    delete form.id
    await query({
        name,
        sql: unity.sqlUpdate(name, {
            id
        }, form), res
    })
    var data: Callback
    data = {
        status: 200
    }
    res.send(data)
})
module.exports = router