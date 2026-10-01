import { Lang } from "./i18n";

export interface Translations {
  // Metadata
  siteTitle: string;
  siteDescription: string;

  // Navigation
  navHome: string;
  navBlog: string;
  navAbout: string;
  navContact: string;

  // Test states
  testWaiting: string;
  testReady: string;
  testGo: string;
  testTooSoon: string;
  testResult: string;

  // Test UI
  clickToStart: string;
  clickNow: string;
  tooSoonMessage: string;
  tryAgain: string;
  nextRound: string;
  viewResults: string;

  // Results
  yourTime: string;
  average: string;
  best: string;
  roundOf: string;
  round: string;
  resultNote: string;
  resultCardNote: string;
  roundBreakdown: string;
  shareResult: string;
  shareOnTwitter: string;
  saveImage: string;
  playAgain: string;
  history: string;
  noHistory: string;
  clearHistory: string;

  // Stats labels
  ms: string;
  attempts: string;

  // Fun facts
  funFactsTitle: string;
  funFacts: string[];

  // Reaction categories
  catLightning: string;
  catFast: string;
  catAverage: string;
  catSlow: string;
  catVerySlow: string;
  catLightningDesc: string;
  catFastDesc: string;
  catAverageDesc: string;
  catSlowDesc: string;
  catVerySlowDesc: string;

  // About section on home
  aboutTestTitle: string;
  aboutTestDesc: string;

  // Blog page
  blogTitle: string;
  blogDescription: string;

  // About page
  aboutTitle: string;
  aboutDescription: string;

  // Contact page
  contactTitle: string;
  contactDescription: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSend: string;
  contactSent: string;

  // Footer
  footerTagline: string;
  footerRights: string;

  // Share text
  shareText: string;

  // Home SEO sections
  howToTitle: string;
  howToSteps: string[];
  scoresTitle: string;
  scoresDesc: string;
  scoresExample: string;
  sourcesLabel: string;
  relatedGuidesLabel: string;
  tipsTitle: string;
  tips: string[];
  longTailTitle: string;
  longTailIntro: string;
  longTailItems: { title: string; desc: string }[];
  accuracyTitle: string;
  accuracyItems: string[];
  whoTitle: string;
  whoItems: { icon: string; title: string; desc: string }[];
  faqTitle: string;
  faqs: { q: string; a: string; guideSlug?: string }[];
}

const en: Translations = {
  scoresExample: "For example, a best time of 200 ms describes your quickest round; a 200 ms average describes all five rounds together. Neither establishes a population ranking or gaming skill level.",
  sourcesLabel: "Sources",
  relatedGuidesLabel: "Related guides",
  resultNote: "Compare sessions on the same device. These score bands are for this test; they are not population percentiles or a medical assessment.",
  resultCardNote: "Browser result · Device and input latency affect scores",
  roundBreakdown: "Round breakdown",
  siteTitle: "Reaction Time Test – Free Online Reflex Test",
  siteDescription:
    "Test your reaction time in milliseconds. Click, tap, or press Space when green. Get your 5-round average and best time. Free, with no sign-up.",

  navHome: "Home",
  navBlog: "Blog",
  navAbout: "About",
  navContact: "Contact",

  testWaiting: "Get Ready",
  testReady: "Wait for green...",
  testGo: "CLICK!",
  testTooSoon: "Too Soon!",
  testResult: "Your Result",

  clickToStart: "Click to Start",
  clickNow: "Click Now!",
  tooSoonMessage: "You clicked too early! Wait for green.",
  tryAgain: "Try Again",
  nextRound: "Next Round",
  viewResults: "View Results",

  yourTime: "Your Time",
  average: "Average",
  best: "Best",
  roundOf: "Round {n} of {total}",
  round: "Round",
  shareResult: "Share Result",
  shareOnTwitter: "Share on X",
  saveImage: "Save Image",
  playAgain: "Play Again",
  history: "History",
  noHistory: "No history yet. Play a round!",
  clearHistory: "Clear History",

  ms: "ms",
  attempts: "attempts",

  funFactsTitle: "About Your Results",
  funFacts: [
    "This test uses a visual color cue, not a sound cue.",
    "Each completed session contains 5 valid rounds.",
    "Your average is the mean of all 5 rounds, rounded to a whole millisecond.",
    "Your best result is the lowest time in the session.",
    "An early click does not count as a completed round.",
    "Your screen, browser, and input device are part of the measured result."
  ],

  catLightning: "Under 150 ms",
  catFast: "150–199 ms",
  catAverage: "200–299 ms",
  catSlow: "300–399 ms",
  catVerySlow: "400 ms or more",
  catLightningDesc: "Check that you waited for the cue instead of anticipating it.",
  catFastDesc: "Compare with your other sessions on the same device.",
  catAverageDesc: "A score band for this test, not a population average.",
  catSlowDesc: "Review the individual rounds as well as the average.",
  catVerySlowDesc: "Check for interruptions and keep your setup consistent.",

  aboutTestTitle: "How Does the Test Work?",
  aboutTestDesc:
    "Start the test, wait for green, then click or tap the test area. Complete 5 rounds to see your average and best response times. Wait for the color change rather than guessing when it will happen.",

  blogTitle: "Reaction Time Blog",
  blogDescription:
    "Guides to interpreting reaction time scores, device effects, and repeatable browser testing.",

  aboutTitle: "About Reaction Time Test",
  aboutDescription:
    "ReactionTimeTestOnline.com is a free browser tool for trying a visual reaction time test and comparing your own sessions. Learn how the test works, what affects the results, and how the site handles data.",

  contactTitle: "Contact Us",
  contactDescription:
    "Have a question, suggestion, or feedback? We'd love to hear from you.",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactMessage: "Your Message",
  contactSend: "Send Message",
  contactSent: "Message sent! We'll get back to you soon.",

  footerTagline: "Test your reaction time and compare your own results for free.",
  footerRights: "All rights reserved.",

  shareText:
    "I got {time}ms on the Reaction Time Test! Can you beat me? Try it at reactiontimetestonline.com",

  howToTitle: "How to Take the Reaction Time Test",
  howToSteps: [
    "Click or tap the test area to begin. For a keyboard test, focus the area with Tab and press Space or Enter.",
    "Wait while the test area is red. The wait is randomized between 1 and 5 seconds.",
    "When the test area turns green, click or tap as quickly as you can. An early response asks you to retry.",
    "Complete 5 valid rounds to see the average, best time, and individual results."
  ],

  scoresTitle: "What Does Your Score Mean?",
  scoresDesc:
    "To assess a good reaction time, compare repeated sessions on the same device and input method. There is no single average human reaction time that applies across tasks and devices. Your displayed average is the arithmetic mean of your five valid rounds. The bands below are site-defined, not population standards.",

  tipsTitle: "How to Compare Your Reaction Time Fairly",
  tips: [
    "Use the same browser, screen, and input device each time.",
    "Keep your hand in a comfortable, consistent position before starting.",
    "Wait for the green cue instead of trying to predict it.",
    "Complete the whole session and compare averages, not only the best click.",
    "Close distracting tabs and avoid switching apps during the test.",
    "Take a break if you lose concentration, and record any changes to your setup."
  ],

  longTailTitle: "Visual Reaction Time and Mouse Click Tests",
  longTailIntro:
    "Use this no-registration test to record a simple response to a color change. It measures one kind of browser interaction; aiming, game decisions, and sport-specific reactions involve other tasks.",
  longTailItems: [
    {
      title: "Visual reaction time test",
      desc: "Wait for the red area to turn green, then respond. The test uses a color cue rather than an audio cue."
    },
    {
      title: "Mouse click reaction test",
      desc: "Measure the delay to one click or tap after a cue. This is different from a clicks-per-second (CPS) test, which counts repeated clicks."
    },
    {
      title: "Reaction time test for gamers",
      desc: "Record a personal baseline on your gaming setup. A browser score does not predict aiming skill, decision speed, or rank in a game."
    },
    {
      title: "Human Benchmark alternative",
      desc: "Try a free 5-round test with an average, best time, and local history. Different tests and devices can produce different scores."
    }
  ],

  accuracyTitle: "What Affects an Online Reaction Time Result?",
  accuracyItems: [
    "This test uses performance.now() to measure a browser time interval. It does not detect the exact moment a cue becomes visible or remove display and input delays; it is not laboratory-calibrated.",
    "Phone and computer results can differ because screens, browsers, and input processing differ. A touchscreen tap also differs from a mouse click. Use the same device and input method to compare your sessions."
  ],

  whoTitle: "Ways to Use This Test",
  whoItems: [
    {
      icon: "🎮",
      title: "Gamers",
      desc: "Record simple visual response times on your usual setup and compare your own sessions."
    },
    {
      icon: "📱",
      title: "Device comparisons",
      desc: "Explore how a mouse, trackpad, or touch screen changes your results without treating the difference as an isolated hardware measurement."
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Friends",
      desc: "Compare scores for fun. For a fairer comparison, use the same device and rules."
    },
    {
      icon: "🧠",
      title: "Students",
      desc: "Explore rounds, averages, and measurement limitations. This tool is not a validated research or diagnostic instrument."
    }
  ],

  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "Can I improve my reaction time with practice?",
      a: "Practice can help you become familiar with this task and use a more consistent setup. A lower score here does not by itself show an improvement in game performance, sport, or general cognition. Compare full sessions and avoid anticipating the cue.",
      guideSlug: "how-to-improve-reaction-time"
    },
    {
      q: "Why does my score vary between rounds?",
      a: "Your readiness and timing vary, and browser or device delays can vary too. One early guess or interruption can make a single result misleading. The average and round breakdown help you see that variation.",
      guideSlug: "what-is-reaction-time"
    },
    {
      q: "Can I take the reaction time test with the spacebar?",
      a: "Yes. Use Tab to focus the test area, then press Space or Enter to start and to respond when it turns green. Release the key between responses. Keep using the same input method when comparing sessions; keyboard and mouse results are not interchangeable."
    }
  ],
};

