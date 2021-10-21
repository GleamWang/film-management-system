<template>
  <div style="background-color: rgb(240, 240, 240)">
    <el-drawer
      title="请输入新增信息"
      v-model="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
      @close="resetForm('form')"
    >
      <div class="demo-drawer__content">
        <el-form :model="form" ref="form">
          <el-form-item
            label="影片名"
            :label-width="formLabelWidth"
            prop="title"
            :rules="[
              { required: true, message: '影片名不能为空', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="form.title"
              autocomplete="off"
              placeholder="请输入片名"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="链接"
            :label-width="formLabelWidth"
            prop="link"
            :rules="[
              { required: true, message: '链接不能为空', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="form.link"
              autocomplete="off"
              placeholder="请输入链接"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="评分"
            :label-width="formLabelWidth"
            prop="rating"
            :rules="[
              { required: true, message: '评分不能为空', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="form.rating"
              autocomplete="off"
              placeholder="请输入评分"
            ></el-input>
          </el-form-item>
          <el-form-item label="简评" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              v-model="form.inq"
              autocomplete="off"
              placeholder="请输入简评"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer" style="margin-left: 80px">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="submitForm('form')"
            >确 定</el-button
          >
        </div>
      </div>
    </el-drawer>

    <div>
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }"
          >回到首页
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/admin' }"
          >影片管理
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="padding: 15px">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.title.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
        stripe
      >
        <el-table-column label="影片名" prop="title"></el-table-column>
        <el-table-column label="链接" prop="link"></el-table-column>
        <el-table-column label="评分" prop="rating" sortable></el-table-column>
        <el-table-column label="简评" prop="inq"></el-table-column>
        <el-table-column align="right">
          <template #header>
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
              clearable
            />
          </template>
          <template #default="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑
            </el-button>
            <el-popconfirm
              title="确定删除吗？"
              @confirm="handleDelete(scope.row.id)"
            >
              <template #reference>
                <el-button size="mini" type="danger">删除 </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 10px 0">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 50, 250]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
      <div style="margin: 10px 0">
        <el-button
          type="primary"
          @click="
            dialog = true;
            this.form = {};
            this.flag = false;
          "
          >新增</el-button
        >
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Admin",
  components: {},
  data() {
    return {
      currentPage: 1,
      total: 0,
      tableData: [],
      search: "",
      pageSize: 10,
      form: {
        title: "",
        link: "",
        rating: "",
        inq: "",
      },
      flag: true,
      dialog: false,
      formLabelWidth: "80px",
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      request
        .get("http://localhost:9090/film", {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search,
          },
        })
        .then((res) => {
          console.log(res);
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row));
      this.flag = true;
      this.dialog = true;
      console.log(row);
      console.log(this.form);
    },
    handleDelete(id) {
      request.delete("http://localhost:9090/film/" + id).then((res) => {
        if (res.code === "0") {
          this.$message({
            type: "success",
            message: "删除成功",
          });
        } else {
          this.$message({
            type: "error",
            message: res.msg,
          });
        }
        this.load();
      });
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.load();
    },
    handleCurrentChange(pageNum) {
      this.currentPage = pageNum;
      this.load();
    },

    cancelForm() {
      this.dialog = false;
      this.resetFields();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.flag) {
            request.put("http://localhost:9090/film", this.form).then((res) => {
              console.log(res);
              if (res.code === "0") {
                this.$message({
                  type: "success",
                  message: "编辑成功",
                });
              } else {
                this.$message({
                  type: "error",
                  message: res.msg,
                });
              }
              this.load(); //刷新表格数据
              this.dialog = false; //关闭弹窗
            });
          } else {
            request
              .post("http://localhost:9090/film", this.form)
              .then((res) => {
                console.log(res);
                if (res.code === "0") {
                  this.$message({
                    type: "success",
                    message: "新增成功",
                  });
                } else {
                  this.$message({
                    type: "error",
                    message: res.msg,
                  });
                }
                this.load(); //刷新表格数据
                this.dialog = false; //关闭弹窗
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>