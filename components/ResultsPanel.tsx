"use client";

import { useRef } from "react";
import { TestRound } from "@/lib/stats";
import { Translations } from "@/lib/translations";
import { Lang } from "@/lib/i18n";

interface ResultsPanelProps {
  t: Translations;
  lang: Lang;
  rounds: TestRound[];
  avg: number;
  best: number;
  percentile: number;
  categoryLabel: string;
  categoryDesc: string;
  onPlayAgain: () => void;
}

const SITE_URL = "https://reactiontimetestonline.com";

function drawResultsCard(
  canvas: HTMLCanvasElement,
  {
    avg,
    best,
    percentile,
    categoryLabel,
    rounds,
    msLabel,
  }: {
    avg: number;
    best: number;
    percentile: number;
    categoryLabel: string;
    rounds: TestRound[];
    msLabel: string;
  }
) {
  const W = 600;
  const H = 420;
  canvas.width = W * 2;
  canvas.height = H * 2;
  canvas.style.width = `${W}px`;
  canvas.style.height = `${H}px`;

  const ctx = canvas.getContext("2d")!;
  ctx.scale(2, 2);

  // Background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);

  // Top dark banner
  const bannerH = 160;
  ctx.fillStyle = "#111827";
  ctx.beginPath();
  ctx.roundRect(0, 0, W, bannerH, [16, 16, 0, 0]);
  ctx.fill();

  // Banner: "YOUR TIME" label
  ctx.fillStyle = "#9ca3af";
  ctx.font = "bold 11px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("YOUR TIME", W / 2, 28);

  // Banner: big time number
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 72px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(String(avg), W / 2 - 20, 100);

  // Banner: "ms" suffix
  ctx.fillStyle = "#9ca3af";
  ctx.font = "500 24px Inter, system-ui, sans-serif";
  // measure avg text to position ms correctly
  ctx.textAlign = "left";
  const avgWidth = (() => {
    ctx.font = "bold 72px Inter, system-ui, sans-serif";
    return ctx.measureText(String(avg)).width;
  })();
  ctx.font = "500 24px Inter, system-ui, sans-serif";
  ctx.fillText(msLabel, W / 2 - 20 + avgWidth / 2 + 6, 100);

  // Banner: category label
  ctx.fillStyle = "#4ade80";
  ctx.font = "bold 16px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(categoryLabel, W / 2, 130);

  // Stats row divider
  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, bannerH);
  ctx.lineTo(W, bannerH);
  ctx.stroke();

  // BEST & AVERAGE stats
  const statsY = bannerH;
  const statsH = 80;

  // Divider between Best and Average
  ctx.strokeStyle = "#f3f4f6";
  ctx.beginPath();
  ctx.moveTo(W / 2, statsY + 12);
  ctx.lineTo(W / 2, statsY + statsH - 12);
  ctx.stroke();

  // BEST
  ctx.fillStyle = "#9ca3af";
  ctx.font = "bold 10px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("BEST", W / 4, statsY + 24);
  ctx.fillStyle = "#1f2937";
  ctx.font = "bold 30px Inter, system-ui, sans-serif";
  ctx.fillText(String(best), W / 4, statsY + 54);
  ctx.fillStyle = "#9ca3af";
  ctx.font = "12px Inter, system-ui, sans-serif";
  ctx.fillText(msLabel, W / 4, statsY + 70);

  // AVERAGE
  ctx.fillStyle = "#9ca3af";
  ctx.font = "bold 10px Inter, system-ui, sans-serif";
  ctx.fillText("AVERAGE", (3 * W) / 4, statsY + 24);
  ctx.fillStyle = "#1f2937";
  ctx.font = "bold 30px Inter, system-ui, sans-serif";
  ctx.fillText(String(avg), (3 * W) / 4, statsY + 54);
  ctx.fillStyle = "#9ca3af";
  ctx.font = "12px Inter, system-ui, sans-serif";
  ctx.fillText(msLabel, (3 * W) / 4, statsY + 70);

  // Percentile bar
  const barY = bannerH + statsH + 16;
  const barX = 24;
  const barW = W - 48;
  const barH2 = 10;
  const pct = Math.min(percentile, 99);

  ctx.fillStyle = "#f3f4f6";
  ctx.beginPath();
  ctx.roundRect(barX, barY + 24, barW, barH2, 5);
  ctx.fill();

  ctx.fillStyle = "#22c55e";
  ctx.beginPath();
  ctx.roundRect(barX, barY + 24, (barW * pct) / 100, barH2, 5);
  ctx.fill();

  ctx.fillStyle = "#374151";
  ctx.font = "bold 12px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`faster than ${percentile}% of people`, W / 2, barY + 18);

  ctx.fillStyle = "#9ca3af";
  ctx.font = "11px Inter, system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("0%", barX, barY + 50);
  ctx.textAlign = "right";
  ctx.fillText("100%", barX + barW, barY + 50);

  // Round breakdown
  const roundsY = barY + 60;
  const slotW = (W - 48 - (rounds.length - 1) * 8) / rounds.length;

  ctx.fillStyle = "#9ca3af";
  ctx.font = "bold 10px Inter, system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("ROUND BREAKDOWN", 24, roundsY);

  rounds.forEach((r, i) => {
    const rx = 24 + i * (slotW + 8);
    const ry = roundsY + 10;

    ctx.fillStyle = "#f9fafb";
    ctx.beginPath();
    ctx.roundRect(rx, ry, slotW, 56, 8);
    ctx.fill();

    ctx.fillStyle = "#9ca3af";
    ctx.font = "10px Inter, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`#${i + 1}`, rx + slotW / 2, ry + 16);

    ctx.fillStyle = "#1f2937";
    ctx.font = "bold 16px Inter, system-ui, sans-serif";
    ctx.fillText(String(r.time), rx + slotW / 2, ry + 35);

    ctx.fillStyle = "#9ca3af";
    ctx.font = "10px Inter, system-ui, sans-serif";
    ctx.fillText(msLabel, rx + slotW / 2, ry + 50);
  });

  // Bottom watermark
  ctx.fillStyle = "#d1d5db";
  ctx.font = "11px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(SITE_URL, W / 2, H - 8);
}

