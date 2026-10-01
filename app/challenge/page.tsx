import ChallengePageContent, {
  challengeMetadata,
} from "@/components/challenge/ChallengePageContent";
export const metadata = challengeMetadata("en");
export default function ChallengePage() {
  return <ChallengePageContent lang="en" />;
}
