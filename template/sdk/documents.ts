/*
 * @Author: your name
 * @Date: 2020-06-19 20:55:30
 * @LastEditTime: 2020-08-06 21:40:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\sdk\documents.ts
 */
var documentsrender = function (msg: any, name: any, comment: string) {
    var apiParam = ''

    return `
        /**
         * @api {post} /${name}/add ${comment ? comment : name}新增
         * @apiDescription ""
         * @apiName Add${name}
         * @apiGroup ${comment ? comment : name}
         * @apiParam {string} id 主键 新增误发
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
         * @apiSampleRequest /${name}/add
         * @apiVersion 0.0.0
        */
       

             
		/**
		 * @api {post} /${name}/query ${comment ? comment : name}详情
		 * @apiDescription ""
		 * @apiName PostList${name}
		 * @apiGroup ${comment ? comment : name}
         * @apiParam {string} page 分页，如果不需要可不发
         * @apiParam {string} pageSize 分页数量
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
		 * @apiSampleRequest /${name}/query
		 * @apiVersion 0.0.0
		 */
        

        /**
		 * @api {post} /${name}/queryList ${comment ? comment : name}列表
		 * @apiDescription ""
		 * @apiName GetList${name}
		 * @apiGroup ${comment ? comment : name}
         * @apiParam {string} page 分页，如果不需要可不发
         * @apiParam {string} pageSize 分页数量
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
		 * @apiSampleRequest /${name}/queryList
		 * @apiVersion 0.0.0
		 */


       /**
        * @api {post} /${name}/update ${comment ? comment : name}修改
        * @apiDescription ""
        * @apiName Post${name}
        * @apiGroup ${comment ? comment : name}
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
        * @apiSampleRequest /${name}/update
        * @apiVersion 0.0.0
       */

       
		/**
		 * @api {post} /${name}/delete ${comment ? comment : name}删除
		 * @apiDescription ""
		 * @apiName delete${name}
		 * @apiGroup ${comment ? comment : name}
         * @apiParam {string} id 主键 新增误发
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
		 * @apiSampleRequest /${name}/delete
		 * @apiVersion 0.0.0
		 */
    `
}
module.exports = documentsrender 