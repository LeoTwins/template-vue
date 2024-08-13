import { components } from "@/schema";
/**
 * openapiから定義されているpath, responseなどの型を抽出する仕掛け
 * v1.schemaはpnpm gen:schemaで生成する
 * @see {@link https://openapi-ts.pages.dev/introduction}
 */
export type ApiSchema<T extends keyof components["schemas"]> = components["schemas"][T];

type KeyofResponses = Exclude<keyof components["responses"], "BadRequest">;

export type ApiResponse<T extends KeyofResponses> = components["responses"][T] extends {
  content: { "application/json": unknown };
}
  ? components["responses"][T]["content"]["application/json"]
  : never;

export type ApiQuery<T extends keyof components["parameters"]> =
  components["parameters"][T] extends {
    content: { "application/json": unknown };
  }
    ? components["parameters"][T]
    : never;
