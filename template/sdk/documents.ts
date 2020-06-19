/*
 * @Author: your name
 * @Date: 2020-06-19 20:55:30
 * @LastEditTime: 2020-06-19 23:03:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\sdk\documents.ts
 */
var documentsrender = function (msg: any, name: any) {
    var apiParam = ''

    return `
        /**
         * @api {post} /${name}/add ${name}配置新增
         * @apiDescription ""
         * @apiName Addbanner
         * @apiGroup ${name}配置
         ${msg.map((s: any) => {
        if (s.add) {
            return (`
                     * @apiParam {string} ${s.Field} ${s.required ? '必填-' : ''}${s.Comment}
                 `)
        } else {
            return ''
        }
    }).join('')}
         * @apiSuccess {json} code
         * @apiSampleRequest http://gtrhtr.51vip.biz/banner/add
         * @apiVersion 0.0.0
        */
       

             
		/**
		 * @api {get} /${name}/query ${name}配置查询详情
		 * @apiDescription ""
		 * @apiName Getbanner
		 * @apiGroup ${name}配置
         ${msg.map((s: any) => {
        if (s.query) {
            return (` 
                * @apiParam {string} ${s.Field} ${s.required ? '必填-' : ''}${s.Comment}
                `)
        } else {
            return ''
        }
    }).join('')}
		 * @apiSuccess {json} code
		 * @apiSampleRequest http://gtrhtr.51vip.biz/banner/query
		 * @apiVersion 0.0.0
		 */

        /**
		 * @api {get} /${name}/queryList ${name}配置查询列表
		 * @apiDescription ""
		 * @apiName Getbanner
		 * @apiGroup ${name}配置
         ${msg.map((s: any) => {
        if (s.queryList) {
            return (` 
                * @apiParam {string} ${s.Field} ${s.required ? '必填-' : ''}${s.Comment}
                `)
        } else {
            return ''
        }
    }).join('')}
		 * @apiSuccess {json} code
		 * @apiSampleRequest http://gtrhtr.51vip.biz/banner/queryList
		 * @apiVersion 0.0.0
		 */


       /**
        * @api {get} /${name}/update ${name}配置修改
        * @apiDescription ""
        * @apiName Updatefinancial
        * @apiGroup ${name}配置
        ${msg.map((s: any) => {
        if (s.update) {
            return (` 
                * @apiParam {string} ${s.Field} ${s.required ? '必填-' : ''}${s.Comment}
                `)
        } else {
            return ''
        }
    }).join('')}
       
        * @apiSuccess {json} code
        * @apiSampleRequest http://gtrhtr.51vip.biz/financial/update
        * @apiVersion 0.0.0
       */

       
		/**
		 * @api {get} /${name}/delete ${name}配置删除
		 * @apiDescription ""
		 * @apiName Deletebanner
		 * @apiGroup ${name}配置
         ${msg.map((s: any) => {
        if (s.add) {
            return (`
                 * @apiParam {string} ${s.Field} ${s.delete ? '必填-' : ''}${s.Comment}
                 `)
        } else {
            return ''
        }
    }).join('')}
		 * @apiSuccess {json} code
		 * @apiSampleRequest http://gtrhtr.51vip.biz/banner/delete
		 * @apiVersion 0.0.0
		 */
    `
}
module.exports = documentsrender 