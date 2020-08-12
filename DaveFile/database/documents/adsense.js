
        /**
         * @api {post} /adsense/add adsense新增
         * @apiDescription ""
         * @apiName Addadsense
         * @apiGroup adsense
         * @apiParam {string} id 主键 新增误发
         
                     * @apiParam {string} ID 
                 
                     * @apiParam {string} CREATETIME 
                 
                     * @apiParam {string} DESCRIPTION 
                 
                     * @apiParam {string} LAST_MODIFIED_DATE 
                 
                     * @apiParam {string} ROWVERSION 
                 
                     * @apiParam {string} CREATEUSER_ID 
                 
                     * @apiParam {string} LAST_MODIFIED_BY 
                 
                     * @apiParam {string} MESSAGE_ID 
                 
         * @apiSuccess {json} code
         * @apiSampleRequest /adsense/add
         * @apiVersion 0.0.0
        */
       

             
		/**
		 * @api {post} /adsense/query adsense详情
		 * @apiDescription ""
		 * @apiName PostListadsense
		 * @apiGroup adsense
         * @apiParam {string} page 分页，如果不需要可不发
         * @apiParam {string} pageSize 分页数量
          
                * @apiParam {string} ID 
                 
                * @apiParam {string} CREATETIME 
                 
                * @apiParam {string} DESCRIPTION 
                 
                * @apiParam {string} LAST_MODIFIED_DATE 
                 
                * @apiParam {string} ROWVERSION 
                 
                * @apiParam {string} CREATEUSER_ID 
                 
                * @apiParam {string} LAST_MODIFIED_BY 
                 
                * @apiParam {string} MESSAGE_ID 
                
		 * @apiSuccess {json} code
		 * @apiSampleRequest /adsense/query
		 * @apiVersion 0.0.0
		 */
        

        /**
		 * @api {post} /adsense/queryList adsense列表
		 * @apiDescription ""
		 * @apiName GetListadsense
		 * @apiGroup adsense
         * @apiParam {string} page 分页，如果不需要可不发
         * @apiParam {string} pageSize 分页数量
         
		 * @apiSuccess {json} code
		 * @apiSampleRequest /adsense/queryList
		 * @apiVersion 0.0.0
		 */


       /**
        * @api {post} /adsense/update adsense修改
        * @apiDescription ""
        * @apiName Postadsense
        * @apiGroup adsense
         
                * @apiParam {string} ID 
                 
                * @apiParam {string} CREATETIME 
                 
                * @apiParam {string} DESCRIPTION 
                 
                * @apiParam {string} LAST_MODIFIED_DATE 
                 
                * @apiParam {string} ROWVERSION 
                 
                * @apiParam {string} CREATEUSER_ID 
                 
                * @apiParam {string} LAST_MODIFIED_BY 
                 
                * @apiParam {string} MESSAGE_ID 
                
       
        * @apiSuccess {json} code
        * @apiSampleRequest /adsense/update
        * @apiVersion 0.0.0
       */

       
		/**
		 * @api {post} /adsense/delete adsense删除
		 * @apiDescription ""
		 * @apiName deleteadsense
		 * @apiGroup adsense
         * @apiParam {string} id 主键 新增误发
         
                 * @apiParam {string} ID 
                 
                 * @apiParam {string} CREATETIME 
                 
                 * @apiParam {string} DESCRIPTION 
                 
                 * @apiParam {string} LAST_MODIFIED_DATE 
                 
                 * @apiParam {string} ROWVERSION 
                 
                 * @apiParam {string} CREATEUSER_ID 
                 
                 * @apiParam {string} LAST_MODIFIED_BY 
                 
                 * @apiParam {string} MESSAGE_ID 
                 
		 * @apiSuccess {json} code
		 * @apiSampleRequest /adsense/delete
		 * @apiVersion 0.0.0
		 */
    