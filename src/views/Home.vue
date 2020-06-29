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
        <v-app id="inspire">
        <Nav />
        <v-content>
            <v-container
                class="fill-height container"
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
<style lang="scss">
.icon {
    font-size: 22px;
    width: 1em; 
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
@keyframes rise3 {
    0% {
        transform: translate3d(0, 100%, 0) scale(0);
    }
    100% {
        transform: translate3d(0, -50%, 0) scale(1);
    }
}
</style>
