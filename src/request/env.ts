export default (() => {
  if (import.meta.env.MODE === 'development') {
    // 开发环境
    return 'https://www.fastmock.site/mock/bd4fed1a1fdf2b1eebb9f307e818c608'
  } else if (import.meta.env.MODE === 'production') {
    // 生产环境
    return ''
  } else {
    // 测试环境
  }
})()
