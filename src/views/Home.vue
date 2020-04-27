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
      <Nav />
      <v-content>
        <v-container
          class="fill-height"
          fluid
        >
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
</style>
