"use strict";
/*
 * @Author: your name
 * @Date: 2020-06-19 20:55:30
 * @LastEditTime: 2020-06-30 23:04:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\sdk\documents.ts
 */
var documentsrender = function (msg, name, comment) {
    var apiParam = '';
    return "\n        /**\n         * @api {post} /" + name + "/add " + (comment ? comment : name) + "\u65B0\u589E\n         * @apiDescription \"\"\n         * @apiName Add" + name + "\n         * @apiGroup " + (comment ? comment : name) + "\n         * @apiParam {string} id \u4E3B\u952E \u65B0\u589E\u8BEF\u53D1\n         " + msg.map(function (s) {
        if (s.add) {
            return ("\n                     * @apiParam {string} " + s.Field + " " + (s.required ? '必填-' : '') + s.Comment + "\n                 ");
        }
        else {
            return '';
        }
    }).join('') + "\n         * @apiSuccess {json} code\n         * @apiSampleRequest /" + name + "/add\n         * @apiVersion 0.0.0\n        */\n       \n\n             \n\t\t/**\n\t\t * @api {post} /" + name + "/query " + (comment ? comment : name) + "\u8BE6\u60C5\n\t\t * @apiDescription \"\"\n\t\t * @apiName PostList" + name + "\n\t\t * @apiGroup " + (comment ? comment : name) + "\n         * @apiParam {string} id \u4E3B\u952E \u65B0\u589E\u8BEF\u53D1\n         " + msg.map(function (s) {
        if (s.query) {
            return (" \n                * @apiParam {string} " + s.Field + " " + (s.required ? '必填-' : '') + s.Comment + "\n                ");
        }
        else {
            return '';
        }
    }).join('') + "\n\t\t * @apiSuccess {json} code\n\t\t * @apiSampleRequest /" + name + "/query\n\t\t * @apiVersion 0.0.0\n\t\t */\n\n        /**\n\t\t * @api {post} /" + name + "/queryList " + (comment ? comment : name) + "\u5217\u8868\n\t\t * @apiDescription \"\"\n\t\t * @apiName GetList" + name + "\n\t\t * @apiGroup " + (comment ? comment : name) + "\n         * @apiParam {string} id \u4E3B\u952E \u65B0\u589E\u8BEF\u53D1\n         " + msg.map(function (s) {
        if (s.queryList) {
            return (" \n                * @apiParam {string} " + s.Field + " " + (s.required ? '必填-' : '') + s.Comment + "\n                ");
        }
        else {
            return '';
        }
    }).join('') + "\n\t\t * @apiSuccess {json} code\n\t\t * @apiSampleRequest /" + name + "/queryList\n\t\t * @apiVersion 0.0.0\n\t\t */\n\n\n       /**\n        * @api {post} /" + name + "/update " + (comment ? comment : name) + "\u4FEE\u6539\n        * @apiDescription \"\"\n        * @apiName Post" + name + "\n        * @apiGroup " + (comment ? comment : name) + "\n        * @apiParam {string} id \u4E3B\u952E \u65B0\u589E\u8BEF\u53D1\n        " + msg.map(function (s) {
        if (s.update) {
            return (" \n                * @apiParam {string} " + s.Field + " " + (s.required ? '必填-' : '') + s.Comment + "\n                ");
        }
        else {
            return '';
        }
    }).join('') + "\n       \n        * @apiSuccess {json} code\n        * @apiSampleRequest /" + name + "/update\n        * @apiVersion 0.0.0\n       */\n\n       \n\t\t/**\n\t\t * @api {post} /" + name + "/delete " + (comment ? comment : name) + "\u5220\u9664\n\t\t * @apiDescription \"\"\n\t\t * @apiName delete" + name + "\n\t\t * @apiGroup " + (comment ? comment : name) + "\n         * @apiParam {string} id \u4E3B\u952E \u65B0\u589E\u8BEF\u53D1\n         " + msg.map(function (s) {
        if (s.add) {
            return ("\n                 * @apiParam {string} " + s.Field + " " + (s.delete ? '必填-' : '') + s.Comment + "\n                 ");
        }
        else {
            return '';
        }
    }).join('') + "\n\t\t * @apiSuccess {json} code\n\t\t * @apiSampleRequest /" + name + "/delete\n\t\t * @apiVersion 0.0.0\n\t\t */\n    ";
};
module.exports = documentsrender;
