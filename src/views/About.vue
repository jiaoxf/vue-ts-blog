<template>
    <div class=''>

    </div>
</template>
<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
@Component({
    name: 'name',
    components: {

    },
})
export default class extends Vue {
    private isShow: boolean = true;
    @Prop({ default: '1' }) private msg!: string;
    private methods(x: any, y: any) {
        console.log(x, y);
    }
    private mounted() {
    // Do something
    }
    @Watch('someThing')
    private getVisible(newVal: string, oldVal: string): void {
        console.log('newVal', newVal, 'oldVal', oldVal);
    }
}
</script>
<style lang='scss' scoped>
    //@import url(); 引入公共css类
</style>