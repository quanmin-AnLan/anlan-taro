<template>
  <nut-config-provider theme="dark">
    <div class="skin-container">
      <nut-tabs v-model="active" background="gold" :animated-time="0" @change="pickerValue = ['全部']">
        <nut-tab-pane v-for="(item, index) in tabs" :key="index" :title="item.label" :pane-key="item.value">
          <nut-cell title="属性筛选" @click="pickerShow = true">
            <template #desc>
              <span style="color: gold">{{ String(pickerValue) }}</span>
            </template>
          </nut-cell>
          <nut-popup v-model:visible="pickerShow" position="bottom">
            <nut-picker v-model="pickerValue" :columns="pickerColumns" title="属性选择" @cancel="pickerShow = false" @confirm="pickerShow = false" />
          </nut-popup>
          <nut-grid :column-num="4" square>
            <nut-grid-item v-for="(one, i) in washSkinData" :key="i" @click="gridClick(one)">
              <nut-avatar size="large" shape="square">
                <img :src="one.img" :alt="one.name">
              </nut-avatar>
            </nut-grid-item>
          </nut-grid>
        </nut-tab-pane>
      </nut-tabs>

      <nut-popup v-model:visible="dialogShow" closeable round :style="{ width: '80%', height: '60%' }" @closed="dialogActive = 1">
        <nut-cell :title="'属性展示 - ' + dialogInfo.name"></nut-cell>
        <nut-tabs v-model="dialogActive" background="gold" :animated-time="0" v-if="dialogInfo.info">
          <nut-tab-pane v-for="(item, index) in dialogTabs" :key="index" :title="item.label" :pane-key="item.value">
            <nut-cell v-for="(one, i) in dialogInfo.info[dialogActive]" :key="i" :title="one"></nut-cell>
          </nut-tab-pane>
        </nut-tabs>
        <div v-else>暂无数据</div>
      </nut-popup>
    </div>
  </nut-config-provider>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { ref, computed } from 'vue'
import apis from '@/api/api'
import { selectConfig } from './config'
import './index.less'
const active = ref('role')
const dialogActive = ref(1)
const tabs = [
  {
    label: '人物替身',
    value: 'role'
  },
  {
    label: '武器幻化',
    value: 'weapon'
  }
]
const dialogTabs = [
  {label: '1星', value: 1},
  {label: '2星', value: 2},
  {label: '3星', value: 3},
  {label: '4星', value: 4},
  {label: '5星', value: 5},
]

const pickerShow = ref(false)
const pickerValue = ref(['全部'])
const pickerColumns = computed(() => {
  const result = selectConfig[active.value]
  return result
})

Taro.useLoad(() => {
  Taro.showLoading({title: '替身数据获取中'})
  getData()
})

const skinData = ref([])
const getData = async () => {
  try {
    const res = await apis.getSkinInfo()
    const { data = [] } = res || {}
    skinData.value = data
    Taro.hideLoading()
  } catch (err) {
    Taro.hideLoading()
    Taro.showToast({title: '替身数据已被安澜吃掉，请稍后再试', icon: 'none'})
    console.log(err)
  }
}

const washSkinData = computed(() => {
  const baseData = JSON.parse(JSON.stringify(skinData.value))
  const activeData = baseData[active.value]
  let data = []
  const selectValue = pickerValue.value[0]
  if (selectValue !== '全部') {
    for (const item of activeData) {
      const info = item.info
      for (const i in info) {
        const infoItem = info[i]
        const str = infoItem.join(',')
        if (str.includes(selectValue) && !data.includes(item)) {
          if (selectValue === '暴击' && (str.includes('抗暴击') || str.includes('暴击伤害'))) {
            // console.log('属性不对');
          } else if (selectValue === '伤害减免' && str.includes('最终伤害减免')) {
            // console.log('属性不对');
          } else if (selectValue === '眩晕几率' && str.includes('抗眩晕几率')) {
            // console.log('属性不对');
          } else if (selectValue === '抵挡' && (str.includes('抵挡穿透') || str.includes('抵挡减伤'))) {
            // console.log('属性不对');
          } else if (selectValue === '穿透' && str.includes('抵挡穿透')) {
            // console.log('属性不对');
          } else {
            data.push(item)
          }
        }
      }
    }
  } else {
    data = activeData
  }
  return data
})

const dialogShow = ref(false)
const dialogInfo = ref({})
const gridClick = (item) => {
  dialogInfo.value = item
  dialogShow.value = true
}
</script>