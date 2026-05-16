"use client"

// ─── Next.js Portfolio Homepage ───────────────────────────────────────────────
// File location in your Next.js project: app/page.tsx
// Replace each task URL with your actual Streamlit app URLs once deployed.

const TASKS = [
  {
    id: "01", title: "Tool-Calling Agent",
    desc: "Function calling, JSON responses & real-time tool execution with robust error handling.",
    level: "Beginner", url: "https://huzaifa206-nexe-agent-internship-task1task1-zo9sdh.streamlit.app/",
    tags: ["tools", "JSON", "errors"],
  },
  {
    id: "02", title: "AI Calculator Agent",
    desc: "Math operations with persistent session memory and structured output formatting.",
    level: "Beginner", url: "https://huzaifa206-nexe-agent-internship-task2task2-gpzu29.streamlit.app/",
    tags: ["math", "memory", "output"],
  },
  {
    id: "03", title: "Multi-Tool Agent",
    desc: "Autonomous web search, database persistence, and automated email dispatch.",
    level: "Intermediate", url: "https://huzaifa206-nexe-agent-internship-task3task3-yzfad7.streamlit.app/",
    tags: ["search", "database", "email"],
  },
  {
    id: "04", title: "RAG Assistant",
    desc: "Document ingestion, vector store retrieval and context-aware AI answers.",
    level: "Intermediate", url: "https://huzaifa206-nexe-agent-internship-task4task4-ln04gp.streamlit.app/",
    tags: ["RAG", "vectors", "docs"],
  },
  {
    id: "05", title: "Business Agent",
    desc: "Multi-step autonomous reasoning, task planning pipeline and execution logs.",
    level: "Advanced", url: "https://huzaifa206-nexe-agent-internship-task5task5-glbviu.streamlit.app/",
    tags: ["reasoning", "planning", "logs"],
  },
  {
    id: "06", title: "Multi-Agent System",
    desc: "Orchestrated agent network with communication layer and task delegation protocol.",
    level: "Advanced", url: "https://huzaifa206-nexe-agent-internship-task6task6-d89bfb.streamlit.app/",
    tags: ["agents", "comms", "delegation"],
  },
]

