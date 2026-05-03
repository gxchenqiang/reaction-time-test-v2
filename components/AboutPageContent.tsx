import { Lang } from "@/lib/i18n";
import {
  BASE_URL,
  canonicalUrl,
  inLanguage,
  organizationJsonLd,
} from "@/lib/seo";
import { t as getT } from "@/lib/translations";
import Header from "./Header";
import Footer from "./Footer";
import JsonLd from "./JsonLd";

interface AboutPageContentProps {
  lang: Lang;
}

const ABOUT_COPY: Record<
  Lang,
  {
    missionTitle: string;
    missionText: string;
    measureTitle: string;
    measurePrefix: string;
    measureSuffix: string;
    measureNote: string;
    privacyTitle: string;
    privacyText: string;
    whoTitle: string;
    whoItems: string[];
  }
> = {
  en: {
    missionTitle: "Our Mission",
    missionText:
      "We believe everyone should have access to free, accurate tools to measure and improve their cognitive performance. Reaction time is one of the most fundamental measures of neural processing speed, and we want to make it fun and accessible for everyone.",
    measureTitle: "How We Measure",
    measurePrefix: "Our test uses",
    measureSuffix:
      "— a high-resolution timer built into modern browsers — to measure the exact time between the screen turning green and your click. This provides millisecond-accurate results.",
    measureNote:
      "Note: Browser-based tests may have a slight overhead of ~1-10ms due to rendering pipelines, but this is consistent across tests and does not affect relative comparisons.",
    privacyTitle: "Privacy",
    privacyText:
      "All your test data is stored locally in your browser using localStorage. We do not collect, store, or transmit any personal data to our servers. Your results stay on your device.",
    whoTitle: "Who Uses This Test?",
    whoItems: [
      "Gamers training to improve their in-game reaction speed",
      "Athletes measuring their neural response time",
      "Researchers and students studying human cognition",
      "Curious people who want to know how fast they are",
      "Coaches assessing athlete readiness",
    ],
  },
  zh: {
    missionTitle: "我们的使命",
    missionText:
      "我们希望每个人都能免费使用准确的工具来测量和提升认知表现。反应时间是神经处理速度最基础的指标之一，我们希望让它更有趣、更容易使用。",
    measureTitle: "我们如何测量",
    measurePrefix: "测试使用",
    measureSuffix:
      "这一现代浏览器内置的高精度计时器，测量屏幕变绿到你点击之间的准确时间，结果精确到毫秒级。",
    measureNote:
      "说明：浏览器测试可能因渲染流程产生约 1-10ms 的轻微开销，但这种开销在多次测试中相对一致，不影响相对比较。",
    privacyTitle: "隐私",
    privacyText:
      "你的测试数据只会使用 localStorage 保存在本机浏览器中。我们不会在服务器上收集、存储或传输任何个人数据，成绩始终留在你的设备上。",
    whoTitle: "谁会使用这个测试？",
    whoItems: [
      "训练游戏内反应速度的玩家",
      "测量神经反应时间的运动员",
      "研究人类认知的研究者和学生",
      "想了解自己反应速度的用户",
      "评估运动员状态的教练",
    ],
  },
  ko: {
    missionTitle: "우리의 목표",
    missionText:
      "누구나 인지 수행 능력을 측정하고 개선할 수 있는 무료 정확한 도구를 사용할 수 있어야 한다고 믿습니다. 반응 시간은 신경 처리 속도의 가장 기본적인 지표 중 하나이며, 이를 쉽고 재미있게 확인할 수 있게 만드는 것이 목표입니다.",
    measureTitle: "측정 방식",
    measurePrefix: "이 테스트는",
    measureSuffix:
      "라는 최신 브라우저의 고해상도 타이머를 사용해 화면이 초록색으로 바뀐 순간부터 클릭까지의 시간을 밀리초 단위로 측정합니다.",
    measureNote:
      "참고: 브라우저 기반 테스트는 렌더링 과정으로 약 1-10ms의 오차가 생길 수 있지만, 테스트마다 비교적 일정하므로 상대 비교에는 영향을 거의 주지 않습니다.",
    privacyTitle: "개인정보 보호",
    privacyText:
      "모든 테스트 데이터는 브라우저의 localStorage에만 저장됩니다. 서버로 개인 데이터를 수집, 저장, 전송하지 않으며 결과는 사용자의 기기에 남습니다.",
    whoTitle: "누가 이 테스트를 사용하나요?",
    whoItems: [
      "게임 내 반응 속도를 훈련하는 게이머",
      "신경 반응 시간을 측정하는 운동선수",
      "인간 인지를 연구하는 연구자와 학생",
      "자신의 반응 속도가 궁금한 사용자",
      "선수 컨디션을 평가하는 코치",
    ],
  },
  ja: {
    missionTitle: "私たちの目的",
    missionText:
      "誰もが認知パフォーマンスを測定し、改善できる無料で正確なツールにアクセスできるべきだと考えています。反応時間は神経処理速度を示す基本的な指標のひとつであり、楽しく使いやすい形で提供します。",
    measureTitle: "測定方法",
    measurePrefix: "このテストでは",
    measureSuffix:
      "という最新ブラウザ内蔵の高精度タイマーを使い、画面が緑に変わってからクリックするまでの時間をミリ秒単位で測定します。",
    measureNote:
      "注: ブラウザ上のテストではレンダリング処理により約 1-10ms のわずかな差が生じる場合がありますが、条件は一貫しているため相対比較にはほとんど影響しません。",
    privacyTitle: "プライバシー",
    privacyText:
      "テストデータはブラウザの localStorage にのみ保存されます。個人データをサーバーで収集、保存、送信することはありません。結果はあなたの端末に残ります。",
    whoTitle: "このテストを使う人",
    whoItems: [
      "ゲーム内の反応速度を鍛えるプレイヤー",
      "神経反応時間を測定するアスリート",
      "人間の認知を研究する研究者や学生",
      "自分の反応速度を知りたい人",
      "選手の状態を評価するコーチ",
    ],
  },
  de: {
    missionTitle: "Unsere Mission",
    missionText:
      "Jeder sollte Zugang zu kostenlosen und genauen Werkzeugen haben, um die eigene kognitive Leistung zu messen und zu verbessern. Reaktionszeit ist eine der grundlegendsten Messgrößen für neuronale Verarbeitungsgeschwindigkeit, und wir möchten sie einfach und zugänglich machen.",
    measureTitle: "Wie wir messen",
    measurePrefix: "Unser Test nutzt",
    measureSuffix:
      "— einen hochauflösenden Timer moderner Browser — um die genaue Zeit zwischen dem grünen Bildschirm und deinem Klick zu messen. Das liefert Ergebnisse in Millisekunden.",
    measureNote:
      "Hinweis: Browserbasierte Tests können durch Rendering-Prozesse einen leichten Overhead von etwa 1-10ms haben. Dieser ist jedoch über Tests hinweg konsistent und beeinflusst relative Vergleiche kaum.",
    privacyTitle: "Datenschutz",
    privacyText:
      "Alle Testdaten werden lokal im Browser per localStorage gespeichert. Wir sammeln, speichern oder übertragen keine personenbezogenen Daten auf unsere Server. Deine Ergebnisse bleiben auf deinem Gerät.",
    whoTitle: "Wer nutzt diesen Test?",
    whoItems: [
      "Gamer, die ihre Reaktionsgeschwindigkeit trainieren",
      "Athleten, die ihre neuronale Reaktionszeit messen",
      "Forschende und Studierende im Bereich Kognition",
      "Menschen, die wissen möchten, wie schnell sie reagieren",
      "Trainer, die die Einsatzbereitschaft von Athleten einschätzen",
    ],
  },
  fr: {
    missionTitle: "Notre mission",
    missionText:
      "Nous pensons que chacun devrait avoir accès à des outils gratuits et précis pour mesurer et améliorer ses performances cognitives. Le temps de réaction est l'un des indicateurs les plus fondamentaux de la vitesse de traitement neuronal, et nous voulons le rendre simple et accessible.",
    measureTitle: "Comment nous mesurons",
    measurePrefix: "Notre test utilise",
    measureSuffix:
      "— un minuteur haute résolution intégré aux navigateurs modernes — pour mesurer le temps exact entre l'apparition de l'écran vert et votre clic, avec une précision en millisecondes.",
    measureNote:
      "Remarque : les tests dans le navigateur peuvent avoir un léger surcoût d'environ 1-10ms lié au rendu, mais il reste cohérent entre les tests et n'affecte pas les comparaisons relatives.",
    privacyTitle: "Confidentialité",
    privacyText:
      "Toutes vos données de test sont stockées localement dans votre navigateur avec localStorage. Nous ne collectons, ne stockons et ne transmettons aucune donnée personnelle à nos serveurs. Vos résultats restent sur votre appareil.",
    whoTitle: "Qui utilise ce test ?",
    whoItems: [
      "Les joueurs qui entraînent leur vitesse de réaction",
      "Les athlètes qui mesurent leur temps de réponse neuronal",
      "Les chercheurs et étudiants qui étudient la cognition humaine",
      "Les personnes curieuses de connaître leur vitesse de réaction",
      "Les entraîneurs qui évaluent l'état de préparation des athlètes",
    ],
  },
};

export default function AboutPageContent({ lang }: AboutPageContentProps) {
  const tr = getT(lang);
  const copy = ABOUT_COPY[lang];
  const pageUrl = canonicalUrl(lang, "/about");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#about`,
        name: tr.aboutTitle,
        description: tr.aboutDescription,
        url: pageUrl,
        inLanguage: inLanguage(lang),
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: tr.navHome,
            item: canonicalUrl(lang),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: tr.navAbout,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header t={tr} lang={lang} currentPath="/about" />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-black text-gray-900 mb-6">{tr.aboutTitle}</h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6 text-gray-600 leading-relaxed">
          <p>{tr.aboutDescription}</p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {copy.missionTitle}
            </h2>
            <p>{copy.missionText}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {copy.measureTitle}
            </h2>
            <p>
              {copy.measurePrefix}{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                performance.now()
              </code>{" "}
              {copy.measureSuffix}
            </p>
            <p className="mt-3">{copy.measureNote}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {copy.privacyTitle}
            </h2>
            <p>{copy.privacyText}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {copy.whoTitle}
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {copy.whoItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
