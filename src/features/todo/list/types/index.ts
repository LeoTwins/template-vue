import * as response from "@/shared/api/response"

export type TodoPresenter = response.ApiResponse<"GetTodo"> & {
  categoryLabel: string | undefined
  expiredDucDateClassName: string | undefined
  doneClassName: string | undefined
  doneCheckClassName: string | undefined
};