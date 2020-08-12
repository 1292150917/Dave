/*
 * @Author: your name
 * @Date: 2020-06-22 20:07:55
 * @LastEditTime: 2020-08-10 21:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodee:\nodeT\Dave\template\mysql\sequelize\indexmodels.ts
 */

interface Render {
    server: any, //新增字段
    name: any,
    model: any
}
var render = function ({ server, name, model }: Render) {
    var Require: string = ''
    var belongsTo: string = ''
    var tableinterface = require("../../../DaveFile/database/tableinterface.json")
    var include = []
    var keyBIAO = {}
    name.map((v: any) => {
        // 获取是否存在关联主键
        if (tableinterface[v] && tableinterface[v].relevance) {
            tableinterface[v].relevance.map(s => {
                include.push(...s.relevance)
                keyBIAO[s.berelevanceName] = true
                keyBIAO[s.elevanceName] = true
            })
        }
        // 当前表
        keyBIAO[v] = true
    })
    Object.keys(keyBIAO).map(v =>{
        Require += `
        var ${v} = require('./${v}');`
    })
    console.log(keyBIAO)
    if (include.length !== 0) {
        include.map(sv => {
            belongsTo += `
       ${sv.berelevanceName}.hasMany(${sv.elevanceName}, { foreignKey: '${sv.berelevancePrice}', targetKey: '${sv.elevancePrice}' });`
        })
    }
    var template = `
    ${Require}
    
    ${belongsTo}
    module.exports = { ${name.join(',')} }`
    return template
}
module.exports = render 