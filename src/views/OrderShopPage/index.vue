<template>
  <div class="order_shop_page">
    <OrderList :orderList="orderList" @switch-status="switchStatus"></OrderList>
  </div>
</template>

<script>
import OrderList from './components/OrderList'
export default {
  name: 'OrderShopPage',
  components: { OrderList },
  data() {
    return {
      // 订单数据
      orderList: [
        {
          img: require('@/assets/image/canting1.jpg'), // 桌子图片
          tables: 'Tables 01', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: false, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting2.jpg'), // 桌子图片
          tables: 'Tables 02', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: true, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting3.jpg'), // 桌子图片
          tables: 'Tables 03', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: false, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting4.jpg'), // 桌子图片
          tables: 'Tables 04', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: true, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting1.jpg'), // 桌子图片
          tables: 'Tables 05', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: false, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting2.jpg'), // 桌子图片
          tables: 'Tables 06', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: true, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting3.jpg'), // 桌子图片
          tables: 'Tables 07', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: true, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting4.jpg'), // 桌子图片
          tables: 'Tables 08', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: false, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting1.jpg'), // 桌子图片
          tables: 'Tables 09', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: false, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting2.jpg'), // 桌子图片
          tables: 'Tables 10', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: true, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting3.jpg'), // 桌子图片
          tables: 'Tables 11', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: false, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        },
        {
          img: require('@/assets/image/canting4.jpg'), // 桌子图片
          tables: 'Tables 12', // 桌号
          status: 'Available Now', // 状态
          isShowStatus: false, // 状态
          price: '50.00', // 消费
          time: '17:00-19:00'
        }
      ]
    }
  },
  methods: {
    // 切换状态
    switchStatus(id) {
      if (this.orderList[id].isShowStatus) {
        this.orderList[id].status = 'Available Now'
      } else {
        this.orderList[id].status = 'Not available'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.order_shop_page {
  // height: 100%;
  overflow-x: auto;
  padding: 10px;
  margin-bottom: 100px;
}
</style>
