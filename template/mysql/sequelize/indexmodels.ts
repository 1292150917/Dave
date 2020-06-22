/*
 * @Author: your name
 * @Date: 2020-06-22 20:07:55
 * @LastEditTime: 2020-06-22 21:26:56
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
    name.map((v: any) => {
        Require += `
        var ${v} = require('./${v}');`
        // 获取是否存在关联主键
        var valueList = model[v].filter((s: any) => s.relevance)
        if (valueList[0]) {
            valueList[0].relevance.map((value: any) => {
                belongsTo += `${v}.belongsTo(${value.elevanceName}, { foreignKey: '${value.berelevancePrice}', targetKey: '${value.elevancePrice}' });`
            })
        }
    })
    var template = `
    ${Require}
    
    ${belongsTo}
    
    module.exports = { ${name.join(',')} }`
    return template
}
module.exports = render 