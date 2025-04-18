<template>
    <main class="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
        <UCard class="w-4/5 sm:w-md">
            <div class="mb-4">
                <h2 class="text-4xl">Zaloguj się</h2>
            </div>
            <div>
                <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
                    <UFormField label="Email" name="email">
                        <UInput v-model="state.email" class="w-full" />
                    </UFormField>
                
                    <UFormField label="Hasło" name="password">
                        <UInput v-model="state.password" type="password" class="w-full" />
                    </UFormField>

                    <UButton type="submit">Zaloguj</UButton>
                </UForm>
            </div>
        </UCard>
    </main>
</template>

<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
const { $supabase } = useNuxtApp()

const schema = v.object({
  email: v.pipe(v.string(), v.email('Niepoprawny email')),
  password: v.pipe(v.string(), v.minLength(8, 'Hasło musi mieć przynajmniej 8 znaków'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    let { data, error } = await $supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password
    })
    if(error) {
        toast.add({title: 'Błąd', description: `Błędne dane, popraw albo zobacz czy potwierdziłeś maila ( ${error.message} )`, color: 'error', duration: 7000})
    } else {
        toast.add({title: 'Zalogowany', description: `Zalogowałeś się jako ${state.email}`, color: 'success'})
        navigateTo('/panel')
    }
}

</script>
