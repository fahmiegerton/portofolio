<script setup lang="ts">
const { locale: current, setLocaleCookie } = useI18n()

const locales = [
  { code: 'id', name: 'Indonesia' },
  { code: 'en', name: 'English' },
]

const currentLocale = computed(() => {
  return locales.find((locale) => locale.code === current.value)
})

watch(current, (newLocale) => {
  setLocaleCookie(newLocale)
})
</script>

<template>
  <div class="flex items-center gap-3 px-3 py-1 border rounded-lg z-99 border-white/10 bg-zinc-900/90 backdrop-blur-xl">
    <ClientOnly>
      <div v-for="locale in locales"
           :key="locale"
           class="cursor-pointer select-none"
           @click="$i18n.locale = locale.code">
        <span class="font-semibold"
              :class="locale.code === currentLocale.code ? 'text-white' : 'text-gray-500'">
          {{ locale.code }}
        </span>
      </div>
      <template #fallback>
        <div class="w-5 h-2" />
      </template>
    </ClientOnly>
  </div>
</template>
