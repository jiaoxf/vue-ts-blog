<template>
  <section>
    <nav>
      <!-- <v-card class="mx-auto" height="100%" overflow-hidden>
        <v-toolbar dense>
          <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
          <v-toolbar-title>Title</v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer
          class="deep-purple accent-4"
          dark
          permanent
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
          <v-list>
            <v-list-item
              v-for="item in list"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <template v-slot:append>
            <div class="pa-2">
              <v-btn block>Logout</v-btn>
            </div>
          </template>
        </v-navigation-drawer>
      </v-card> -->
    </nav>
  </section>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import { isMobileOrPc, getQueryStringByName } from '@/utils/utils';
import { NavListItem } from '@/types/index';


export default class Nav extends Vue {
  private visible: boolean = false;
  private handleFlag: string = '';
  private title: string = '首页';
  private drawer: boolean = false;
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
