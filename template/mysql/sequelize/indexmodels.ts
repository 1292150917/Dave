/*
 * @Author: your name
 * @Date: 2020-06-22 20:07:55
 * @LastEditTime: 2020-08-14 16:03:27
 * @LastEditors: zhang zi fang
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
                s.relevance.map(sv =>{
                    sv.filter(filterS =>{
                        keyBIAO[filterS.berelevanceName] = true
                        keyBIAO[filterS.elevanceName] = true
                    })
                })
            })
        }
        // 当前表
        keyBIAO[v] = true
    })
    Object.keys(keyBIAO).map(v =>{
        Require += `
        var ${v} = require('./${v}');`
    })
    if (include.length !== 0) {
        include.map(sv => {
            sv.map(s =>{
      belongsTo += `
        ${s.berelevanceName}.hasMany(${s.elevanceName}, { foreignKey: '${s.berelevancePrice}', targetKey: '${s.elevancePrice}' });`
            })
           
        })
    }
    var template = `
        //基础表
    ${Require}
    
        //关联表
    ${belongsTo}
    
    module.exports = { ${Object.keys(keyBIAO).join(',')} }`
    return template
}
module.exports = render 