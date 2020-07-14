<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
            fixed
            class="d-md-flex"
            color="#fff"
            light
        >
            <v-list-item>
                <v-avatar class="mx-auto mt-12"  size="100" height="75px" width="75px">
                    <!-- <img src="https://randomuser.me/api/portraits/men/81.jpg"> -->
                </v-avatar>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="slider-name">XXXX</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list nav dense>
                <v-list-item-group 
                    active-class="green darken-1"
                >
                <v-list-item
                link
                    v-for="(item, i) in items"
                    :to="item.path"
                    :key="i"
                >
                <router-link :to="item.path"></router-link>
                    <v-list-item-icon class="mr-4">
                        <!-- <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-daohangliebiao"></use>
                        </svg> -->
                        <Icon :name="item.icon"/>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="text-start" v-text="item.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
        app
        class="d-flex d-lg-none"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer">
                <Icon name="daohangliebiao"/>
            </v-app-bar-nav-icon>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-app-bar>
    </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import { isMobileOrPc, getQueryStringByName } from '@/utils/utils';
import { NavListItem } from '@/types/index';
import Icon from '@/components/Icon.vue';
// import Component from 'vue-class-component';

@Component({
    components: {
        Icon,
    },
})
export default class Nav extends Vue {
    private visible: boolean = false;
    private handleFlag: string = '';
    private title: string = '';
    private drawer: any = null;
    private items: NavListItem[] = [
        {
        index: '1',
        path: '/articles',
        name: '文章',
        icon: 'wenzhangguanli',
        },
        {
        index: '2',
        path: '/frame',
        name: '框架',
        icon: 'vue',
        },
        {
        index: '3',
        path: '/project',
        name: '项目',
        icon: 'gongzuojingyan',
        },
        {
        index: '4',
        path: '/reprinted',
        name: '转载',
        icon: 'wenzhangshoucang',
        },
        {
        index: '5',
        path: '/openSource',
        name: '开源',
        icon: 'github',
        },
        {
        index: '6',
        path: '/about',
        name: '关于',
        icon: 'guanyuwomen',
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
    private mounted(): void {
        console.log(this.$route);
    }
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
    private drawerBtn(): void {
        this.drawer = true;
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
    background-color: #fff;
    border-color: rgb(42, 41, 53);
    max-height: calc(100% - 0px);
    color: #fff!important
}
.slider-name{
    text-align: center;
    margin: 20px 0;
    font-size: 18px;
}
.v-list-item.v-list-item--link {
    padding: 0px 0px 0px 60px !important;
}
.v-application .green.darken-1 {
    color: #fff!important;
}
</style>
