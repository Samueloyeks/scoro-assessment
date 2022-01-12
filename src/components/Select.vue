<template>
  <div class="w-72">
    <Listbox v-model="selectedItem">
      <div class="relative mt-1">
        <ListboxButton
          class="color-relative py-2 pl-3 pr-3 text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
          :style="{ 'background-color': selectedItem.color }"
        >
          <span class="block truncate text-white" ref="listBoxButtonRef">{{
            selectedItem.status_name
          }}</span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute w-half py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="item in items"
              :key="item.status_id"
              :value="item"
              as="template"
            >
              <li
                :class="[
                  active ? 'text-amber-900 bg-[#F7F9FD]' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                  selected ? 'bg-[#EBF5FA] border-l border-[#0085E0]' : '',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ item.status_name }}</span
                >
                <span
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <div class="w-3 h-3 rounded-full" :style="{ 'background-color': item.color }" aria-hidden="true" ></div>
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon} from "@heroicons/vue/solid";
import { Status } from "../interfaces/Status";

const props = defineProps<{ items: Status[] }>();
const selectedItem = ref(props.items[0]);
console.log(JSON.parse(JSON.stringify(props.items)));
const listBoxButtonRef = ref<HTMLButtonElement | null>(null);

onMounted(() => {
  listBoxButtonRef.value?.click();
});
</script>
