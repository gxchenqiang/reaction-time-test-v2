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
  percentile: string;
  percentileText: string;
  fasterThan: string;
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
  faqs: { q: string; a: string }[];
}

const en: Translations = {
  siteTitle: "Reaction Time Test – How Fast Are You?",
  siteDescription:
    "Free online visual reaction time test. Click when the screen turns green, measure reflex speed in milliseconds, compare your 5-round average, and train for gaming, sport, and focus.",

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
  percentile: "Percentile",
  percentileText: "faster than {pct}% of people",
  fasterThan: "You are faster than",
  shareResult: "Share Result",
  shareOnTwitter: "Share on X",
  saveImage: "Save Image",
  playAgain: "Play Again",
  history: "History",
  noHistory: "No history yet. Play a round!",
  clearHistory: "Clear History",

  ms: "ms",
  attempts: "attempts",

  funFactsTitle: "Did You Know?",
  funFacts: [
    "The average human reaction time is around 250ms.",
    "F1 drivers have an average reaction time of ~200ms.",
    "Your reaction time slows down as you age.",
    "Caffeine can improve reaction time by 10–20ms.",
    "The fastest recorded human reaction time is ~100ms.",
    "Athletes typically have reaction times of 160–200ms.",
    "Visual reaction time is slower than auditory reaction time.",
    "Sleep deprivation can double your reaction time.",
  ],

  catLightning: "Lightning Fast",
  catFast: "Fast",
  catAverage: "Average",
  catSlow: "Slow",
  catVerySlow: "Very Slow",
  catLightningDesc: "Superhuman reflexes! Under 150ms",
  catFastDesc: "Great reflexes! 150–200ms",
  catAverageDesc: "Normal human range. 200–300ms",
  catSlowDesc: "A bit slow. 300–400ms",
  catVerySlowDesc: "Try again after some rest! Over 400ms",

  aboutTestTitle: "How Does the Test Work?",
  aboutTestDesc:
    "The screen starts red. After a random delay (1–5 seconds), it turns green. Click as fast as you can when you see green. This free click reaction test measures the time between the visual cue and your mouse, tap, or keyboard response. Complete 5 rounds to get a steadier average reaction time.",

  blogTitle: "Reaction Time Blog",
  blogDescription:
    "Learn everything about reaction time, reflexes, and how to improve your response speed.",

  aboutTitle: "About Reaction Time Test",
  aboutDescription:
    "ReactionTimeTestOnline.com is a free tool to measure and improve your reaction time. Built for athletes, gamers, scientists, and anyone curious about their reflexes.",

  contactTitle: "Contact Us",
  contactDescription:
    "Have a question, suggestion, or feedback? We'd love to hear from you.",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactMessage: "Your Message",
  contactSend: "Send Message",
  contactSent: "Message sent! We'll get back to you soon.",

  footerTagline: "Test and improve your reaction time for free.",
  footerRights: "All rights reserved.",

  shareText:
    "I got {time}ms on the Reaction Time Test! Can you beat me? Try it at reactiontimetestonline.com",

  howToTitle: "How to Take the Reaction Time Test",
  howToSteps: [
    "Click anywhere on the test area to begin.",
    "The screen turns red — wait patiently. Don't click yet!",
    "The moment it flashes green, click as fast as you can.",
    "Complete all 5 rounds to get your average reaction time and ranking.",
  ],

  scoresTitle: "What Does Your Score Mean?",
  scoresDesc:
    "Reaction time varies by age, fitness, and practice. Here's how different scores compare to the general population:",

  tipsTitle: "How to Improve Your Reaction Time",
  tips: [
    "Sleep well — fatigue can double your reaction time.",
    "Stay hydrated — dehydration slows nerve signal transmission.",
    "Exercise regularly — cardiovascular fitness sharpens reflexes.",
    "Practice consistently — like any skill, reaction time improves with repetition.",
    "Use the same browser, monitor, and mouse when benchmarking your reaction speed.",
    "Cut distractions — full focus leads to faster responses in any reflex test.",
    "Moderate caffeine can give a small, temporary reaction-speed boost.",
  ],

  longTailTitle: "Reaction Tests for Gaming, Sport, and Focus",
  longTailIntro:
    "Use this no-registration reflex test as a quick benchmark for visual reaction time, mouse click speed, hand-eye coordination, and simple cognitive processing speed.",
  longTailItems: [
    {
      title: "Visual reaction time test",
      desc: "Measure how quickly you respond to a clear color change, the classic setup used by many online reaction time benchmarks.",
    },
    {
      title: "Mouse and click reaction test",
      desc: "Check the delay between seeing the signal and pressing your mouse, trackpad, screen, or keyboard.",
    },
    {
      title: "Gaming reflex training",
      desc: "Build a simple reaction baseline for FPS games, rhythm games, racing games, and esports warmups.",
    },
    {
      title: "Human benchmark alternative",
      desc: "Run a fast 5-round reaction time benchmark online without creating an account or installing an app.",
    },
  ],

  accuracyTitle: "What Affects an Online Reaction Time Result?",
  accuracyItems: [
    "Display refresh rate, browser rendering, input latency, and wireless devices can add a few milliseconds to any browser-based reaction time test.",
    "A 5-round average is more useful than one lucky click because focus, anticipation, and fatigue change from round to round.",
    "For the cleanest benchmark, test on the same device, close distracting tabs, use a responsive mouse, and compare results over time.",
  ],

  whoTitle: "Who Can Benefit From This Test?",
  whoItems: [
    {
      icon: "🎮",
      title: "Gamers",
      desc: "Measure gaming reaction time and train the fast visual reflexes used in FPS, MOBA, rhythm, and racing games.",
    },
    {
      icon: "🏃",
      title: "Athletes",
      desc: "Sprinters, martial artists, and ball-sport players can use a quick reflex test to track response speed.",
    },
    {
      icon: "🚗",
      title: "Drivers",
      desc: "A 50ms difference in visual reaction time can change braking distance at highway speeds.",
    },
    {
      icon: "🧠",
      title: "Researchers & Students",
      desc: "A simple browser reaction time tool for studying attention, fatigue, caffeine, sleep, and processing speed.",
    },
  ],

  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What is a good reaction time?",
      a: "Below 200ms is considered fast. The average person scores around 250ms. Elite athletes and pro gamers often achieve 150–200ms.",
    },
    {
      q: "Why does my score vary between rounds?",
      a: "Reaction time naturally fluctuates due to focus, fatigue, and anticipation. That's why we average 5 rounds to give you a reliable result.",
    },
    {
      q: "Is this test accurate?",
      a: "Yes. We use the browser's high-resolution timer (performance.now()) for precise millisecond measurement, and timing starts only after the green screen is fully painted on your display.",
    },
    {
      q: "Can I improve my reaction time with practice?",
      a: "Absolutely. Regular practice, quality sleep, exercise, and focus training can meaningfully reduce your reaction time over weeks or months.",
    },
    {
      q: "Does age affect reaction time?",
      a: "Yes. Reaction time typically peaks in your 20s and gradually slows with age. However, consistent practice can significantly offset this decline.",
    },
  ],
};

