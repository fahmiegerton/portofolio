<script setup lang="ts">
const { profilePicture } = useAppConfig()
</script>

<template>
	<div class="z-10 flex items-center justify-center">
		<NuxtImg width="300"
					:src="profilePicture"
					class="size-80"
					alt="Profil Gambar Arif Fahmi"
					aria-label="Profil Gambar Arif Fahmi" />
	</div>
</template>