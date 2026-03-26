import { routing } from '@/i18n/routing'
import { redirect } from 'next/navigation'

/**
 * 根路徑重定向至預設語系，使用伺服器端 redirect
 * 以避免 output: export + client useRouter 的靜態導出不相容問題
 */
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`)
}