const levelStyle: Record<string, { color: string; bg: string; border: string }> = {
  Beginner:     { color: "#4ade80", bg: "rgba(74,222,128,0.07)",  border: "rgba(74,222,128,0.18)" },
  Intermediate: { color: "#fbbf24", bg: "rgba(251,191,36,0.07)",  border: "rgba(251,191,36,0.18)" },
  Advanced:     { color: "#f87171", bg: "rgba(248,113,113,0.07)", border: "rgba(248,113,113,0.18)" },
}

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        html { background: #09090b; }

        body {
          background: #09090b;
          color: #fafafa;
          font-family: 'Syne', sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .wrapper {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .bg-grid {
          position: fixed; inset: 0;
          background-image: radial-gradient(circle, #1e1e22 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.55;
          pointer-events: none;
          z-index: 0;
        }

        .bg-glow-top {
          position: fixed;
          top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 700px;
          background: radial-gradient(ellipse, rgba(34,211,238,0.055) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .bg-glow-bottom {
          position: fixed;
          bottom: -300px; right: -100px;
          width: 700px; height: 700px;
          background: radial-gradient(ellipse, rgba(139,92,246,0.04) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        .content {
          position: relative; z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ── Nav ── */
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          border-bottom: 1px solid #1a1a1f;
        }
        .nav-logo {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px; font-weight: 500;
          color: #fafafa; letter-spacing: 0.06em;
        }
        .nav-logo span { color: #22d3ee; }
        .nav-links { display: flex; gap: 6px; }
        .nav-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 8px;
          font-size: 11px; font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.04em;
          color: #71717a; text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.18s ease;
        }
        .nav-link:hover {
          color: #fafafa; background: #111115;
          border-color: #1f1f27;
        }
        .nav-link svg { flex-shrink: 0; }

        /* ── Hero ── */
        .hero { padding: 96px 0 72px; }

        .status-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px;
          background: rgba(74,222,128,0.055);
          border: 1px solid rgba(74,222,128,0.14);
          border-radius: 100px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: #4ade80;
          margin-bottom: 40px;
        }
        .pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px rgba(74,222,128,0.8);
          animation: blink 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.35} }

        .hero-name {
          font-size: clamp(56px, 7.5vw, 92px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.035em;
          margin-bottom: 28px;
          background: linear-gradient(145deg, #ffffff 0%, #9f9fa8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px; font-weight: 400;
          color: #52525b; margin-bottom: 8px;
          letter-spacing: 0.03em;
        }
        .hero-role .accent { color: #22d3ee; }

        .hero-desc {
          font-size: 17px; font-weight: 400;
          color: #71717a; line-height: 1.75;
          max-width: 500px; margin-bottom: 40px;
        }

        .hero-cta { display: flex; gap: 10px; flex-wrap: wrap; }

        .btn-white {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 20px; border-radius: 8px;
          background: #fafafa; color: #09090b;
          font-size: 12px; font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          text-decoration: none; letter-spacing: 0.03em;
          transition: all 0.18s ease;
          border: 1px solid #fafafa;
        }
        .btn-white:hover { background: #e4e4e7; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 20px; border-radius: 8px;
          background: transparent; color: #71717a;
          font-size: 12px; font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
          text-decoration: none; letter-spacing: 0.03em;
          border: 1px solid #1f1f27;
          transition: all 0.18s ease;
        }
        .btn-ghost:hover { color: #fafafa; border-color: #3f3f46; transform: translateY(-1px); }

        /* ── Section header ── */
        .section-header {
          display: flex; align-items: center; gap: 16px;
          padding-top: 56px; margin-bottom: 28px;
        }
        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em;
          color: #3f3f46; white-space: nowrap;
          text-transform: uppercase;
        }
        .section-line { height: 1px; background: #1a1a1f; flex: 1; }

        /* ── Task grid ── */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 80px;
        }
        @media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  { .grid { grid-template-columns: 1fr; } }

        .card {
          background: #0c0c0f;
          border: 1px solid #18181d;
          border-radius: 12px;
          padding: 22px;
          text-decoration: none;
          display: flex; flex-direction: column;
          gap: 0;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .card:hover {
          border-color: #2a2a32;
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.05);
        }
        .card-shimmer {
          position: absolute; inset: 0;
          background: radial-gradient(600px at 50% 0%, rgba(34,211,238,0.035), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
          pointer-events: none;
        }
        .card:hover .card-shimmer { opacity: 1; }

        .card-top {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 16px;
        }
        .card-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: #2a2a32;
        }
        .badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; font-weight: 500;
          padding: 3px 10px; border-radius: 100px;
          letter-spacing: 0.06em;
        }
        .card-title {
          font-size: 15px; font-weight: 700;
          color: #f4f4f5; letter-spacing: -0.01em;
          line-height: 1.3; margin-bottom: 10px;
        }
        .card-desc {
          font-size: 12px; color: #3f3f46;
          line-height: 1.65; flex: 1;
          margin-bottom: 20px;
        }
        .card-footer {
          display: flex; align-items: center;
          justify-content: space-between;
        }
        .card-tags { display: flex; gap: 5px; flex-wrap: wrap; }
        .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; padding: 3px 8px;
          background: #111115; border: 1px solid #1a1a1f;
          border-radius: 4px; color: #3f3f46;
          letter-spacing: 0.04em;
        }
        .card-arrow {
          font-size: 15px; color: #2a2a32;
          transition: color 0.2s ease, transform 0.2s ease;
          line-height: 1;
        }
        .card:hover .card-arrow { color: #22d3ee; transform: translate(2px, -2px); }

        /* ── Stats row ── */
        .stats {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 14px; margin-bottom: 60px;
        }
        @media (max-width: 640px) { .stats { grid-template-columns: 1fr; } }
        .stat-card {
          background: #0c0c0f;
          border: 1px solid #18181d;
          border-radius: 10px;
          padding: 20px 24px;
        }
        .stat-num {
          font-size: 28px; font-weight: 800;
          color: #fafafa; letter-spacing: -0.03em;
          line-height: 1; margin-bottom: 6px;
        }
        .stat-num span { color: #22d3ee; }
        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: #3f3f46;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── Footer ── */
        footer {
          border-top: 1px solid #18181d;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #2a2a32;
          letter-spacing: 0.04em;
        }
        .footer-text a {
          color: #3f3f46; text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-text a:hover { color: #22d3ee; }

        @media (max-width: 640px) {
          .nav-link span { display: none; }
          .hero { padding: 64px 0 48px; }
        }
      `}</style>

      <div className="wrapper">
        <div className="bg-grid" />
        <div className="bg-glow-top" />
        <div className="bg-glow-bottom" />

        <div className="content">
          {/* Nav */}
          <nav>
            <span className="nav-logo">HA<span>_</span></span>
            <div className="nav-links">
              <a href="https://github.com/Huzaifa206" target="_blank" rel="noreferrer" className="nav-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/huzaifaahmedsiddiqui48/" target="_blank" rel="noreferrer" className="nav-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:huzaifaasiddiqui@gmail.com" className="nav-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>Email</span>
              </a>
            </div>
          </nav>

          {/* Hero */}
          <section className="hero">
            <div className="status-badge">
              <span className="pulse" />
              INTERNSHIP ACTIVE · NEXE-AGENT · 2025
            </div>

            <h1 className="hero-name">
              Huzaifa Ahmed<br />Siddiqui
            </h1>

            <p className="hero-role">
              AI Student &nbsp;·&nbsp; Agentic AI Developer Intern{" "}
              <span className="accent">@ Nexe-Agent</span>
            </p>

            <p className="hero-desc" style={{ marginTop: "16px" }}>
              Building autonomous AI agents, RAG systems, and multi-agent architectures.
              Exploring the frontier of agentic AI development.
            </p>

            <div className="hero-cta">
              <a href="https://github.com/Huzaifa206" target="_blank" rel="noreferrer" className="btn-white">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                View GitHub
              </a>
              <a href="https://www.linkedin.com/in/huzaifaahmedsiddiqui48/" target="_blank" rel="noreferrer" className="btn-ghost">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="mailto:huzaifaasiddiqui@gmail.com" className="btn-ghost">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email me
              </a>
            </div>
          </section>

          {/* Stats */}
          <div className="stats">
            <div className="stat-card">
              <div className="stat-num">6<span>.</span></div>
              <div className="stat-label">Tasks Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">3<span>.</span></div>
              <div className="stat-label">Difficulty Levels</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">1<span>×</span></div>
              <div className="stat-label">Internship · Nexe-Agent</div>
            </div>
          </div>

          {/* Tasks */}
          <div className="section-header">
            <span className="section-label">Internship Tasks</span>
            <div className="section-line" />
            <span className="section-label">Nexe-Agent · 2025</span>
          </div>

          <div className="grid">
            {TASKS.map(task => {
              const ls = levelStyle[task.level]
              return (
                <a key={task.id} href={task.url} target="_blank" rel="noreferrer" className="card">
                  <div className="card-shimmer" />
                  <div className="card-top">
                    <span className="card-num">TASK_{task.id}</span>
                    <span className="badge" style={{ color: ls.color, background: ls.bg, border: `1px solid ${ls.border}` }}>
                      {task.level}
                    </span>
                  </div>
                  <div className="card-title">{task.title}</div>
                  <div className="card-desc">{task.desc}</div>
                  <div className="card-footer">
                    <div className="card-tags">
                      {task.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <span className="card-arrow">↗</span>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Footer */}
          <footer>
            <span className="footer-text">© 2025 Huzaifa Ahmed Siddiqui</span>
            <span className="footer-text">
              <a href="https://github.com/Huzaifa206" target="_blank" rel="noreferrer">GitHub</a>
              {" · "}
              <a href="https://www.linkedin.com/in/huzaifaahmedsiddiqui48/" target="_blank" rel="noreferrer">LinkedIn</a>
              {" · "}
              <a href="mailto:huzaifaasiddiqui@gmail.com">Email</a>
            </span>
          </footer>
        </div>
      </div>
    </>
  )
}