export default function ResultsPanel({
  t,
  rounds,
  avg,
  best,
  percentile,
  categoryLabel,
  categoryDesc,
  onPlayAgain,
}: ResultsPanelProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTwitterShare = () => {
    const tweetText = t.shareText.replace("{time}", String(avg));
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(SITE_URL)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const handleSaveImage = () => {
    const canvas = document.createElement("canvas");
    drawResultsCard(canvas, {
      avg,
      best,
      percentile,
      categoryLabel,
      rounds,
      msLabel: t.ms,
    });
    const link = document.createElement("a");
    link.download = `reaction-time-${avg}ms.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const percentileBar = Math.min(percentile, 99);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden" ref={cardRef}>
      {/* Top banner */}
      <div className="bg-gray-900 text-white p-6 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">
          {t.yourTime}
        </p>
        <div className="text-7xl font-black mb-1">
          {avg}
          <span className="text-3xl font-medium text-gray-400 ml-1">{t.ms}</span>
        </div>
        <p className="text-lg font-semibold text-green-400">{categoryLabel}</p>
        <p className="text-sm text-gray-400 mt-1">{categoryDesc}</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100">
        <div className="p-5 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
            {t.best}
          </p>
          <p className="text-3xl font-bold text-gray-800">{best}</p>
          <p className="text-xs text-gray-400">{t.ms}</p>
        </div>
        <div className="p-5 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
            {t.average}
          </p>
          <p className="text-3xl font-bold text-gray-800">{avg}</p>
          <p className="text-xs text-gray-400">{t.ms}</p>
        </div>
      </div>

      {/* Percentile */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>0%</span>
          <span className="font-semibold text-gray-800">
            {t.percentileText.replace("{pct}", String(percentile))}
          </span>
          <span>100%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-1000"
            style={{ width: `${percentileBar}%` }}
          />
        </div>
      </div>

      {/* Round breakdown */}
      <div className="p-6 border-b border-gray-100">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
          {t.round} breakdown
        </p>
        <div className="flex gap-2 flex-wrap">
          {rounds.map((r, i) => (
            <div
              key={i}
              className="flex-1 min-w-[60px] bg-gray-50 rounded-xl p-3 text-center"
            >
              <p className="text-xs text-gray-400">#{i + 1}</p>
              <p className="font-bold text-gray-800">{r.time}</p>
              <p className="text-xs text-gray-400">{t.ms}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="p-6 flex flex-col gap-3">
        <div className="flex gap-3">
          <button
            onClick={onPlayAgain}
            className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
          >
            {t.playAgain}
          </button>
          <button
            onClick={handleTwitterShare}
            className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-4 h-4 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {t.shareOnTwitter}
          </button>
        </div>
        <button
          onClick={handleSaveImage}
          className="w-full border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
            />
          </svg>
          {t.saveImage}
        </button>
      </div>
    </div>
  );
}
