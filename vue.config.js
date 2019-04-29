module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Use-Ant-design-vue/'
      : '/',
      css: {
        loaderOptions: {
          less: {
            javascriptEnabled: true
          }
        }
      }
  }