<!--
 * @Author: your name
 * @Date: 2020-06-06 12:46:34
 * @LastEditTime: 2020-12-02 14:10:27
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\code-generation\README.md
--> 

<h1 align="center" style="text-align:center;">
  Dave
</h1>

<p align="center" >
  <a href="https://gitee.com/zzf0529/Dave"><img src="https://img.shields.io/badge/MySQL-5.2%2B-brightgreen.svg?style=flat"></a>
  <a href="https://gitee.com/zzf0529/Dave"><img src="https://img.shields.io/badge/JavaScript-ES6%2B-brightgreen.svg?style=flat"></a>
  <a href="https://gitee.com/zzf0529/Dave"><img src="https://img.shields.io/badge/SQLServer-2012%2B-brightgreen.svg?style=flat"></a>
  <a href="https://gitee.com/zzf0529/Dave"><img src="https://img.shields.io/badge/Oracle-11%2B-brightgreen.svg?style=flat"></a>
  <a href="https://gitee.com/zzf0529/Dave"><img src="https://img.shields.io/badge/node-5.2%2B-brightgreen.svg?style=flat"></a>
  <a href='https://gitee.com/zzf0529/Dave/stargazers'><img src='https://gitee.com/zzf0529/Dave/badge/star.svg?theme=dark' alt='star'></img></a>
</p>

<p align="center">网页版正在逐步更新：采用cookie以及Storage缓存，Dave绝不存储用户一分信息（包含操作信息等）。</p>
<p align="center">
网页版地址（个人开源均不提供测试数据库）：http://dave.zzf9.com/。

</p>

### 网页版特点功能

#### 优点
* 可不下载代码，线上直接链接数据库进行crud

#### 缺点
* 不可生成可部署代码，仅允许复制粘贴代码进行操作。

#### 原因
* 数据库模型均是本地cookie存储，如果几百个表，考虑到接口交互压力，而不提供线上生成下载代码功能。而且接口均不记录使用者的数据库信息等~


<p align="center">🚀后端接口和文档自动化，前端(客户端) 定制返回JSON的数据和结构！</p>

Dave是一种专为API而生的 JSON网络传输协议 以及 基于这套协议实现的ORM库。<br />
为 简单的增删改查、复杂的查询、简单的事务操作 提供了完全自动化的API。<br />
能大幅降低开发和沟通成本，简化开发流程，缩短开发周期。<br />
适合中小型前后端分离的项目，尤其是互联网创业项目和企业自用项目。<br />

通过自动化API，前端可以定制任何数据、任何结构！<br />
大部分HTTP请求后端再也不用写接口了，更不用写文档了！<br />
前端再也不用和后端沟通接口或文档问题了！再也不会被文档各种错误坑了！<br />
后端再也不用为了兼容旧接口写新版接口和文档了！再也不会被前端随时随地没完没了地烦了！

### 特点功能

#### 在线解析
* 自动生成接口文档，清晰可读永远最新
* 自动校验与格式化，支持高亮和收展
* 自动生成各种语言代码，一键下载
* 自动管理与测试接口用例，一键共享
* 自动给请求JSON加注释，一键切换

#### 特殊用法
* 自动生成公众号授权/支付/分享等代码
* 自动生成小程序授权/支付/分享等代码
* 公众号管理
* 小程序管理

#### 对于前端
* 不用再向后端催接口、求文档
* 数据和结构完全定制，要啥有啥
* 看请求知结果，所求即所得
* 可一次获取任何数据、任何结构
* 能去除重复数据，节省流量提高速度

#### 对于后端
* 提供通用接口，大部分API不用再写
* 自动生成文档，不用再编写和维护
* 自动校验权限、自动管理版本、自动防SQL注入
* 开放API无需划分版本，始终保持兼容
* 支持增删改查、模糊搜索、正则匹配、远程函数等

<br />

### 技术交流

如果有什么问题或建议可以 [提ISSUE](https://gitee.com/zzf0529/Dave/issues) 或 加群，交流技术，分享经验。<br >
如果你解决了某些bug，或者新增了一些功能，欢迎 [贡献代码](https://gitee.com/zzf0529/Dave/pulls)，感激不尽~

### 为什么要用Dave？
[前后端 关于接口的 沟通、文档、联调 等 10 大痛点解析](https://gitee.com/TommyLemon/APIJSON/wikis)
  <div class="homePage" style="line-height: 40px;">
    <h1>代码生成器(框架生成说明介绍)</h1>
    <h3>注意：</h3>
    <p>1.表的基础结构分别为id,createtime,updatetime</p>
    <h3>介绍</h3>
    <p>该套代码生成器仅限于 node框架内的结构生成规则, 所有生成的实现统一在服务端进行处理, 然后返回, 如需要进行修改, 修改后台服务的接口实现即可。</p>
    <h3>内容</h3>
    <p>目前整套的生成内容主要围绕整套框架的设计结构进行, 覆盖后台(WCF接口、数据接口、业务层)、前台的代码生成(View 及ViewModel层), 如下所示。</p>
    <h3>支持</h3>
    <p>
      1.支持生成可预览编辑的代码、直接复制进行移植
      <br />2.直接生成文件, 无论是类库文件、还是前端的UI .xaml文件。
      <br />3.支持代码高亮、方便进行查看编辑
      <br />4.暂只支持mysql但是并不是以后就打算支持mysql 会多种数据库选择
      <br />
    </p>
    <h3>已完成的</h3>
    <p>
      1.数据动态链接，数据结构的管控
      <br />2.表中的数据查看
      <br />3.数据可在视图中进行编辑修改。
      <br />4.可通过表/类结构实现api生成
      <br />5.可通过表/类结构实现接口文档生成
    </p>
    <!-- <h3>未来会完成的</h3>
    <p>
      <br />4.可实现操作监控
      <br />6.可管控定时任务
      <br />7.微信小程序/公众号专用区域 - 微信支付快速生成 快速授权 -等jsdk操作
      <br />8.高级用法（内含一键生成代码。）从路由到model dao 一键部署。
      <br />9.文档生成高级用法,数据库联表表查询
      <br />10.多环境切换/多orm供选择
    </p> -->
    <p>需要先创建链接如下操作</p>
    <p>进行数据库链接</p>
    <img src="https://zzf9.com/images/1.png"/>
    <p>网页附属功能可以查看修改您的数据结构（不推荐使用-可修改表描述）</p>
    <img src="https://zzf9.com/images/2.png"/>
    <p>可以对数据进行增删改查</p>
    <img src="https://zzf9.com/images/3.png"/>
    <p>代码生成部分，mvc数据结构</p>
    <img src="https://zzf9.com/images/4.png"/>
    <p>生成代码目录结构</p>
    <img src="https://zzf9.com/images/5.png"/>
    <p>可一键生成文档</p>
    <img src="https://zzf9.com/images/6.png"/>
    <p>文档样式，并且支持在线调试结构</p>
    <img src="https://zzf9.com/images/7.png"/>
    <p>代码下载后 执行如下命令</p>
    <p>npm install</p>
    <p>npm run node</p>
  </div>
  
  ### 代码不是伪开源 此处是node代码 前端代码是加密后的 因为前端选用vue 迫不得已  [前端开源地址](https://gitee.com/zzf0529/Dave-leading)

   
	####  Q群：978613019   Dave专用催更。bug，交流专用群