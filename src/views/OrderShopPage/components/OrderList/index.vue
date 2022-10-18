<template>
  <div class="order_list">
    <div
      class="order_crad"
      :class="item.isShowStatus ? 'status_color' : ''"
      v-for="(item, index) in orderList"
      :key="index"
    >
      <div class="left">
        <van-image :src="item.img" />
      </div>
      <div class="right">
        <div>
          Tables:
          <span>{{ item.tables }}</span>
        </div>
        <div class="status">
          Status:
          <span>{{ item.status }}</span>
          <van-switch
            v-model="item.isShowStatus"
            size="12px"
            @change="switchStatus(index)"
          />
        </div>
        <div>
          Price:
          <span>${{ item.price }}</span>
        </div>
        <div>
          Time:
          <span>{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  props: {
    orderList: {
      type: Array
    }
  },
  methods: {
    // 切换状态
    switchStatus(id) {
      this.$emit('switch-status', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.order_list {
  .order_crad {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-top: 15px;
    padding: 5px;
    border-radius: 10px;
    border-bottom: 1px solid rgb(121, 115, 115);
    color: rgb(121, 115, 115);
    .left {
      ::v-deep .van-image__img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
      }
    }
    .right {
      margin-left: 20px;
      .status {
        display: flex;
        align-items: center;
        .van-switch {
          margin-left: 10px;
        }
      }
      div {
        margin: 10px 0;
      }
      span {
        font-weight: bold;
      }
    }
  }
}
.status_color {
  color: #000 !important;
  border: 1px solid #3f8bfe;
}
</style>
