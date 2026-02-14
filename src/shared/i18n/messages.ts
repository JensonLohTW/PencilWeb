import en from './locales/en.json'
import ja from './locales/ja.json'
import zhTw from './locales/zh-TW.json'
import type { JsonObject, Language } from './types'

export const messages: Record<Language, JsonObject> = {
  'zh-TW': zhTw as JsonObject,
  en: en as JsonObject,
  ja: ja as JsonObject,
}
