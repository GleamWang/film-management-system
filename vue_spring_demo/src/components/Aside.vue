<template>
  <div>
    <el-menu
      style="width: 200px; min-height: calc(100vh - 55px)"
      active-text-color="#ffd04b"
      class="el-menu-vertical-demo"
      :default-active="path"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span @click="pushHome">首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <i class="el-icon-tickets"></i>
          <span>电影详情</span>
        </template>
        <el-menu-item index="/air" class="el-icon-star-on" @click="pushAir"
          >正在热映
        </el-menu-item>
        <el-menu-item index="2-2" class="el-icon-star-off"
          >即将上映
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-shopping-cart-2"></i>
        <span>购票系统</span>
      </el-menu-item>

      <el-sub-menu index="4">
        <template #title>
          <i class="el-icon-setting"></i>
          <span>后台管理</span>
        </template>
        <el-menu-item
          index="/admin"
          class="el-icon-video-camera-solid"
          @click="pushAdmin"
          >影片管理
        </el-menu-item>
        <el-menu-item index="/admin1" class="el-icon-user" @click="pushAdmin1"
          >用户管理
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      filmInfo: {},
      user: {},
      path: this.$route.path
    };
  },
  mounted() {
    this.user = JSON.parse(JSON.parse(sessionStorage.getItem("user")));
  },
  methods: {
    pushAir() {
      this.$router.push({
        path: "/air",
      });
    },
    pushHome() {
      this.$router.push({
        path: "/home",
      });
    },
    pushAdmin() {
      if (this.user.role == "超级管理员") {
        this.$router.push({
          path: "/admin",
        });
      } else {
        this.$message({
          type: "error",
          message: "没有权限！",
        });
      }
    },
    pushAdmin1() {
      if (this.user.role == "超级管理员") {
        this.$router.push({
          path: "/admin1",
        });
      } else {
        this.$message({
          type: "error",
          message: "没有权限！",
        });
      }
    },
  },
};
</script>

<style>
</style>