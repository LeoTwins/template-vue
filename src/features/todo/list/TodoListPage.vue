<script lang="ts" setup>
import { useInteract } from "./hooks/useInteract";
import { useCategoryInteract} from "@/hooks/category/useInteract"
import TodoList from "./components/TodoList.vue"

const { todos } = useInteract()
const { categories } = useCategoryInteract()

</script>
<template>
  <h2 class="mb-2 text-3xl font-semibold text-gray-900 dark:text-white">Todo</h2>
  <div class="grid grid-cols-4">
    <div class="p-2.5">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">カテゴリ</label>
      <select id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
        <option v-for="item in categories" :value="item.id">{{item.name}}</option>
      </select>
    </div>
    <div class="p-2.5">
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">タスク</label>
      <input type="text" id="last_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Doe" required />
    </div>
    <div class="p-2.5">
      <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">期限</label>
      <input type="date" id="company"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required />
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>
  <div class="my-6">
    <hr />
  </div>

  <TodoList :items="todos" />
</template>
@/hooks/category/useInteract