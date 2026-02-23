import { buildRootMetadata } from '@/shared/seo/metadata'

export const siteMetadata = buildRootMetadata()

export const siteTypography = {
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+TC:wght@400;500;600;700&display=swap',
} as const
