/* ============================================================
   Mihir — Portfolio · interactivity
   ============================================================ */

// TODO: MIHIR — set your GitHub username here; project links build from it.
const GITHUB_USER = "LeoPanthera07";

/* ---------- Data: Journey timeline ---------- */
const JOURNEY = [
  {
    year: "Aug 2023 – Mar 2025",
    cat: "Education",
    category: "education",
    title: "M.Sc. in Bioinformatics — SPPU",
    desc: "The degree said Bioinformatics; the work was data science — complex biological systems, massive genomic datasets, and the daily discipline of pulling signal from noise. Left Savitribai Phule Pune University with a research pipeline, a production open-source tool, and a conviction that the most interesting problems sit where biology, data, and software meet.",
    tags: ["Bioinformatics", "Data Science", "SPPU"],
  },
  {
    year: "2023",
    cat: "Project",
    category: "project",
    title: "Nexome — Multi-Agent Bio Research Platform",
    desc: "Built Nexome — specialized agents query NCBI, UniProt, and PDB from a single natural-language prompt, and an LLM-as-Judge cross-validates and reconciles their outputs into one source-attributed report. Bioinformatics met agentic AI.",
    tags: ["Multi-Agent", "LLM-as-Judge", "NCBI", "UniProt", "Bioinformatics"],
  },
  {
    year: "2023",
    cat: "Project",
    category: "project",
    title: "The Pivot Deepens — NyayaSetu & CodeVista",
    desc: "Doubling down on AI systems engineering. NyayaSetu — a multilingual legal RAG assistant over Indian statutes and judgments with hybrid retrieval and source-attributed answers. CodeVista — a multi-pass LLM code-review agent with a dedicated agent per review dimension, each emitting Pydantic-validated structured output.",
    tags: ["RAG", "LLM Agents", "LlamaIndex", "FastAPI", "Structured Output"],
  },
  {
    year: "2023–2024",
    cat: "Project",
    category: "project",
    title: "Going Deeper — ManasGriha, PDFer, Whisper",
    desc: "Three systems in quick succession. ManasGriha: a memory-aware LLM companion with ChromaDB memory across turns, streaming, and a crisis-detection layer that escalates on distress. PDFer: intelligent multi-format document Q&A with grounded, section-cited answers. Whisper: a secure LAN chat app with TweetNaCl ECDH end-to-end encryption.",
    tags: ["LangChain", "ChromaDB", "LlamaIndex", "TweetNaCl", "Streaming"],
  },
  {
    year: "2024–2025",
    cat: "Project + Fellowship",
    category: "project",
    title: "PG Research Fellowship & Binding Free Energy Estimator",
    desc: "Awarded a PG Research Fellowship during the M.Sc. Channeled it into building BFEER — an open-source computational tool for drug discovery workflows: protein structure analysis with GROMACS and VMD, PDB parsing, and binding energy computation. Built for scientists.",
    impact: "100+ scientists globally adopted BFEER",
    tags: ["Drug Discovery", "Open Source", "Python", "GROMACS"],
  },
  {
    year: "May 2024 – Jun 2026",
    cat: "Work",
    category: "work",
    title: "Data Intern — Citadel Precision Medicine",
    desc: "Analyzed TCGA breast cancer transcriptomics — building reproducible Python pipelines (pandas, NumPy) over high-dimensional clinical data: 1,000+ patients, 22,540 features each. Validation, normalization, anomaly handling, and feature engineering; surfaced differentially expressed gene signals and validated them against published clinical studies, delivering model-ready features downstream. Remote, Pune.",
    tags: ["Precision Medicine", "TCGA", "Transcriptomics", "RNA-seq"],
  },
  {
    year: "2024–2025",
    cat: "Project",
    category: "project",
    title: "MLOps in Practice — CIP & MultiCrewMCP",
    desc: "CIP (Customer Intelligence Platform): a production ML platform with MLflow tracking, XGBoost champion/challenger deployment, FAISS-backed RAG over CFPB complaints, and Evidently drift monitoring with CI quality gates. Then MultiCrewMCP: a CrewAI + MCP multi-agent system with prompt-injection-resistant tests.",
    tags: ["MLflow", "XGBoost", "FAISS", "Evidently", "CrewAI", "MCP"],
  },
  {
    year: "Jun – Dec 2025",
    cat: "Leadership",
    category: "work",
    title: "Leadership Trainee — YTK Program, BAPS",
    desc: "Selected for the YTK leadership program — six months of structured training in communication, conflict resolution, accountability, and leading small teams toward shared goals. The human side of building: aligning people, not just systems.",
    tags: ["Leadership", "Teamwork", "Communication"],
  },
  {
    year: "Feb 2026 – Present",
    cat: "Education",
    category: "education",
    title: "PG Diploma in Generative & Agentic AI — IIT Gandhinagar",
    desc: "Joined IIT Gandhinagar's PG Diploma in Generative AI and Agentic AI. The decision was deliberate: formalize the depth, work with world-class faculty, build at the frontier. Not a career break — an acceleration.",
    tags: ["IIT Gandhinagar", "GenAI", "Agentic AI"],
  },
  {
    year: "May 2026",
    cat: "Achievement",
    category: "achievement",
    title: "Won HackRush '26 — IIT Gandhinagar",
    desc: "Led a cross-functional team to 1st place at HackRush '26, IIT Gandhinagar's flagship hackathon — architecting and shipping a working AI-driven solution under tight time constraints.",
    tags: ["Hackathon", "IIT Gandhinagar", "Winner"],
  },
  {
    year: "2026",
    cat: "Project",
    category: "project",
    title: "Solace AI — The Capstone",
    desc: "A 7-stage LangGraph multi-agent pipeline for clinical biomedical research: Researcher → Retriever → Graph Builder → Corroborator → Fact Checker → Synthesizer → Editor. Hybrid GraphRAG over Hetionet/PrimeKG with hallucination containment at the architecture level. RAGAS + LangSmith for evaluation.",
    impact: "Capstone — IIT Gandhinagar PG Diploma",
    tags: ["LangGraph", "GraphRAG", "Multi-Agent", "Biomedical"],
  },
  {
    year: "2026 – Present",
    cat: "What's Next",
    category: "next",
    title: "AI Engineer · The Next Chapter",
    desc: "Targeting AI Engineer and Agentic AI Engineer roles at companies building serious AI infrastructure. Simultaneously preparing for the UPSC Civil Services Examination, targeting the Indian Foreign Service — because navigating complex systems isn't limited to software.",
    tags: ["AI Engineering", "LLMOps", "UPSC", "IFS", "Open to Work"],
  },
];

