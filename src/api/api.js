let apis = {}

// 把所有接口合并到apis中
try {
  var ctx = require.context('../api', true, /\.js$/)
  ctx.keys().forEach(item => {
    if (/.*Api*/.test(item)) {
      const api = ctx(item).default
      apis = Object.assign({}, apis, api)
    }
  })
} catch(err) {
  console.log(err)
}

export default apis
