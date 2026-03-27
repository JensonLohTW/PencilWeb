export type JsonPrimitive = string | number | boolean | null
export type JsonValue = JsonPrimitive | JsonObject | JsonArray
export type JsonArray = JsonValue[]

export interface JsonObject {
  [key: string]: JsonValue
}

export const supportedLanguages = ['zh-TW', 'en', 'zh-CN', 'ja', 'ko', 'fr', 'th'] as const
export type Language = (typeof supportedLanguages)[number]
