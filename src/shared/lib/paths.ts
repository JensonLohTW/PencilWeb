/**
 * 根據環境自動處理靜態資源路徑
 * 在生產環境 (GitHub Pages) 下會附加 /PencilWeb 前綴
 */
export function getPath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/PencilWeb' : ''

    // 確保路徑以 / 開頭，且不會重複 basePath
    const normalizedPath = path.startsWith('/') ? path : `/${path}`

    if (normalizedPath.startsWith(basePath) && basePath !== '') {
        return normalizedPath
    }

    return `${basePath}${normalizedPath}`
}
