define({ "api": [
  {
    "type": "post",
    "url": "/kecheng/add",
    "title": "个人中心新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addkecheng",
    "group": "个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心"
  },
  {
    "type": "post",
    "url": "/kecheng/queryList",
    "title": "个人中心列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListkecheng",
    "group": "个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心"
  },
  {
    "type": "post",
    "url": "/kecheng/query",
    "title": "个人中心详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListkecheng",
    "group": "个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心"
  },
  {
    "type": "post",
    "url": "/kecheng/update",
    "title": "个人中心修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postkecheng",
    "group": "个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心"
  },
  {
    "type": "post",
    "url": "/kecheng/delete",
    "title": "个人中心删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletekecheng",
    "group": "个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心"
  },
  {
    "type": "post",
    "url": "/userinfo/add",
    "title": "我是id新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Adduserinfo",
    "group": "我是id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/userinfo/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/userinfo.js",
    "groupTitle": "我是id"
  },
  {
    "type": "post",
    "url": "/userinfo/queryList",
    "title": "我是id列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListuserinfo",
    "group": "我是id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/userinfo/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/userinfo.js",
    "groupTitle": "我是id"
  },
  {
    "type": "post",
    "url": "/userinfo/query",
    "title": "我是id详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListuserinfo",
    "group": "我是id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/userinfo/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/userinfo.js",
    "groupTitle": "我是id"
  },
  {
    "type": "post",
    "url": "/userinfo/update",
    "title": "我是id修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postuserinfo",
    "group": "我是id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/userinfo/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/userinfo.js",
    "groupTitle": "我是id"
  },
  {
    "type": "post",
    "url": "/userinfo/delete",
    "title": "我是id删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deleteuserinfo",
    "group": "我是id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/userinfo/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/userinfo.js",
    "groupTitle": "我是id"
  }
] });
