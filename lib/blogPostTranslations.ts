import type { Lang } from "./i18n";
import type { BlogPost } from "./blogPosts";

export type BlogPostTranslation = Omit<BlogPost, "slug" | "date">;

export const BLOG_POST_TRANSLATIONS: Partial<
  Record<Lang, Record<string, BlogPostTranslation>>
> = {
  zh: {
    "what-is-reaction-time": {
      title: "什么是反应时间？为什么它很重要？",
      excerpt:
        "反应时间是刺激出现到你做出回应之间的间隔。了解它如何影响日常生活、运动表现和游戏水平。",
      readTime: "5 分钟阅读",
      sections: [
        {
          type: "paragraph",
          content:
            "反应时间指从刺激出现到你做出动作之间经过的时间。它看似只是一个瞬间，却是衡量人类表现的重要指标，会影响驾驶安全、竞技运动、电竞游戏和日常专注力。",
        },
        {
          type: "h2",
          content: "反应时间背后的科学",
        },
        {
          type: "paragraph",
          content:
            "当眼睛看到刺激，例如屏幕变绿时，大脑会处理视觉信号、做出判断，并向肌肉发送运动指令。这个链路涉及感觉神经、视觉皮层、运动皮层和运动神经，每一步都会增加几毫秒延迟。",
        },
        {
          type: "paragraph",
          content:
            "视觉反应的物理下限大约在 100ms 左右。多数健康成年人通常落在 200–300ms 区间，具体会受到年龄、睡眠、专注度、设备和练习程度影响。",
        },
        {
          type: "h2",
          content: "三种常见反应时间",
        },
        {
          type: "list",
          items: [
            "简单反应时间：一个刺激对应一个动作，例如屏幕变绿就点击。本测试测量的就是这一类。",
            "选择反应时间：多个刺激对应不同动作，例如根据不同颜色按不同按键，通常更慢。",
            "识别反应时间：你需要先判断哪些刺激需要回应，认知负担最高。",
          ],
        },
        {
          type: "h2",
          content: "反应时间为什么重要",
        },
        {
          type: "paragraph",
          content:
            "在驾驶中，200ms 和 300ms 的差异可能意味着高速行驶时多出数米刹车距离。在运动中，50ms 的优势可能影响守门员扑救、篮球抢断或短跑起跑。在电竞中，视觉反应和点击延迟的差异更加明显。",
        },
        {
          type: "h2",
          content: "正常反应时间是多少？",
        },
        {
          type: "list",
          items: [
            "低于 150ms：闪电级，接近人体极限。",
            "150–200ms：很快，常见于训练有素的运动员和认真练习的玩家。",
            "200–300ms：普通成年人常见范围。",
            "300–400ms：偏慢，可能与疲劳、年龄或缺乏练习有关。",
            "超过 400ms：很慢，常见于睡眠不足、分心或状态不佳。",
          ],
        },
        {
          type: "h2",
          content: "本测试如何测量反应时间",
        },
        {
          type: "paragraph",
          content:
            "测试使用浏览器高精度计时器 performance.now()，并在绿色画面真正绘制到屏幕后开始计时。完成 5 轮后，我们会计算平均值和最佳成绩，以减少单次分心或提前预判带来的波动。",
        },
        {
          type: "highlight",
          content:
            "试试免费的反应时间测试：完成 5 轮，看看你的反射速度与平均水平相比如何。",
        },
      ],
    },
    "how-to-improve-reaction-time": {
      title: "提升反应时间的 10 个有效方法",
      excerpt:
        "从睡眠优化到反射训练，了解有科学依据的方法，帮助你提高反应速度并缩短响应时间。",
      readTime: "8 分钟阅读",
      sections: [
        {
          type: "paragraph",
          content:
            "反应时间并不是完全由天生决定的。基因会影响基线，但睡眠、训练、体能和注意力管理都能让你的响应速度得到明显改善。",
        },
        {
          type: "h2",
          content: "1. 优先保证睡眠",
        },
        {
          type: "paragraph",
          content:
            "睡眠是影响认知表现和反应速度的核心因素。长期睡眠不足会让注意力下降、判断变慢，也会让你在反应测试中的成绩明显变差。",
        },
        {
          type: "h2",
          content: "2. 规律运动",
        },
        {
          type: "paragraph",
          content:
            "有氧运动能提升大脑供血和执行功能。即使一次短时间运动，也可能在几个小时内改善注意力和反应速度；长期运动者通常比久坐人群反应更快。",
        },
        {
          type: "h2",
          content: "3. 练习具体任务",
        },
        {
          type: "paragraph",
          content:
            "反应时间具有任务特异性。想在视觉点击测试中更快，最有效的方法就是反复练习看到颜色变化后快速点击，建立更稳定的神经通路。",
        },
        {
          type: "h2",
          content: "4. 保持水分和能量",
        },
        {
          type: "paragraph",
          content:
            "轻微脱水也会影响神经信号传递和注意力。训练、工作或游戏时保持适度饮水，有助于维持稳定表现。",
        },
        {
          type: "h2",
          content: "5. 合理使用咖啡因",
        },
        {
          type: "paragraph",
          content:
            "适量咖啡因可以提高警觉性，并在短时间内略微提升反应速度。但过量会导致手抖、焦虑和精细控制下降，反而影响点击准确性。",
        },
        {
          type: "h2",
          content: "6. 训练预判能力",
        },
        {
          type: "paragraph",
          content:
            "优秀运动员和职业玩家并不只是反应快，他们还会提前识别模式。读懂对手动作、球路或游戏状态，可以让大脑在刺激完全出现前就准备响应。",
        },
        {
          type: "h2",
          content: "7. 减少精神疲劳和干扰",
        },
        {
          type: "paragraph",
          content:
            "长时间工作、学习或游戏会消耗注意力资源。定期短休息、关闭干扰信息、保持安静环境，能让反应测试和实际表现更稳定。",
        },
        {
          type: "h2",
          content: "8. 追踪你的进步",
        },
        {
          type: "paragraph",
          content:
            "没有测量就很难持续改进。用同一设备、同一时间段定期测试，记录平均值和最佳成绩，才能看出训练是否真的有效。",
        },
        {
          type: "highlight",
          content:
            "从今天建立基线：完成一次 5 轮反应时间测试，然后每周用相同条件复测。",
        },
      ],
    },
    "reaction-time-by-age": {
      title: "反应时间如何随年龄变化？",
      excerpt:
        "反应时间通常在 20 多岁达到峰值，之后逐渐变慢。了解背后的原因，以及如何减缓下降。",
      readTime: "6 分钟阅读",
      sections: [
        {
          type: "paragraph",
          content:
            "年龄是影响反应时间的稳定因素之一。从儿童到老年，快速回应能力会经历发展、峰值和逐渐下降的过程，但生活方式会显著影响下降速度。",
        },
        {
          type: "h2",
          content: "不同年龄段的反应时间",
        },
        {
          type: "list",
          items: [
            "儿童：神经网络仍在发育，反应时间通常较慢。",
            "青少年：神经通路逐渐成熟，反应速度快速提升。",
            "20 多岁：通常是反应时间峰值阶段，平均约 200–250ms。",
            "30–50 岁：处理速度开始缓慢下降，但经验和预判能补偿一部分。",
            "60 岁以上：平均反应变慢，且每次测试之间的波动更大。",
          ],
        },
        {
          type: "h2",
          content: "为什么年龄会让反应变慢？",
        },
        {
          type: "paragraph",
          content:
            "随年龄增长，神经传导速度、感觉敏锐度、注意力调节和运动控制都可能下降。视觉或听觉输入变慢，也会让大脑开始处理刺激的时间更晚。",
        },
        {
          type: "h2",
          content: "可以延缓这种下降吗？",
        },
        {
          type: "paragraph",
          content:
            "可以。规律有氧运动、力量训练、充足睡眠、持续学习和反应训练都能帮助保持神经可塑性。活跃的中老年人常常比久坐的年轻人反应更稳定。",
        },
        {
          type: "list",
          items: [
            "每周 3–5 次有氧运动有助于维持脑部供血和神经效率。",
            "动作游戏、球类运动和新技能学习能刺激视觉注意和决策速度。",
            "睡眠质量越差，反应波动通常越明显。",
            "经验能通过预判弥补部分简单反应速度下降。",
          ],
        },
        {
          type: "highlight",
          content:
            "想知道你处在哪个范围？完成一次免费反应时间测试，并把成绩与同年龄段平均水平对比。",
        },
      ],
    },
    "gamers-vs-athletes-reaction-time": {
      title: "游戏玩家和运动员：谁的反应更快？",
      excerpt:
        "深入比较职业玩家和精英运动员的反应时间，以及他们各自为什么快。",
      readTime: "7 分钟阅读",
      sections: [
        {
          type: "paragraph",
          content:
            "职业玩家和精英运动员都以反应快著称，但他们的快并不完全相同。玩家更偏向屏幕上的视觉-手部反应，运动员则常依赖全身动作、空间判断和预判。",
        },
        {
          type: "h2",
          content: "玩家如何训练反应",
        },
        {
          type: "paragraph",
          content:
            "FPS、MOBA、星际类和节奏类游戏会持续提供快速视觉刺激、精准操作和高压决策。长期训练让玩家对屏幕变化、准星移动和敌人出现更敏感。",
        },
        {
          type: "h2",
          content: "运动员如何训练反应",
        },
        {
          type: "paragraph",
          content:
            "运动员面对的是更复杂的身体环境。网球、足球、篮球和格斗项目中的快速反应往往来自对对手姿态、球路和节奏的提前读取，而不仅是看到刺激后再行动。",
        },
        {
          type: "h2",
          content: "研究和实际表现",
        },
        {
          type: "list",
          items: [
            "动作游戏玩家通常在视觉注意和屏幕任务中表现更快。",
            "F1 车手和精英电竞选手在简单视觉反应任务中都可能接近 200ms。",
            "短跑运动员对发令枪的反应非常快，但这是一种高度训练化的启动动作。",
            "运动员在全身协调、空间判断和预判方面通常更有优势。",
          ],
        },
        {
          type: "h2",
          content: "结论",
        },
        {
          type: "paragraph",
          content:
            "在标准化的简单反应测试中，顶级玩家和精英运动员可能非常接近。真正的差异出现在具体场景：玩家更擅长屏幕上的视觉-手部反应，运动员更擅长身体化和预判式反应。",
        },
        {
          type: "highlight",
          content:
            "看看你的反应时间接近哪一类人群：现在完成一次 5 轮测试。",
        },
      ],
    },
    "caffeine-and-reaction-time": {
      title: "咖啡因真的能让反应更快吗？",
      excerpt:
        "喝咖啡的人常说自己更清醒。但关于咖啡因和反射速度，研究到底怎么说？",
      readTime: "4 分钟阅读",
      sections: [
        {
          type: "paragraph",
          content:
            "咖啡因是最常见的精神活性物质之一。很多人感觉喝咖啡后更清醒、思考更快、反应更敏捷，但它对反应时间的影响取决于剂量、睡眠状态和个人耐受。",
        },
        {
          type: "h2",
          content: "咖啡因如何影响大脑",
        },
        {
          type: "paragraph",
          content:
            "咖啡因会阻断腺苷受体。腺苷在清醒时逐渐积累，会让人感到困倦。阻断这种信号后，大脑保持更高警觉性，也可能提升动机和处理速度。",
        },
        {
          type: "h2",
          content: "研究显示了什么",
        },
        {
          type: "list",
          items: [
            "常见有效剂量约为 50–200mg，相当于 1–2 杯咖啡。",
            "反应时间改善通常较小，大约是 10–20ms 级别。",
            "效果通常在饮用后 20–30 分钟出现，约 60–90 分钟达到高峰。",
            "睡眠不足时，咖啡因对反应速度的帮助更明显。",
          ],
        },
        {
          type: "h2",
          content: "耐受和过量的问题",
        },
        {
          type: "paragraph",
          content:
            "经常摄入咖啡因会逐渐形成耐受。对习惯饮用者来说，咖啡更多是在恢复基线警觉性，而不一定能显著超过正常状态。过量则可能带来手抖、心率升高和焦虑，影响精准点击。",
        },
        {
          type: "highlight",
          content:
            "想亲自验证？可以在喝咖啡前后分别测试一次反应时间，并保持设备和环境一致。",
        },
      ],
    },
    "sleep-deprivation-reaction-time": {
      title: "睡眠不足如何摧毁你的反应时间",
      excerpt:
        "仅仅一晚睡眠不足，就可能让反应速度慢 20–50%。了解为什么休息是最被低估的表现提升方式。",
      readTime: "5 分钟阅读",
      sections: [
        {
          type: "paragraph",
          content:
            "熬夜会让人难受，但很多人低估了它对反应速度的破坏。即使只是连续几天睡得少，注意力、判断和快速响应能力也会持续下降。",
        },
        {
          type: "h2",
          content: "数据很直接",
        },
        {
          type: "list",
          items: [
            "清醒 17–19 小时后，反应速度可能接近轻度酒精影响状态。",
            "连续多天每晚只睡 6 小时，反应下降会累积。",
            "睡眠不足的人往往低估自己的受损程度。",
            "反应变慢在驾驶、运动和游戏中都会带来明显风险。",
          ],
        },
        {
          type: "h2",
          content: "为什么缺觉会让反应变慢",
        },
        {
          type: "paragraph",
          content:
            "睡眠帮助大脑清理代谢产物、巩固运动技能并恢复前额叶资源。睡眠被压缩后，注意力控制下降，神经信号效率降低，反应时间和稳定性都会变差。",
        },
        {
          type: "h2",
          content: "微睡眠的风险",
        },
        {
          type: "paragraph",
          content:
            "严重疲劳时，大脑可能出现几秒钟的短暂断片。本人可能没有意识到，但在这段时间内几乎无法回应外界刺激，对驾驶尤其危险。",
        },
        {
          type: "h2",
          content: "恢复需要多久？",
        },
        {
          type: "paragraph",
          content:
            "一次补觉通常不足以完全恢复长期睡眠债。持续几晚稳定睡眠、减少晚间咖啡因、规律作息，才能让反应速度逐步回到基线。",
        },
        {
          type: "highlight",
          content:
            "试试早晨和深夜分别测一次反应时间，你可能会直观看到疲劳如何累积。",
        },
      ],
    },
  },
  ko: {
    "what-is-reaction-time": {
      title: "반응 시간이란 무엇이며 왜 중요할까요?",
      excerpt:
        "반응 시간은 자극이 나타난 순간부터 반응하기까지의 간격입니다. 일상, 스포츠, 게임 성과에 어떤 영향을 주는지 알아보세요.",
      readTime: "5분 읽기",
      sections: [
        {
          type: "paragraph",
          content:
            "반응 시간은 자극이 나타난 뒤 실제 행동이 나오기까지 걸리는 시간입니다. 짧은 순간처럼 보이지만 운전 안전, 스포츠, 경쟁 게임, 집중력에 큰 영향을 주는 인간 수행 능력 지표입니다.",
        },
        { type: "h2", content: "반응 시간의 과학" },
        {
          type: "paragraph",
          content:
            "눈이 초록색 화면 같은 시각 신호를 감지하면 뇌가 정보를 처리하고 판단한 뒤 근육으로 운동 명령을 보냅니다. 감각 신경, 시각 피질, 운동 피질, 운동 신경을 거치는 과정마다 몇 밀리초의 지연이 생깁니다.",
        },
        {
          type: "paragraph",
          content:
            "시각 반응의 물리적 하한은 대략 100ms 수준입니다. 대부분의 건강한 성인은 나이, 수면, 집중도, 장비, 연습량에 따라 200–300ms 범위에 위치합니다.",
        },
        { type: "h2", content: "세 가지 반응 시간" },
        {
          type: "list",
          items: [
            "단순 반응 시간: 하나의 자극에 하나의 반응. 화면이 초록색이 되면 클릭하는 이 테스트가 여기에 해당합니다.",
            "선택 반응 시간: 여러 자극마다 다른 행동이 필요해 더 느려집니다.",
            "인지 반응 시간: 어떤 자극에 반응해야 하는지 먼저 판별해야 하므로 가장 복잡합니다.",
          ],
        },
        { type: "h2", content: "반응 시간이 중요한 이유" },
        {
          type: "paragraph",
          content:
            "운전에서는 200ms와 300ms의 차이가 고속 주행 시 몇 미터의 제동 거리 차이로 이어질 수 있습니다. 스포츠에서는 공을 막거나 출발을 빠르게 하는 데 영향을 주고, e스포츠에서는 클릭 지연과 시각 반응이 승패를 가르기도 합니다.",
        },
        { type: "h2", content: "정상 반응 시간은 어느 정도인가요?" },
        {
          type: "list",
          items: [
            "150ms 미만: 번개처럼 빠른 수준, 인간 한계에 가깝습니다.",
            "150–200ms: 빠름, 훈련된 선수와 진지한 게이머에게 흔합니다.",
            "200–300ms: 건강한 성인의 일반적인 범위입니다.",
            "300–400ms: 피로, 나이, 연습 부족과 관련될 수 있습니다.",
            "400ms 초과: 수면 부족이나 집중력 저하가 있을 때 자주 나타납니다.",
          ],
        },
        {
          type: "highlight",
          content:
            "무료 반응 시간 테스트를 5라운드 완료하고 내 반사 신경이 평균과 어떻게 비교되는지 확인해보세요.",
        },
      ],
    },
    "how-to-improve-reaction-time": {
      title: "반응 시간을 개선하는 10가지 검증된 방법",
      excerpt:
        "수면 관리부터 반사 신경 훈련까지, 반응 속도를 높이고 응답 시간을 줄이는 과학 기반 방법을 알아보세요.",
      readTime: "8분 읽기",
      sections: [
        {
          type: "paragraph",
          content:
            "반응 시간은 유전만으로 결정되지 않습니다. 기본 능력은 타고나지만 수면, 운동, 반복 훈련, 집중 관리로 의미 있게 향상될 수 있습니다.",
        },
        { type: "h2", content: "1. 수면을 우선하세요" },
        {
          type: "paragraph",
          content:
            "수면은 인지 수행과 반응 속도에 가장 큰 영향을 주는 요소입니다. 수면 부족은 주의력과 판단 속도를 떨어뜨리고 테스트 결과를 불안정하게 만듭니다.",
        },
        { type: "h2", content: "2. 규칙적으로 운동하세요" },
        {
          type: "paragraph",
          content:
            "유산소 운동은 뇌 혈류와 실행 기능을 높입니다. 짧은 운동도 몇 시간 동안 집중력과 반응 속도를 개선할 수 있고, 장기적으로는 더 안정적인 반응을 만듭니다.",
        },
        { type: "h2", content: "3. 같은 과제를 반복하세요" },
        {
          type: "paragraph",
          content:
            "반응 시간은 과제별로 달라집니다. 시각 클릭 테스트에서 빨라지고 싶다면 색이 바뀌는 순간 클릭하는 바로 그 동작을 반복하는 것이 가장 직접적입니다.",
        },
        { type: "h2", content: "4. 수분을 유지하세요" },
        {
          type: "paragraph",
          content:
            "가벼운 탈수도 신경 전달과 집중력에 영향을 줍니다. 훈련, 업무, 게임 중에는 물을 가까이 두고 꾸준히 마시는 것이 좋습니다.",
        },
        { type: "h2", content: "5. 카페인을 전략적으로 사용하세요" },
        {
          type: "paragraph",
          content:
            "적당한 카페인은 경계심을 높이고 반응 시간을 몇 밀리초 줄일 수 있습니다. 하지만 과하면 손 떨림과 불안이 생겨 정밀한 클릭에는 오히려 방해가 됩니다.",
        },
        { type: "h2", content: "6. 예측 능력을 훈련하세요" },
        {
          type: "paragraph",
          content:
            "엘리트 선수와 프로 게이머는 단순히 빠르게 반응하는 것이 아니라 패턴을 먼저 읽습니다. 상대의 움직임, 공의 궤적, 게임 상태를 예측하면 실제 자극이 오기 전에 준비할 수 있습니다.",
        },
        {
          type: "highlight",
          content:
            "오늘 기준선을 만들어보세요. 5라운드 테스트를 완료한 뒤 같은 조건에서 매주 다시 측정하세요.",
        },
      ],
    },
    "reaction-time-by-age": {
      title: "나이에 따라 반응 시간은 어떻게 변할까요?",
      excerpt:
        "반응 시간은 보통 20대에 최고조에 달하고 점차 느려집니다. 과학적 이유와 대응 방법을 알아보세요.",
      readTime: "6분 읽기",
      sections: [
        {
          type: "paragraph",
          content:
            "나이는 반응 시간을 예측하는 중요한 요인입니다. 어린 시절부터 노년까지 빠르게 반응하는 능력은 발달, 정점, 완만한 감소의 흐름을 보입니다.",
        },
        { type: "h2", content: "생애 주기별 반응 시간" },
        {
          type: "list",
          items: [
            "어린이: 신경망이 아직 발달 중이라 반응이 느린 편입니다.",
            "청소년: 신경 경로가 성숙하면서 빠르게 개선됩니다.",
            "20대: 반응 시간이 가장 좋은 시기로 평균 200–250ms에 가깝습니다.",
            "30–50대: 처리 속도는 조금씩 느려지지만 경험과 예측이 보완합니다.",
            "60대 이상: 평균 반응이 느려지고 라운드 간 변동이 커집니다.",
          ],
        },
        { type: "h2", content: "왜 나이가 들면 느려질까요?" },
        {
          type: "paragraph",
          content:
            "신경 전도 속도, 감각 민감도, 주의 조절, 운동 제어가 모두 조금씩 변합니다. 시각이나 청각 입력이 약해지면 뇌가 자극 처리를 시작하는 시점도 늦어질 수 있습니다.",
        },
        { type: "h2", content: "감소를 늦출 수 있나요?" },
        {
          type: "paragraph",
          content:
            "가능합니다. 유산소 운동, 근력 운동, 충분한 수면, 새로운 기술 학습, 반응 훈련은 신경 가소성과 처리 속도 유지에 도움을 줍니다.",
        },
        {
          type: "highlight",
          content:
            "내 위치가 궁금하다면 무료 반응 시간 테스트를 완료하고 나이대별 평균과 비교해보세요.",
        },
      ],
    },
    "gamers-vs-athletes-reaction-time": {
      title: "게이머와 운동선수: 누가 더 빠르게 반응할까요?",
      excerpt:
        "프로 게이머와 엘리트 운동선수의 반응 시간을 비교하고, 각 그룹이 빠른 이유를 살펴봅니다.",
      readTime: "7분 읽기",
      sections: [
        {
          type: "paragraph",
          content:
            "게이머와 운동선수는 모두 빠른 반응으로 알려져 있지만 빠른 방식은 다릅니다. 게이머는 화면 기반 시각-손 반응에 강하고, 운동선수는 전신 움직임과 예측에 강합니다.",
        },
        { type: "h2", content: "게이머의 반응 훈련" },
        {
          type: "paragraph",
          content:
            "FPS, MOBA, 리듬 게임은 빠른 시각 자극과 정밀한 조작을 반복적으로 요구합니다. 이 경험은 화면 변화와 목표 출현에 더 빨리 반응하도록 만듭니다.",
        },
        { type: "h2", content: "운동선수의 반응 훈련" },
        {
          type: "paragraph",
          content:
            "운동선수는 공의 궤적, 상대의 자세, 경기 흐름을 읽습니다. 실제 반응은 자극이 완전히 나타난 뒤가 아니라 예측이 시작되는 순간부터 준비됩니다.",
        },
        { type: "h2", content: "연구와 실제 차이" },
        {
          type: "list",
          items: [
            "액션 게임 플레이어는 시각 주의 과제에서 빠른 결과를 보이는 경우가 많습니다.",
            "F1 드라이버와 상위 e스포츠 선수 모두 단순 시각 과제에서 200ms 안팎을 기록할 수 있습니다.",
            "단거리 선수의 출발 반응은 고도로 훈련된 운동 패턴입니다.",
            "운동선수는 전신 협응과 공간 예측에서 더 큰 장점을 보입니다.",
          ],
        },
        {
          type: "highlight",
          content:
            "내 반응 시간이 게이머와 운동선수 중 어디에 가까운지 5라운드 테스트로 확인해보세요.",
        },
      ],
    },
    "caffeine-and-reaction-time": {
      title: "카페인은 정말 반응 시간을 빠르게 할까요?",
      excerpt:
        "커피를 마시면 더 또렷해진다고 느끼지만, 카페인과 반사 신경에 대해 연구는 무엇을 말할까요?",
      readTime: "4분 읽기",
      sections: [
        {
          type: "paragraph",
          content:
            "카페인은 가장 널리 사용되는 정신활성 물질입니다. 많은 사람이 커피 뒤에 더 맑고 빠르게 반응한다고 느끼지만, 실제 효과는 수면 상태, 용량, 개인의 내성에 따라 달라집니다.",
        },
        { type: "h2", content: "카페인이 뇌에서 작동하는 방식" },
        {
          type: "paragraph",
          content:
            "카페인은 졸림 신호와 관련된 아데노신 수용체를 차단합니다. 그 결과 더 각성된 신경 상태가 유지되고, 주의력과 처리 속도가 일시적으로 높아질 수 있습니다.",
        },
        { type: "h2", content: "연구가 보여주는 것" },
        {
          type: "list",
          items: [
            "일반적인 유효 용량은 50–200mg, 대략 커피 1–2잔입니다.",
            "반응 시간 개선은 보통 10–20ms 정도로 작지만 측정 가능합니다.",
            "효과는 섭취 후 20–30분에 시작해 60–90분에 정점에 가까워집니다.",
            "수면 부족 상태에서는 카페인의 도움이 더 크게 나타납니다.",
          ],
        },
        { type: "h2", content: "내성과 과다 섭취" },
        {
          type: "paragraph",
          content:
            "매일 카페인을 마시면 빠르게 내성이 생길 수 있습니다. 과다 섭취는 손 떨림, 심박 증가, 불안을 일으켜 정밀한 반응에는 오히려 불리합니다.",
        },
        {
          type: "highlight",
          content:
            "아침 커피 전후로 같은 조건에서 반응 시간을 테스트해 직접 차이를 확인해보세요.",
        },
      ],
    },
    "sleep-deprivation-reaction-time": {
      title: "수면 부족은 반응 시간을 어떻게 무너뜨릴까요?",
      excerpt:
        "하룻밤만 부족해도 반응이 20–50% 느려질 수 있습니다. 휴식이 왜 가장 과소평가된 성능 향상 요소인지 알아보세요.",
      readTime: "5분 읽기",
      sections: [
        {
          type: "paragraph",
          content:
            "밤을 새우면 컨디션이 나빠진다는 것은 누구나 알지만, 반응 시간이 얼마나 크게 망가지는지는 자주 과소평가됩니다. 며칠간 잠을 줄이는 것만으로도 저하가 누적됩니다.",
        },
        { type: "h2", content: "수치는 분명합니다" },
        {
          type: "list",
          items: [
            "17–19시간 깨어 있으면 반응은 가벼운 알코올 영향과 비슷해질 수 있습니다.",
            "매일 6시간 수면을 여러 날 반복하면 저하가 누적됩니다.",
            "수면 부족자는 자신의 손상을 과소평가하는 경향이 있습니다.",
            "운전, 스포츠, 게임처럼 빠른 판단이 필요한 상황에서 위험이 커집니다.",
          ],
        },
        { type: "h2", content: "왜 반응이 느려질까요?" },
        {
          type: "paragraph",
          content:
            "수면 중 뇌는 대사 부산물을 처리하고 운동 기술을 강화하며 전전두엽 자원을 회복합니다. 이 과정이 부족하면 주의 조절과 신경 신호 효율이 떨어집니다.",
        },
        { type: "h2", content: "마이크로수면 문제" },
        {
          type: "paragraph",
          content:
            "심한 피로 상태에서는 몇 초 동안 의식이 끊기는 마이크로수면이 나타날 수 있습니다. 본인은 알아차리지 못해도 그 순간에는 외부 자극에 반응하기 어렵습니다.",
        },
        {
          type: "highlight",
          content:
            "충분히 잔 아침과 늦은 밤에 각각 반응 시간을 테스트하면 피로가 어떻게 쌓이는지 바로 볼 수 있습니다.",
        },
      ],
    },
  },
  ja: {
    "what-is-reaction-time": {
      title: "反応時間とは？なぜ重要なのか",
      excerpt:
        "反応時間は、刺激が現れてから反応するまでの間隔です。日常生活、スポーツ、ゲームにどう影響するかを解説します。",
      readTime: "5分で読める",
      sections: [
        {
          type: "paragraph",
          content:
            "反応時間とは、刺激を見たり聞いたりしてから実際に行動するまでの時間です。ほんの一瞬の差ですが、運転の安全性、スポーツ、競技ゲーム、集中力に大きく関わります。",
        },
        { type: "h2", content: "反応時間の科学" },
        {
          type: "paragraph",
          content:
            "目が緑の画面などの刺激を捉えると、脳は信号を処理し、判断し、筋肉へ運動指令を送ります。視覚皮質、運動皮質、神経伝達の各段階で数ミリ秒ずつ遅延が生じます。",
        },
        {
          type: "paragraph",
          content:
            "視覚反応の物理的な下限はおよそ100msです。多くの健康な成人は、年齢、睡眠、集中度、デバイス、練習量によって200〜300ms前後になります。",
        },
        { type: "h2", content: "反応時間の種類" },
        {
          type: "list",
          items: [
            "単純反応時間：1つの刺激に1つの反応。画面が緑になったらクリックするこのテストです。",
            "選択反応時間：刺激ごとに違う操作が必要で、自然に遅くなります。",
            "認識反応時間：反応すべき刺激を見分ける必要があり、最も複雑です。",
          ],
        },
        { type: "h2", content: "なぜ反応時間が大切なのか" },
        {
          type: "paragraph",
          content:
            "運転では200msと300msの差が制動距離に影響します。スポーツでは守備、スタート、ボールへの反応に関わり、eスポーツでは画面変化への反応とクリック遅延が勝敗に直結します。",
        },
        { type: "h2", content: "普通の反応時間は？" },
        {
          type: "list",
          items: [
            "150ms未満：非常に速く、人間の限界に近い範囲です。",
            "150〜200ms：速い。訓練された選手や真剣なゲーマーに多いです。",
            "200〜300ms：健康な成人の一般的な範囲です。",
            "300〜400ms：疲労、加齢、練習不足が影響している可能性があります。",
            "400ms超：睡眠不足や集中力低下でよく見られます。",
          ],
        },
        {
          type: "highlight",
          content:
            "無料の反応時間テストを5ラウンド行い、自分の反射速度が平均と比べてどのくらいか確認しましょう。",
        },
      ],
    },
    "how-to-improve-reaction-time": {
      title: "反応時間を改善する10の方法",
      excerpt:
        "睡眠の最適化から反射トレーニングまで、反応速度を高める科学的な方法を紹介します。",
      readTime: "8分で読める",
      sections: [
        {
          type: "paragraph",
          content:
            "反応時間は遺伝だけで決まるものではありません。睡眠、運動、練習、集中環境を整えることで、反応速度は現実的に改善できます。",
        },
        { type: "h2", content: "1. 睡眠を最優先する" },
        {
          type: "paragraph",
          content:
            "睡眠は認知パフォーマンスと反応速度に最も大きく影響します。睡眠不足は注意力、判断速度、テスト結果の安定性を低下させます。",
        },
        { type: "h2", content: "2. 定期的に運動する" },
        {
          type: "paragraph",
          content:
            "有酸素運動は脳への血流と実行機能を高めます。短い運動でも数時間は集中力と反応速度を改善し、継続するとより安定した反応につながります。",
        },
        { type: "h2", content: "3. 同じ課題を練習する" },
        {
          type: "paragraph",
          content:
            "反応時間は課題に依存します。視覚クリックテストで速くなりたいなら、色が変わった瞬間にクリックする動作を繰り返すのが最も直接的です。",
        },
        { type: "h2", content: "4. 水分を保つ" },
        {
          type: "paragraph",
          content:
            "軽い脱水でも神経伝達と注意力に影響します。作業中やゲーム中はこまめに水分を取り、安定した状態を保ちましょう。",
        },
        { type: "h2", content: "5. カフェインを上手に使う" },
        {
          type: "paragraph",
          content:
            "適量のカフェインは覚醒度を高め、反応時間を少し短縮することがあります。ただし過剰摂取は手の震えや不安を招き、精密なクリックを妨げます。",
        },
        { type: "h2", content: "6. 予測力を鍛える" },
        {
          type: "paragraph",
          content:
            "優れた選手やゲーマーは単に速いだけでなく、パターンを先読みします。相手の動きやゲーム状況を読むことで、刺激が完全に現れる前に準備できます。",
        },
        {
          type: "highlight",
          content:
            "まずは基準値を作りましょう。5ラウンドのテストを行い、同じ条件で毎週測定して変化を確認します。",
        },
      ],
    },
    "reaction-time-by-age": {
      title: "年齢によって反応時間はどう変わる？",
      excerpt:
        "反応時間は20代でピークを迎え、その後ゆるやかに遅くなります。科学的な理由と対策を解説します。",
      readTime: "6分で読める",
      sections: [
        {
          type: "paragraph",
          content:
            "年齢は反応時間を左右する重要な要因です。幼少期から高齢期まで、反応能力は発達、ピーク、緩やかな低下という流れをたどります。",
        },
        { type: "h2", content: "年齢別の反応時間" },
        {
          type: "list",
          items: [
            "子ども：神経ネットワークが発達中で、反応は遅めです。",
            "10代：神経経路が成熟し、急速に改善します。",
            "20代：反応時間のピークで、平均は200〜250ms前後です。",
            "30〜50代：処理速度は少しずつ落ちますが、経験と予測が補います。",
            "60代以降：平均反応が遅くなり、結果のばらつきも大きくなります。",
          ],
        },
        { type: "h2", content: "なぜ年齢で遅くなるのか" },
        {
          type: "paragraph",
          content:
            "神経伝導速度、感覚の鋭さ、注意の制御、運動コントロールが少しずつ変化します。視覚や聴覚の入力が弱くなると、脳が処理を始めるタイミングも遅れます。",
        },
        { type: "h2", content: "低下を抑える方法" },
        {
          type: "paragraph",
          content:
            "有酸素運動、筋力トレーニング、十分な睡眠、新しいスキルの学習、反応トレーニングは、神経の柔軟性と処理速度の維持に役立ちます。",
        },
        {
          type: "highlight",
          content:
            "自分がどの範囲にいるか知りたいなら、無料の反応時間テストを行い、年齢別平均と比べてみましょう。",
        },
      ],
    },
    "gamers-vs-athletes-reaction-time": {
      title: "ゲーマーとアスリート、反応が速いのはどちら？",
      excerpt:
        "プロゲーマーと一流アスリートの反応時間を比較し、それぞれが速い理由を深掘りします。",
      readTime: "7分で読める",
      sections: [
        {
          type: "paragraph",
          content:
            "ゲーマーとアスリートはどちらも反応が速いことで知られますが、速さの種類は異なります。ゲーマーは画面上の視覚-手の反応に強く、アスリートは全身動作と予測に強みがあります。",
        },
        { type: "h2", content: "ゲーマーの反応トレーニング" },
        {
          type: "paragraph",
          content:
            "FPS、MOBA、音楽ゲームは高速な視覚刺激と精密操作を繰り返し要求します。この経験が画面変化や敵の出現への反応を速くします。",
        },
        { type: "h2", content: "アスリートの反応トレーニング" },
        {
          type: "paragraph",
          content:
            "アスリートはボールの軌道、相手の姿勢、試合の流れを読みます。実際の反応は刺激が完全に出てからではなく、予測の段階から始まっています。",
        },
        { type: "h2", content: "研究と実戦での違い" },
        {
          type: "list",
          items: [
            "アクションゲーム経験者は視覚注意課題で速い結果を出すことがあります。",
            "F1ドライバーと上位eスポーツ選手はいずれも単純視覚課題で200ms前後を記録できます。",
            "短距離選手のスタート反応は高度に訓練された運動パターンです。",
            "アスリートは全身協調と空間予測で強みを示します。",
          ],
        },
        {
          type: "highlight",
          content:
            "自分の反応時間がどちらに近いか、5ラウンドのテストで確認してみましょう。",
        },
      ],
    },
    "caffeine-and-reaction-time": {
      title: "カフェインは本当に反応時間を速くする？",
      excerpt:
        "コーヒーで頭が冴えると感じる人は多いですが、カフェインと反射神経について研究は何を示しているのでしょうか。",
      readTime: "4分で読める",
      sections: [
        {
          type: "paragraph",
          content:
            "カフェインは世界で最も広く使われている精神活性物質です。飲むと反応が速くなるように感じますが、実際の効果は睡眠状態、量、個人の耐性に左右されます。",
        },
        { type: "h2", content: "カフェインが脳で働く仕組み" },
        {
          type: "paragraph",
          content:
            "カフェインは眠気に関わるアデノシン受容体をブロックします。その結果、神経がより覚醒した状態になり、注意力と処理速度が一時的に高まることがあります。",
        },
        { type: "h2", content: "研究が示すこと" },
        {
          type: "list",
          items: [
            "一般的な有効量は50〜200mg、コーヒー1〜2杯程度です。",
            "反応時間の改善は10〜20ms程度と小さいものの測定可能です。",
            "効果は摂取後20〜30分で始まり、60〜90分でピークに近づきます。",
            "睡眠不足の状態ではカフェインの効果が大きく出やすくなります。",
          ],
        },
        { type: "h2", content: "耐性と過剰摂取" },
        {
          type: "paragraph",
          content:
            "毎日飲むと耐性が生まれやすくなります。過剰摂取は手の震え、心拍上昇、不安を引き起こし、精密な反応には逆効果です。",
        },
        {
          type: "highlight",
          content:
            "朝のコーヒー前後で同じ条件の反応時間テストを行い、違いを自分で確認してみましょう。",
        },
      ],
    },
    "sleep-deprivation-reaction-time": {
      title: "睡眠不足は反応時間をどう壊すのか",
      excerpt:
        "一晩の睡眠不足だけでも反応が20〜50%遅くなることがあります。休息がなぜ重要なのかを解説します。",
      readTime: "5分で読める",
      sections: [
        {
          type: "paragraph",
          content:
            "徹夜がつらいことは誰でも知っていますが、反応時間への影響は見落とされがちです。数日間の睡眠制限だけでも、注意力と反応速度の低下は蓄積します。",
        },
        { type: "h2", content: "数字ははっきりしています" },
        {
          type: "list",
          items: [
            "17〜19時間起きていると、軽いアルコール影響に近い反応になることがあります。",
            "数日間6時間睡眠を続けるだけでも低下は蓄積します。",
            "睡眠不足の人は自分の低下を過小評価しがちです。",
            "運転、スポーツ、ゲームなど素早い判断が必要な場面でリスクが高まります。",
          ],
        },
        { type: "h2", content: "なぜ反応が遅くなるのか" },
        {
          type: "paragraph",
          content:
            "睡眠中、脳は代謝産物を処理し、運動スキルを定着させ、前頭前野の資源を回復します。この過程が不足すると、注意制御と神経信号の効率が落ちます。",
        },
        { type: "h2", content: "マイクロスリープの問題" },
        {
          type: "paragraph",
          content:
            "強い疲労状態では、数秒間意識が途切れるマイクロスリープが起こることがあります。本人が気づかないまま外部刺激に反応できない時間が生まれます。",
        },
        {
          type: "highlight",
          content:
            "よく眠った朝と遅い夜に反応時間を測ると、疲労がどれだけ蓄積するかを実感できます。",
        },
      ],
    },
  },
  de: {
    "what-is-reaction-time": {
      title: "Was ist Reaktionszeit und warum ist sie wichtig?",
      excerpt:
        "Reaktionszeit ist die Zeit zwischen einem Reiz und deiner Antwort. Erfahre, wie sie Alltag, Sport und Gaming beeinflusst.",
      readTime: "5 Min. Lesezeit",
      sections: [
        {
          type: "paragraph",
          content:
            "Reaktionszeit ist die Zeitspanne zwischen dem Moment, in dem ein Reiz erscheint, und deiner tatsächlichen Reaktion. Dieser kurze Moment beeinflusst Fahrsicherheit, Sportleistung, Gaming und Konzentration.",
        },
        { type: "h2", content: "Die Wissenschaft hinter Reaktionszeit" },
        {
          type: "paragraph",
          content:
            "Wenn deine Augen ein Signal wie einen grünen Bildschirm erkennen, verarbeitet das Gehirn die Information, trifft eine Entscheidung und sendet einen Bewegungsbefehl an die Muskeln. Jede Station fügt einige Millisekunden hinzu.",
        },
        {
          type: "paragraph",
          content:
            "Die physische Untergrenze visueller Reaktion liegt ungefähr bei 100ms. Die meisten gesunden Erwachsenen liegen je nach Alter, Schlaf, Fokus, Gerät und Übung im Bereich von 200–300ms.",
        },
        { type: "h2", content: "Drei Arten von Reaktionszeit" },
        {
          type: "list",
          items: [
            "Einfache Reaktionszeit: ein Reiz, eine Antwort. Genau das misst dieser grüne-Bildschirm-Klicktest.",
            "Wahlreaktionszeit: mehrere Reize erfordern unterschiedliche Antworten und sind daher langsamer.",
            "Erkennungsreaktionszeit: du musst zuerst entscheiden, welcher Reiz relevant ist.",
          ],
        },
        { type: "h2", content: "Warum Reaktionszeit zählt" },
        {
          type: "paragraph",
          content:
            "Beim Fahren können 200ms statt 300ms mehrere Meter Bremsweg ausmachen. Im Sport entscheidet ein kleiner Vorteil über Start, Abwehr oder Ballkontakt. Im eSport sind visuelle Reaktion und Klicklatenz oft direkt spielentscheidend.",
        },
        { type: "h2", content: "Was ist eine normale Reaktionszeit?" },
        {
          type: "list",
          items: [
            "Unter 150ms: außergewöhnlich schnell und nahe am menschlichen Limit.",
            "150–200ms: schnell, typisch für trainierte Athleten und ernsthafte Gamer.",
            "200–300ms: normaler Bereich gesunder Erwachsener.",
            "300–400ms: eher langsam, oft durch Müdigkeit, Alter oder fehlende Übung beeinflusst.",
            "Über 400ms: häufig bei Schlafmangel, Ablenkung oder schlechtem Zustand.",
          ],
        },
        {
          type: "highlight",
          content:
            "Teste kostenlos 5 Runden und finde heraus, wie deine Reflexe im Vergleich zum Durchschnitt abschneiden.",
        },
      ],
    },
    "how-to-improve-reaction-time": {
      title: "10 bewährte Wege, deine Reaktionszeit zu verbessern",
      excerpt:
        "Von Schlafoptimierung bis Reflextraining: wissenschaftlich fundierte Methoden für schnellere Reaktionen.",
      readTime: "8 Min. Lesezeit",
      sections: [
        {
          type: "paragraph",
          content:
            "Reaktionszeit ist nicht nur Genetik. Deine Basis ist teilweise angeboren, doch Schlaf, Fitness, Übung und Fokus können deine Antwortgeschwindigkeit deutlich verbessern.",
        },
        { type: "h2", content: "1. Schlaf priorisieren" },
        {
          type: "paragraph",
          content:
            "Schlaf ist einer der stärksten Faktoren für kognitive Leistung. Schlafmangel senkt Aufmerksamkeit, Entscheidungsgeschwindigkeit und Stabilität deiner Testergebnisse.",
        },
        { type: "h2", content: "2. Regelmäßig trainieren" },
        {
          type: "paragraph",
          content:
            "Ausdauertraining verbessert Durchblutung und Exekutivfunktionen. Schon kurze Bewegung kann Fokus und Reaktionsfähigkeit für mehrere Stunden verbessern.",
        },
        { type: "h2", content: "3. Die konkrete Aufgabe üben" },
        {
          type: "paragraph",
          content:
            "Reaktionszeit ist aufgabenspezifisch. Wer im visuellen Klicktest schneller werden will, sollte genau diese Handlung wiederholt trainieren: Farbwechsel sehen, sofort klicken.",
        },
        { type: "h2", content: "4. Hydriert bleiben" },
        {
          type: "paragraph",
          content:
            "Schon leichte Dehydration kann Nervenleitung und Aufmerksamkeit beeinträchtigen. Beim Training, Arbeiten oder Spielen hilft regelmäßiges Trinken, stabil zu bleiben.",
        },
        { type: "h2", content: "5. Koffein strategisch einsetzen" },
        {
          type: "paragraph",
          content:
            "Moderates Koffein kann Wachheit erhöhen und Reaktionszeit leicht verkürzen. Zu viel verursacht Zittern, Unruhe und schlechtere Präzision.",
        },
        { type: "h2", content: "6. Antizipation trainieren" },
        {
          type: "paragraph",
          content:
            "Elite-Athleten und Profispieler reagieren nicht nur schnell, sie lesen Muster früher. Wer Bewegungen, Ballflug oder Spielsituationen erkennt, kann die Antwort vorbereiten, bevor der Reiz vollständig erscheint.",
        },
        {
          type: "highlight",
          content:
            "Setze heute deinen Ausgangswert: 5 Runden testen und unter gleichen Bedingungen wöchentlich vergleichen.",
        },
      ],
    },
    "reaction-time-by-age": {
      title: "Wie sich Reaktionszeit mit dem Alter verändert",
      excerpt:
        "Reaktionszeit erreicht oft in den 20ern ihren Höhepunkt und wird danach langsamer. Das sagt die Wissenschaft dazu.",
      readTime: "6 Min. Lesezeit",
      sections: [
        {
          type: "paragraph",
          content:
            "Alter ist ein verlässlicher Einflussfaktor für Reaktionszeit. Von Kindheit bis hohes Alter folgt schnelle Reaktion einem Muster aus Entwicklung, Höhepunkt und langsamer Abnahme.",
        },
        { type: "h2", content: "Reaktionszeit über die Lebensspanne" },
        {
          type: "list",
          items: [
            "Kinder: neuronale Netzwerke entwickeln sich noch, Reaktionen sind langsamer.",
            "Jugendliche: schnelle Verbesserung durch reifende Nervenbahnen.",
            "20er: häufiges Leistungsmaximum, etwa 200–250ms im Durchschnitt.",
            "30–50: Verarbeitung wird etwas langsamer, Erfahrung und Antizipation helfen.",
            "60+: durchschnittlich langsamer und stärker schwankend.",
          ],
        },
        { type: "h2", content: "Warum wird Reaktion langsamer?" },
        {
          type: "paragraph",
          content:
            "Nervenleitung, Sinnesempfindlichkeit, Aufmerksamkeitskontrolle und Motorik verändern sich. Wenn visuelle oder auditive Eingaben schwächer werden, beginnt die Verarbeitung später.",
        },
        { type: "h2", content: "Kann man den Rückgang bremsen?" },
        {
          type: "paragraph",
          content:
            "Ja. Ausdauertraining, Krafttraining, guter Schlaf, neue Fähigkeiten und Reaktionstraining helfen, neuronale Plastizität und Verarbeitungsgeschwindigkeit zu erhalten.",
        },
        {
          type: "highlight",
          content:
            "Teste deine Reaktionszeit kostenlos und vergleiche deinen Wert mit typischen Bereichen deiner Altersgruppe.",
        },
      ],
    },
    "gamers-vs-athletes-reaction-time": {
      title: "Gamer vs. Athleten: Wer reagiert schneller?",
      excerpt:
        "Ein Vergleich der Reaktionszeiten von Profispielern und Spitzensportlern und warum beide auf unterschiedliche Weise schnell sind.",
      readTime: "7 Min. Lesezeit",
      sections: [
        {
          type: "paragraph",
          content:
            "Gamer und Athleten gelten beide als schnell, doch ihre Schnelligkeit ist unterschiedlich. Gamer glänzen bei visueller Handreaktion am Bildschirm, Athleten bei Ganzkörperbewegung und Antizipation.",
        },
        { type: "h2", content: "Wie Gamer Reaktionen trainieren" },
        {
          type: "paragraph",
          content:
            "FPS, MOBAs und Rhythmusspiele liefern schnelle visuelle Reize und präzise Eingaben. Diese Wiederholung macht Bildschirmveränderungen und Zielauftritte leichter erkennbar.",
        },
        { type: "h2", content: "Wie Athleten Reaktionen trainieren" },
        {
          type: "paragraph",
          content:
            "Athleten lesen Körperhaltung, Ballflug und Spielsituationen. Die Reaktion beginnt oft schon mit der Vorhersage, nicht erst nachdem der Reiz vollständig sichtbar ist.",
        },
        { type: "h2", content: "Forschung und Praxis" },
        {
          type: "list",
          items: [
            "Action-Gamer schneiden in visuellen Aufmerksamkeitsaufgaben oft schneller ab.",
            "F1-Fahrer und Top-eSportler können bei einfachen visuellen Tests um 200ms erreichen.",
            "Sprinterstarts sind hochtrainierte Bewegungsmuster.",
            "Athleten haben Vorteile bei Ganzkörperkoordination und räumlicher Vorhersage.",
          ],
        },
        {
          type: "highlight",
          content:
            "Finde heraus, wo du stehst: Vergleiche deine 5-Runden-Reaktionszeit mit Gamern und Athleten.",
        },
      ],
    },
    "caffeine-and-reaction-time": {
      title: "Beschleunigt Koffein wirklich deine Reaktionszeit?",
      excerpt:
        "Kaffeetrinker fühlen sich oft wacher. Doch was sagt die Forschung über Koffein und Reflexe?",
      readTime: "4 Min. Lesezeit",
      sections: [
        {
          type: "paragraph",
          content:
            "Koffein ist eine der meistgenutzten psychoaktiven Substanzen. Viele fühlen sich danach wacher und schneller, doch die tatsächliche Wirkung hängt von Schlaf, Dosis und Gewöhnung ab.",
        },
        { type: "h2", content: "Wie Koffein im Gehirn wirkt" },
        {
          type: "paragraph",
          content:
            "Koffein blockiert Adenosinrezeptoren, die mit Müdigkeit zusammenhängen. Dadurch bleibt das Nervensystem wacher, und Aufmerksamkeit sowie Verarbeitungsgeschwindigkeit können vorübergehend steigen.",
        },
        { type: "h2", content: "Was Studien zeigen" },
        {
          type: "list",
          items: [
            "Typische wirksame Dosis: 50–200mg, etwa 1–2 Tassen Kaffee.",
            "Die Verbesserung liegt oft nur bei etwa 10–20ms, ist aber messbar.",
            "Die Wirkung beginnt nach 20–30 Minuten und erreicht um 60–90 Minuten ihren Höhepunkt.",
            "Bei Schlafmangel fällt der Nutzen meist stärker aus.",
          ],
        },
        { type: "h2", content: "Toleranz und zu viel Koffein" },
        {
          type: "paragraph",
          content:
            "Regelmäßige Nutzer entwickeln schnell Toleranz. Zu hohe Dosen können Zittern, Herzrasen und Unruhe verursachen und die Präzision schneller Klicks verschlechtern.",
        },
        {
          type: "highlight",
          content:
            "Teste deine Reaktionszeit vor und nach dem Morgenkaffee unter gleichen Bedingungen und vergleiche den Unterschied.",
        },
      ],
    },
    "sleep-deprivation-reaction-time": {
      title: "Wie Schlafmangel deine Reaktionszeit zerstört",
      excerpt:
        "Schon eine Nacht mit zu wenig Schlaf kann Reaktionen um 20–50% verlangsamen. Darum ist Erholung so wichtig.",
      readTime: "5 Min. Lesezeit",
      sections: [
        {
          type: "paragraph",
          content:
            "Dass eine durchwachte Nacht schlecht tut, ist offensichtlich. Weniger offensichtlich ist, wie stark schon moderater Schlafmangel Reaktionszeit, Aufmerksamkeit und Entscheidungsfähigkeit verschlechtert.",
        },
        { type: "h2", content: "Die Zahlen sind deutlich" },
        {
          type: "list",
          items: [
            "Nach 17–19 Stunden Wachsein kann Reaktion ähnlich beeinträchtigt sein wie bei leichtem Alkohollevel.",
            "Mehrere Tage mit nur 6 Stunden Schlaf lassen Defizite kumulieren.",
            "Schlafmangel wird von Betroffenen oft unterschätzt.",
            "Beim Fahren, Sport und Gaming steigt das Risiko langsamer Entscheidungen.",
          ],
        },
        { type: "h2", content: "Warum Schlafmangel verlangsamt" },
        {
          type: "paragraph",
          content:
            "Im Schlaf verarbeitet das Gehirn Stoffwechselprodukte, festigt motorische Fähigkeiten und stellt Ressourcen des präfrontalen Cortex wieder her. Fehlt dieser Prozess, sinken Aufmerksamkeit und neuronale Effizienz.",
        },
        { type: "h2", content: "Das Problem der Mikroschlafphasen" },
        {
          type: "paragraph",
          content:
            "Bei starker Müdigkeit können kurze Aussetzer von wenigen Sekunden auftreten. Man bemerkt sie oft nicht, reagiert in dieser Zeit aber kaum auf äußere Reize.",
        },
        {
          type: "highlight",
          content:
            "Teste morgens nach gutem Schlaf und spät nachts erneut, um zu sehen, wie Müdigkeit deine Reaktion verändert.",
        },
      ],
    },
  },
  fr: {
    "what-is-reaction-time": {
      title: "Qu'est-ce que le temps de réaction et pourquoi compte-t-il ?",
      excerpt:
        "Le temps de réaction est l'intervalle entre un stimulus et votre réponse. Découvrez son impact sur la vie quotidienne, le sport et le jeu.",
      readTime: "5 min de lecture",
      sections: [
        {
          type: "paragraph",
          content:
            "Le temps de réaction correspond au délai entre l'apparition d'un stimulus et votre réponse. Cette fraction de seconde influence la conduite, le sport, les jeux compétitifs et la concentration.",
        },
        { type: "h2", content: "La science du temps de réaction" },
        {
          type: "paragraph",
          content:
            "Quand vos yeux détectent un signal, comme un écran vert, le cerveau traite l'information, décide quoi faire et envoie une commande motrice aux muscles. Chaque étape ajoute quelques millisecondes.",
        },
        {
          type: "paragraph",
          content:
            "La limite physique d'une réaction visuelle se situe autour de 100ms. La plupart des adultes en bonne santé se trouvent entre 200 et 300ms selon l'âge, le sommeil, la concentration, l'appareil et l'entraînement.",
        },
        { type: "h2", content: "Trois types de temps de réaction" },
        {
          type: "list",
          items: [
            "Temps de réaction simple : un stimulus, une réponse. C'est ce que mesure ce test au clic.",
            "Temps de réaction de choix : plusieurs stimuli demandent des réponses différentes, donc le délai augmente.",
            "Temps de réaction de reconnaissance : il faut d'abord identifier le stimulus pertinent.",
          ],
        },
        { type: "h2", content: "Pourquoi c'est important" },
        {
          type: "paragraph",
          content:
            "En conduite, 200ms au lieu de 300ms peuvent changer la distance de freinage. En sport, une petite avance aide à démarrer, défendre ou intercepter. En e-sport, la réaction visuelle et la latence de clic peuvent décider d'une action.",
        },
        { type: "h2", content: "Quel est un temps normal ?" },
        {
          type: "list",
          items: [
            "Moins de 150ms : exceptionnel, proche de la limite humaine.",
            "150–200ms : rapide, fréquent chez les athlètes entraînés et les joueurs sérieux.",
            "200–300ms : plage normale pour de nombreux adultes.",
            "300–400ms : plutôt lent, souvent lié à la fatigue, l'âge ou le manque de pratique.",
            "Plus de 400ms : courant en cas de manque de sommeil, distraction ou mauvais état.",
          ],
        },
        {
          type: "highlight",
          content:
            "Essayez le test gratuit sur 5 tours et voyez comment vos réflexes se comparent à la moyenne.",
        },
      ],
    },
    "how-to-improve-reaction-time": {
      title: "10 façons prouvées d'améliorer votre temps de réaction",
      excerpt:
        "Du sommeil aux exercices de réflexes, découvrez des méthodes fondées sur la science pour répondre plus vite.",
      readTime: "8 min de lecture",
      sections: [
        {
          type: "paragraph",
          content:
            "Le temps de réaction n'est pas seulement génétique. Votre base compte, mais le sommeil, l'entraînement, la forme physique et l'attention peuvent améliorer votre vitesse de réponse.",
        },
        { type: "h2", content: "1. Prioriser le sommeil" },
        {
          type: "paragraph",
          content:
            "Le sommeil est essentiel pour la performance cognitive. Le manque de sommeil réduit l'attention, ralentit les décisions et rend les résultats moins stables.",
        },
        { type: "h2", content: "2. Faire de l'exercice" },
        {
          type: "paragraph",
          content:
            "L'exercice aérobie améliore le flux sanguin et les fonctions exécutives. Même une courte séance peut aider la concentration et la vitesse de réaction pendant plusieurs heures.",
        },
        { type: "h2", content: "3. Pratiquer la tâche exacte" },
        {
          type: "paragraph",
          content:
            "Le temps de réaction est spécifique. Pour aller plus vite dans un test visuel au clic, il faut pratiquer exactement ce geste : voir le changement, cliquer vite.",
        },
        { type: "h2", content: "4. Rester hydraté" },
        {
          type: "paragraph",
          content:
            "Une légère déshydratation peut nuire à la transmission nerveuse et à l'attention. Garder de l'eau près de soi aide à maintenir une performance stable.",
        },
        { type: "h2", content: "5. Utiliser la caféine avec stratégie" },
        {
          type: "paragraph",
          content:
            "Une dose modérée de caféine peut augmenter l'éveil et réduire légèrement le temps de réaction. Une dose trop élevée peut provoquer tremblements et anxiété, ce qui nuit à la précision.",
        },
        { type: "h2", content: "6. Entraîner l'anticipation" },
        {
          type: "paragraph",
          content:
            "Les athlètes et joueurs d'élite ne réagissent pas seulement vite : ils lisent les motifs plus tôt. Anticiper une trajectoire, un adversaire ou un état de jeu prépare la réponse avant le signal complet.",
        },
        {
          type: "highlight",
          content:
            "Créez votre référence aujourd'hui : faites 5 tours, puis retestez chaque semaine dans les mêmes conditions.",
        },
      ],
    },
    "reaction-time-by-age": {
      title: "Comment le temps de réaction change avec l'âge",
      excerpt:
        "Le temps de réaction atteint souvent son pic dans la vingtaine puis ralentit. Voici ce que dit la science et quoi faire.",
      readTime: "6 min de lecture",
      sections: [
        {
          type: "paragraph",
          content:
            "L'âge est un facteur régulier du temps de réaction. De l'enfance à l'âge avancé, la réponse rapide suit une courbe de développement, de pic, puis de déclin progressif.",
        },
        { type: "h2", content: "Temps de réaction selon l'âge" },
        {
          type: "list",
          items: [
            "Enfants : les réseaux neuronaux se développent encore, donc les réponses sont plus lentes.",
            "Adolescents : amélioration rapide avec la maturation des voies nerveuses.",
            "Jeunes adultes : pic fréquent autour de 200–250ms.",
            "30–50 ans : léger ralentissement, compensé par l'expérience et l'anticipation.",
            "60 ans et plus : réactions plus lentes et plus variables.",
          ],
        },
        { type: "h2", content: "Pourquoi cela ralentit-il ?" },
        {
          type: "paragraph",
          content:
            "La conduction nerveuse, les systèmes sensoriels, l'attention et le contrôle moteur changent avec l'âge. Si l'entrée visuelle ou auditive est moins nette, le traitement commence aussi plus tard.",
        },
        { type: "h2", content: "Peut-on limiter le déclin ?" },
        {
          type: "paragraph",
          content:
            "Oui. Exercice aérobie, renforcement, sommeil, apprentissage de nouvelles compétences et entraînement de réaction aident à préserver la plasticité et la vitesse de traitement.",
        },
        {
          type: "highlight",
          content:
            "Faites le test gratuit et comparez votre score aux plages typiques de votre âge.",
        },
      ],
    },
    "gamers-vs-athletes-reaction-time": {
      title: "Joueurs contre athlètes : qui réagit le plus vite ?",
      excerpt:
        "Comparaison des temps de réaction chez les joueurs professionnels et les athlètes d'élite, et pourquoi chacun est rapide différemment.",
      readTime: "7 min de lecture",
      sections: [
        {
          type: "paragraph",
          content:
            "Les joueurs et les athlètes sont tous deux réputés rapides, mais pas de la même manière. Les joueurs excellent dans les réactions visuelles main-écran, tandis que les athlètes s'appuient sur le corps entier et l'anticipation.",
        },
        { type: "h2", content: "Comment les joueurs s'entraînent" },
        {
          type: "paragraph",
          content:
            "Les FPS, MOBA et jeux de rythme imposent des stimuli visuels rapides et des actions précises. Cette répétition améliore la détection des changements à l'écran.",
        },
        { type: "h2", content: "Comment les athlètes s'entraînent" },
        {
          type: "paragraph",
          content:
            "Les athlètes lisent la posture, la trajectoire et le rythme. Leur réponse commence souvent par l'anticipation avant que le stimulus soit entièrement visible.",
        },
        { type: "h2", content: "Recherche et pratique" },
        {
          type: "list",
          items: [
            "Les joueurs d'action obtiennent souvent de bons résultats dans les tâches d'attention visuelle.",
            "Pilotes F1 et joueurs e-sport de haut niveau peuvent approcher 200ms en test simple.",
            "Le départ des sprinters est un modèle moteur très entraîné.",
            "Les athlètes gardent un avantage en coordination complète et prédiction spatiale.",
          ],
        },
        {
          type: "highlight",
          content:
            "Voyez où vous vous situez : comparez votre temps moyen sur 5 tours avec celui des joueurs et athlètes.",
        },
      ],
    },
    "caffeine-and-reaction-time": {
      title: "La caféine accélère-t-elle vraiment votre temps de réaction ?",
      excerpt:
        "Les buveurs de café se sentent souvent plus vifs. Mais que dit la recherche sur la caféine et les réflexes ?",
      readTime: "4 min de lecture",
      sections: [
        {
          type: "paragraph",
          content:
            "La caféine est l'une des substances psychoactives les plus consommées. Beaucoup se sentent plus alertes après un café, mais l'effet réel dépend du sommeil, de la dose et de la tolérance.",
        },
        { type: "h2", content: "Comment la caféine agit dans le cerveau" },
        {
          type: "paragraph",
          content:
            "La caféine bloque les récepteurs de l'adénosine, liés à la somnolence. Le système nerveux reste donc plus éveillé, ce qui peut augmenter temporairement l'attention et la vitesse de traitement.",
        },
        { type: "h2", content: "Ce que montrent les études" },
        {
          type: "list",
          items: [
            "Dose typique : 50–200mg, soit environ 1–2 tasses de café.",
            "L'amélioration du temps de réaction est souvent modeste, autour de 10–20ms.",
            "Les effets commencent après 20–30 minutes et culminent vers 60–90 minutes.",
            "L'effet est plus marqué en situation de manque de sommeil.",
          ],
        },
        { type: "h2", content: "Tolérance et excès" },
        {
          type: "paragraph",
          content:
            "Une consommation quotidienne crée rapidement une tolérance. Des doses trop élevées peuvent provoquer tremblements, anxiété et perte de précision.",
        },
        {
          type: "highlight",
          content:
            "Testez votre réaction avant et après le café du matin, dans les mêmes conditions, pour voir la différence.",
        },
      ],
    },
    "sleep-deprivation-reaction-time": {
      title: "Comment le manque de sommeil détruit votre temps de réaction",
      excerpt:
        "Une seule nuit trop courte peut ralentir vos réactions de 20 à 50%. Découvrez pourquoi le repos est essentiel.",
      readTime: "5 min de lecture",
      sections: [
        {
          type: "paragraph",
          content:
            "Tout le monde sait qu'une nuit blanche fait mal, mais l'impact sur le temps de réaction est souvent sous-estimé. Même quelques jours de sommeil réduit dégradent l'attention et la vitesse de réponse.",
        },
        { type: "h2", content: "Les chiffres sont clairs" },
        {
          type: "list",
          items: [
            "Après 17–19 heures éveillé, la réaction peut ressembler à un léger effet de l'alcool.",
            "Plusieurs nuits de 6 heures de sommeil accumulent les déficits.",
            "Les personnes privées de sommeil sous-estiment souvent leur baisse de performance.",
            "Le risque augmente pour la conduite, le sport et les jeux rapides.",
          ],
        },
        { type: "h2", content: "Pourquoi le manque de sommeil ralentit" },
        {
          type: "paragraph",
          content:
            "Pendant le sommeil, le cerveau élimine des déchets métaboliques, consolide les compétences motrices et restaure les ressources du cortex préfrontal. Sans cela, attention et efficacité neuronale chutent.",
        },
        { type: "h2", content: "Le problème des micro-sommeils" },
        {
          type: "paragraph",
          content:
            "En forte fatigue, de courts épisodes d'inconscience peuvent apparaître. La personne ne les remarque pas toujours, mais elle répond très mal aux stimuli pendant ces instants.",
        },
        {
          type: "highlight",
          content:
            "Testez-vous après une bonne nuit puis tard le soir : vous verrez comment la fatigue s'accumule.",
        },
      ],
    },
  },
};
