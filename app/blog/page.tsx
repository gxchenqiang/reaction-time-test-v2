
import type { Metadata } from "next";
import BlogPageContent from "@/components/BlogPageContent";

export const metadata: Metadata = {
  title: "Reaction Time Blog – Tips, Science & Research",
  description:
    "Explore articles about reaction time, reflexes, and how to improve your response speed. Science-backed insights for gamers, athletes, and curious minds.",
  alternates: {
    canonical: "https://reactiontimetestonline.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageContent lang="en" />;
}
