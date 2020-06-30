/*
 * @Author: your name
 * @Date: 2020-06-18 21:06:46
 * @LastEditTime: 2020-06-30 23:02:38
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
    // 清空之前的所有文件
    function delDir(path:string){
        let files = [];
        if(fs.existsSync(path)){
            files = fs.readdirSync(path);
            files.forEach((file:string, index) => {
                let curPath = path + "/" + file;
                if(fs.statSync(curPath).isDirectory()){
                    delDir(curPath); //递归删除文件夹
                } else {
                    fs.unlinkSync(curPath); //删除文件
                }
            });
            // fs.rmdirSync(path);
        }
    }
    delDir(cv('../DaveFile/database/documents'))
    json = JSON.parse(json)
    var data = {}
    fs.writeFileSync(cv('../DaveFile/database/documents.json'), JSON.stringify(json))
    var documents = require('../template/sdk/documents.ts')
    var jsoncurd = fs.readFileSync(cv('../config/index.json'), "utf-8")
    jsoncurd = JSON.parse(jsoncurd)
    var tableinterface = fs.readFileSync(cv('../DaveFile/database/tableinterface.json'), "utf-8")
    tableinterface = JSON.parse(tableinterface)
    var created = await query({
        sql: `SELECT
            TABLE_NAME,
            TABLE_COMMENT,
            TABLE_ROWS,
            CREATE_TIME,
            UPDATE_TIME
            FROM
                information_schema.TABLES
            WHERE
            table_schema = '${jsoncurd.database}'`, res
    })
    name.map((s: any) => {
        // 注释部分的代码
        var name = created.filter((vname:any) => vname.TABLE_NAME === s)
        var vname = ''
        if(name[0]){
            var [v1,v2] = name[0].TABLE_COMMENT.split(';')
            if(v2){
                vname = v1
            }
        }
        // 如果备注存在优先使用备注
        if(tableinterface[s] && tableinterface[s].name){
            vname = tableinterface[s].name
        }
        fs.writeFileSync(cv(`../DaveFile/database/documents/${s}.js`), documents(json[s], s, vname))
    })
    cmd.get("apidoc -i DaveFile/database/documents -o apidoc/", function (err, data) {
        zipper.sync.zip("./apidoc").compress().save("./apidoc.zip");
        data = {
            data: '新增成功！',
            status: 200,
            json
        }
        res.send(data)
    });
})

router.get('/download', async function (req: req, res: res) {
    res.download(cv(`../apidoc.zip`))
})

module.exports = router