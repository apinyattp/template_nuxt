// import webpack from 'webpack'
require('dotenv').config()

export default {
  mode: 'universal',
  /*
    ** Headers of the page
  */
  head: {
    title: process.env.META_TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: process.env.META_TITLE || ''
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: process.env.SHARE_IMAGE || ''
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.META_DESCRIPTION || ''
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.META_DESCRIPTION || ''
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: process.env.SITE_URL || ''
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'keyword',
        name: 'keywords',
        content: 'SCG, vending machine, vendingMachine'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'preconnect',
        href: process.env.BASE_URL
      },
      {
        rel: 'dns-prefetch',
        href: process.env.BASE_URL
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.googleapis.com'
      }
    ]
  },

  webfontloader: {
    custom: {
      families: ['Kanit:n4,n4i,n5,n7', 'Open Sans:n4,n4i,n5,n7'],
      urls: [
        'https://fonts.googleapis.com/css?family=Kanit:400,400i,500,700&display=swap',
        'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,500,700&display=swap'
      ]
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0080C6' },

  mq: {
    defaultBreakpoint: 'xl',
    breakpoints: {
      xs: 320,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: Infinity
    }
  },

  pwa: {
    manifest: {
      name: 'Mycustomer',
      short_name: 'Mycustomer',
      lang: 'th'
    }
  },
    /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    'nuxt-mq',
    '@nuxtjs/style-resources',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],

  styleResources: {
    scss: ['./assets/vars/*.scss']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}