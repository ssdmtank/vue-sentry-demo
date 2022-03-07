const SentryCliPlugin = require('@sentry/webpack-plugin')
const { DeleteSourceMapsPlugin } = require('webpack-delete-sourcemaps-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new SentryCliPlugin({
        include: './dist',
        ignore: ['node_modules'],
        configFile: 'sentry.properties',
        release: process.env.SENTRY_RELEASE,
        cleanArtifacts: true, // 先清理再上传
      }),

      new DeleteSourceMapsPlugin(), // 清理sourcemap
    ],
  },
}
