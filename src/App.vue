<template>
  <div id='app' class="container">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import { Route } from 'vue-router';
import Nav from '@/components/Nav.vue';
import { isMobileOrPc } from '@/utils/utils';


// 移动端 rem 单位适配
if (isMobileOrPc()) {
  // width * 100 / 750 = width / 7.5
  // 1rem = 100px
  const width = window.screen.width;
  window.document.getElementsByTagName('html')[0].style.fontSize =
    width / 7.5 + 'px';
}


@Component({
  components: {
    HelloWorld,
    Nav,
  },
})
export default class App extends Vue {
  private isShowNav: boolean = false;
  private mounted(): void {
    this.routeChange(this.$route, this.$route);
  }
  @Watch('$route')
  private routeChange(val: Route, oldVal: Route): void {
    const referrer: any = document.getElementById('referrer');
    if (val.path === '/') {
      this.isShowNav = false;
      // referrer.setAttribute('content', 'always');
    } else {
      this.isShowNav = true;
      // referrer.setAttribute('content', 'never');
    }
    /* if (
      val.path === "/articles" ||
      val.path === "/archive" ||
      val.path === "/project" ||
      val.path === "/timeline" ||
      val.path === "/message"
    ) {
      this.isShowSlider = true;
    } else {
      this.isShowSlider = false;
    }
    if (isMobileOrPc()) {
      this.isShowSlider = false;
    } */
  }
}
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
