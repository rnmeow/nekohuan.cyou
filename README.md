# kuohuanhuan / nekohuan.cyou @ GitHub

[![GitHub stars](https://img.shields.io/github/stars/kuohuanhuan/nekohuan.cyou?style=for-the-badge)](https://github.com/kuohuanhuan/nekohuan.cyou/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/kuohuanhuan/nekohuan.cyou?style=for-the-badge)](https://github.com/kuohuanhuan/nekohuan.cyou/fork)
[![GitHub build](https://img.shields.io/github/actions/workflow/status/kuohuanhuan/nekohuan.cyou/build-test.yml?style=for-the-badge)](https://github.com/kuohuanhuan/nekohuan.cyou/actions)

這是 `@kuohuanhuan` [網站](https://nekohuan.cyou) 本體的 GitHub 儲存庫。

其它儲存庫：

- khh.log 網誌（_**若要添加友情連結，請前往這裡**_）：https://github.com/kuohuanhuan/blog
- RSS Feed 伺服器：https://github.com/kuohuanhuan/blog-rss

## 技術堆疊

本專案使用以下 Modern Web 技術搭建：

- [Vue.js 3](https://v3.vuejs.org)（JS 框架）
- [Nuxt 3](https://nuxt.com)（SSR 框架）
- [Tailwind CSS](https://tailwindcss.com)（Utility-First CSS 框架）
- [TypeScript](https://www.typescriptlang.org)（JavaScript 的超集合程式語言）
- [Node.js](https://nodejs.org/en)（JavaScript Runtime & 伺服器端）
- [Font Awesome](https://fontawesome.com)（圖示套件 & 函式庫）
- [giscus](https://giscus.app)（基於 GitHub Discussion 的靜態留言系統）

……還有更多——檢視 [`package.json`](https://github.com/kuohuanhuan/nekohuan.cyou/blob/master/package.json) 以取得完整列表。

## 開發工具

本專案使用以下軟體開發：

- [VS Code](https://code.visualstudio.com)
- [Notepad++](https://notepad-plus-plus.org)
- [PNPM](https://pnpm.io)
- [Git](https://git-scm.com)
- [Commitizen](https://commitizen.github.io/cz-cli)

……還有更多。

## 銘謝

- [GitHub](https://github.com) 提供 Git 儲存庫和 GitHub Actions CI 服務。
- [Railway](https://railway.app) 提供 Web Service 託管服務。

## 開發

本專案使用 [PNPM](https://pnpm.io) 進行套件管理。

### 環境要求

- [Node.js](https://nodejs.org/en) v16 LTS 以上（v18 以上為佳）。
- [PNPM](https://pnpm.io) v7 以上（使用 `npm i pnpm@>=7 -g` 安裝）。

### 安裝依賴

執行以下指令：

```bash
pnpm i
```

### 啟動開發伺服器

執行以下指令：

```bash
pnpm run dev
```

### 構建

執行以下指令進行構建：

```bash
pnpm run build
```

_**（注意：請先設定一個名為 `GH_PAT` 的環境變數，內容是一個 GitHub Personal Access Token。如果沒有，[請到此處產生](https://github.com/settings/tokens)。）**_

### 用於生產環境佈署

執行以下指令啟動伺服器（需要 Node.js）：

```bash
pnpm run server
```

或直接使用 `node` 指令啟動：

```bash
node .output/server/index.mjs
```

## 預覽（生產環境）

<https://nekohuan.cyou>

### 更多

請瀏覽 [Nuxt 3 開發文件](https://nuxt.com/docs) 以獲得更多說明。

## 授權條款 / License

[MIT License](https://github.com/kuohuanhuan/nekohuan.cyou/blob/master/LICENSE).