const zh: Translations = {
  scoresExample: "例如，最佳成绩 200 ms 表示最快的那一轮；平均成绩 200 ms 则概括了全部五轮的表现。两者都不能确定人群排名或游戏水平。",
  sourcesLabel: "资料来源",
  relatedGuidesLabel: "相关指南",
  resultNote: "请在同一设备上比较多组成绩。这些区间由本站定义，不是人群百分位或医学评估。",
  resultCardNote: "浏览器测量结果 · 设备与输入延迟会影响成绩",
  roundBreakdown: "各轮成绩",
  siteTitle: "反应时间测试 – 你的反应有多快？",
  siteDescription:
    "免费在线反应时间测试。屏幕变绿时点击或轻触，完成 5 轮测试，以毫秒查看并比较你的平均反应时间和最佳成绩。",

  navHome: "首页",
  navBlog: "博客",
  navAbout: "关于",
  navContact: "联系",

  testWaiting: "准备好",
  testReady: "等待变绿...",
  testGo: "点击！",
  testTooSoon: "太早了！",
  testResult: "你的成绩",

  clickToStart: "点击开始",
  clickNow: "快点击！",
  tooSoonMessage: "你点击太早了！等屏幕变绿再点。",
  tryAgain: "再试一次",
  nextRound: "下一轮",
  viewResults: "查看结果",

  yourTime: "你的时间",
  average: "平均",
  best: "最佳",
  roundOf: "第 {n} 轮，共 {total} 轮",
  round: "第",
  shareResult: "分享成绩",
  shareOnTwitter: "分享到 X",
  saveImage: "保存图片",
  playAgain: "再玩一次",
  history: "历史记录",
  noHistory: "还没有记录，快来玩一局吧！",
  clearHistory: "清除记录",

  ms: "毫秒",
  attempts: "次",

  funFactsTitle: "了解你的成绩",
  funFacts: [
    "本测试使用颜色提示，而不是声音提示。",
    "每组完整测试包含 5 轮有效成绩。",
    "平均值是 5 轮成绩的算术平均数，四舍五入至整毫秒。",
    "最佳成绩是本组测试中用时最短的一轮。",
    "提前点击不会计为已完成的一轮。",
    "屏幕、浏览器和输入设备都会影响测量结果。"
  ],

  catLightning: "低于 150 ms",
  catFast: "150–199 ms",
  catAverage: "200–299 ms",
  catSlow: "300–399 ms",
  catVerySlow: "400 ms 及以上",
  catLightningDesc: "确认你是在看到提示后点击，而不是提前猜测。",
  catFastDesc: "与自己在同一设备上的其他成绩比较。",
  catAverageDesc: "这是本站的成绩区间，不是人群平均值。",
  catSlowDesc: "同时查看各轮成绩和平均值。",
  catVerySlowDesc: "检查是否有干扰，并保持测试条件一致。",

  aboutTestTitle: "测试如何进行？",
  aboutTestDesc:
    "开始后等待绿色提示，再点击或轻触测试区域。完成 5 轮即可查看平均反应时间和最佳成绩。请等待颜色变化，不要猜测提示出现的时刻。",

  blogTitle: "反应时间博客",
  blogDescription: "了解如何解读反应时间成绩、设备的影响，以及如何在浏览器中进行条件一致的测试。",

  aboutTitle: "关于反应时间测试",
  aboutDescription:
    "ReactionTimeTestOnline.com 是免费的浏览器视觉反应时间测试工具，可用于比较自己的多次测试。这里介绍测试方式、结果局限和数据处理。",

  contactTitle: "联系我们",
  contactDescription: "有问题、建议或反馈？我们很乐意听到你的声音。",
  contactName: "你的名字",
  contactEmail: "你的邮箱",
  contactMessage: "你的留言",
  contactSend: "发送消息",
  contactSent: "消息已发送！我们会尽快回复你。",

  footerTagline: "免费测试反应时间，比较自己的多次成绩。",
  footerRights: "保留所有权利。",

  shareText:
    "我在反应时间测试中获得了 {time}ms！你能超过我吗？在 reactiontimetestonline.com 来挑战吧",

  howToTitle: "如何进行反应时间测试",
  howToSteps: [
    "点击或轻触测试区域开始。使用键盘时，按 Tab 聚焦测试区域，再按空格键或 Enter。",
    "红色期间请等待。等待时间在 1 到 5 秒之间随机选择。",
    "区域变绿后尽快点击或轻触。提前响应会要求重试。",
    "完成 5 轮有效测试，查看平均值、最佳用时和各轮成绩。"
  ],

  scoresTitle: "你的成绩代表什么？",
  scoresDesc:
    "判断反应时间表现时，请比较自己在同一设备和输入方式下的多组成绩。不存在适用于所有任务和设备的统一人群平均反应时间。页面上的平均值是你自己五轮有效成绩的算术平均数，下列区间由本站定义，并非人群标准。",

  tipsTitle: "如何公平比较反应时间",
  tips: [
    "每次使用相同的浏览器、屏幕和输入设备。",
    "开始前让手处于舒适且一致的位置。",
    "等待绿色提示，不要预测它出现的时间。",
    "完成整组测试并比较平均值，不要只看最佳一轮。",
    "关闭分散注意力的标签页，测试中避免切换应用。",
    "注意力不集中时先休息，并记录测试设备或条件的变化。"
  ],

  longTailTitle: "视觉反应时间与鼠标点击测试",
  longTailIntro:
    "无需注册即可记录对颜色变化的简单响应。这只是一种浏览器操作；瞄准、游戏决策和专项运动反应还涉及其他任务。",
  longTailItems: [
    {
      title: "视觉反应时间测试",
      desc: "等待红色区域变绿后响应。本测试采用颜色提示，而不是声音提示。"
    },
    {
      title: "鼠标点击反应测试",
      desc: "测量提示出现后到一次点击或轻触的间隔。这与统计连续点击次数的每秒点击数（CPS）测试不同。"
    },
    {
      title: "游戏玩家反应时间测试",
      desc: "在常用游戏设备上记录个人基准。浏览器成绩无法预测瞄准能力、决策速度或游戏段位。"
    },
    {
      title: "Human Benchmark 替代测试",
      desc: "免费完成 5 轮测试，查看平均值、最佳成绩和本地历史。不同工具或设备的成绩可能不同。"
    }
  ],

  accuracyTitle: "哪些因素会影响在线反应时间结果？",
  accuracyItems: [
    "本测试使用 performance.now() 测量浏览器内的时间间隔。它不能检测提示真正可见的确切时刻，也不能消除显示与输入延迟，未经过实验室校准。",
    "手机和电脑的屏幕、浏览器及输入处理不同，触屏和鼠标点击的动作也不同，因此成绩可能有差异。比较自己的多组成绩时，请保持设备与输入方式一致。"
  ],

  whoTitle: "测试的使用方式",
  whoItems: [
    {
      icon: "🎮",
      title: "游戏玩家",
      desc: "在常用设备上记录简单视觉响应时间，比较自己的多组成绩。"
    },
    {
      icon: "📱",
      title: "设备比较",
      desc: "观察鼠标、触控板或触摸屏对成绩的影响，但不要把差值视为单独的硬件延迟测量。"
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "好友",
      desc: "趣味比较各自的成绩。使用相同设备与规则可以让比较条件更一致。"
    },
    {
      icon: "🧠",
      title: "学生",
      desc: "了解各轮数据、平均值与测量局限。本工具不是经过验证的研究或诊断仪器。"
    }
  ],

  faqTitle: "常见问题",
  faqs: [
    {
      q: "练习可以提升反应时间吗？",
      a: "练习可帮助你熟悉这个任务并保持操作一致。但本站分数降低本身不能证明游戏表现、运动能力或整体认知改善。请比较完整测试，并避免提前猜测提示。",
      guideSlug: "how-to-improve-reaction-time"
    },
    {
      q: "为什么每轮成绩有差异？",
      a: "你的准备状态和点击时机可能变化，浏览器与设备延迟也会变化。提前猜测或受到干扰可能影响单轮结果。平均值和各轮明细可帮助观察差异。",
      guideSlug: "what-is-reaction-time"
    },
    {
      q: "可以用空格键进行反应时间测试吗？",
      a: "可以。按 Tab 聚焦测试区域，然后按空格键或 Enter 开始，并在区域变绿时再次按键。每次响应后松开按键。比较多组成绩时请保持输入方式一致；键盘和鼠标的结果不能直接互换。"
    }
  ],
};