const zh: Translations = {
  siteTitle: "反应时间测试 – 你的反应有多快？",
  siteDescription:
    "免费在线视觉反应时间测试。屏幕变绿时立即点击，以毫秒测量反应速度，查看 5 轮平均成绩，适合游戏、运动和专注力训练。",

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
  percentile: "百分位",
  percentileText: "比 {pct}% 的人更快",
  fasterThan: "你比",
  shareResult: "分享成绩",
  shareOnTwitter: "分享到 X",
  saveImage: "保存图片",
  playAgain: "再玩一次",
  history: "历史记录",
  noHistory: "还没有记录，快来玩一局吧！",
  clearHistory: "清除记录",

  ms: "毫秒",
  attempts: "次",

  funFactsTitle: "你知道吗？",
  funFacts: [
    "人类平均反应时间约为 250 毫秒。",
    "F1 赛车手的平均反应时间约为 200 毫秒。",
    "随着年龄增长，反应时间会变慢。",
    "咖啡因可以将反应时间提升 10–20 毫秒。",
    "人类有记录的最快反应时间约为 100 毫秒。",
    "运动员的反应时间通常在 160–200 毫秒之间。",
    "视觉反应时间比听觉反应时间慢。",
    "睡眠不足可能使你的反应时间翻倍。",
  ],

  catLightning: "闪电级",
  catFast: "快速",
  catAverage: "普通",
  catSlow: "偏慢",
  catVerySlow: "很慢",
  catLightningDesc: "超人级反应！低于 150ms",
  catFastDesc: "反应很快！150–200ms",
  catAverageDesc: "正常人类范围。200–300ms",
  catSlowDesc: "有点慢。300–400ms",
  catVerySlowDesc: "休息一下再来！超过 400ms",

  aboutTestTitle: "测试如何进行？",
  aboutTestDesc:
    "屏幕开始时为红色。随机等待 1–5 秒后变为绿色。当你看到绿色时尽快点击。这个免费鼠标反应测试会测量视觉信号出现到你点击、触屏或按键之间的时间。完成 5 轮后可获得更稳定的平均反应时间。",

  blogTitle: "反应时间博客",
  blogDescription: "了解反应时间、反射和如何提升你的反应速度的一切知识。",

  aboutTitle: "关于反应时间测试",
  aboutDescription:
    "ReactionTimeTestOnline.com 是一个免费的反应时间测量和提升工具，适合运动员、游戏玩家、科研人员以及任何对自己反应速度感到好奇的人。",

  contactTitle: "联系我们",
  contactDescription: "有问题、建议或反馈？我们很乐意听到你的声音。",
  contactName: "你的名字",
  contactEmail: "你的邮箱",
  contactMessage: "你的留言",
  contactSend: "发送消息",
  contactSent: "消息已发送！我们会尽快回复你。",

  footerTagline: "免费测试和提升你的反应时间。",
  footerRights: "保留所有权利。",

  shareText:
    "我在反应时间测试中获得了 {time}ms！你能超过我吗？在 reactiontimetestonline.com 来挑战吧",

  howToTitle: "如何进行反应时间测试",
  howToSteps: [
    "点击测试区域任意位置开始。",
    "屏幕变红——请耐心等待，不要提前点击！",
    "屏幕变绿的瞬间，尽快点击。",
    "完成 5 轮测试，获取你的平均反应时间和排名。",
  ],

  scoresTitle: "你的成绩代表什么？",
  scoresDesc:
    "反应时间因年龄、体能和练习程度而异。以下是不同成绩与普通人群的对比：",

  tipsTitle: "如何提升反应时间",
  tips: [
    "保证充足睡眠——疲劳可使反应时间加倍。",
    "多喝水——脱水会减慢神经信号传递速度。",
    "坚持有氧运动——心肺健康有助于提升反射能力。",
    "持续练习——和任何技能一样，反应时间随练习改善。",
    "使用同一浏览器、显示器和鼠标测试，便于比较反应速度变化。",
    "减少干扰——全神贯注能让各种反应力测试成绩更稳定。",
    "适量咖啡因可带来短暂、小幅的反应速度提升。",
  ],

  longTailTitle: "适合游戏、运动和专注训练的反应测试",
  longTailIntro:
    "无需注册即可使用这个在线反射测试，快速测量视觉反应时间、鼠标点击反应、手眼协调和基础认知处理速度。",
  longTailItems: [
    {
      title: "视觉反应时间测试",
      desc: "通过屏幕颜色变化测量你看到信号后做出反应的速度，这是常见在线反应时间基准测试方式。",
    },
    {
      title: "鼠标与点击反应测试",
      desc: "检测从看到提示到按下鼠标、触控板、屏幕或键盘之间的延迟。",
    },
    {
      title: "游戏反应速度训练",
      desc: "为 FPS、音游、竞速游戏和电竞热身建立简单的反应速度基准。",
    },
    {
      title: "Human Benchmark 替代工具",
      desc: "无需账号、无需安装应用，直接在线完成 5 轮反应时间基准测试。",
    },
  ],

  accuracyTitle: "哪些因素会影响在线反应时间结果？",
  accuracyItems: [
    "显示器刷新率、浏览器渲染、输入延迟和无线设备都可能让浏览器反应时间测试增加几毫秒误差。",
    "5 轮平均值比单次幸运点击更有参考价值，因为专注度、预判和疲劳会让每轮成绩波动。",
    "想获得更干净的基准结果，建议使用同一设备测试，关闭干扰标签页，并长期对比成绩趋势。",
  ],

  whoTitle: "哪些人适合做这个测试？",
  whoItems: [
    {
      icon: "🎮",
      title: "游戏玩家",
      desc: "测量游戏反应时间，训练 FPS、MOBA、音游和竞速游戏中常用的视觉反射能力。",
    },
    {
      icon: "🏃",
      title: "运动员",
      desc: "短跑、格斗和球类运动员可以用快速反射测试追踪反应速度。",
    },
    {
      icon: "🚗",
      title: "驾驶员",
      desc: "高速行驶时，50ms 的视觉反应时间差异会影响刹车距离。",
    },
    {
      icon: "🧠",
      title: "研究者与学生",
      desc: "一个浏览器反应时间工具，可用于观察注意力、疲劳、咖啡因、睡眠和处理速度。",
    },
  ],

  faqTitle: "常见问题",
  faqs: [
    {
      q: "多少毫秒算好成绩？",
      a: "低于 200ms 属于较快水平。普通人的平均成绩约为 250ms，精英运动员和职业玩家通常能达到 150–200ms。",
    },
    {
      q: "为什么每轮成绩不一样？",
      a: "反应时间会因专注度、疲劳和预判而自然波动。这正是我们取 5 轮平均值的原因。",
    },
    {
      q: "这个测试准确吗？",
      a: "准确。我们使用浏览器的高精度计时器（performance.now()）进行毫秒级精确测量，并且只在绿色画面真正绘制到屏幕后才开始计时。",
    },
    {
      q: "练习能提升反应时间吗？",
      a: "完全可以。坚持练习、保证睡眠、积极锻炼和专注力训练，几周到几个月内就能明显改善你的反应时间。",
    },
    {
      q: "年龄会影响反应时间吗？",
      a: "会的。反应时间通常在 20 多岁达到峰值，随年龄增长逐渐变慢。但坚持训练可以显著延缓这一衰退。",
    },
  ],
};

