<template>
    <main>
        <section class="relative h-screen">
            <div>
                <NuxtImg src="/img/vw-4891950_1920.jpg" class="absolute w-full h-full object-cover bg-center bg-cover -z-11 bg-clip-content"></NuxtImg>
                <div class=" absolute w-full h-full bg-black/70 -z-10"></div>
                <div class="absolute w-full h-full p-3 flex flex-col justify-center items-center text-white">
                        <h1 class="text-5xl mb-5">Znajdź swój warsztat od zaraz!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a iusto nemo recusandae impedit similique aliquam atque tenetur repudiandae suscipit.</p>
                        <UButton to="/warsztaty" class="mt-4 pt-2 pb-2 pl-4 pr-4">Zobacz więcej!</UButton>
                </div>
            </div>
        </section>
        <section>
            <div class="p-5">
                <h3>Jak to działa?</h3>
            </div>
        </section>
    </main>
</template>