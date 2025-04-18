<template>
	<UCard variant="outline" class="m-5">
		<div class="flex flex-col md:flex-row">
			<div>
				<NuxtImg
					src="/img/motor-2595269_1280.jpg"
					alt="zdjęcie ogłoszenia"
                    width="240"
                    height="180"
					class="bg-center bg-cover w-full" />
			</div>
			<div class="flex flex-col grow md:ml-5 w-full md:w-50">
				<div>
					<h3 class="mt-2 md:mt-0 text-2xl">{{ props.title }}</h3>
				</div>
				<div
					class="flex justify-start mt-1 sm:h-10 md:justify-between flex-wrap">
					<UBadge class="h-7 sm:mr-3">Specjalizacja</UBadge>
				</div>
				<div>
					<p>{{ props.description }}</p>
				</div>
				<div class="mt-2 md:mt-3">
					<h5>Lokalizacja</h5>
				</div>
				<div class="flex mt-3 items-center justify-end">
					<UButton color="primary" :to="`/warsztaty/${props.id}`"
						>Informacje</UButton
					>
					<UButton color="secondary" class="ml-2">Zarezerwuj!</UButton>
				</div>
			</div>
		</div>
	</UCard>
</template>

<script setup>
const props = defineProps({
	id: String,
	title: String,
	description: String,
});
</script>