const ko: Translations = {
  siteTitle: "반응 속도 테스트 – 당신의 반응은 얼마나 빠른가요?",
  siteDescription:
    "무료 온라인 시각 반응 시간 테스트입니다. 화면이 초록색으로 바뀌면 즉시 클릭하고, 밀리초 단위 반응 속도와 5라운드 평균을 확인해 게임, 스포츠, 집중력 훈련에 활용하세요.",

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
  percentile: "백분위",
  percentileText: "{pct}%보다 빠름",
  fasterThan: "당신은",
  shareResult: "결과 공유",
  shareOnTwitter: "X에 공유",
  saveImage: "이미지 저장",
  playAgain: "다시 플레이",
  history: "기록",
  noHistory: "아직 기록이 없어요. 한 번 해보세요!",
  clearHistory: "기록 삭제",

  ms: "ms",
  attempts: "회",

  funFactsTitle: "알고 계셨나요?",
  funFacts: [
    "인간의 평균 반응 시간은 약 250ms입니다.",
    "F1 드라이버의 평균 반응 시간은 약 200ms입니다.",
    "나이가 들수록 반응 시간이 느려집니다.",
    "카페인은 반응 시간을 10–20ms 향상시킬 수 있습니다.",
    "기록된 가장 빠른 인간 반응 시간은 약 100ms입니다.",
    "운동선수의 반응 시간은 보통 160–200ms입니다.",
    "시각 반응 시간은 청각 반응 시간보다 느립니다.",
    "수면 부족은 반응 시간을 두 배로 늘릴 수 있습니다.",
  ],

  catLightning: "번개 같음",
  catFast: "빠름",
  catAverage: "평균",
  catSlow: "느림",
  catVerySlow: "매우 느림",
  catLightningDesc: "초인적인 반사신경! 150ms 미만",
  catFastDesc: "훌륭한 반사신경! 150–200ms",
  catAverageDesc: "정상 인간 범위. 200–300ms",
  catSlowDesc: "조금 느려요. 300–400ms",
  catVerySlowDesc: "휴식 후 다시 도전하세요! 400ms 초과",

  aboutTestTitle: "테스트는 어떻게 진행되나요?",
  aboutTestDesc:
    "화면이 빨간색으로 시작됩니다. 1–5초의 무작위 지연 후 초록색으로 바뀝니다. 초록색을 보는 순간 최대한 빠르게 클릭하세요. 이 무료 클릭 반응 테스트는 시각 신호와 마우스, 터치, 키보드 반응 사이의 시간을 측정합니다. 5라운드를 완료하면 더 안정적인 평균 반응 시간을 확인할 수 있습니다.",

  blogTitle: "반응 속도 블로그",
  blogDescription: "반응 시간, 반사 신경, 반응 속도 향상 방법에 대해 알아보세요.",

  aboutTitle: "반응 속도 테스트 소개",
  aboutDescription:
    "ReactionTimeTestOnline.com은 반응 시간을 측정하고 향상시키기 위한 무료 도구입니다. 운동선수, 게이머, 연구자, 그리고 자신의 반사 신경이 궁금한 모든 분을 위한 서비스입니다.",

  contactTitle: "문의하기",
  contactDescription: "질문, 제안 또는 피드백이 있으신가요? 연락해 주세요.",
  contactName: "이름",
  contactEmail: "이메일",
  contactMessage: "메시지",
  contactSend: "메시지 보내기",
  contactSent: "메시지가 전송되었습니다! 곧 답변 드리겠습니다.",

  footerTagline: "무료로 반응 시간을 테스트하고 향상시키세요.",
  footerRights: "All rights reserved.",

  shareText:
    "반응 속도 테스트에서 {time}ms를 기록했어요! 나보다 빠를 수 있나요? reactiontimetestonline.com에서 도전해보세요",

  howToTitle: "반응 속도 테스트 방법",
  howToSteps: [
    "테스트 영역 어디든 클릭하여 시작하세요.",
    "화면이 빨간색으로 바뀝니다 — 참을성 있게 기다리세요. 아직 클릭하지 마세요!",
    "초록색이 보이는 순간, 최대한 빠르게 클릭하세요.",
    "5라운드를 완료하면 평균 반응 속도와 순위를 확인할 수 있습니다.",
  ],

  scoresTitle: "결과가 의미하는 것은?",
  scoresDesc:
    "반응 속도는 나이, 체력, 연습량에 따라 달라집니다. 다양한 점수가 일반 인구와 어떻게 비교되는지 알아보세요:",

  tipsTitle: "반응 속도 향상 방법",
  tips: [
    "충분히 자세요 — 피로는 반응 속도를 두 배로 늦출 수 있습니다.",
    "수분을 충분히 섭취하세요 — 탈수는 신경 신호 전달을 느리게 합니다.",
    "규칙적으로 운동하세요 — 심폐 체력이 반사 신경을 강화합니다.",
    "꾸준히 연습하세요 — 다른 기술처럼 반복 훈련으로 향상됩니다.",
    "같은 브라우저, 모니터, 마우스로 측정하면 반응 속도 변화를 비교하기 쉽습니다.",
    "집중력을 유지하세요 — 산만함을 줄이면 모든 반사 신경 테스트에서 반응이 빨라집니다.",
    "적당한 카페인은 일시적으로 반응 속도를 약간 높일 수 있습니다.",
  ],

  longTailTitle: "게임, 스포츠, 집중력을 위한 반응 테스트",
  longTailIntro:
    "회원가입 없이 사용하는 온라인 반사 신경 테스트로 시각 반응 시간, 마우스 클릭 반응, 손-눈 협응, 간단한 인지 처리 속도를 빠르게 벤치마크하세요.",
  longTailItems: [
    {
      title: "시각 반응 시간 테스트",
      desc: "화면 색상 변화에 얼마나 빠르게 반응하는지 측정하는 대표적인 온라인 반응 시간 벤치마크입니다.",
    },
    {
      title: "마우스 및 클릭 반응 테스트",
      desc: "신호를 본 뒤 마우스, 트랙패드, 화면 또는 키보드를 누르기까지의 지연 시간을 확인합니다.",
    },
    {
      title: "게임 반사 신경 훈련",
      desc: "FPS, 리듬 게임, 레이싱 게임, e스포츠 워밍업을 위한 간단한 반응 속도 기준을 만듭니다.",
    },
    {
      title: "Human Benchmark 대안",
      desc: "계정 생성이나 앱 설치 없이 온라인에서 빠르게 5라운드 반응 시간 벤치마크를 실행하세요.",
    },
  ],

  accuracyTitle: "온라인 반응 시간 결과에 영향을 주는 요소",
  accuracyItems: [
    "디스플레이 주사율, 브라우저 렌더링, 입력 지연, 무선 장치는 브라우저 기반 반응 시간 테스트에 몇 밀리초를 더할 수 있습니다.",
    "집중력, 예측, 피로는 라운드마다 달라지므로 한 번의 운 좋은 클릭보다 5라운드 평균이 더 유용합니다.",
    "더 깨끗한 벤치마크를 원한다면 같은 기기에서 테스트하고, 방해되는 탭을 닫고, 반응형 마우스로 시간에 따른 추세를 비교하세요.",
  ],

  whoTitle: "누가 이 테스트를 활용할 수 있나요?",
  whoItems: [
    {
      icon: "🎮",
      title: "게이머",
      desc: "FPS, MOBA, 리듬, 레이싱 게임에서 쓰이는 시각 반사 신경과 게임 반응 시간을 측정하세요.",
    },
    {
      icon: "🏃",
      title: "운동선수",
      desc: "단거리, 격투기, 구기 종목 선수는 빠른 반사 테스트로 반응 속도를 추적할 수 있습니다.",
    },
    {
      icon: "🚗",
      title: "운전자",
      desc: "고속 주행에서는 50ms의 시각 반응 시간 차이도 제동 거리에 영향을 줄 수 있습니다.",
    },
    {
      icon: "🧠",
      title: "연구자 및 학생",
      desc: "주의력, 피로, 카페인, 수면, 처리 속도를 관찰하는 브라우저 반응 시간 도구입니다.",
    },
  ],

  faqTitle: "자주 묻는 질문",
  faqs: [
    {
      q: "좋은 반응 속도는 얼마인가요?",
      a: "200ms 미만이면 빠른 편입니다. 일반인의 평균은 약 250ms이며, 엘리트 운동선수와 프로 게이머는 보통 150–200ms를 달성합니다.",
    },
    {
      q: "왜 매 라운드 결과가 다른가요?",
      a: "집중도, 피로, 예측으로 인해 반응 시간이 자연스럽게 변동됩니다. 그래서 5라운드 평균을 사용해 신뢰할 수 있는 결과를 제공합니다.",
    },
    {
      q: "이 테스트는 정확한가요?",
      a: "네. 브라우저의 고해상도 타이머(performance.now())를 사용하여 정밀한 밀리초 단위로 측정하며, 초록색 화면이 실제로 렌더링된 후에만 타이머를 시작합니다.",
    },
    {
      q: "연습으로 반응 속도를 향상시킬 수 있나요?",
      a: "물론입니다. 꾸준한 연습, 충분한 수면, 운동, 집중력 훈련을 통해 몇 주에서 몇 달 안에 반응 속도를 크게 개선할 수 있습니다.",
    },
    {
      q: "나이가 반응 속도에 영향을 미치나요?",
      a: "네. 반응 속도는 보통 20대에 최고조에 달하고 나이가 들면서 점차 느려집니다. 하지만 꾸준한 연습으로 이 저하를 상당히 늦출 수 있습니다.",
    },
  ],
};