const ko: Translations = {
  scoresExample: "예를 들어 최고 기록 200 ms는 가장 빠른 한 라운드를, 평균 200 ms는 다섯 라운드 전체를 요약합니다. 어느 쪽도 인구 내 순위나 게임 실력을 나타내지는 않습니다.",
  sourcesLabel: "출처",
  relatedGuidesLabel: "관련 가이드",
  resultNote: "같은 기기에서 여러 세션을 비교하세요. 이 구간은 사이트 자체 기준이며 인구 백분위나 의학적 평가가 아닙니다.",
  resultCardNote: "브라우저 측정 · 기기 및 입력 지연의 영향을 받습니다",
  roundBreakdown: "라운드별 기록",
  siteTitle: "반응 속도 테스트 – 당신의 반응은 얼마나 빠른가요?",
  siteDescription:
    "무료 온라인 반응 시간 테스트. 화면이 초록색으로 바뀌면 클릭하거나 탭하고, 5라운드의 평균과 최고 기록을 밀리초로 확인하세요.",

  navHome: "홈",
  navBlog: "블로그",
  navAbout: "소개",
  navContact: "문의",

  testWaiting: "준비",
  testReady: "초록색을 기다리세요...",
  testGo: "클릭!",
  testTooSoon: "너무 빨랐어요!",
  testResult: "결과",

  clickToStart: "클릭하여 시작",
  clickNow: "지금 클릭!",
  tooSoonMessage: "너무 일찍 클릭했어요! 초록색이 될 때까지 기다리세요.",
  tryAgain: "다시 시도",
  nextRound: "다음 라운드",
  viewResults: "결과 보기",

  yourTime: "내 시간",
  average: "평균",
  best: "최고",
  roundOf: "{total}번 중 {n}번째",
  round: "라운드",
  shareResult: "결과 공유",
  shareOnTwitter: "X에 공유",
  saveImage: "이미지 저장",
  playAgain: "다시 플레이",
  history: "기록",
  noHistory: "아직 기록이 없어요. 한 번 해보세요!",
  clearHistory: "기록 삭제",

  ms: "ms",
  attempts: "회",

  funFactsTitle: "기록 알아보기",
  funFacts: [
    "이 테스트는 소리가 아닌 색상 신호를 사용합니다.",
    "완료된 세션에는 유효한 5라운드가 포함됩니다.",
    "평균은 5라운드의 산술평균을 정수 밀리초로 반올림한 값입니다.",
    "최고 기록은 해당 세션에서 가장 짧은 시간입니다.",
    "너무 일찍 클릭한 시도는 완료된 라운드로 계산하지 않습니다.",
    "화면, 브라우저, 입력 장치도 측정 결과에 영향을 줍니다."
  ],

  catLightning: "150 ms 미만",
  catFast: "150–199 ms",
  catAverage: "200–299 ms",
  catSlow: "300–399 ms",
  catVerySlow: "400 ms 이상",
  catLightningDesc: "신호를 예상하지 않고 확인한 뒤 응답했는지 살펴보세요.",
  catFastDesc: "같은 기기에서 측정한 자신의 다른 기록과 비교하세요.",
  catAverageDesc: "이 테스트의 점수 구간이며 인구 평균이 아닙니다.",
  catSlowDesc: "평균과 함께 각 라운드의 기록도 확인하세요.",
  catVerySlowDesc: "방해 요소를 확인하고 테스트 환경을 일정하게 유지하세요.",

  aboutTestTitle: "테스트는 어떻게 진행되나요?",
  aboutTestDesc:
    "시작한 뒤 초록색 신호를 기다렸다가 테스트 영역을 클릭하거나 탭하세요. 5라운드를 완료하면 평균과 최고 기록을 확인할 수 있습니다. 신호가 나올 시점을 예상하지 말고 색상 변화를 기다리세요.",

  blogTitle: "반응 속도 블로그",
  blogDescription: "반응 시간 기록 해석, 기기의 영향, 일관된 브라우저 테스트 방법을 알아보세요.",

  aboutTitle: "반응 속도 테스트 소개",
  aboutDescription:
    "ReactionTimeTestOnline.com은 시각 반응 시간을 측정하고 자신의 세션을 비교하는 무료 브라우저 도구입니다. 테스트 방식, 결과의 한계, 데이터 처리 방법을 설명합니다.",

  contactTitle: "문의하기",
  contactDescription: "질문, 제안 또는 피드백이 있으신가요? 연락해 주세요.",
  contactName: "이름",
  contactEmail: "이메일",
  contactMessage: "메시지",
  contactSend: "메시지 보내기",
  contactSent: "메시지가 전송되었습니다! 곧 답변 드리겠습니다.",

  footerTagline: "무료로 반응 시간을 측정하고 자신의 기록을 비교하세요.",
  footerRights: "All rights reserved.",

  shareText:
    "반응 속도 테스트에서 {time}ms를 기록했어요! 나보다 빠를 수 있나요? reactiontimetestonline.com에서 도전해보세요",

  howToTitle: "반응 속도 테스트 방법",
  howToSteps: [
    "테스트 영역을 클릭하거나 탭해 시작하세요. 키보드는 Tab으로 영역에 초점을 맞춘 후 Space 또는 Enter를 누르세요.",
    "영역이 빨간색인 동안 기다리세요. 대기 시간은 1~5초 사이에서 무작위로 정해집니다.",
    "초록색으로 바뀌면 최대한 빨리 클릭하거나 탭하세요. 너무 일찍 응답하면 다시 시도해야 합니다.",
    "유효한 5라운드를 완료하면 평균, 최고 기록, 라운드별 시간을 볼 수 있습니다."
  ],

  scoresTitle: "결과가 의미하는 것은?",
  scoresDesc:
    "좋은 반응 시간인지 판단하려면 같은 기기와 입력 방식에서 반복한 자신의 세션을 비교하세요. 모든 과제와 기기에 적용되는 단일 인구 평균 반응 시간은 없습니다. 표시된 평균은 자신의 유효한 다섯 라운드의 산술평균입니다. 아래 구간은 사이트 자체 기준이며 인구 기준이 아닙니다.",

  tipsTitle: "반응 시간을 공정하게 비교하는 방법",
  tips: [
    "매번 같은 브라우저, 화면, 입력 장치를 사용하세요.",
    "시작 전에 손을 편안하고 일정한 위치에 두세요.",
    "신호를 예상하지 말고 초록색을 기다리세요.",
    "전체 세션을 완료하고 최고 기록뿐 아니라 평균도 비교하세요.",
    "주의를 분산시키는 탭을 닫고 테스트 중 앱 전환을 피하세요.",
    "집중이 흐트러지면 쉬고, 기기나 환경을 바꿨다면 기록해 두세요."
  ],

  longTailTitle: "시각 반응 시간과 마우스 클릭 테스트",
  longTailIntro:
    "가입 없이 색상 변화에 대한 단순 반응을 기록하세요. 이 도구는 한 종류의 브라우저 동작을 측정하며 조준, 게임 판단, 종목별 스포츠 반응에는 다른 과제도 포함됩니다.",
  longTailItems: [
    {
      title: "시각 반응 시간 테스트",
      desc: "빨간 영역이 초록색으로 바뀌면 응답하세요. 소리가 아닌 색상 신호를 사용합니다."
    },
    {
      title: "마우스 클릭 반응 테스트",
      desc: "신호 이후 한 번 클릭하거나 탭할 때까지의 시간을 측정합니다. 반복 클릭 횟수를 세는 초당 클릭 수(CPS) 테스트와 다릅니다."
    },
    {
      title: "게이머를 위한 반응 시간 테스트",
      desc: "평소 게임 기기에서 개인 기준을 기록하세요. 브라우저 기록이 조준 실력, 판단 속도, 게임 등급을 예측하지는 않습니다."
    },
    {
      title: "Human Benchmark 대안",
      desc: "무료 5라운드 테스트에서 평균, 최고 기록, 로컬 기록을 확인하세요. 도구나 기기에 따라 결과가 달라질 수 있습니다."
    }
  ],

  accuracyTitle: "온라인 반응 시간 결과에 영향을 주는 요소",
  accuracyItems: [
    "이 테스트는 performance.now()로 브라우저 시간 간격을 측정합니다. 신호가 실제로 보이는 정확한 순간을 감지하거나 화면과 입력 지연을 제거하지 못하며, 실험실에서 보정된 측정이 아닙니다.",
    "휴대전화와 컴퓨터는 화면, 브라우저, 입력 처리가 다릅니다. 화면을 탭하는 동작도 마우스 클릭과 달라 결과가 다를 수 있습니다. 자신의 세션을 비교할 때 같은 기기와 입력 방식을 유지하세요."
  ],

  whoTitle: "테스트 활용 방법",
  whoItems: [
    {
      icon: "🎮",
      title: "게이머",
      desc: "평소 기기에서 단순 시각 반응 시간을 기록하고 자신의 세션을 비교하세요."
    },
    {
      icon: "📱",
      title: "기기 비교",
      desc: "마우스, 트랙패드, 터치스크린에 따라 결과가 어떻게 달라지는지 살펴보세요. 차이를 순수 하드웨어 지연으로 해석해서는 안 됩니다."
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "친구",
      desc: "재미로 기록을 비교하세요. 같은 기기와 규칙을 사용하면 비교 조건을 맞출 수 있습니다."
    },
    {
      icon: "🧠",
      title: "학생",
      desc: "라운드, 평균, 측정의 한계를 살펴보세요. 이 도구는 검증된 연구 또는 진단 장비가 아닙니다."
    }
  ],

  faqTitle: "자주 묻는 질문",
  faqs: [
    {
      q: "연습하면 반응 시간이 향상되나요?",
      a: "연습은 과제에 익숙해지고 일정한 방식으로 응답하는 데 도움이 될 수 있습니다. 여기서 시간이 줄었다고 게임, 스포츠 또는 전반적인 인지 능력의 향상이 입증되는 것은 아닙니다. 전체 세션을 비교하고 신호를 예상하지 마세요.",
      guideSlug: "how-to-improve-reaction-time"
    },
    {
      q: "라운드마다 기록이 달라지는 이유는 무엇인가요?",
      a: "준비 상태와 응답 시점이 달라지고 브라우저나 기기 지연도 변할 수 있습니다. 예상 클릭이나 방해 요소가 한 번의 기록에 영향을 줍니다. 평균과 라운드별 기록으로 차이를 확인하세요.",
      guideSlug: "what-is-reaction-time"
    },
    {
      q: "스페이스바로 반응 시간 테스트를 할 수 있나요?",
      a: "네. Tab으로 테스트 영역에 초점을 맞추고 Space 또는 Enter를 눌러 시작하세요. 초록색으로 바뀌면 다시 누르고 응답 사이에는 키를 놓으세요. 세션을 비교할 때 같은 입력 방식을 사용하세요. 키보드와 마우스 결과를 동일하게 취급할 수는 없습니다."
    }
  ],
};

