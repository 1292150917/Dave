/*
 * @Author: your name
 * @Date: 2020-06-17 18:29:15
 * @LastEditTime: 2020-12-03 13:58:39
 * @LastEditors: zhang zi fang
 * @Description: In User Settings Edit
 * @FilePath: \nodec:\Users\zhamgzifang\Desktop\Dave\template\mysql\sequelize\models.ts
 */

interface Render {
  server: any, //新增字段
  name: any,
  model: any,
  body: any
}
// 获取通用数据
var render = function ({ server, name, model, body }: Render) {
  // 设置默认值
  var PRI: any = ''
  var source_column: any = ''
  Object.keys(model).map(s => {
    if (model[s].foreignKey && model[s].foreignKey.column_key === 'PRI') {
      PRI = model[s]
      source_column = PRI.foreignKey.source_column
    }
  })
  function attr(el) {
    return `${el.__config ? Object.keys(el.__config).map(_s => {
      return (`${_s}="${el.__config[_s]}"`)
    }).join('') : ''}`
  }
  function renderEl(s, el, _model) {
    return `<${el.value}
                v-model="${_model}.${s.Field}"
                placeholder="${s.Comment || s.Field}"
                ${attr(el)}
                size="small">
                ${el.child ? el.child.map((_s: any) => {
      renderEl(s, _s, _model)
    }) : ''}
            </${el.value}>
    `
  }
  var template = `
  <template>
    <div class="app-container">
      <el-form
        :model="queryParams"
        ref="queryForm"
        :inline="true"
        v-show="showSearch"
        label-width="68px">
        ${server.map(s => {
    return `
            <el-form-item label="${s.Comment || s.Field}" prop="${s.Field}">
             ${renderEl(s, body.viewsEl[name][s.Field], 'queryParams')}
            </el-form-item>`
  }).join('')}
        <el-form-item>
          <el-button
            type="cyan"
            icon="el-icon-search"
            size="mini"
            @click="handleQuery"
            >搜索</el-button
          >
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
  
      <el-row :gutter="10" class="mb8">
        <el-col :span="1.5">
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
            @click="handleAdd"
            v-hasPermi="['system:data:add']"
            >新增</el-button
          >
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="success"
            icon="el-icon-edit"
            size="mini"
            :disabled="single"
            @click="handleUpdate"
            v-hasPermi="['system:data:edit']"
            >修改</el-button
          >
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            :disabled="multiple"
            @click="handleDelete"
            v-hasPermi="['system:data:remove']"
            >删除</el-button
          >
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="warning"
            icon="el-icon-download"
            size="mini"
            @click="handleExport"
            v-hasPermi="['system:data:export']"
            >导出</el-button
          >
        </el-col>
        <right-toolbar
          :showSearch.sync="showSearch"
          @queryTable="getList"
        ></right-toolbar>
      </el-row>
  
      <el-table
        v-loading="loading"
        :data="dataList"
        @selection-change="handleSelectionChange">
        ${server.map(s => {
    return (`
          <el-table-column label="${s.Comment || s.Field}" align="center" prop="${s.Field}" />`)
  }).join('')}
        <el-table-column
          label="操作"
          align="center"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-edit"
              @click="handleUpdate(scope.row)"
              v-hasPermi="['system:data:edit']"
              >修改</el-button
            >
            <el-button
              size="mini"
              type="text"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
              v-hasPermi="['system:data:remove']"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
  
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />
  
      <!-- 添加或修改对话框 -->
      <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        ${server.map(s => {
    return `
            <el-form-item label="${s.Comment || s.Field}" prop="${s.Field}">
             ${renderEl(s, body.viewsEl[name][s.Field], 'form')}
            </el-form-item>`
  }).join('')}
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    name: "Data",
    components: {},
    data() {
      return {
        // 遮罩层
        loading: true,
        // 选中数组
        ids: [],
        // 非单个禁用
        single: true,
        // 非多个禁用
        multiple: true,
        // 显示搜索条件
        showSearch: true,
        // 总条数
        total: 0,
        // 表格数据
        dataList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          ${server.map(_s => {
    return `${_s.Field}:undefined`
  })}
        },
        // 表单参数
        form: {},
        // 表单校验
        rules: {},
      };
    },
    created() {
      this.getList();
    },
    methods: {
      /** 查询列表 */
      getList() {
        this.request({
          url:"/${name}/query",
          method:"post",
          data:{
            ...this.queryParams
          }
        }).then(res =>{
          this.dataList = res.data
          this.loading = false;
        })
      },
      request({url,method,data}){
        return new Promise((resolve, reject)=>{
          this.$http({
            url,
            method,
            data
          }).then(res =>{
            resolve(res)
          }).then(res =>{
            reject(res)
          })
        })
      },
      // 取消按钮
      cancel() {
        this.open = false;
        this.reset();
      },
      // 表单重置
      reset() {
        this.form = {
          ${server.map(_s => {
    return `${_s.Field}:undefined`
  })}
        };
        // this.resetForm("form");
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.queryParams.pageNum = 1;
        this.getList();
      },
      /** 重置按钮操作 */
      resetQuery() {
        this.resetForm("queryForm");
        this.handleQuery();
      },
      // 多选框选中数据
      handleSelectionChange(selection) {
        this.ids = selection.map((item) => item.${source_column});
        this.single = selection.length !== 1;
        this.multiple = !selection.length;
      },
      /** 新增按钮操作 */
      handleAdd() {
        this.reset();
        this.open = true;
        this.title = "添加";
      },
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        this.request({
          url:"/${name}/query",
          method:"post",
          data:{
            ${source_column}: row.${source_column},
          }
        }).then(res =>{
          this.form = res.data[0];
          this.open = true;
          this.title = "修改";
        })
      },
      /** 提交按钮 */
      submitForm() {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            if (this.form.${source_column} != null) {
              this.request({
                url:"/${name}/update",
                method:"post",
                data:{
                  ...this.form
                }
              }).then(res =>{
                this.open = false;
                this.getList();
              })
            } else {
              this.request({
                url:"/${name}/add",
                method:"post",
                data:{
                  ...this.form
                }
              }).then(res =>{
                this.open = false;
                this.getList();
              })
            }
          }
        });
      },
      /** 删除按钮操作 */
      handleDelete(row) {
        this.$confirm(
          '是否确认删除数据项?',
          "警告",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }
        )
          .then( () => {
            this.request({
              url:"/${name}/delete",
              method:"post",
              data:{
                ${source_column}:row.${source_column}
              }
            }).then(res =>{
              this.open = false;
              this.getList();
            })
          })
          .then(() => {
            this.getList();
            this.msgSuccess("删除成功");
          });
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm("是否确认导出所有数据项?", "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(function () {
            return exportData(queryParams);
          })
          .then((response) => {
            this.download(response.msg);
          });
      },
    },
  };
  </script>`
  return template
}
module.exports = render 