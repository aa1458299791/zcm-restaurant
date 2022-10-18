<template>
  <div class="mail_info">
    <!-- 导航栏 -->
    <div><van-nav-bar left-arrow @click-left="onClickLeft" /></div>
    <!-- 内容 -->
    <div class="content">
      <!-- 图标 -->
      <div class="icon"><van-icon name="checked" /></div>
      <!-- 标题 -->
      <div class="titel"><h2>Your payment completed!</h2></div>
      <!-- 信息 -->
      <div class="info">
        Yeay! Your payment for Kraton Hotel Yogyakarta with a stay date of 12
        June to 14 June, you will . stay with a Deluxe room with 2 guests.
      </div>
    </div>
    <!-- 底部 -->
    <div class="button">
      <van-button type="info" @click="jumpWish">Go To My Booking</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MailInfo',
  methods: {
    // 跳转心愿单
    jumpWish() {
      this.$router.push({ path: '/like' })
    },
    // 返回上一页
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.mail_info {
  width: 100%;
  // 底部
  .button {
    width: 100%;
    position: fixed;
    bottom: 0;
    // right: 10%;
    left: calc(50% - 60px);
    margin-bottom: 20px;
    .van-button--normal {
      border-radius: 15px;
    }
  }
  // 内容
  .content {
    text-align: center;

    // 信息
    .info {
      width: 80%;
      margin: 0 auto;
    }
    .titel {
      width: 80%;
      margin: 0 auto;
    }
    // 图标
    .icon {
      font-size: 200px;
      color: rgba(127, 222, 10, 0.808);
    }
  }
}
</style>
