import type { Lang } from "./i18n";
import type { BlogPost } from "./blogPosts";

export type BlogPostTranslation = Omit<BlogPost, "slug" | "date">;

// Publication dates, revision dates, and sources are inherited from the English posts.
export const BLOG_POST_TRANSLATIONS: Partial<
  Record<Lang, Record<string, BlogPostTranslation>>
> = {
  zh: {
    "what-is-reaction-time": {
      title: "什么反应时间算快？平均值、200 毫秒与设备影响",
      excerpt: "了解简单反应时间、200 毫秒成绩的含义，以及屏幕、输入方式和测试方法为什么会改变在线成绩。",
      readTime: "3 分钟阅读",
      sections: [
        { type: "paragraph", content: "反应时间是信号出现到你做出回应的间隔。本测试让你在画面变绿后点击、触屏或按键，测量一次简单的视觉回应。分数越低，表示你在当前设备上完成这个任务越快；它不代表智力、整体运动水平或所有反射能力。" },
        { type: "h2", content: "平均反应时间是多少？" },
        { type: "paragraph", content: "没有适用于所有测试的平均值。Woods 等人的视觉实验显示，硬件延迟会影响测得的平均时间。论文中的数值属于该实验，不能直接当作本网站的全球常模。比较前应确认刺激类型、设备和评分方式。" },
        { type: "h2", content: "200 毫秒算好吗？" },
        { type: "paragraph", content: "如果多次完整测试的平均值都接近 200 毫秒，可以描述为一次较快的视觉点击表现，但无法据此给出可靠的全球百分位。单次 150、250 或 300 毫秒也不能用来认定运动员水平或诊断健康问题。特别快的一轮可能包含预判，较慢的一轮可能只是分心。" },
        { type: "h2", content: "不同反应测试测的并不相同" },
        { type: "list", items: ["简单反应：看到一个已知信号就做同一个动作，本网站的五轮测试属于此类。", "选择反应：不同信号对应不同动作，选择过程也算在时间内。", "识别或抑制反应：只回应目标信号，其他信号不操作，需同时关注错误。"] },
        { type: "h2", content: "在线测试有多准确？" },
        { type: "paragraph", content: "浏览器计时器不能消除屏幕刷新、显示处理、输入设备和浏览器调度造成的延迟。动画回调也无法确认颜色真正进入眼睛的时刻。因此结果是当前设备上的估计值，不是经过实验室硬件校准的测量。" },
        { type: "h2", content: "怎样获得有用的比较" },
        { type: "ordered-list", items: ["固定设备、浏览器、输入方式和手的位置。", "先熟悉操作，再等待真实变色，不倒数猜测。", "完成五轮，记录平均值和各轮结果，不只看最佳成绩。", "在不同日期用相似条件复测，再判断变化是否持续。"] },
        { type: "highlight", content: "完成免费的五轮反应时间测试，为当前设备建立个人基线。" }
      ]
    },
    "how-to-improve-reaction-time": {
      title: "如何提高反应速度：可重复的练习流程",
      excerpt: "建立基线、避免猜测、记录完整成绩，并把点击练习与游戏或运动中的具体技能区分开。",
      readTime: "3 分钟阅读",
      sections: [
        { type: "paragraph", content: "先明确你想改善什么：看见绿色后点击、在游戏中选择目标，还是接住球。下面是整理个人练习的方法，不是临床训练方案，也不保证减少固定的毫秒数。" },
        { type: "h2", content: "先建立基线" },
        { type: "paragraph", content: "选择同一设备和输入方式，先完成一次熟悉练习，再做三组五轮测试，组间短暂休息。记录每组平均值，复测时也保持同样组数。只挑最好的成绩容易把运气当作进步。" },
        { type: "h2", content: "练回应，不练抢先猜" },
        { type: "ordered-list", items: ["手放舒适，注意测试区域。", "等到真正变绿后再操作，不倒数等待时间。", "把提前点击记为错误，不当作速度提升。", "完成一组就短休息；注意力下降时结束练习。"] },
        { type: "h2", content: "用简单日志看趋势" },
        { type: "paragraph", content: "记录日期、设备、输入方式、每组平均值和明显干扰，并简记是否休息充分。比较多天结果。若换了鼠标、手机或显示器，另建基线，避免把设备变化当作身体反应变快。" },
        { type: "h2", content: "训练要对应实际任务" },
        { type: "paragraph", content: "游戏练习同时记录目标选择和准确率；球类运动则结合教练指导练习站位和真实来球。颜色点击成绩不能证明这些技能改善。动作游戏研究考察特定知觉任务，也不能保证对所有活动都有同等收益。" },
        { type: "h2", content: "让休息和条件保持稳定" },
        { type: "paragraph", content: "安排在通常精神较好的时段，避免熬夜刷分。咖啡因和补充剂不是这套练习所需的变量。目标是得到可重复的记录，并在具体任务中检验进步。" },
        { type: "highlight", content: "先完成五轮测试，再用相同设置进行下一次计划内练习。" }
      ]
    },
    "reaction-time-by-age": {
      title: "反应时间与年龄：怎样理解你的成绩",
      excerpt: "解释年龄研究的局限、为什么没有通用年龄分数表，以及如何用个人基线追踪变化。",
      readTime: "3 分钟阅读",
      sections: [
        { type: "paragraph", content: "反应时间会随人生阶段变化，但每个年龄没有统一的毫秒目标。年龄表只有与测试任务、参与者、设备和计分方法一起看才有意义。本网站没有经过验证、具有代表性的年龄常模数据。" },
        { type: "h2", content: "研究发现了什么？" },
        { type: "paragraph", content: "Woods 等人的成人实验观察到年龄相关的反应变慢；Hardwick 等人的运动任务研究也涉及动作准备的变化。这些是特定实验中的发现，不能据此推算每个同龄人的成绩。" },
        { type: "h2", content: "为什么不列每个年龄应达到多少毫秒" },
        { type: "list", items: ["点击、选择按键和全身移动是不同任务。", "成人样本不能给儿童建立常模，便利样本也不代表全球。", "实验室校准硬件的数值不能直接套用到手机。", "群体平均值不是健康或能力的及格线。"] },
        { type: "h2", content: "我的成绩在这个年龄算好吗？" },
        { type: "paragraph", content: "本测试不能给出有效的年龄百分位。请固定输入方式，比较完整五轮的平均值，并观察多天记录。与不同年龄朋友的分差不能直接归因于年龄。某个具体年龄是所有反应能力峰值的说法也需要先核查任务类型。" },
        { type: "h2", content: "怎样使用成绩" },
        { type: "paragraph", content: "在休息充分、姿势舒适时建立个人基线，换设备后单独记录。本测试用于了解和练习，不评估驾驶资格或诊断疾病。如果日常协调能力突然变化，应寻求适当的专业帮助，而不是依赖浏览器分数。" },
        { type: "highlight", content: "建立五轮个人基线，用来比较你自己的后续测试。" }
      ]
    },
    "gamers-vs-athletes-reaction-time": {
      title: "玩家与运动员：反应时间能直接比较吗？",
      excerpt: "为什么鼠标点击、短跑起跑和守门员扑救不能直接排名，以及怎样做公平的比较。",
      readTime: "3 分钟阅读",
      sections: [
        { type: "paragraph", content: "玩家、短跑选手和守门员都可能在各自情境里很快，但他们面对的信号与动作不同。把鼠标点击、听枪起跑和一次扑救的时间放在一起，无法得出谁的反应一定更快。" },
        { type: "h2", content: "玩家点击测试没有测到什么" },
        { type: "paragraph", content: "颜色测试只有一个已知信号和一个动作。游戏还需要发现目标、判断敌我、选择操作和瞄准。点击成绩不能预测 Counter-Strike 或 Valorant 段位，网络延迟也属于另一环节。" },
        { type: "h2", content: "研究不等于职业玩家常模" },
        { type: "paragraph", content: "Green 等人的动作游戏研究考察知觉决策。它没有提供适用于所有职业玩家的平均反应时间，也不能证明玩家在任何任务上都快于运动员。" },
        { type: "h2", content: "运动项目还有动作与位置" },
        { type: "paragraph", content: "短跑起跑回应声音并协调发力；守门员要判断球路并到达拦截位置。移动距离、站位和可见信息都会改变任务。不能把这些成绩当作纯视觉点击时间。" },
        { type: "h2", content: "公平比较的条件" },
        { type: "ordered-list", items: ["使用同一设备、输入方式、说明和熟悉练习。", "采用同一任务与轮数，不拿最佳值对平均值。", "记录错误和提前操作，避免把猜测当作速度。", "说明样本和统计方式，几位朋友不能代表全部玩家或运动员。"] },
        { type: "highlight", content: "用同一设置完成五轮测试，比较你自己的游戏练习记录。" }
      ]
    },
    "caffeine-and-reaction-time": {
      title: "咖啡因与反应时间：研究能告诉我们什么",
      excerpt: "理解日常摄入、停用、练习和测试条件的影响，避免从一次喝咖啡前后的成绩推断效果。",
      readTime: "3 分钟阅读",
      sections: [
        { type: "paragraph", content: "咖啡因可能影响测得的反应时间，但没有可靠规则保证一杯咖啡能让浏览器成绩减少多少毫秒。感觉清醒、操作更快和判断更准确是不同结果。" },
        { type: "h2", content: "实验结果要结合条件理解" },
        { type: "paragraph", content: "Smith、Rogers 及 Addicott 等研究团队使用的条件和指标不同。日常摄入与停用状态会影响解读，因此不能保证每个人获得同样的改善。下方列出原始论文供查阅。" },
        { type: "h2", content: "为什么第二次更快不是效果证明" },
        { type: "list", items: ["第二次测试已经熟悉了操作。", "知道自己喝过咖啡会改变期待。", "注意力和成绩本来就会自然波动。", "换设备或输入方式会改变比较条件。"] },
        { type: "h2", content: "把测试当作记录，不当作剂量建议" },
        { type: "paragraph", content: "如果你已有成绩日志，可以记录正常生活习惯，但不要从一次测试得出因果结论。无需为刷分增加咖啡因、突然停用或减少睡眠。本网站不能判断安全剂量或咖啡因是否适合你。" },
        { type: "h2", content: "更快的点击不代表补回睡眠" },
        { type: "paragraph", content: "喝咖啡后点击变快，不能证明睡眠不足的影响已经消除，更不能证明适合驾驶。短暂的浏览器测试无法全面评估持续警觉性。" },
        { type: "highlight", content: "按平常作息记录五轮基线，用多次测试了解正常波动。" }
      ]
    },
    "sleep-deprivation-reaction-time": {
      title: "睡眠不足与反应时间：稳定表现为什么重要",
      excerpt: "了解睡眠限制与注意力的关系，以及为什么一次快速点击不能证明休息充分。",
      readTime: "3 分钟阅读",
      sections: [
        { type: "paragraph", content: "睡眠不足可能影响回应的稳定性。偶尔很快的一次点击，可能与漏掉信号或较慢的轮次同时出现。因此最佳成绩不是判断是否休息充分的好办法。" },
        { type: "h2", content: "睡眠研究说明了什么" },
        { type: "paragraph", content: "Van Dongen 等人的受控实验观察到，持续限制睡眠会累积表现损失，自觉困倦也未完整反映这种变化。该结果不能换算为本网站分数固定下降多少百分比。" },
        { type: "h2", content: "五轮测试不是警觉性评估" },
        { type: "paragraph", content: "睡眠研究常用更长的持续任务来观察注意力失误。本网站只抽取短暂的回应片段，不能量出睡眠债、排除疲劳或证明可以安全驾驶、操作机器。" },
        { type: "h2", content: "怎样比较更有意义" },
        { type: "ordered-list", items: ["保持正常作息，不刻意少睡来做实验。", "固定设备、输入方式和大致测试时段。", "记录五轮与平均值，简记休息和干扰情况。", "跨多天观察，不给一次异常成绩立即归因。"] },
        { type: "h2", content: "恢复没有浏览器倒计时" },
        { type: "paragraph", content: "分数不能判断你还需要多少睡眠，也不能保证一次午睡或固定几晚就能恢复某个成绩。安排在平时精神较好的时段练习，注意力下降时停止。若困倦持续影响日常生活，应寻求专业帮助。" },
        { type: "highlight", content: "先记录休息充分时的五轮基线，再比较相似条件下的成绩。" }
      ]
    },
    "goalkeeper-reaction-time-vozinha-world-cup": {
      title: "守门员反应时间：Vozinha、预判与点击测试",
      excerpt: "从 Vozinha 的世界杯比赛理解扑救中的判断与移动，以及在线测试无法衡量的能力。",
      readTime: "3 分钟阅读",
      sections: [
        { type: "paragraph", content: "FIFA 官方报告确认，2026 年 6 月 15 日西班牙与佛得角战成 0–0，Vozinha 担任守门员。比赛结果可以引出反应时间的话题，但无法测出他的个人视觉反应毫秒数。" },
        { type: "h2", content: "扑救包括哪些部分" },
        { type: "list", items: ["反应：察觉信号后开始回应。", "预判：利用较早出现的信息准备下一步，但预测可能错误。", "动作时间：完成跨步、扑出并到达拦截位置所需的时间。"] },
        { type: "paragraph", content: "球速、距离、角度、视野和站位都会改变可用时间与移动距离。精彩扑救不能换算为点击速度；回放中提前移动，也不足以确定门将具体使用了什么线索。" },
        { type: "h2", content: "点球研究的边界" },
        { type: "paragraph", content: "Peiyong 与 Inomata 的视频实验说明信息出现的时机很重要。不能据此推导出看某个髋部或脚的位置就能可靠判断所有射门方向的规则。" },
        { type: "h2", content: "可以和教练讨论的练习" },
        { type: "ordered-list", items: ["在触球前暂停短片，预测方向后核对，记录正确率。", "使用没看过的片段，避免把记忆当作预判。", "在合适球速下练习准备姿势与第一步，由教练逐渐调整难度。", "把选择是否正确、拦截是否成功与点击成绩分开记录。"] },
        { type: "h2", content: "在线测试能测守门能力吗？" },
        { type: "paragraph", content: "五轮测试可以提供当前设备上的个人点击基线，但没有等价实测数据，就不能把你的成绩与 Vozinha 比较。它只能是辅助活动，扑救训练仍需以场上任务与反馈为准。" },
        { type: "highlight", content: "尝试五轮视觉反应测试，建立个人基线，并单独评估守门训练。" }
      ]
    }
  },
  ko: {
    "what-is-reaction-time": {
      title: "좋은 반응속도는 얼마일까? 평균, 200 ms, 기기 차이",
      excerpt: "단순 반응 시간과 200 ms 기록의 의미, 화면과 입력 장치가 온라인 측정에 미치는 영향을 알아보세요.",
      readTime: "3분 읽기",
      sections: [
        { type: "paragraph", content: "반응 시간은 신호가 나타난 뒤 응답하기까지의 간격입니다. 이 테스트에서는 화면이 초록색으로 바뀌면 클릭하거나 화면을 터치하거나 키를 누릅니다. 낮은 기록은 현재 기기에서 이 동작이 빨랐다는 뜻이며 지능이나 전반적인 운동 능력을 측정하지는 않습니다." },
        { type: "h2", content: "평균 반응 시간은 얼마인가요?" },
        { type: "paragraph", content: "모든 테스트에 적용되는 평균은 없습니다. Woods 등의 시각 반응 실험에서도 하드웨어 지연이 측정값에 영향을 주었습니다. 특정 연구의 평균을 이 사이트의 세계 평균으로 사용할 수는 없습니다. 자극, 장치, 점수 계산법을 먼저 확인하세요." },
        { type: "h2", content: "200 ms는 좋은 기록인가요?" },
        { type: "paragraph", content: "여러 세션의 평균이 꾸준히 200 ms 정도라면 빠른 시각 클릭 반응이라고 표현할 수 있습니다. 다만 검증된 세계 백분위는 아닙니다. 한 번의 150, 250, 300 ms 기록으로 선수 수준이나 건강 상태를 판단할 수 없습니다. 매우 빠른 시도에는 예측이, 느린 시도에는 산만함이 영향을 주었을 수 있습니다." },
        { type: "h2", content: "테스트마다 다른 과제" },
        { type: "list", items: ["단순 반응: 하나의 신호에 정해진 동작으로 응답합니다. 이 사이트의 5라운드 테스트가 해당합니다.", "선택 반응: 신호에 따라 다른 동작을 선택하며 판단 시간도 포함합니다.", "인식 또는 억제 반응: 목표 신호에만 반응하고 다른 신호에는 반응하지 않습니다. 오류도 확인해야 합니다."] },
        { type: "h2", content: "온라인 측정의 정확도" },
        { type: "paragraph", content: "브라우저 시계가 정밀해도 화면 갱신, 디스플레이 처리, 입력 장치, 브라우저 작업 지연은 남습니다. 애니메이션 콜백도 실제로 색이 눈에 도달한 순간을 확인하지 못합니다. 결과는 현재 환경의 추정치이며 실험실에서 보정한 측정값은 아닙니다." },
        { type: "ordered-list", items: ["기기, 브라우저, 입력 방법과 손 위치를 고정하세요.", "한 세션을 연습한 뒤 시간을 예측하지 말고 실제 색 변화를 기다리세요.", "5라운드를 모두 마치고 최고 기록뿐 아니라 평균과 각 라운드도 확인하세요.", "다른 날 비슷한 조건에서 반복해 변화가 지속되는지 보세요."] },
        { type: "highlight", content: "무료 5라운드 테스트로 현재 기기에서의 개인 기준 기록을 만들어 보세요." }
      ]
    },
    "how-to-improve-reaction-time": {
      title: "반응속도 개선을 위한 반복 가능한 연습 방법",
      excerpt: "기준 기록을 만들고 예측 없이 연습하며, 클릭 기록과 게임·스포츠의 실제 기술을 따로 추적하세요.",
      readTime: "3분 읽기",
      sections: [
        { type: "paragraph", content: "먼저 무엇을 개선할지 정하세요. 초록색을 보고 클릭하기, 게임에서 목표 선택하기, 공 잡기는 서로 다른 과제입니다. 다음 방법은 개인 연습을 정리하기 위한 제안이며 임상 훈련이나 일정한 밀리초 감소를 보장하는 방법은 아닙니다." },
        { type: "h2", content: "기준 기록부터 만들기" },
        { type: "paragraph", content: "한 기기와 입력 방식을 선택하세요. 익숙해지는 연습 세션 후 5라운드 세션을 세 번 진행하고 사이에 잠깐 쉬세요. 세 세션의 평균을 각각 적고 재측정 때도 같은 횟수를 유지하세요. 최고 기록만 고르면 우연을 진전으로 착각하기 쉽습니다." },
        { type: "h2", content: "예측보다 실제 신호에 응답하기" },
        { type: "ordered-list", items: ["손을 편안하게 두고 테스트 영역을 보세요.", "대기 시간을 세지 말고 실제 색 변화 후에 입력하세요.", "너무 이른 입력은 오류로 기록하세요.", "세션 후 쉬고 주의가 흐트러지면 연습을 마치세요."] },
        { type: "h2", content: "간단한 기록으로 추세 보기" },
        { type: "paragraph", content: "날짜, 기기, 입력 방식, 세션 평균, 방해 요소와 휴식 상태를 적으세요. 며칠간의 결과를 비교하세요. 마우스나 화면을 바꾸면 별도 기준을 만들어 장치 개선을 개인 반응의 변화와 구별하세요." },
        { type: "h2", content: "실제 과제에 맞춰 연습하기" },
        { type: "paragraph", content: "게임에서는 목표 선택과 정확도를 함께 기록하세요. 구기 종목에서는 코치와 위치 선정, 실제 공에 대한 대응을 연습하세요. 색상 클릭 기록만으로 이런 기술의 개선을 입증할 수 없습니다. 액션 게임 연구 역시 특정 지각 과제를 다루며 모든 활동에 같은 효과를 보장하지 않습니다." },
        { type: "h2", content: "휴식과 조건 유지하기" },
        { type: "paragraph", content: "평소 잘 쉬었을 때 연습하고 최고 기록 때문에 밤늦게까지 반복하지 마세요. 카페인이나 보충제는 이 연습에 필요하지 않습니다. 목표는 재현 가능한 기록을 얻고 실제 과제에서도 변화를 확인하는 것입니다." },
        { type: "highlight", content: "5라운드 기준 기록을 만든 다음 같은 환경에서 다음 연습을 진행하세요." }
      ]
    },
    "reaction-time-by-age": {
      title: "나이별 반응 시간: 기록을 해석하는 방법",
      excerpt: "연령별 점수표의 한계와 연구 결과를 이해하고, 검증되지 않은 기준 대신 자신의 변화를 추적하세요.",
      readTime: "3분 읽기",
      sections: [
        { type: "paragraph", content: "반응 시간은 삶의 단계에 따라 달라지지만 모든 나이에 공통으로 적용되는 밀리초 목표는 없습니다. 연령표는 과제, 참가자, 장치, 채점 방법과 함께 봐야 합니다. 이 사이트에는 대표성이 검증된 연령별 기준 데이터가 없습니다." },
        { type: "h2", content: "연구가 보여주는 것" },
        { type: "paragraph", content: "Woods 등의 성인 실험에서는 나이에 따른 반응 지연을 관찰했고, Hardwick 등의 연구에서는 움직임 준비의 변화를 다뤘습니다. 특정 실험의 결과로 같은 나이의 모든 사람에게 점수를 부여할 수는 없습니다." },
        { type: "h2", content: "연령별 합격 점수가 없는 이유" },
        { type: "list", items: ["단순 클릭, 키 선택, 전신 움직임은 다른 과제입니다.", "성인 표본은 아동 기준이 될 수 없고 편의 표본은 세계 전체를 대표하지 않습니다.", "보정한 실험실 장비와 휴대전화 기록을 바로 비교할 수 없습니다.", "집단 평균은 건강이나 능력의 합격선이 아닙니다."] },
        { type: "h2", content: "내 나이에 좋은 기록인가요?" },
        { type: "paragraph", content: "이 테스트는 유효한 연령 백분위를 제공하지 않습니다. 같은 입력 방식으로 전체 5라운드 평균을 며칠간 비교하세요. 나이가 다른 친구와의 차이를 나이 탓으로 단정할 수 없습니다. 모든 반응 능력이 특정 나이에 정점을 찍는다는 주장도 과제부터 확인해야 합니다." },
        { type: "h2", content: "결과를 유용하게 사용하기" },
        { type: "paragraph", content: "편안하고 휴식이 충분할 때 개인 기준을 만들고 장치를 바꾸면 따로 기록하세요. 이 테스트는 운전 적합성이나 질환을 평가하지 않습니다. 일상적인 움직임에 갑작스러운 변화가 있다면 브라우저 점수 대신 적절한 전문가의 도움을 받으세요." },
        { type: "highlight", content: "5라운드 개인 기준을 만들어 이후의 자신의 결과와 비교하세요." }
      ]
    },
    "gamers-vs-athletes-reaction-time": {
      title: "게이머와 운동선수의 반응 시간을 비교할 수 있을까요?",
      excerpt: "마우스 클릭, 출발 동작, 선방을 그대로 비교할 수 없는 이유와 공정한 비교 조건을 알아보세요.",
      readTime: "3분 읽기",
      sections: [
        { type: "paragraph", content: "게이머, 단거리 선수, 골키퍼는 각자의 상황에서 빠르게 반응할 수 있습니다. 하지만 신호와 동작이 다르므로 클릭, 총성에 대한 출발, 선방 시간을 나란히 놓고 누가 더 빠른지 결정할 수 없습니다." },
        { type: "h2", content: "클릭 테스트가 놓치는 게임 기술" },
        { type: "paragraph", content: "색상 테스트에는 알려진 신호와 동작이 하나씩 있습니다. 게임에서는 목표 탐색, 적 식별, 행동 선택, 조준도 필요합니다. 클릭 기록이 Counter-Strike나 Valorant 등급을 예측하지는 않으며 네트워크 지연도 별개입니다." },
        { type: "h2", content: "연구는 프로 게이머 평균이 아닙니다" },
        { type: "paragraph", content: "Green 등의 액션 게임 연구는 지각적 의사결정을 다뤘습니다. 모든 프로 게이머에 적용되는 평균을 제시하거나 게이머가 모든 과제에서 운동선수보다 빠르다고 입증하지는 않았습니다." },
        { type: "h2", content: "스포츠에는 움직임과 위치가 포함됩니다" },
        { type: "paragraph", content: "단거리 선수는 소리에 맞춰 힘을 내고, 골키퍼는 공의 궤적을 판단해 가로막을 위치로 이동합니다. 이동 거리, 위치, 보이는 정보가 과제를 바꿉니다. 이런 기록을 순수한 시각 클릭 시간으로 볼 수 없습니다." },
        { type: "h2", content: "공정한 비교 조건" },
        { type: "ordered-list", items: ["같은 기기, 입력 방식, 설명과 사전 연습을 제공하세요.", "같은 과제와 라운드 수를 사용하고 최고값과 평균값을 섞지 마세요.", "오류와 성급한 입력도 기록하세요.", "참가자와 계산 방법을 설명하세요. 친구 몇 명은 전체 집단을 대표하지 않습니다."] },
        { type: "highlight", content: "같은 환경에서 5라운드를 완료해 자신의 게임 연습 세션을 비교하세요." }
      ]
    },
    "caffeine-and-reaction-time": {
      title: "카페인과 반응 시간: 연구로 알 수 있는 것",
      excerpt: "평소 섭취, 중단, 연습과 측정 조건의 영향을 이해하고 한 번의 전후 비교를 과신하지 마세요.",
      readTime: "3분 읽기",
      sections: [
        { type: "paragraph", content: "카페인은 측정된 반응 시간에 영향을 줄 수 있지만 커피 한 잔이 브라우저 기록을 일정한 밀리초만큼 줄여준다는 규칙은 없습니다. 깨어 있는 느낌, 빠른 동작, 정확한 판단은 서로 다른 결과입니다." },
        { type: "h2", content: "실험 조건을 함께 보기" },
        { type: "paragraph", content: "Smith, Rogers, Addicott 등의 연구는 서로 다른 조건과 지표를 사용했습니다. 평소 섭취와 중단 상태가 해석에 영향을 주므로 모든 사람에게 같은 개선을 보장할 수 없습니다. 아래에 원문을 제시합니다." },
        { type: "h2", content: "두 번째 기록이 빠르다고 효과가 입증되지는 않습니다" },
        { type: "list", items: ["두 번째 세션에는 조작에 더 익숙해져 있습니다.", "커피를 마셨다는 기대가 접근 방식을 바꿀 수 있습니다.", "주의와 점수는 자연스럽게 변동합니다.", "장치나 입력 방식이 바뀌면 비교 조건도 달라집니다."] },
        { type: "h2", content: "복용 지침이 아닌 개인 기록" },
        { type: "paragraph", content: "기록을 남긴다면 평소 습관을 함께 적되 한 세션으로 인과관계를 판단하지 마세요. 점수를 위해 카페인을 늘리거나 갑자기 끊거나 수면을 줄일 필요가 없습니다. 이 사이트는 안전한 섭취량이나 개인에게 적합한지 판단할 수 없습니다." },
        { type: "h2", content: "빠른 클릭이 수면 회복을 의미하지는 않습니다" },
        { type: "paragraph", content: "커피 후 클릭이 빨라져도 수면 부족의 영향이 사라졌거나 운전하기 안전하다는 증거는 아닙니다. 짧은 브라우저 테스트는 지속적인 각성 상태를 충분히 평가하지 못합니다." },
        { type: "highlight", content: "평소 생활 중 5라운드 기준을 기록하고 여러 세션으로 자연스러운 변화를 살펴보세요." }
      ]
    },
    "sleep-deprivation-reaction-time": {
      title: "수면 부족과 반응 시간: 안정적인 반응의 중요성",
      excerpt: "수면 제한과 주의력의 관계, 빠른 클릭 한 번으로 충분한 휴식을 판단할 수 없는 이유를 알아보세요.",
      readTime: "3분 읽기",
      sections: [
        { type: "paragraph", content: "수면 부족은 반응의 일관성에도 영향을 줄 수 있습니다. 빠른 클릭이 신호를 놓치거나 매우 느린 라운드와 함께 나타날 수 있으므로 최고 기록만으로 잘 쉬었는지 판단하기 어렵습니다." },
        { type: "h2", content: "수면 연구의 결과" },
        { type: "paragraph", content: "Van Dongen 등의 통제 실험은 반복적인 수면 제한에서 수행 저하가 누적되고 주관적인 졸림이 그 변화를 온전히 반영하지 못함을 관찰했습니다. 이 결과를 본 사이트 점수의 고정된 저하율로 바꿀 수는 없습니다." },
        { type: "h2", content: "5라운드는 각성 평가가 아닙니다" },
        { type: "paragraph", content: "수면 연구는 주의력 저하를 보기 위해 더 긴 과제를 사용하기도 합니다. 여기서는 짧은 순간만 측정하므로 수면 부족량을 재거나 피로를 배제하거나 안전한 운전 및 장비 조작을 보증할 수 없습니다." },
        { type: "h2", content: "유용한 비교 방법" },
        { type: "ordered-list", items: ["평소 수면을 유지하고 비교하려고 일부러 적게 자지 마세요.", "기기, 입력 방식과 대략적인 시간을 고정하세요.", "5라운드와 평균, 휴식 및 방해 요소를 기록하세요.", "며칠간 살펴보고 한 번의 특이한 결과에 원인을 단정하지 마세요."] },
        { type: "h2", content: "회복을 위한 고정된 카운트다운은 없습니다" },
        { type: "paragraph", content: "브라우저 점수는 필요한 회복 수면량을 알려주지 않습니다. 한 번의 낮잠이나 정해진 며칠로 특정 점수 회복을 보장할 수 없습니다. 쉬었을 때 연습하고 주의가 흐려지면 멈추세요. 졸림이 일상을 계속 방해한다면 전문가의 도움을 받으세요." },
        { type: "highlight", content: "충분히 쉰 상태의 5라운드 기준을 만들고 비슷한 조건에서 비교하세요." }
      ]
    },
    "goalkeeper-reaction-time-vozinha-world-cup": {
      title: "골키퍼 반응 시간: 보지냐, 예측과 클릭 테스트",
      excerpt: "보지냐의 월드컵 경기로 선방의 판단과 움직임, 온라인 테스트의 한계를 살펴봅니다.",
      readTime: "3분 읽기",
      sections: [
        { type: "paragraph", content: "FIFA 공식 보고서는 2026년 6월 15일 스페인과 카보베르데의 0–0 무승부 및 골키퍼 보지냐의 출전을 확인합니다. 하지만 경기 결과로 그의 개인 시각 반응 시간을 밀리초 단위로 알아낼 수는 없습니다." },
        { type: "h2", content: "선방을 구성하는 요소" },
        { type: "list", items: ["반응: 감지할 수 있는 신호 후 응답을 시작합니다.", "예측: 먼저 얻은 정보로 다음 상황을 준비하며 틀릴 수 있습니다.", "움직임 시간: 발을 옮기거나 다이빙해 공을 가로막는 데 걸리는 시간입니다."] },
        { type: "paragraph", content: "공의 속도, 거리, 각도, 시야와 위치가 시간과 이동 거리를 바꿉니다. 멋진 선방을 클릭 속도로 환산할 수 없고 리플레이의 빠른 움직임만으로 어떤 단서를 사용했는지도 확정할 수 없습니다." },
        { type: "h2", content: "페널티킥 연구의 한계" },
        { type: "paragraph", content: "Peiyong과 Inomata의 영상 실험은 정보가 주어지는 시점의 중요성을 보여줍니다. 특정 발이나 골반 위치만 보면 모든 슛 방향을 확실히 알 수 있다는 규칙을 지지하지는 않습니다." },
        { type: "h2", content: "코치와 상의할 연습" },
        { type: "ordered-list", items: ["공에 닿기 전 영상을 멈추고 방향을 예측한 뒤 정확도를 확인하세요.", "처음 보는 영상을 사용해 기억과 예측을 구별하세요.", "적절한 공 속도로 준비 자세와 첫 동작을 연습하고 코치와 난도를 조절하세요.", "판단 정확도와 실제 차단 성공을 클릭 기록과 따로 평가하세요."] },
        { type: "h2", content: "온라인 테스트가 골키퍼 능력을 측정하나요?" },
        { type: "paragraph", content: "5라운드는 현재 장치의 개인 클릭 기준을 제공합니다. 같은 방식으로 측정한 데이터 없이는 보지냐와 비교할 수 없습니다. 보조 활동으로 활용하고 선방 능력은 경기 과제와 피드백으로 평가하세요." },
        { type: "highlight", content: "5라운드 시각 반응 테스트로 기준을 만들고 골키퍼 훈련은 별도로 평가하세요." }
      ]
    }
  },
  ja: {
    "what-is-reaction-time": {
      title: "良い反応時間とは？平均・200 ms・端末の影響",
      excerpt: "単純反応時間、200 msという記録の意味、画面や入力方法がオンライン測定に与える影響を解説します。",
      readTime: "3分で読めます",
      sections: [
        { type: "paragraph", content: "反応時間は、合図が現れてから応答するまでの間隔です。このテストでは画面が緑になったらクリック、タップ、またはキー入力をします。低い数値は現在の端末でこの動作が速かったことを示し、知能や運動能力全体を測るものではありません。" },
        { type: "h2", content: "平均反応時間はどれくらい？" },
        { type: "paragraph", content: "すべてのテストに共通する平均はありません。Woodsらの視覚反応実験でも、機器の遅延が測定値に影響しました。研究の平均値をそのまま本サイトの世界平均にはできません。刺激、機器、採点方法を先に確認しましょう。" },
        { type: "h2", content: "200 msは良い記録？" },
        { type: "paragraph", content: "複数のセッションの平均が安定して200 ms前後なら、速い視覚クリック反応と表現できます。ただし、検証済みの世界順位ではありません。1回の150、250、300 msで選手レベルや健康状態を判定することもできません。極端に速い結果には予測、遅い結果には注意のそれが関係する場合があります。" },
        { type: "h2", content: "反応テストの種類" },
        { type: "list", items: ["単純反応：1つの合図に決まった動作で応じます。本サイトの5ラウンドテストが該当します。", "選択反応：合図ごとに異なる動作を選び、その判断時間も含みます。", "認識・抑制反応：対象の合図だけに応答し、それ以外では動作を控えます。誤りも確認します。"] },
        { type: "h2", content: "オンライン測定の精度" },
        { type: "paragraph", content: "ブラウザの時計が精密でも、画面更新、表示処理、入力機器、ブラウザ処理の遅延は残ります。アニメーションのコールバックも色が実際に目へ届く瞬間を確認できません。記録はこの環境での推定値であり、実験室で校正した測定ではありません。" },
        { type: "ordered-list", items: ["端末、ブラウザ、入力方法、手の位置をそろえます。", "操作を練習し、待ち時間を予測せず実際の変色を待ちます。", "5ラウンドを終え、最速値だけでなく平均と各回を確認します。", "別の日に似た条件で繰り返し、変化が続くかを見ます。"] },
        { type: "highlight", content: "無料の5ラウンドテストで、現在の端末での個人基準を作りましょう。" }
      ]
    },
    "how-to-improve-reaction-time": {
      title: "反応速度を改善するための再現しやすい練習手順",
      excerpt: "基準を作り、予測せず練習し、クリック記録とゲーム・スポーツの技能を分けて追跡しましょう。",
      readTime: "3分で読めます",
      sections: [
        { type: "paragraph", content: "まず改善したい動作を決めます。緑を見てクリックすること、ゲームで標的を選ぶこと、ボールを取ることは別の課題です。以下は個人練習を整理する提案であり、臨床的な訓練や一定のミリ秒短縮を保証する方法ではありません。" },
        { type: "h2", content: "最初に基準を作る" },
        { type: "paragraph", content: "端末と入力方法を固定します。慣れるための1セッション後、5ラウンドのセッションを3回行い、間に短い休憩を入れます。各平均を記録し、再測定も同じ回数にします。最良の結果だけ選ぶと偶然を改善と誤解しやすくなります。" },
        { type: "h2", content: "予測ではなく合図に反応する" },
        { type: "ordered-list", items: ["手を楽に置き、テスト領域を見ます。", "待ち時間を数えず、実際に緑になってから入力します。", "早すぎる入力は誤りとして記録します。", "セッション後は休み、集中が切れたら終了します。"] },
        { type: "h2", content: "簡単な記録で傾向を見る" },
        { type: "paragraph", content: "日付、端末、入力方法、平均、割り込み、休息状態を記録し、複数日で比較します。マウスや画面を替えた場合は新しい基準を作り、機器の変化と自分の反応の変化を区別します。" },
        { type: "h2", content: "実際の課題に合わせて練習する" },
        { type: "paragraph", content: "ゲームでは標的選択と正確さも記録します。球技ではコーチと位置取りや実際のボールへの対応を練習します。色のクリック記録だけでこれらの改善を証明することはできません。アクションゲーム研究も特定の知覚課題を扱っており、すべての活動への同じ効果を保証しません。" },
        { type: "h2", content: "休息と条件をそろえる" },
        { type: "paragraph", content: "普段よく休めている時間帯に行い、記録を追って夜更かししないようにします。カフェインやサプリメントはこの手順に必要ありません。再現できる記録を得て、実際の課題でも変化を確かめることが目的です。" },
        { type: "highlight", content: "5ラウンドの基準を取り、次の予定した練習も同じ環境で行いましょう。" }
      ]
    },
    "reaction-time-by-age": {
      title: "年齢と反応時間：記録をどう解釈するか",
      excerpt: "年齢別スコア表や研究の限界を理解し、自分の基準を使って変化を追跡しましょう。",
      readTime: "3分で読めます",
      sections: [
        { type: "paragraph", content: "反応時間は人生の段階によって変わりますが、各年齢に共通するミリ秒目標はありません。年齢表は課題、参加者、機器、計算方法と一緒に読む必要があります。本サイトには代表性のある検証済み年齢基準データはありません。" },
        { type: "h2", content: "研究が示していること" },
        { type: "paragraph", content: "Woodsらの成人実験では加齢に伴う反応の遅延を観察し、Hardwickらは動作準備の変化を研究しました。これらは特定の実験の結果で、同じ年齢の全員に数値を割り当てるものではありません。" },
        { type: "h2", content: "年齢ごとの合格点を出さない理由" },
        { type: "list", items: ["単純クリック、キーの選択、全身運動は別の課題です。", "成人標本から子どもの基準は作れず、便宜的な標本は世界全体を代表しません。", "校正された実験機器の値をスマートフォンに直接当てはめられません。", "集団平均は健康や能力の合格点ではありません。"] },
        { type: "h2", content: "自分の年齢では良い記録？" },
        { type: "paragraph", content: "本テストは有効な年齢別パーセンタイルを提供しません。同じ入力方法で5ラウンドの平均を複数日にわたって比べてください。異なる年齢の友人との差を年齢だけで説明することはできません。すべての反応能力に共通する厳密なピーク年齢もありません。" },
        { type: "h2", content: "結果を役立てる" },
        { type: "paragraph", content: "休息が十分で楽な姿勢のときに基準を作り、機器を替えたら別に記録します。運転適性や病気の判断には使えません。日常の動作に急な変化があれば、ブラウザの点数ではなく適切な専門家に相談してください。" },
        { type: "highlight", content: "5ラウンドの個人基準を作り、その後の自分の結果と比較しましょう。" }
      ]
    },
    "gamers-vs-athletes-reaction-time": {
      title: "ゲーマーとアスリートの反応時間は比較できる？",
      excerpt: "クリック、スタート、セーブを直接比較できない理由と、公平な比較に必要な条件を説明します。",
      readTime: "3分で読めます",
      sections: [
        { type: "paragraph", content: "ゲーマー、短距離選手、ゴールキーパーはそれぞれの状況で速く反応できます。しかし合図と動作が違うため、クリック、号砲へのスタート、セーブの時間を並べても最速の人は決められません。" },
        { type: "h2", content: "クリックテストが測らないゲーム技能" },
        { type: "paragraph", content: "色のテストには既知の合図と動作が1つずつあります。ゲームでは標的の発見、敵味方の識別、行動選択、照準も必要です。クリック記録だけでCounter-StrikeやValorantのランクは予測できず、ネットワーク遅延も別の要素です。" },
        { type: "h2", content: "研究はプロの平均値ではない" },
        { type: "paragraph", content: "Greenらのアクションゲーム研究は知覚的判断を調べました。すべてのプロゲーマーに共通する平均値や、どの課題でも選手より速いという証拠は示していません。" },
        { type: "h2", content: "スポーツには移動と位置取りもある" },
        { type: "paragraph", content: "短距離選手は音に応じて協調して力を出し、キーパーは球筋を判断して遮る位置へ動きます。移動距離、位置、見える情報が課題を変えます。これを純粋な視覚クリック時間とは扱えません。" },
        { type: "h2", content: "公平に比較する条件" },
        { type: "ordered-list", items: ["端末、入力方法、説明、事前練習を同じにします。", "課題と回数をそろえ、最速値と平均値を混ぜません。", "誤答や早すぎる入力も数えます。", "参加者と集計方法を示します。友人数人は集団全体を代表しません。"] },
        { type: "highlight", content: "同じ環境で5ラウンドを行い、自分のゲーム練習の記録と比較しましょう。" }
      ]
    },
    "caffeine-and-reaction-time": {
      title: "カフェインと反応時間：研究から分かること",
      excerpt: "普段の摂取、休止、練習、測定条件を考え、1回のコーヒー前後の結果から効果を断定しない方法。",
      readTime: "3分で読めます",
      sections: [
        { type: "paragraph", content: "カフェインは測定された反応時間に影響する場合がありますが、コーヒー1杯でブラウザ記録が一定のミリ秒だけ縮むという規則はありません。覚醒感、動作の速さ、判断の正確さは別の結果です。" },
        { type: "h2", content: "実験条件と一緒に読む" },
        { type: "paragraph", content: "Smith、Rogers、Addicottらの研究は条件や指標が異なります。普段の摂取と休止状態も解釈に関わるため、全員に同じ改善は保証できません。原論文を下に掲載しています。" },
        { type: "h2", content: "2回目が速くても効果の証明にはならない" },
        { type: "list", items: ["2回目には操作を覚えています。", "飲んだという期待が取り組み方を変える場合があります。", "注意や記録には自然な揺らぎがあります。", "機器や入力方法を替えると条件も変わります。"] },
        { type: "h2", content: "摂取量の指針ではなく個人記録として" },
        { type: "paragraph", content: "記録を付けるなら普段の習慣を併記し、1回だけで因果関係を判断しないでください。点数のために摂取を増やしたり急にやめたり、睡眠を減らす必要はありません。本サイトは安全な量や個人への適合性を判断できません。" },
        { type: "h2", content: "速いクリックは睡眠回復の証明ではない" },
        { type: "paragraph", content: "コーヒー後に速くても、睡眠不足の影響が消えたことや安全に運転できることは示せません。短いブラウザテストは持続的な覚醒状態を十分に評価しません。" },
        { type: "highlight", content: "普段の生活の中で5ラウンドの基準を取り、複数回で自然な変動を見ましょう。" }
      ]
    },
    "sleep-deprivation-reaction-time": {
      title: "睡眠不足と反応時間：安定した応答の大切さ",
      excerpt: "睡眠制限と注意の関係、速いクリック1回では十分な休息を確認できない理由を解説します。",
      readTime: "3分で読めます",
      sections: [
        { type: "paragraph", content: "睡眠不足は応答の安定性にも影響します。速いクリックと、見逃しや非常に遅いラウンドが同時に起こる場合があるため、最速記録だけで十分休めたかは分かりません。" },
        { type: "h2", content: "睡眠研究が示したこと" },
        { type: "paragraph", content: "Van Dongenらの実験では、繰り返す睡眠制限で成績低下が積み重なり、自覚する眠気はその変化を十分に反映しませんでした。本サイトの得点が一定割合で悪化するという意味ではありません。" },
        { type: "h2", content: "5ラウンドは覚醒度評価ではない" },
        { type: "paragraph", content: "睡眠研究では注意の途切れを見るために長い課題を使うことがあります。ここで測るのは短い時間であり、睡眠負債の量や疲労の有無、安全な運転や機器操作の可否は判定できません。" },
        { type: "h2", content: "有用な比較方法" },
        { type: "ordered-list", items: ["通常の睡眠を保ち、比較のためにわざと減らしません。", "端末、入力方法、おおよその時刻をそろえます。", "5ラウンドと平均、休息や割り込みを記録します。", "複数日で見て、1回の異常値に原因を決めつけません。"] },
        { type: "h2", content: "回復に固定のカウントダウンはない" },
        { type: "paragraph", content: "ブラウザ記録から必要な回復睡眠量は分かりません。1回の昼寝や決まった夜数で特定の得点に戻る保証もありません。休めたときに練習し、集中できなければ中止します。眠気が日常生活を繰り返し妨げる場合は専門家に相談してください。" },
        { type: "highlight", content: "休息十分なときの5ラウンド基準を取り、似た条件の結果と比べましょう。" }
      ]
    },
    "goalkeeper-reaction-time-vozinha-world-cup": {
      title: "キーパーの反応時間：ヴォジーニャ、予測、クリックテスト",
      excerpt: "ヴォジーニャのワールドカップの試合から、セーブの判断と移動、オンラインテストの限界を考えます。",
      readTime: "3分で読めます",
      sections: [
        { type: "paragraph", content: "FIFA公式報告は、2026年6月15日のスペイン対カーボベルデの0–0と、GKヴォジーニャの出場を記録しています。ただし、その試合結果から本人の視覚反応時間をミリ秒で測ることはできません。" },
        { type: "h2", content: "セーブを構成する要素" },
        { type: "list", items: ["反応：感知できる合図の後に応答を始めます。", "予測：早く得た情報で次に備えます。外れる場合もあります。", "動作時間：踏み出しやダイブでボールを遮る位置へ届くまでの時間です。"] },
        { type: "paragraph", content: "球速、距離、角度、視界、位置取りが使える時間と移動距離を変えます。好セーブをクリック速度には換算できず、映像で早く動いていても使った手掛かりは特定できません。" },
        { type: "h2", content: "PK研究の限界" },
        { type: "paragraph", content: "PeiyongとInomataの映像実験は、情報が得られる時点の重要性を示しています。特定の腰や足の位置だけで、あらゆるシュート方向を確実に読めるという規則は導けません。" },
        { type: "h2", content: "コーチと相談できる練習" },
        { type: "ordered-list", items: ["接触前に映像を止め、方向を予測してから正解率を確認します。", "初見の映像で、記憶と予測を区別します。", "適切な球速で準備姿勢と最初の動作を練習し、コーチと難度を調整します。", "判断の正確さと実際の阻止成功をクリック記録とは別に評価します。"] },
        { type: "h2", content: "オンラインでキーパー能力を測れる？" },
        { type: "paragraph", content: "5ラウンドでは現在の端末の個人クリック基準を作れます。同じ方法の実測データがなければヴォジーニャとは比較できません。補助活動として使い、セーブ能力は競技の課題とフィードバックで評価しましょう。" },
        { type: "highlight", content: "5ラウンドの視覚反応テストで基準を作り、キーパー練習は別に評価しましょう。" }
      ]
    }
  },
  de: {
    "what-is-reaction-time": {
      title: "Was ist eine gute Reaktionszeit? Durchschnitt und 200 ms erklärt",
      excerpt: "Was ein Wert von 200 ms bedeutet und warum Bildschirm, Eingabegerät und Testmethode deine Online-Reaktionszeit beeinflussen.",
      readTime: "3 Min. Lesezeit",
      sections: [
        { type: "paragraph", content: "Reaktionszeit ist die Zeit zwischen einem Signal und deiner Antwort. Hier klickst, tippst oder drückst du eine Taste, sobald der Bildschirm grün wird. Ein niedriger Wert beschreibt eine schnelle Antwort bei dieser Aufgabe auf deinem Gerät. Er misst weder Intelligenz noch allgemeine sportliche Fähigkeiten." },
        { type: "h2", content: "Wie hoch ist die durchschnittliche Reaktionszeit?" },
        { type: "paragraph", content: "Es gibt keinen Durchschnitt für alle Tests. Auch im visuellen Experiment von Woods und Kollegen beeinflusste die Hardwareverzögerung die Messung. Studienwerte sind kein weltweit gültiger Maßstab für diese Website. Prüfe zuerst Reiz, Gerät und Auswertung." },
        { type: "h2", content: "Sind 200 ms gut?" },
        { type: "paragraph", content: "Ein wiederholbarer Durchschnitt von etwa 200 ms lässt sich als schnelle visuelle Klickreaktion beschreiben. Er liefert aber keinen validierten weltweiten Prozentrang. Auch einzelne Werte von 150, 250 oder 300 ms bestimmen weder Profistatus noch Gesundheit. Ein sehr schneller Versuch kann Vorwegnahme enthalten; ein langsamer kann durch Ablenkung entstehen." },
        { type: "h2", content: "Drei unterschiedliche Aufgaben" },
        { type: "list", items: ["Einfache Reaktion: eine bekannte Antwort auf ein Signal. Dazu gehört dieser Test mit fünf Runden.", "Wahlreaktion: je nach Signal eine andere Antwort auswählen. Die Entscheidung zählt zur Zeit.", "Erkennung oder Go/No-Go: nur auf Zielsignale reagieren. Auch Fehler sind wichtig."] },
        { type: "h2", content: "Wie genau ist ein Online-Test?" },
        { type: "paragraph", content: "Eine präzise Browseruhr beseitigt keine Verzögerung von Anzeige, Eingabegerät oder Browserabläufen. Ein Animationsaufruf kann auch nicht bestätigen, wann die Farbe tatsächlich dein Auge erreicht. Das Ergebnis ist eine Schätzung auf diesem Gerät, keine im Labor kalibrierte Messung." },
        { type: "ordered-list", items: ["Behalte Gerät, Browser, Eingabemethode und Handposition bei.", "Übe einmal und warte danach auf den tatsächlichen Farbwechsel, statt die Wartezeit zu erraten.", "Beende fünf Runden und betrachte Durchschnitt sowie Einzelwerte.", "Wiederhole den Test an anderen Tagen unter ähnlichen Bedingungen."] },
        { type: "highlight", content: "Erstelle mit fünf kostenlosen Runden einen persönlichen Ausgangswert auf deinem Gerät." }
      ]
    },
    "how-to-improve-reaction-time": {
      title: "Reaktionszeit verbessern: Eine wiederholbare Übungsroutine",
      excerpt: "Erstelle einen Ausgangswert, übe ohne zu raten und verfolge Klickleistung und Fähigkeiten in Spiel oder Sport getrennt.",
      readTime: "3 Min. Lesezeit",
      sections: [
        { type: "paragraph", content: "Lege zuerst fest, welche Antwort du verbessern möchtest: auf Grün klicken, ein Spielziel auswählen oder einen Ball abfangen. Die folgende Routine hilft beim Organisieren eigener Übungen. Sie ist kein klinisches Training und verspricht keine bestimmte Zahl eingesparter Millisekunden." },
        { type: "h2", content: "Zuerst einen Ausgangswert bestimmen" },
        { type: "paragraph", content: "Wähle ein Gerät und eine Eingabemethode. Nach einem Probedurchgang folgen drei Durchgänge mit je fünf Runden und kurzen Pausen. Notiere jeden Durchschnitt. Nutze beim erneuten Test dieselbe Anzahl. Nur den besten Durchgang zu wählen kann Zufall wie Fortschritt aussehen lassen." },
        { type: "h2", content: "Auf das Signal reagieren" },
        { type: "ordered-list", items: ["Lege die Hand bequem ab und schaue auf die Testfläche.", "Warte auf den Farbwechsel, ohne die Verzögerung herunterzuzählen.", "Erfasse zu frühe Eingaben als Fehler.", "Mache nach dem Durchgang eine Pause und höre bei nachlassender Aufmerksamkeit auf."] },
        { type: "h2", content: "Ein kleines Protokoll führen" },
        { type: "paragraph", content: "Notiere Datum, Gerät, Eingabe, Durchschnitte, Unterbrechungen und deinen Erholungszustand. Vergleiche mehrere Tage. Nach einem Wechsel von Maus oder Bildschirm beginnst du eine neue Vergleichsreihe, damit eine Geräteänderung nicht als persönliche Verbesserung erscheint." },
        { type: "h2", content: "Für die tatsächliche Aufgabe üben" },
        { type: "paragraph", content: "Erfasse beim Gaming auch Zielauswahl und Genauigkeit. Übe beim Ballsport mit einem Coach Positionierung und Reaktionen auf realistische Zuspiele. Klickwerte beweisen keine Verbesserung dieser Fähigkeiten. Auch die Forschung zu Actionspielen untersucht bestimmte Wahrnehmungsaufgaben und garantiert keinen Nutzen für jede Tätigkeit." },
        { type: "h2", content: "Erholung und Bedingungen beibehalten" },
        { type: "paragraph", content: "Übe zu einer Zeit, zu der du normalerweise ausgeruht bist. Verlängere die Sitzung nicht bis spät in die Nacht, um einen Rekord zu jagen. Koffein und Ergänzungsmittel sind für diese Routine nicht erforderlich. Gesucht ist eine wiederholbare Veränderung, die sich auch in der eigentlichen Aufgabe überprüfen lässt." },
        { type: "highlight", content: "Beginne mit fünf Runden und verwende beim nächsten geplanten Training dieselbe Ausstattung." }
      ]
    },
    "reaction-time-by-age": {
      title: "Reaktionszeit nach Alter: So ordnest du deinen Wert ein",
      excerpt: "Warum Alterstabellen Grenzen haben und wie du deine Ergebnisse ohne erfundene Altersnormen vergleichen kannst.",
      readTime: "3 Min. Lesezeit",
      sections: [
        { type: "paragraph", content: "Reaktionszeit verändert sich im Leben, aber es gibt keinen universellen Millisekundenwert für jedes Alter. Eine Tabelle ist nur zusammen mit Aufgabe, Stichprobe, Geräten und Auswertung sinnvoll. Diese Website besitzt keinen repräsentativen, validierten Datensatz mit Altersnormen." },
        { type: "h2", content: "Was die Forschung zeigt" },
        { type: "paragraph", content: "Woods und Kollegen beobachteten altersbezogene Verlangsamung bei einer Erwachsenenaufgabe. Hardwick und Kollegen untersuchten Veränderungen der Bewegungsvorbereitung. Daraus lässt sich kein fester Wert für jede Person desselben Alters ableiten." },
        { type: "h2", content: "Warum es keine Bestehensgrenze pro Alter gibt" },
        { type: "list", items: ["Klicken, eine Taste auswählen und den ganzen Körper bewegen sind unterschiedliche Aufgaben.", "Eine Erwachsenenstichprobe liefert keine Norm für Kinder; eine Gelegenheitsstichprobe repräsentiert nicht die Welt.", "Kalibrierte Laborwerte lassen sich nicht direkt auf ein Smartphone übertragen.", "Ein Gruppenmittelwert ist keine Grenze für Gesundheit oder Fähigkeit."] },
        { type: "h2", content: "Ist mein Wert für mein Alter gut?" },
        { type: "paragraph", content: "Dieser Test liefert keinen validierten Altersprozentrang. Vergleiche vollständige Durchschnitte aus fünf Runden mit derselben Eingabemethode über mehrere Tage. Ein Unterschied zu einem jüngeren oder älteren Freund beweist keine Ursache. Ebenso gibt es kein genaues Spitzenalter für alle Formen der Reaktion." },
        { type: "h2", content: "Ergebnisse sinnvoll nutzen" },
        { type: "paragraph", content: "Erstelle einen Ausgangswert, wenn du ausgeruht und bequem positioniert bist. Nach einem Gerätewechsel führst du eine eigene Reihe. Der Test bewertet weder Fahrtüchtigkeit noch Krankheiten. Bei plötzlichen Veränderungen der Alltagskoordination ist fachlicher Rat sinnvoller als ein Browserwert." },
        { type: "highlight", content: "Miss fünf Runden als persönlichen Ausgangswert und vergleiche später mit deinen eigenen Ergebnissen." }
      ]
    },
    "gamers-vs-athletes-reaction-time": {
      title: "Gamer oder Sportler: Lassen sich Reaktionszeiten vergleichen?",
      excerpt: "Warum Mausklick, Sprintstart und Torwartparade keinen direkten Vergleich erlauben und welche Bedingungen fair wären.",
      readTime: "3 Min. Lesezeit",
      sections: [
        { type: "paragraph", content: "Gamer, Sprinter und Torhüter können in ihren Situationen schnell reagieren. Ihre Signale und Bewegungen unterscheiden sich aber. Ein Mausklick, ein Start auf ein Geräusch und eine Parade ergeben nebeneinander keine belastbare Rangliste." },
        { type: "h2", content: "Was ein Klicktest beim Gaming auslässt" },
        { type: "paragraph", content: "Beim Farbtest stehen Signal und Antwort vorher fest. Im Spiel kommen Zielsuche, Erkennen von Gegnern, Aktionswahl und Zielen hinzu. Ein Klickwert sagt keinen Rang in Counter-Strike oder Valorant voraus. Netzwerkverzögerung ist außerdem ein eigener Teil des Spiels." },
        { type: "h2", content: "Forschung ist kein Profidurchschnitt" },
        { type: "paragraph", content: "Green und Kollegen untersuchten Wahrnehmungsentscheidungen im Zusammenhang mit Actionspielen. Das liefert weder einen universellen Durchschnitt für Profis noch einen Beleg, dass Gamer auf jeder Aufgabe schneller als Sportler sind." },
        { type: "h2", content: "Bewegung und Position im Sport" },
        { type: "paragraph", content: "Ein Sprinter reagiert auf Schall mit koordiniertem Krafteinsatz. Ein Torwart beurteilt den Ball und bewegt sich zum Abfangpunkt. Weg, Position und sichtbare Informationen verändern die Aufgabe. Diese Zeiten sind keine reinen visuellen Klickwerte." },
        { type: "h2", content: "Bedingungen für einen fairen Vergleich" },
        { type: "ordered-list", items: ["Nutze dasselbe Gerät, dieselbe Eingabe, Erklärung und Eingewöhnung.", "Halte Aufgabe und Rundenzahl gleich; vergleiche keinen Bestwert mit einem Durchschnitt.", "Zähle Fehler und Frühstarts mit.", "Beschreibe Teilnehmer und Auswertung. Einige Freunde stehen nicht für alle Gamer oder Sportler."] },
        { type: "highlight", content: "Vergleiche deine eigenen Gaming-Übungen mit fünf Runden unter denselben Bedingungen." }
      ]
    },
    "caffeine-and-reaction-time": {
      title: "Koffein und Reaktionszeit: Was Studien aussagen können",
      excerpt: "Warum Gewohnheiten, Abstinenz, Übung und Testbedingungen zählen und ein einzelner Kaffeevergleich keine Wirkung beweist.",
      readTime: "3 Min. Lesezeit",
      sections: [
        { type: "paragraph", content: "Koffein kann gemessene Reaktionszeiten beeinflussen. Es gibt aber keine verlässliche Regel, nach der eine Tasse Kaffee eine feste Millisekundenzahl vom Browserwert abzieht. Sich wacher fühlen, schneller handeln und besser entscheiden sind unterschiedliche Ergebnisse." },
        { type: "h2", content: "Versuchsbedingungen mitlesen" },
        { type: "paragraph", content: "Die Arbeiten von Smith, Rogers sowie Addicott und ihren Kollegen verwenden unterschiedliche Bedingungen und Messgrößen. Gewohnter Konsum und Abstinenz beeinflussen die Einordnung. Eine gleiche Verbesserung für alle lässt sich daraus nicht garantieren. Die Originalarbeiten stehen unten." },
        { type: "h2", content: "Warum der zweite Versuch kein Beweis ist" },
        { type: "list", items: ["Du bist im zweiten Durchgang bereits mit der Bedienung vertraut.", "Die Erwartung nach einem Kaffee kann dein Vorgehen verändern.", "Aufmerksamkeit und Werte schwanken von Versuch zu Versuch.", "Andere Geräte oder Eingaben verändern den Vergleich."] },
        { type: "h2", content: "Protokoll statt Dosierungsempfehlung" },
        { type: "paragraph", content: "Wenn du ohnehin Ergebnisse notierst, halte normale Gewohnheiten fest, ohne aus einem Durchgang Kausalität abzuleiten. Du musst dafür weder mehr Koffein nehmen noch es abrupt weglassen oder Schlaf einsparen. Diese Website bestimmt keine sichere Dosis und keine persönliche Eignung." },
        { type: "h2", content: "Ein schneller Klick ersetzt keine Erholung" },
        { type: "paragraph", content: "Ein besserer Klickwert nach Kaffee beweist weder ausgeglichene Schlafverluste noch Fahrtüchtigkeit. Ein kurzer Browsertest kann anhaltende Wachheit nicht umfassend beurteilen." },
        { type: "highlight", content: "Notiere fünf Runden in deinem normalen Alltag und beobachte natürliche Schwankungen über mehrere Sitzungen." }
      ]
    },
    "sleep-deprivation-reaction-time": {
      title: "Schlafmangel und Reaktionszeit: Warum Beständigkeit zählt",
      excerpt: "Wie Schlafbeschränkung Aufmerksamkeit betrifft und warum ein schneller Klick keine ausreichende Erholung nachweist.",
      readTime: "3 Min. Lesezeit",
      sections: [
        { type: "paragraph", content: "Schlafmangel kann auch die Zuverlässigkeit deiner Reaktionen verändern. Ein schneller Klick kann neben verpassten Signalen oder sehr langsamen Runden auftreten. Der Bestwert allein eignet sich deshalb schlecht, um Erholung zu beurteilen." },
        { type: "h2", content: "Was Schlafstudien zeigen" },
        { type: "paragraph", content: "Van Dongen und Kollegen beobachteten bei wiederholter Schlafbeschränkung zunehmende Leistungseinbußen, die das subjektive Müdigkeitsgefühl nicht vollständig widerspiegelte. Daraus folgt keine feste prozentuale Verschlechterung für diesen Browserwert." },
        { type: "h2", content: "Fünf Runden sind keine Vigilanzprüfung" },
        { type: "paragraph", content: "Schlafforschung verwendet auch längere Aufgaben, um Aufmerksamkeitsausfälle zu erfassen. Hier wird nur ein kurzer Zeitraum betrachtet. Der Test misst keine Schlafschuld, schließt Müdigkeit nicht aus und bestätigt keine sichere Fahrt oder Maschinenbedienung." },
        { type: "h2", content: "Eine hilfreiche Vergleichsreihe" },
        { type: "ordered-list", items: ["Behalte normalen Schlaf bei und schlafe nicht absichtlich weniger für einen Vergleich.", "Halte Gerät, Eingabemethode und ungefähre Uhrzeit gleich.", "Erfasse fünf Runden, Durchschnitt, Erholung und Unterbrechungen.", "Beobachte mehrere Tage, statt einem einzelnen Ausreißer eine Ursache zuzuschreiben."] },
        { type: "h2", content: "Kein fester Countdown zur Erholung" },
        { type: "paragraph", content: "Ein Browserwert verrät nicht, wie viel Erholungsschlaf nötig ist. Ein Nickerchen oder eine feste Zahl Nächte garantiert keinen bestimmten Wert. Übe ausgeruht und höre auf, wenn Aufmerksamkeit fehlt. Beeinträchtigt Schläfrigkeit wiederholt deinen Alltag, hole fachlichen Rat ein." },
        { type: "highlight", content: "Erstelle ausgeruht einen Ausgangswert über fünf Runden und vergleiche ähnliche Bedingungen." }
      ]
    },
    "goalkeeper-reaction-time-vozinha-world-cup": {
      title: "Torwart-Reaktionszeit: Vozinha, Antizipation und Klicktests",
      excerpt: "Vozinhas WM-Spiel als Anlass, Entscheidungen und Bewegungen bei Paraden sowie die Grenzen eines Online-Tests zu verstehen.",
      readTime: "3 Min. Lesezeit",
      sections: [
        { type: "paragraph", content: "Der offizielle FIFA-Bericht bestätigt das 0:0 zwischen Spanien und Cabo Verde am 15. Juni 2026 mit Vozinha im Tor. Dieses Ergebnis misst jedoch nicht seine persönliche visuelle Reaktionszeit in Millisekunden." },
        { type: "h2", content: "Was zu einer Parade gehört" },
        { type: "list", items: ["Reaktion: nach einem wahrnehmbaren Signal antworten.", "Antizipation: früh verfügbare Informationen zur Vorbereitung nutzen. Die Vorhersage kann falsch sein.", "Bewegungszeit: die Zeit, um mit Schritt oder Sprung den Ball zu erreichen."] },
        { type: "paragraph", content: "Geschwindigkeit, Entfernung, Winkel, Sicht und Position verändern Zeit und Weg. Eine gute Parade lässt sich nicht in Klickgeschwindigkeit umrechnen. Eine frühe Bewegung im Video verrät auch nicht eindeutig, welchen Hinweis der Torwart genutzt hat." },
        { type: "h2", content: "Grenzen der Elfmeterforschung" },
        { type: "paragraph", content: "Das Videoexperiment von Peiyong und Inomata zeigt die Bedeutung des Zeitpunkts verfügbarer Informationen. Es begründet keine allgemeine Regel, mit einer bestimmten Hüft- oder Fußposition jede Schussrichtung zuverlässig vorherzusagen." },
        { type: "h2", content: "Übungen für das Gespräch mit einem Coach" },
        { type: "ordered-list", items: ["Pausiere einen Clip vor dem Ballkontakt, sage die Richtung voraus und prüfe die Genauigkeit.", "Nutze unbekannte Clips, damit Erinnerung nicht als Antizipation zählt.", "Übe Bereitschaftsposition und erste Bewegung mit passendem Balltempo; steigere die Schwierigkeit mit einem Coach.", "Bewerte richtige Entscheidungen und erfolgreiche Abwehr getrennt vom Klickwert."] },
        { type: "h2", content: "Misst der Online-Test Torwartfähigkeit?" },
        { type: "paragraph", content: "Fünf Runden liefern einen persönlichen Klick-Ausgangswert auf deinem Gerät. Ohne gleichartig gemessene Daten ist kein Vergleich mit Vozinha möglich. Nutze das als Ergänzung und beurteile Paraden anhand sportlicher Aufgaben und Rückmeldungen." },
        { type: "highlight", content: "Erstelle einen Ausgangswert mit fünf visuellen Reaktionsrunden und bewerte Torwarttraining separat." }
      ]
    }
  },
  vi: {
    "what-is-reaction-time": {
      title: "Phản xạ bao nhiêu là nhanh? Hiểu mức trung bình và mốc 200 ms",
      excerpt: "Tìm hiểu thời gian phản ứng đơn giản, ý nghĩa của mốc 200 ms và cách màn hình, thiết bị nhập liệu cùng phương pháp đo ảnh hưởng đến kết quả trực tuyến.",
      readTime: "4 phút đọc",
      sections: [
        { type: "paragraph", content: "Thời gian phản ứng là khoảng từ khi tín hiệu xuất hiện đến lúc bạn đáp lại. Trong bài kiểm tra bằng hình ảnh, tín hiệu là màn hình đổi màu, còn phản hồi là nhấp chuột, chạm hoặc nhấn phím. Điểm càng thấp nghĩa là bạn hoàn thành chuỗi thao tác cụ thể này càng nhanh; nó không đo trí thông minh, thể lực tổng thể hay mọi loại phản xạ." },
        { type: "h2", content: "Thời gian phản ứng trung bình của con người là bao nhiêu?" },
        { type: "paragraph", content: "Không có một mức trung bình áp dụng cho mọi bài kiểm tra. Trong nghiên cứu với 1.469 người trưởng thành, Woods và cộng sự ghi nhận mức trung bình 231 ms ở một tác vụ thị giác được hiệu chuẩn; sau khi hiệu chỉnh độ trễ phần cứng, con số là 213 ms. Đây là kết quả của nghiên cứu đó, không phải chuẩn chung cho toàn thế giới hay mốc tham chiếu đã được hiệu chuẩn cho trang web này." },
        { type: "paragraph", content: "Khi nghe nói đến một mức trung bình, hãy xem người tham gia phải nhận biết tín hiệu gì, phản hồi ra sao, dùng thiết bị nào và con số đó là lượt nhanh nhất hay trung bình cả phiên. Nghe một âm thanh, thấy màu đổi và chọn giữa nhiều mục tiêu là những tác vụ khác nhau." },
        { type: "h2", content: "200 ms có phải là phản xạ nhanh không?" },
        { type: "paragraph", content: "Nếu bạn liên tục đạt trung bình 200 ms trong bài nhấp chuột theo tín hiệu thị giác đơn giản, đó là một kết quả nhanh. Đây chỉ là cách mô tả thực tế, không phải thứ hạng phần trăm đã được kiểm chứng. Một lượt 200 ms không cho biết bạn đứng ở đâu trên thế giới; kết quả chậm hơn trên thiết bị khác cũng chưa chắc nghĩa là phản xạ của bạn kém đi." },
        { type: "paragraph", content: "Với các mức như 150, 250 hay 300 ms, nguyên tắc vẫn vậy: so sánh trung bình của nhiều phiên trong cùng điều kiện. Một lượt nhanh bất thường có thể do đoán trước; một lượt chậm có thể do mất tập trung hoặc độ trễ thiết bị. Không thể dựa vào riêng một lượt để gọi ai đó là vận động viên ưu tú hay chẩn đoán vấn đề sức khỏe." },
        { type: "h2", content: "Phản ứng đơn giản, phản ứng lựa chọn và phản ứng nhận biết" },
        { type: "list", items: ["Phản ứng đơn giản: đáp lại mỗi khi một tín hiệu đã biết xuất hiện. Bài kiểm tra đổi màu gồm năm lượt trên trang này thuộc loại đó.", "Phản ứng lựa chọn: mỗi tín hiệu đòi hỏi một đáp án khác nhau, chẳng hạn trái hoặc phải. Thời gian ra quyết định được tính vào kết quả.", "Phản ứng nhận biết hoặc có/không: chỉ đáp lại tín hiệu mục tiêu và không phản hồi với tín hiệu khác. Cần xét cả lỗi lẫn tốc độ."] },
        { type: "h2", content: "Bài kiểm tra phản xạ trực tuyến chính xác đến đâu?" },
        { type: "paragraph", content: "Bài kiểm tra này dùng đồng hồ performance.now() của trình duyệt. Đồng hồ chính xác không loại bỏ độ trễ do tần số làm mới, xử lý hình ảnh, thiết bị nhập liệu hay lịch chạy của trình duyệt. Hàm gọi lại của hoạt ảnh chạy trước khi màn hình vẽ lại nên không xác nhận được chính xác lúc màu mới đến mắt bạn. Kết quả là ước tính thời gian phản hồi trên bộ thiết bị hiện tại, không phải phép đo được hiệu chuẩn trong phòng thí nghiệm." },
        { type: "h2", content: "Cách có được kết quả để so sánh" },
        { type: "ordered-list", items: ["Mỗi lần hãy dùng cùng thiết bị, trình duyệt và cách phản hồi. Đặt tay ở tư thế thoải mái, dễ lặp lại.", "Thử một phiên làm quen, rồi chờ màu thực sự đổi thay vì đoán thời điểm đổi màu.", "Hoàn thành cả năm lượt. Ghi lại trung bình và từng lượt, không chỉ cú nhấp nhanh nhất.", "Thử lại vào ngày khác trong điều kiện tương tự trước khi coi một thay đổi nhỏ là tiến bộ."] },
        { type: "highlight", content: "Thử miễn phí năm lượt để xác lập mức tham chiếu trên thiết bị bạn đang dùng." }
      ]
    },
    "how-to-improve-reaction-time": {
      title: "Cách cải thiện thời gian phản ứng: Lịch tập dễ lặp lại",
      excerpt: "Thiết lập mức tham chiếu hữu ích, tập phản hồi thay vì đoán trước và theo dõi tiến bộ nhất quán khi nhấp chuột, chơi game hoặc chơi thể thao.",
      readTime: "4 phút đọc",
      sections: [
        { type: "paragraph", content: "Muốn cải thiện thời gian phản ứng, trước tiên hãy xác định bạn muốn phản hồi kiểu nào nhanh hơn. Thấy màu xanh rồi nhấp chuột khác với chọn mục tiêu trong game hoặc di chuyển để đón bóng. Các bước dưới đây giúp bạn tổ chức việc tập luyện; chúng không phải phác đồ lâm sàng và cũng không hứa hẹn rút ngắn một số mili giây cố định." },
        { type: "h2", content: "1. Ghi mức ban đầu trước khi thay đổi bất cứ điều gì" },
        { type: "paragraph", content: "Chọn một thiết bị và một cách nhập liệu. Làm một phiên để quen thao tác, sau đó ghi trung bình của ba phiên, mỗi phiên năm lượt, với quãng nghỉ ngắn ở giữa. Khi kiểm tra lại, giữ nguyên số phiên. Ghi đủ mọi phiên đã định giúp bạn không chỉ chọn một kỷ lục may mắn." },
        { type: "h2", content: "2. Tập phản hồi, đừng tập đoán" },
        { type: "ordered-list", items: ["Đặt tay thoải mái và nhìn vào vùng kiểm tra.", "Bắt đầu một lượt và chờ màu đổi; đừng tự đếm ngược thời gian chờ.", "Chỉ phản hồi một lần khi thấy tín hiệu. Ghi các lần nhấn sớm thành lỗi, không coi đó là tiến bộ về tốc độ.", "Hoàn thành phiên rồi nghỉ. Nếu khó tập trung, hãy dừng; tập nhiều lượt hơn chưa chắc hữu ích hơn."] },
        { type: "h2", content: "3. Ghi nhật ký tập luyện ngắn gọn" },
        { type: "paragraph", content: "Ghi ngày, thiết bị, cách nhập liệu, trung bình mỗi phiên và những gián đoạn bất thường. Thêm một dòng về việc bạn có thấy mình đã nghỉ ngơi đủ không. Sau vài phiên, xem sự thay đổi có duy trì qua nhiều ngày không. Một lần nhanh hơn rồi trở lại mức cũ là bằng chứng yếu hơn việc nhiều phiên cùng cải thiện." },
        { type: "h2", content: "4. Tách ảnh hưởng của thiết bị khỏi tiến bộ của bản thân" },
        { type: "paragraph", content: "Chuyển từ điện thoại sang chuột hoặc đổi màn hình sẽ thay đổi điều kiện đo. Hãy tạo mức tham chiếu mới sau mỗi lần đổi phần cứng. Điểm thấp hơn có thể cho thấy cả bộ thiết lập hoạt động tốt hơn, nhưng không chứng minh hệ thần kinh của bạn đã nhanh hơn." },
        { type: "h2", content: "5. Tập đúng kỹ năng cần dùng trong game hoặc thể thao" },
        { type: "paragraph", content: "Với game, hãy thêm bài tập chọn đúng mục tiêu và theo dõi cả độ chính xác lẫn thời gian. Với môn bóng, hãy cùng huấn luyện viên tập vị trí và phản hồi với tín hiệu sát thực tế. Điểm nhấp theo màu không đủ chứng minh hai kỹ năng đó đã cải thiện. Nghiên cứu của Green và cộng sự về game hành động xem xét những quyết định tri giác cụ thể, không xác lập lợi ích chung cho mọi hoạt động." },
        { type: "h2", content: "6. Tính cả việc nghỉ ngơi khi so sánh" },
        { type: "paragraph", content: "Nghiên cứu có kiểm soát của Van Dongen và cộng sự cho thấy thiếu ngủ có thể làm giảm khả năng duy trì chú ý. Chọn lúc bạn thấy tỉnh táo, nghỉ giữa các phiên và đừng thức khuya chỉ để săn điểm. Caffeine, thực phẩm bổ sung và thiếu ngủ là những biến số không cần thiết cho lịch tập này." },
        { type: "highlight", content: "Hãy bắt đầu bằng một bài kiểm tra năm lượt, rồi giữ nguyên bộ thiết lập ở phiên tập tiếp theo." }
      ]
    },
    "reaction-time-by-age": {
      title: "Thời gian phản ứng theo tuổi: Hiểu kết quả của bạn",
      excerpt: "Tìm hiểu tuổi tác ảnh hưởng đến phản xạ ra sao, vì sao khó so sánh bảng điểm theo tuổi trên mạng và cách theo dõi kết quả cá nhân mà không dựa vào chuẩn mực thiếu căn cứ.",
      readTime: "3 phút đọc",
      sections: [
        { type: "paragraph", content: "Thời gian phản ứng thay đổi theo tuổi, nhưng không có mục tiêu mili giây chung cho từng tuổi hay từng thập kỷ. Bảng điểm theo tuổi chỉ có ý nghĩa khi biết bài kiểm tra, người tham gia, thiết bị và cách tính điểm tạo ra bảng đó. Trang này không có bộ dữ liệu chuẩn theo tuổi vừa đại diện cho dân số vừa được kiểm chứng." },
        { type: "h2", content: "Nghiên cứu nói gì về tuổi và thời gian phản ứng?" },
        { type: "paragraph", content: "Woods và cộng sự nhận thấy phản hồi chậm dần theo tuổi trong một tác vụ thị giác được hiệu chuẩn ở người trưởng thành. Một nghiên cứu riêng của Hardwick và cộng sự liên hệ việc phản hồi chậm hơn ở người lớn tuổi với thay đổi trong khâu chuẩn bị vận động. Những phát hiện này mô tả các thí nghiệm cụ thể, không ấn định điểm cho từng người cùng tuổi." },
        { type: "h2", content: "Vì sao chúng tôi không công bố bảng điểm cho từng tuổi" },
        { type: "list", items: ["Các tác vụ đo những thứ khác nhau. Nhấp chuột theo một tín hiệu, chọn phím và di chuyển toàn thân không thể đánh đồng.", "Mẫu nghiên cứu rất quan trọng. Nghiên cứu trên người lớn không xác lập mức bình thường cho trẻ em; mẫu được chọn vì tiện cũng không đại diện cho cả thế giới.", "Thiết bị tạo thêm độ trễ. Không thể áp thẳng kết quả từ phần cứng đã hiệu chuẩn sang điện thoại hoặc máy tính chưa hiệu chuẩn.", "Trung bình của một nhóm che khuất khác biệt giữa từng người. Đó không phải ngưỡng đạt về sức khỏe hay năng lực."] },
        { type: "h2", content: "Phản xạ của tôi có tốt so với tuổi không?" },
        { type: "paragraph", content: "Bài kiểm tra này không đưa ra thứ hạng phần trăm theo tuổi đã được kiểm chứng. Nó giúp bạn ghi nhận kết quả ở một tác vụ có thể lặp lại. Hãy giữ cùng cách nhập liệu, so sánh trung bình của đủ năm lượt và theo dõi qua nhiều ngày. Điểm chậm hơn một người bạn khác tuổi không chứng minh tuổi tác là nguyên nhân." },
        { type: "h2", content: "Phản xạ đạt đỉnh ở tuổi 20, 24 hay 30?" },
        { type: "paragraph", content: "Không có một tuổi đạt đỉnh chính xác cho mọi kiểu phản hồi. Trước khi tin nhận định như vậy, hãy xem nghiên cứu đo cú nhấp theo tín hiệu thị giác, quyết định phức tạp trong game hay một kỹ năng khác. Kinh nghiệm trong thể thao hoặc công việc còn bao gồm kiến thức và lựa chọn mà bài kiểm tra này không đo." },
        { type: "h2", content: "Dùng kết quả sao cho hữu ích" },
        { type: "paragraph", content: "Hãy lập mức tham chiếu cá nhân khi đã nghỉ ngơi và ngồi thoải mái. Nếu đổi thiết bị hoặc cách phản hồi, hãy bắt đầu chuỗi so sánh riêng. Dùng bài kiểm tra để tìm hiểu và luyện tập, không để đánh giá khả năng lái xe hay chẩn đoán bệnh liên quan đến tuổi. Nếu khả năng phối hợp trong sinh hoạt hằng ngày thay đổi đột ngột, hãy tìm lời khuyên chuyên môn phù hợp thay vì dựa vào điểm trên trình duyệt." },
        { type: "highlight", content: "Ghi mức tham chiếu cá nhân qua năm lượt rồi so sánh với những phiên sau của chính bạn." }
      ]
    },
    "gamers-vs-athletes-reaction-time": {
      title: "Game thủ và vận động viên: Có thể so thời gian phản ứng không?",
      excerpt: "Hiểu bài kiểm tra phản xạ của game thủ đo điều gì, vì sao kết quả thể thao khác biệt và cách so sánh công bằng mà không dựa vào số liệu chuyên nghiệp thiếu căn cứ.",
      readTime: "3 phút đọc",
      sections: [
        { type: "paragraph", content: "Game thủ, vận động viên chạy nước rút và thủ môn đều có thể phản hồi nhanh trong tình huống của mình, nhưng thời gian được công bố có thể đến từ những tác vụ khác nhau. Không thể xác định ai thắng khi đem cú nhấp chuột so với phản ứng trên bàn đạp xuất phát hoặc một pha cản phá thành công. Tín hiệu và động tác yêu cầu phải giống nhau thì các con số mới có thể so sánh." },
        { type: "h2", content: "Bài kiểm tra nhấp chuột bỏ sót điều gì trong game?" },
        { type: "paragraph", content: "Bài đổi màu chỉ có một tín hiệu và một phản hồi đã biết trước. Trong game, bạn còn phải tìm mục tiêu, xác định đó có phải đối thủ không, chọn hành động và ngắm bắn. Điểm nhấp thấp không đo các quyết định ấy và không dự đoán thứ hạng trong Counter-Strike hay Valorant. Độ trễ mạng khi đấu trực tuyến cũng là yếu tố riêng, khác với bài kiểm tra chạy cục bộ trên trình duyệt." },
        { type: "h2", content: "Nghiên cứu về game thực sự đã đo gì?" },
        { type: "paragraph", content: "Green và cộng sự nghiên cứu kinh nghiệm chơi game hành động bằng các bài ra quyết định dựa trên cảm giác, và ghi nhận khả năng sử dụng bằng chứng cảm giác tốt hơn. Phát hiện đó liên quan đến những tác vụ được nghiên cứu; nó không cho biết mức trung bình chung của game thủ chuyên nghiệp hay chứng minh game thủ hơn vận động viên ở mọi bài phản xạ." },
        { type: "h2", content: "Vì sao phản hồi của vận động viên khác biệt?" },
        { type: "paragraph", content: "Người chạy nước rút nghe tín hiệu rồi phối hợp lực đạp, còn thủ môn phải phán đoán bóng đang di chuyển và với tới điểm cản phá. Thời gian vận động, vị trí đứng và thông tin thị giác sẵn có đều quan trọng. Không thể xem một con số đo trong hoạt động ấy là thời gian nhấp chuột theo tín hiệu thị giác của người đó." },
        { type: "h2", content: "So sánh công bằng cần cùng điều kiện" },
        { type: "ordered-list", items: ["Cho mọi người cùng hướng dẫn, thời gian làm quen, thiết bị và cách nhập liệu.", "Dùng cùng tác vụ và số lượt. Đừng so lượt nhanh nhất của người này với trung bình của người kia.", "Tính cả phản hồi sai và nhấn quá sớm. Đoán nhanh hơn không phải biểu hiện tốt hơn.", "Nêu rõ người tham gia và cách tổng hợp điểm. Vài người bạn không đại diện cho toàn bộ vận động viên hay game thủ."] },
        { type: "h2", content: "Dùng bài nhấp chuột khi luyện game như thế nào?" },
        { type: "paragraph", content: "Một phiên năm lượt có thể ghi lại khả năng nhấp theo tín hiệu thị giác trên bộ thiết lập của bạn theo cách dễ lặp lại. Hãy đo độ chính xác và bài ra quyết định trong game riêng. Nếu đổi chuột hoặc màn hình, hãy ghi lại để không nhầm cải thiện phần cứng với hiệu quả tập luyện." },
        { type: "highlight", content: "Khi so các phiên luyện game của chính mình, hãy làm cùng bài năm lượt trên cùng bộ thiết lập." }
      ]
    },
    "caffeine-and-reaction-time": {
      title: "Caffeine và thời gian phản ứng: Nghiên cứu cho biết gì?",
      excerpt: "Uống cà phê có làm phản xạ nhanh hơn? Tìm hiểu vai trò của tác vụ, thói quen dùng caffeine và việc ngừng dùng, cùng giới hạn của một lần đo trước và sau.",
      readTime: "3 phút đọc",
      sections: [
        { type: "paragraph", content: "Caffeine có thể ảnh hưởng đến thời gian phản ứng đo được, nhưng không có quy tắc đáng tin cậy rằng một ly cà phê sẽ giảm đúng bao nhiêu mili giây trong bài kiểm tra trên trình duyệt. Cảm thấy tỉnh táo hơn, phản hồi nhanh hơn và quyết định tốt hơn là ba kết quả khác nhau. Cần xem cách thiết kế nghiên cứu trước khi diễn giải bất kỳ nhận định nào." },
        { type: "h2", content: "Các thí nghiệm có kiểm soát tìm thấy gì?" },
        { type: "paragraph", content: "Trong những điều kiện được nghiên cứu, thử nghiệm của Smith và cộng sự ghi nhận phản hồi đơn giản nhanh hơn sau khi dùng caffeine. Rogers và cộng sự xem xét thói quen tiêu thụ và việc không dùng caffeine qua đêm, tìm thấy mối quan hệ phức tạp hơn giữa sự tỉnh táo, lo âu và hiệu suất. Các thí nghiệm này không đảm bảo ai cũng được lợi như nhau." },
        { type: "h2", content: "Vì sao thói quen dùng và việc ngừng dùng lại quan trọng?" },
        { type: "paragraph", content: "So sánh trước và sau có thể trộn lẫn nhiều tác động: lượng caffeine thường dùng, khoảng thời gian ngừng dùng, thời điểm trong ngày và việc làm bài nhiều lần. Thí nghiệm của Addicott và Laurienti cũng cho thấy việc ngừng dùng làm thay đổi phản ứng với caffeine ở một số chỉ số. Nghiên cứu kiểm soát các yếu tố này cho biết nhiều hơn một lần uống cà phê rồi nhấp chuột." },
        { type: "h2", content: "Vì sao lần thử thứ hai nhanh hơn chưa phải bằng chứng?" },
        { type: "list", items: ["Luyện tập: ở phiên thứ hai, bạn đã quen thời gian chờ và cách thao tác.", "Kỳ vọng: biết mình vừa uống cà phê có thể thay đổi cách bạn làm bài.", "Dao động thông thường: mức tập trung và thời gian phản hồi thay đổi qua từng lượt.", "Bộ thiết lập: đổi thiết bị hoặc cách nhập liệu khiến phép so sánh thay đổi."] },
        { type: "h2", content: "Dùng bài kiểm tra để ghi nhận, không để chọn liều" },
        { type: "paragraph", content: "Nếu đã ghi nhật ký phản xạ, hãy ghi cả thói quen thường ngày bên cạnh kết quả và tránh kết luận từ một phiên. Bạn không cần tăng caffeine, đột ngột ngừng mức thường dùng hoặc thiếu ngủ để sử dụng trang này. Bài kiểm tra không xác định liều an toàn hay caffeine có phù hợp với bạn không." },
        { type: "h2", content: "Cà phê có thay giấc ngủ để phản xạ nhanh hơn không?" },
        { type: "paragraph", content: "Nhấp nhanh hơn sau khi uống cà phê không chứng minh tác động của thiếu ngủ đã biến mất, cũng không chứng minh ai đó lái xe an toàn. Một bài kiểm tra ngắn trên trình duyệt không đánh giá khả năng duy trì tỉnh táo. Hãy xem việc nghỉ ngơi và các quyết định sức khỏe riêng với điểm số." },
        { type: "highlight", content: "Ghi mức tham chiếu năm lượt trong nếp sinh hoạt thường ngày; dùng nhiều phiên để hiểu mức dao động tự nhiên." }
      ]
    },
    "sleep-deprivation-reaction-time": {
      title: "Thiếu ngủ và thời gian phản ứng: Vì sao cần xem độ ổn định",
      excerpt: "Tìm hiểu thiếu ngủ ảnh hưởng đến sự chú ý ra sao, vì sao bài kiểm tra ngắn không đo được thiếu ngủ tích lũy và cách so sánh những phiên đã nghỉ ngơi đầy đủ.",
      readTime: "3 phút đọc",
      sections: [
        { type: "paragraph", content: "Thiếu ngủ có thể ảnh hưởng đến độ ổn định của phản hồi, chứ không chỉ lượt nhanh nhất. Một cú nhấp nhanh đôi khi vẫn đi kèm tín hiệu bị bỏ lỡ hoặc những lượt chậm bất thường. Vì thế, điểm tốt nhất không cho biết đáng tin cậy rằng bạn đã nghỉ ngơi đủ." },
        { type: "h2", content: "Nghiên cứu về hạn chế giấc ngủ cho thấy gì?" },
        { type: "paragraph", content: "Trong nghiên cứu có kiểm soát năm 2003, Van Dongen và cộng sự nhận thấy hiệu suất suy giảm tích lũy khi giấc ngủ bị hạn chế nhiều lần. Cảm giác buồn ngủ do người tham gia tự báo cáo không phản ánh hết mức suy giảm tăng lên. Nghiên cứu cho thấy cần coi trọng tình trạng thiếu ngủ lặp lại, nhưng không đưa ra tỷ lệ phần trăm chung cho mức chậm đi trên trang này." },
        { type: "h2", content: "Bài năm lượt không đánh giá được khả năng duy trì tỉnh táo" },
        { type: "paragraph", content: "Nghiên cứu về giấc ngủ thường dùng các tác vụ kéo dài để đo những lần mất tập trung theo thời gian. Một phiên nhấp theo màu ngắn chỉ quan sát khoảng thời gian ngắn hơn nhiều. Nó không đo được mức thiếu ngủ tích lũy, loại trừ mệt mỏi hay chứng nhận bạn đủ tỉnh táo để lái xe, vận hành thiết bị hoặc thi đấu. Điểm tốt không phủ nhận cảm giác buồn ngủ." },
        { type: "h2", content: "Cách so sánh kết quả cá nhân cho hữu ích" },
        { type: "ordered-list", items: ["Giữ nếp sinh hoạt thường ngày. Đừng cố tình ngủ ít đi để tạo phép so sánh.", "Dùng cùng thiết bị, cách nhập liệu và khung giờ kiểm tra gần giống nhau.", "Ghi đủ năm lượt và điểm trung bình, kèm ghi chú ngắn về việc nghỉ ngơi và gián đoạn.", "Quan sát kết quả qua nhiều ngày. Đừng vội gán nguyên nhân cho một phiên nhanh hoặc chậm bất thường."] },
        { type: "h2", content: "Vì sao không có thời hạn hồi phục cố định?" },
        { type: "paragraph", content: "Điểm trên trình duyệt không cho biết bạn cần ngủ bù bao nhiêu. Lượng giấc ngủ đã mất, tình trạng những đêm trước đó và chỉ số đang đo đều ảnh hưởng đến khái niệm hồi phục. Chúng tôi không hứa rằng một giấc ngủ ngắn hoặc một số đêm cố định sẽ đưa điểm về mức nhất định." },
        { type: "h2", content: "Nên điều chỉnh việc luyện tập thế nào?" },
        { type: "paragraph", content: "Hãy tập lúc bạn thường đã nghỉ ngơi đủ và dừng khi khó duy trì chú ý. Giữ lịch tập thoải mái, ổn định thay vì kéo dài phiên để săn kỷ lục cá nhân. Nếu buồn ngủ nhiều lần ảnh hưởng đến sinh hoạt hằng ngày, hãy tìm lời khuyên chuyên môn phù hợp thay vì dùng bài phản xạ để tự tìm nguyên nhân." },
        { type: "highlight", content: "Dùng bài năm lượt để ghi mức tham chiếu lúc đã nghỉ ngơi, rồi so các phiên trong điều kiện tương tự." }
      ]
    },
    "goalkeeper-reaction-time-vozinha-world-cup": {
      title: "Phản xạ thủ môn: Vozinha, khả năng đoán trước và bài nhấp chuột",
      excerpt: "Trận đấu World Cup của Vozinha là điểm khởi đầu để hiểu phản xạ thủ môn, khả năng dự đoán và giới hạn của bài kiểm tra nhấp chuột trực tuyến.",
      readTime: "4 phút đọc",
      sections: [
        { type: "paragraph", content: "Báo cáo trận đấu chính thức của FIFA ghi nhận Tây Ban Nha hòa Cabo Verde 0–0 ngày 15 tháng 6 năm 2026, với Vozinha trấn giữ khung thành. Màn trình diễn ấy gợi ra câu hỏi thú vị về phản xạ thủ môn, nhưng báo cáo không đo độ trễ phản hồi thị giác của anh. Không thể quy đổi một pha cản phá thành số mili giây phản xạ cá nhân." },
        { type: "h2", content: "Thời gian phản ứng của thủ môn gồm những gì?" },
        { type: "paragraph", content: "Thủ môn phải nhận ra thông tin hữu ích, quyết định cú sút đòi hỏi điều gì, bắt đầu di chuyển rồi chạm tới bóng. Thời gian có sẵn thay đổi theo khoảng cách, tốc độ, góc sút và tầm nhìn. Vị trí đứng cũng quyết định quãng đường thủ môn phải di chuyển. Bài nhấp chuột chỉ đo một tác vụ tín hiệu và phản hồi đơn giản hơn nhiều." },
        { type: "h2", content: "Phản ứng, đoán trước và di chuyển là ba việc khác nhau" },
        { type: "list", items: ["Phản ứng: đáp lại sau khi một tín hiệu có thể nhận biết xuất hiện.", "Đoán trước: dùng thông tin có sớm hơn để chuẩn bị cho điều có thể xảy ra tiếp theo. Dự đoán có thể sai.", "Thời gian di chuyển: thời gian thực hiện động tác, chẳng hạn bước hoặc đổ người để cản bóng."] },
        { type: "paragraph", content: "Trong thi đấu, ba phần này đan xen nhau. Thấy thủ môn di chuyển sớm trong video quay chậm không cho biết chính xác anh đã dựa vào tín hiệu nào; một pha cứu thua đẹp cũng không chứng minh phản ứng đơn giản của anh nhanh bất thường. Muốn khẳng định Vozinha dùng chiến lược nhận biết cụ thể nào thì cần thêm bằng chứng ngoài tỷ số." },
        { type: "h2", content: "Nghiên cứu về phạt đền cho biết gì và không cho biết gì?" },
        { type: "paragraph", content: "Peiyong và Inomata nghiên cứu phản hồi với video phạt đền và nhận thấy thông tin sẵn có cùng thời điểm phản hồi đều quan trọng. Trong thí nghiệm đó, người tham gia không dự đoán đáng tin cậy hướng bóng trước lúc chạm bóng. Vì vậy, không nên đưa ra quy tắc chung rằng chỉ nhìn một vị trí hông hoặc bàn chân là biết mọi cú sút sẽ đi đâu." },
        { type: "h2", content: "Bài tập thực tế để trao đổi với huấn luyện viên" },
        { type: "ordered-list", items: ["Xem video ngắn và dừng trước khoảnh khắc chạm bóng. Đoán hướng rồi kiểm tra kết quả; ghi tỷ lệ đoán đúng thay vì chỉ cảm giác tự tin.", "Lặp lại với video chưa từng xem để không nhầm việc nhớ cú sút cũ với khả năng đoán trước.", "Tập tư thế sẵn sàng và bước di chuyển đầu tiên với các bài bóng có kiểm soát, tốc độ phù hợp. Tăng độ khó cùng huấn luyện viên, đồng thời chú ý kỹ thuật và an toàn.", "Đánh giá quyết định và số pha cản phá thành công riêng với điểm trên trình duyệt. Mục tiêu là phản hồi hiệu quả trong môn thể thao thực tế."] },
        { type: "h2", content: "Bài kiểm tra trực tuyến có đo được năng lực thủ môn không?" },
        { type: "paragraph", content: "Bài phản xạ thị giác năm lượt có thể cho bạn mức tham chiếu cá nhân khi nhấp chuột trên một thiết bị. Nó không thể chấm khả năng cản phá của bạn hay so bạn với Vozinha nếu không có dữ liệu được đo tương đương. Hãy xem nó là hoạt động bổ trợ nhỏ bên cạnh phản hồi chuyên môn trên sân." },
        { type: "highlight", content: "Thử bài phản xạ thị giác năm lượt để có mức tham chiếu cá nhân, rồi đánh giá việc tập thủ môn bằng thước đo riêng." }
      ]
    }
  },
  fr: {
    "what-is-reaction-time": {
      title: "Quel est un bon temps de réaction ? Moyenne et 200 ms expliquées",
      excerpt: "Comprenez ce que signifie un résultat de 200 ms et comment l'écran, la commande et la méthode influencent le test en ligne.",
      readTime: "3 min de lecture",
      sections: [
        { type: "paragraph", content: "Le temps de réaction est l'intervalle entre un signal et votre réponse. Ici, vous cliquez, touchez l'écran ou appuyez sur une touche lorsqu'il devient vert. Un chiffre plus bas décrit une réponse rapide à cette tâche sur votre appareil. Il ne mesure ni l'intelligence ni l'ensemble des capacités sportives." },
        { type: "h2", content: "Quel est le temps de réaction moyen ?" },
        { type: "paragraph", content: "Aucune moyenne ne convient à tous les tests. Dans l'expérience visuelle de Woods et ses collègues, le délai du matériel influençait aussi la mesure. Les valeurs d'une étude ne constituent pas la moyenne mondiale de ce site. Vérifiez le stimulus, le matériel et le calcul du score." },
        { type: "h2", content: "200 ms, est-ce un bon résultat ?" },
        { type: "paragraph", content: "Une moyenne répétée autour de 200 ms peut être décrite comme un clic visuel rapide. Ce n'est pas un percentile mondial validé. Un essai isolé de 150, 250 ou 300 ms ne détermine ni un niveau professionnel ni un état de santé. Un résultat très rapide peut inclure une anticipation, un résultat lent une distraction." },
        { type: "h2", content: "Trois tâches différentes" },
        { type: "list", items: ["Réaction simple : une réponse connue à un signal. C'est le format des cinq essais de ce site.", "Réaction de choix : sélectionner une réponse selon le signal. La décision fait partie du temps.", "Reconnaissance ou inhibition : répondre seulement au signal cible. Les erreurs comptent aussi."] },
        { type: "h2", content: "Quelle précision en ligne ?" },
        { type: "paragraph", content: "Une horloge précise n'élimine pas les délais de l'écran, du périphérique et du navigateur. Un rappel d'animation ne confirme pas non plus le moment où la couleur atteint réellement vos yeux. Le résultat est une estimation sur cet appareil, pas une mesure étalonnée en laboratoire." },
        { type: "ordered-list", items: ["Gardez le même appareil, navigateur, mode de réponse et placement de la main.", "Familiarisez-vous avec le test, puis attendez la vraie couleur sans deviner le délai.", "Terminez cinq essais et observez la moyenne ainsi que chaque résultat.", "Recommencez d'autres jours dans des conditions similaires."] },
        { type: "highlight", content: "Faites cinq essais gratuits pour établir votre référence personnelle sur cet appareil." }
      ]
    },
    "how-to-improve-reaction-time": {
      title: "Améliorer son temps de réaction : une routine reproductible",
      excerpt: "Établissez une référence, entraînez-vous sans deviner et suivez séparément le clic et les compétences de jeu ou de sport.",
      readTime: "3 min de lecture",
      sections: [
        { type: "paragraph", content: "Choisissez d'abord la réponse à travailler : cliquer au vert, sélectionner une cible ou intercepter un ballon. La routine suivante organise un entraînement personnel. Ce n'est ni un protocole clinique ni une promesse de gagner un nombre précis de millisecondes." },
        { type: "h2", content: "Établir une référence avant tout changement" },
        { type: "paragraph", content: "Choisissez un appareil et une commande. Après une séance de découverte, faites trois séances de cinq essais avec de courtes pauses. Notez chaque moyenne et gardez ce nombre de séances lors des comparaisons. Choisir seulement la meilleure peut faire passer la chance pour un progrès." },
        { type: "h2", content: "Réagir au signal, sans le prédire" },
        { type: "ordered-list", items: ["Posez la main confortablement et regardez la zone de test.", "Attendez la couleur sans décompter le délai.", "Comptez les départs anticipés comme des erreurs.", "Faites une pause après la séance et arrêtez si votre attention baisse."] },
        { type: "h2", content: "Tenir un petit journal utile" },
        { type: "paragraph", content: "Notez la date, l'appareil, la commande, les moyennes, les interruptions et votre état de repos. Comparez plusieurs jours. Après un changement de souris ou d'écran, commencez une autre référence pour distinguer le matériel de votre propre évolution." },
        { type: "h2", content: "Adapter l'exercice à l'activité" },
        { type: "paragraph", content: "Pour le jeu, suivez la sélection des cibles et la précision. Pour un sport de ballon, travaillez avec un entraîneur le placement et les signaux réalistes. Un score de clic ne démontre pas l'amélioration de ces compétences. Les recherches sur les jeux d'action portent également sur des tâches perceptives précises, sans garantir un bénéfice universel." },
        { type: "h2", content: "Garder des conditions et un repos stables" },
        { type: "paragraph", content: "Pratiquez à un moment où vous êtes habituellement reposé, sans poursuivre tard pour battre un record. La caféine et les compléments ne sont pas nécessaires à cette routine. Cherchez un changement reproductible et vérifiez aussi son intérêt dans l'activité réelle." },
        { type: "highlight", content: "Commencez par cinq essais et gardez la même installation pour la prochaine séance prévue." }
      ]
    },
    "reaction-time-by-age": {
      title: "Temps de réaction selon l'âge : comment lire son résultat",
      excerpt: "Comprenez les limites des tableaux par âge et comparez vos résultats sans normes inventées.",
      readTime: "3 min de lecture",
      sections: [
        { type: "paragraph", content: "Le temps de réaction évolue au cours de la vie, mais il n'existe pas de cible universelle en millisecondes pour chaque âge. Un tableau doit être lu avec la tâche, les participants, le matériel et le calcul utilisés. Ce site ne possède pas de normes par âge représentatives et validées." },
        { type: "h2", content: "Ce que montrent les recherches" },
        { type: "paragraph", content: "Woods et ses collègues ont observé un ralentissement lié à l'âge dans une tâche adulte. Hardwick et ses collègues ont étudié les changements de préparation du mouvement. Ces expériences n'attribuent pas un score fixe à toutes les personnes du même âge." },
        { type: "h2", content: "Pourquoi il n'y a pas de seuil par âge" },
        { type: "list", items: ["Cliquer, choisir une touche et déplacer tout le corps sont des tâches différentes.", "Un échantillon adulte ne donne pas une norme pour les enfants ; un échantillon de convenance ne représente pas le monde.", "Un résultat de laboratoire étalonné ne se transpose pas directement au téléphone.", "Une moyenne de groupe n'est pas un seuil de santé ou de compétence."] },
        { type: "h2", content: "Mon résultat est-il bon pour mon âge ?" },
        { type: "paragraph", content: "Ce test ne fournit pas de percentile d'âge validé. Comparez les moyennes de cinq essais avec la même commande sur plusieurs jours. Une différence avec un ami plus jeune ou plus âgé ne démontre pas une cause. Il n'existe pas non plus d'âge de pointe exact commun à toutes les réponses." },
        { type: "h2", content: "Utiliser le résultat à bon escient" },
        { type: "paragraph", content: "Établissez une référence reposé et installé confortablement. Séparez les résultats après un changement d'appareil. Le test n'évalue pas l'aptitude à conduire ou une maladie. Une modification soudaine de la coordination quotidienne justifie un avis professionnel plutôt qu'une interprétation du score." },
        { type: "highlight", content: "Créez une référence personnelle de cinq essais et comparez-la à vos propres résultats futurs." }
      ]
    },
    "gamers-vs-athletes-reaction-time": {
      title: "Joueurs et sportifs : peut-on comparer leurs temps de réaction ?",
      excerpt: "Pourquoi clic, départ de sprint et arrêt de gardien ne se comparent pas directement, et comment organiser une comparaison équitable.",
      readTime: "3 min de lecture",
      sections: [
        { type: "paragraph", content: "Joueurs, sprinteurs et gardiens peuvent répondre vite dans leur contexte. Mais les signaux et les mouvements diffèrent. Aligner un clic, un départ au son et un arrêt ne permet pas de désigner la personne aux meilleures réactions." },
        { type: "h2", content: "Ce que le clic ne mesure pas dans un jeu" },
        { type: "paragraph", content: "Le test de couleur a un signal et une réponse connus. Un jeu ajoute la recherche de cible, l'identification d'un adversaire, le choix d'action et la visée. Le clic ne prédit pas un rang dans Counter-Strike ou Valorant. Le délai réseau reste également un facteur distinct." },
        { type: "h2", content: "Une étude n'est pas une moyenne professionnelle" },
        { type: "paragraph", content: "Green et ses collègues ont étudié des décisions perceptives liées aux jeux d'action. Cela ne fournit ni moyenne universelle des professionnels ni preuve que les joueurs battent les sportifs dans toutes les tâches." },
        { type: "h2", content: "Mouvement et placement dans le sport" },
        { type: "paragraph", content: "Le sprinteur répond au son par une poussée coordonnée. Le gardien juge le ballon et rejoint un point d'interception. Distance, placement et informations visibles changent la tâche. Ces valeurs ne sont pas des temps de clic visuel purs." },
        { type: "h2", content: "Conditions d'une comparaison équitable" },
        { type: "ordered-list", items: ["Utilisez le même appareil, la même commande, les mêmes consignes et la même familiarisation.", "Gardez tâche et nombre d'essais identiques, sans comparer meilleur score et moyenne.", "Comptez les erreurs et les départs anticipés.", "Décrivez les participants et le calcul. Quelques amis ne représentent pas tous les joueurs ou sportifs."] },
        { type: "highlight", content: "Comparez vos propres séances de jeu avec cinq essais dans les mêmes conditions." }
      ]
    },
    "caffeine-and-reaction-time": {
      title: "Caféine et temps de réaction : ce que les études peuvent dire",
      excerpt: "Pourquoi habitudes, arrêt de consommation, pratique et conditions de test comptent plus qu'une seule comparaison avant-après.",
      readTime: "3 min de lecture",
      sections: [
        { type: "paragraph", content: "La caféine peut influencer le temps de réaction mesuré. Aucune règle fiable ne promet toutefois qu'un café retirera un nombre fixe de millisecondes au score. Se sentir éveillé, agir plus vite et mieux décider sont des résultats différents." },
        { type: "h2", content: "Lire aussi les conditions de l'expérience" },
        { type: "paragraph", content: "Les travaux de Smith, Rogers, Addicott et leurs collègues emploient des conditions et des mesures différentes. La consommation habituelle et l'abstinence influencent l'interprétation. Ils ne garantissent donc pas le même progrès pour tous. Les articles originaux figurent ci-dessous." },
        { type: "h2", content: "Pourquoi le deuxième essai n'est pas une preuve" },
        { type: "list", items: ["Vous connaissez déjà les commandes à la deuxième séance.", "L'attente liée au café peut modifier votre approche.", "Attention et résultats varient naturellement.", "Changer d'appareil ou de commande modifie la comparaison."] },
        { type: "h2", content: "Un journal, pas un guide de dosage" },
        { type: "paragraph", content: "Si vous notez déjà vos résultats, ajoutez vos habitudes sans conclure à une causalité sur une séance. Il n'est pas nécessaire d'augmenter la caféine, de l'arrêter brutalement ou de réduire le sommeil. Ce site ne détermine ni dose sûre ni adéquation à votre situation." },
        { type: "h2", content: "Un clic rapide ne remplace pas le repos" },
        { type: "paragraph", content: "Un meilleur clic après un café ne prouve pas que le manque de sommeil est compensé ou que vous pouvez conduire sans risque. Un bref test dans le navigateur n'évalue pas complètement la vigilance prolongée." },
        { type: "highlight", content: "Notez cinq essais dans votre routine habituelle et observez les variations sur plusieurs séances." }
      ]
    },
    "sleep-deprivation-reaction-time": {
      title: "Manque de sommeil et temps de réaction : la régularité compte",
      excerpt: "Comprenez le lien avec l'attention et pourquoi un clic rapide ne prouve pas que vous avez suffisamment récupéré.",
      readTime: "3 min de lecture",
      sections: [
        { type: "paragraph", content: "Le manque de sommeil peut aussi modifier la régularité des réponses. Un clic rapide peut coexister avec des signaux manqués ou des essais très lents. Le meilleur score seul renseigne donc mal sur votre repos." },
        { type: "h2", content: "Ce que montrent les recherches sur le sommeil" },
        { type: "paragraph", content: "Van Dongen et ses collègues ont observé une accumulation de déficits avec une restriction répétée du sommeil, que la somnolence ressentie ne reflétait pas entièrement. Cela ne donne pas un pourcentage fixe de dégradation pour le score de ce site." },
        { type: "h2", content: "Cinq essais ne sont pas une évaluation de vigilance" },
        { type: "paragraph", content: "La recherche utilise aussi des tâches prolongées pour repérer les baisses d'attention. Ici, la période est brève. Le test ne mesure pas la dette de sommeil, n'exclut pas la fatigue et ne certifie pas la sécurité de la conduite ou de l'utilisation d'une machine." },
        { type: "h2", content: "Organiser une comparaison utile" },
        { type: "ordered-list", items: ["Gardez votre sommeil normal ; ne le réduisez pas volontairement pour comparer.", "Conservez appareil, commande et heure approximative.", "Notez les cinq essais, la moyenne, le repos et les interruptions.", "Observez plusieurs jours sans attribuer immédiatement une cause à un résultat inhabituel."] },
        { type: "h2", content: "Pas de compte à rebours fixe pour récupérer" },
        { type: "paragraph", content: "Le score ne révèle pas la quantité de sommeil nécessaire. Une sieste ou un nombre déterminé de nuits ne garantit pas le retour à un chiffre précis. Pratiquez reposé et arrêtez si l'attention baisse. Si la somnolence gêne régulièrement votre quotidien, demandez un avis professionnel." },
        { type: "highlight", content: "Établissez une référence de cinq essais en étant reposé, puis comparez des conditions similaires." }
      ]
    },
    "goalkeeper-reaction-time-vozinha-world-cup": {
      title: "Temps de réaction du gardien : Vozinha, anticipation et clic",
      excerpt: "Le match de Vozinha permet de comprendre jugement, déplacement et limites d'un test de réaction en ligne.",
      readTime: "3 min de lecture",
      sections: [
        { type: "paragraph", content: "Le rapport officiel de la FIFA confirme le 0–0 entre l'Espagne et le Cap-Vert le 15 juin 2026, avec Vozinha dans les buts. Ce résultat ne mesure pourtant pas son temps de réaction visuelle personnel en millisecondes." },
        { type: "h2", content: "Les composantes d'un arrêt" },
        { type: "list", items: ["Réaction : répondre après un signal perceptible.", "Anticipation : utiliser des informations précoces pour se préparer, avec un risque d'erreur.", "Temps de mouvement : rejoindre le ballon par un pas ou un plongeon."] },
        { type: "paragraph", content: "Vitesse, distance, angle, visibilité et placement changent le temps et le trajet disponibles. Un bel arrêt ne se convertit pas en vitesse de clic. Un mouvement précoce au ralenti ne révèle pas avec certitude l'indice utilisé." },
        { type: "h2", content: "Limites des recherches sur les penalties" },
        { type: "paragraph", content: "L'expérience vidéo de Peiyong et Inomata souligne l'importance du moment où l'information devient disponible. Elle ne permet pas de déduire une règle universelle pour lire chaque tir à partir d'une position du pied ou de la hanche." },
        { type: "h2", content: "Des exercices à discuter avec un entraîneur" },
        { type: "ordered-list", items: ["Arrêtez une vidéo avant le contact, prédisez la direction puis vérifiez la précision.", "Utilisez des vidéos inconnues pour distinguer mémoire et anticipation.", "Travaillez position d'attente et premier mouvement avec une vitesse de ballon adaptée, puis ajustez la difficulté avec un entraîneur.", "Évaluez décisions et interceptions réussies séparément du clic."] },
        { type: "h2", content: "Le test évalue-t-il le niveau d'un gardien ?" },
        { type: "paragraph", content: "Cinq essais donnent une référence personnelle de clic sur cet appareil. Sans données mesurées de la même façon, la comparaison avec Vozinha est impossible. Utilisez ce complément et évaluez les arrêts par les tâches sportives et les retours de l'entraîneur." },
        { type: "highlight", content: "Créez une référence avec cinq essais visuels et évaluez l'entraînement de gardien séparément." }
      ]
    }
  }
};
