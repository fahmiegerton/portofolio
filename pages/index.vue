<script setup lang="ts">
import socials from '~/data/socials'

const appConfig = useAppConfig()
const { t, locale } = useI18n()

const runtimeConfig = useRuntimeConfig()

useHead({
	title: '',
	titleTemplate: appConfig.appName,
})

useSeoMeta({
	title: () => appConfig.appName,
	description: () => t('seo.description'),
	author: 'Arif Fahmi',
	ogType: 'website',
	ogTitle: appConfig.appName,
	ogDescription: () => t('seo.description'),
	ogUrl: () => runtimeConfig.public.siteUrl,
	ogLocale: () => locale.value,
	twitterTitle: appConfig.appName,
	twitterDescription: () => t('seo.description'),
	twitterCard: 'summary_large_image',
	twitterSite: appConfig.twitterUsername,
	twitterCreator: appConfig.twitterUsername,
	twitterImage: "https://media.licdn.com/dms/image/C5116AQH-J4dbSnGqmw/profile-displaybackgroundimage-shrink_200_800/0/1569888725370?e=2147483647&v=beta&t=4BiepGGGv7fGNNp6IgZxcQ0Oc24_KjOmqjg1YxrugDA"
})

defineOgImage({
	url: appConfig.openGraphImage,
	width: 1200,
	height: 630,
	alt: 'Home Image'
})
</script>

<template>
	<section class="relative px-7 md:px-2">
		<!-- grid -->
		<div
			  class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />

		<div class="relative flex flex-col justify-center gap-4 px-4 py-3 mx-auto max-w-7xl sm:px-28 lg:px-44 lg:py-6">
			<span class="text-6xl font-black leading-none md:text-8xl text-cyan-300"
					style="--stagger: 2; --delay: 10ms"
					data-animate>Halo👋</span>
			<span class="text-6xl font-black leading-none transition md:text-8xl text-zinc-950 text-stroke shadow-cyan-300"
					style="--stagger: 3;"
					data-animate>Kawan</span>
			<span class="text-6xl font-black leading-none md:text-8xl text-cyan-300"
					style="--stagger: 4;"
					data-animate>Selamat</span>
			<span class="text-3xl font-black leading-none transition lg:text-6xl text-zinc-950 text-stroke shadow-cyan-300"
					style="--stagger: 6;"
					data-animate>Datang
				di</span>
			<span class="text-4xl font-black leading-none underline md:text-8xl text-cyan-300"
					style="--stagger: 7;"
					data-animate>Portofolio Saya ;)</span>

			<br>

			<div class="z-20 flex flex-col items-center justify-center">
				<Divider />
				<!-- title -->
				<h2 class="mx-auto mt-6 text-lg text-center font-extralight text-white/60"
					 style="--stagger: 8;"
					 data-animate>
					Developer, kadang fotografer, kadang desain grafis, kadang admin, kadang kidding :). Orangnya ramah dan
					santai, jarang
					gigit kecuali makanan enak, kalau mau kolaborasi orangnya mau kok walaupun agak malu hehe. Orangnya
					senang belajar hal baru, termasuk portofolio ini yang menggunakan Nuxt 3 dan Bun. Walaupun hidup orangnya
					penuh dengan ke random an, tapi orangnya bakal effort banget untuk membantu sesama rekan jika butuh
					bantuan, gak perlu disuruh juga bakal ngebantu kok ;).
				</h2>
			</div>
		</div>

		<!-- profile picture -->
		<div class="absolute top-0 right-0 hidden px-48 pt-16 lg:block"
			  style="--stagger: 5;"
			  data-animate>
			<HomeProfilePicture />
		</div>

		<div class="flex items-center justify-center mt-4"
			  style="--stagger: 9;"
			  data-animate>
			<SettingsAvailability background />
		</div>

		<div class="flex items-center justify-center gap-6 my-7 sm:gap-10"
			  style="--stagger: 10;"
			  data-animate>
			<NuxtLink v-for="social in socials"
						 :key="social.name"
						 :to="social.link"
						 target="_blank"
						 class="flex items-center justify-center"
						 :aria-label="`Pergi ke profil ${social.name}`">
				<component :is="social.logo"
							  class="transition-all duration-300 social-item size-6 text-muted hover:text-main"
							  :alt="social.name + ' logo'"
							  :fontControlled="false"
							  :aria-label="social.name + ' logo'" />
			</NuxtLink>
		</div>
	</section>
</template>

<style>
.text-stroke {
	filter: drop-shadow(0 0 1px var(--tw-shadow-color)) drop-shadow(1px 1px 0 var(--tw-shadow-color)) drop-shadow(-1px 1px 0 var(--tw-shadow-color)) drop-shadow(1px -1px 0 var(--tw-shadow-color)) drop-shadow(-1px -1px 0 var(--tw-shadow-color));
}
</style>