<template>
	<main class="pt-17 bg-gray-100 dark:bg-neutral-800">
        <div class="m-auto w-6xl">
            <section class="mt-10 mb-5">
                <h2 class="text-4xl">{{ workshop.title }}</h2>
            </section>
            <section class="flex flex-row">
                <div class="flex flex-col w-3/5 p-2">
                    <UCarousel
                        v-slot="{ item }"
                        fade
                        arrows
                        dots
                        :items="items"
                        class="w-full max-w-xl mx-auto">
                        <img :src="item" class="rounded-lg bg-cover bg-center bg-clip-border" />
                    </UCarousel>
                    <UCard class="mt-15 mb-5">
                        <p>{{ workshop.description }}</p>
                        <div class="border-t-1 border-gray-300 mt-3 mb-3 h-0"></div>
                        <h4 class="text-lg">Usługi:</h4>
                        <ul class="mt-2 mb-2">
                            <li v-for="item in workshop.list" :key="item.id" class="mb-1">
                                {{ item.name }}
                            </li>
                        </ul>
                    </UCard>
                </div>
                <div class="w-2/5 p-2">
                    <UCard class="mb-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40661.19903630729!2d16.663792298486307!3d50.43504789773782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1744739421364!5m2!1spl!2spl"
                            width="400"
                            height="300"
                            style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </UCard>
                    <UCard>
                        <UButton class="w-full p-3 flex justify-center">Umów wizytę</UButton>
                        <div class="mt-5 border-1 rounded-md border-gray-300 p-2">
                            <p class="text-center">123 123 123</p>
                        </div>
                        <div class="mt-5 border-1 rounded-md border-gray-300 p-2">
                            <p class="text-center">Godziny otwarcia: {{ workshop.time }}</p>
                        </div>
                    </UCard>
                </div>
            </section>
        </div>
	</main>
</template>

<script setup>
import { description } from "valibot";

const workshop = {
	title: "Naprawa samochodów",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, culpa, necessitatibus dolore repellendus quam delectus debitis et libero excepturi sunt eveniet fugiat! Corrupti necessitatibus esse porro veniam eius expedita! Ea!Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, culpa, necessitatibus dolore repellendus quam delectus debitis et libero excepturi sunt eveniet fugiat! Corrupti necessitatibus esse porro veniam eius expedita! Ea!Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, culpa, necessitatibus dolore repellendus quam delectus debitis et libero excepturi sunt eveniet fugiat! Corrupti necessitatibus esse porro veniam eius expedita! Ea!",
	list: [
		{ id: 1, name: "Wymiana oleju" },
		{ id: 2, name: "Wymiana klocków hamulcowych" },
		{ id: 3, name: "Wymiana opon" },
		{ id: 4, name: "Wymiana akumulatora" },
		{ id: 5, name: "Wymiana rozrządu" },
	],
    time: '08:00 - 16:00',
};

const items = [
	"../img/motor-2595269_1280.jpg",
	"../img/vw-4891950_1920.jpg",
	"../img/motor-2595269_1280.jpg",
	"../img/vw-4891950_1920.jpg",
	"../img/motor-2595269_1280.jpg",
];
</script>
