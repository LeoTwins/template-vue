<script lang="ts" setup>
import CategoryItem from "../components/CategoryItem.vue";
import { useCategoryInteract } from "@/hooks/category/useInteract";

const { categories } = useCategoryInteract()
</script>
<template>
  <h2 class="mb-2 text-3xl font-semibold text-gray-900 dark:text-white">カテゴリ</h2>
  <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <template v-for="item in categories" :key="item.id">
      <CategoryItem :label="item.name" />
    </template>
  </ul>
</template>
