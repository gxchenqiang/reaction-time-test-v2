
import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About – Reaction Time Test Online",
  description:
    "Learn about ReactionTimeTestOnline.com — a free, privacy-first tool to measure and improve your reaction time. Built for everyone.",
  alternates: {
    canonical: "https://reactiontimetestonline.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent lang="en" />;
}
