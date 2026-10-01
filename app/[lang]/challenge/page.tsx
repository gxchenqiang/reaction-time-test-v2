import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLang, SUPPORTED_LANGS } from "@/lib/i18n";
import ChallengePageContent, {
  challengeMetadata,
} from "@/components/challenge/ChallengePageContent";

type Props = { params: Promise<{ lang: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return SUPPORTED_LANGS.filter((lang) => lang !== "en").map((lang) => ({
    lang,
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return isValidLang(lang) && lang !== "en" ? challengeMetadata(lang) : {};
}
export default async function LocalizedChallengePage({ params }: Props) {
  const { lang } = await params;
  if (!isValidLang(lang) || lang === "en") notFound();
  return <ChallengePageContent lang={lang} />;
}
