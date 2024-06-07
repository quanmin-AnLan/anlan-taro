import Http from '@/utils/serviceUtils'

const apis = {
  // pv上报
  reportPV: (params) => Http.get(`/report/pv`, params)
}

export default apis
