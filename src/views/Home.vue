<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="content">
      <div class="home-header">
        <router-link class="link" to="/">
          <img class="home-logo"
            src="../assets/userLogo.jpeg"
            alt="biaochenxuying logo" />
        </router-link>
      </div>
      <div class="home-body">
    <LoadingCustom v-if="true"></LoadingCustom>
        
        <div class="list">
          <router-link class="link"
            to="/articles">
            文章
          </router-link>
          <router-link class="link"
            to="/project">
            项目
          </router-link>
          <a target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://github.com/jiaoxf">
            github
          </a>
          <a target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://juejin.im/user/591d6b4d0ce463006926ae40">
            掘金
          </a>
          <a target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://www.zhihu.com/people/gu-jian-qi-tan-shui/activities">
            知乎
          </a>
          <a target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://segmentfault.com/u/biaochenxuying">
            segmentfault
          </a>
          <a target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://www.jianshu.com/u/91717b553bfd">
            简书
          </a>
        </div>
        <div class="introduce"> 时光正好，未来可期，加油 ！ </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoadingCustom from '@/components/Loading.vue';

@Component({
  components: {
    LoadingCustom,
  },
})
export default class Home extends Vue {
  private isLoading: boolean = true;
}
</script>
<style lang="scss" scoped>
.home {
  position: fixed;
  left: 0;
  top: 0;
  .content {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;
    text-align: center;
    padding-top: 12%;
    .home-logo {
      width: 220px;
      border-radius: 50%;
      animation: mylogo 3s;
      -moz-animation: mylogo 3s; /* Firefox */
      -webkit-animation: mylogo 3s; /* Safari and Chrome */
      -o-animation: mylogo 3s; /* Opera */
      animation-iteration-count: infinite;
    }
    .home-header {
      .link {
        display: block;
      }
    }
    .home-body {
      padding-top: 20px;
      .list {
        .link {
          display: inline-block;
          padding: 20px;
          color: #409eff;
          min-width: 80px;
        }
        .link:hover {
          color: rgb(155, 35, 35);
        }
      }
    }
    .introduce {
      padding-top: 20px;
      color: #fff;
    }
  }
}
</style>
