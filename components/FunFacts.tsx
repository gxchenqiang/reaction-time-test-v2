"use client";

import { useState } from "react";
import { Translations } from "@/lib/translations";

interface FunFactsProps {
  t: Translations;
}

export default function FunFacts({ t }: FunFactsProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
      <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">
        {t.funFactsTitle}
      </p>
      <p className="text-gray-700 text-base leading-relaxed min-h-[48px] transition-all">
        💡 {t.funFacts[index]}
      </p>
      <div className="flex justify-center gap-1.5 mt-4">
        {t.funFacts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            type="button"
            aria-label={`${t.funFactsTitle}: ${i + 1}`}
            aria-pressed={i === index}
            className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-700"
          >
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${i === index ? "bg-gray-700" : "bg-gray-400"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
