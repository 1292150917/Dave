/*
 * @Author: your name
 * @Date: 2020-06-19 20:55:30
 * @LastEditTime: 2020-09-19 23:26:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\sdk\documents.ts
 */
function isName(item): boolean {
    return item !== 'query' && item !== 'delete' && item !== 'update' && item !== 'add' && item !== 'queryList'
}
var documentsrender = function (msg: any, name: any, comment: string) {
    var relevance = require("../../DaveFile/database/sdkdocuments.json")
    var apiParam = ''
    relevance[name] = relevance[name] || {}
    Object.keys(relevance[name]).map(s => {
        if (typeof relevance[name][s] === 'object' && isName(s)) {
            apiParam += val(name, relevance[name], s)
        }
    })
    if (relevance[name].add) {
        apiParam += val(name, relevance[name], 'add')
    } else {
        apiParam += yValue(name, comment, msg, 'add', '新增')
    }

    if (relevance[name].query) {
        apiParam += val(name, relevance[name], 'query')
    } else {
        apiParam += yValue(name, comment, msg, 'query', '查询详情')
    }

    if (relevance[name].queryList) {
        apiParam += val(name, relevance[name], 'queryList')
    } else {
        apiParam += yValue(name, comment, msg, 'queryList', '查询列表')
    }

    if (relevance[name].update) {
        apiParam += val(name, relevance[name], 'update')
    } else {
        apiParam += yValue(name, comment, msg, 'update', '更新')
    }

    if (relevance[name].delete) {
        apiParam += val(name, relevance[name], 'delete')
    } else {
        apiParam += yValue(name, comment, msg, 'delete', '删除')
    }
    return apiParam
}
function successJson(querys, msg) {
    var key = {
        "delete": `
        * @apiSuccessExample Success-Response:
        *      {
            *        status:200,
            *        data:"删除成功"
            *    }
        `,
        update: `
        * @apiSuccessExample Success-Response:
        *{
         *    status:200,
         *    data:"修改成功"
        *}
        `,
        query: msg ? `
        * @apiSuccessExample Success-Response:
         *    对应的字段
         *      {
         *        ${msg.map((s: any) => {
            if (s[querys]) {
                return (`
                                    *            "${s.Field}":"${s.Comment}"
                                `)
            } else {
                return ''
            }
        }).join('')}
         *       }
        
        ` : ''

    }
    return key[querys]
}
function valSucess(msg, state,name) {
    if (!msg[state].success) {
        return ''
    }
    if (msg[state].success === 'all') {
        var documents = require("../../DaveFile/database/documents.json")
        return `
        * @apiSuccessExample Success-Response:
        *    {
        *    ${Object.keys(documents[name]).map(s => {
        return (`
                    *       "${documents[name][s].Field}":"${documents[name][s].Comment}"
                `)
    }).join('')}
    `
        return 
    }
    return `
        * @apiSuccessExample Success-Response:
        *    {
        *    ${Object.keys(msg[state].success).map(s => {
        return (`
                    *       "${s}":"${msg[state].success[s]}"
                `)
    }).join('')}
    `
}
// name 对象 状态接口
function val(name, msg, state) {
    var s = `/**
    * @api {post} /${name}/${state} ${msg[state].title}
    * @apiDescription ""
    * @apiName ${state}${name}
    * @apiGroup ${msg.title}
    ${msg[state].props.map((s: any) => {
        return (`
       * @apiParam {string} ${s.title} ${s.msg}
   `)
    }).join('')}
    ${(state === 'query' || state === "queryList") ? `
    * @apiParam {string} page 分页，如果不需要可不发
    * @apiParam {string} pageSize 分页数量` : ''}
    * @apiSuccess {json} code *
     ${valSucess(msg, state,name)}}
    * @apiSampleRequest /${name}/${state}
    * @apiVersion 0.0.0
   */
   `
    return s
}
function yValue(name, comment, msg, state, value) {
    var sv = `
    /**
         * @api {post} /${name}/${state} ${comment ? comment : name}${value}
         * @apiDescription ""
         * @apiName ${state}${name}
         * @apiGroup ${name}
         ${msg.map((s: any) => {
        if (s[state]) {
            return (`
                     * @apiParam {string} ${s.Field} ${s.required ? '必填-' : ''}${s.Comment}
                 `)
        } else {
            return ''
        }
    }).join('')}
    
    ${(state === 'query' || state === "queryList") ? `
    * @apiParam {string} page 分页，如果不需要可不发
    * @apiParam {string} pageSize 分页数量` : ''}
         * @apiSuccess {json} code
          ${successJson(state, msg)}
         * @apiSampleRequest /${name}/${state}
         * @apiVersion 0.0.0
        */`
    return sv
}
module.exports = documentsrender 