const ja: Translations = {
  scoresExample: "たとえば、ベストタイム200 msは最速の1ラウンドを、平均200 msは5ラウンド全体を表します。どちらも集団内の順位やゲームの実力を示すものではありません。",
  sourcesLabel: "出典",
  relatedGuidesLabel: "関連ガイド",
  resultNote: "同じ端末で複数のセッションを比較してください。この区分は当サイト独自のもので、集団内の順位や医学的評価ではありません。",
  resultCardNote: "ブラウザ測定 · 端末と入力の遅延が結果に影響します",
  roundBreakdown: "各ラウンドの結果",
  siteTitle: "反応時間テスト – あなたの反応速度は？",
  siteDescription:
    "無料のオンライン反応時間テスト。画面が緑になったらクリックまたはタップし、5ラウンドの平均とベストタイムをミリ秒で確認できます。",

  navHome: "ホーム",
  navBlog: "ブログ",
  navAbout: "について",
  navContact: "お問い合わせ",

  testWaiting: "準備",
  testReady: "緑になるまで待って...",
  testGo: "クリック！",
  testTooSoon: "早すぎ！",
  testResult: "あなたの結果",

  clickToStart: "クリックしてスタート",
  clickNow: "今すぐクリック！",
  tooSoonMessage: "早すぎました！緑になってからクリックしてください。",
  tryAgain: "再挑戦",
  nextRound: "次のラウンド",
  viewResults: "結果を見る",

  yourTime: "あなたのタイム",
  average: "平均",
  best: "ベスト",
  roundOf: "{total}回中{n}回目",
  round: "ラウンド",
  shareResult: "結果をシェア",
  shareOnTwitter: "Xでシェア",
  saveImage: "画像を保存",
  playAgain: "もう一度",
  history: "履歴",
  noHistory: "まだ記録がありません。やってみましょう！",
  clearHistory: "履歴を削除",

  ms: "ms",
  attempts: "回",

  funFactsTitle: "結果の見方",
  funFacts: [
    "このテストは音ではなく色の合図を使います。",
    "1セッションは有効な5ラウンドで構成されます。",
    "平均は5ラウンドの算術平均を整数のミリ秒に四捨五入した値です。",
    "ベストタイムはセッション内の最短時間です。",
    "早すぎるクリックは完了したラウンドに数えません。",
    "画面、ブラウザ、入力機器も測定結果に影響します。"
  ],

  catLightning: "150 ms 未満",
  catFast: "150–199 ms",
  catAverage: "200–299 ms",
  catSlow: "300–399 ms",
  catVerySlow: "400 ms 以上",
  catLightningDesc: "合図を予測せず、見てから反応したか確認してください。",
  catFastDesc: "同じ端末で測った自分の他の結果と比較してください。",
  catAverageDesc: "このテストの区分であり、集団の平均値ではありません。",
  catSlowDesc: "平均とあわせて各ラウンドの結果を確認してください。",
  catVerySlowDesc: "中断がなかったか確認し、測定条件をそろえてください。",

  aboutTestTitle: "テストの仕組みは？",
  aboutTestDesc:
    "開始後、緑の合図を待ってテスト領域をクリックまたはタップします。5ラウンドを終えると平均とベストタイムが表示されます。合図の時刻を予想せず、色の変化を待ってください。",

  blogTitle: "反応時間ブログ",
  blogDescription: "反応時間の結果の読み方、端末の影響、条件をそろえたブラウザ測定についてのガイドです。",

  aboutTitle: "反応時間テストについて",
  aboutDescription:
    "ReactionTimeTestOnline.com は、視覚反応時間を試して自分のセッションを比較できる無料のブラウザツールです。測定方法、結果の限界、データの扱いを説明します。",

  contactTitle: "お問い合わせ",
  contactDescription: "ご質問、ご提案、フィードバックはこちらからどうぞ。",
  contactName: "お名前",
  contactEmail: "メールアドレス",
  contactMessage: "メッセージ",
  contactSend: "送信",
  contactSent: "送信完了！近日中にご返信いたします。",

  footerTagline: "無料で反応時間を測り、自分の結果を比較しましょう。",
  footerRights: "All rights reserved.",

  shareText:
    "反応時間テストで{time}msを記録しました！私より速くできますか？reactiontimetestonline.comで試してみてください",

  howToTitle: "反応時間テストの受け方",
  howToSteps: [
    "テスト領域をクリックまたはタップして開始します。キーボードではTabで領域にフォーカスし、SpaceまたはEnterを押します。",
    "赤い間は待ちます。待機時間は1〜5秒の間でランダムに決まります。",
    "緑に変わったらできるだけ早くクリックまたはタップします。早すぎた場合はやり直します。",
    "有効な5ラウンドを終えると、平均、ベストタイム、各ラウンドの結果を確認できます。"
  ],

  scoresTitle: "スコアが意味すること",
  scoresDesc:
    "良い反応時間かを判断するには、同じ端末と入力方法で繰り返した自分の結果を比較してください。すべての課題や端末に共通する人間の平均反応時間はありません。表示される平均は、自分の有効な5ラウンドの算術平均です。以下の区分は当サイト独自のもので、集団の基準値ではありません。",

  tipsTitle: "反応時間を公平に比較する方法",
  tips: [
    "毎回同じブラウザ、画面、入力機器を使いましょう。",
    "開始前に手を無理のない一定の位置に置きましょう。",
    "合図を予測せず、緑になるのを待ちましょう。",
    "全ラウンドを完了し、ベストタイムだけでなく平均も比較しましょう。",
    "気が散るタブを閉じ、測定中のアプリ切り替えを避けましょう。",
    "集中が途切れたら休み、端末や条件を変えた場合は記録しましょう。"
  ],

  longTailTitle: "視覚反応時間とマウスクリックのテスト",
  longTailIntro:
    "登録なしで色の変化への単純な反応を記録できます。このツールが測るのはブラウザ内の一つの操作であり、照準、ゲームの判断、競技特有の反応には他の課題も含まれます。",
  longTailItems: [
    {
      title: "視覚反応時間テスト",
      desc: "赤い領域が緑に変わったら反応します。音ではなく色を合図に使います。"
    },
    {
      title: "マウスクリック反応テスト",
      desc: "合図から1回のクリックやタップまでの時間を測ります。連続クリック数を数えるCPSテストとは異なります。"
    },
    {
      title: "ゲーマー向け反応時間テスト",
      desc: "普段のゲーム環境で自分の基準を記録できます。ブラウザの結果は照準技術、判断速度、ゲーム内ランクを予測するものではありません。"
    },
    {
      title: "Human Benchmarkの代替テスト",
      desc: "無料の5ラウンドで平均、ベストタイム、端末内の履歴を確認できます。テストや端末が違えば結果も変わります。"
    }
  ],

  accuracyTitle: "オンライン反応時間の結果に影響する要素",
  accuracyItems: [
    "このテストはperformance.now()でブラウザ内の時間間隔を測ります。合図が実際に見える正確な瞬間の検出や、画面と入力の遅延の除去はできません。実験室で校正された測定ではありません。",
    "スマートフォンとパソコンでは画面、ブラウザ、入力処理が異なり、タップとマウスクリックの動作も違うため、結果が変わる場合があります。自分のセッションを比較するときは端末と入力方法をそろえてください。"
  ],

  whoTitle: "テストの活用例",
  whoItems: [
    {
      icon: "🎮",
      title: "ゲーマー",
      desc: "普段の環境で単純な視覚反応時間を記録し、自分のセッションを比較できます。"
    },
    {
      icon: "📱",
      title: "端末の比較",
      desc: "マウス、トラックパッド、タッチ画面による結果の変化を試せます。ただし差を純粋な機器遅延としては扱えません。"
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "友人同士",
      desc: "遊びとして結果を比較できます。同じ端末とルールを使うと条件をそろえられます。"
    },
    {
      icon: "🧠",
      title: "学生",
      desc: "ラウンド、平均、測定の限界を学べます。検証済みの研究機器や診断機器ではありません。"
    }
  ],

  faqTitle: "よくある質問",
  faqs: [
    {
      q: "練習で反応時間を改善できますか？",
      a: "練習でこの課題に慣れ、一貫した操作がしやすくなる場合があります。ただし結果の短縮だけではゲーム、スポーツ、認知能力全般の改善は示せません。セッション全体を比較し、合図の予測は避けてください。",
      guideSlug: "how-to-improve-reaction-time"
    },
    {
      q: "ラウンドごとに結果が変わるのはなぜですか？",
      a: "準備状態や応答のタイミングが変わり、ブラウザや端末の遅延も変動します。予測や中断は1回の結果に影響します。平均と各ラウンドの内訳でばらつきを確認できます。",
      guideSlug: "what-is-reaction-time"
    },
    {
      q: "スペースキーで反応時間テストはできますか？",
      a: "はい。Tabでテスト領域にフォーカスし、SpaceまたはEnterで開始します。緑になったらもう一度押し、応答の間はキーを離してください。セッション比較時は入力方法をそろえてください。キーボードとマウスの結果は同じ条件とはみなせません。"
    }
  ],
};

