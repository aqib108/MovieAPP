export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
],
plugins: [
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
],
script: [
  {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    type: "text/javascript"
  },
  {
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
    type: "text/javascript"
  },
  {
    src:
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
    type: "text/javascript"
  }
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // extra config e.g
    // BaseURL: 'https://link-to-API'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    extendRoutes(routes, resolve) {
      return [
        {
          name: 'detail',
          path: '/movie-detail/:movieId', // <--- change this
          component: resolve(__dirname, 'pages/detail.vue'),
        },
        {
          name: 'home',
          path: '/',
          component: resolve(__dirname,'pages/index.vue')
        }
        
      ]
    }
  }
}
