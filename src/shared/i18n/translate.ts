import { messages } from './messages'
import type { JsonObject, JsonValue, Language } from './types'

function isJsonObject(value: JsonValue | undefined): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function resolveMessage(language: Language, key: string): JsonValue | undefined {
  const segments = key.split('.').filter(Boolean)
  let current: JsonValue | undefined = messages[language]

  for (const segment of segments) {
    if (!isJsonObject(current)) {
      return undefined
    }
    current = current[segment]
  }

  return current
}

export function translate(language: Language, key: string): JsonValue | string {
  return resolveMessage(language, key) ?? key
}
