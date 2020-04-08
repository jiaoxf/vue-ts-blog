<template>
  <div id='app'>
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
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
  },
})
export default class App extends Vue {}
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
