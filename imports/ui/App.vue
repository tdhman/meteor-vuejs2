<template>
  <router-view>
  </router-view>
</template>

<script>
  export default {
    components: {},
    data: function() {
      return {}
    },
    computed: {},
    props: {},
    methods: {},
  }
</script>

<style lang="less">
  @import "./less/app.tmpl.less";
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden; 
  }
  html, body {
    padding: 0;
    margin: 0;
    color: @color-one;
  }
</style>
