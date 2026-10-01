# 朋友挑战多语言（2026-09-29）

朋友挑战现已提供英文、简体中文、日文、韩文、德文和法文。

## 入口

| 语言 | 路由 |
| --- | --- |
| English | `/challenge` |
| 中文 | `/zh/challenge` |
| 日本語 | `/ja/challenge` |
| 한국어 | `/ko/challenge` |
| Deutsch | `/de/challenge` |
| Français | `/fr/challenge` |

每条路由都支持 `?mode=advanced` 和 `#c=<payload>`，合法 payload 优先决定玩法。旧英文邀请和回传链接继续可用。生成的新链接使用当前页面语言，切换语言时完整保留 query 与 fragment，不重新编码成绩、昵称、ID 或规则版本。

## 实现

- `lib/challenge/locales/{en,zh,ja,ko,de,fr}.ts`：完整文案，包括两种模式、信号、进度、比较原因、输入方式、异常、本地历史、分享和隐私说明。
- `lib/challenge/strings.ts`：统一字典入口，所有语言受相同 TypeScript 类型约束，不使用英文展开覆盖来隐藏漏译。
- `components/challenge/ChallengePageContent.tsx`：复用页面与本地化 metadata。
- `app/[lang]/challenge/page.tsx`：五种非英文语言的静态路由，英文保留原入口。
- `components/challenge/LanguageLink.tsx`：页头和页脚复用的语言链接，保留当前挑战上下文，也响应再次挑战产生的 URL 变化。
- `ChallengeApp`、目标栏、结果比较、分享组件显式接收语言；复制和原生分享均使用当前语言。
- 首页和原测试结果页的挑战按钮链接到各自语言入口；返回首页也保留语言。
- 每种语言独立 canonical，共享相互对应的 hreflang；sitemap 仅列基础路由。

规则和 payload 协议保持不变。协议里的默认昵称仍为 `Player`，不会把真实昵称翻译成另一种语言。德语和法语显示小数逗号，但评分依旧使用整数的 0.1 ms 单位。

语言切换属于页面导航：进行中的计时局会结束，并回到相同邀请的准备页；不会跨路由继续计时。正在查看的邀请和双方回传结果从 URL 完整恢复。没有写入 URL 的当前单人结果可从本地历史恢复（设备允许存储时）。

## 验证

- `npm run test:challenge`：24 组通过，新增六种字典完整性、本地化链接兼容性/长度上限、原生分享参数语言检查。
- `npm run lint`、`npx tsc --noEmit`、`git diff --check`：通过。
- `npm run check:blog-i18n`、`npm run check:seo`：通过。
- 在当前源文件的独立临时副本中执行 `npm run build`，避免与用户正在运行的 Next dev 共用 `.next`：78 个静态页面成功导出。
- 同一构建副本的 `npm run check:seo:export`：72 个 sitemap URL 的 canonical/hreflang、重定向、语言、元信息、FAQ 和站内链接检查通过。
- Ego Lite Chromium：六语连续切换保留原邀请 hash、目标和 query；中文完成 5 轮并生成中文回传分享参数；法文打开回传结果并再次挑战；中文坏链接错误提示。
- Cloudflare Pages 静态预览：六种语言基础入口均返回 200；法文双方结果链接直接打开、刷新后仍正确显示双方分数及 10,0 ms 的差值。
- 六种语言分别在 360/390px 模拟宽度下检查：无横向溢出，目标栏和测试面板同时在首屏。

浏览器回归脚本在 `tests/browser/challenge-i18n-smoke.js`。在已有、由当前任务控制的 ego-browser TaskSpace 内运行；在脚本前设置 `globalThis.rttBrowserSpace = <id>`。脚本默认测试 `http://localhost:3000`，通过替换原生分享函数捕获参数，不向任何人发送消息。

未做母语人工审校、真实手机或 Safari/Firefox 验证；未部署生产站点。工作区原有未提交的 SEO 改动予以保留。
