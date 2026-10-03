# 朋友挑战交付说明

## 2026-10-03：挑战结果弹窗

- 新完成的好友挑战自动显示成功、失败或平局弹窗，沿用经典速度比较和进阶准确率优先规则。
- 抢跑、超时、中断和进阶模式没有成功点击绿色时单独提示，不分享无效或无法计分的成绩。
- 弹窗支持修改昵称、把双方结果发回好友、用自己的成绩邀请另一位好友，以及立即重试。关闭后页面保留结果和分享入口；修改昵称不会再次弹出。
- 新文案覆盖英文、中文、日文、韩文、德文、法文和越南文。使用原生模态 dialog，补充 Tab 首尾循环、Escape 关闭、焦点恢复和窄屏内部滚动。
- `ChallengeResultDialog.tsx` 负责呈现和键盘交互，`ChallengeShareControls.tsx` 复用页面与弹窗中的昵称和分享控件，`ChallengeApp.tsx` 管理每局弹出与重试。
- 设计和实施步骤见 `docs/superpowers/specs/2026-10-03-challenge-result-dialog-{design,plan}.md`；新增浏览器回归脚本为 `tests/browser/challenge-result-dialog.js`。
- 验证：25 组挑战测试通过；lint、TypeScript、生产构建（90 个静态页面）、博客翻译检查、SEO 内容检查和 diff 空白检查通过。
- 浏览器验证了真实空格键完成的中文成功弹窗，以及确定性反应时钟下的成功／失败／平局、昵称校验、两种分享 payload、分享取消／失败与手动复制、Tab 循环、Escape／关闭／重试、七种语言的无效提示、360／390 宽度和长昵称；进阶模式实际跑满 20 轮，验证无绿色点击不可分享，以及正确轮数优先于反应速度。原生分享通过 API 模拟，未向任何人发送消息；未验证真实手机和 Safari／Firefox，未部署生产。

> 2026-09-29：朋友挑战已补齐六种语言；本文件中的“暂只提供英文”记录为初版状态，最新说明见 [challenge-i18n.md](challenge-i18n.md)。

依据 `/Users/a1-6/Downloads/reaction_time_friend_challenge_implementation.md`（2026-09-22）实现。

## 功能与集成

- 保留现有首页练习玩法、博客、多语言页面、SEO 内容与原历史存储。首页和首页结果新增正式挑战入口；旧成绩不转换为挑战成绩。
- 独立 Classic 正式 5 轮：1200–3000 ms 随机等待、5000 ms 响应窗口；抢跑或超时使整局无效。
- Advanced 20 轮：Fisher–Yates 洗牌 12 个 go 与 8 个 nogo，600–1600 ms 等待、1000 ms 窗口；保留提前点击、误点、漏点和正确忍住。
- 引擎使用 `performance.now()`、rAF 内 React `flushSync` 提交信号、处理时钟判定边界；输入只绑定测试区域，释放后进入下一轮，过时回调受局/轮 token 保护。
- 准备、测试、完成阶段保留固定好友目标；中途统计只以完成轮次为分母；完整合格局才比较和分享。
- 邀请与双方回传使用完整原始轮次；双方结果采用中性称呼；同名有 Original player / Challenger 标识。再挑战和邀请另一人创建新 ID，最多携带两份成绩。
- UTF-8/Base64URL、严格字段白名单、版本、元组、数值、昵称、大小校验；解码目标深冻结。比较只使用重新计算后的 0.1 ms 分数。
- Copy link 始终提供；Web Share 可用时提供。回传主按钮直接调用分享或复制；取消不报送达，拒绝时保留手动选择文本框。
- 独立本地昵称和最多 50 局历史，最近列表支持恢复成绩；存储失败不阻止测试与分享。
- 新英文字符串集中于 `lib/challenge/strings.ts`，遵循现有 `Lang` 类型并明确回退英文。挑战页不提供会丢失邀请的语言跳转，不生成不存在的翻译页或 hreflang。
- 保留 Pageview/Plausible 原统计服务。审查原 SDK 后发现其 `u` 直接取 `location.href`，因此替换为同一 endpoint 的受控适配器，所有页面和 referrer 均去除 query/hash，事件不携带姓名或成绩 payload；邀请打开按 payload 在页面会话内去重。

## 主要文件

| 文件 | 职责 |
| --- | --- |
| `app/challenge/page.tsx` | 静态页面、规则文本、canonical、固定品牌 OG 图 |
| `lib/challenge/rules.ts` | 规则参数、协议类型、随机 ID |
| `lib/challenge/engine.ts` | 独立状态机、可注入随机数/时钟/调度器、输入与中断 |
| `lib/challenge/scoring.ts` | 完整性校验、统计与比较 |
| `lib/challenge/codec.ts` | 严格协议编解码、安全限制、URL 构造 |
| `lib/challenge/storage.ts` / `sharing.ts` | 本地历史、昵称、原生分享和复制降级 |
| `lib/challenge/strings.ts` | 集中英文文案及明确语言回退 |
| `components/challenge/*` | 页面流程、目标栏、比较、分享组件 |
| `components/Analytics.tsx` / `lib/challenge/analytics.ts` | 复用统计 endpoint，过滤分享数据 |
| `components/HomePageContent.tsx` / `ResultsPanel.tsx` | 首页入口、正式局入口 |
| `components/Header.tsx` / `Footer.tsx` | 挑战页英文回退，保留其他页面语言导航 |
| `app/sitemap.ts` | 仅加入公开挑战基础页 |
| `tests/challenge.cjs` / `scripts/test-challenge.mjs` | 无新增测试依赖的确定性 Node 测试 |
| `tests/browser/advanced-smoke.js` | 可复跑的真实浏览器进阶测试及 API 失败注入 |

