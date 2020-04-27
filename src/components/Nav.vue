<template>
  <v-app id="inspire">
    <nav>
      <v-navigation-drawer
        class="d-none d-sm-flex white--text"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>Logout</v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-app-bar
        app
        clipped-left
        class="d-flex d-sm-none"
      >
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
        <v-icon @click.stop="drawer = !drawer" >mdi-home</v-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
    </nav>
  </v-app>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import { isMobileOrPc, getQueryStringByName } from '@/utils/utils';
import { NavListItem } from '@/types/index';


export default class Nav extends Vue {
  private visible: boolean = false;
  private handleFlag: string = '';
  private title: string = '首页';
  private drawer: any = false;
  private list: NavListItem[] = [
    {
      index: '1',
      path: '/',
      name: '首页',
      icon: 'home',
    },
    {
      index: '2',
      path: '/articles',
      name: '文章',
      icon: 'dashboard',
    },
    {
      index: '3',
      path: '/archive',
      name: '归档',
      icon: 'dashboard',
    },
    {
      index: '4',
      path: '/project',
      name: '项目',
      icon: 'dashboard',
    },
    {
      index: '5',
      path: '/timeline',
      name: '时间轴',
      icon: 'dashboard',
    },
    {
      index: '6',
      path: '/message',
      name: '留言',
      icon: 'dashboard',
    },
    {
      index: '7',
      path: '/about',
      name: '关于',
      icon: 'dashboard',
    },
  ];
  private activeIndex: string = '0';
  private enterSlideUp: boolean = false;
  private leaveSlideDown: boolean = false;
  private isShow: boolean = false;
  // private isMobile: boolean = isMobileOrPc();
  /* private handleClickMenu(route: string): void {
    this.isShow = false;
    if (route === "/login") {
      this.handleFlag = "login";
      this.visible = true;
    }
    if (route === "/register") {
      this.handleFlag = "register";
      this.visible = true;
    }
    if (route === "/logout") {
      this.handleLogout();
    }
  } */
  private handleMenu(): void {
    this.isShow = true;
    this.enterSlideUp = true;
  }
  private handleHideMenu(): void {
    this.enterSlideUp = false;
    this.leaveSlideDown = true;
    setTimeout(() => {
      this.leaveSlideDown = false;
      this.isShow = false;
    }, 300);
  }


  private handleClick(value: string): void {
    this.handleFlag = value;
    this.visible = true;
  }

  private handleCancel(value: boolean): void {
    this.visible = value;
  }
  private handleOk(value: boolean): void {
    this.visible = value;
  }
  private handleSelect(val: string, oldVal: string): void {
    // console.log("val :", val);
    // console.log("oldVal :", oldVal);
    this.activeIndex = val;
  }
}
</script>
<style scoped lang="scss">
nav{
  /* width: 256px; */
  height: 100vh;
  top: 0px;
  transform: translateX(0%);
  background-color: rgb(42, 41, 53);
  border-color: rgb(42, 41, 53);
  max-height: calc(100% - 0px);
}
</style>
