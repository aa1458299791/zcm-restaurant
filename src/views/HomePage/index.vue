<template>
  <div class="home_page">
    <h2>Where do you want</h2>
    <h2>to go to eat?</h2>
    <!-- 搜索框 -->
    <div class="search">
      <van-cell-group>
        <van-field
          v-model="searchValue"
          clearable
          left-icon="search"
          placeholder="Search restaurants..."
          @focus="jumpSearch"
        />
      </van-cell-group>
    </div>
    <!-- 分类组件 -->
    <ClassiFication
      :classificationData="classificationData"
      @enter-classification="enterClassification"
    ></ClassiFication>
    <!-- 轮播图组件 -->
    <CarouselChart
      class="carousel_chart"
      :CarouselImg="CarouselImg"
    ></CarouselChart>
    <!-- 热门餐厅组件 -->
    <PopularRestaurants
      :restaurantsData="restaurantsData"
      @Jump-restaurants="JumpRestaurants"
    ></PopularRestaurants>
    <!-- 宣传海报 -->
    <div class="propaganda">
      <h3>
        Explore
        <br />
        Near You!
      </h3>
      <div>Find the best restaurants for your meal</div>
      <van-button type="info" @click="seekDelicious">Explore</van-button>
    </div>
    <!-- 推荐 -->
    <RecomMended
      class="Recom_mended"
      :rankingData="rankingData"
      @see-whole="seeWhole"
      @recommend-details="recommendDetails"
    ></RecomMended>
    <!-- 分割线 -->
    <div class="division">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
        已经到底了哦~
      </van-divider>
    </div>
  </div>
</template>

<script>
import ClassiFication from './components/Classification'
import CarouselChart from './components/CarouselChart'
import PopularRestaurants from './components/PopularRestaurants'
import RecomMended from './components/Recommended'

import { Dialog } from 'vant'
export default {
  name: 'HomePage',
  components: {
    ClassiFication,
    CarouselChart,
    PopularRestaurants,
    RecomMended
  },
  data() {
    return {
      // 定义类别数据
      classificationData: [
        {
          img: require('@/assets/image/meishi.png'),
          name: 'New',
          id: 1
        },
        {
          img: require('@/assets/image/tiandian.png'),
          name: 'Discount',
          id: 2
        },
        {
          img: require('@/assets/image/yinliao.png'),
          name: 'Drinks',
          id: 3
        },
        {
          img: require('@/assets/image/wnacan.png'),
          name: 'Dinner',
          id: 4
        },
        {
          img: require('@/assets/image/shaokao.png'),
          name: 'BBQ',
          id: 5
        }
      ],
      // 定义轮播图数据
      CarouselImg: [
        require('@/assets/image/lunbo1.jpg'),
        require('@/assets/image/lunbo2.jpg'),
        require('@/assets/image/lunbo3.jpg'),
        require('@/assets/image/lunbo4.jpg')
      ],
      // 定义热门餐厅数据
      restaurantsData: [
        {
          imgSrc: require('@/assets/image/canting1.jpg'), // 餐厅图片
          name: 'restaurantNamerestaurantNamerestaurantNamerestaurantName', // 餐厅名字
          info: 'restaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInfo', // 餐厅简介
          id: 1
        },
        {
          imgSrc: require('@/assets/image/canting2.jpg'), // 餐厅图片
          name: 'restaurantNamerestaurantNamerestaurantNamerestaurantName', // 餐厅名字
          info: 'restaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInfo', // 餐厅简介
          id: 2
        },
        {
          imgSrc: require('@/assets/image/canting3.jpg'), // 餐厅图片
          name: 'restaurantNamerestaurantNamerestaurantNamerestaurantName', // 餐厅名字
          info: 'restaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInfo', // 餐厅简介
          id: 3
        },
        {
          imgSrc: require('@/assets/image/canting4.jpg'), // 餐厅图片
          name: 'restaurantNamerestaurantNamerestaurantNamerestaurantName', // 餐厅名字
          info: 'restaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInfo', // 餐厅简介
          id: 4
        }
      ],
      // 定义排行榜数据
      rankingData: [
        {
          imgSrc: require('@/assets/image/canting1.jpg'), // 餐厅图片
          name: 'restaurantNamerestaurantNamerestaurantNamerestaurantName', // 餐厅名字
          info: 'restaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInfo', // 餐厅简介
          score: '4.8', // 评分
          money: '222', // 人均消费
          id: 1
        },
        {
          imgSrc: require('@/assets/image/canting2.jpg'), // 餐厅图片
          name: 'restaurantNamerestaurantNamerestaurantNamerestaurantName', // 餐厅名字
          info: 'restaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInfo', // 餐厅简介
          score: '4.5', // 评分
          money: '333', // 人均消费
          id: 2
        },
        {
          imgSrc: require('@/assets/image/canting3.jpg'), // 餐厅图片
          name: 'restaurantNamerestaurantNamerestaurantNamerestaurantName', // 餐厅名字
          info: 'restaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInfo', // 餐厅简介
          score: '4.4', // 评分
          money: '444', // 人均消费
          id: 3
        },
        {
          imgSrc: require('@/assets/image/canting4.jpg'), // 餐厅图片
          name: 'restaurantNamerestaurantNamerestaurantNamerestaurantName', // 餐厅名字
          info: 'restaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInforestaurantInfo', // 餐厅简介
          score: '4.2', // 评分
          money: '555', // 人均消费
          id: 4
        }
      ],
      // 搜索框的值
      searchValue: ''
    }
  },
  methods: {
    // 输入框获得焦点跳转搜索建议页
    jumpSearch() {
      // console.log(123)
      this.$router.push({
        path: '/home/SearchProposal'
      })
    },
    // 进入推荐餐厅详情
    recommendDetails(id) {
      this.$router.push({
        path: '/home/details',
        query: {
          id: id
        }
      })
    },
    // 查看全部
    seeWhole() {
      // console.log(123)
      // Dialog.alert({
      //   message: '功能完善中~'
      // }).then(() => {
      //   // on close
      // })
      this.$router.push({
        path: '/home/all'
      })
    },
    // 寻找美味
    seekDelicious() {
      Dialog.alert({
        message: '功能完善中~'
      }).then(() => {
        // on close
      })
    },
    // 跳转餐厅
    JumpRestaurants(id) {
      // console.log(id, 123)
      this.$router.push({
        path: '/home/details',
        query: {
          id: id
        }
      })
    },
    // 点击美食分类
    enterClassification(id, value) {
      //  console.log(id, 123)
      this.$router.push({
        path: '/home/popular',
        query: {
          value: value
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home_page {
  height: 100%;
  padding: 15px;
  //  margin-bottom: 200px;
  // 搜索框
  .search {
    margin: 10px 0;
    //  border: 1px solid;
    //  border-radius: 15px;
    // background-color: yellow;
    .van-cell-group {
      background-color: transparent;
    }
    ::v-deep .van-cell {
      background-color: #e6e2e2;
      border-radius: 25px !important;
    }
  }
  // 轮播图
  .carousel_chart {
    margin-top: 20px;
    margin-bottom: 70px;
  }
  // 宣传海报
  .propaganda {
    // width: 100%;
    height: 200px;
    color: white;
    border-radius: 15px;
    margin-top: 20px;
    padding: 15px;
    background-image: url('@/assets/image//xchuan1.jpg');
    // 按钮
    .van-button--normal {
      margin-top: 15px;
      border-radius: 20px;
    }
  }
  // 推荐
  .Recom_mended {
    margin-top: 50px;
  }
  // 分割
  .division {
    padding-bottom: 50px;
  }
}
</style>
