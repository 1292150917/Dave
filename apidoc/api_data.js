define({ "api": [
  {
    "type": "post",
    "url": "/mall_goods_service/add",
    "title": "mall_goods_service新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_goods_service",
    "group": "mall_goods_service",
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
            "field": "service_name",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_explain",
            "description": "<p>服务简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
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
        "url": "/mall_goods_service/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_service.js",
    "groupTitle": "mall_goods_service"
  },
  {
    "type": "post",
    "url": "/mall_goods_service/queryList",
    "title": "mall_goods_service列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_goods_service",
    "group": "mall_goods_service",
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
        "url": "/mall_goods_service/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_service.js",
    "groupTitle": "mall_goods_service"
  },
  {
    "type": "post",
    "url": "/mall_goods_service/query",
    "title": "mall_goods_service详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_goods_service",
    "group": "mall_goods_service",
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
            "field": "service_name",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_explain",
            "description": "<p>服务简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
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
        "url": "/mall_goods_service/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_service.js",
    "groupTitle": "mall_goods_service"
  },
  {
    "type": "post",
    "url": "/mall_goods_service/update",
    "title": "mall_goods_service修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_goods_service",
    "group": "mall_goods_service",
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
            "field": "service_name",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_explain",
            "description": "<p>服务简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
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
        "url": "/mall_goods_service/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_service.js",
    "groupTitle": "mall_goods_service"
  },
  {
    "type": "post",
    "url": "/mall_goods_service/delete",
    "title": "mall_goods_service删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_goods_service",
    "group": "mall_goods_service",
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
            "field": "service_name",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service_explain",
            "description": "<p>服务简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
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
        "url": "/mall_goods_service/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_service.js",
    "groupTitle": "mall_goods_service"
  },
  {
    "type": "post",
    "url": "/mall_pb_product_relation/add",
    "title": "mall pb积关系新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_pb_product_relation",
    "group": "mall_pb积关系",
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
            "field": "relation_id",
            "description": "<p>关系id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_panic",
            "description": "<p>抢购价</p>"
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
        "url": "/mall_pb_product_relation/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_pb_product_relation.js",
    "groupTitle": "mall_pb积关系"
  },
  {
    "type": "post",
    "url": "/mall_pb_product_relation/queryList",
    "title": "mall pb积关系列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_pb_product_relation",
    "group": "mall_pb积关系",
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
        "url": "/mall_pb_product_relation/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_pb_product_relation.js",
    "groupTitle": "mall_pb积关系"
  },
  {
    "type": "post",
    "url": "/mall_pb_product_relation/query",
    "title": "mall pb积关系详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_pb_product_relation",
    "group": "mall_pb积关系",
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
            "field": "relation_id",
            "description": "<p>关系id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_panic",
            "description": "<p>抢购价</p>"
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
        "url": "/mall_pb_product_relation/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_pb_product_relation.js",
    "groupTitle": "mall_pb积关系"
  },
  {
    "type": "post",
    "url": "/mall_pb_product_relation/update",
    "title": "mall pb积关系修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_pb_product_relation",
    "group": "mall_pb积关系",
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
            "field": "relation_id",
            "description": "<p>关系id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_panic",
            "description": "<p>抢购价</p>"
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
        "url": "/mall_pb_product_relation/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_pb_product_relation.js",
    "groupTitle": "mall_pb积关系"
  },
  {
    "type": "post",
    "url": "/mall_pb_product_relation/delete",
    "title": "mall pb积关系删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_pb_product_relation",
    "group": "mall_pb积关系",
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
            "field": "relation_id",
            "description": "<p>关系id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_panic",
            "description": "<p>抢购价</p>"
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
        "url": "/mall_pb_product_relation/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_pb_product_relation.js",
    "groupTitle": "mall_pb积关系"
  },
  {
    "type": "post",
    "url": "/mall_goods_img/add",
    "title": "商品图片新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_goods_img",
    "group": "商品图片",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_img_url",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_img_type",
            "description": "<p>图片类型  0为缩略图 1为轮播图</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
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
        "url": "/mall_goods_img/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_img.js",
    "groupTitle": "商品图片"
  },
  {
    "type": "post",
    "url": "/mall_goods_img/queryList",
    "title": "商品图片列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_goods_img",
    "group": "商品图片",
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
        "url": "/mall_goods_img/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_img.js",
    "groupTitle": "商品图片"
  },
  {
    "type": "post",
    "url": "/mall_goods_img/query",
    "title": "商品图片详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_goods_img",
    "group": "商品图片",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_img_url",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_img_type",
            "description": "<p>图片类型  0为缩略图 1为轮播图</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
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
        "url": "/mall_goods_img/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_img.js",
    "groupTitle": "商品图片"
  },
  {
    "type": "post",
    "url": "/mall_goods_img/update",
    "title": "商品图片修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_goods_img",
    "group": "商品图片",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_img_url",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_img_type",
            "description": "<p>图片类型  0为缩略图 1为轮播图</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
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
        "url": "/mall_goods_img/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_img.js",
    "groupTitle": "商品图片"
  },
  {
    "type": "post",
    "url": "/mall_goods_img/delete",
    "title": "商品图片删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_goods_img",
    "group": "商品图片",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_img_url",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_img_type",
            "description": "<p>图片类型  0为缩略图 1为轮播图</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
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
        "url": "/mall_goods_img/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_img.js",
    "groupTitle": "商品图片"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_info/add",
    "title": "商场商品标签信息新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_goods_tag_info",
    "group": "商场商品标签信息",
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
            "field": "tag_name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_desc",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_type",
            "description": "<p>标签类型   0=首页标签</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_pic",
            "description": "<p>标签图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": "<p>顺序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级tag id，第一级为-1</p>"
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
        "url": "/mall_goods_tag_info/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_info.js",
    "groupTitle": "商场商品标签信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_info/queryList",
    "title": "商场商品标签信息列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_goods_tag_info",
    "group": "商场商品标签信息",
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
        "url": "/mall_goods_tag_info/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_info.js",
    "groupTitle": "商场商品标签信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_info/query",
    "title": "商场商品标签信息详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_goods_tag_info",
    "group": "商场商品标签信息",
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
            "field": "tag_name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_desc",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_type",
            "description": "<p>标签类型   0=首页标签</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_pic",
            "description": "<p>标签图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": "<p>顺序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级tag id，第一级为-1</p>"
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
        "url": "/mall_goods_tag_info/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_info.js",
    "groupTitle": "商场商品标签信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_info/update",
    "title": "商场商品标签信息修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_goods_tag_info",
    "group": "商场商品标签信息",
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
            "field": "tag_name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_desc",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_type",
            "description": "<p>标签类型   0=首页标签</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_pic",
            "description": "<p>标签图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": "<p>顺序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级tag id，第一级为-1</p>"
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
        "url": "/mall_goods_tag_info/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_info.js",
    "groupTitle": "商场商品标签信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_info/delete",
    "title": "商场商品标签信息删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_goods_tag_info",
    "group": "商场商品标签信息",
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
            "field": "tag_name",
            "description": "<p>标签名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_desc",
            "description": "<p>标签描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_type",
            "description": "<p>标签类型   0=首页标签</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_pic",
            "description": "<p>标签图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": "<p>顺序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级tag id，第一级为-1</p>"
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
        "url": "/mall_goods_tag_info/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_info.js",
    "groupTitle": "商场商品标签信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_relation/add",
    "title": "商场商品标签关系新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_goods_tag_relation",
    "group": "商场商品标签关系",
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
            "field": "relation_id",
            "description": "<p>关系id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hot_index",
            "description": "<p>类别热销排序</p>"
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
        "url": "/mall_goods_tag_relation/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_relation.js",
    "groupTitle": "商场商品标签关系"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_relation/queryList",
    "title": "商场商品标签关系列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_goods_tag_relation",
    "group": "商场商品标签关系",
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
        "url": "/mall_goods_tag_relation/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_relation.js",
    "groupTitle": "商场商品标签关系"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_relation/query",
    "title": "商场商品标签关系详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_goods_tag_relation",
    "group": "商场商品标签关系",
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
            "field": "relation_id",
            "description": "<p>关系id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hot_index",
            "description": "<p>类别热销排序</p>"
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
        "url": "/mall_goods_tag_relation/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_relation.js",
    "groupTitle": "商场商品标签关系"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_relation/update",
    "title": "商场商品标签关系修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_goods_tag_relation",
    "group": "商场商品标签关系",
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
            "field": "relation_id",
            "description": "<p>关系id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hot_index",
            "description": "<p>类别热销排序</p>"
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
        "url": "/mall_goods_tag_relation/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_relation.js",
    "groupTitle": "商场商品标签关系"
  },
  {
    "type": "post",
    "url": "/mall_goods_tag_relation/delete",
    "title": "商场商品标签关系删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_goods_tag_relation",
    "group": "商场商品标签关系",
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
            "field": "relation_id",
            "description": "<p>关系id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hot_index",
            "description": "<p>类别热销排序</p>"
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
        "url": "/mall_goods_tag_relation/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_tag_relation.js",
    "groupTitle": "商场商品标签关系"
  },
  {
    "type": "post",
    "url": "/mall_panic_buying/add",
    "title": "商场抢购新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_panic_buying",
    "group": "商场抢购",
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
            "field": "pb_id",
            "description": "<p>倒计时抢购id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "begin_time",
            "description": "<p>抢购开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time",
            "description": "<p>抢购结束时间</p>"
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
        "url": "/mall_panic_buying/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_panic_buying.js",
    "groupTitle": "商场抢购"
  },
  {
    "type": "post",
    "url": "/mall_panic_buying/queryList",
    "title": "商场抢购列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_panic_buying",
    "group": "商场抢购",
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
        "url": "/mall_panic_buying/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_panic_buying.js",
    "groupTitle": "商场抢购"
  },
  {
    "type": "post",
    "url": "/mall_panic_buying/query",
    "title": "商场抢购详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_panic_buying",
    "group": "商场抢购",
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
            "field": "pb_id",
            "description": "<p>倒计时抢购id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "begin_time",
            "description": "<p>抢购开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time",
            "description": "<p>抢购结束时间</p>"
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
        "url": "/mall_panic_buying/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_panic_buying.js",
    "groupTitle": "商场抢购"
  },
  {
    "type": "post",
    "url": "/mall_panic_buying/update",
    "title": "商场抢购修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_panic_buying",
    "group": "商场抢购",
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
            "field": "pb_id",
            "description": "<p>倒计时抢购id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "begin_time",
            "description": "<p>抢购开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time",
            "description": "<p>抢购结束时间</p>"
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
        "url": "/mall_panic_buying/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_panic_buying.js",
    "groupTitle": "商场抢购"
  },
  {
    "type": "post",
    "url": "/mall_panic_buying/delete",
    "title": "商场抢购删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_panic_buying",
    "group": "商场抢购",
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
            "field": "pb_id",
            "description": "<p>倒计时抢购id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "begin_time",
            "description": "<p>抢购开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "end_time",
            "description": "<p>抢购结束时间</p>"
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
        "url": "/mall_panic_buying/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_panic_buying.js",
    "groupTitle": "商场抢购"
  },
  {
    "type": "post",
    "url": "/mall_user_coupon_info/add",
    "title": "商场用户优惠券信息新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_user_coupon_info",
    "group": "商场用户优惠券信息",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expire_date",
            "description": "<p>失效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>0正常1已使用2已过期</p>"
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
        "url": "/mall_user_coupon_info/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_coupon_info.js",
    "groupTitle": "商场用户优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_user_coupon_info/queryList",
    "title": "商场用户优惠券信息列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_user_coupon_info",
    "group": "商场用户优惠券信息",
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
        "url": "/mall_user_coupon_info/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_coupon_info.js",
    "groupTitle": "商场用户优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_user_coupon_info/query",
    "title": "商场用户优惠券信息详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_user_coupon_info",
    "group": "商场用户优惠券信息",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expire_date",
            "description": "<p>失效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>0正常1已使用2已过期</p>"
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
        "url": "/mall_user_coupon_info/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_coupon_info.js",
    "groupTitle": "商场用户优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_user_coupon_info/update",
    "title": "商场用户优惠券信息修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_user_coupon_info",
    "group": "商场用户优惠券信息",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expire_date",
            "description": "<p>失效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>0正常1已使用2已过期</p>"
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
        "url": "/mall_user_coupon_info/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_coupon_info.js",
    "groupTitle": "商场用户优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_user_coupon_info/delete",
    "title": "商场用户优惠券信息删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_user_coupon_info",
    "group": "商场用户优惠券信息",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expire_date",
            "description": "<p>失效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>0正常1已使用2已过期</p>"
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
        "url": "/mall_user_coupon_info/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_coupon_info.js",
    "groupTitle": "商场用户优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_info/add",
    "title": "商场的商品信息新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_goods_info",
    "group": "商场的商品信息",
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
            "field": "product_id",
            "description": "<p>商品关联的erp产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": "<p>'N'</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_desc",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_real",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "transport_desc",
            "description": "<p>配送说明</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_ori",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sell_amount",
            "description": "<p>销量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hot_index",
            "description": "<p>热销指数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recommend_index",
            "description": "<p>推荐指数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_describe",
            "description": "<p>商品描述</p>"
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
        "url": "/mall_goods_info/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_info.js",
    "groupTitle": "商场的商品信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_info/queryList",
    "title": "商场的商品信息列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_goods_info",
    "group": "商场的商品信息",
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
        "url": "/mall_goods_info/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_info.js",
    "groupTitle": "商场的商品信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_info/query",
    "title": "商场的商品信息详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_goods_info",
    "group": "商场的商品信息",
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
            "field": "product_id",
            "description": "<p>商品关联的erp产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": "<p>'N'</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_desc",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_real",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "transport_desc",
            "description": "<p>配送说明</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_ori",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sell_amount",
            "description": "<p>销量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hot_index",
            "description": "<p>热销指数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recommend_index",
            "description": "<p>推荐指数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_describe",
            "description": "<p>商品描述</p>"
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
        "url": "/mall_goods_info/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_info.js",
    "groupTitle": "商场的商品信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_info/update",
    "title": "商场的商品信息修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_goods_info",
    "group": "商场的商品信息",
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
            "field": "product_id",
            "description": "<p>商品关联的erp产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": "<p>'N'</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_desc",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_real",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "transport_desc",
            "description": "<p>配送说明</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_ori",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sell_amount",
            "description": "<p>销量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hot_index",
            "description": "<p>热销指数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recommend_index",
            "description": "<p>推荐指数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_describe",
            "description": "<p>商品描述</p>"
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
        "url": "/mall_goods_info/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_info.js",
    "groupTitle": "商场的商品信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_info/delete",
    "title": "商场的商品信息删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_goods_info",
    "group": "商场的商品信息",
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
            "field": "product_id",
            "description": "<p>商品关联的erp产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": "<p>'N'</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_desc",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_real",
            "description": "<p>商品价格</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "transport_desc",
            "description": "<p>配送说明</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_ori",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sell_amount",
            "description": "<p>销量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hot_index",
            "description": "<p>热销指数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recommend_index",
            "description": "<p>推荐指数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_describe",
            "description": "<p>商品描述</p>"
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
        "url": "/mall_goods_info/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_info.js",
    "groupTitle": "商场的商品信息"
  },
  {
    "type": "post",
    "url": "/mall_goods_property/add",
    "title": "商场的商品属性新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_goods_property",
    "group": "商场的商品属性",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_name",
            "description": "<p>属性名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_keys",
            "description": "<p>属性备选值，逗号分割</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_desc",
            "description": "<p>属性描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": "<p>顺序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
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
        "url": "/mall_goods_property/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property.js",
    "groupTitle": "商场的商品属性"
  },
  {
    "type": "post",
    "url": "/mall_goods_property/queryList",
    "title": "商场的商品属性列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_goods_property",
    "group": "商场的商品属性",
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
        "url": "/mall_goods_property/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property.js",
    "groupTitle": "商场的商品属性"
  },
  {
    "type": "post",
    "url": "/mall_goods_property/query",
    "title": "商场的商品属性详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_goods_property",
    "group": "商场的商品属性",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_name",
            "description": "<p>属性名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_keys",
            "description": "<p>属性备选值，逗号分割</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_desc",
            "description": "<p>属性描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": "<p>顺序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
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
        "url": "/mall_goods_property/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property.js",
    "groupTitle": "商场的商品属性"
  },
  {
    "type": "post",
    "url": "/mall_goods_property/update",
    "title": "商场的商品属性修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_goods_property",
    "group": "商场的商品属性",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_name",
            "description": "<p>属性名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_keys",
            "description": "<p>属性备选值，逗号分割</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_desc",
            "description": "<p>属性描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": "<p>顺序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
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
        "url": "/mall_goods_property/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property.js",
    "groupTitle": "商场的商品属性"
  },
  {
    "type": "post",
    "url": "/mall_goods_property/delete",
    "title": "商场的商品属性删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_goods_property",
    "group": "商场的商品属性",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_name",
            "description": "<p>属性名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_keys",
            "description": "<p>属性备选值，逗号分割</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_desc",
            "description": "<p>属性描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_no",
            "description": "<p>顺序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
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
        "url": "/mall_goods_property/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property.js",
    "groupTitle": "商场的商品属性"
  },
  {
    "type": "post",
    "url": "/mall_goods_property_detail/add",
    "title": "商场规格明细新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_goods_property_detail",
    "group": "商场规格明细",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_rules",
            "description": "<p>价格规则，格式:颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_ori",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_real",
            "description": "<p>现价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_pic",
            "description": "<p>产品属性图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
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
        "url": "/mall_goods_property_detail/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property_detail.js",
    "groupTitle": "商场规格明细"
  },
  {
    "type": "post",
    "url": "/mall_goods_property_detail/queryList",
    "title": "商场规格明细列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_goods_property_detail",
    "group": "商场规格明细",
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
        "url": "/mall_goods_property_detail/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property_detail.js",
    "groupTitle": "商场规格明细"
  },
  {
    "type": "post",
    "url": "/mall_goods_property_detail/query",
    "title": "商场规格明细详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_goods_property_detail",
    "group": "商场规格明细",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_rules",
            "description": "<p>价格规则，格式:颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_ori",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_real",
            "description": "<p>现价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_pic",
            "description": "<p>产品属性图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
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
        "url": "/mall_goods_property_detail/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property_detail.js",
    "groupTitle": "商场规格明细"
  },
  {
    "type": "post",
    "url": "/mall_goods_property_detail/update",
    "title": "商场规格明细修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_goods_property_detail",
    "group": "商场规格明细",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_rules",
            "description": "<p>价格规则，格式:颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_ori",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_real",
            "description": "<p>现价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_pic",
            "description": "<p>产品属性图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
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
        "url": "/mall_goods_property_detail/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property_detail.js",
    "groupTitle": "商场规格明细"
  },
  {
    "type": "post",
    "url": "/mall_goods_property_detail/delete",
    "title": "商场规格明细删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_goods_property_detail",
    "group": "商场规格明细",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_rules",
            "description": "<p>价格规则，格式:颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_ori",
            "description": "<p>原价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price_real",
            "description": "<p>现价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "property_pic",
            "description": "<p>产品属性图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
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
        "url": "/mall_goods_property_detail/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_goods_property_detail.js",
    "groupTitle": "商场规格明细"
  },
  {
    "type": "post",
    "url": "/mall_order_detail_info/add",
    "title": "商场订单明细信息新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_order_detail_info",
    "group": "商场订单明细信息",
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
            "field": "detail_id",
            "description": "<p>id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_properties",
            "description": "<p>产品属性，例如：颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>购买数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>评价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_content",
            "description": "<p>评价内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_cent",
            "description": "<p>评价分</p>"
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
        "url": "/mall_order_detail_info/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_detail_info.js",
    "groupTitle": "商场订单明细信息"
  },
  {
    "type": "post",
    "url": "/mall_order_detail_info/queryList",
    "title": "商场订单明细信息列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_order_detail_info",
    "group": "商场订单明细信息",
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
        "url": "/mall_order_detail_info/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_detail_info.js",
    "groupTitle": "商场订单明细信息"
  },
  {
    "type": "post",
    "url": "/mall_order_detail_info/query",
    "title": "商场订单明细信息详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_order_detail_info",
    "group": "商场订单明细信息",
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
            "field": "detail_id",
            "description": "<p>id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_properties",
            "description": "<p>产品属性，例如：颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>购买数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>评价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_content",
            "description": "<p>评价内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_cent",
            "description": "<p>评价分</p>"
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
        "url": "/mall_order_detail_info/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_detail_info.js",
    "groupTitle": "商场订单明细信息"
  },
  {
    "type": "post",
    "url": "/mall_order_detail_info/update",
    "title": "商场订单明细信息修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_order_detail_info",
    "group": "商场订单明细信息",
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
            "field": "detail_id",
            "description": "<p>id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_properties",
            "description": "<p>产品属性，例如：颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>购买数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>评价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_content",
            "description": "<p>评价内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_cent",
            "description": "<p>评价分</p>"
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
        "url": "/mall_order_detail_info/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_detail_info.js",
    "groupTitle": "商场订单明细信息"
  },
  {
    "type": "post",
    "url": "/mall_order_detail_info/delete",
    "title": "商场订单明细信息删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_order_detail_info",
    "group": "商场订单明细信息",
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
            "field": "detail_id",
            "description": "<p>id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_properties",
            "description": "<p>产品属性，例如：颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>购买数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>评价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_content",
            "description": "<p>评价内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_cent",
            "description": "<p>评价分</p>"
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
        "url": "/mall_order_detail_info/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_detail_info.js",
    "groupTitle": "商场订单明细信息"
  },
  {
    "type": "post",
    "url": "/mall_shoping_cart/add",
    "title": "商场购物手推车新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_shoping_cart",
    "group": "商场购物手推车",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_properties",
            "description": "<p>产品属性，例如：颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "amount",
            "description": "<p>购买数量</p>"
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
        "url": "/mall_shoping_cart/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_shoping_cart.js",
    "groupTitle": "商场购物手推车"
  },
  {
    "type": "post",
    "url": "/mall_shoping_cart/queryList",
    "title": "商场购物手推车列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_shoping_cart",
    "group": "商场购物手推车",
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
        "url": "/mall_shoping_cart/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_shoping_cart.js",
    "groupTitle": "商场购物手推车"
  },
  {
    "type": "post",
    "url": "/mall_shoping_cart/query",
    "title": "商场购物手推车详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_shoping_cart",
    "group": "商场购物手推车",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_properties",
            "description": "<p>产品属性，例如：颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "amount",
            "description": "<p>购买数量</p>"
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
        "url": "/mall_shoping_cart/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_shoping_cart.js",
    "groupTitle": "商场购物手推车"
  },
  {
    "type": "post",
    "url": "/mall_shoping_cart/update",
    "title": "商场购物手推车修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_shoping_cart",
    "group": "商场购物手推车",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_properties",
            "description": "<p>产品属性，例如：颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "amount",
            "description": "<p>购买数量</p>"
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
        "url": "/mall_shoping_cart/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_shoping_cart.js",
    "groupTitle": "商场购物手推车"
  },
  {
    "type": "post",
    "url": "/mall_shoping_cart/delete",
    "title": "商场购物手推车删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_shoping_cart",
    "group": "商场购物手推车",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>优惠券id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_properties",
            "description": "<p>产品属性，例如：颜色=红色,内存=128G</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "amount",
            "description": "<p>购买数量</p>"
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
        "url": "/mall_shoping_cart/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_shoping_cart.js",
    "groupTitle": "商场购物手推车"
  },
  {
    "type": "post",
    "url": "/mall_user_addr/add",
    "title": "商城用户地址表新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_user_addr",
    "group": "商城用户地址表",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver_name",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area_name",
            "description": "<p>地区名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addr_detail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_default",
            "description": "<p>0否1是</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
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
        "url": "/mall_user_addr/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_addr.js",
    "groupTitle": "商城用户地址表"
  },
  {
    "type": "post",
    "url": "/mall_user_addr/queryList",
    "title": "商城用户地址表列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_user_addr",
    "group": "商城用户地址表",
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
        "url": "/mall_user_addr/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_addr.js",
    "groupTitle": "商城用户地址表"
  },
  {
    "type": "post",
    "url": "/mall_user_addr/query",
    "title": "商城用户地址表详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_user_addr",
    "group": "商城用户地址表",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver_name",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area_name",
            "description": "<p>地区名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addr_detail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_default",
            "description": "<p>0否1是</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
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
        "url": "/mall_user_addr/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_addr.js",
    "groupTitle": "商城用户地址表"
  },
  {
    "type": "post",
    "url": "/mall_user_addr/update",
    "title": "商城用户地址表修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_user_addr",
    "group": "商城用户地址表",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver_name",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area_name",
            "description": "<p>地区名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addr_detail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_default",
            "description": "<p>0否1是</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
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
        "url": "/mall_user_addr/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_addr.js",
    "groupTitle": "商城用户地址表"
  },
  {
    "type": "post",
    "url": "/mall_user_addr/delete",
    "title": "商城用户地址表删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_user_addr",
    "group": "商城用户地址表",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver_name",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area_name",
            "description": "<p>地区名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addr_detail",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "is_default",
            "description": "<p>0否1是</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
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
        "url": "/mall_user_addr/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_user_addr.js",
    "groupTitle": "商城用户地址表"
  },
  {
    "type": "post",
    "url": "/mall_coupon_info/add",
    "title": "商城的优惠券信息新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_coupon_info",
    "group": "商城的优惠券信息",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_type",
            "description": "<p>0满减卷</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cata_type",
            "description": "<p>0通用券，1为针对商品卷,2为分类卷</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit_amount",
            "description": "<p>金额标准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discount",
            "description": "<p>满减额度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>有效期天数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>0正常1停用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_name",
            "description": "<p>优惠券名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cata_classify",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
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
        "url": "/mall_coupon_info/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_coupon_info.js",
    "groupTitle": "商城的优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_coupon_info/queryList",
    "title": "商城的优惠券信息列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_coupon_info",
    "group": "商城的优惠券信息",
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
        "url": "/mall_coupon_info/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_coupon_info.js",
    "groupTitle": "商城的优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_coupon_info/query",
    "title": "商城的优惠券信息详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_coupon_info",
    "group": "商城的优惠券信息",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_type",
            "description": "<p>0满减卷</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cata_type",
            "description": "<p>0通用券，1为针对商品卷,2为分类卷</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit_amount",
            "description": "<p>金额标准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discount",
            "description": "<p>满减额度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>有效期天数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>0正常1停用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_name",
            "description": "<p>优惠券名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cata_classify",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
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
        "url": "/mall_coupon_info/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_coupon_info.js",
    "groupTitle": "商城的优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_coupon_info/update",
    "title": "商城的优惠券信息修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_coupon_info",
    "group": "商城的优惠券信息",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_type",
            "description": "<p>0满减卷</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cata_type",
            "description": "<p>0通用券，1为针对商品卷,2为分类卷</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit_amount",
            "description": "<p>金额标准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discount",
            "description": "<p>满减额度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>有效期天数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>0正常1停用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_name",
            "description": "<p>优惠券名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cata_classify",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
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
        "url": "/mall_coupon_info/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_coupon_info.js",
    "groupTitle": "商城的优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_coupon_info/delete",
    "title": "商城的优惠券信息删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_coupon_info",
    "group": "商城的优惠券信息",
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
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_type",
            "description": "<p>0满减卷</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cata_type",
            "description": "<p>0通用券，1为针对商品卷,2为分类卷</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit_amount",
            "description": "<p>金额标准</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discount",
            "description": "<p>满减额度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>有效期天数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>0正常1停用</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "coupon_name",
            "description": "<p>优惠券名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cata_classify",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "good_id",
            "description": "<p>商品id</p>"
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
        "url": "/mall_coupon_info/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_coupon_info.js",
    "groupTitle": "商城的优惠券信息"
  },
  {
    "type": "post",
    "url": "/mall_order_info/add",
    "title": "商城订单信息新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_order_info",
    "group": "商城订单信息",
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
            "field": "order_id",
            "description": "<p>id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addr_id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_remark",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "total_amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态0:待支付1已支付2已完成3已评价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "trans_fee",
            "description": "<p>运费</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_cent",
            "description": "<p>评价星级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_content",
            "description": "<p>评价内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "real_amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_number",
            "description": "<p>订单号</p>"
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
        "url": "/mall_order_info/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_info.js",
    "groupTitle": "商城订单信息"
  },
  {
    "type": "post",
    "url": "/mall_order_info/queryList",
    "title": "商城订单信息列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_order_info",
    "group": "商城订单信息",
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
        "url": "/mall_order_info/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_info.js",
    "groupTitle": "商城订单信息"
  },
  {
    "type": "post",
    "url": "/mall_order_info/query",
    "title": "商城订单信息详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_order_info",
    "group": "商城订单信息",
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
            "field": "order_id",
            "description": "<p>id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addr_id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_remark",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "total_amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态0:待支付1已支付2已完成3已评价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "trans_fee",
            "description": "<p>运费</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_cent",
            "description": "<p>评价星级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_content",
            "description": "<p>评价内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "real_amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_number",
            "description": "<p>订单号</p>"
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
        "url": "/mall_order_info/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_info.js",
    "groupTitle": "商城订单信息"
  },
  {
    "type": "post",
    "url": "/mall_order_info/update",
    "title": "商城订单信息修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_order_info",
    "group": "商城订单信息",
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
            "field": "order_id",
            "description": "<p>id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addr_id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_remark",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "total_amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态0:待支付1已支付2已完成3已评价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "trans_fee",
            "description": "<p>运费</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_cent",
            "description": "<p>评价星级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_content",
            "description": "<p>评价内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "real_amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_number",
            "description": "<p>订单号</p>"
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
        "url": "/mall_order_info/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_info.js",
    "groupTitle": "商城订单信息"
  },
  {
    "type": "post",
    "url": "/mall_order_info/delete",
    "title": "商城订单信息删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_order_info",
    "group": "商城订单信息",
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
            "field": "order_id",
            "description": "<p>id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "wx_user_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addr_id",
            "description": "<p>地址id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_remark",
            "description": "<p>订单备注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "total_amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态0:待支付1已支付2已完成3已评价</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "trans_fee",
            "description": "<p>运费</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_cent",
            "description": "<p>评价星级</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eval_content",
            "description": "<p>评价内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discount",
            "description": "<p>折扣金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "real_amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_number",
            "description": "<p>订单号</p>"
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
        "url": "/mall_order_info/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_order_info.js",
    "groupTitle": "商城订单信息"
  },
  {
    "type": "post",
    "url": "/mall_content_info/add",
    "title": "购物中心内容信息新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addmall_content_info",
    "group": "购物中心内容信息",
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
            "field": "content_id",
            "description": "<p>内容id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_info",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_type1",
            "description": "<p>分类1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_type2",
            "description": "<p>分类2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_info1",
            "description": "<p>补充内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "target",
            "description": "<p>如果内容是链接，此处填写链接地址</p>"
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
        "url": "/mall_content_info/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_content_info.js",
    "groupTitle": "购物中心内容信息"
  },
  {
    "type": "post",
    "url": "/mall_content_info/queryList",
    "title": "购物中心内容信息列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListmall_content_info",
    "group": "购物中心内容信息",
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
        "url": "/mall_content_info/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_content_info.js",
    "groupTitle": "购物中心内容信息"
  },
  {
    "type": "post",
    "url": "/mall_content_info/query",
    "title": "购物中心内容信息详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListmall_content_info",
    "group": "购物中心内容信息",
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
            "field": "content_id",
            "description": "<p>内容id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_info",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_type1",
            "description": "<p>分类1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_type2",
            "description": "<p>分类2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_info1",
            "description": "<p>补充内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "target",
            "description": "<p>如果内容是链接，此处填写链接地址</p>"
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
        "url": "/mall_content_info/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_content_info.js",
    "groupTitle": "购物中心内容信息"
  },
  {
    "type": "post",
    "url": "/mall_content_info/update",
    "title": "购物中心内容信息修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postmall_content_info",
    "group": "购物中心内容信息",
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
            "field": "content_id",
            "description": "<p>内容id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_info",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_type1",
            "description": "<p>分类1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_type2",
            "description": "<p>分类2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_info1",
            "description": "<p>补充内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "target",
            "description": "<p>如果内容是链接，此处填写链接地址</p>"
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
        "url": "/mall_content_info/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_content_info.js",
    "groupTitle": "购物中心内容信息"
  },
  {
    "type": "post",
    "url": "/mall_content_info/delete",
    "title": "购物中心内容信息删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletemall_content_info",
    "group": "购物中心内容信息",
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
            "field": "content_id",
            "description": "<p>内容id，主键</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_time",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "del_flag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authflag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "update_user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_info",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_type1",
            "description": "<p>分类1</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_type2",
            "description": "<p>分类2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content_info1",
            "description": "<p>补充内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "target",
            "description": "<p>如果内容是链接，此处填写链接地址</p>"
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
        "url": "/mall_content_info/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/mall_content_info.js",
    "groupTitle": "购物中心内容信息"
  }
] });
