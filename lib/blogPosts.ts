import { DEFAULT_LANG, Lang } from "./i18n";
import { BLOG_POST_TRANSLATIONS } from "./blogPostTranslations";

export interface BlogSection {
  type: "paragraph" | "h2" | "h3" | "list" | "ordered-list" | "highlight";
  content?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updatedDate?: string;
  readTime: string;
  sections: BlogSection[];
  sources?: { title: string; url: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-reaction-time",
    title: "What Is a Good Reaction Time? Average Scores and 200 ms Explained",
    excerpt: "Understand simple reaction time, what a 200 ms score means, and how your screen, input device, and test method affect online results.",
    date: "2025-03-01",
    updatedDate: "2026-09-22",
    readTime: "4 min read",
    sections: [
      { type: "paragraph", content: "Reaction time is the interval between a signal and your response. In a visual click test, the signal is a screen changing color and the response is a click, tap, or key press. A lower score means that this particular signal-and-response sequence happened faster. It does not measure intelligence, overall fitness, or every kind of reflex." },
      { type: "h2", content: "What is the average human reaction time?" },
      { type: "paragraph", content: "There is no single average that applies to every test. Woods and colleagues reported a mean of 231 ms in a calibrated visual task with 1,469 adults; it was 213 ms after correcting for hardware delays. Those are results from that study, not a global norm or a benchmark calibrated to this website." },
      { type: "paragraph", content: "When someone quotes an average, check what people had to detect, how they responded, which devices they used, and whether the number is a best attempt or a session average. A sound, a changing color, and choosing between several targets are different tasks." },
      { type: "h2", content: "Is 200 ms a good reaction time?" },
      { type: "paragraph", content: "A repeatable 200 ms average is a quick result for a simple visual click task. That is a practical description, not a validated percentile. One 200 ms attempt cannot tell you how you rank worldwide, and a slower result on another device does not necessarily mean your reactions have worsened." },
      { type: "paragraph", content: "For scores such as 150, 250, or 300 ms, use the same rule: compare repeated session averages under the same conditions. A very low best attempt can reflect anticipation. A slower round can reflect distraction or input delay. Neither is enough to label someone an elite athlete or diagnose a health problem." },
      { type: "h2", content: "Simple, choice, and recognition reaction time" },
      { type: "list", items: [
        "Simple: respond whenever one known signal appears. The five-round color test on this site uses this format.",
        "Choice: select a different response for each signal, such as left or right. The decision is part of the measured time.",
        "Recognition or go/no-go: respond to the target signal and withhold your response to others. Check mistakes as well as speed."
      ] },
      { type: "h2", content: "How accurate is an online reaction time test?" },
      { type: "paragraph", content: "This test uses the browser's performance.now() clock. A precise clock does not remove display refresh, screen processing, input hardware, or browser scheduling delays. Animation callbacks run before a repaint; they cannot confirm the exact instant that the new color physically reaches your eyes. The result is an estimate of your response on this setup, not a laboratory-calibrated measurement." },
      { type: "h2", content: "Get a result you can compare" },
      { type: "ordered-list", items: [
        "Use the same device, browser, and response method each time. Keep your hand in a comfortable, repeatable position.",
        "Try a practice session, then wait for the actual color change rather than guessing its timing.",
        "Complete all five rounds. Note the average and the individual rounds, not only the fastest click.",
        "Repeat on another day under similar conditions before interpreting a small change as improvement."
      ] },
      { type: "highlight", content: "Take the free five-round reaction time test to establish a baseline on your current device." }
    ],
    sources: [
      { title: "Woods et al. (2015): Factors influencing the latency of simple reaction time", url: "https://pubmed.ncbi.nlm.nih.gov/25859198/" },
      { title: "MDN: Performance.now()", url: "https://developer.mozilla.org/en-US/docs/Web/API/Performance/now" },
      { title: "MDN: Window.requestAnimationFrame()", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame" }
    ]
  },
  {
    slug: "how-to-improve-reaction-time",
    title: "How to Improve Reaction Time: A Repeatable Practice Routine",
    excerpt: "Build a useful baseline, practice without guessing, and track consistent reaction time improvements for clicking, gaming, or sport.",
    date: "2025-02-20",
    updatedDate: "2026-09-22",
    readTime: "4 min read",
    sections: [
      { type: "paragraph", content: "To work on reaction time, first decide which response you want to improve. Seeing green and clicking is different from selecting a target in a game or moving to intercept a ball. The routine below is a practical way to organize your own practice; it is not a clinical protocol or a promise to remove a fixed number of milliseconds." },
      { type: "h2", content: "1. Establish a baseline before changing anything" },
      { type: "paragraph", content: "Choose one device and one input method. Do one familiarization session, then record the average of each of three five-round sessions, with a short break between them. Keep the same number of sessions when you retest. Using every planned session avoids reporting only a lucky personal best." },
      { type: "h2", content: "2. Practice responding, not predicting" },
      { type: "ordered-list", items: [
        "Rest your hand comfortably and look at the test area.",
        "Start a round and wait for the color change. Do not count down the delay.",
        "Respond once to the visible signal. Note false starts as errors instead of treating them as speed improvements.",
        "Finish the session, take a break, and stop if your attention is drifting. More repetitions are not automatically more useful."
      ] },
      { type: "h2", content: "3. Keep a small, useful training log" },
      { type: "paragraph", content: "Record the date, device, input method, session averages, and any unusual interruptions. Add a brief note about whether you felt rested. After several sessions, look for a change that persists across days. For example, one faster average followed by your usual results is weaker evidence than a similar improvement in several sessions." },
      { type: "h2", content: "4. Separate equipment changes from personal progress" },
      { type: "paragraph", content: "Changing from a phone to a mouse, or from one display to another, changes the measurement setup. Start a new baseline when you make a hardware change. A lower score can be a useful improvement in the whole setup without proving that your nervous system became faster." },
      { type: "h2", content: "5. Match practice to your game or sport" },
      { type: "paragraph", content: "For gaming, add a drill that requires selecting the correct target, and track accuracy alongside response time. For a ball sport, work with a coach on positioning and responding to realistic cues. A color-click score alone cannot establish whether either skill improved. Green and colleagues' action-game research examined specific perceptual decisions; it does not establish a universal benefit for every activity." },
      { type: "h2", content: "6. Make rest part of the comparison" },
      { type: "paragraph", content: "Sleep restriction can impair sustained attention, as demonstrated in Van Dongen and colleagues' controlled study. Choose times when you feel rested, take breaks, and avoid turning practice into a late-night score chase. Caffeine, supplements, and lost sleep are unnecessary variables for this routine." },
      { type: "highlight", content: "Start with one five-round test, then use the same setup for your next planned practice session." }
    ],
    sources: [
      { title: "Green et al. (2010): Improved probabilistic inference as a general learning mechanism with action video games", url: "https://pubmed.ncbi.nlm.nih.gov/20833324/" },
      { title: "Van Dongen et al. (2003): The cumulative cost of additional wakefulness", url: "https://pubmed.ncbi.nlm.nih.gov/12683469/" },
      { title: "MDN: Performance.now()", url: "https://developer.mozilla.org/en-US/docs/Web/API/Performance/now" }
    ]
  },
  {
    slug: "reaction-time-by-age",
    title: "Reaction Time by Age: How to Interpret Your Score",
    excerpt: "Why age affects reaction time, why online age charts are hard to compare, and how to track your own results without invented norms.",
    date: "2025-02-10",
    updatedDate: "2026-09-22",
    readTime: "3 min read",
    sections: [
      { type: "paragraph", content: "Reaction time changes across life, but there is no universal millisecond target for each birthday or decade. An age chart only makes sense alongside the test, participants, equipment, and scoring method used to create it. This website does not have a representative, validated age-norm dataset." },
      { type: "h2", content: "What does research say about age and reaction time?" },
      { type: "paragraph", content: "Woods and colleagues found age-related slowing in a calibrated adult visual reaction task. A separate study by Hardwick and colleagues linked slower responses with age to changes in movement preparation. These findings describe particular experiments; they do not assign a score to every individual of the same age." },
      { type: "h2", content: "Why we do not publish an age-by-age score table" },
      { type: "list", items: [
        "Different tasks measure different things. A simple click, a choice between keys, and a whole-body movement are not interchangeable.",
        "The sample matters. A study of adults cannot establish normal values for children, and a convenience sample is not the world's population.",
        "Equipment contributes delay. A value from calibrated hardware cannot be transferred directly to an uncalibrated phone or laptop.",
        "A group average leaves out individual variation. It is not a pass mark for health or ability."
      ] },
      { type: "h2", content: "Is my reaction time good for my age?" },
      { type: "paragraph", content: "This test cannot provide a validated age percentile. It can help you describe your performance on a repeatable task. Use the same input method, compare full five-round averages, and look across several days. A slower score than a friend of a different age does not identify age as the cause." },
      { type: "h2", content: "Does reaction time peak at 20, 24, or 30?" },
      { type: "paragraph", content: "There is no exact peak age that applies to every form of response. Before using such a claim, check whether the study tested a visual click, a complex game decision, or another skill. Being experienced at a sport or job also involves knowledge and choices that this test does not measure." },
      { type: "h2", content: "How to use the result constructively" },
      { type: "paragraph", content: "Make a personal baseline while rested and comfortable. If you change your device or response method, start a separate comparison. Use the test for curiosity and practice, not to assess driving fitness or diagnose age-related conditions. A sudden change in everyday coordination is a reason to seek appropriate professional advice rather than rely on a browser score." },
      { type: "highlight", content: "Measure a five-round personal baseline and compare it with your own future sessions." }
    ],
    sources: [
      { title: "Woods et al. (2015): Factors influencing the latency of simple reaction time", url: "https://pubmed.ncbi.nlm.nih.gov/25859198/" },
      { title: "Hardwick et al. (2022): Age-related increases in reaction time result from slower preparation, not delayed initiation", url: "https://pubmed.ncbi.nlm.nih.gov/35829640/" }
    ]
  },
  {
    slug: "gamers-vs-athletes-reaction-time",
    title: "Gamers vs. Athletes: Can You Compare Their Reaction Times?",
    excerpt: "Understand what a gamer reaction time test measures, why sports results differ, and how to make a fair comparison without unsupported pro averages.",
    date: "2025-01-28",
    updatedDate: "2026-09-22",
    readTime: "3 min read",
    sections: [
      { type: "paragraph", content: "A fast gamer, sprinter, and goalkeeper all respond quickly in some situations, but their reported reaction times may come from different tasks. There is no defensible winner from comparing a mouse click with a starting-block response or a successful save. The stimulus and required movement must match before the numbers become comparable." },
      { type: "h2", content: "What a gamer reaction time test leaves out" },
      { type: "paragraph", content: "A color-click test has one known signal and one known response. In a game, you may also need to locate a target, identify whether it is an opponent, choose an action, and aim. A low click score does not measure those decisions or predict a rank in Counter-Strike or Valorant. Network latency is another part of an online match, separate from this local browser task." },
      { type: "h2", content: "What the gaming research actually tested" },
      { type: "paragraph", content: "Green and colleagues studied action-game experience using perceptual decision tasks and reported improved use of sensory evidence. That finding is relevant to those tasks; it does not provide a universal professional-gamer average or prove that gamers beat athletes on every reaction test." },
      { type: "h2", content: "Why an athlete's response is different" },
      { type: "paragraph", content: "A sprinter responds to a sound with a coordinated push, while a goalkeeper must judge a moving ball and reach an interception point. Movement time, positioning, and the available visual information matter. A stopwatch value from one activity cannot be treated as the person's underlying visual click time." },
      { type: "h2", content: "A fair comparison needs the same conditions" },
      { type: "ordered-list", items: [
        "Give everyone the same instructions, familiarization, device, and input method.",
        "Use the same task and number of rounds. Do not compare one person's best attempt with another person's average.",
        "Count incorrect responses and false starts. Faster guessing is not better performance.",
        "Describe who participated and how scores were summarized. A few friends do not represent all athletes or gamers."
      ] },
      { type: "h2", content: "How to use a click test for gaming practice" },
      { type: "paragraph", content: "Use a five-round session as a small, repeatable record of visual clicking on your setup. Keep game-specific accuracy and decision drills as separate measures. If you change the mouse or monitor, record that change so a hardware improvement is not mistaken for a training effect." },
      { type: "highlight", content: "Try the same five-round test on the same setup when comparing your own gaming practice sessions." }
    ],
    sources: [
      { title: "Green et al. (2010): Improved probabilistic inference as a general learning mechanism with action video games", url: "https://pubmed.ncbi.nlm.nih.gov/20833324/" },
      { title: "Peiyong and Inomata (2012): Cognitive strategies for goalkeeper responding to soccer penalty kick", url: "https://pubmed.ncbi.nlm.nih.gov/23409608/" }
    ]
  },
  {
    slug: "caffeine-and-reaction-time",
    title: "Caffeine and Reaction Time: What Studies Can Tell You",
    excerpt: "Does coffee improve reaction time? See why study results depend on the task, habitual use, and withdrawal, and why one before-and-after test is inconclusive.",
    date: "2025-01-15",
    updatedDate: "2026-09-22",
    readTime: "3 min read",
    sections: [
      { type: "paragraph", content: "Caffeine can affect measured reaction time, but there is no reliable rule that a coffee will remove a particular number of milliseconds from your browser score. Feeling more awake, responding faster, and making better decisions are different outcomes. The study design matters when interpreting a claim about any of them." },
      { type: "h2", content: "What controlled experiments found" },
      { type: "paragraph", content: "A trial by Smith and colleagues found faster simple responses after caffeine in the conditions studied. Rogers and colleagues examined habitual consumption and overnight abstinence, finding a more complicated pattern across alertness, anxiety, and performance. These experiments do not support a guaranteed benefit of a given size for everyone." },
      { type: "h2", content: "Why habitual use and withdrawal matter" },
      { type: "paragraph", content: "A before-and-after comparison can mix several effects: a person's usual caffeine intake, a period without it, time of day, and repeated exposure to the test. Addicott and Laurienti's experiment also found that abstinence changed the response to caffeine on some measures. A study that controls these factors is more informative than a single coffee-and-click session." },
      { type: "h2", content: "Why your faster second attempt is not proof" },
      { type: "list", items: [
        "Practice: the second session happens after you have learned the timing and controls.",
        "Expectation: knowing that you had coffee can change how you approach the task.",
        "Ordinary variation: attention and response times fluctuate between rounds.",
        "Setup: a different device or input method changes the comparison."
      ] },
      { type: "h2", content: "Use the test as a record, not a dosing guide" },
      { type: "paragraph", content: "If you already keep a reaction-time log, note your usual routine alongside the result and avoid drawing a conclusion from one session. You do not need to consume more caffeine, abruptly stop your usual intake, or miss sleep to use this site. The test cannot determine a safe dose or whether caffeine is appropriate for you." },
      { type: "h2", content: "Can coffee replace sleep for reaction speed?" },
      { type: "paragraph", content: "A faster click after coffee does not demonstrate that the effects of sleep loss have been reversed or that someone is safe to drive. A brief browser task does not assess sustained alertness. Treat rest and any health decisions separately from the score." },
      { type: "highlight", content: "Record a five-round baseline during your normal routine; use several sessions to understand ordinary variation." }
    ],
    sources: [
      { title: "Smith et al. (2013): Acute effects of caffeine on attention: a comparison of non-consumers and withdrawn consumers", url: "https://pubmed.ncbi.nlm.nih.gov/22992376/" },
      { title: "Rogers et al. (2013): Faster but not smarter: effects of caffeine and caffeine withdrawal on alertness and performance", url: "https://pubmed.ncbi.nlm.nih.gov/23108937/" },
      { title: "Addicott and Laurienti (2009): A comparison of the effects of caffeine following abstinence and normal caffeine use", url: "https://pubmed.ncbi.nlm.nih.gov/19777214/" }
    ]
  },
  {
    slug: "sleep-deprivation-reaction-time",
    title: "Sleep Deprivation and Reaction Time: Why Consistency Matters",
    excerpt: "Learn how restricted sleep affects attention, why a brief reaction test cannot measure sleep debt, and how to compare rested sessions responsibly.",
    date: "2025-01-05",
    updatedDate: "2026-09-22",
    readTime: "3 min read",
    sections: [
      { type: "paragraph", content: "Sleep loss can affect how reliably you respond, not just your fastest response. An occasional quick click can coexist with missed signals or unusually slow rounds. This is why a best score is a poor way to judge whether you are well rested." },
      { type: "h2", content: "What the sleep restriction research found" },
      { type: "paragraph", content: "In a controlled 2003 study, Van Dongen and colleagues found accumulating performance deficits with repeated sleep restriction. Participants' reported sleepiness did not track the full growth in impairment. The study supports taking repeated sleep loss seriously; it does not supply a universal percentage by which this site's score will slow." },
      { type: "h2", content: "A five-round test is not a vigilance assessment" },
      { type: "paragraph", content: "Research on sleep often uses sustained tasks that measure lapses over time. A brief color-click session samples a much shorter period. It cannot measure your sleep debt, rule out fatigue, or certify fitness to drive, operate equipment, or compete. A good score does not override feeling sleepy." },
      { type: "h2", content: "How to make a useful personal comparison" },
      { type: "ordered-list", items: [
        "Use your normal routine. Do not deliberately restrict sleep to create a comparison.",
        "Keep the same device, input method, and approximate testing time.",
        "Record all five rounds and the average, along with a simple note about rest and interruptions.",
        "Look across several days. Avoid assigning a cause to one unusually slow or fast session."
      ] },
      { type: "h2", content: "Why there is no fixed recovery countdown" },
      { type: "paragraph", content: "A browser score cannot tell you how much recovery sleep you need. The amount of sleep lost, the pattern over previous nights, and the outcome being measured all affect what recovery means. We do not promise that one nap or a fixed number of nights will restore a particular score." },
      { type: "h2", content: "What to change in your practice" },
      { type: "paragraph", content: "Schedule practice when you are normally rested and stop when you struggle to stay attentive. Keep a comfortable, consistent routine rather than extending a session to chase a personal best. If sleepiness repeatedly interferes with daily activities, seek appropriate professional advice instead of using a reaction test to self-assess the cause." },
      { type: "highlight", content: "Use the five-round test to record a rested baseline, then compare sessions under similar conditions." }
    ],
    sources: [
      { title: "Van Dongen et al. (2003): The cumulative cost of additional wakefulness", url: "https://pubmed.ncbi.nlm.nih.gov/12683469/" }
    ]
  },
  {
    slug: "goalkeeper-reaction-time-vozinha-world-cup",
    title: "Goalkeeper Reaction Time: Vozinha, Anticipation, and the Click Test",
    excerpt: "Vozinha's World Cup match offers a starting point for understanding goalkeeper reactions, anticipation, and what an online click test cannot measure.",
    date: "2026-06-19",
    updatedDate: "2026-09-22",
    readTime: "4 min read",
    sections: [
      { type: "paragraph", content: "FIFA's official match report records Spain's 0–0 draw with Cabo Verde on 15 June 2026, with Vozinha in goal. That performance is an interesting starting point for discussing goalkeeper reaction time, but the match report does not measure his visual response latency. A successful save cannot be converted into a personal millisecond score." },
      { type: "h2", content: "What does goalkeeper reaction time include?" },
      { type: "paragraph", content: "A goalkeeper has to pick up useful information, decide what the shot requires, begin moving, and reach the ball. The available time changes with the shot's distance, speed, angle, and visibility. Positioning also changes how far the goalkeeper must move. A click test captures only a much simpler signal-and-response task." },
      { type: "h2", content: "Reaction, anticipation, and movement are different" },
      { type: "list", items: [
        "Reaction: responding after a detectable signal appears.",
        "Anticipation: using information available earlier to prepare for what might happen next. A prediction can be wrong.",
        "Movement time: the time needed to carry out the response, such as stepping or diving to intercept the ball."
      ] },
      { type: "paragraph", content: "These parts overlap during play. Seeing a goalkeeper move early in a replay does not tell us exactly which cue they used, and a spectacular save does not establish unusually fast simple reaction time. Claims about Vozinha's specific perceptual strategy would require evidence beyond the scoreline." },
      { type: "h2", content: "What penalty-kick research can and cannot show" },
      { type: "paragraph", content: "Peiyong and Inomata studied responses to penalty videos and found that available information and response timing mattered. Their participants did not reliably predict direction before contact in that experiment. This cautions against a universal rule such as reading one hip or foot position to know where every shot will go." },
      { type: "h2", content: "Practical goalkeeper drills to discuss with a coach" },
      { type: "ordered-list", items: [
        "Use short video clips and pause before contact. Make a directional prediction, then check the outcome. Track correct predictions rather than how confident they feel.",
        "Repeat with unfamiliar clips so memory of a previous shot is not mistaken for anticipation.",
        "Use controlled, appropriate-speed ball drills to practice ready position and the first movement. Increase difficulty with a coach while keeping technique and safety in view.",
        "Evaluate decisions and successful interceptions separately from a browser score. The aim is a response that works in the sporting task."
      ] },
      { type: "h2", content: "Can an online test measure goalkeeper ability?" },
      { type: "paragraph", content: "A five-round visual reaction test can give you a personal clicking baseline on one device. It cannot rate your shot-stopping ability or compare you with Vozinha without equivalent measured data. Use it as a small supplementary activity, alongside the sport-specific feedback that matters on the pitch." },
      { type: "highlight", content: "Try the five-round visual reaction test for a personal baseline, then keep goalkeeper practice as a separate measure." }
    ],
    sources: [
      { title: "FIFA: Spain v. Cabo Verde, official match report, 15 June 2026", url: "https://fdp.fifa.org/assetspublic/ce281/r12492/pdf/FullTimeMatchReport-English.pdf" },
      { title: "Peiyong and Inomata (2012): Cognitive strategies for goalkeeper responding to soccer penalty kick", url: "https://pubmed.ncbi.nlm.nih.gov/23409608/" }
    ]
  }
];

export function getBlogPosts(lang: Lang = DEFAULT_LANG): BlogPost[] {
  if (lang === DEFAULT_LANG) return BLOG_POSTS;

  const translations = BLOG_POST_TRANSLATIONS[lang];
  return BLOG_POSTS.map((post) => ({
    ...post,
    ...(translations?.[post.slug] ?? {}),
  }));
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export function getPostBySlug(
  slug: string,
  lang: Lang = DEFAULT_LANG
): BlogPost | undefined {
  return getBlogPosts(lang).find((p) => p.slug === slug);
}
