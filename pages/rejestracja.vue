<template>
	<main
		class="h-screen w-full flex justify-center items-center flex-col bg-gray-100 dark:bg-neutral-800">
		<UCard class="w-4/5 sm:w-md">
			<div class="mb-4">
				<h2 class="text-4xl">Zarejestruj się!</h2>
			</div>
			<div>
				<UForm
					:schema="schema"
					:state="state"
					class="space-y-4"
					@submit.prevent="onSubmit">
					<UFormField label="Email" name="email">
						<UInput v-model="state.email" class="w-full" />
					</UFormField>

					<UFormField label="Hasło" name="password">
						<UInput v-model="state.password" type="password" class="w-full" />
					</UFormField>

					<UFormField label="Nazwa użytkownika" name="user">
						<UInput v-model="state.user" class="w-full" />
					</UFormField>

					<UButton type="submit">Zarejestruj</UButton>
				</UForm>
			</div>
		</UCard>
	</main>
</template>

<script setup lang="ts">
import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";
const { $supabase } = useNuxtApp();

const schema = v.object({
	email: v.pipe(v.string(), v.email("Niepoprawny email")),
	password: v.pipe(
		v.string(),
		v.minLength(8, "Hasło musi mieć przynajmniej 8 znaków")
	),
	user: v.pipe(
		v.string(),
		v.minLength(3, "Nazwa użytkownika musi mieć przynajmniej 3 znaki"),
		v.maxLength(20, "Nazwa użytkownika może mieć maksymalnie 20 znaków")
	),
});

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
	email: "",
	password: "",
	user: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
	let { data, error } = await $supabase.auth.signUp({
		email: state.email,
		password: state.password,
		options: {
			data: {
				username: state.user,
			},
		},
	});
	if (error) {
		toast.add({ title: "Error", description: error.message, color: "error" });
	} else {
		toast.add({
			title: "Stworzyłeś konto!",
			description:
				"Teraz zobacz na maila i potwierdz swoje konto, aby móc korzystać.",
			color: "success",
			duration: 20000,
		});
		navigateTo("/zaloguj");
	}
	console.log(event.data);
}
</script>
