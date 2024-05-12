<script setup lang="ts">
const { appName } = useAppConfig()

defineProps({
	isText: {
		type: Boolean,
		default: false
	},
	size: {
		type: Number,
		default: 6
	}
})
</script>

<template>
	<NuxtLink to="/"
				 class="flex shrink-0 items-center"
				 aria-label="Kembali ke halaman depan">
		<!-- <SvgMaisonHochard class="block w-auto"
								:class="size ? 'h-' + size : 'h-6'"
								:font-controlled="false" /> -->
		<span class="ml-1 text-xs font-semibold"
				v-if="isText">{{ appName }}</span>
	</NuxtLink>
</template>