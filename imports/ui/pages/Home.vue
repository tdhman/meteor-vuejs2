<template>
  <MainSection :center="true">
    <el-alert title="Welcome" type="info" description="Design your site with VueJS Element UI" show-icon>
    </el-alert>
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
    data() {
      return {}
    },
    methods: {
      
    }
  }
</script>


<style scoped lang="less">
  @import "../less/theme.less";

</style>