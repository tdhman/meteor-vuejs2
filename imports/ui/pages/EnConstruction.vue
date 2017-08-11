<template>
  <MainSection>
    <h1>En construction</h1>
    <div class="text-center">
      <VLink class="btn btn-primary" href="/">Revenir au site</VLink>
    </div>
  </MainSection>
</template>


<script>
  import VLink from '../components/VLink.vue'
  import MainSection from '../components/MainSection.vue'
  
  export default {
    components: {
      VLink,
      MainSection
    },
    data: function() {
      return {}
    },
    methods: {}
  }
</script>


<style scoped lang="less">
  @import "../less/theme.less";
</style>