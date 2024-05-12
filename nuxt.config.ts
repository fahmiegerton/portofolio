// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      meta: [
        {
          name: 'author',
          content: 'Arif Fahmi',
        },
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  routeRules: {
    '/': { isr: true, prerender: true },
  },
  site: {
    url: process.env.NUXT_SITE_URL || 'https://fahmiegerton.github.io',
    identity: {
      type: 'Person',
    },
    twitter: '@itsfahmiegerton',
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      available: process.env.NUXT_PUBLIC_AVAILABLE,
      meetingLink: process.env.NUXT_PUBLIC_MEETING_LINK,
    },
    private: {
      resendApiKey: process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  css: ['~/assets/styles/main.scss'],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxt/content', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxt/ui', 'nuxt-svgo', '@nuxt/content', '@nuxthq/studio', '@nuxt/image', 'nuxt-og-image'],
  image: {
    format: ['webp'],
    screens: {
      avatar: 96,
      cover: 256,
      project: 1536,
    },
  },
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    baseUrl: '/',
    locales: [
      {
        code: 'id',
        iso: 'id-ID',
      },
      {
        code: 'en',
        iso: 'en-US',
      },
    ],
    vueI18n: '~/i18n.config.ts',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/'],
    },
  },

  content: {
    watch: {
      ws: {
        showURL: false,
      },
    },
    highlight: {
      theme: 'github-dark',
    },
    navigation: {
      fields: ['image', '_id'],
    },
    markdown: {
      anchorLinks: false,
    },
    locales: ['id', 'en'],
    defaultLocale: 'id',
  },
  svgo: {
    autoImportPath: './assets/logo/',
  },

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