/* ---------- Data: Projects ---------- */
const FEATURED = {
  name: "Solace AI",
  repo: "Solace---Research-Assistant-",
  live: "https://solace-5v0f.onrender.com/",
  badge: "Featured · IIT Gandhinagar Capstone",
  desc: "A production 7-stage LangGraph pipeline — Researcher → Retriever → Graph Builder → Corroborator → Fact Checker → Synthesizer → Editor — that turns clinical questions into structured, citation-backed evidence. On-demand PubMed ingestion feeds GraphRAG over gene–protein–nucleotide knowledge graphs (Hetionet/PrimeKG); a dedicated Corroborator stage enforces hallucination containment, with per-agent LangSmith observability and PubMedQA as the regression golden set. Source citation and output governance at every stage.",
  tags: ["LangGraph", "GraphRAG", "FastAPI", "LangSmith", "PubMedQA", "Multi-Agent", "Biomedical"],
};

const PROJECTS = [
  {
    name: "NyayaSetu",
    repo: "NyayaSetu",
    cat: "AI / ML",
    desc: "Multilingual legal RAG assistant over Indian statutes, judgments, and statutory text. Hybrid retrieval (dense vectors + keyword) with LlamaIndex chunking tuned per document type, returning grounded, source-attributed answers behind an RBAC/JWT-secured, Dockerized FastAPI backend.",
    tags: ["Hybrid RAG", "LangChain", "LlamaIndex", "ChromaDB", "FastAPI", "RBAC"],
  },
  {
    name: "PDFer",
    repo: "PDFer",
    cat: "AI / ML",
    desc: "Intelligent document processing — ingest PDFs, Word, and text, then ask anything. LlamaIndex chunking with metadata enrichment and hybrid retrieval; every answer is grounded to the exact sections it came from, cutting hallucination. Async FastAPI, FAISS/ChromaDB, Dockerized.",
    tags: ["RAG", "LlamaIndex", "FAISS", "ChromaDB", "Hybrid Search", "FastAPI"],
  },
  {
    name: "CIP — Customer Intelligence Platform",
    repo: "customer-intelligence-platform",
    cat: "MLOps",
    desc: "A full MLOps lifecycle in one system: dual-model conversion prediction (LogisticRegression vs XGBoost) with three-store MLflow tracking, a FAISS + Sentence-Transformers RAG complaint engine (PII scrubbing, similarity refusal threshold), and Evidently drift monitoring wired to a CI quality gate that gates deployment.",
    tags: ["MLflow", "XGBoost", "FAISS", "Evidently", "CI Quality Gate", "FastAPI"],
  },
  {
    name: "MultiCrewMCP",
    repo: "MultiCrewMCP",
    cat: "Agentic AI",
    desc: "Agentic operations assistant: a CrewAI Researcher + Writer crew driving a live MCP server (search_documents, read_record, save_report) via MCPServerAdapter. Custom tool-call tracing captures input/output/duration with auto-generated run reports, plus a test suite for prompt-injection resistance and max-iteration enforcement.",
    tags: ["CrewAI", "MCP", "Multi-Agent", "Agentic Safety", "Observability", "Python"],
  },
  {
    name: "ManasGriha",
    repo: "ManasGriha",
    cat: "AI / ML",
    desc: "Memory-aware LLM companion: ChromaDB vector memory carries context across turns, so it can reference earlier disclosures and adapt tone. Real-time streaming, a crisis-detection layer that escalates on acute-distress signals, and structured output governance keeping responses within safe, appropriate bounds.",
    tags: ["LangChain", "FastAPI", "ChromaDB", "Streaming", "Output Governance"],
  },
  {
    name: "CodeVista",
    repo: "CodeVista",
    cat: "Agentic AI",
    desc: "Multi-pass LLM code-review agent: a dedicated agent node per review dimension — syntax, security, performance, readability, best practices — each emitting Pydantic-validated structured JSON, so no unstructured or hallucinated output propagates downstream. FastAPI + Docker.",
    tags: ["LangChain", "LLM Agents", "Structured Output", "Pydantic", "FastAPI", "Docker"],
  },
  {
    name: "Nexome",
    repo: "Nexome",
    cat: "Bioinformatics",
    desc: "Multi-agent bioinformatics platform with an LLM-as-Judge: specialized agents query NCBI, UniProt, and PDB from a single natural-language prompt, and a central judge cross-validates and reconciles conflicting results into one source-attributed report. New database agents plug in without touching the core (open/closed).",
    tags: ["Multi-Agent", "LLM-as-Judge", "LangChain", "NCBI API", "UniProt API", "FastAPI"],
  },
  {
    name: "Whisper",
    repo: "Whisper",
    cat: "Systems",
    desc: "Secure offline LAN chat with end-to-end encryption via TweetNaCl ECDH — no internet required, join by QR code, nothing leaves the local network.",
    tags: ["E2E Encryption", "TweetNaCl", "Socket.IO", "React", "LAN", "Security"],
  },
  {
    name: "MovieRecommender",
    repo: "MovieRecommender",
    cat: "ML / Data",
    desc: "Collaborative-filtering recommender implementing user-based, item-based, and matrix-factorization approaches over user-item interaction data — with a full preprocessing pipeline and quantitative model selection across RMSE, MAE, and Precision@K.",
    tags: ["Collaborative Filtering", "Matrix Factorization", "Scikit-learn", "pandas", "NumPy"],
  },
  {
    name: "SpamDetector",
    repo: "SpamDetector",
    cat: "ML / NLP",
    desc: "End-to-end supervised NLP pipeline: TF-IDF feature engineering, then Naive Bayes / Logistic Regression / SVM benchmarked on precision, recall, F1, and k-fold CV to select the best model — deployed as a Dockerized FastAPI endpoint at 86% test precision.",
    tags: ["NLP", "TF-IDF", "Scikit-learn", "FastAPI", "Docker"],
  },
  {
    name: "Binding Free Energy Estimator",
    repo: null, // TODO: MIHIR — no GitHub repo found; add the URL if it lives elsewhere
    cat: "Bioinformatics",
    desc: "Open-source drug-discovery tool for binding free energy estimation — adopted by 100+ scientists globally, built under a PG Research Fellowship.",
    tags: ["Drug Discovery", "GROMACS", "VMD", "Python", "Open Source"],
  },
  {
    name: "Supply Chain Automator",
    repo: "SupplyChainAutomationSolution",
    cat: "Architecture Design",
    desc: "Architecture design document for a modular supply chain automation platform — data pipeline, ML/decision engine, backend/frontend, security, and deployment, with a price-dashboard mockup.",
    tags: ["System Design", "Architecture", "Supply Chain", "Documentation"],
  },
];

