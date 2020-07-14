/*
 * @Descripttion:
 * @version:
 * @Author:
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-22 18:04:30
 */
"use strict";
var config = require('./index.json');
var unity_Class = /** @class */ (function () {
    function unity_Class(req, res) {
        var _this = this;
        this.req = '';
        this.res = '';
        this.openId = '';
        this.access_token_pl = '';
        this.req = req;
        this.res = res;
        this.access_token_pl = global.access_token_pl;
        Object.keys(config).forEach(function (s) {
            _this[s] = config[s];
        });
    }
    // 获取当前时间
    unity_Class.prototype.getNowFormatDate = function () {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var myDate = date.getHours();
        var getMinutes = date.getMinutes();
        var getSeconds = date.getSeconds();
        // if (month >= 1 && month <= 9) {
        //     month = "0" + month;
        // }
        // if (strDate >= 0 && strDate <= 9) {
        //     strDate = "0" + strDate;
        // }
        if (myDate >= 0 && myDate <= 9) {
            myDate = "0" + myDate;
        }
        if (getMinutes >= 0 && getMinutes <= 9) {
            getMinutes = "0" + getMinutes;
        }
        if (getSeconds >= 0 && getSeconds <= 9) {
            getSeconds = "0" + getSeconds;
        }
        var currentdate = year + "-" + month + "-" + strDate + " " + myDate + ":" + getMinutes + ":" + getSeconds;
        return currentdate;
    };
    // 根据日期获取以后的某天是几号 
    unity_Class.prototype.countDate = function (res, AddDayCount) {
        var dd = new Date();
        if (res) {
            dd = new Date(res);
        }
        //获取AddDayCount天后的日期
        dd.setDate(dd.getDate() + Number(AddDayCount));
        var y = dd.getFullYear();
        //获取当前月份的日期，不足10补0
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
        //获取当前几号，不足10补0
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        var firstDistribution = y + "-" + m + "-" + d;
        return firstDistribution;
    };
    // 获取当前时间戳
    unity_Class.prototype.nowTimestamp = function (res) {
        var num = new Date().getTime() / 1000;
        return parseInt(String(num));
    };
    unity_Class.prototype.dependTimestamp = function (res) {
        var date = res;
        if (!date) {
            return '';
        }
        date = date.substring(0, 19);
        date = date.replace(/-/g, '/');
        var timestamp = new Date(date).getTime();
        return timestamp;
    };
    //sql新增
    unity_Class.prototype.sqlAdd = function (name, s) {
        var v = [];
        var c = [];
        Object.keys(s).forEach(function (item) {
            v.push("'" + s[item] + "'");
            c.push(item);
        });
        return "INSERT INTO " + name + " (" + c.toString() + ") VALUES (" + v.toString() + ")";
    };
    // sql查询
    /**
     * @name:
     * @test: test font
     * @msg:
     * @param {rep.desc} 正序反  false为反 true为正 默认为反
     * @return:
     */
    unity_Class.prototype.sqlQuery = function (name, s, rep) {
        if (s === void 0) { s = { isdelete: 0 }; }
        var v = [];
        var c = [];
        Object.keys(s).forEach(function (item) {
            if (item === 'isdelete' && s[item] == 'false') {
                return;
            }
            v.push("" + s[item]);
            c.push(item);
        });
        var value = '';
        v.forEach(function (item, index) {
            if (index === 0) {
                value = c[index] + "=\"" + v[index] + "\"";
            }
            else {
                value += "and " + c[index] + "=\"" + v[index] + "\"";
            }
        });
        var val = "select * from " + name + " where " + value;
        if (rep && rep.descName) {
            val += "" + (rep !== false && rep !== undefined ? "order by " + rep.descName + " " + (rep.desc ? '' : 'desc') : '');
        }
        if (rep && rep.page) {
            val += " limit " + (rep.page - 1) * rep.total + "," + rep.total;
        }
        return val;
    };
    // 参数1 表名称 参数二 判断的值  参数三 更改的值
    /**
    @param name 表名称 字符串
    @param New 查询值 对象 {查询的key,查询的value}
    @param alter 更改值 对象 {更改的key，更改的value}
    */
    unity_Class.prototype.sqlUpdate = function (name, New, alter) {
        if (New === void 0) { New = {}; }
        if (alter === void 0) { alter = {}; }
        var tak = '';
        var value = '';
        Object.keys(New).forEach(function (item, index) {
            if (index === 0) {
                tak = item + "='" + New[item] + "'";
            }
            else {
                tak += "and " + item + "='" + New[item] + "'";
            }
        });
        Object.keys(alter).forEach(function (item, index) {
            if (index === 0) {
                value = item + "='" + alter[item] + "'";
            }
            else {
                value += ", " + item + "='" + alter[item] + "'";
            }
        });
        return "UPDATE " + name + " SET " + value + " WHERE " + tak;
    };
    return unity_Class;
}());
module.exports = unity_Class;
