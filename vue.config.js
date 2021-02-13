module.exports = {
  publicPath: '',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'store': '@/store',
        'components': '@/components',
        'common': '@/common',
        'views': '@/views',
        'network': '@/network'
      }
    }
  }
}
