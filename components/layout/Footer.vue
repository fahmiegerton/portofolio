<template>
	<div class="pb-20 mt-6">
		<Divider />
		<footer class="flex flex-col items-center gap-4 px-4 py-6 mx-auto max-w-7xl">
			<Logo :size="8" />
			<span class="text-sm text-center text-muted">
				&copy; {{ new Date().getFullYear() }}, {{ useAppConfig().footerName }} - {{ $t("seo.all_rights_reserved") }}
			</span>
		</footer>
	</div>
</template>