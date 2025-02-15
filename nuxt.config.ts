import { fileURLToPath } from 'url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
    '@data': fileURLToPath(new URL('./utils/data', import.meta.url)),
    '@icons': fileURLToPath(new URL('./assets/icons', import.meta.url)),
    '@images': fileURLToPath(new URL('./assets/img', import.meta.url)),
    '@scss': fileURLToPath(new URL('./assets/scss', import.meta.url)),
  },
  compatibilityDate: '2024-11-01',
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true },
  modules: ['nuxt-svgo-loader'],
  routeRules: {
    '/*': { prerender: true },
  },
  svgoLoader: {
    // Options here will be passed to `vite-svg-loader`
    // https://github.com/jpkleemans/vite-svg-loader?tab=readme-ov-file#vite-svg-loader
  },
});
