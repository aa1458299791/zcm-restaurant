<template>
  <div class="restaurant_details">
    <!-- 导航栏 -->
    <div class="navigation_bar">
      <van-nav-bar left-arrow @click-left="returnUpper">
        <template #right>
          <van-icon name="share" class="forward" @click="forward" />
          <van-icon name="like-o" @click="switchLike" v-if="isLikeShow" />
          <van-icon name="like" @click="switchLike" v-else />
        </template>
      </van-nav-bar>
    </div>
    <!-- 内容 -->
    <div class="content_box">
      <!-- 图片 -->
      <div>
        <van-image
          width="23rem"
          height="15rem"
          fit="fill"
          :src="detailsData.image"
        />
      </div>
      <!-- 餐厅名称 -->
      <div>
        <h4>{{ detailsData.name }}</h4>
      </div>
      <!-- 定位和评分 -->
      <div class="location_score">
        <!-- 定位 -->
        <div>
          <LocationAssembly></LocationAssembly>
        </div>
        <!-- 评分 -->
        <div class="score">
          <van-icon name="star" />
          <span>{{ detailsData.score }}</span>
        </div>
      </div>
      <!-- 人均 -->
      <div class="per_capita">
        <span>Aud {{ detailsData.perCapita }}</span>
        /pereon
      </div>
      <!-- 描述 -->
      <div class="describe">
        <h4>Description</h4>
        <!-- 简介 -->
        <div class="brief_introduction">
          {{ detailsData.describeInfo }}
        </div>
      </div>
      <!-- 设施 -->
      <div>
        <h4>Facilities</h4>
        <div class="facilities">
          <van-image width="50" height="50" :src="detailsData.imgSrc[0]" />
          <van-image width="50" height="50" :src="detailsData.imgSrc[1]" />
          <van-image width="50" height="50" :src="detailsData.imgSrc[2]" />
          <van-image width="50" height="50" :src="detailsData.imgSrc[3]" />
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom_content">
      <div class="left">
        <div class="per_capita">IDR {{ detailsData.average }}</div>
        <div>Standart Room</div>
      </div>
      <div class="rigtn">
        <van-button type="info" @click="lowerOrder($route.query.id)">
          Book now
        </van-button>
      </div>
    </div>
    <!-- 分享 -->
    <div>
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script>
import LocationAssembly from '../../components/Location'

import { Toast } from 'vant'
export default {
  name: 'RestaurantDetails',
  components: {
    LocationAssembly
  },
  data() {
    return {
      isLikeShow: false, // 喜欢
      showShare: false, // 分享
      options: [
        // 分享数据
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' }
      ],
      detailsData: {
        image: require('@/assets/image/canting1.jpg'), // 餐厅图片
        name: 'Home Thai Restaurant', // 餐厅名称
        score: '4.9 (2,918)', // 评分
        perCapita: '54.000', // 人均
        average: '412.00', // 房间平均
        // 简介
        describeInfo:
          'The Blue Sky Hotel Yogyakarta is a modern and elegant 4-star hotel , perfect for a romantic and charming getaway inThe Blue Sky Hotel Yogyakarta is a modern and elegant 4-star hotel , perfect for a romantic and charming getaway in the enchantingThe Blue Sky Hotel Yog the enchantingThe Blue Sky Hotel Yog', // 描述

        imgSrc: [
          // 图标
          require('@/assets/image/wifi.png'),
          require('@/assets/image/canju.png'),
          require('@/assets/image/kongtiao.png'),
          require('@/assets/image/chuang.png')
        ]
      }
    }
  },
  methods: {
    // 下单
    lowerOrder(id) {
      console.log(id)
      Toast('下单！')
      this.$router.push({ path: '/home/order', query: { id: id } })
    },
    // 分享
    onSelect(option) {
      Toast('转发成功！')
      this.showShare = false
    },
    // 点击喜欢
    switchLike() {
      // console.log(123)
      if (this.isLikeShow) {
        this.isLikeShow = false
      } else {
        this.isLikeShow = true
      }
    },
    // 点击转发
    forward() {
      this.showShare = true
    },
    // 返回上一页
    returnUpper() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.restaurant_details {
  height: 100%;
  overflow-x: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  // 底部
  .bottom_content {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #c8cacd;
    .left {
      color: #595c68;
      .per_capita {
        font-size: 18px;
        font-weight: bold;
        color: #3136c0;
      }
    }
    .rigtn {
      .van-button--normal {
        border-radius: 10px;
      }
    }
  }
  // 内容
  .content_box {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
    // 设施
    .facilities {
      display: flex;
      justify-content: space-around;
      padding-bottom: 10px;
    }
    // 描述
    .describe {
      padding-bottom: 20px;
      border-bottom: 1px solid #c8cacd;
      // 简介
      .brief_introduction {
        display: -webkit-box; //使用了flex，需要加
        overflow: hidden; //超出隐藏
        word-break: break-all; //纯英文、数字、中文
        text-overflow: ellipsis; //省略号
        -webkit-box-orient: vertical; //垂直
        -webkit-line-clamp: 3; //显示一行
        white-space: pre-line; //合并空白符序列，但是保留换行符。(如果要使用这个垂直和显示几行的代码也要写)
      }
    }
    // 人均
    .per_capita {
      margin-top: 20px;
      color: #595c68;
      span {
        font-size: 20px;
        font-weight: bold;
        color: #3136c0;
      }
    }
    // 定位 评分
    .location_score {
      display: flex;
      justify-content: space-around;
      color: #595c68;
      border-bottom: 1px solid #c8cacd;
      // 评分
      .score {
        .van-icon {
          color: #fac232;
        }
        span {
          color: #3a3b40;
        }
      }
    }
  }
  // 导航栏
  .navigation_bar {
    .forward {
      margin-right: 30px;
    }
  }
}
</style>
