import { client } from "@/shared/api/client";
import { ApiResponse } from "@/shared/api/response";
import createClient from "openapi-fetch";
import { onMounted, ref } from "vue";

// TODO : type.tsに移設
export type Category = ApiResponse<"GetCategories">[number];

// TODO : function.tsに移設
const convertData = (res: ApiResponse<"GetCategories">[number]): Category => {
  return {
    id: res.id,
    name: res.name
  };
};

export const useInteract = () => {
  const categories = ref<Category[]>();

  onMounted(async () => {
    const { data, error } = await client.GET("/categories");
    if (error) {
      console.debug(error);
    } else {
      categories.value = data.map(convertData);
    }
  });
  return {
    categories
  };
};
