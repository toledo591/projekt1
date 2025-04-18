<template>
    <main class="pt-17">
        <section class="flex flex-row justify-between items-center w-sm sm:w-xl md:w-3xl lg:w-4xl xl:w-5xl m-auto mt-10 mb-10 pr-5 pl-5">
                <h1 v-if="user" class="text-xl sm:text-3xl">Witaj {{ username }}</h1>
                <h1 v-else class="text-xl sm:text-3xl">Witaj użytkowniku</h1>
                <UButton class="ml-5" label="Wyloguj się" color="primary" @click="logout" />
        </section>













        <teleport to="body">
            <UModal title="Wylogowany!" v-model:open="open" description="Zaraz zostaniesz przeniesiony na stronę główną" class="p-4">
                <template #content>
                    <h4 class="p-3 text-2xl">Zostałeś wylogowany!</h4>
                    <p class="p-3">Zaraz zostaniesz przeniesiony na stronę główną</p>
                </template>
            </UModal>
        </teleport>
    </main>
</template>

<script setup >
const { $supabase } = useNuxtApp()
const { data, error } = await $supabase.auth.getUser()
const user = data?.user
const username = user?.user_metadata?.username
if(!user) {
    navigateTo('/zaloguj')
    console.log(error);
}
// const toast = useToast()
const open = ref(false)

const logout = async () => {
    let { error } = await $supabase.auth.signOut()
    if(error) {
        console.error('error, uzytkowni nie moze sie wylogowac', error.message)
    } else {
        open.value = true
        setTimeout(() => {
            navigateTo('/')
        }, 5000)
    }
}
</script>