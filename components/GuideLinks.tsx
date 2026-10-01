import Link from "next/link";
import { getPostBySlug } from "@/lib/blogPosts";
import { Lang, getLangPath } from "@/lib/i18n";

const LABELS: Record<Lang, { title: string; test: string }> = {
  en: { title: "Understand and improve your reaction time", test: "Take the free 5-round reaction time test" },
  zh: { title: "了解并改善你的反应时间", test: "开始免费的 5 轮反应时间测试" },
  ko: { title: "반응 시간 이해하기와 연습", test: "무료 5회 반응 시간 테스트 시작" },
  ja: { title: "反応時間を理解して練習する", test: "無料の5ラウンド反応時間テストを始める" },
  de: { title: "Reaktionszeit verstehen und trainieren", test: "Kostenlosen Reaktionstest mit 5 Runden starten" },
  fr: { title: "Comprendre et travailler son temps de réaction", test: "Faire le test gratuit en 5 essais" },
  vi: { title: "Hiểu và cải thiện thời gian phản xạ", test: "Làm bài kiểm tra phản xạ miễn phí gồm 5 lượt" },
};

const GUIDE_SLUGS = [
  "what-is-reaction-time",
  "reaction-time-by-age",
  "how-to-improve-reaction-time",
  "gamers-vs-athletes-reaction-time",
];

export default function GuideLinks({ lang, currentSlug }: { lang: Lang; currentSlug?: string }) {
  const copy = LABELS[lang];
  const posts = GUIDE_SLUGS.filter((slug) => slug !== currentSlug)
    .map((slug) => getPostBySlug(slug, lang))
    .filter((post) => post !== undefined)
    .slice(0, 3);

  return (
    <section className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{copy.title}</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={getLangPath(lang, `/blog/${post.slug}`)} className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      {currentSlug && (
        <Link href={getLangPath(lang)} className="mt-6 inline-flex rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-700">
          {copy.test}
        </Link>
      )}
    </section>
  );
}
