<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <div class="content">
      <div class="home-header">
        <router-link class="link" to="/">
          <img class="home-logo"
            src="../assets/userLogo.jpeg"
            alt="biaochenxuying logo" />
        </router-link>
      </div>
      <div class="home-body">
        <LoadingCustom v-if="true"></LoadingCustom>
      </div>
    </div> -->
    <!-- App.vue -->
    <v-app>
      <v-navigation-drawer app>
        <Nav />
      </v-navigation-drawer>
      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import LoadingCustom from '@/components/Loading.vue';

@Component({
  components: {
    LoadingCustom,
    Nav,
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
    background: url('./../assets/bg.png') 100% 100% no-repeat;
    background-size: 100% 100%;
    .home-logo {
      width: 160px;
      border-radius: 10%;
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
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        width: 50%;
        margin: auto;
        font-size: 22px;
        color: #eaeadf;
        background: rgba(0,0,0,.5);
        padding: 15px;
        margin-top: 22px;
        letter-spacing: 0;
        line-height: 30px;
        border-radius: 10px;
        box-sizing: initial;
        white-space: nowrap;
        &::before{
          content: "";
          position: absolute;
          top: -30px;
          left: 50%;
          margin-left: -15px;
          border-width: 15px;
          border-style: solid;
          border-color: transparent transparent rgba(0,0,0,.5) transparent;
        }
        .link {
          display: inline-block;
          /* padding: 20px; */
          /* color: #409eff; */
          min-width: 80px;
        }
        .link:hover {
          /* color: rgb(155, 35, 35); */
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
