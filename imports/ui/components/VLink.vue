<template>
  <router-link :to="{ path: href }">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        required: true
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped lang="less">
  
</style>