import { client } from "@/shared/api/client"
import * as response from "@/shared/api/response"
import { onMounted, ref } from "vue"

export type TodoPresenter = response.ApiResponse<"GetTodo"> & {
  categoryLabel: string | undefined
  expiredDucDateClassName: string | undefined
  doneClassName: string | undefined
  doneCheckClassName: string | undefined
};

const convertPresenter = (res: response.ApiResponse<"GetTodo">): TodoPresenter => {
  return {
    id: res.id,
    name: res.name,
    category: res.category,
    dueDate: res.dueDate,
    done: res.done,
    doneClassName: res.done ? "line-through decoration-gray-500" : "",
    doneCheckClassName : res.done ? "text-gray-400 dark:text-gray-500" : "text-blue-700 dark:text-blue-500",
    categoryLabel: res.category?.name,
    expiredDucDateClassName:  Date.now() > new Date(res.dueDate!).getTime() ?  "text-red-500": "",
  }
}
export const useInteract = () => {
  const todos = ref<TodoPresenter[]>()
  onMounted(async () => {
    const { data, error } = await client.GET("/todo")
    if (error) {
      console.debug(error)
    } else {
      console.log(data)
      todos.value = data.map(convertPresenter)
    }
  })
  return {todos}
}