<template>
  <div class="login">
    <div>
      <van-image :src="image" />
    </div>
    <!-- 登录信息 -->
    <div class="login_info">
      <h2>Restaurant reservation system</h2>
      <!-- 账号 -->
      <div>
        <van-cell-group>
          <van-field v-model="value" label="账号" placeholder="请输入账号" />
        </van-cell-group>
      </div>
      <!-- 密码 -->
      <div>
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
      </div>
      <!-- 验证码 -->
      <div>
        <van-field
          v-model="verificationCode"
          center
          clearable
          placeholder="请输入验证码"
        >
          <template #button>
            <!-- <van-button size="small" type="primary">发送验证码</van-button> -->
            <SIdentify
              :identifyCode="identifyCode"
              @click.native="refreshIdentifyCode"
            ></SIdentify>
          </template>
        </van-field>
      </div>
      <!-- 商家登录 -->
      <div><van-checkbox v-model="checked">I am Shop</van-checkbox></div>
      <!-- 登录 -->
      <van-button type="info" @click="loginSubmit">登录</van-button>
    </div>
  </div>
</template>

<script>
import SIdentify from './components/SCanvas'

import { Toast } from 'vant' // 轻提示
export default {
  name: 'LoginPage',
  components: {
    SIdentify
  },
  data() {
    return {
      value: 'admin', // 账号
      password: '123456', // 密码
      verificationCode: '', // 验证码
      image: require('@/assets/image/diancan.png'),
      identifyCode: '', // 密码登录图形验证码
      identifyCodes: '1234567890abcdefghizklmnopqrstuvwxyz', // 生成图形验证码的依据
      checked: false, // 是否商家登录
      path: '/welcome' // 登录路由地址
    }
  },
  methods: {
    // 点击登录
    loginSubmit() {
      if (this.checked) {
        this.path = '/welcome/shop'
      }

      if (
        this.value === 'admin' &&
        this.password === '123456' &&
        this.identifyCode === this.verificationCode
      ) {
        // console.log('登录')
        Toast.success('登录成功')
        this.$router.push({
          path: this.path
        })
      } else {
        Toast.fail('登录失败，请检查登录信息！')
      }
      console.log(123)
    },
    // 刷新验证码
    refreshIdentifyCode() {
      this.identifyCode = ''
      this.makeIdentifyCode(4)
      console.log(123)
    },
    // 生成4位数的随机验证码
    makeIdentifyCode(l) {
      const random = Math.floor(
        (Math.random() + Math.floor(Math.random() * 9 + 1)) *
          Math.pow(10, l - 1)
      )
      this.identifyCode = random + ''
      // console.log(this.identifyCode)
    }
  },
  mounted() {
    // 初始化验证码
    this.identifyCode = ''
    this.makeIdentifyCode(4)
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  // 登录信息
  .login_info {
    padding: 15px;
    h2 {
      text-align: center;
    }
    .van-button {
      margin-top: 30px;
      width: 100%;
    }
  }
}
</style>
