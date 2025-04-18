<template>
	<main class="pt-17 bg-gray-100 dark:bg-neutral-800">
		<section class="m-auto w-xs mt-5 ">
			<UCard>
				<h2>Filtrowanie</h2>
				<NuxtLink to="/">Cofnij się</NuxtLink>
			</UCard>
		</section>
		<section class="flex flex-col lg:flex-row w-full">
			<!-- <aside>
				<div
					class="lg:mt-20 h-25 lg:w-50 lg:h-100  2xl:w-100 outline-2 flex justify-center items-center">
					<NuxtLink to="/">Tutaj może być twoja reklama!</NuxtLink>
				</div>
			</aside> -->
			<section class="m-auto w-xs sm:w-md md:w-3xl lg:w-5xl">
				<div>
					<BaseCard
						v-for="oferta in oferty"
						:key="oferta.id"
						:id="oferta.id"
						:title="oferta.title"
						:description="oferta.description" />
				</div>
			</section>
			<!-- <aside>
				<div
					class="lg:mt-20 h-25 lg:w-50 lg:h-100  2xl:w-100 outline-2 mb-5 lg:mb-0  flex justify-center items-center">
					<NuxtLink to="/">Tutaj może być twoja reklama!</NuxtLink>
				</div>
			</aside> -->
		</section>
	</main>
</template>

<script setup>
const oferty = [
	{ id: "1", title: "oferta nr 1", description: "tutaj jest opis nr 1" },
	{ id: "2", title: "oferta nr 2", description: "tutaj jest opis nr 2" },
];
</script>
