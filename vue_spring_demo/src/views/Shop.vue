<template>
  <div style="background-color: rgb(240, 240, 240)">
    <div>
      <div>
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }"
            >回到首页
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/air' }"
            >正在热映</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/shop' }"
            >购票系统
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div style="margin: 0 auto; width: 700px; margin-top: 20px">
        <el-container>
          <el-aside width="200px">
            <img
              :src="require(`../assets/img/${name}.jpg`)"
              :title="`${name}`"
              style="width: 160px; float: right; margin-top: 15px"
            />
          </el-aside>
          <el-main>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">片名：{{ name }}</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  导演：{{ shopList.director }}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  编剧：{{ shopList.scriptwriter }}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  类型：{{ shopList.type }}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  制片国家/地区：{{ shopList.status }}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  语言：{{ shopList.language }}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  上映日期：{{ shopList.date }}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  片长：{{ shopList.time }}
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                  >
                  </el-rate>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  {{ shopList.judgenum }}人参与评分
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </div>
    </div>

    <div style="margin: 0 auto; width: 800px; margin-top: 10px">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="影院" prop="cinema">
          <el-select v-model="ruleForm.cinema" placeholder="请选择影院">
            <el-option label="幸福蓝海国际影城" value="幸福蓝海国际影城"></el-option>
            <el-option label="万达影城" value="万达影城"></el-option>
            <el-option label="上影国际影城" value="上影国际影城"></el-option>
            <el-option label="卢米埃影城" value="卢米埃影城"></el-option>
            <el-option label="星河国际影城" value="星河国际影城"></el-option>
            <el-option label="大地影院" value="大地影院"></el-option>
            <el-option label="保利国际影城" value="保利国际影城"></el-option>
            <el-option label="星美国际影城" value="美国际影城"></el-option>
            <el-option label="苏宁影城" value="苏宁影城"></el-option>
            <el-option label="中传国际影城" value="中传国际影城"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%"
                :disabled-date="disabledDate"
                :shortcuts="shortcuts"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-select
                v-model="ruleForm.date2"
                start="09:30"
                step="00:40"
                end="22:50"
                placeholder="选择时间"
                style="width: 100%"
              >
              </el-time-select>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="影厅" prop="room">
          <el-radio-group v-model="ruleForm.room">
            <el-radio label="IMAX厅"></el-radio>
            <el-radio label="CGS中国巨幕厅"></el-radio>
            <el-radio label="杜比全景声厅"></el-radio>
            <el-radio label="Dolby Cinema厅"></el-radio>
            <el-radio label="RealD厅"></el-radio>
            <el-radio label="儿童厅"></el-radio>
            <el-radio label="4K厅"></el-radio>
            <el-radio label="巨幕厅"></el-radio>
            <el-radio label="MX4D厅"></el-radio>
            <el-radio label="STARX厅"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="服务" prop="service">
          <el-switch
            v-model="ruleForm.service"
            active-text="可改签/可退票"
          ></el-switch>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm',shopList)"
            >前往购买</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";
// import emitter from "../utils/eventbus";

export default {
  name: "Shop",
  props: ["name"],
  components: {},
  data() {
    return {
      shopList: {},
      value: 5,

      ruleForm: {
        cinema: "",
        date1: "",
        date2: "",
        service: false,
        room: "",
      },
      rules: {
        cinema: [{ required: true, message: "请选择影院", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        room: [{ required: true, message: "请选择影厅", trigger: "change" }],
      },

      disabledDate(time) {
        return (
          time.getTime() < Date.now() - 3600 * 1000 * 24 ||
          time.getTime() > Date.now() + 3600 * 1000 * 24 * 15
        );
      },
      shortcuts: [
        {
          text: "今天",
          value: new Date(),
        },
        {
          text: "明天",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24);
            return date;
          },
        },
        {
          text: "一周后",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
            return date;
          },
        },
      ],
    };
  },
  created() {
    this.load();
  },

  methods: {
    load() {
      request
        .get("http://localhost:9090/film/selectTitle", {
          params: {
            title: this.name,
          },
        })
        .then((res) => {
          this.shopList = res;
          this.value = res.rating / 2;
        });
    },

    submitForm(formName,shopList) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // emitter.emit("sendInfo",this.ruleForm)
          // console.log("emitter.emit被调用了")
          this.$router.push({
            name:'Xseats',
            params:{
             title:shopList.title,
             cinema:this.ruleForm.cinema,
             room:this.ruleForm.room,
             time:this.ruleForm.date2,
            }
          })
  
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

<style>
</style>