const de: Translations = {
  scoresExample: "Eine Bestzeit von 200 ms beschreibt zum Beispiel deine schnellste Runde; ein Durchschnitt von 200 ms fasst alle fünf Runden zusammen. Keiner der beiden Werte bestimmt einen Bevölkerungsrang oder deine Spielstärke.",
  sourcesLabel: "Quellen",
  relatedGuidesLabel: "Weiterführende Anleitungen",
  resultNote: "Vergleiche Sitzungen auf demselben Gerät. Die Bereiche sind für diesen Test definiert und weder Bevölkerungsperzentile noch eine medizinische Bewertung.",
  resultCardNote: "Browsermessung · Geräte- und Eingabeverzögerung beeinflussen das Ergebnis",
  roundBreakdown: "Ergebnisse pro Runde",
  siteTitle: "Reaktionszeittest – Wie schnell reagierst du?",
  siteDescription:
    "Kostenloser Online-Reaktionszeittest. Klicke oder tippe bei Grün und vergleiche nach 5 Runden deinen Durchschnitt und deine Bestzeit in Millisekunden.",

  navHome: "Start",
  navBlog: "Blog",
  navAbout: "Über uns",
  navContact: "Kontakt",

  testWaiting: "Bereit machen",
  testReady: "Warte auf Grün...",
  testGo: "KLICK!",
  testTooSoon: "Zu früh!",
  testResult: "Dein Ergebnis",

  clickToStart: "Klicken zum Starten",
  clickNow: "Jetzt klicken!",
  tooSoonMessage: "Du hast zu früh geklickt! Warte auf Grün.",
  tryAgain: "Nochmal versuchen",
  nextRound: "Nächste Runde",
  viewResults: "Ergebnisse ansehen",

  yourTime: "Deine Zeit",
  average: "Durchschnitt",
  best: "Beste",
  roundOf: "Runde {n} von {total}",
  round: "Runde",
  shareResult: "Ergebnis teilen",
  shareOnTwitter: "Auf X teilen",
  saveImage: "Bild speichern",
  playAgain: "Nochmal spielen",
  history: "Verlauf",
  noHistory: "Noch kein Verlauf. Spiel eine Runde!",
  clearHistory: "Verlauf löschen",

  ms: "ms",
  attempts: "Versuche",

  funFactsTitle: "Deine Ergebnisse verstehen",
  funFacts: [
    "Dieser Test nutzt ein Farbsignal, kein Tonsignal.",
    "Eine vollständige Sitzung enthält 5 gültige Runden.",
    "Der Durchschnitt ist das arithmetische Mittel der 5 Runden, auf ganze Millisekunden gerundet.",
    "Die Bestzeit ist die kürzeste Zeit der Sitzung.",
    "Ein zu früher Klick zählt nicht als abgeschlossene Runde.",
    "Bildschirm, Browser und Eingabegerät beeinflussen das Ergebnis."
  ],

  catLightning: "Unter 150 ms",
  catFast: "150–199 ms",
  catAverage: "200–299 ms",
  catSlow: "300–399 ms",
  catVerySlow: "Ab 400 ms",
  catLightningDesc: "Prüfe, ob du auf das Signal reagiert statt es vorhergesehen hast.",
  catFastDesc: "Vergleiche mit deinen anderen Sitzungen auf demselben Gerät.",
  catAverageDesc: "Ein Bereich dieses Tests, kein Bevölkerungsdurchschnitt.",
  catSlowDesc: "Betrachte die einzelnen Runden zusammen mit dem Durchschnitt.",
  catVerySlowDesc: "Prüfe mögliche Unterbrechungen und halte die Bedingungen gleich.",

  aboutTestTitle: "Wie funktioniert der Test?",
  aboutTestDesc:
    "Starte den Test, warte auf Grün und klicke oder tippe auf die Testfläche. Nach 5 Runden siehst du Durchschnitt und Bestzeit. Warte auf den Farbwechsel, statt den Zeitpunkt zu erraten.",

  blogTitle: "Reaktionszeit-Blog",
  blogDescription:
    "Anleitungen zur Einordnung von Reaktionszeiten, zu Geräteeinflüssen und zu vergleichbaren Browsermessungen.",

  aboutTitle: "Über den Reaktionszeittest",
  aboutDescription:
    "ReactionTimeTestOnline.com ist ein kostenloses Browserwerkzeug für einen visuellen Reaktionszeittest und den Vergleich eigener Sitzungen. Hier erklären wir Messmethode, Grenzen und Datenverarbeitung.",

  contactTitle: "Kontakt",
  contactDescription:
    "Hast du eine Frage, einen Vorschlag oder Feedback? Wir freuen uns von dir zu hören.",
  contactName: "Dein Name",
  contactEmail: "Deine E-Mail",
  contactMessage: "Deine Nachricht",
  contactSend: "Nachricht senden",
  contactSent: "Nachricht gesendet! Wir melden uns bald.",

  footerTagline: "Teste kostenlos deine Reaktionszeit und vergleiche deine eigenen Ergebnisse.",
  footerRights: "Alle Rechte vorbehalten.",

  shareText:
    "Ich habe {time}ms im Reaktionszeittest erreicht! Kannst du mich schlagen? Probiere es auf reactiontimetestonline.com",

  howToTitle: "Wie führe ich den Reaktionszeittest durch?",
  howToSteps: [
    "Klicke oder tippe auf die Testfläche. Für den Tastaturtest wähle sie mit Tab aus und drücke die Leertaste oder Enter.",
    "Warte, solange die Fläche rot ist. Die Wartezeit wird zufällig zwischen 1 und 5 Sekunden gewählt.",
    "Klicke oder tippe bei Grün so schnell wie möglich. Bei einer zu frühen Reaktion musst du die Runde wiederholen.",
    "Nach 5 gültigen Runden siehst du Durchschnitt, Bestzeit und die einzelnen Ergebnisse."
  ],

  scoresTitle: "Was bedeuten deine Ergebnisse?",
  scoresDesc:
    "Um eine gute Reaktionszeit einzuordnen, vergleiche wiederholte Sitzungen mit demselben Gerät und derselben Eingabemethode. Es gibt keinen einheitlichen Bevölkerungsdurchschnitt für alle Aufgaben und Geräte. Dein angezeigter Durchschnitt ist das arithmetische Mittel deiner fünf gültigen Runden. Die Bereiche unten sind vom Anbieter festgelegt, keine Bevölkerungsnormen.",

  tipsTitle: "Reaktionszeiten fair vergleichen",
  tips: [
    "Verwende immer denselben Browser, Bildschirm und dasselbe Eingabegerät.",
    "Halte deine Hand vor dem Start in einer bequemen, gleichbleibenden Position.",
    "Warte auf das grüne Signal, statt seinen Zeitpunkt vorherzusagen.",
    "Beende die ganze Sitzung und vergleiche Durchschnittswerte, nicht nur den besten Klick.",
    "Schließe ablenkende Tabs und wechsle während des Tests nicht die App.",
    "Mache bei nachlassender Konzentration eine Pause und notiere Änderungen am Aufbau."
  ],

  longTailTitle: "Visueller Reaktionszeittest und Maus-Klick-Test",
  longTailIntro:
    "Erfasse ohne Registrierung eine einfache Reaktion auf einen Farbwechsel. Dieser Test misst eine Browserinteraktion; Zielen, Spielentscheidungen und sportspezifische Reaktionen umfassen weitere Aufgaben.",
  longTailItems: [
    {
      title: "Visueller Reaktionszeittest",
      desc: "Reagiere, sobald die rote Fläche grün wird. Der Test verwendet ein Farb- statt eines Tonsignals."
    },
    {
      title: "Maus-Klick-Reaktionstest",
      desc: "Miss die Zeit bis zu einem Klick oder Tippen nach dem Signal. Ein CPS-Test zählt dagegen wiederholte Klicks pro Sekunde."
    },
    {
      title: "Reaktionszeittest für Gamer",
      desc: "Erfasse einen persönlichen Ausgangswert auf deinem Gaming-Gerät. Der Browserwert sagt weder Zielgenauigkeit noch Entscheidungstempo oder Spielrang voraus."
    },
    {
      title: "Human-Benchmark-Alternative",
      desc: "Teste kostenlos 5 Runden mit Durchschnitt, Bestzeit und lokalem Verlauf. Unterschiedliche Tests oder Geräte können unterschiedliche Werte liefern."
    }
  ],

  accuracyTitle: "Was beeinflusst ein Online-Reaktionszeit-Ergebnis?",
  accuracyItems: [
    "Dieser Test misst mit performance.now() ein Zeitintervall im Browser. Er erkennt nicht den exakten Moment, in dem das Signal sichtbar wird, und entfernt keine Anzeige- oder Eingabeverzögerungen. Die Messung ist nicht im Labor kalibriert.",
    "Smartphone und Computer können wegen unterschiedlicher Bildschirme, Browser und Eingabeverarbeitung andere Ergebnisse liefern. Ein Tippen auf den Touchscreen ist zudem eine andere Bewegung als ein Mausklick. Vergleiche Sitzungen mit demselben Gerät und derselben Eingabemethode."
  ],

  whoTitle: "So lässt sich der Test nutzen",
  whoItems: [
    {
      icon: "🎮",
      title: "Gamer",
      desc: "Erfasse einfache visuelle Reaktionszeiten mit deiner üblichen Ausstattung und vergleiche eigene Sitzungen."
    },
    {
      icon: "📱",
      title: "Gerätevergleich",
      desc: "Erkunde Unterschiede zwischen Maus, Trackpad und Touchscreen. Die Differenz ist keine isolierte Messung der Hardwarelatenz."
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Freunde",
      desc: "Vergleicht eure Ergebnisse zum Spaß. Mit demselben Gerät und denselben Regeln sind die Bedingungen ähnlicher."
    },
    {
      icon: "🧠",
      title: "Lernende",
      desc: "Erkunde Rundenwerte, Durchschnitt und Messgrenzen. Dieses Werkzeug ist kein validiertes Forschungs- oder Diagnoseinstrument."
    }
  ],

  faqTitle: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Kann ich meine Reaktionszeit durch Übung verbessern?",
      a: "Übung kann helfen, die Aufgabe kennenzulernen und gleichmäßiger auszuführen. Ein niedrigerer Wert belegt allein keine Verbesserung beim Gaming, im Sport oder der allgemeinen Kognition. Vergleiche vollständige Sitzungen und errate das Signal nicht.",
      guideSlug: "how-to-improve-reaction-time"
    },
    {
      q: "Warum variiert mein Ergebnis zwischen den Runden?",
      a: "Deine Bereitschaft und dein Reaktionszeitpunkt variieren; auch Browser- und Geräteverzögerungen können schwanken. Ein erratener Klick oder eine Unterbrechung kann einen einzelnen Wert verzerren. Durchschnitt und Rundenübersicht zeigen diese Streuung.",
      guideSlug: "what-is-reaction-time"
    },
    {
      q: "Kann ich den Reaktionszeittest mit der Leertaste machen?",
      a: "Ja. Wähle die Testfläche mit Tab aus und drücke die Leertaste oder Enter zum Starten und bei Grün erneut. Lasse die Taste zwischen den Reaktionen los. Verwende für Vergleiche dieselbe Eingabemethode; Tastatur- und Mausergebnisse sind nicht austauschbar."
    }
  ],
};

