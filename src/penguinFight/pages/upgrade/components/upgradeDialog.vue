<template>
  <nut-config-provider>
    <nut-popup v-model:visible="show" closeable round :style="{ width: '80%', height: '60%' }" @closed="handleClose">
      <nut-cell :title="'强化模拟 - ' + row.title"></nut-cell>
      <section class="dialog-container">
        <!-- 强化类型 -->
        <div class="upgrade-type-button">
          <span class="button-text">强化特惠：</span>
          <nut-switch v-model="isStrong" active-text="开" inactive-text="关"></nut-switch>
        </div>
        <!-- 强化信息展示 -->
        <img :src="row.cover" class="dialog-cover"></img>
        <div v-if="level < 10">
          <span class="level-info">等级{{ level }} - 等级{{ level + 1 }}</span>
          <span>强化成功几率：{{ success + '%' }}</span>
        </div>
        <div v-else>已满级</div>
        <!-- 强化进度 -->
        <div class="upgrade-progress">
          <nut-progress :show-text="false" :stroke-width="30" :percentage="percent" class="progress" status="active"
            stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)">
          </nut-progress>
          <div v-if="level < 10">祝福值:{{ num }}/{{row.info && row.info[level] }}</div>
        </div>
        <!-- 操作按钮 -->
        <div class="upgrade-button">
          <nut-button @click="upgrade" :disabled="level === 10">强化</nut-button>
        </div>
        <!-- 统计 -->
        <div>您已花费{{ money }}个黄金卷轴</div>
      </section>
    </nut-popup>
  </nut-config-provider>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { ref, toRefs, computed, watch } from 'vue'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  row: {
    type: Object,
    default: () => ({})
  }
})
let { visible, row } = toRefs(props)

const emits = defineEmits(['visible'])
const handleClose = () => {
  emits('visible', false)
  level.value = 0
  num.value = 0
  percent.value = 0
  money.value = 0
  isStrong.value = false
}
const show = ref(false)
watch(visible, (val) => {
  show.value = val
})

const level = ref(0)
const num = ref(0)
const percent = ref(0)
const money = ref(0)
const isStrong = ref(false)

const success = computed(() => {
  const base = 2
  const result = base * 100 / (props.row.info?.[level.value] + base)
  return Math.round(result)
})


const upgrade = () => {
  money.value += (level.value + 1)
  const base = isStrong.value ? 4 : 2
  // 满祝福或超祝福则进阶
  if (num.value < props.row.info[level.value]) {
    if (num.value + base > props.row.info[level.value]) {
      levelUp()
    } else {
      const random = Math.random() * 100
      if (random <= success.value) {
        levelUp()
      } else {
        num.value += base
        percent.value = num.value * 100 / props.row.info[level.value]
      }
    }
  } else {
    levelUp()
  }
}

const levelUp = () => {
  Taro.showToast({ title: '升级成功!', icon: 'none' })
  level.value++
  num.value = 0
  percent.value = 0
  if (level.value === 10) {
    percent.value = 100
  }
}

</script>

<style lang="less">
.dialog-container {
  margin: 0 12px;
  color: yellow;
  text-align: center;
}

.upgrade-type-button {
  display: flex;
  justify-content: center;
  align-items: center;
  .button-text {
    margin-right: 8px;
  }
}

.dialog-cover {
  margin-top: 16px;
  width: 120px;
  height: 120px;
}

.level-info {
  margin: 16px 16px 0px 0px;
  display: inline-block;
}

.upgrade-progress {
  display: flex;
  line-height: 30px;
  margin: 16px;
  color: red;
}

.progress {
  flex: 1;
  margin-right: 8px;
}

.upgrade-button {
  margin-bottom: 16px;
}
</style>