interface SeoJsonLdProps {
  id: string
  data: Record<string, unknown>
}

export function SeoJsonLd({ id, data }: SeoJsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}
