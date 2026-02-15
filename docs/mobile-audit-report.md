# 行動版響應式設計稽核報告

**日期：** 2026-02-15
**範圍：** `src/components`（特別針對 `src/features/marketing/sections/swiss` 與 `src/shared/ui`）

## 1. 執行摘要（Executive Summary）

針對 React 元件進行了全面的行動版響應式設計稽核。目前的程式碼展現了高標準的響應式設計，有效運用 Tailwind CSS 斷點（`sm:`、`md:`、`lg:`）適配不同裝置尺寸。

**主要優點：**
*   **流動式排版（Fluid Typography）：** 一致使用響應式文字大小（如 `text-lg lg:text-xl`）與 `clamp()` 函數，確保跨裝置的可讀性。
*   **自適應佈局（Adaptive Layouts）：** Grid 與 Flexbox 佈局在小螢幕上皆能正確切換為垂直堆疊（`flex-col`、`grid-cols-1`）。
*   **觸控目標（Touch Targets）：** 互動元素普遍符合各平台觸控目標尺寸標準。

**改進建議：**
主要的觀察點在於**互動設計**（觸控裝置上的懸停狀態），而非版面破裂問題。部分複雜視覺效果依賴滑鼠移動，雖在行動裝置上能優雅降級，但互動體驗較為平淡。

## 2. 詳細發現（Detailed Findings）

| 元件 / 路徑 | 影響程度 | 描述 | 建議修正 |
| :--- | :--- | :--- | :--- |
| **SwissProjectList**<br>`src/features/marketing/sections/swiss/swiss-project-list.tsx` | 中 | **僅限滑鼠懸停 UI：** 專案預覽圖片依賴滑鼠座標顯示。在行動裝置上此互動無法使用，導致用戶錯失視覺情境。 | **優化建議：** 針對觸控裝置，考慮將預覽圖片直接嵌入展開的內容中，或在首次點擊時觸發預覽（iOS 標準行為）。 |
| **SwissSolutionList**<br>`src/features/marketing/sections/swiss/swiss-solution-list.tsx` | 中 | **僅限滑鼠懸停 UI：** 類似專案列表，「聚光燈（Spotlight）」徑向漸層及其他懸停效果依賴滑鼠。 | **優化建議：** 確保啟用狀態可透過點擊觸發，或針對觸控簡化效果。 |
| **TrailGrid**<br>`src/shared/ui/primitives/trail-grid.tsx` | 低 | **固定單元格密度：** 網格使用固定的 `CELL_SIZE = 42`。在極窄螢幕（如 iPhone SE 320px）上，這導致每行僅約 7 個單元格，可能限制拖尾效果的解析度。 | **優化建議：** 考慮針對小於 `sm` 斷點的螢幕，使用較小的 `CELL_SIZE`（如 32px）或動態計算尺寸。 |
| **SwissStatsGrid**<br>`src/features/marketing/sections/swiss/swiss-stats-grid.tsx` | 低 | **文字換行風險：** 長標籤或大數字（使用 `text-4xl`）在窄視口（320px-375px）可能發生尷尬換行。 | **防護措施：** 增加 `break-words`，或微調最小斷點的字體大小（`< 375px` 時使用 `text-3xl`）。 |
| **ThemeToggle**<br>`src/shared/ui/elements/theme-toggle.tsx` | 低 | **下拉選單定位：** 絕對定位 `right-0` 通常安全，但需確保若切換開關置於 `overflow-hidden` 容器邊緣時不被裁切。 | **驗證：** 特別驗證其在行動選單容器內的 z-index 層級。 |

## 3. 一般性建議（General Recommendations）

1.  **觸控互動標準：**
    *   全面稽核 `hover:` 狀態。確保懸停揭露的關鍵資訊在行動裝置上可透過點擊存取或預設可見。
    *   確認觸控互動移除不必要的 `cursor-pointer`，避免用戶混淆。

2.  **小視口測試：**
    *   多數測試集中於標準行動寬度（375px/390px），建議確保關鍵流程（CTA 按鈕、導航）在 **320px** 寬度裝置（如舊款 iPhone SE、Galaxy Fold 外螢幕）上亦可用。

3.  **效能考量：**
    *   專案大量使用重量級動畫函式庫（`framer-motion`）。建議在中階行動裝置上驗證捲動效能，因複雜的視差效果（`useScroll`、`useTransform`）可能導致掉幀。若效能顯著下降，考慮在行動裝置上禁用複雜視差。

---
**狀態：** ✅ **通過**（附帶優化建議）
