<template>
    <div class="pb-1 border-b-gray-400 dark:border-b-slate-500 border-b-1 fixed w-full bg-white dark:bg-neutral-900 z-50">
        <div class="flex justify-around items-center p-1 h-16" >
            <div>
                <NuxtLink to="/" class=" text-2xl">Logo</NuxtLink>
                <UTooltip text="Strona jest w fazie rozwoju, niektóre funkcje mogą być niedostępne lub działać niepoprawnie." :content="{align: 'center', side: 'bottom', sideOffset: 10}"  class="ml-2" :delay-duration="0">
                    <UBadge label="Wczesny dostęp" />
                </UTooltip>
            </div>
            <div class="md:flex md:gap-4 md:items-center hidden">
                <UNavigationMenu :items="items" color="primary" content-orientation="vertical" class="pl-17 " />
                <ColorModeButton />
                <UButton @click="login">Zaloguj</UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const isLoggedIn = ref(false)
const login = () => { isLoggedIn.value = !isLoggedIn.value }

const items = computed<NavigationMenuItem[]>(() => {
    const commonItems: NavigationMenuItem[] = [
        {
            label: 'Warsztaty',
            icon: '',
            to: '/warsztaty'
        }]
    const loginItems: NavigationMenuItem[] = [   
        {
            label: 'Zaloguj się',
            icon: '',
            to: '/zaloguj',
            children: [
                {
                    label: 'Nie masz konta? Zarejestruj się!',
                    to: '/rejestracja'
                }
            ]
        }]
    const userItems: NavigationMenuItem[] = [
        {
            label: 'Użytkownik',
            icon: 'UserIcon',
            to: '/panel'
        }
    ]

    return isLoggedIn.value ? [...commonItems, ...userItems] : [...commonItems, ...loginItems]
})
</script>
