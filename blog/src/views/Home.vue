<template>
  <div class="home">
    <headerTop></headerTop>
    <foldingpanel></foldingpanel>
    <articleList></articleList>
    <footerbottom></footerbottom>
    <router-view />
  </div>
</template>

<script>
import headerTop from "@/components/header.vue";
import articleList from "@/components/content.vue";
import foldingpanel from "@/components/foldingpanel.vue";
import footerbottom from "@/components/footer.vue";
export default {
  components: {
    headerTop,
    foldingpanel,
    articleList,
    footerbottom,
  },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
}
</style>
