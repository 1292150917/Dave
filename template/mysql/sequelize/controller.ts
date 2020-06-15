
interface Render {
    addOrm: any,
    name: any
}
var render = function ({ addOrm, name }: Render) {
    // 生成验证规则
    var list: any = []
    addOrm.map((s: any) => {
        if (s.null) {
            list.push({ name: s.name, test: "" })
        }
    })
    var toName = name.replace(name[0], (v: any) => { return v.toUpperCase() }) //首字母大写
    var template = `
let express = require('express');
let router = express.Router();
let service${toName} = require('../service/${name}.js')
service${toName} = new service${toName}()
// 新增数据
router.post('/add', async function (req, res, next) {
    let data = await service${toName}.add(req,res)
    res.send(data)
});
// 查询单条数据
router.post('/query', async function (req, res, next) {
    let data = await service${toName}.query(req,res)
    res.send(data)
});
// 查询表所有数据
router.post('/queryList', async function (req, res, next) {
    let data = await service${toName}.queryList(req,res)
    res.send(data)
});
// 更新数据
router.post('/update', async function (req, res, next) {
    let data = await service${toName}.update(req,res)
    res.send(data)
});
// 删除数据-慎用delete语法
router.post('/delete', async function (req, res, next) {
    let data = await service${toName}.delete(req,res)
    res.send(data)
});
    `
    return template
}
module.exports = render 