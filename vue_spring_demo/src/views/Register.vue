<template>
  <div
    style="
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: mediumseagreen;
    "
  >
    <div style="width: 400px; height: 420px; background-color: #474a59">
      <div
        style="
          text-align: center;
          font-size: 200%;
          margin-top: 40px;
          color: white;
        "
      >
        欢迎注册
      </div>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
        style="margin-top: 30px"
        label-width="73px"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="ruleForm.username"
            type="text"
            autocomplete="off"
            placeholder="请输入用户名"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
            placeholder="请输入密码"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            prefix-icon="el-icon-connection"
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
            placeholder="请再次输入密码"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            prefix-icon="el-icon-paperclip"
            v-model="ruleForm.email"
            type="email"
            autocomplete="off"
            placeholder="请输入邮箱地址"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            round
            style="width: 100px"
            >注 册</el-button
          >
          <el-button
            @click="resetForm('ruleForm')"
            round
            style="width: 100px; margin-left: 45px"
            >重 置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Register",
  components: {},
  data() {
    const checkUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.username !== "") {
          this.$refs.ruleForm.validateField("username");
        }
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次密码不一致！"));
      } else {
        callback();
      }
    };
    const validateEMail = (rule, value, callback) => {
      const reg = /^([a-zA-Z0-9]+[-_.]?)+@[a-zA-Z0-9]+.[a-z]+$/;
      if (value == "" || value == undefined || value == null) {
        callback(new Error("请输入邮箱地址"));
      } else {
        if (!reg.test(value)) {
          callback(new Error("请输入正确的邮箱"));
        } else {
          callback();
        }
      }
    };

    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
        email: "",
      },
      userTable: {},
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: validateEMail, trigger: ["blur", "change"] }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request
            .get("http://localhost:9090/user/selectUsername", {
              params: {
                username: this.ruleForm.username,
              },
            })
            .then((res) => {
              if (res == null || res == "" || res == undefined) {
                request
                  .post("http://localhost:9090/user", this.ruleForm)
                  .then((res) => {
                    console.log(res);
                    if (res.code === "0") {
                      this.$message({
                        type: "success",
                        message: "注册成功",
                      });
                      this.$router.push("/login");
                    } else {
                      this.$message({
                        type: "error",
                        message: res.msg,
                      });
                    }
                  });
              } else {
                this.$message({
                  type: "error",
                  message: "用户名已存在，请重新输入！",
                });
                this.ruleForm.username = "";
                return false;
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
</style>