/* ---------- Data: Skills ---------- */
const SKILLS = [
  { domain: "Languages", items: ["Python", "JavaScript", "Node.js", "SQL", "Bash / Shell"] },
  { domain: "AI / ML", items: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "Groq", "Ollama", "Qwen2.5", "vLLM", "RAG", "GraphRAG"] },
  { domain: "MLOps / LLMOps", items: ["MLflow", "RAGAS", "LangSmith", "Evidently", "Docker"] },
  { domain: "Backend", items: ["FastAPI", "Express.js", "Socket.IO", "Inngest", "REST APIs", "JWT", "RBAC"] },
  { domain: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Streamlit"] },
  { domain: "Databases", items: ["PostgreSQL", "MongoDB", "Neo4j", "Qdrant", "FAISS", "SQLite"] },
  { domain: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Obsidian", "Jupyter", "AWS"] },
  { domain: "Bioinformatics", items: ["GROMACS", "VMD", "AlphaFold API", "UniProt API", "PubMed API", "PDB Parsing"] },
];

const GH_ICON =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';

const LIVE_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';

const CAT_VARS = {
  education: "var(--cat-education)",
  work: "var(--cat-work)",
  project: "var(--cat-project)",
  achievement: "var(--cat-achievement)",
  next: "var(--cat-next)",
};

/* ---------- Helpers ---------- */
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// TODO: MIHIR — links point at github.com/<user>/<repo>. Confirm repo names match yours.
function repoUrl(repo) {
  return `https://github.com/${GITHUB_USER}/${repo}`;
}

function tagPills(tags, max) {
  const shown = tags.slice(0, max);
  const extra = tags.length - shown.length;
  let html = shown.map((t) => `<span class="proj-tag">${esc(t)}</span>`).join("");
  if (extra > 0) html += `<span class="proj-tag more">+${extra} more</span>`;
  return html;
}

/* ---------- Render: Journey ---------- */
function renderJourney() {
  const el = document.getElementById("timeline");
  el.innerHTML = JOURNEY.map((n) => {
    const color = CAT_VARS[n.category] || "var(--accent)";
    const impact = n.impact ? `<span class="tl-impact">${esc(n.impact)}</span>` : "";
    const tags = n.tags.map((t) => `<span class="tl-tag">${esc(t)}</span>`).join("");
    return `
      <div class="tl-node animate-on-scroll" style="--node-color:${color}">
        <div class="tl-card">
          <div class="tl-meta">
            <span class="tl-year">${esc(n.year)}</span>
            <span class="tl-cat">${esc(n.cat)}</span>
          </div>
          <h3 class="tl-title">${esc(n.title)}</h3>
          <p class="tl-desc">${esc(n.desc)}</p>
          ${impact}
          <div class="tl-tags">${tags}</div>
        </div>
      </div>`;
  }).join("");
}

/* Recurring skills demonstrated across the project set */
const PROJECT_SKILLS = [
  "LangGraph", "LangChain", "LlamaIndex", "RAG", "GraphRAG", "Multi-Agent",
  "LLM-as-Judge", "MCP", "CrewAI", "FastAPI", "MLflow", "Evidently",
  "XGBoost", "FAISS", "ChromaDB", "Pydantic", "LangSmith", "Docker",
  "E2E Encryption", "Bioinformatics",
];

/* ---------- Render: project-skills strip ---------- */
function renderProjectSkills() {
  const el = document.getElementById("proj-skills-pills");
  if (!el) return;
  el.innerHTML = PROJECT_SKILLS.map(
    (s) => `<span class="skill-pill">${esc(s)}</span>`
  ).join("");
}

/* ---------- Render: Projects ---------- */
function renderProjects() {
  document.getElementById("featured-project").innerHTML = `
    <div class="featured-card animate-on-scroll">
      <span class="featured-badge">${esc(FEATURED.badge)}</span>
      <h3>${esc(FEATURED.name)}</h3>
      <p class="proj-desc">${esc(FEATURED.desc)}</p>
      <div class="proj-tags">${FEATURED.tags.map((t) => `<span class="proj-tag">${esc(t)}</span>`).join("")}</div>
      <div class="proj-foot">
        <a class="proj-link" href="${repoUrl(FEATURED.repo)}" target="_blank" rel="noopener">${GH_ICON} View on GitHub</a>
        ${
          FEATURED.live
            ? `<a class="proj-link proj-link--live" href="${FEATURED.live}" target="_blank" rel="noopener">${LIVE_ICON} Live demo</a>`
            : ""
        }
      </div>
    </div>`;

  document.getElementById("projects-grid").innerHTML = PROJECTS.map(
    (p) => `
      <article class="proj-card animate-on-scroll">
        <div class="proj-head">
          <h3>${esc(p.name)}</h3>
          <span class="proj-cat">${esc(p.cat)}</span>
        </div>
        <p class="proj-desc">${esc(p.desc)}</p>
        <div class="proj-tags">${tagPills(p.tags, 4)}</div>
        <div class="proj-foot">
          ${
            p.repo
              ? `<a class="proj-link" href="${repoUrl(p.repo)}" target="_blank" rel="noopener">${GH_ICON} GitHub</a>`
              : `<span class="proj-link proj-link--muted">${GH_ICON} Open-source · link on request</span>`
          }
        </div>
      </article>`
  ).join("");
}

/* ---------- Render: Skills ---------- */
function renderSkills() {
  document.getElementById("skills-grid").innerHTML = SKILLS.map(
    (s) => `
      <div class="skill-domain animate-on-scroll">
        <h3>${esc(s.domain)}</h3>
        <div class="skill-pills">
          ${s.items.map((i) => `<span class="skill-pill">${esc(i)}</span>`).join("")}
        </div>
      </div>`
  ).join("");
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll(".animate-on-scroll");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const grp = entry.target.parentElement
            ? [...entry.target.parentElement.querySelectorAll(".animate-on-scroll")]
            : [];
          const idx = Math.max(0, grp.indexOf(entry.target));
          entry.target.style.transitionDelay = `${Math.min(idx, 8) * 80}ms`;
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => observer.observe(el));
}