const ja: Translations = {
  siteTitle: "反応時間テスト – あなたの反応速度は？",
  siteDescription:
    "無料のオンライン視覚反応時間テストです。画面が緑に変わったらすぐクリックし、ミリ秒単位の反応速度と5ラウンド平均を確認して、ゲーム・スポーツ・集中力トレーニングに活用できます。",

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
  percentile: "パーセンタイル",
  percentileText: "{pct}%の人より速い",
  fasterThan: "あなたは",
  shareResult: "結果をシェア",
  shareOnTwitter: "Xでシェア",
  saveImage: "画像を保存",
  playAgain: "もう一度",
  history: "履歴",
  noHistory: "まだ記録がありません。やってみましょう！",
  clearHistory: "履歴を削除",

  ms: "ms",
  attempts: "回",

  funFactsTitle: "ご存知ですか？",
  funFacts: [
    "人間の平均反応時間は約250msです。",
    "F1ドライバーの平均反応時間は約200msです。",
    "年齢とともに反応時間は遅くなります。",
    "カフェインは反応時間を10〜20ms改善できます。",
    "記録された最速の人間の反応時間は約100msです。",
    "アスリートの反応時間は通常160〜200msです。",
    "視覚的反応時間は聴覚的反応時間より遅いです。",
    "睡眠不足は反応時間を2倍にする可能性があります。",
  ],

  catLightning: "稲妻級",
  catFast: "速い",
  catAverage: "普通",
  catSlow: "遅め",
  catVerySlow: "とても遅い",
  catLightningDesc: "超人的な反射神経！150ms未満",
  catFastDesc: "素晴らしい反射神経！150–200ms",
  catAverageDesc: "一般的な人間の範囲。200–300ms",
  catSlowDesc: "少し遅め。300–400ms",
  catVerySlowDesc: "休んでから再挑戦！400ms超",

  aboutTestTitle: "テストの仕組みは？",
  aboutTestDesc:
    "画面は赤でスタートします。1〜5秒のランダムな待機後に緑に変わります。緑を見たらできるだけ早くクリックしてください。この無料クリック反応テストは、視覚的な合図からマウス、タップ、キーボード入力までの時間を測定します。5ラウンド完了すると、より安定した平均反応時間がわかります。",

  blogTitle: "反応時間ブログ",
  blogDescription: "反応時間、反射神経、反応速度の向上方法について学びましょう。",

  aboutTitle: "反応時間テストについて",
  aboutDescription:
    "ReactionTimeTestOnline.comは、反応時間を測定・改善するための無料ツールです。アスリート、ゲーマー、研究者、自分の反射神経が気になるすべての人のために作られています。",

  contactTitle: "お問い合わせ",
  contactDescription: "ご質問、ご提案、フィードバックはこちらからどうぞ。",
  contactName: "お名前",
  contactEmail: "メールアドレス",
  contactMessage: "メッセージ",
  contactSend: "送信",
  contactSent: "送信完了！近日中にご返信いたします。",

  footerTagline: "無料で反応時間をテスト・改善しましょう。",
  footerRights: "All rights reserved.",

  shareText:
    "反応時間テストで{time}msを記録しました！私より速くできますか？reactiontimetestonline.comで試してみてください",

  howToTitle: "反応時間テストの受け方",
  howToSteps: [
    "テストエリアのどこかをクリックしてスタート。",
    "画面が赤くなります — 焦らず待ちましょう。まだクリックしないで！",
    "緑に変わった瞬間、できるだけ速くクリックしてください。",
    "5ラウンド完了すると、平均反応時間とランキングがわかります。",
  ],

  scoresTitle: "スコアが意味すること",
  scoresDesc:
    "反応時間は年齢・体力・練習量によって異なります。各スコアが一般的な人々と比べてどうなのかを確認しましょう：",

  tipsTitle: "反応時間を改善する方法",
  tips: [
    "十分な睡眠を取る — 疲労は反応時間を2倍にすることがあります。",
    "水分補給を忘れずに — 脱水は神経信号の伝達を遅くします。",
    "定期的に運動する — 心肺機能が高いほど反射神経が鋭くなります。",
    "継続的に練習する — 繰り返しトレーニングで反応時間は改善されます。",
    "同じブラウザ、モニター、マウスで測ると、反応速度の変化を比較しやすくなります。",
    "集中力を保つ — 気が散らない環境ほど反射神経テストの結果は安定します。",
    "適度なカフェインは一時的に反応速度をわずかに高めることがあります。",
  ],

  longTailTitle: "ゲーム、スポーツ、集中力のための反応テスト",
  longTailIntro:
    "登録不要のオンライン反射神経テストとして、視覚反応時間、マウスクリック反応、手と目の協応、シンプルな認知処理速度をすばやく測定できます。",
  longTailItems: [
    {
      title: "視覚反応時間テスト",
      desc: "画面の色変化にどれだけ速く反応できるかを測る、オンライン反応時間ベンチマークの定番形式です。",
    },
    {
      title: "マウス・クリック反応テスト",
      desc: "合図を見てからマウス、トラックパッド、画面、キーボードを押すまでの遅延を確認します。",
    },
    {
      title: "ゲーム反射神経トレーニング",
      desc: "FPS、音楽ゲーム、レースゲーム、eスポーツのウォームアップ向けに反応速度の基準を作れます。",
    },
    {
      title: "Human Benchmark の代替",
      desc: "アカウント作成やアプリのインストールなしで、5ラウンドの反応時間ベンチマークをすぐに実行できます。",
    },
  ],

  accuracyTitle: "オンライン反応時間の結果に影響する要素",
  accuracyItems: [
    "ディスプレイのリフレッシュレート、ブラウザ描画、入力遅延、無線デバイスは、ブラウザ反応時間テストに数ミリ秒を加えることがあります。",
    "集中度、予測、疲労はラウンドごとに変わるため、1回の幸運なクリックより5ラウンド平均のほうが参考になります。",
    "よりきれいな基準値を得るには、同じデバイスで測定し、不要なタブを閉じ、反応のよいマウスで継続的に比較しましょう。",
  ],

  whoTitle: "このテストが役立つ方",
  whoItems: [
    {
      icon: "🎮",
      title: "ゲーマー",
      desc: "FPS、MOBA、音楽ゲーム、レースゲームで使う視覚反射とゲーム反応時間を測定できます。",
    },
    {
      icon: "🏃",
      title: "アスリート",
      desc: "短距離、格闘技、球技の選手は、簡単な反射テストで反応速度を追跡できます。",
    },
    {
      icon: "🚗",
      title: "ドライバー",
      desc: "高速走行では、50msの視覚反応時間の差が制動距離に影響することがあります。",
    },
    {
      icon: "🧠",
      title: "研究者・学生",
      desc: "注意力、疲労、カフェイン、睡眠、処理速度を観察するブラウザ反応時間ツールです。",
    },
  ],

  faqTitle: "よくある質問",
  faqs: [
    {
      q: "良い反応時間とはどれくらいですか？",
      a: "200ms未満は速い部類です。一般人の平均は約250msで、エリートアスリートやプロゲーマーは150〜200msを達成することが多いです。",
    },
    {
      q: "なぜラウンドごとにスコアが変わるのですか？",
      a: "集中度、疲労、予測などにより反応時間は自然に変動します。そのため5ラウンドの平均値で信頼できる結果を出しています。",
    },
    {
      q: "このテストは正確ですか？",
      a: "はい。ブラウザの高精度タイマー（performance.now()）で正確なミリ秒測定を行い、緑の画面が実際にレンダリングされた後にのみ計測を開始します。",
    },
    {
      q: "練習で反応時間を改善できますか？",
      a: "もちろんです。定期的な練習、十分な睡眠、運動、集中力トレーニングにより、数週間から数ヶ月で反応時間を大幅に改善できます。",
    },
    {
      q: "年齢は反応時間に影響しますか？",
      a: "はい。反応時間は通常20代にピークを迎え、年齢とともに徐々に遅くなります。ただし、継続的な練習でこの低下を大幅に抑えることができます。",
    },
  ],
};

