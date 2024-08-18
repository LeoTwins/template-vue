<script lang="ts" setup>
import { TodoPresenter } from "../types"

defineProps<{
  item: TodoPresenter
}>()
</script>
<template>
  <li class="py-3 sm:py-4" :class="item.doneClassName">
    <div class="flex items-center">
      <svg class="flex-shrink-0 w-4 h-4" :class="item.doneCheckClassName" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      <div class="mx-2" />
      <div class="flex-1 min-w-0 ms-4">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {{ item.name }}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          {{ item.categoryLabel }}
        </p>
      </div>
      <div class="flex items-center text-base font-semibold text-gray-900 dark:text-white"
        :class="item.expiredDucDateClassName">
        {{ item.dueDate }}
      </div>
    </div>
  </li>
</template>