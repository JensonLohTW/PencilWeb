# Pencil Web 技術棧評估與升級規劃

## 1. 技術棧建議摘要

針對 Pencil Web (Next.js 16 + React 19 + TypeScript) 的企業官網特性（XR/AI 展示、多語系、高效能需求），我們建議引入以下現代化技術棧：

| 領域 | 建議技術 | 說明 |
| :--- | :--- | :--- |
| **國際化 (i18n)** | **next-intl** | 完整支援 App Router 的標準化 i18n 解決方案 |
| **表單處理** | **React Hook Form + Zod** | 高效能表單管理與強型別驗證 schema |
| **SEO & 分析** | **next-sitemap** + **@next/third-parties** | 自動化 Sitemap 與效能優化的 Google Analytics 整合 |
| **測試框架** | **Vitest** + **Playwright** | 快速單元測試與可靠的 E2E 瀏覽器測試 |
| **錯誤監控** | **Sentry** | 即時全端錯誤追蹤與效能監控 |
| **內容管理 (CMS)** | **Sanity** (建議) 或 **Keystatic** | 結構化內容管理，分離程式碼與行銷內容 |
| **安全性** | **Arcjet** | 應用程式層級的安全防護 (Rate limiting, Bot protection) |
| **代碼品質** | **Husky** + **lint-staged** | Git Hooks 自動化檢查，確保代碼品質 |

---

## 2. 技術詳細說明

### 2.1 國際化：next-intl
*   **版本**：v3.x (支援 Next.js 16/App Router)
*   **主要功能**：
    *   完整支援 Next.js App Router (Server Components & Client Components)。
    *   路由中間件 (Middleware) 自動處理語言前綴 (`/en`, `/zh-TW`)。
    *   型別安全的翻譯鍵值 (Type-safe keys)。
*   **為什麼適合**：
    *   目前的自製 i18n 方案 (`resolveMessage`) 功能較基礎，缺乏路由處理和標準化的 Server Component 支援。
    *   Pencil Web 作為跨國業務官網，需要強大的路由與 SEO 友好的語言切換機制。
*   **預期改進**：
    *   **SEO 提升**：自動生成正確的 `hreflang` 標籤與語言專屬 URL。
    *   **DX 提升**：開發體驗更好，避免手動處理 Context 傳遞。

### 2.2 表單處理：React Hook Form + Zod
*   **版本**：react-hook-form v7, zod v3
*   **主要功能**：
    *   **React Hook Form**：基於 Uncontrolled Components，減少渲染次數，效能極佳。
    *   **Zod**：TypeScript 優先的 Schema 宣告與驗證庫。
*   **為什麼適合**：
    *   現有 `ContactForm` 使用 `useState` 手動管理，擴充性與驗證邏輯維護困難。
    *   企業官網的表單（如業務諮詢）往往涉及多步驟或複雜欄位，需要可靠驗證。
*   **預期改進**：
    *   **使用者體驗**：即時驗證反饋，減少提交失敗率。
    *   **代碼簡化**：移除大量 `useState` 與手動 `FormData` 解析邏輯。

### 2.3 SEO 與分析：next-sitemap & @next/third-parties
*   **主要功能**：
    *   **next-sitemap**：建置時自動爬取路由生成 `sitemap.xml` 和 `robots.txt`。
    *   **@next/third-parties**：Next.js 官方優化過的第三方腳本載入（Google Analytics/GTM）。
*   **為什麼適合**：
    *   XR/AI 解決方案需要高搜尋能見度。目前缺乏自動 Sitemap 機制。
    *   避免 GA 腳本阻塞主執行緒 (Main Thread)，提升 Core Web Vitals。
*   **預期改進**：
    *   **索引效率**：確保搜尋引擎即時索引新頁面。
    *   **效能分數**：減少 FCP (First Contentful Paint) 時間。

### 2.4 測試框架：Vitest + Playwright
*   **主要功能**：
    *   **Vitest**：基於 Vite 的單元測試，速度極快，API 相容 Jest。
    *   **Playwright**：現代化 E2E 測試，支援跨瀏覽器、錄製重現。
