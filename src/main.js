import Vue from 'vue'
import App from './App'
import router from './router'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

Sentry.init({
  Vue,
  dsn: 'https://464d7194cec0487383c8b979b854baff@o1147112.ingest.sentry.io/6246994',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
  //   environment: process.env.NODE_ENV,
  release: process.env.SENTRY_RELEASE,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
