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
  whoTitle: string;
  whoItems: { icon: string; title: string; desc: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
}

const en: Translations = {
  siteTitle: "Reaction Time Test – How Fast Are You?",
  siteDescription:
    "Test your reaction time online for free. Click as fast as you can when the screen turns green. Track your results, compare with global averages, and improve your reflexes.",

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
    "The screen starts red. After a random delay (1–5 seconds), it turns green. Click as fast as you can when you see green. We measure the time between the screen turning green and your click. Complete 5 rounds to get your average reaction time.",

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
    "Cut distractions — full focus leads to faster responses.",
    "Moderate caffeine can give a small, temporary reaction-speed boost.",
  ],

  whoTitle: "Who Can Benefit From This Test?",
  whoItems: [
    {
      icon: "🎮",
      title: "Gamers",
      desc: "Measure and train the reflexes that separate good players from great ones in competitive games.",
    },
    {
      icon: "🏃",
      title: "Athletes",
      desc: "Sprinters, martial artists, and ball-sport players all rely on fast reaction times to gain a competitive edge.",
    },
    {
      icon: "🚗",
      title: "Drivers",
      desc: "A 50ms difference in reaction time can be the difference between a safe stop and a collision at highway speeds.",
    },
    {
      icon: "🧠",
      title: "Researchers & Students",
      desc: "A simple, reliable tool for studying cognitive performance, attention, and the effects of sleep or caffeine.",
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
    "免费在线测试你的反应时间。当屏幕变绿时尽快点击，追踪你的成绩，与全球平均水平对比，提升你的反应速度。",

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
    "屏幕开始时为红色。随机等待 1–5 秒后变为绿色。当你看到绿色时尽快点击。我们测量屏幕变绿到你点击之间的时间。完成 5 轮以获得你的平均反应时间。",

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
    "减少干扰——全神贯注带来更快的反应。",
    "适量咖啡因可带来短暂、小幅的反应速度提升。",
  ],

  whoTitle: "哪些人适合做这个测试？",
  whoItems: [
    {
      icon: "🎮",
      title: "游戏玩家",
      desc: "测量和训练在竞技游戏中拉开差距的关键反射能力。",
    },
    {
      icon: "🏃",
      title: "运动员",
      desc: "短跑、格斗、球类运动员都依赖快速反应时间来获得竞争优势。",
    },
    {
      icon: "🚗",
      title: "驾驶员",
      desc: "在高速行驶时，50ms 的反应时间差异可能是安全停车与碰撞事故的分界线。",
    },
    {
      icon: "🧠",
      title: "研究者与学生",
      desc: "一个简单可靠的工具，用于研究认知表现、注意力以及睡眠或咖啡因的影响。",
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
    "무료로 온라인 반응 속도를 테스트하세요. 화면이 초록색으로 바뀌면 최대한 빠르게 클릭하세요. 결과를 추적하고 글로벌 평균과 비교해보세요.",

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
    "화면이 빨간색으로 시작됩니다. 1–5초의 무작위 지연 후 초록색으로 바뀝니다. 초록색을 보자마자 최대한 빠르게 클릭하세요. 5라운드를 완료하면 평균 반응 시간을 확인할 수 있습니다.",

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
    "집중력을 유지하세요 — 산만함을 줄이면 반응이 빨라집니다.",
    "적당한 카페인은 일시적으로 반응 속도를 약간 높일 수 있습니다.",
  ],

  whoTitle: "누가 이 테스트를 활용할 수 있나요?",
  whoItems: [
    {
      icon: "🎮",
      title: "게이머",
      desc: "경쟁 게임에서 실력 차이를 만드는 반사 신경을 측정하고 훈련하세요.",
    },
    {
      icon: "🏃",
      title: "운동선수",
      desc: "단거리 선수, 격투기 선수, 구기 종목 선수 모두 빠른 반응 속도로 경쟁 우위를 얻습니다.",
    },
    {
      icon: "🚗",
      title: "운전자",
      desc: "고속 주행 시 50ms의 반응 속도 차이가 안전한 정지와 충돌 사고를 가를 수 있습니다.",
    },
    {
      icon: "🧠",
      title: "연구자 및 학생",
      desc: "인지 성능, 주의력, 수면이나 카페인의 영향을 연구하기 위한 간단하고 신뢰할 수 있는 도구입니다.",
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
    "無料でオンライン反応時間をテスト。画面が緑に変わったらできるだけ早くクリック。結果を記録して世界平均と比較しましょう。",

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
    "画面は赤でスタートします。1〜5秒のランダムな待機後に緑に変わります。緑を見たらできるだけ早くクリックしてください。5ラウンド完了すると平均反応時間がわかります。",

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
    "集中力を保つ — 気が散ると反応が遅くなります。",
    "適度なカフェインは一時的に反応速度をわずかに高めることがあります。",
  ],

  whoTitle: "このテストが役立つ方",
  whoItems: [
    {
      icon: "🎮",
      title: "ゲーマー",
      desc: "競技ゲームで差をつける反射神経を測定・トレーニングしましょう。",
    },
    {
      icon: "🏃",
      title: "アスリート",
      desc: "短距離走者・格闘家・球技選手は、速い反応時間で競争優位を得ます。",
    },
    {
      icon: "🚗",
      title: "ドライバー",
      desc: "高速走行時、50msの差が安全な停止と衝突事故を分けることがあります。",
    },
    {
      icon: "🧠",
      title: "研究者・学生",
      desc: "認知パフォーマンス、注意力、睡眠やカフェインの影響を研究するためのシンプルで信頼性の高いツールです。",
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
    "Teste deine Reaktionszeit kostenlos online. Klicke so schnell wie möglich, wenn der Bildschirm grün wird. Verfolge deine Ergebnisse und vergleiche mit dem globalen Durchschnitt.",

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
    "Der Bildschirm beginnt rot. Nach einer zufälligen Verzögerung (1–5 Sekunden) wird er grün. Klicke so schnell wie möglich, wenn du Grün siehst. Absolviere 5 Runden für deine durchschnittliche Reaktionszeit.",

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
    "Ablenkungen minimieren — volle Konzentration führt zu schnelleren Reaktionen.",
    "Moderater Koffeinkonsum kann die Reaktionsgeschwindigkeit kurzfristig leicht steigern.",
  ],

  whoTitle: "Wer profitiert von diesem Test?",
  whoItems: [
    {
      icon: "🎮",
      title: "Gamer",
      desc: "Miss und trainiere die Reflexe, die gute von großartigen Spielern in Wettkampfspielen unterscheiden.",
    },
    {
      icon: "🏃",
      title: "Athleten",
      desc: "Sprinter, Kampfsportler und Ballspieler verlassen sich auf schnelle Reaktionszeiten für einen Wettkampfvorteil.",
    },
    {
      icon: "🚗",
      title: "Fahrer",
      desc: "Bei Autobahngeschwindigkeit kann ein Unterschied von 50ms in der Reaktionszeit über sicheres Bremsen oder Kollision entscheiden.",
    },
    {
      icon: "🧠",
      title: "Forscher & Studierende",
      desc: "Ein einfaches, zuverlässiges Werkzeug zur Untersuchung kognitiver Leistung, Aufmerksamkeit sowie der Auswirkungen von Schlaf oder Koffein.",
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
    "Testez votre temps de réaction gratuitement en ligne. Cliquez le plus vite possible quand l'écran devient vert. Suivez vos résultats et comparez avec la moyenne mondiale.",

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
    "L'écran commence en rouge. Après un délai aléatoire (1 à 5 secondes), il devient vert. Cliquez le plus vite possible dès que vous voyez le vert. Complétez 5 tours pour obtenir votre temps de réaction moyen.",

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
    "Réduire les distractions — une concentration totale mène à des réactions plus rapides.",
    "Une consommation modérée de caféine peut légèrement améliorer la vitesse de réaction temporairement.",
  ],

  whoTitle: "Qui peut bénéficier de ce test ?",
  whoItems: [
    {
      icon: "🎮",
      title: "Joueurs",
      desc: "Mesurez et entraînez les réflexes qui distinguent les bons joueurs des grands dans les jeux compétitifs.",
    },
    {
      icon: "🏃",
      title: "Athlètes",
      desc: "Les sprinters, pratiquants d'arts martiaux et joueurs de sports collectifs s'appuient sur des temps de réaction rapides pour obtenir un avantage compétitif.",
    },
    {
      icon: "🚗",
      title: "Conducteurs",
      desc: "À vitesse autoroutière, une différence de 50ms peut faire la distinction entre un arrêt sécurisé et une collision.",
    },
    {
      icon: "🧠",
      title: "Chercheurs & Étudiants",
      desc: "Un outil simple et fiable pour étudier les performances cognitives, l'attention et les effets du sommeil ou de la caféine.",
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
