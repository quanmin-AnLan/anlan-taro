<template>
  <nut-config-provider theme="dark">
    <div class="upgrade-container">
      <!-- 图片预览 -->
      <nut-image-preview autoplay="0" :show="showImg" :images="imgPreview" @close="showImg = false"
        :content-close="false" :closeable="true" />
      <nut-cell isLink title="点击查看图片" :showIcon="true" @click="showImg = true"></nut-cell>
      <!-- 列表 -->
      <nut-tabs v-model="activeName" background="gold" :animated-time="0">
        <nut-tab-pane v-for="(item, index) in tabConfig" :key="index" :title="item.label" :pane-key="item.value">
          <nut-grid :column-num="4" square>
            <nut-grid-item v-for="(one, i) in toolData[activeName]" :key="i" @click="openUpgrade(one)">
              <nut-avatar size="large" shape="square">
                <img :src="one.cover" :alt="one.title">
              </nut-avatar>
            </nut-grid-item>
          </nut-grid>
        </nut-tab-pane>
      </nut-tabs>
      <!-- 弹窗 -->
      <upgradeDialog v-model="dialogVisible" :row="row"></upgradeDialog>
    </div>
  </nut-config-provider>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { ref } from 'vue'
import apis from '@/api/api'
import upgradeDialog from './components/upgradeDialog.vue'
import './index.less'


const shareData = {
  title: 'Anlan工具箱 - 强化',
  imageUrl: 'http://img.anlan.xyz/anlan.jpg',
  path: '/penguinFight/pages/upgrade/index'
}
Taro.useShareAppMessage(() => {
  return shareData
})
Taro.useShareTimeline(() => {
  return shareData
})

const tabConfig = [
  {
    label: '武器',
    value: 'weapon'
  },
  {
    label: '技能',
    value: 'skill'
  }
]
const imgPreview = [{
  src: 'http://img.anlan.xyz/ledou/linli/qianghua.png'
}]

const showImg = ref(false)

Taro.useLoad(() => {
  getToolData()
  getInfoData()
})

const toolData = ref({})
const getToolData = async () => {
  const res = await apis.getToolInfo()
  const { data = {} } = res || {}
  toolData.value = data
}

const infoData = ref({})
const getInfoData = async () => {
  const res = await apis.getUpgradeInfo()
  const { data = {} } = res || {}
  infoData.value = data
}

const activeName = ref('weapon')
const dialogVisible = ref(false)
const row = ref({})
const openUpgrade = (item) => {
  let result = item
  result.info = infoData.value[activeName.value][item.type - 1]
  row.value = result
  dialogVisible.value = true
}
</script>