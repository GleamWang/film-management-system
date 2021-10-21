<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(240, 240, 240);
    "
  >
    <div style="width: 400px; height: 500px; background-color: #474a59">
      <div
        style="
          text-align: center;
          font-size: 200%;
          margin-top: 20px;
          color: white;
        "
      >
        个人信息
      </div>
      <div>
        <el-form
          ref="form"
          :model="form"
          label-width="120px"
          style="margin-top: 20px"
        >
          <el-form-item label="头像" prop="header">
            <el-image
              style="width: 80px; height: 80px"
              :src="this.form.header"
              :preview-src-list="[this.form.header]"
            >
            </el-image>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" style="width: 200px" disabled></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" style="width: 200px" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" style="width: 200px" disabled></el-input>
          </el-form-item>
          <el-form-item label="身份" prop="role">
            <el-input v-model="form.role" style="width: 200px" disabled></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-input v-model="form.status" style="width: 200px" disabled></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div style="color:white; margin-top: 25px; text-align:center">
        如需更改信息，请联系管理员进行操作
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  components: {},
  data() {
    return {
      form: {},
    };
  },
  mounted() {
    this.form = JSON.parse(JSON.parse(sessionStorage.getItem("user")));
    console.log(this.form);
  },
};
</script>

<style>
</style>