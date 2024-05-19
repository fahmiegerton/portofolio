<script setup lang="ts">
import socials from '~/data/socials'
import masonry from '~/data/masonry'
import { EnvelopeIcon, ChatBubbleLeftEllipsisIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

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
			<span class="text-3xl font-black leading-none underline md:text-8xl text-cyan-300"
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

		<Divider />

		<h1 class="text-3xl font-extrabold text-center my-7 text-zinc-950 text-stroke shadow-cyan-300"
			 style="--stagger: 11;"
			 data-animate>here's some of my work
		</h1>

		<div class="flex items-center justify-center mx-10 mb-16">
			<div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
				<img class="h-auto max-w-full bg-white rounded-lg"
					  v-for="(img, index) in masonry"
					  :key="index"
					  :style="`--stagger: ${12 + (index + 1)};`"
					  data-animate
					  :src="img.src"
					  :alt="img.alt">
			</div>
		</div>

		<div class="flex items-center justify-center mx-auto"
			  style="--stagger: 30;"
			  data-animate>
			<div class="px-3 py-2 my-5 rounded-md bg-cyan-500">
				<NuxtLink class="relative flex items-center justify-center gap-2 transition-all duration-200 text-zinc-950"
							 to="/">
					{{ $t('home.hero.see_project') }}
					<ArrowRightIcon class="text-zinc-950 size-5" />
				</NuxtLink>
			</div>
		</div>

		<Divider />

		<div class="flex flex-col items-center justify-center gap-4 mt-8 sm:gap-2">
			<h1 class="text-3xl font-extrabold text-center mb-7 text-zinc-950 text-stroke shadow-cyan-300"
				 style="--stagger: 31;"
				 data-animate>
				Mari saling kontak :)
			</h1>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
				<UTooltip :text="$t('home.hero.email')"
							 :shortcuts="['CTRL', 'O']">
					<div class="px-3 py-2 rounded-md bg-cyan-500"
						  style="--stagger: 32;"
						  data-animate>
						<NuxtLink class="relative flex items-center justify-center gap-2 transition-all duration-200 text-zinc-950"
									 to="/">
							{{ $t('home.hero.contact') }}
							<EnvelopeIcon class="text-zinc-950 size-5" />
						</NuxtLink>
					</div>
				</UTooltip>

				<div class="flex gap-4 sm:gap-2"
					  style="--stagger: 33;"
					  data-animate>
					<UTooltip :text="$t('home.hero.copy_message')"
								 :shortcuts="['CTRL', 'C']">
						<div class="px-3 py-2 rounded-md bg-cyan-500">
							<NuxtLink class="relative flex items-center justify-center gap-2 transition-all duration-200 text-zinc-950"
										 to="https://wa.me/6285748169246">
								{{ $t('home.hero.message') }}
								<ChatBubbleLeftEllipsisIcon class="text-zinc-950 size-5" />
							</NuxtLink>
						</div>
					</UTooltip>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
.text-stroke {
	filter: drop-shadow(0 0 1px var(--tw-shadow-color)) drop-shadow(1px 1px 0 var(--tw-shadow-color)) drop-shadow(-1px 1px 0 var(--tw-shadow-color)) drop-shadow(1px -1px 0 var(--tw-shadow-color)) drop-shadow(-1px -1px 0 var(--tw-shadow-color));
}
</style>