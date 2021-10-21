<template>
  <div style="background-color: rgb(240, 240, 240)">
    <div>
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }"
          >回到首页
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="padding: 30px 50px">
      <span style="font-weight: bold; color: rgb(216, 156, 120)"
        >当前时间:{{ nowDate }}</span
      >
      <el-divider direction="vertical"></el-divider>
      <span style="font-weight: bold; color: dodgerblue; font-size: " primary
        >欢迎你,{{ user.username }}</span
      >
      <el-divider direction="vertical"></el-divider>
      <span style="font-weight: bold; color: rgb(234, 78, 75); font-size: 200%"
        >今日电影推荐如下</span
      >
    </div>
    <div style="padding: 10px 200px">
      <el-carousel
        :interval="2000"
        type="card"
        height="350px"
        indicator-position="outside"
      >
        <el-carousel-item
          style="width: 280px; display: flex"
          v-for="item in imgUrl"
          :key="item"
          :label="item.name"
        >
          <img
            style="width: 280px"
            :src="require(`../assets/img/${item.name}.jpg`)"
            alt="轮播图"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import sessionStorage from "../utils/storage";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      nowDate: "",
      imgUrl: [
        { name: "大鱼" },
        { name: "茶馆" },
        { name: "二十二" },
        { name: "东京教父" },
        { name: "低俗小说" },
        { name: "乱世佳人" },
        { name: "何以为家" },
        { name: "你的名字。" },
      ],
      user: {
        username: "",
      },
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let time = new Date();
      let year = time.getFullYear();
      const month = (time.getMonth() + 1).toString().padStart(2, "0");
      const date = time.getDate().toString().padStart(2, "0");
      const hours = time.getHours().toString().padStart(2, "0");
      const minute = time.getMinutes().toString().padStart(2, "0");
      const second = time.getSeconds().toString().padStart(2, "0");
      this.nowDate = hours + "时" + minute + "分" + second + "秒";
    },
  },
  mounted() {
    this.currentTime();
    this.user = JSON.parse(sessionStorage.getItem("user"));
  },

  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate);
    }
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
