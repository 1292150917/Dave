/*
 * @Author: your name
 * @Date: 2020-06-20 16:53:14
 * @LastEditTime: 2020-08-06 16:30:52
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \nodee:\nodeT\Dave\template\mysql\sequelize\controller.ts
 */

interface Render {
    addOrm: any,
    name: any,
    vname: any
}
var render = function ({ addOrm, name, vname }: Render) {
    // 生成验证规则
    var list: any = []
    addOrm.map((s: any) => {
        if (s.null) {
            list.push({ name: s.name, test: "" })
        }
    })
    var comment = ''
    var [v1, v2] = vname.TABLE_COMMENT.split(';')
    v2 ? comment = v1 : ''
    var toName = name.replace(name[0], (v: any) => { return v.toUpperCase() }) //首字母大写
    var template = `
let express = require('express');
let router = express.Router();
let service${toName} = require('../service/${name}.js')
service${toName} = new service${toName}()

/**
 * @api {post} /${name}/add ${comment ? comment : name}新增
 * @apiDescription ""
*/
router.post('/add', async function (req, res, next) {
    let data = await service${toName}.add(req,res)
    res.send(data)
});

/**
 * @api {post} /${name}/query ${comment ? comment : name}查询
 * @apiDescription ""
*/
router.post('/query', async function (req, res, next) {
    let data = await service${toName}.query(req,res)
    res.send(data)
});

/**
 * @api {post} /${name}/queryList ${comment ? comment : name}所有数据
 * @apiDescription ""
*/
router.post('/queryList', async function (req, res, next) {
    let data = await service${toName}.queryList(req,res)
    res.send(data)
});

/**
 * @api {post} /${name}/update ${comment ? comment : name}更新
 * @apiDescription ""
*/
router.post('/update', async function (req, res, next) {
    let data = await service${toName}.update(req,res)
    res.send(data)
});

/**
 * @api {post} /${name}/delete ${comment ? comment : name}删除数据-慎用delete语法
 * @apiDescription ""
*/
router.post('/delete', async function (req, res, next) {
    let data = await service${toName}.delete(req,res)
    res.send(data)
});
module.exports = router
    `
    return template
}
module.exports = render 