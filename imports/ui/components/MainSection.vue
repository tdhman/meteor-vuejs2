<template>
  <div class="section">
    <div class="content" :class="{'center': center}" >
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    props: {
      center: {
        type: Boolean,
        default: false
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped lang="less">
  @import "../less/theme.less";
  .section {
    background: white;
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;

    .content.center {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }
</style>

