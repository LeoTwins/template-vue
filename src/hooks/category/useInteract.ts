import { client } from "@/shared/api/client";
import * as response from "@/shared/api/response";
import * as category from "@/types/category";
import createClient from "openapi-fetch";
import { onMounted, ref } from "vue";

// TODO : function.tsに移設
const convertData = (res: response.ApiResponse<"GetCategories">[number]): category.Category => {
  return {
    id: res.id,
    name: res.name
  };
};

export const useCategoryInteract = () => {
  const categories = ref<category.Category[]>();

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
