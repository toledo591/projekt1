<template>
    <div class="flex justify-center items-center h-16 border-t-gray-400 dark:border-t-slate-500 border-t-1">
        <p>Logo <span>{{ year }}</span></p>
    </div>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
