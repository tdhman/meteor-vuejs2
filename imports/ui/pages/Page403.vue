<template>
  <MainSection>
    <h1>403</h1>
    <div class="text-center">
      <VLink class="btn btn-primary" href="/">Revenir au site</VLink>
    </div>
  </MainSection>
</template>

<script>
  import MainSection from '../components/MainSection.vue'
  import VLink from '../components/VLink.vue'
  
  export default {
    components: {
      MainSection,
      VLink
    }
  }
</script>

<style scoped lang="less">
  @import "../less/theme.less";
  .section:nth-of-type(1) {
    min-height: 100vh;
  }
</style>