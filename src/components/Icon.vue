<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconTag"></use>
        <!-- <use xlink:href="#icon-daohangliebiao"></use> -->
    </svg>
</template>
<script lang="ts">
// import './src/assets/icon/iconfont.js';
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
    @Prop(String) private name!: string;
    get iconTag(): string {
        return `#icon-${this.name}`;
    }
}
</script>
