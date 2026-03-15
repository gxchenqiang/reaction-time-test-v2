"use client";

import { useState, useEffect } from "react";
import { Translations } from "@/lib/translations";

interface FunFactsProps {
  t: Translations;
}

export default function FunFacts({ t }: FunFactsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % t.funFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [t.funFacts.length]);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
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
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === index ? "bg-gray-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
