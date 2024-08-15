import * as v1Schema from "./v1.schema";

/**
 * openapiから定義されているpath, responseなどの型を抽出する仕掛け
 * v1.schemaはpnpm gen:schemaで生成する
 * @see {@link https://openapi-ts.pages.dev/introduction}
 */
export type ApiSchema<T extends keyof v1Schema.components["schemas"]> = v1Schema.components["schemas"][T];

type KeyofResponses = Exclude<keyof v1Schema.components["responses"], "BadRequest">;

export type ApiResponse<T extends KeyofResponses> = v1Schema.components["responses"][T] extends {
  content: { "application/json": unknown };
}
  ? v1Schema.components["responses"][T]["content"]["application/json"]
  : never;

export type ApiQuery<T extends keyof v1Schema.components["parameters"]> =
  v1Schema.components["parameters"][T] extends {
    content: { "application/json": unknown };
  }
    ? v1Schema.components["parameters"][T]
    : never;