## 路由与部署

沿用项目 `trailingSlash: false`：

- `/challenge`：默认 Classic，允许切换 Advanced。
- `/challenge?mode=advanced`：直接进入 Advanced。
- `/challenge#c=<payload>`：邀请或双方结果；payload 优先于 query。

运行 `npm run build`，部署整个 `out/` 到原 Cloudflare Pages；不新增后端、rewrite、数据库或短链接。实际导出 `out/challenge.html`；Cloudflare Pages 本地预览中 `/challenge` 返回 200，`/challenge/` 规范化到 `/challenge` 后返回 200。邀请 fragment 在客户端读取，刷新无需本地历史。未部署到生产域名。

## 已运行的验证

- `npm run test:challenge`：21 组全部通过，覆盖文档 S01–S12、L01–L10 的核心规则和大部分 U01–U15 的引擎/降级路径；另验证统计 URL 清洗与打开去重。
- `npm run lint`：无警告、无错误。
- `npx tsc --noEmit`：通过。
- `npm run build`：成功导出 73 个静态页面，包括 `/challenge`。
- `npm run check:blog-i18n`：通过。
- `npm run check:seo`：通过。
- `git diff --check`：通过。

构建期间曾同时启动开发服务导致 `.next` 生成文件冲突；停止开发服务后重新生产构建成功。最终预览直接使用构建产物，不混用开发服务。

## 浏览器验证范围

使用 macOS 的 Ego Lite Chromium，在 `npm run cf:preview -- --port 3000` 的静态输出上验证：

- Classic A → B → 回传 → 再挑战完整闭环。A 使用鼠标，B 使用 Space，显示正确的输入方式差异提示。
- 通过 `localhost` 与 `127.0.0.1` 的两个 origin 隔离本地存储，确认 B 初始无挑战历史，仍可解析、比较与回传。是独立存储环境，**不是两个独立浏览器进程或 incognito context**。
- 邀请和回传深链接直接打开、刷新、再挑战新目标；坏链接显示错误页。
- Advanced 真实等待计时跑满 20 轮，使用浏览器 DOM PointerEvent 自动输入：12 hit + 8 withhold = 20/20，平均值只使用 hit。query 为 classic 时合法 advanced payload 仍决定模式。
- 注入 localStorage 写入失败、移除 Clipboard / Web Share，仍可完成、比较、生成回传并显示可手动复制文本框。
- 360×800、390×844 手机尺寸模拟：目标和测试区域在首屏，无横向溢出。最长 20 emoji 昵称不撑宽布局。
- CDP 触屏输入可以触发 Classic 抢跑；目标栏 pointerdown 不参与计分；窗口失焦中断活动局。
- 本地历史恢复为完整结果，再次生成邀请且没有重复增加历史记录。
- 中文首页语言仍为 zh-CN，两个新入口均指向英文挑战页。

浏览器脚本：先在 ego-browser 建立一个当前任务拥有的 TaskSpace，然后使用 `RTT_BROWSER_SPACE=<id> ego-browser nodejs < tests/browser/advanced-smoke.js`。脚本不加速规则时间；它自动响应真实信号，并在当前页面模拟存储和分享能力不可用，刷新即可恢复这些测试替换。

## 差异与未验证部分

- 按现有路由约定使用 `/challenge` 而非末尾斜杠；保持首页原练习引擎，正式挑战使用独立引擎。
- 新界面暂只提供英文；原有六种语言内容不改写。
- 没有引入 Vitest/Jest/Playwright；复用现有 TypeScript 编译器并用 Node 内置 test runner，浏览器使用现有 ego-browser。
- 未获得真实 iOS/Android 设备，未实测 Safari/Firefox 或不同硬件延迟。移动结果是 Chromium 模拟，不代表真实手机全平台通过。
- 原生系统分享面板的跨应用传递和取消只做 API 层自动化验证，未实际向任何人发消息；生产统计 dashboard 入库、生产域名部署后的分享预览未验证。
- 预览中发现原有 `public/_redirects` 会把 `/zh/blog/*` 等多语言博客重定向到英文路径（301）；本次没有修改这份已有配置。翻译源文件和静态产物检查通过，不代表这项既有部署问题已修复。
- Ego Lite 提示有可用更新，本次未升级工具。

此功能没有实时同步或自动通知。链接中的客户端成绩未经认证，校验只保证协议和规则一致，不能防作弊；设备、显示器和事件队列延迟无法完全消除。
