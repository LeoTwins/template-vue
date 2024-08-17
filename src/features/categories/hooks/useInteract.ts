import { client } from "@/shared/api/client";
import * as response from "@/shared/api/response";
import createClient from "openapi-fetch";
import { onMounted, ref } from "vue";

// TODO : type.tsに移設
export type Category = response.ApiResponse<"GetCategories">[number];

// TODO : function.tsに移設
const convertData = (res: response.ApiResponse<"GetCategories">[number]): Category => {
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
      console.log(data)
      categories.value = data.map(convertData);
    }
  });
  return {
    categories
  };
};
