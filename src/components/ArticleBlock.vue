<template>
  <div>
    <v-row no-gutters>
      <v-col
        class="pa-3 article-item"
        v-for="n in 10"
        :key="n"
        cols="12"
        sm="12"
        md="6"

      >
        <v-card
          class="mx-auto text-left"
          elevation="0"
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
              <span class="text-item">点赞</span>
              <span class="text-item votes-num">1</span>
              <span class="text-item author-name">焦学峰</span>
              <span class="text-item"><span class="dot">·</span>2020年5月05日</span>
              
            </div>
          </v-sheet>
        </v-card>  
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class ArticleBlock extends Vue {
  private isLoading: boolean = true;
  private elevations: Array<number> = [6, 12, 18];
}
</script>
<style lang="scss" scoped>
.article-item{
  &:not(:last-child){
    border-bottom: 1px solid rgba(178,186,194,.15);
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
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.5;
      color: #888;
      font-size: 13px;
      font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    }
  }
  .horizontal{
    font-size: 13px;
    color: rgba(0,0,0,.4);
    .text-item{
      margin-right: 10px;
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