const fr: Translations = {
  scoresExample: "Par exemple, un meilleur temps de 200 ms décrit votre tour le plus rapide ; une moyenne de 200 ms résume les cinq tours. Aucun de ces deux résultats ne détermine un rang dans la population ou votre niveau de jeu.",
  sourcesLabel: "Sources",
  relatedGuidesLabel: "Guides associés",
  resultNote: "Comparez des sessions sur le même appareil. Ces plages sont propres au test ; elles ne sont ni des centiles de population ni une évaluation médicale.",
  resultCardNote: "Mesure navigateur · Les délais du matériel influencent le résultat",
  roundBreakdown: "Détail des tours",
  siteTitle: "Test de Temps de Réaction – Êtes-vous rapide ?",
  siteDescription:
    "Test de temps de réaction gratuit en ligne. Cliquez ou touchez au vert, puis comparez votre moyenne et votre meilleur temps sur 5 tours, en millisecondes.",

  navHome: "Accueil",
  navBlog: "Blog",
  navAbout: "À propos",
  navContact: "Contact",

  testWaiting: "Préparez-vous",
  testReady: "Attendez le vert...",
  testGo: "CLIQUEZ !",
  testTooSoon: "Trop tôt !",
  testResult: "Votre résultat",

  clickToStart: "Cliquez pour démarrer",
  clickNow: "Cliquez maintenant !",
  tooSoonMessage: "Vous avez cliqué trop tôt ! Attendez le vert.",
  tryAgain: "Réessayer",
  nextRound: "Tour suivant",
  viewResults: "Voir les résultats",

  yourTime: "Votre temps",
  average: "Moyenne",
  best: "Meilleur",
  roundOf: "Tour {n} sur {total}",
  round: "Tour",
  shareResult: "Partager le résultat",
  shareOnTwitter: "Partager sur X",
  saveImage: "Sauvegarder l'image",
  playAgain: "Rejouer",
  history: "Historique",
  noHistory: "Pas encore d'historique. Jouez une partie !",
  clearHistory: "Effacer l'historique",

  ms: "ms",
  attempts: "essais",

  funFactsTitle: "Comprendre vos résultats",
  funFacts: [
    "Ce test utilise un signal de couleur, pas un signal sonore.",
    "Une session complète comprend 5 tours valides.",
    "La moyenne est la moyenne arithmétique des 5 tours, arrondie à la milliseconde entière.",
    "Le meilleur temps est le plus court de la session.",
    "Un clic trop tôt ne compte pas comme un tour terminé.",
    "Votre écran, votre navigateur et votre périphérique influencent le résultat."
  ],

  catLightning: "Moins de 150 ms",
  catFast: "150–199 ms",
  catAverage: "200–299 ms",
  catSlow: "300–399 ms",
  catVerySlow: "400 ms ou plus",
  catLightningDesc: "Vérifiez que vous avez attendu le signal sans le deviner.",
  catFastDesc: "Comparez avec vos autres sessions sur le même appareil.",
  catAverageDesc: "Une plage propre au test, pas une moyenne de population.",
  catSlowDesc: "Consultez les tours individuels en plus de la moyenne.",
  catVerySlowDesc: "Vérifiez les interruptions et gardez les mêmes conditions.",

  aboutTestTitle: "Comment fonctionne le test ?",
  aboutTestDesc:
    "Démarrez, attendez le vert, puis cliquez ou touchez la zone de test. Terminez 5 tours pour voir votre moyenne et votre meilleur temps. Attendez le changement de couleur sans chercher à deviner son arrivée.",

  blogTitle: "Blog sur le temps de réaction",
  blogDescription:
    "Des guides pour interpréter les temps de réaction, comprendre les effets du matériel et comparer des tests dans le navigateur.",

  aboutTitle: "À propos du test de temps de réaction",
  aboutDescription:
    "ReactionTimeTestOnline.com est un outil gratuit dans le navigateur pour essayer un test de réaction visuelle et comparer vos propres sessions. Découvrez la méthode, les limites et le traitement des données.",

  contactTitle: "Contactez-nous",
  contactDescription:
    "Une question, une suggestion ou un retour ? Nous serions ravis de vous entendre.",
  contactName: "Votre nom",
  contactEmail: "Votre e-mail",
  contactMessage: "Votre message",
  contactSend: "Envoyer le message",
  contactSent: "Message envoyé ! Nous vous répondrons bientôt.",

  footerTagline: "Testez gratuitement votre temps de réaction et comparez vos résultats.",
  footerRights: "Tous droits réservés.",

  shareText:
    "J'ai obtenu {time}ms au test de temps de réaction ! Pouvez-vous me battre ? Essayez sur reactiontimetestonline.com",

  howToTitle: "Comment faire le test de temps de réaction ?",
  howToSteps: [
    "Cliquez ou touchez la zone de test. Au clavier, sélectionnez-la avec Tab, puis appuyez sur Espace ou Entrée.",
    "Attendez pendant que la zone est rouge. Le délai est choisi au hasard entre 1 et 5 secondes.",
    "Au vert, cliquez ou touchez aussi vite que possible. Une réponse trop tôt demande de recommencer le tour.",
    "Terminez 5 tours valides pour voir la moyenne, le meilleur temps et les résultats individuels."
  ],

  scoresTitle: "Que signifient vos résultats ?",
  scoresDesc:
    "Pour évaluer un bon temps de réaction, comparez plusieurs sessions avec le même appareil et la même méthode de saisie. Il n’existe pas de moyenne humaine unique applicable à toutes les tâches et à tous les appareils. La moyenne affichée est la moyenne arithmétique de vos cinq tours valides. Les plages ci-dessous sont propres au site, pas des normes de population.",

  tipsTitle: "Comment comparer équitablement vos temps de réaction",
  tips: [
    "Utilisez le même navigateur, le même écran et le même périphérique à chaque fois.",
    "Placez votre main dans une position confortable et constante avant de commencer.",
    "Attendez le signal vert sans essayer de le prévoir.",
    "Terminez toute la session et comparez les moyennes, pas seulement le meilleur clic.",
    "Fermez les onglets distrayants et évitez de changer d’application pendant le test.",
    "Faites une pause si vous perdez votre concentration et notez tout changement de matériel."
  ],

  longTailTitle: "Tests de réaction visuelle et de clic souris",
  longTailIntro:
    "Enregistrez sans inscription une réponse simple à un changement de couleur. Ce test mesure une interaction dans le navigateur ; la visée, les décisions de jeu et les réactions sportives font intervenir d’autres tâches.",
  longTailItems: [
    {
      title: "Test de temps de réaction visuel",
      desc: "Répondez quand la zone rouge devient verte. Le signal est une couleur, pas un son."
    },
    {
      title: "Test de réaction au clic souris",
      desc: "Mesurez le délai avant un clic ou un toucher après le signal. Un test CPS compte, lui, des clics répétés par seconde."
    },
    {
      title: "Test de réaction pour les joueurs",
      desc: "Établissez un repère personnel avec votre matériel de jeu. Un score de navigateur ne prédit ni la précision de visée, ni la décision, ni le rang dans un jeu."
    },
    {
      title: "Alternative à Human Benchmark",
      desc: "Essayez gratuitement 5 tours avec moyenne, meilleur temps et historique local. Les scores peuvent varier selon le test ou l’appareil."
    }
  ],

  accuracyTitle: "Qu'est-ce qui influence un résultat de réaction en ligne ?",
  accuracyItems: [
    "Ce test utilise performance.now() pour mesurer un intervalle dans le navigateur. Il ne détecte pas l’instant exact où le signal devient visible et ne supprime pas les délais d’affichage ou de saisie. La mesure n’est pas étalonnée en laboratoire.",
    "Les résultats sur téléphone et ordinateur peuvent différer selon l’écran, le navigateur et le traitement des entrées. Toucher un écran diffère aussi d’un clic souris. Comparez vos sessions avec le même appareil et la même méthode de saisie."
  ],

  whoTitle: "Comment utiliser ce test",
  whoItems: [
    {
      icon: "🎮",
      title: "Joueurs",
      desc: "Enregistrez des réponses visuelles simples avec votre matériel habituel et comparez vos propres sessions."
    },
    {
      icon: "📱",
      title: "Comparaisons d’appareils",
      desc: "Explorez les différences entre souris, pavé tactile et écran tactile. L’écart ne constitue pas une mesure isolée de latence du matériel."
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Amis",
      desc: "Comparez vos scores pour vous amuser. Un appareil et des règles identiques rendent les conditions plus comparables."
    },
    {
      icon: "🧠",
      title: "Étudiants",
      desc: "Explorez les tours, la moyenne et les limites de mesure. Cet outil n’est pas un instrument de recherche ou de diagnostic validé."
    }
  ],

  faqTitle: "Questions fréquentes",
  faqs: [
    {
      q: "Puis-je améliorer mon temps de réaction avec la pratique ?",
      a: "La pratique peut vous familiariser avec cette tâche et rendre votre geste plus régulier. Un score plus bas ne prouve pas à lui seul un progrès dans le jeu, le sport ou la cognition générale. Comparez les sessions complètes sans anticiper le signal.",
      guideSlug: "how-to-improve-reaction-time"
    },
    {
      q: "Pourquoi mon score varie-t-il d’un tour à l’autre ?",
      a: "Votre préparation et votre réponse varient, tout comme les délais du navigateur ou de l’appareil. Une anticipation ou une interruption peut fausser un résultat isolé. La moyenne et le détail des tours permettent de voir cette variation.",
      guideSlug: "what-is-reaction-time"
    },
    {
      q: "Puis-je faire le test de réaction avec la barre d’espace ?",
      a: "Oui. Sélectionnez la zone de test avec Tab, puis appuyez sur Espace ou Entrée pour commencer et à nouveau au vert. Relâchez la touche entre les réponses. Gardez la même méthode de saisie pour comparer vos sessions ; les résultats au clavier et à la souris ne sont pas interchangeables."
    }
  ],
};

