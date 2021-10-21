<template>
  <router-view/>
</template>

<style>
</style>

<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
// import Top from '@/components/Top'

export default {
  name: "App",
  components: {
    // Top,
    Header,
    Aside,
  },
  mounted() {
    console.log("App",this)
  },
};
</script>