const de: Translations = {
  siteTitle: "Reaktionszeittest – Wie schnell reagierst du?",
  siteDescription:
    "Kostenloser visueller Reaktionszeittest online. Klicke, sobald der Bildschirm grün wird, miss deine Reflexe in Millisekunden und nutze den 5-Runden-Durchschnitt für Gaming, Sport und Fokus.",

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
  percentile: "Perzentile",
  percentileText: "schneller als {pct}% der Menschen",
  fasterThan: "Du bist schneller als",
  shareResult: "Ergebnis teilen",
  shareOnTwitter: "Auf X teilen",
  saveImage: "Bild speichern",
  playAgain: "Nochmal spielen",
  history: "Verlauf",
  noHistory: "Noch kein Verlauf. Spiel eine Runde!",
  clearHistory: "Verlauf löschen",

  ms: "ms",
  attempts: "Versuche",

  funFactsTitle: "Wusstest du?",
  funFacts: [
    "Die durchschnittliche menschliche Reaktionszeit beträgt ca. 250ms.",
    "F1-Fahrer haben eine durchschnittliche Reaktionszeit von ~200ms.",
    "Mit zunehmendem Alter wird die Reaktionszeit langsamer.",
    "Koffein kann die Reaktionszeit um 10–20ms verbessern.",
    "Die schnellste aufgezeichnete menschliche Reaktionszeit beträgt ~100ms.",
    "Athleten haben typischerweise Reaktionszeiten von 160–200ms.",
    "Die visuelle Reaktionszeit ist langsamer als die auditive.",
    "Schlafentzug kann deine Reaktionszeit verdoppeln.",
  ],

  catLightning: "Blitzschnell",
  catFast: "Schnell",
  catAverage: "Durchschnittlich",
  catSlow: "Langsam",
  catVerySlow: "Sehr langsam",
  catLightningDesc: "Übermenschliche Reflexe! Unter 150ms",
  catFastDesc: "Tolle Reflexe! 150–200ms",
  catAverageDesc: "Normaler menschlicher Bereich. 200–300ms",
  catSlowDesc: "Etwas langsam. 300–400ms",
  catVerySlowDesc: "Nach einer Pause nochmal versuchen! Über 400ms",

  aboutTestTitle: "Wie funktioniert der Test?",
  aboutTestDesc:
    "Der Bildschirm beginnt rot. Nach einer zufälligen Verzögerung (1–5 Sekunden) wird er grün. Klicke so schnell wie möglich, wenn du Grün siehst. Dieser kostenlose Klick-Reaktionstest misst die Zeit zwischen visuellem Signal und Maus-, Touch- oder Tastatureingabe. Absolviere 5 Runden für eine stabilere durchschnittliche Reaktionszeit.",

  blogTitle: "Reaktionszeit-Blog",
  blogDescription:
    "Lerne alles über Reaktionszeit, Reflexe und wie du deine Reaktionsgeschwindigkeit verbessern kannst.",

  aboutTitle: "Über den Reaktionszeittest",
  aboutDescription:
    "ReactionTimeTestOnline.com ist ein kostenloses Tool zur Messung und Verbesserung deiner Reaktionszeit. Entwickelt für Athleten, Gamer, Wissenschaftler und alle, die neugierig auf ihre Reflexe sind.",

  contactTitle: "Kontakt",
  contactDescription:
    "Hast du eine Frage, einen Vorschlag oder Feedback? Wir freuen uns von dir zu hören.",
  contactName: "Dein Name",
  contactEmail: "Deine E-Mail",
  contactMessage: "Deine Nachricht",
  contactSend: "Nachricht senden",
  contactSent: "Nachricht gesendet! Wir melden uns bald.",

  footerTagline: "Teste und verbessere deine Reaktionszeit kostenlos.",
  footerRights: "Alle Rechte vorbehalten.",

  shareText:
    "Ich habe {time}ms im Reaktionszeittest erreicht! Kannst du mich schlagen? Probiere es auf reactiontimetestonline.com",

  howToTitle: "Wie führe ich den Reaktionszeittest durch?",
  howToSteps: [
    "Klicke irgendwo auf den Testbereich, um zu beginnen.",
    "Der Bildschirm wird rot — warte geduldig. Noch nicht klicken!",
    "Sobald er grün aufleuchtet, klicke so schnell wie möglich.",
    "Absolviere alle 5 Runden für deine durchschnittliche Reaktionszeit und dein Ranking.",
  ],

  scoresTitle: "Was bedeuten deine Ergebnisse?",
  scoresDesc:
    "Die Reaktionszeit variiert je nach Alter, Fitness und Übung. So vergleichen sich verschiedene Ergebnisse mit der Allgemeinbevölkerung:",

  tipsTitle: "Wie du deine Reaktionszeit verbessern kannst",
  tips: [
    "Gut schlafen — Müdigkeit kann deine Reaktionszeit verdoppeln.",
    "Ausreichend trinken — Dehydration verlangsamt die Nervensignalübertragung.",
    "Regelmäßig Sport treiben — Ausdauertraining schärft die Reflexe.",
    "Konsequent üben — wie jede Fähigkeit verbessert sich die Reaktionszeit durch Wiederholung.",
    "Nutze denselben Browser, Monitor und dieselbe Maus, wenn du deine Reaktionsgeschwindigkeit vergleichst.",
    "Ablenkungen minimieren — volle Konzentration verbessert die Ergebnisse in jedem Reflex-Test.",
    "Moderater Koffeinkonsum kann die Reaktionsgeschwindigkeit kurzfristig leicht steigern.",
  ],

  longTailTitle: "Reaktionstests für Gaming, Sport und Fokus",
  longTailIntro:
    "Nutze diesen Reflex-Test ohne Registrierung als schnellen Benchmark für visuelle Reaktionszeit, Maus-Klick-Reaktion, Hand-Auge-Koordination und einfache kognitive Verarbeitungsgeschwindigkeit.",
  longTailItems: [
    {
      title: "Visueller Reaktionszeittest",
      desc: "Miss, wie schnell du auf einen klaren Farbwechsel reagierst, den klassischen Aufbau vieler Online-Reaktionszeit-Benchmarks.",
    },
    {
      title: "Maus- und Klick-Reaktionstest",
      desc: "Prüfe die Verzögerung zwischen dem Signal und deinem Klick mit Maus, Trackpad, Touchscreen oder Tastatur.",
    },
    {
      title: "Gaming-Reflextraining",
      desc: "Erstelle eine einfache Reaktionsbasis für FPS-Spiele, Rhythmusspiele, Rennspiele und eSports-Warmups.",
    },
    {
      title: "Human-Benchmark-Alternative",
      desc: "Starte online einen schnellen 5-Runden-Reaktionszeit-Benchmark, ohne Konto und ohne App-Installation.",
    },
  ],

  accuracyTitle: "Was beeinflusst ein Online-Reaktionszeit-Ergebnis?",
  accuracyItems: [
    "Bildwiederholrate, Browser-Rendering, Eingabelatenz und kabellose Geräte können bei browserbasierten Reaktionszeittests einige Millisekunden hinzufügen.",
    "Ein 5-Runden-Durchschnitt ist nützlicher als ein einzelner Glücksklick, weil Fokus, Erwartung und Müdigkeit von Runde zu Runde schwanken.",
    "Für einen sauberen Benchmark teste auf demselben Gerät, schließe ablenkende Tabs, nutze eine reaktionsschnelle Maus und vergleiche Ergebnisse über längere Zeit.",
  ],

  whoTitle: "Wer profitiert von diesem Test?",
  whoItems: [
    {
      icon: "🎮",
      title: "Gamer",
      desc: "Miss deine Gaming-Reaktionszeit und trainiere visuelle Reflexe für FPS, MOBA, Rhythmus- und Rennspiele.",
    },
    {
      icon: "🏃",
      title: "Athleten",
      desc: "Sprinter, Kampfsportler und Ballspieler können mit einem schnellen Reflex-Test ihre Reaktionsgeschwindigkeit verfolgen.",
    },
    {
      icon: "🚗",
      title: "Fahrer",
      desc: "Bei Autobahngeschwindigkeit kann ein Unterschied von 50ms in der visuellen Reaktionszeit den Bremsweg verändern.",
    },
    {
      icon: "🧠",
      title: "Forscher & Studierende",
      desc: "Ein Browser-Reaktionszeittest zur Beobachtung von Aufmerksamkeit, Müdigkeit, Koffein, Schlaf und Verarbeitungsgeschwindigkeit.",
    },
  ],

  faqTitle: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Was ist eine gute Reaktionszeit?",
      a: "Unter 200ms gilt als schnell. Der Durchschnitt liegt bei etwa 250ms. Profisportler und Gamer erreichen oft 150–200ms.",
    },
    {
      q: "Warum variiert mein Ergebnis zwischen den Runden?",
      a: "Reaktionszeiten schwanken natürlich aufgrund von Konzentration, Müdigkeit und Erwartung. Deshalb mitteln wir 5 Runden für ein verlässliches Ergebnis.",
    },
    {
      q: "Ist dieser Test genau?",
      a: "Ja. Wir nutzen den hochauflösenden Browser-Timer (performance.now()) für präzise Millisekundenmessungen. Die Zeit startet erst, nachdem der grüne Bildschirm vollständig gerendert wurde.",
    },
    {
      q: "Kann ich meine Reaktionszeit durch Übung verbessern?",
      a: "Absolut. Regelmäßiges Üben, guter Schlaf, Sport und Konzentrationsübungen können deine Reaktionszeit innerhalb von Wochen oder Monaten deutlich verbessern.",
    },
    {
      q: "Beeinflusst das Alter die Reaktionszeit?",
      a: "Ja. Die Reaktionszeit erreicht in den 20ern typischerweise ihren Höhepunkt und verlangsamt sich danach allmählich. Regelmäßiges Training kann diesen Rückgang erheblich verlangsamen.",
    },
  ],
};

