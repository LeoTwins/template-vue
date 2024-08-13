<script lang="ts" setup>
import CategoryItem from "../components/CategoryItem.vue";
</script>
<template>
  <h2 class="mb-2 text-3xl font-semibold text-gray-900 dark:text-white">カテゴリ</h2>
  <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <CategoryItem label="xxx" />
    <CategoryItem label="yyy" />
    <CategoryItem label="zzz" />
  </ul>
</template>
