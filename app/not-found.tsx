export const runtime = 'edge';

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found | Reaction Time Test",
  description: "The page you're looking for doesn't exist. Return to Reaction Time Test Online.",
};

export default function NotFound() {
  return (
    <>
      <style>{`
        :root {
          --bg-primary: #f9fafb;
          --bg-card: #ffffff;
          --text-primary: #111827;
          --text-secondary: #6b7280;
          --text-muted: #9ca3af;
          --border-color: #e5e7eb;
          --accent: #22c55e;
          --accent-hover: #16a34a;
          --accent-light: #dcfce7;
          --btn-shadow: 0 4px 14px rgba(34, 197, 94, 0.35);
          --btn-shadow-hover: 0 6px 20px rgba(34, 197, 94, 0.50);
          --divider-color: #e5e7eb;
          --badge-bg: #f3f4f6;
          --badge-text: #374151;
          --glow-color: rgba(34, 197, 94, 0.08);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --bg-primary: #0a0a0a;
            --bg-card: #111111;
            --text-primary: #f9fafb;
            --text-secondary: #9ca3af;
            --text-muted: #6b7280;
            --border-color: #1f2937;
            --accent: #4ade80;
            --accent-hover: #22c55e;
            --accent-light: #052e16;
            --btn-shadow: 0 4px 14px rgba(74, 222, 128, 0.25);
            --btn-shadow-hover: 0 6px 20px rgba(74, 222, 128, 0.40);
            --divider-color: #1f2937;
            --badge-bg: #1f2937;
            --badge-text: #d1d5db;
            --glow-color: rgba(74, 222, 128, 0.06);
          }
        }

        .nf-page {
          min-height: 100vh;
          background-color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          font-family: Inter, system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          transition: background-color 0.3s ease;
        }

        .nf-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 20px 60px rgba(0,0,0,0.06);
          width: 100%;
          max-width: 480px;
          overflow: hidden;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        /* Brand section */
        .nf-brand {
          padding: 2.5rem 2.5rem 2rem;
          background: radial-gradient(ellipse at top left, var(--glow-color) 0%, transparent 70%);
          text-align: center;
        }

        .nf-logo-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          margin-bottom: 1.25rem;
        }

        .nf-logo-icon {
          width: 2.75rem;
          height: 2.75rem;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border-radius: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.375rem;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.30);
          flex-shrink: 0;
        }

        .nf-logo-text {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--text-primary);
          letter-spacing: -0.025em;
          transition: color 0.3s ease;
        }

        .nf-tagline {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 300px;
          margin: 0 auto;
          transition: color 0.3s ease;
        }

        .nf-badges {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.125rem;
          flex-wrap: wrap;
        }

        .nf-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.6875rem;
          font-weight: 500;
          color: var(--badge-text);
          background-color: var(--badge-bg);
          padding: 0.25rem 0.625rem;
          border-radius: 999px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Divider */
        .nf-divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            var(--divider-color) 20%,
            var(--divider-color) 80%,
            transparent
          );
          transition: background 0.3s ease;
        }

        /* Error section */
        .nf-error {
          padding: 2.25rem 2.5rem 2.5rem;
          text-align: center;
        }

        .nf-code-wrap {
          position: relative;
          margin-bottom: 1.25rem;
          display: inline-block;
        }

        .nf-code {
          font-size: clamp(4.5rem, 18vw, 7rem);
          font-weight: 900;
          letter-spacing: -0.06em;
          line-height: 1;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
          display: block;
        }

        .nf-code-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 2.5rem;
          height: 2.5rem;
          background: var(--accent);
          border-radius: 50%;
          opacity: 0.12;
          filter: blur(12px);
          pointer-events: none;
        }

        .nf-error-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .nf-error-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          transition: color 0.3s ease;
        }

        /* Buttons */
        .nf-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, var(--accent), var(--accent-hover));
          color: #ffffff;
          font-size: 0.9375rem;
          font-weight: 600;
          border-radius: 0.875rem;
          text-decoration: none;
          box-shadow: var(--btn-shadow);
          transition: box-shadow 0.2s ease, transform 0.2s ease, filter 0.2s ease;
          cursor: pointer;
        }

        .nf-btn-primary:hover {
          box-shadow: var(--btn-shadow-hover);
          transform: translateY(-1px);
          filter: brightness(1.05);
        }

        .nf-btn-primary:active {
          transform: translateY(0);
          filter: brightness(0.98);
        }

        .nf-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
          padding: 0.6875rem 1.5rem;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 0.875rem;
          border: 1px solid var(--border-color);
          text-decoration: none;
          transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          cursor: pointer;
        }

        .nf-btn-secondary:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
          background-color: var(--badge-bg);
        }

        /* Responsive */
        @media (max-width: 400px) {
          .nf-brand { padding: 2rem 1.75rem 1.75rem; }
          .nf-error { padding: 1.75rem 1.75rem 2rem; }
          .nf-card { border-radius: 1.25rem; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nf-card {
          animation: fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      <div className="nf-page">
        <div className="nf-card">

          {/* ── 品牌区域 ── */}
          <div className="nf-brand">
            <div className="nf-logo-wrap">
              <div className="nf-logo-icon">R</div>
              <span className="nf-logo-text">Reaction Time Test</span>
            </div>

            <p className="nf-tagline">
              Test your reaction speed online — free, instant, and accurate. Challenge yourself and see how fast you really are.
            </p>

            <div className="nf-badges">
              <span className="nf-badge">🌐 Free Online</span>
              <span className="nf-badge">📊 Track Results</span>
              <span className="nf-badge">🏆 Global Ranking</span>
            </div>
          </div>

          {/* ── 分隔线 ── */}
          <div className="nf-divider" />

          {/* ── 错误区域 ── */}
          <div className="nf-error">
            <div className="nf-code-wrap">
              <span className="nf-code">404</span>
              <div className="nf-code-dot" />
            </div>

            <h1 className="nf-error-title">Page Not Found</h1>
            <p className="nf-error-desc">
              Oops! This page doesn&apos;t exist or has been moved.<br />
              Let&apos;s get you back on track.
            </p>

            <div className="nf-actions">
              <Link href="/" className="nf-btn-primary">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-7-7v14" />
                </svg>
                Go Back Home
              </Link>

              <Link href="/blog" className="nf-btn-secondary">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Browse Our Blog
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
