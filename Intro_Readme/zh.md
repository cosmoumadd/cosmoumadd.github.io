## Cosmo 的個人網站

這個 repository 是我的個人網站原始碼，部署在 GitHub Pages 上，網址為：

- **GitHub Pages**：`https://cosmoumadd.github.io/`

網站目前還在建置中，會陸續加入更多內容與版面設計。

---

## 技術棧

- **React 19**（函式型元件）
- **TypeScript**
- **Vite**（開發與打包工具）
- **Tailwind CSS v4**（透過 `@tailwindcss/vite` 與 `@tailwindcss/postcss`）
- **GitHub Actions + GitHub Pages**（自動部署）

---

## 開發與指令

在專案根目錄執行：

- **安裝依賴**

```bash
npm install
```

- **啟動開發伺服器**

```bash
npm run dev
```

預設會在 `http://localhost:5173` 開啟（網址以終端顯示為準）。

- **建置正式版**

```bash
npm run build
```

打包結果會輸出到 `dist` 資料夾。

---

## 專案結構簡介

- `src/App.tsx`：主畫面元件，目前顯示網站尚在建置中的訊息。
- `src/main.tsx`：React 進入點，負責把 `App` 掛載到 DOM。
- `src/index.css` / `src/App.css`：使用 `@import "tailwindcss";` 的樣式入口。
- `vite.config.ts`：Vite 設定（包含 React 與 Tailwind 外掛）。
- `tailwind.config.js` / `postcss.config.js`：Tailwind 與 PostCSS 設定。

---

## 部署方式（GitHub Pages）

本專案使用 **GitHub Actions** 自動部署到 GitHub Pages：

- 當 push 到 `main` 分支時，workflow 會：
  - 安裝依賴
  - 執行 `npm run build`
  - 將 `dist` 上傳並部署到 GitHub Pages

你可以在 GitHub repository 的 **Actions** 分頁查看每次部署狀態。

---

## 未來規劃

- 新增關於我（About）與作品集（Projects）頁面
- 加入深色 / 淺色主題切換
- 撰寫更多技術與學習筆記

歡迎之後再回來看看網站更新！  