*   **為什麼適合**：
    *   目前專案無測試代碼。官網改版頻繁，需要自動化測試保障「關鍵路徑」（如聯絡表單、首頁渲染）不壞。
*   **預期改進**：
    *   **穩定性**：部署前自動攔截錯誤。
    *   **重構信心**：升級套件或重構 UI 時有測試保護。

### 2.5 內容管理 (CMS)：Sanity
*   **版本**：Sanity Studio v3
*   **主要功能**：
    *   Headless CMS，提供即時預覽 (Live Preview)。
    *   完全客製化的內容結構 (Schema)。
    *   強大的圖片處理管道 (Image Pipeline) 與 CDN。
*   **為什麼適合**：
    *   目前行銷內容（如 `MarketingFeatures`）多散落在程式碼中。
    *   賦能行銷團隊自行更新案例 (Case Studies) 或新聞，無需工程師介入發版。
*   **預期改進**：
    *   **營運效率**：內容更新頻率可大幅提升。
    *   **架構分離**：程式碼庫專注於 UI 邏輯，內容數據分離。

### 2.6 錯誤監控：Sentry
*   **版本**：@sentry/nextjs v8
*   **主要功能**：
    *   全端錯誤捕捉 (Client + Server + Edge)。
    *   Session Replay (重現使用者發生錯誤時的操作)。
*   **為什麼適合**：
    *   目前依賴使用者回報或 Server Log 被動發現問題。
    *   Next.js App Router 的 Server Error 往往難以在客端 debug。
*   **預期改進**：
    *   **MTTR (修復時間)**：主動發現報錯，快速定位根因。

---

## 3. 專案升級分階段計畫

### 第一階段：基礎建設與穩定性 (優先級：高，預估 2-3 週)
**目標**：確保網站穩定、可監控、且具備標準化開發流程。

1.  **代碼規範與 Git Hooks**
    *   安裝 `husky`, `lint-staged`。
    *   配置 Commit Lint 確保提交訊息規範。
2.  **引入測試框架**
    *   設置 Vitest 環境。
    *   為核心元件 (`Button`, `ContactForm`) 撰寫單元測試。
3.  **錯誤監控部署**
    *   接入 Sentry。
    *   配置 Source Maps 以利線上除錯。
4.  **SEO 自動化**
    *   配置 `next-sitemap`。
    *   使用 `@next/third-parties` 遷移 GA 腳本。

**潛在風險**：接入 Sentry 可能需調整環境變數與 CSP 設定。

### 第二階段：核心體驗與架構優化 (優先級：中，預估 3-4 週)
**目標**：提升使用者體驗、SEO 排名與國際化能力。

1.  **國際化重構 (i18n Migration)**
    *   安裝 `next-intl`。
    *   重構 `src/app/[locale]` 路由結構。
    *   遷移現有 `src/shared/i18n` 翻譯檔至 JSON 格式。
2.  **表單重構**
    *   引入 `React Hook Form` + `Zod`。
    *   重寫「聯絡我們」與「預約 Demo」表單。
    *   加入 Server-side Validation。
3.  **E2E 測試覆蓋**
    *   使用 Playwright 撰寫「填寫表單」與「切換語言」的自動化測試腳本。

**潛在風險**：i18n 路由結構變更可能暫時影響舊 URL 的 SEO，需配置好 301 Redirects。

### 第三階段：營運賦能與進階功能 (優先級：低，預估 4-6 週)
**目標**：降低維護成本，提升網站互動性。

1.  **CMS 集成 (Sanity)**
    *   設計 Content Schema (Solution, Case Study)。
    *   搭建 Sanity Studio。
    *   重構頁面改為 Dynamic Rendering 或 ISR (Incremental Static Regeneration)。
2.  **進階性能優化**
    *   引入 `bundle-analyzer` 分析包體積。
    *   優化 Three.js 模型載入策略 (Lazy Loading / Compressing)。
3.  **安全性增強**
    *   配置安全 Headers (CSP, HSTS)。
    *   (選用) 接入 Arcjet 進行流量防護。

**潛在風險**：CMS 引入會改變開發流程，需對非技術人員進行培訓。