/* ---------- Hero tagline typewriter ---------- */
function initTypewriter() {
  const el = document.getElementById("hero-tagline");
  const full = "Building Intelligent Systems · From Biology to AI · Engineer at the Edge of What's Possible";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    el.textContent = full;
    return;
  }
  let i = 0;
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.style.height = "1em";
  el.appendChild(cursor);
  const tick = () => {
    if (i <= full.length) {
      cursor.insertAdjacentText("beforebegin", full[i - 1] || "");
      i++;
      setTimeout(tick, full[i - 2] === "·" ? 220 : 26);
    } else {
      setTimeout(() => cursor.remove(), 1400);
    }
  };
  setTimeout(tick, 400);
}

/* ---------- Memoji fallback ---------- */
function initMemoji() {
  const memoji = document.getElementById("memoji-placeholder");
  if (!memoji) return;
  const fail = () => {
    if (document.querySelector(".memoji-fallback")) return;
    memoji.style.display = "none";
    const fallback = document.createElement("div");
    fallback.className = "memoji-fallback";
    fallback.textContent = "M";
    fallback.setAttribute("aria-label", "Mihir");
    memoji.parentNode.appendChild(fallback);
  };
  memoji.addEventListener("error", fail);
  // Already-broken image (cached 404) won't fire error again — check manually.
  if (memoji.complete && memoji.naturalWidth === 0) fail();
}

