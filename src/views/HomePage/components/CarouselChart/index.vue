<template>
  <div class="carousel_chart">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image :src="CarouselImg[0]" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image :src="CarouselImg[1]" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image :src="CarouselImg[2]" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image :src="CarouselImg[3]" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'CarouselChart',
  props: {
    CarouselImg: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel_chart {
  width: 90%;
  height: 150px;
  margin: 0 auto;
  ::v-deep .van-image__img {
    // height: 200px;
    border-radius: 15px;
  }
}
</style>
