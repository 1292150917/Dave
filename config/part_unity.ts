/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2019-09-27 09:01:42
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-11-25 09:40:33
 */
"use strict"

var config = require('./index.json')
class unity_Class {
    req = ''
    res = ''
    openId = ''
    access_token_pl = ''
    constructor(req: any, res: any) {
        this.req = req
        this.res = res
        this.access_token_pl = (<any>global).access_token_pl
        if (global.webpageView) {
            if (this.req && this.req.cookies && this.req.cookies.index) {
                config = JSON.parse(this.req.cookies.index)
            }
        }
        Object.keys(config).forEach(s => {
            this[s] = config[s]
        })
    }
    // 获取当前时间
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var myDate: any = date.getHours();
        var getMinutes: any = date.getMinutes();
        var getSeconds: any = date.getSeconds();
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
        var currentdate = `${year}-${month}-${strDate} ${myDate}:${getMinutes}:${getSeconds}`
        return currentdate;
    }
    // 根据日期获取以后的某天是几号 
    countDate(res: string, AddDayCount: number): string {
        let dd = new Date()
        if (res) {
            dd = new Date(res)
        }
        //获取AddDayCount天后的日期
        dd.setDate(dd.getDate() + Number(AddDayCount));
        let y = dd.getFullYear();
        //获取当前月份的日期，不足10补0
        let m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1)
        //获取当前几号，不足10补0
        let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate()
        let firstDistribution = y + "-" + m + "-" + d
        return firstDistribution
    }
    // 获取当前时间戳
    nowTimestamp(res: string): number {
        var num = new Date().getTime() / 1000
        return parseInt(String(num));
    }
    dependTimestamp(res: string): any {
        var date = res
        if (!date) {
            return ''
        }
        date = date.substring(0, 19);
        date = date.replace(/-/g, '/');
        var timestamp = new Date(date).getTime();
        return timestamp
    }
    //sql新增
    sqlAdd(name: any, s: any) {
        var v: string[] = []
        var c: string[] = []
        Object.keys(s).forEach(item => {
            v.push(`'${s[item]}'`)
            c.push(item)
        })
        return `INSERT INTO ${name} (${c.toString()}) VALUES (${v.toString()})`
    }
    // sql查询
    /**
     * @name: 
     * @test: test font
     * @msg: 
     * @param {rep.desc} 正序反  false为反 true为正 默认为反
     * @return: 
     */
    sqlQuery(name: any, s: any = { isdelete: 0 }, rep?: any) {
        var v: string[] = []
        var c: string[] = []
        Object.keys(s).forEach(item => {
            if (item === 'isdelete' && s[item] == 'false') {
                return
            }
            v.push(`${s[item]}`)
            c.push(item)
        })
        var value = ''
        v.forEach((item, index) => {
            if (index === 0) {
                value = `${c[index]}="${v[index]}"`
            } else {
                value += `and ${c[index]}="${v[index]}"`
            }
        })
        var val = `select * from ${name} where ${value}`
        if (rep && rep.descName) {
            val += `${rep !== false && rep !== undefined ? `order by ${rep.descName} ${rep.desc ? '' : 'desc'}` : ''}`
        }
        if (rep && rep.page) {
            val += ` limit ${(rep.page - 1) * rep.total},${rep.total}`
        }
        return val
    }
    // 参数1 表名称 参数二 判断的值  参数三 更改的值
    /**
    @param name 表名称 字符串
    @param New 查询值 对象 {查询的key,查询的value}
    @param alter 更改值 对象 {更改的key，更改的value}
    */
    sqlUpdate(name: any, New: any = {}, alter: any = {}) {
        var tak = ''
        var value = ''
        Object.keys(New).forEach((item, index) => {
            if (index === 0) {
                tak = `${item}='${New[item]}'`
            } else {
                tak += `and ${item}='${New[item]}'`
            }
        })
        Object.keys(alter).forEach((item, index) => {
            if (index === 0) {
                value = `${item}='${alter[item]}'`
            } else {
                value += `, ${item}='${alter[item]}'`
            }
        })
        return `UPDATE ${name} SET ${value} WHERE ${tak}`
    }

}
module.exports = unity_Class