/* ---------- Hero entrance ---------- */
function initHeroEntrance() {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => document.body.classList.add("loaded"))
  );
}

/* ---------- Scroll progress bar + navbar shrink ---------- */
function initScrollFX() {
  const bar = document.getElementById("scroll-progress");
  const nav = document.getElementById("navbar");
  let ticking = false;
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    if (bar) bar.style.width = pct + "%";
    nav.classList.toggle("scrolled", window.scrollY > 10);
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  update();
}

/* ---------- Stat count-up ---------- */
function initCounters() {
  const nums = document.querySelectorAll(".stat-num[data-target]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return; // leave final text
  const countUp = (el) => {
    const target = Number(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || "";
    const dur = 1100;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    el.textContent = "0" + suffix;
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          countUp(e.target);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  nums.forEach((n) => io.observe(n));
}

/* ---------- Navbar: active link + mobile toggle ---------- */
function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll(".nav-link").forEach((l) =>
    l.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  let ticking = false;
  const update = () => {
    let current = sections[0] ? sections[0].id : "";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 80) current = s.id;
    });
    navLinks.forEach((l) =>
      l.classList.toggle("active", l.getAttribute("href") === `#${current}`)
    );
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  });
  update();
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderJourney();
  renderProjectSkills();
  renderProjects();
  renderSkills();
  initScrollReveal();
  initTypewriter();
  initMemoji();
  initNav();
  initHeroEntrance();
  initScrollFX();
  initCounters();
});
