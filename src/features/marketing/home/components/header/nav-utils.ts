export function isPathActive(pathname: string, href?: string): boolean {
  if (!href) return false

  // Clean href to remove hash/search params if any exist
  const baseUrl = href.split('?')[0].split('#')[0]

  // Exact match
  if (pathname === baseUrl) return true

  // Subpath match (e.g., /solutions/subpage matches /solutions)
  // Ensure we don't match /about-us when href is /about
  if (baseUrl !== '/' && pathname.startsWith(`${baseUrl}/`)) return true

  return false
}
