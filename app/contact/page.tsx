
import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact – Reaction Time Test Online",
  description:
    "Get in touch with the Reaction Time Test Online team. We welcome questions, suggestions, and feedback.",
  alternates: {
    canonical: "https://reactiontimetestonline.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent lang="en" />;
}
