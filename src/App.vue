<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <Select :items="people" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Select from './components/Select.vue';

console.log(import.meta.env.APP_COMPANY_ACCOUNT_ID)

const people = ref([
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
].map(({ name }) => ({ title: name, value: name })))
</script>