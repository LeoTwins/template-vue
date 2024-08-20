<script lang="ts" setup>
import { TodoPresenter } from "../types"
import TodoListItem from "./TodoListItem.vue";

defineProps<{
  items : TodoPresenter[] | undefined
}>()
</script>
<template>
  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
    <template v-for="item in items" :key="item.id">
      <TodoListItem :item="item" />
    </template>
  </ul>
</template>