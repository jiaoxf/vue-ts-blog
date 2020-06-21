<template>
  <div>
    <v-row no-gutters>
      <v-col
        class="pa-2 article-item"
        v-for="n in 10"
        :key="n"
        cols="12"
        sm="12"
        md="12"

      >
        <a class="card-link" href="#">
          <v-card
            class="pa-6 mx-auto text-left card-box"
            theme--light
          >
            <v-sheet
              color="lighten"
            >
              <p class="article-title mb-2">这是一个标题短刀卡科技的看大门看标题的上课呢看了</p>
              <div class="description">
                <p class="line-clamp">
                  码良组件封装详解 最近码良迎来了一波新功能的上线，并毫无保留地继续进行了代码开源-赶紧star关注 。新上线的功能有桌面端页面制作、”楼层模式“、”正宗“布局组件（容器组件）的开发能力...
                </p>
              </div>
              <div class="horizontal">
                <!-- <span class="text-item">点赞</span> -->
                <v-btn class="mx-2" fab dark x-small color="green">
                  <v-icon dark>mdi-heart</v-icon>
                </v-btn>
                <span class="text-item votes-num">1</span>
                <span class="text-item author-name">焦学峰</span>
                <span class="text-item" style="fontSize:14px;"><span class="dot">·</span>2020-05-05</span>
              </div>
            </v-sheet>
          </v-card>  
        </a>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FeedMeta from '@/components/FeedMeta.vue';

@Component({
  components: {
    FeedMeta,
  },
})

export default class ArticleBlock extends Vue {
  private isLoading: boolean = true;
  private elevations: number[] = [6, 12, 18];
}
</script>
<style lang="scss" scoped>
.article-item{
  .card-link{
    text-decoration:none
  }
  .card-box{
    border-radius: 12px;
    border-radius: 20px;
    background: #ffffff;
    box-shadow:  20px 20px 60px #d9d9d9, 
                -20px -20px 60px #ffffff;
  }
  &:not(:last-child){
    /* border-bottom: 1px solid rgba(178,186,194,.15); */
  }
  .article-title{
    display: inline;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #212121;
    position: relative;
    vertical-align: middle;
  }
  .description{
    .line-clamp{
      margin-bottom: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 1.5;
      color: #888;
      font-size: 15px;
      font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    }
  }
  .horizontal{
    
    font-size: 18px;
    color: rgba(0,0,0,.4);
    border-radius: 16px;

    .text-item{
      margin-right: 10px;
      margin-left: 10px;
    }
    .author-name{
      color:#666;
    }
    .votes-num{
      color: #009a61;
      font-weight: bold;
      &::before{
        content: 'x ';
        font-size: 12px;
      }
    }

    .dot{
      color: #999;
      font-weight: normal;
      padding: 0 5px;
    }
  }
}

</style>
