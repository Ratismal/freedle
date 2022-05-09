export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    port: 3006,
    host: '0.0.0.0'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Freedle - A free daily word game',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A recreation of the game where you guess the hidden word in 6 tries. A new puzzle is available each day. Completely in sync with Wordle, but with new features.' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:url', content: 'https://freedle.stupidcat.me' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Freedle - A free daily word game' },
      { property: 'og:description', content: 'A recreation of the game where you guess the hidden word in 6 tries. A new puzzle is available each day. Completely in sync with Wordle, but with new features.' },
      { property: 'twitter:domain', content: 'freedle.stupidcat.me' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: '/animations.css' }
    ],
    script: [
      { src: '/theme.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
};
