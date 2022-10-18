<template>
  <div class="like_page">
    <!-- 导航栏 -->
    <div>
      <van-nav-bar
        left-text="Wishlist"
        left-arrow
        @click-left="returnSearchPage"
      >
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 心愿列表 -->
    <div class="wish_list">
      <OrderList
        :orderList="orderList"
        @placeAn-order="placeAnOrder"
        @delete-order="deleteOrder"
      ></OrderList>
    </div>
  </div>
</template>

<script>
import OrderList from './components/OrderList'

import { Toast } from 'vant'
export default {
  name: 'LikePage',
  components: {
    OrderList
  },
  data() {
    return {
      // 订单列表
      orderList: [
        {
          id: '9281025', // 订单id
          imgSrc: require('@/assets/image/canting1.jpg'), // 餐厅图片
          name: 'Home Thai Restaurant', // 餐厅名称
          location: 'Sembalun L ombok', // 位置
          average: '115.00' // 人均
        },
        {
          id: '9281025', // 订单id
          imgSrc: require('@/assets/image/canting2.jpg'), // 餐厅图片
          name: 'Home Thai Restaurant', // 餐厅名称
          location: 'Sembalun L ombok', // 位置
          average: '2215.00' // 人均
        },
        {
          id: '9281025', // 订单id
          imgSrc: require('@/assets/image/canting3.jpg'), // 餐厅图片
          name: 'Home Thai Restaurant', // 餐厅名称
          location: 'Sembalun L ombok', // 位置
          average: '2145.00' // 人均
        },
        {
          id: '9281025', // 订单id
          imgSrc: require('@/assets/image/canting4.jpg'), // 餐厅图片
          name: 'Home Thai Restaurant', // 餐厅名称
          location: 'Sembalun L ombok', // 位置
          average: '2155.00' // 人均
        },
        {
          id: '9281025', // 订单id
          imgSrc: require('@/assets/image/canting1.jpg'), // 餐厅图片
          name: 'Home Thai Restaurant', // 餐厅名称
          location: 'Sembalun L ombok', // 位置
          average: '2165.00' // 人均
        },
        {
          id: '9281025', // 订单id
          imgSrc: require('@/assets/image/canting2.jpg'), // 餐厅图片
          name: 'Home Thai Restaurant', // 餐厅名称
          location: 'Sembalun L ombok', // 位置
          average: '2125.00' // 人均
        },
        {
          id: '9281025', // 订单id
          imgSrc: require('@/assets/image/canting3.jpg'), // 餐厅图片
          name: 'Home Thai Restaurant', // 餐厅名称
          location: 'Sembalun L ombok', // 位置
          average: '2195.00' // 人均
        },
        {
          id: '9281025', // 订单id
          imgSrc: require('@/assets/image/canting4.jpg'), // 餐厅图片
          name: 'Home Thai Restaurant', // 餐厅名称
          location: 'Sembalun L ombok', // 位置
          average: '2125.00' // 人均
        }
      ]
    }
  },
  methods: {
    // 跳转搜索页
    returnSearchPage() {
      this.$router.push({ path: '/home/SearchProposal' })
    },
    // 下单
    placeAnOrder(id) {
      this.$router.push({
        path: '/home/order',
        query: {
          id: id
        }
      })
      Toast('跳转下单页...')
    },
    // 删除订单
    deleteOrder(id) {
      Toast.fail('不可以删除哦~')
    }
  }
}
</script>

<style lang="scss" scoped>
.like_page {
  width: 100%;
  overflow-x: hidden;
  // 心愿列表
  .wish_list {
    width: 100%;
    margin-top: 10px;
    background-color: white;
    padding: 10px;
    overflow-y: hidden;
  }
}
</style>
