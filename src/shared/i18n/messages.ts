import en from './locales/en.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import th from './locales/th.json'
import zhCn from './locales/zh-CN.json'
import zhTw from './locales/zh-TW.json'
import type { JsonObject, Language } from './types'

export const messages: Record<Language, JsonObject> = {
  'zh-TW': zhTw as JsonObject,
  en: en as JsonObject,
  'zh-CN': zhCn as JsonObject,
  ja: ja as JsonObject,
  ko: ko as JsonObject,
  fr: fr as JsonObject,
  th: th as JsonObject,
}