const fr: Translations = {
  siteTitle: "Test de Temps de Réaction – Êtes-vous rapide ?",
  siteDescription:
    "Test visuel de temps de réaction gratuit en ligne. Cliquez dès que l'écran devient vert, mesurez vos réflexes en millisecondes et utilisez la moyenne sur 5 tours pour le jeu, le sport et la concentration.",

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
  percentile: "Centile",
  percentileText: "plus rapide que {pct}% des gens",
  fasterThan: "Vous êtes plus rapide que",
  shareResult: "Partager le résultat",
  shareOnTwitter: "Partager sur X",
  saveImage: "Sauvegarder l'image",
  playAgain: "Rejouer",
  history: "Historique",
  noHistory: "Pas encore d'historique. Jouez une partie !",
  clearHistory: "Effacer l'historique",

  ms: "ms",
  attempts: "essais",

  funFactsTitle: "Le saviez-vous ?",
  funFacts: [
    "Le temps de réaction humain moyen est d'environ 250ms.",
    "Les pilotes F1 ont un temps de réaction moyen de ~200ms.",
    "Le temps de réaction ralentit avec l'âge.",
    "La caféine peut améliorer le temps de réaction de 10 à 20ms.",
    "Le temps de réaction humain le plus rapide enregistré est ~100ms.",
    "Les athlètes ont généralement des temps de réaction de 160 à 200ms.",
    "Le temps de réaction visuel est plus lent que le temps de réaction auditif.",
    "Le manque de sommeil peut doubler votre temps de réaction.",
  ],

  catLightning: "Éclair",
  catFast: "Rapide",
  catAverage: "Moyen",
  catSlow: "Lent",
  catVerySlow: "Très lent",
  catLightningDesc: "Réflexes surhumains ! Moins de 150ms",
  catFastDesc: "Super réflexes ! 150–200ms",
  catAverageDesc: "Plage humaine normale. 200–300ms",
  catSlowDesc: "Un peu lent. 300–400ms",
  catVerySlowDesc: "Réessayez après du repos ! Plus de 400ms",

  aboutTestTitle: "Comment fonctionne le test ?",
  aboutTestDesc:
    "L'écran commence en rouge. Après un délai aléatoire (1 à 5 secondes), il devient vert. Cliquez le plus vite possible dès que vous voyez le vert. Ce test de réaction au clic gratuit mesure le délai entre le signal visuel et votre réponse à la souris, au toucher ou au clavier. Complétez 5 tours pour obtenir un temps de réaction moyen plus stable.",

  blogTitle: "Blog sur le temps de réaction",
  blogDescription:
    "Apprenez tout sur le temps de réaction, les réflexes et comment améliorer votre vitesse de réponse.",

  aboutTitle: "À propos du test de temps de réaction",
  aboutDescription:
    "ReactionTimeTestOnline.com est un outil gratuit pour mesurer et améliorer votre temps de réaction. Conçu pour les athlètes, les joueurs, les scientifiques et tous ceux qui sont curieux de leurs réflexes.",

  contactTitle: "Contactez-nous",
  contactDescription:
    "Une question, une suggestion ou un retour ? Nous serions ravis de vous entendre.",
  contactName: "Votre nom",
  contactEmail: "Votre e-mail",
  contactMessage: "Votre message",
  contactSend: "Envoyer le message",
  contactSent: "Message envoyé ! Nous vous répondrons bientôt.",

  footerTagline: "Testez et améliorez votre temps de réaction gratuitement.",
  footerRights: "Tous droits réservés.",

  shareText:
    "J'ai obtenu {time}ms au test de temps de réaction ! Pouvez-vous me battre ? Essayez sur reactiontimetestonline.com",

  howToTitle: "Comment faire le test de temps de réaction ?",
  howToSteps: [
    "Cliquez n'importe où sur la zone de test pour commencer.",
    "L'écran devient rouge — attendez patiemment. Ne cliquez pas encore !",
    "Dès qu'il passe au vert, cliquez le plus vite possible.",
    "Complétez les 5 tours pour obtenir votre temps de réaction moyen et votre classement.",
  ],

  scoresTitle: "Que signifient vos résultats ?",
  scoresDesc:
    "Le temps de réaction varie selon l'âge, la forme physique et l'entraînement. Voici comment différents scores se comparent à la population générale :",

  tipsTitle: "Comment améliorer votre temps de réaction",
  tips: [
    "Bien dormir — la fatigue peut doubler votre temps de réaction.",
    "Rester hydraté — la déshydratation ralentit la transmission des signaux nerveux.",
    "Faire de l'exercice régulièrement — la forme cardiovasculaire affûte les réflexes.",
    "S'entraîner régulièrement — comme toute compétence, le temps de réaction s'améliore avec la répétition.",
    "Gardez le même navigateur, le même écran et la même souris pour comparer votre vitesse de réaction.",
    "Réduire les distractions — une concentration totale améliore les résultats dans tout test de réflexes.",
    "Une consommation modérée de caféine peut légèrement améliorer la vitesse de réaction temporairement.",
  ],

  longTailTitle: "Tests de Réaction pour le Jeu, le Sport et la Concentration",
  longTailIntro:
    "Utilisez ce test de réflexes sans inscription comme benchmark rapide du temps de réaction visuel, du clic souris, de la coordination main-oeil et de la vitesse de traitement cognitive simple.",
  longTailItems: [
    {
      title: "Test visuel de temps de réaction",
      desc: "Mesurez la vitesse à laquelle vous répondez à un changement de couleur clair, le format classique des benchmarks de réaction en ligne.",
    },
    {
      title: "Test de réaction souris et clic",
      desc: "Vérifiez le délai entre le signal et votre clic avec une souris, un trackpad, un écran tactile ou un clavier.",
    },
    {
      title: "Entraînement des réflexes gaming",
      desc: "Créez une base simple pour les FPS, les jeux de rythme, les jeux de course et les échauffements e-sport.",
    },
    {
      title: "Alternative à Human Benchmark",
      desc: "Lancez un benchmark de temps de réaction en 5 tours, sans compte et sans installer d'application.",
    },
  ],

  accuracyTitle: "Qu'est-ce qui influence un résultat de réaction en ligne ?",
  accuracyItems: [
    "Le taux de rafraîchissement, le rendu du navigateur, la latence d'entrée et les appareils sans fil peuvent ajouter quelques millisecondes à un test de temps de réaction dans le navigateur.",
    "Une moyenne sur 5 tours est plus utile qu'un clic chanceux, car la concentration, l'anticipation et la fatigue varient d'un tour à l'autre.",
    "Pour un benchmark plus propre, utilisez le même appareil, fermez les onglets distrayants, choisissez une souris réactive et comparez vos résultats dans le temps.",
  ],

  whoTitle: "Qui peut bénéficier de ce test ?",
  whoItems: [
    {
      icon: "🎮",
      title: "Joueurs",
      desc: "Mesurez votre temps de réaction gaming et entraînez les réflexes visuels utiles en FPS, MOBA, rythme et course.",
    },
    {
      icon: "🏃",
      title: "Athlètes",
      desc: "Les sprinters, pratiquants d'arts martiaux et joueurs de sports collectifs peuvent suivre leur vitesse de réponse avec un test de réflexes rapide.",
    },
    {
      icon: "🚗",
      title: "Conducteurs",
      desc: "À vitesse autoroutière, une différence de 50ms dans le temps de réaction visuel peut modifier la distance de freinage.",
    },
    {
      icon: "🧠",
      title: "Chercheurs & Étudiants",
      desc: "Un outil de réaction dans le navigateur pour observer l'attention, la fatigue, la caféine, le sommeil et la vitesse de traitement.",
    },
  ],

  faqTitle: "Questions fréquentes",
  faqs: [
    {
      q: "Qu'est-ce qu'un bon temps de réaction ?",
      a: "En dessous de 200ms, c'est considéré comme rapide. La moyenne est d'environ 250ms. Les athlètes et joueurs d'élite atteignent souvent 150–200ms.",
    },
    {
      q: "Pourquoi mon score varie-t-il d'un tour à l'autre ?",
      a: "Le temps de réaction varie naturellement selon la concentration, la fatigue et l'anticipation. C'est pourquoi nous calculons la moyenne sur 5 tours pour un résultat fiable.",
    },
    {
      q: "Ce test est-il précis ?",
      a: "Oui. Nous utilisons le minuteur haute résolution du navigateur (performance.now()) pour une mesure précise à la milliseconde. Le chronomètre démarre uniquement après que l'écran vert soit entièrement rendu.",
    },
    {
      q: "Puis-je améliorer mon temps de réaction avec de la pratique ?",
      a: "Absolument. La pratique régulière, un bon sommeil, l'exercice et l'entraînement à la concentration peuvent réduire significativement votre temps de réaction en quelques semaines ou mois.",
    },
    {
      q: "L'âge affecte-t-il le temps de réaction ?",
      a: "Oui. Le temps de réaction atteint généralement son pic dans la vingtaine et ralentit progressivement avec l'âge. Cependant, une pratique régulière peut significativement ralentir ce déclin.",
    },
  ],
};

export const translations: Record<Lang, Translations> = {
  en,
  zh,
  ko,
  ja,
  de,
  fr,
};

export function t(lang: Lang): Translations {
  return translations[lang] || translations.en;
}
