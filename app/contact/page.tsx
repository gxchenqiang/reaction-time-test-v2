
import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";
import { canonicalUrl, languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact – Reaction Time Test Online",
  description:
    "Get in touch with the Reaction Time Test Online team. We welcome questions, suggestions, and feedback.",
  alternates: {
    canonical: canonicalUrl("en", "/contact"),
    languages: languageAlternates("/contact"),
  },
};

export default function ContactPage() {
  return <ContactPageContent lang="en" />;
}
