<template>
  <div class="home-index">
    <div class="home-header">
      <div>欢迎进入安澜工具箱～</div>
    </div>
    <div class="home-container">
      <AlButton text="全民大乐斗" @click="Taro.navigateTo({url: '/penguinFight/pages/index/index'})"></AlButton>
      <AlButton text="联系我们" @click="Taro.navigateTo({url: '/pages/contact/index'})" v-if="TARO_ENV !== 'qq'"></AlButton>
    </div>
    <div class="home-bottom">
      <text class="bottom-left">Ciallo～(∠・ω • )⌒★</text>
    </div>
  </div>
</template>

<script setup>
import Taro from '@tarojs/taro'
import AlButton from '@/components/AlButton.vue'
import './index.less'
const { TARO_ENV } = process.env

const shareData = {
  title: 'Anlan工具箱',
  imageUrl: 'http://img.anlan.xyz/anlan.jpg',
  path: '/pages/index/index'
}
Taro.useShareAppMessage(() => {
  return shareData
})
Taro.useShareTimeline(() => {
  return shareData
})
</script>
