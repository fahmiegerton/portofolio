import messages from '~/locales/messages'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'id',
  availableLocales: ['id','en',],
  messages: messages,
}))
