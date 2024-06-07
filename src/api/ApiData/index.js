import Http from '@/utils/serviceUtils'

const baseApi = '/PenguinFight'

const apis = {
  // 武器技能升级数据
  getUpgradeInfo: () => Http.get(`${baseApi}/getUpgradeInfo`),
  // 武器技能基础信息
  getToolInfo: () => Http.get(`${baseApi}/getToolInfo`),
  // 皮肤数据
  getSkinInfo: () => Http.get(`${baseApi}/getSkinInfo`)
}

export default apis
