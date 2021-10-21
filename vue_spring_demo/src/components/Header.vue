<template>
  <div
    style="
      height: 55px;
      line-height: 55px;
      display: flex;
      border-bottom: 5px solid;
      border-image: linear-gradient(to bottom,transparent,#999999 50%,transparent)30 30;
    "
  >
    <div style="width: 60px">
      <img
        src="@/assets/icon/aojiao.png"
        style="width: 60px; height: 50px; padding-left: 10px"
      />
    </div>
    <div
      style="
        width: 200px;
        padding-left: 10px;
        font-weight: bold;
        color: dodgerblue;
      "
    >
      电影购票管理系统
    </div>
    <div style="flex: 1"></div>
    <div style="width: 50px; margin-right: 20px">
      <el-dropdown>

          <div class="border">
            <!-- {{ headTip }}<img :src="imgsrc" class="imgDiv" /> -->
            <el-image
              style="width: 48px; height: 48px;"
              class="imgDiv"
              :src="user.header"
              :preview-src-list="[user.header]"
            >
            </el-image>
          </div>
   
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-upload
                class="upload-demo"
                action="http://localhost:9090/files/upload"
                :on-success="uploadSuccess"
              >
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div style="width: 100px; margin-right: 30px">
      <el-dropdown>
        <span
          class="el-dropdown-link"
          style="font-weight: bold; color: dodgerblue"
          >{{ user.role }}<i class="el-icon-arrow-down el-icon--right"></i
        ></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span @click="this.$router.push('/person')">个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="exit">安全退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import sessionStorage from "../utils/storage";
import axios from "axios";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      user: {
        username: "",
      },
    };
  },

  mounted() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  },

  methods: {
    exit() {
      sessionStorage.clear();
      this.$router.push("/login");
    },
    uploadSuccess(response) {
      console.log(response);
      this.user.header = response.data;
      sessionStorage.setItem("user", JSON.stringify(this.user));
      axios.put("http://localhost:9090/user", this.user).then((res) => {
        console.log(res);
        if (res.data.code === "0") {
          this.$message({
            type: "success",
            message: " 上传成功",
          });
        } else {
          this.$message({
            type: "error",
            message: res.msg,
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.border {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #c3c3c3;
  overflow: hidden;
  line-height: 5rem;
  text-align: center;
  position: relative;
}
.imgDiv {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  z-index: -1;
}
</style>