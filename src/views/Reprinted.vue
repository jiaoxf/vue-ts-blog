<template>
  <div class='reprinted'>
    <ArticleBlock />
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import ArticleBlock from '@/components/ArticleBlock.vue';
@Component({
  name: 'Reprinted',
  components: {
    ArticleBlock,
  },
})
export default class extends Vue {
  private isShow: boolean = true;
}
</script>
<style lang='scss' scoped>
  //@import url(); 引入公共css类
</style>