const vi: Translations = {
  scoresExample: "Ví dụ, thời gian tốt nhất 200 ms là vòng nhanh nhất của bạn; trung bình 200 ms là kết quả tính từ cả 5 vòng. Cả hai đều không xác định thứ hạng trong cộng đồng hay trình độ chơi game.",
  sourcesLabel: "Nguồn tham khảo",
  relatedGuidesLabel: "Hướng dẫn liên quan",
  resultNote: "Hãy so sánh các lượt thử trên cùng một thiết bị. Các mức điểm này chỉ áp dụng cho bài kiểm tra này; chúng không phải thứ hạng phần trăm trong cộng đồng hay đánh giá y khoa.",
  resultCardNote: "Kết quả trên trình duyệt · Độ trễ thiết bị và thao tác đầu vào ảnh hưởng đến điểm số",
  roundBreakdown: "Kết quả từng vòng",
  siteTitle: "Kiểm tra thời gian phản xạ – Bài kiểm tra phản xạ trực tuyến miễn phí",
  siteDescription:
    "Đo thời gian phản xạ tính bằng mili giây. Nhấp, chạm hoặc nhấn phím cách khi màn hình chuyển xanh. Xem thời gian trung bình và tốt nhất sau 5 vòng. Miễn phí, không cần đăng ký.",

  navHome: "Trang chủ",
  navBlog: "Bài viết",
  navAbout: "Giới thiệu",
  navContact: "Liên hệ",

  testWaiting: "Chuẩn bị",
  testReady: "Chờ màu xanh...",
  testGo: "BẤM NGAY!",
  testTooSoon: "Quá sớm!",
  testResult: "Kết quả của bạn",

  clickToStart: "Bấm để bắt đầu",
  clickNow: "Bấm ngay!",
  tooSoonMessage: "Bạn đã bấm quá sớm! Hãy chờ đến khi màn hình chuyển xanh.",
  tryAgain: "Thử lại",
  nextRound: "Vòng tiếp theo",
  viewResults: "Xem kết quả",

  yourTime: "Thời gian của bạn",
  average: "Trung bình",
  best: "Tốt nhất",
  roundOf: "Vòng {n}/{total}",
  round: "Vòng",
  shareResult: "Chia sẻ kết quả",
  shareOnTwitter: "Chia sẻ lên X",
  saveImage: "Lưu ảnh",
  playAgain: "Chơi lại",
  history: "Lịch sử",
  noHistory: "Chưa có lịch sử. Hãy thử một lượt!",
  clearHistory: "Xóa lịch sử",

  ms: "ms",
  attempts: "lần thử",

  funFactsTitle: "Hiểu kết quả của bạn",
  funFacts: [
    "Bài kiểm tra này dùng tín hiệu đổi màu, không dùng âm thanh.",
    "Mỗi lượt hoàn thành gồm 5 vòng hợp lệ.",
    "Thời gian trung bình là trung bình cộng của 5 vòng, được làm tròn đến mili giây.",
    "Kết quả tốt nhất là thời gian ngắn nhất trong lượt thử.",
    "Nhấp quá sớm không được tính là một vòng hoàn thành.",
    "Màn hình, trình duyệt và thiết bị nhập liệu đều ảnh hưởng đến kết quả đo."
  ],

  catLightning: "Dưới 150 ms",
  catFast: "150–199 ms",
  catAverage: "200–299 ms",
  catSlow: "300–399 ms",
  catVerySlow: "Từ 400 ms trở lên",
  catLightningDesc: "Hãy chắc rằng bạn đã chờ tín hiệu xuất hiện, thay vì đoán trước.",
  catFastDesc: "Hãy so sánh với những lượt thử khác của bạn trên cùng thiết bị.",
  catAverageDesc: "Đây là mức điểm của bài kiểm tra này, không phải mức trung bình của cộng đồng.",
  catSlowDesc: "Hãy xem cả kết quả từng vòng lẫn thời gian trung bình.",
  catVerySlowDesc: "Kiểm tra các yếu tố gây xao nhãng và giữ điều kiện thử nhất quán.",

  aboutTestTitle: "Bài kiểm tra hoạt động như thế nào?",
  aboutTestDesc:
    "Bắt đầu bài kiểm tra, chờ màn hình chuyển xanh rồi nhấp hoặc chạm vào vùng kiểm tra. Hoàn thành 5 vòng để xem thời gian phản xạ trung bình và tốt nhất. Hãy chờ màu thay đổi, đừng đoán trước thời điểm tín hiệu xuất hiện.",

  blogTitle: "Bài viết về thời gian phản xạ",
  blogDescription:
    "Hướng dẫn đọc hiểu điểm số phản xạ, tác động của thiết bị và cách kiểm tra nhất quán trên trình duyệt.",

  aboutTitle: "Giới thiệu về bài kiểm tra thời gian phản xạ",
  aboutDescription:
    "ReactionTimeTestOnline.com là công cụ miễn phí trên trình duyệt để thử đo phản xạ thị giác và so sánh các lượt thử của chính bạn. Tìm hiểu cách bài kiểm tra hoạt động, những yếu tố ảnh hưởng đến kết quả và cách trang web xử lý dữ liệu.",

  contactTitle: "Liên hệ với chúng tôi",
  contactDescription:
    "Bạn có câu hỏi, đề xuất hoặc góp ý? Chúng tôi rất mong nhận được tin từ bạn.",
  contactName: "Tên của bạn",
  contactEmail: "Email của bạn",
  contactMessage: "Nội dung tin nhắn",
  contactSend: "Gửi tin nhắn",
  contactSent: "Đã gửi tin nhắn! Chúng tôi sẽ sớm phản hồi bạn.",

  footerTagline: "Kiểm tra thời gian phản xạ miễn phí và so sánh các kết quả của chính bạn.",
  footerRights: "Bảo lưu mọi quyền.",

  shareText:
    "Mình đạt {time} ms trong bài kiểm tra thời gian phản xạ! Bạn có vượt được không? Thử tại reactiontimetestonline.com",

  howToTitle: "Cách làm bài kiểm tra thời gian phản xạ",
  howToSteps: [
    "Nhấp hoặc chạm vào vùng kiểm tra để bắt đầu. Nếu dùng bàn phím, nhấn Tab để chọn vùng này rồi nhấn phím cách hoặc Enter.",
    "Chờ khi vùng kiểm tra còn màu đỏ. Thời gian chờ được chọn ngẫu nhiên từ 1 đến 5 giây.",
    "Khi vùng kiểm tra chuyển xanh, hãy nhấp hoặc chạm nhanh nhất có thể. Nếu phản hồi quá sớm, bạn sẽ phải thử lại.",
    "Hoàn thành 5 vòng hợp lệ để xem thời gian trung bình, thời gian tốt nhất và kết quả từng vòng."
  ],

  scoresTitle: "Điểm số của bạn có ý nghĩa gì?",
  scoresDesc:
    "Để đánh giá thời gian phản xạ, hãy so sánh nhiều lượt thử trên cùng thiết bị và với cùng cách thao tác. Không có một mức phản xạ trung bình chung cho mọi nhiệm vụ và thiết bị. Thời gian trung bình hiển thị là trung bình cộng của 5 vòng hợp lệ của bạn. Các mức dưới đây do trang web quy định, không phải chuẩn chung cho cộng đồng.",

  tipsTitle: "Cách so sánh thời gian phản xạ công bằng hơn",
  tips: [
    "Mỗi lần hãy dùng cùng trình duyệt, màn hình và thiết bị nhập liệu.",
    "Đặt tay ở tư thế thoải mái và giữ tư thế đó trước khi bắt đầu.",
    "Chờ tín hiệu màu xanh thay vì cố đoán khi nào nó xuất hiện.",
    "Hoàn thành cả lượt thử và so sánh thời gian trung bình, đừng chỉ nhìn vào lần nhấp nhanh nhất.",
    "Đóng các thẻ gây xao nhãng và tránh chuyển ứng dụng trong lúc kiểm tra.",
    "Nghỉ một chút nếu mất tập trung và ghi lại mọi thay đổi trong điều kiện thử."
  ],

  longTailTitle: "Kiểm tra phản xạ thị giác và tốc độ nhấp chuột",
  longTailIntro:
    "Dùng bài kiểm tra không cần đăng ký này để ghi lại phản ứng đơn giản trước sự thay đổi màu sắc. Bài kiểm tra chỉ đo một kiểu tương tác trên trình duyệt; ngắm mục tiêu, ra quyết định trong game và phản xạ trong thể thao là những nhiệm vụ khác.",
  longTailItems: [
    {
      title: "Kiểm tra thời gian phản xạ thị giác",
      desc: "Chờ vùng màu đỏ chuyển xanh rồi phản hồi. Bài kiểm tra dùng tín hiệu màu sắc thay vì âm thanh."
    },
    {
      title: "Kiểm tra phản xạ nhấp chuột",
      desc: "Đo khoảng thời gian từ lúc có tín hiệu đến khi bạn nhấp hoặc chạm một lần. Điều này khác với bài kiểm tra số lần nhấp mỗi giây (CPS), vốn đếm các lần nhấp liên tiếp."
    },
    {
      title: "Kiểm tra phản xạ cho game thủ",
      desc: "Ghi lại mốc tham khảo cá nhân trên thiết bị chơi game quen thuộc. Điểm số trên trình duyệt không dự đoán khả năng ngắm bắn, tốc độ ra quyết định hay thứ hạng trong game."
    },
    {
      title: "Lựa chọn thay thế Human Benchmark",
      desc: "Thử bài kiểm tra 5 vòng miễn phí với thời gian trung bình, thời gian tốt nhất và lịch sử lưu trên thiết bị. Bài kiểm tra và thiết bị khác nhau có thể cho kết quả khác nhau."
    }
  ],

  accuracyTitle: "Điều gì ảnh hưởng đến kết quả kiểm tra phản xạ trực tuyến?",
  accuracyItems: [
    "Bài kiểm tra dùng performance.now() để đo khoảng thời gian trong trình duyệt. Công cụ không xác định chính xác lúc tín hiệu bắt đầu hiển thị và không loại bỏ độ trễ của màn hình hay thiết bị nhập liệu; phép đo này không được hiệu chuẩn theo tiêu chuẩn phòng thí nghiệm.",
    "Kết quả trên điện thoại và máy tính có thể khác nhau vì màn hình, trình duyệt và cách xử lý thao tác đầu vào khác nhau. Chạm màn hình cũng khác với nhấp chuột. Hãy dùng cùng thiết bị và cách thao tác khi so sánh các lượt thử."
  ],

  whoTitle: "Bạn có thể dùng bài kiểm tra này để làm gì?",
  whoItems: [
    {
      icon: "🎮",
      title: "Game thủ",
      desc: "Ghi lại thời gian phản ứng với tín hiệu thị giác đơn giản trên thiết bị quen thuộc và so sánh các lượt thử của mình."
    },
    {
      icon: "📱",
      title: "So sánh thiết bị",
      desc: "Khám phá sự khác biệt khi dùng chuột, bàn di chuột hoặc màn hình cảm ứng, nhưng đừng xem chênh lệch đó là phép đo riêng độ trễ phần cứng."
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Bạn bè",
      desc: "So sánh kết quả cho vui. Để công bằng hơn, hãy dùng cùng thiết bị và cùng quy tắc."
    },
    {
      icon: "🧠",
      title: "Học sinh, sinh viên",
      desc: "Tìm hiểu kết quả từng vòng, cách tính trung bình và giới hạn của phép đo. Công cụ này chưa được xác nhận để dùng trong nghiên cứu hoặc chẩn đoán."
    }
  ],

  faqTitle: "Câu hỏi thường gặp",
  faqs: [
    {
      q: "Luyện tập có giúp tôi phản xạ nhanh hơn không?",
      a: "Luyện tập có thể giúp bạn quen với bài kiểm tra này và giữ điều kiện thử ổn định hơn. Điểm thấp hơn ở đây tự nó không chứng minh khả năng chơi game, chơi thể thao hay năng lực nhận thức nói chung đã cải thiện. Hãy so sánh các lượt thử đầy đủ và tránh đoán trước tín hiệu.",
      guideSlug: "how-to-improve-reaction-time"
    },
    {
      q: "Vì sao kết quả của tôi thay đổi giữa các vòng?",
      a: "Mức độ sẵn sàng và thời điểm phản hồi của bạn có thể thay đổi; độ trễ của trình duyệt hoặc thiết bị cũng vậy. Một lần đoán trước hoặc bị gián đoạn có thể khiến kết quả riêng lẻ gây hiểu lầm. Thời gian trung bình và kết quả từng vòng giúp bạn thấy sự dao động đó.",
      guideSlug: "what-is-reaction-time"
    },
    {
      q: "Tôi có thể dùng phím cách để làm bài kiểm tra không?",
      a: "Có. Nhấn Tab để chọn vùng kiểm tra, sau đó nhấn phím cách hoặc Enter để bắt đầu và phản hồi khi vùng này chuyển xanh. Hãy thả phím giữa các lần nhấn. Khi so sánh các lượt thử, hãy giữ cùng cách thao tác; kết quả dùng bàn phím và chuột không thể so sánh trực tiếp."
    }
  ],
};

export const translations: Record<Lang, Translations> = {
  en,
  zh,
  ko,
  ja,
  de,
  fr,
  vi,
};

export function t(lang: Lang): Translations {
  return translations[lang] || translations.en;
}
