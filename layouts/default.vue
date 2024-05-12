<script setup></script>

<template>
	<div>
		<SettingsLanguageToggle class="fixed bottom-20 right-3 z-59 sm:bottom-4" />
		<nav>
			<div class="flex flex-wrap items-center justify-between max-w-screen-xl p-10 mx-auto"
				  style="--stagger: 1; --delay: 10ms"
				  data-animate>
				<NuxtLink to="/"
							 class="flex items-center space-x-3 rtl:space-x-reverse">
					<span class="self-center text-2xl font-extrabold whitespace-nowrap text-cyan-500">.arif fahmi</span>
				</NuxtLink>
				<span class="self-center text-2xl font-light whitespace-nowrap text-cyan-500">a computer geek guy</span>
			</div>
		</nav>
		<div class="sm:mt-[30px]">
			<slot />
		</div>
		<LayoutNavbar class="fixed bottom-0 z-50 flex" />
		<LayoutFooter />
	</div>
</template>