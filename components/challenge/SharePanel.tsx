"use client";
import { useEffect, useState } from "react";
import { Payload } from "@/lib/challenge/rules";
import { challengeUrl } from "@/lib/challenge/codec";
import { copyLink, nativeShare, shareText } from "@/lib/challenge/sharing";
import { trackEvent } from "@/lib/challenge/analytics";
import { c } from "@/lib/challenge/strings";
export default function SharePanel({
  payload,
  initialStatus = "",
}: {
  payload: Payload;
  initialStatus?: string;
}) {
  const [status, setStatus] = useState("");
  const [native, setNative] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(challengeUrl(payload, location.origin));
    setNative(typeof navigator.share === "function");
    setStatus(initialStatus);
  }, [payload, initialStatus]);
  const fields = { mode: payload.mode, rulesVersion: 1 as const };
  return (
    <section
      className="rounded-xl border border-gray-200 bg-white p-4 space-y-3"
      aria-label={c.share}
    >
      <p className="text-sm break-words">{shareText(payload)}</p>
      <div className="flex flex-wrap gap-2">
        <button
          className="challenge-primary"
          disabled={!url}
          onClick={async () => {
            const result = await copyLink(url);
            setStatus(c[result]);
            if (result === "copied")
              trackEvent(
                payload.kind === "result"
                  ? "result_link_copied"
                  : "challenge_link_copied",
                fields,
              );
          }}
        >
          {c.copy}
        </button>
        {native && (
          <button
            className="challenge-secondary"
            onClick={async () => {
              trackEvent("share_attempt", fields);
              const result = await nativeShare(url, payload);
              if (result === "cancelled") {
                setStatus("");
                trackEvent("share_cancelled", fields);
              } else {
                setStatus(c[result]);
                if (result === "shareResolved")
                  trackEvent("share_resolved", fields);
              }
            }}
          >
            {c.share}
          </button>
        )}
      </div>
      <label className="block text-xs text-gray-500">
        {c.link}
        <textarea
          readOnly
          value={url}
          onFocus={(e) => e.currentTarget.select()}
          className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm break-all"
          rows={3}
        />
      </label>
      <p role="status" className="text-sm">
        {status}
      </p>
      <p className="text-xs text-gray-500">{c.shareHint}</p>
    </section>
  );
}
