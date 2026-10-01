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

interface ContactPageContentProps {
  lang: Lang;
}

const CONTACT_EMAIL = "support@reactiontimetestonline.com";

const CONTACT_COPY: Record<
  Lang,
  {
    emailTitle: string;
    emailLabel: string;
    emailAction: string;
    emailInstructions: string;
  }
> = {
  en: {
    emailTitle: "Contact us by email",
    emailLabel: "Email",
    emailAction: "Open your email app",
    emailInstructions:
      "Use the email link below to write to us about a question, a problem, or a suggested correction. It opens your email app; you review and send the message there. You can also copy the address into your preferred email service.",
  },
  zh: {
    emailTitle: "通过电子邮件联系我们",
    emailLabel: "邮箱",
    emailAction: "打开邮件应用",
    emailInstructions:
      "如有问题、故障反馈或内容纠错，请使用下方邮箱链接联系我们。链接会打开你的邮件应用，请在应用中检查并发送邮件。你也可以复制邮箱地址，在常用的邮箱服务中撰写邮件。",
  },
  ko: {
    emailTitle: "이메일로 문의하기",
    emailLabel: "이메일",
    emailAction: "이메일 앱 열기",
    emailInstructions:
      "질문, 오류 신고 또는 내용 수정 제안은 아래 이메일 링크를 이용해 주세요. 링크를 누르면 이메일 앱이 열리며, 그곳에서 내용을 확인한 뒤 직접 보내면 됩니다. 주소를 복사해 평소 사용하는 이메일 서비스에 붙여 넣어도 됩니다.",
  },
  ja: {
    emailTitle: "メールでのお問い合わせ",
    emailLabel: "メール",
    emailAction: "メールアプリを開く",
    emailInstructions:
      "ご質問、不具合の報告、内容の訂正依頼は、下のメールリンクからお寄せください。リンクを押すとメールアプリが開きます。内容を確認し、アプリから送信してください。アドレスをコピーして、普段お使いのメールサービスから送ることもできます。",
  },
  de: {
    emailTitle: "Kontakt per E-Mail",
    emailLabel: "E-Mail",
    emailAction: "E-Mail-App öffnen",
    emailInstructions:
      "Nutze den folgenden E-Mail-Link für Fragen, Fehlermeldungen oder Korrekturvorschläge. Er öffnet deine E-Mail-App, in der du die Nachricht prüfen und selbst absenden kannst. Du kannst die Adresse auch in deinen bevorzugten E-Mail-Dienst kopieren.",
  },
  fr: {
    emailTitle: "Nous contacter par e-mail",
    emailLabel: "E-mail",
    emailAction: "Ouvrir votre application de messagerie",
    emailInstructions:
      "Utilisez le lien ci-dessous pour nous envoyer une question, signaler un problème ou proposer une correction. Il ouvre votre application de messagerie, où vous pouvez relire et envoyer votre message. Vous pouvez aussi copier l’adresse dans votre service de messagerie habituel.",
  },
  vi: {
    emailTitle: "Liên hệ qua email",
    emailLabel: "Email",
    emailAction: "Mở ứng dụng email",
    emailInstructions:
      "Nếu bạn có câu hỏi, gặp sự cố hoặc muốn đề xuất sửa nội dung, hãy dùng liên kết email bên dưới. Ứng dụng email sẽ mở để bạn xem lại và tự gửi thư. Bạn cũng có thể sao chép địa chỉ để dùng trong dịch vụ email quen thuộc.",
  },
};

export default function ContactPageContent({ lang }: ContactPageContentProps) {
  const tr = getT(lang);
  const copy = CONTACT_COPY[lang];
  const pageUrl = canonicalUrl(lang, "/contact");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#contact`,
        name: tr.contactTitle,
        description: tr.contactDescription,
        url: pageUrl,
        inLanguage: inLanguage(lang),
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        about: {
          "@id": `${BASE_URL}/#organization`,
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
            name: tr.navContact,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header t={tr} lang={lang} currentPath="/contact" />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-black text-gray-900 mb-3">{tr.contactTitle}</h1>
        <p className="text-gray-500 mb-8">{tr.contactDescription}</p>

        <section className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="font-bold text-gray-800 mb-2">
            {copy.emailTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            {copy.emailInstructions}
          </p>
          <p className="text-sm text-gray-600">
            {copy.emailLabel}:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-600 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex mt-6 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
          >
            {copy.emailAction}
          </a>
        </section>
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
