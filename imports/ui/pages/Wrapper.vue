<template>
  <div class="main-wrapper">
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>  
  export default {
    data: function() {
      return {}
    },
    computed: {},
    props: {},
    methods: {},
    created() {}
  }
</script>

<style scoped lang="less">
  @import "../less/theme.less";
  .main-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
