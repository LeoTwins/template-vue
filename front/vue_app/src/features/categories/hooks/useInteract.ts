import { paths } from "@/schema";
import { client } from "@/shared/api/client";
import { ApiResponse } from "@/shared/api/response";
import createClient from "openapi-fetch";
import { onMounted } from "vue";

export type Category = ApiResponse<"GetCategories">;

const convertData = (res: ApiResponse<"GetCategories">): Category => {
  return res.map(v => {
    id: v.id,
    name: v.name
  })
};

export const useInteract = () => {
  onMounted(async () => {
    const { data, error } = await client.GET("/categories");
    if (error) {
      console.debug(error);
    }
  });
  return {};
};
