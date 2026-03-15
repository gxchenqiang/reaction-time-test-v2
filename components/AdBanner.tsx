"use client";

// Ad placement component - replace inner content with actual Google AdSense code
// when ready to monetize. Currently shows a placeholder.

interface AdBannerProps {
  slot: "top" | "bottom" | "sidebar";
  className?: string;
}

const AD_SIZES: Record<AdBannerProps["slot"], { label: string; height: string }> = {
  top: { label: "728×90 Leaderboard", height: "h-[90px]" },
  bottom: { label: "300×250 Rectangle", height: "h-[250px]" },
  sidebar: { label: "160×600 Skyscraper", height: "h-[600px]" },
};

export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  // In production, replace this div with your Google AdSense <ins> tag
  // Example:
  // <ins className="adsbygoogle" ... data-ad-slot="XXXXXXXX" />

  if (process.env.NODE_ENV === "production") {
    // Return null or actual AdSense code in production
    // For now, returns null to avoid showing placeholder on live site
    return null;
  }

  const { label, height } = AD_SIZES[slot];

  return (
    <div
      className={`w-full ${height} bg-gray-100 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center ${className}`}
      aria-label="Advertisement"
    >
      <div className="text-center">
        <p className="text-xs text-gray-400 uppercase tracking-wide">Ad</p>
        <p className="text-xs text-gray-300 mt-0.5">{label}</p>
      </div>
    </div>
  );
}
