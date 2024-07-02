<template>
  <div class="penguin-fight-container">
    <div class="penguin-fight-header">
      <nut-avatar>
        <img src="https://mmbiz.qpic.cn/mmbiz_png/lXOhoe1vd1ncExuqBUMwjswMlHlibx2Kic0To8t6LBn6pZZ6LjG8srF3rSlXMpTUDFd6TN7ib9U7gxno0n2MPvRlg/640?wx_fmt=png&wxfrom=200" alt="">
      </nut-avatar>
      <div class="header-text">全民大乐斗首页</div>
    </div>
    <div class="penguin-fight-main">
      <AlButton text="替身" @click="Taro.navigateTo({url: '/penguinFight/pages/skin/index'})"></AlButton>
      <AlButton text="强化" @click="Taro.navigateTo({url: '/penguinFight/pages/upgrade/index'})"></AlButton>
    </div>
  </div>
</template>

<script setup>
import Taro from '@tarojs/taro'
import AlButton from '@/components/AlButton.vue'
import './index.less'

const shareData = {
  title: 'Anlan工具箱 - 全民大乐斗',
  imageUrl: 'http://img.anlan.xyz/anlan.jpg',
  path: '/penguinFight/pages/index/index'
}
Taro.useShareAppMessage(() => {
  return shareData
})
Taro.useShareTimeline(() => {
  return shareData
})
</script>