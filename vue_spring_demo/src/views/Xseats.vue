<template>
  <div style="background-color: rgb(240, 240, 240)">
    <div>
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }"
          >回到首页
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/air' }">正在热映</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/shop/你的名字。' }"
          >购票系统</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/xseats' }"
          >确认选座</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <el-container style="margin-top: 20px">
      <el-header>
        <el-steps :active="2" align-center>
          <el-step title="选择影片场次"></el-step>
          <el-step title="选择座位"></el-step>
          <el-step title="确认信息并付款"></el-step>
          <el-step title="影院取票观影"></el-step> </el-steps
      ></el-header>
      <el-container
        style="
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          margin-top: 10px;
        "
      >
        <el-aside width="66%" style="background-color: white; float: middle">
          <div
            style="text-align: center; margin-top: 10px; margin-bottom: 20px"
          >
            银幕中央
          </div>
          <el-form>
            <el-form-item label="1">
              <el-checkbox-group
                v-model="type"
                border="false"
                size="mini"
                fill="rgb(216,30,6)"
                style="margin-left: 90px"
              >
                <el-checkbox-button label="1排1座" name="type">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -20px"
                  />
                </el-checkbox-button>

                <el-checkbox-button label="1排2座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排3座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排4座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排5座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排6座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排7座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>

                <el-checkbox-button
                  label="1排8座"
                  name="type"
                  style="margin-left: 60px"
                >
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排9座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排10座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排11座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排12座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排13座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="1排14座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="2">
              <el-checkbox-group
                v-model="type"
                border="false"
                size="mini"
                fill="rgb(216,30,6)"
                style="margin-left: 90px"
              >
                <el-checkbox-button label="2排1座" name="type">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -20px"
                  />
                </el-checkbox-button>

                <el-checkbox-button label="2排2座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排3座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排4座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排5座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排6座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排7座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>

                <el-checkbox-button
                  label="2排8座"
                  name="type"
                  style="margin-left: 60px"
                >
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排9座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排10座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排11座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排12座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排13座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="2排14座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="3">
              <el-checkbox-group
                v-model="type"
                border="false"
                size="mini"
                fill="rgb(216,30,6)"
                style="margin-left: 90px"
              >
                <el-checkbox-button label="3排1座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="3排2座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="3排3座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="3排4座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="3排5座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="3排6座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="3排7座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>

                <el-checkbox-button
                  label="3排8座"
                  name="type"
                  style="margin-left: 60px"
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="3排9座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="3排10座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="3排11座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="3排12座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="3排13座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="3排14座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="4">
              <el-checkbox-group
                v-model="type"
                border="false"
                size="mini"
                fill="rgb(216,30,6)"
                style="margin-left: 90px"
              >
                <el-checkbox-button label="4排1座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="4排2座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="4排3座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="4排4座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="4排5座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="4排6座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="4排7座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>

                <el-checkbox-button
                  label="4排8座"
                  name="type"
                  style="margin-left: 60px"
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="4排9座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="4排10座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="4排11座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="4排12座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="4排13座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="4排14座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="5">
              <el-checkbox-group
                v-model="type"
                border="false"
                size="mini"
                fill="rgb(216,30,6)"
                style="margin-left: 90px"
              >
                <el-checkbox-button label="5排1座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="5排2座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="5排3座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="5排4座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="5排5座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="5排6座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="5排7座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>

                <el-checkbox-button
                  label="5排8座"
                  name="type"
                  style="margin-left: 60px"
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="5排9座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="5排10座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="5排11座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="5排12座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="5排13座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="5排14座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="6">
              <el-checkbox-group
                v-model="type"
                border="false"
                size="mini"
                fill="rgb(216,30,6)"
                style="margin-left: 90px"
              >
                6-
                <el-checkbox-button label="6排1座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="6排2座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="6排3座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="6排4座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="6排5座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="6排6座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="6排7座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>

                <el-checkbox-button
                  label="6排8座"
                  name="type"
                  style="margin-left: 60px"
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="6排9座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="6排10座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="6排11座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="6排12座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="6排13座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="6排14座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="7">
              <el-checkbox-group
                v-model="type"
                border="false"
                size="mini"
                fill="rgb(216,30,6)"
                style="margin-left: 90px"
              >
                <el-checkbox-button label="7排1座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="7排2座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="7排3座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="7排4座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="7排5座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="7排6座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="7排7座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>

                <el-checkbox-button
                  label="7排8座"
                  name="type"
                  style="margin-left: 60px"
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="7排9座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="7排10座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="7排11座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="7排12座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="7排13座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="7排14座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="8">
              <el-checkbox-group
                v-model="type"
                border="false"
                size="mini"
                fill="rgb(216,30,6)"
                style="margin-left: 90px"
              >
                <el-checkbox-button label="8排1座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排2座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排3座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排4座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排5座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排6座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排7座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>

                <el-checkbox-button
                  label="8排8座"
                  name="type"
                  style="margin-left: 60px"
                >
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="8排9座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button
                  label="8排10座"
                  name="type"
                  style=""
                  disabled
                >
                  <img
                    :src="require('@/assets/icon/checked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排11座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排12座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排13座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
                <el-checkbox-button label="8排14座" name="type" style="">
                  <img
                    :src="require('@/assets/icon/unchecked.png')"
                    style="margin: -8px -16px"
                  />
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </el-aside>
        <el-main>
          <el-container>
            <el-aside style="width: 100px">
              <img
                :src="require(`../assets/img/${title}.jpg`)"
                :title="`${title}`"
                style="width: 100px; float: left"
              />
            </el-aside>
            <el-main>
              <el-row>
                <el-col :span="24"
                  ><div
                    class="grid-content bg-purple-dark"
                    style="font-size: 150%"
                  >
                    {{ title }}
                  </div></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="24"
                  ><div
                    class="grid-content bg-purple-dark"
                    style="font-size: 90%"
                  >
                    类型：{{ filmInfo.type }}
                  </div></el-col
                >
              </el-row>
              <el-row>
                <el-col :span="24"
                  ><div
                    class="grid-content bg-purple-dark"
                    style="font-size: 90%"
                  >
                    时长：{{ filmInfo.time }}
                  </div></el-col
                >
              </el-row>
            </el-main>
          </el-container>
          <el-row style="margin-top: 10px">
            <el-col :span="24"
              ><div class="grid-content bg-purple-dark" style="font-size: 90%">
                影院：{{ cinema }}
              </div></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="24"
              ><div class="grid-content bg-purple-dark" style="font-size: 90%">
                影厅：{{ room }}
              </div></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="24"
              ><div class="grid-content bg-purple-dark" style="font-size: 90%">
                场次：{{ time }}
              </div></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="24"
              ><div class="grid-content bg-purple-dark" style="font-size: 90%">
                票价：40元
              </div></el-col
            >
          </el-row>
          <div style="margin-top: 10px">座位：{{ type }}</div>
          <div style="margin-top: 10px">
            总价：
            <span style="color: red; font-size: 200%">￥{{ price }}</span>
          </div>
          <div>
            <el-button
              @click="confirm"
              type="danger"
              style="width: 200px; margin-top: 15px; margin-left: 60px"
              round
              >确 认 选 座</el-button
            >
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import request from "../utils/request";
// import emitter from "../utils/eventbus";

export default {
  name: "Xseats",
  props: ["title", "cinema", "room", "time"],
  components: {},
  data() {
    return {
      filmInfo: {},
      cinemaInfo: {},
      type: [],
      checked: "@/assets/icon/checked.png",
      unchecked: require("@/assets/icon/unchecked.png"),
    };
  },
  created() {
    this.load();
  },

  mounted() {
    // emitter.on("sendInfo", (data) => {
    //   console.log("emitter.on被调用了");
    //   this.cinemaInfo = JSON.parse(JSON.stringify(data));
    //   console.log(this.cinemaInfo);
    // });
  },
  computed: {
    price: {
      get() {
        if (this.type.length == 0) return 0;
        else return this.type.length * 40;
      },
    },
  },
  methods: {
    load() {
      request
        .get("http://localhost:9090/film/selectTitle", {
          params: {
            title: this.title,
          },
        })
        .then((res) => {
          this.filmInfo = res;
        });
    },
    confirm() {
      if(this.type == null || this.type == undefined || this.type == ""){
         this.$message({
            type: "error",
            message: "请至少选择一个座位",
          });
      }
      else{
          this.$message({
            type: "success",
            message: "购票成功",
          });
      }
    },
  },
};
</script>

<style>
</style>