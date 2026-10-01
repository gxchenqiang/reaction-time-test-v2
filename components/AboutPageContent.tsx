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
    sourcesTitle: string;
    analyticsText: string;
    privacyTitle: string;
    privacyText: string;
    whoTitle: string;
    whoItems: string[];
  }
> = {
  en: {
    sourcesTitle: "Browser timing documentation",
    analyticsText: "The site sends page paths, referring page paths, and basic interaction events to Pageview at app.pageview.app. Events may include the challenge mode, input type, and outcome. The Pageview event payload excludes URL query strings and fragments, challenge names, and individual round times. Cloudflare hosts this site, and the live site also uses Cloudflare Web Analytics to collect visit and performance metrics. Those exclusions apply only to the Pageview event payload, not to every request handled by the hosting provider. Opening a sharing service or sharing a link or image sends the information you choose to that service or recipient.",
    missionTitle: "What This Tool Is For",
    missionText:
      "Try a simple visual response task, see the results of five rounds, and compare your own sessions. The site is for informal practice and exploration. It is not a validated measure of cognition, athletic readiness, driving fitness, or health.",
    measureTitle: "How We Measure",
    measurePrefix: "Our test uses",
    measureSuffix:
      "to calculate a browser time interval between the green-cue update and your response. Times are displayed in whole milliseconds. The timer’s resolution is not the same as the accuracy of the complete test.",
    measureNote:
      "Screen refresh, rendering, input processing, and system load affect results. The test does not detect the exact moment pixels become visible or calibrate device delays. Keep your setup consistent and interpret small differences cautiously.",
    privacyTitle: "Privacy",
    privacyText:
      "Test history and your challenge display name are saved in this browser using localStorage. You can remove them by clearing this site’s browser data. Challenge and result links contain encoded names and results in the URL fragment; anyone with the link can read and forward that information. Only include a name you are comfortable sharing.",
    whoTitle: "What You Can Explore",
    whoItems: [
      "Your average, best time, and variation across five rounds",
      "Repeated sessions using the same screen and input method",
      "Informal comparisons with friends using the same rules",
      "How a browser measurement differs from a calibrated experiment"
    ],
  },
  zh: {
    sourcesTitle: "浏览器计时文档",
    analyticsText: "本站会向 app.pageview.app 的 Pageview 服务发送页面路径、来源页面路径和基本交互事件。事件可能包括挑战模式、输入类型和胜负结果。Pageview 事件载荷不包含 URL 查询参数或片段、挑战名字及各轮用时。本站由 Cloudflare 托管，线上页面也使用 Cloudflare Web Analytics 收集访问和性能指标。上述排除范围仅适用于 Pageview 事件载荷，不代表托管服务处理的所有请求。打开分享服务或分享链接、图片时，你选择的信息会发给相应服务或接收者。",
    missionTitle: "工具的用途",
    missionText:
      "尝试简单的视觉响应任务，查看五轮结果，并比较自己的多组成绩。本站用于日常练习和探索，不是经过验证的认知、运动准备状态、驾驶能力或健康测评。",
    measureTitle: "我们如何测量",
    measurePrefix: "测试使用",
    measureSuffix:
      "计算绿色提示更新到你的响应之间的浏览器时间间隔，并以整毫秒显示。计时器的分辨率不等于整个测试的测量准确度。",
    measureNote:
      "屏幕刷新、渲染、输入处理和系统负载都会影响成绩。测试无法检测像素实际可见的确切时刻，也不校准设备延迟。请保持设备与操作条件一致，谨慎解读微小差异。",
    privacyTitle: "隐私",
    privacyText:
      "测试历史和挑战显示名通过 localStorage 保存在当前浏览器中；清除此站点的浏览器数据即可删除。挑战及结果链接会在 URL 片段中包含编码后的名字和成绩，任何持有链接的人都能读取并转发这些信息。请只填写愿意分享的名字。",
    whoTitle: "可以探索什么",
    whoItems: [
      "五轮测试的平均值、最佳成绩和波动",
      "使用同一屏幕和输入方式重复测试",
      "使用相同规则与好友进行趣味比较",
      "浏览器测量与经过校准的实验有何不同"
    ],
  },
  ko: {
    sourcesTitle: "브라우저 타이밍 문서",
    analyticsText: "사이트는 페이지 경로, 유입 페이지 경로, 기본 상호작용 이벤트를 app.pageview.app의 Pageview로 보냅니다. 이벤트에는 챌린지 모드, 입력 유형, 결과가 포함될 수 있습니다. Pageview 이벤트 데이터에는 URL 쿼리와 프래그먼트, 챌린지 이름, 개별 라운드 시간이 포함되지 않습니다. 이 사이트는 Cloudflare에서 호스팅하며, 운영 사이트는 Cloudflare Web Analytics로 방문 및 성능 지표도 수집합니다. 위의 제외 범위는 Pageview 이벤트 데이터에만 적용되며 호스팅 업체가 처리하는 모든 요청에 적용되는 것은 아닙니다. 공유 서비스를 열거나 링크 또는 이미지를 공유하면 선택한 정보가 해당 서비스나 수신자에게 전달됩니다.",
    missionTitle: "이 도구의 용도",
    missionText:
      "단순한 시각 반응 과제를 시도하고 5라운드 결과와 자신의 세션을 비교할 수 있습니다. 일상적인 연습과 탐색을 위한 사이트이며 인지 능력, 운동 준비 상태, 운전 적합성 또는 건강을 검증하여 평가하는 도구가 아닙니다.",
    measureTitle: "측정 방식",
    measurePrefix: "이 테스트는",
    measureSuffix:
      "로 초록색 신호 업데이트부터 응답까지의 브라우저 시간 간격을 계산합니다. 시간은 정수 밀리초로 표시됩니다. 타이머 해상도와 전체 테스트의 측정 정확도는 다릅니다.",
    measureNote:
      "화면 주사율, 렌더링, 입력 처리, 시스템 부하가 결과에 영향을 줍니다. 픽셀이 실제로 보이기 시작한 순간을 감지하거나 기기 지연을 보정하지 않습니다. 환경을 일정하게 유지하고 작은 차이는 신중하게 해석하세요.",
    privacyTitle: "개인정보 보호",
    privacyText:
      "테스트 기록과 챌린지 표시 이름은 localStorage를 통해 현재 브라우저에 저장됩니다. 브라우저에서 이 사이트의 데이터를 지우면 삭제할 수 있습니다. 챌린지 및 결과 링크는 URL 프래그먼트에 인코딩된 이름과 결과를 포함하므로 링크를 가진 사람은 이를 읽고 전달할 수 있습니다. 공유해도 괜찮은 이름만 사용하세요.",
    whoTitle: "살펴볼 수 있는 내용",
    whoItems: [
      "5라운드의 평균, 최고 기록, 변동",
      "같은 화면과 입력 방식으로 반복한 세션",
      "같은 규칙으로 친구와 재미로 비교하기",
      "브라우저 측정과 보정된 실험의 차이"
    ],
  },
  ja: {
    sourcesTitle: "ブラウザの計時に関する文書",
    analyticsText: "当サイトはページのパス、参照元ページのパス、基本的な操作イベントをapp.pageview.appのPageviewに送信します。イベントにはチャレンジのモード、入力の種類、対戦結果などが含まれます。PageviewのイベントデータにはURLのクエリやフラグメント、チャレンジの名前、各ラウンドの時間を含めません。当サイトはCloudflareでホスティングされ、公開サイトではCloudflare Web Analyticsで訪問やパフォーマンスの指標も収集します。上記の除外範囲はPageviewのイベントデータに限られ、ホスティング事業者が処理するすべてのリクエストに適用されるものではありません。共有サービスを開いたり、リンクや画像を共有したりすると、選んだ情報がそのサービスや相手に送られます。",
    missionTitle: "このツールの用途",
    missionText:
      "単純な視覚反応の課題を試し、5ラウンドの結果や自分のセッションを比較できます。日常的な練習や学習のためのサイトであり、認知能力、競技の準備状態、運転適性、健康を検証して評価するものではありません。",
    measureTitle: "測定方法",
    measurePrefix: "このテストでは",
    measureSuffix:
      "を使い、緑の合図の更新から応答までのブラウザ内の時間間隔を計算し、整数のミリ秒で表示します。タイマーの分解能はテスト全体の測定精度とは異なります。",
    measureNote:
      "画面の更新、描画、入力処理、システム負荷が結果に影響します。ピクセルが実際に見える正確な瞬間の検出や端末の遅延の補正は行いません。環境をそろえ、小さな差は慎重に解釈してください。",
    privacyTitle: "プライバシー",
    privacyText:
      "テスト履歴とチャレンジの表示名はlocalStorageで現在のブラウザに保存されます。このサイトのブラウザデータを消去すると削除できます。チャレンジや結果のリンクはURLフラグメントに符号化した名前と結果を含み、リンクを持つ人は内容を読んだり転送したりできます。共有してもよい名前だけを使ってください。",
    whoTitle: "確認できること",
    whoItems: [
      "5ラウンドの平均、ベストタイム、ばらつき",
      "同じ画面と入力方法での繰り返し測定",
      "同じルールでの友人との気軽な比較",
      "ブラウザ測定と校正済みの実験との違い"
    ],
  },
  de: {
    sourcesTitle: "Dokumentation zur Browser-Zeitmessung",
    analyticsText: "Die Website sendet Seitenpfade, verweisende Seitenpfade und grundlegende Interaktionsereignisse an Pageview unter app.pageview.app. Dazu können Challenge-Modus, Eingabetyp und Ausgang gehören. Die Pageview-Ereignisdaten enthalten keine URL-Abfragen oder -Fragmente, Challenge-Namen oder einzelnen Rundenzeiten. Cloudflare hostet diese Website; die veröffentlichte Website nutzt außerdem Cloudflare Web Analytics zur Erfassung von Besuchs- und Leistungskennzahlen. Diese Ausschlüsse gelten nur für die Pageview-Ereignisdaten, nicht für jede vom Hostinganbieter verarbeitete Anfrage. Beim Öffnen eines Sharing-Dienstes oder Teilen eines Links oder Bildes gelangen die gewählten Informationen an diesen Dienst oder Empfänger.",
    missionTitle: "Wozu dieses Werkzeug dient",
    missionText:
      "Probiere eine einfache visuelle Reaktionsaufgabe aus, betrachte fünf Runden und vergleiche eigene Sitzungen. Die Website dient der informellen Übung und Erkundung. Sie ist kein validiertes Maß für Kognition, sportliche Bereitschaft, Fahrtauglichkeit oder Gesundheit.",
    measureTitle: "Wie wir messen",
    measurePrefix: "Unser Test nutzt",
    measureSuffix:
      "zur Berechnung eines Zeitintervalls im Browser zwischen der Aktualisierung des grünen Signals und deiner Reaktion. Die Anzeige erfolgt in ganzen Millisekunden. Die Auflösung des Timers ist nicht gleich der Genauigkeit des gesamten Tests.",
    measureNote:
      "Bildschirmaktualisierung, Darstellung, Eingabeverarbeitung und Systemlast beeinflussen die Ergebnisse. Der Test erkennt nicht den exakten Zeitpunkt sichtbarer Pixel und kalibriert keine Geräteverzögerungen. Halte den Aufbau gleich und interpretiere kleine Unterschiede vorsichtig.",
    privacyTitle: "Datenschutz",
    privacyText:
      "Testverlauf und Challenge-Anzeigename werden mit localStorage in diesem Browser gespeichert. Du kannst sie löschen, indem du die Browserdaten dieser Website entfernst. Challenge- und Ergebnislinks enthalten kodierte Namen und Ergebnisse im URL-Fragment. Wer den Link hat, kann diese Informationen lesen und weitergeben. Verwende nur einen Namen, den du teilen möchtest.",
    whoTitle: "Was du erkunden kannst",
    whoItems: [
      "Durchschnitt, Bestzeit und Streuung über fünf Runden",
      "Wiederholte Sitzungen mit demselben Bildschirm und derselben Eingabemethode",
      "Informelle Vergleiche mit Freunden unter denselben Regeln",
      "Unterschiede zwischen einer Browsermessung und einem kalibrierten Experiment"
    ],
  },
  fr: {
    sourcesTitle: "Documentation sur le minutage du navigateur",
    analyticsText: "Le site envoie les chemins des pages, les chemins des pages référentes et des événements d’interaction de base à Pageview sur app.pageview.app. Ces événements peuvent inclure le mode du défi, le type de saisie et l’issue. Les données des événements Pageview excluent les paramètres et fragments d’URL, les noms du défi et les temps de chaque tour. Cloudflare héberge ce site, et le site public utilise aussi Cloudflare Web Analytics pour recueillir des indicateurs de visites et de performance. Ces exclusions concernent uniquement les données des événements Pageview, pas toutes les requêtes traitées par l’hébergeur. Ouvrir un service de partage ou partager un lien ou une image transmet les informations choisies à ce service ou destinataire.",
    missionTitle: "À quoi sert cet outil",
    missionText:
      "Essayez une tâche de réaction visuelle simple, consultez cinq tours et comparez vos propres sessions. Le site sert à la pratique informelle et à l’exploration. Il ne fournit pas de mesure validée de la cognition, de la préparation sportive, de l’aptitude à conduire ou de la santé.",
    measureTitle: "Comment nous mesurons",
    measurePrefix: "Notre test utilise",
    measureSuffix:
      "pour calculer un intervalle dans le navigateur entre la mise à jour du signal vert et votre réponse. Les temps sont affichés en millisecondes entières. La résolution du minuteur n’est pas la précision du test complet.",
    measureNote:
      "Le rafraîchissement de l’écran, le rendu, le traitement des entrées et la charge du système influencent les résultats. Le test ne détecte pas l’instant exact où les pixels deviennent visibles et ne calibre pas les délais du matériel. Gardez la même configuration et interprétez les petits écarts avec prudence.",
    privacyTitle: "Confidentialité",
    privacyText:
      "L’historique et votre nom de défi sont enregistrés dans ce navigateur avec localStorage. Vous pouvez les supprimer en effaçant les données du site dans le navigateur. Les liens de défi et de résultat contiennent des noms et résultats encodés dans le fragment d’URL ; toute personne disposant du lien peut les lire et les transmettre. Utilisez uniquement un nom que vous acceptez de partager.",
    whoTitle: "Ce que vous pouvez explorer",
    whoItems: [
      "Votre moyenne, votre meilleur temps et la variation sur cinq tours",
      "Des sessions répétées avec le même écran et la même méthode de saisie",
      "Des comparaisons informelles entre amis avec les mêmes règles",
      "La différence entre une mesure dans le navigateur et une expérience calibrée"
    ],
  },
  vi: {
    sourcesTitle: "Tài liệu về đo thời gian trong trình duyệt",
    analyticsText: "Trang web gửi đường dẫn trang, đường dẫn trang giới thiệu và các sự kiện tương tác cơ bản đến Pageview tại app.pageview.app. Sự kiện có thể bao gồm chế độ thử thách, cách nhập và kết quả. Dữ liệu sự kiện gửi đến Pageview không chứa tham số truy vấn hoặc phần sau dấu # của URL, tên trong thử thách hay thời gian từng lượt. Trang web được lưu trữ trên Cloudflare; bản trực tuyến cũng dùng Cloudflare Web Analytics để thu thập số liệu về lượt truy cập và hiệu năng. Những mục bị loại trừ ở trên chỉ áp dụng cho dữ liệu sự kiện Pageview, không áp dụng cho mọi yêu cầu mà nhà cung cấp dịch vụ lưu trữ xử lý. Khi bạn mở dịch vụ chia sẻ hoặc chia sẻ liên kết hay hình ảnh, thông tin bạn chọn sẽ được gửi đến dịch vụ hoặc người nhận đó.",
    missionTitle: "Công cụ này dùng để làm gì?",
    missionText: "Hãy thử một bài kiểm tra phản ứng với tín hiệu hình ảnh đơn giản, xem kết quả của năm lượt và so sánh các lần chơi của chính bạn. Trang web phục vụ việc luyện tập và tìm hiểu thông thường; đây không phải công cụ đã được kiểm định để đánh giá nhận thức, mức độ sẵn sàng thi đấu, khả năng lái xe hay sức khỏe.",
    measureTitle: "Cách chúng tôi đo thời gian",
    measurePrefix: "Bài kiểm tra dùng",
    measureSuffix: "để tính khoảng thời gian trong trình duyệt từ lúc cập nhật tín hiệu màu xanh lá đến khi bạn phản hồi. Kết quả được hiển thị theo mili giây nguyên. Độ phân giải của bộ đếm thời gian không đồng nghĩa với độ chính xác của toàn bộ phép đo.",
    measureNote: "Tần số làm mới màn hình, quá trình hiển thị, xử lý thao tác và tải hệ thống đều ảnh hưởng đến kết quả. Bài kiểm tra không xác định chính xác thời điểm điểm ảnh xuất hiện trước mắt bạn và không hiệu chỉnh độ trễ của thiết bị. Hãy giữ điều kiện kiểm tra ổn định và thận trọng khi diễn giải những chênh lệch nhỏ.",
    privacyTitle: "Quyền riêng tư",
    privacyText: "Lịch sử kiểm tra và tên hiển thị trong thử thách được lưu trong trình duyệt này bằng localStorage. Bạn có thể xóa chúng bằng cách xóa dữ liệu trình duyệt của trang web. Liên kết thử thách và kết quả chứa tên cùng kết quả đã mã hóa trong phần sau dấu # của URL; bất kỳ ai có liên kết đều có thể đọc và chuyển tiếp thông tin đó. Chỉ dùng tên mà bạn thấy thoải mái khi chia sẻ.",
    whoTitle: "Bạn có thể tìm hiểu những gì?",
    whoItems: [
      "Thời gian trung bình, thành tích tốt nhất và mức dao động qua năm lượt",
      "Kết quả của nhiều lần chơi trên cùng màn hình và với cùng cách nhập",
      "So sánh vui với bạn bè theo cùng một bộ quy tắc",
      "Sự khác biệt giữa phép đo trên trình duyệt và thí nghiệm dùng thiết bị đã hiệu chỉnh",
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
            <p className="mt-3 text-sm">
              {copy.sourcesTitle}:{" "}
              <a
                className="underline underline-offset-2 hover:text-gray-900"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Performance/now"
              >
                MDN — performance.now()
              </a>
              {" · "}
              <a
                className="underline underline-offset-2 hover:text-gray-900"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame"
              >
                MDN — requestAnimationFrame()
              </a>
            </p>
          </section>

          <section id="privacy" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {copy.privacyTitle}
            </h2>
            <p>{copy.privacyText}</p>
            <p className="mt-3">{copy.analyticsText}</p>
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
