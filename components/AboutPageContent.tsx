import { Lang } from "@/lib/i18n";
import { t as getT } from "@/lib/translations";
import Header from "./Header";
import Footer from "./Footer";

interface AboutPageContentProps {
  lang: Lang;
}

export default function AboutPageContent({ lang }: AboutPageContentProps) {
  const tr = getT(lang);

  return (
    <>
      <Header t={tr} lang={lang} currentPath="/about" />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-black text-gray-900 mb-6">{tr.aboutTitle}</h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6 text-gray-600 leading-relaxed">
          <p>{tr.aboutDescription}</p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p>
              We believe everyone should have access to free, accurate tools to
              measure and improve their cognitive performance. Reaction time is one
              of the most fundamental measures of neural processing speed, and we
              want to make it fun and accessible for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Measure</h2>
            <p>
              Our test uses{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                performance.now()
              </code>{" "}
              — a high-resolution timer built into modern browsers — to measure the
              exact time between the screen turning green and your click. This
              provides millisecond-accurate results.
            </p>
            <p className="mt-3">
              Note: Browser-based tests may have a slight overhead of ~1–10ms due
              to rendering pipelines, but this is consistent across tests and does
              not affect relative comparisons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Privacy</h2>
            <p>
              All your test data is stored locally in your browser using
              localStorage. We do not collect, store, or transmit any personal
              data to our servers. Your results stay on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Who Uses This Test?
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gamers training to improve their in-game reaction speed</li>
              <li>Athletes measuring their neural response time</li>
              <li>Researchers and students studying human cognition</li>
              <li>Curious people who want to know how fast they are</li>
              <li>Coaches assessing athlete readiness</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
