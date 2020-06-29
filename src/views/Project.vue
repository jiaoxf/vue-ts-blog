<template>
    <div class="project">
        这是项目页面
    </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
@Component({
    name: 'project',
    components: {

    },
})
export default class extends Vue {
    private isShow: boolean = true;
    @Prop({ default: '1' }) private msg!: string;
    private mounted() {
    // Do something
    }
}
</script>
<style lang='scss' scoped>
  //@import url(); 引入公共css类
</style>