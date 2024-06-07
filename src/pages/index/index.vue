<template>
  <view class="index">
    <text>{{ msg }}</text>
    <span @click="Taro.navigateTo({ url: '/user/pages/index/index' })">12345</span>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { ref } from 'vue'
import './index.less'
const msg = ref('Hello world')
</script>
