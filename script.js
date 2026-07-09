/* ============================================================
   Mihir — Portfolio · interactivity
   ============================================================ */

// TODO: MIHIR — set your GitHub username here; project links build from it.
const GITHUB_USER = "LeoPanthera07";

/* ---------- Data: Journey timeline ---------- */
const JOURNEY = [
  {
    year: "2020",
    cat: "Education",
    category: "education",
    title: "M.Sc in Biological Data Science — SPPU",
    desc: "Began graduate studies in what most called \"Bioinformatics\" — but the core was always data: complex biological systems, massive genomic datasets, and extracting signal from noise. This is where the data mindset took root.",
    tags: ["Data Science", "Biology", "SPPU"],
  },
  {
    year: "2021–2022",
    cat: "Project + Fellowship",
    category: "project",
    title: "PG Research Fellowship & Binding Free Energy Estimator",
    desc: "Awarded a PG Research Fellowship during M.Sc. Channeled it into building BFEER — an open-source computational tool for drug discovery workflows. Protein structure analysis with GROMACS and VMD, PDB parsing, and binding energy computation. Built for scientists.",
    impact: "100+ scientists globally adopted BFEER",
    tags: ["Drug Discovery", "Open Source", "Python", "GROMACS"],
  },
  {
    year: "2022",
    cat: "Education",
    category: "education",
    title: "M.Sc Completed — SPPU",
    desc: "Graduated with a Master's in Biological Data Science. Left with a research pipeline, a production open-source tool, and a conviction: the most interesting problems sit at the intersection of biology, data, and software.",
    tags: ["SPPU", "Graduation", "Bioinformatics"],
  },
  {
    year: "2022–2023",
    cat: "Work",
    category: "work",
    title: "Data Intern — Citadel Precision Medicine",
    desc: "First industry role. Worked on precision medicine data workflows — translating the rigour of biological data science into real clinical data pipelines. Learned what it means to ship data work in production with patient impact at stake.",
    tags: ["Industry", "Precision Medicine", "Data Engineering"],
  },
  {
    year: "2023",
    cat: "Project",
    category: "project",
    title: "Nexome — Biological Report Platform",
    desc: "Built a full-stack intelligent platform for biological analysis — integrated AlphaFold for structure prediction, UniProt for annotations, and PubMed for citations. Rendered 3D protein structures in-browser with HTML5 Canvas.",
    tags: ["Node.js", "AlphaFold", "HTML5 Canvas", "Full-Stack"],
  },
  {
    year: "2023",
    cat: "Project",
    category: "project",
    title: "The Pivot Begins — NyayaSetu & CodeVista",
    desc: "A deliberate shift from bioinformatics tooling toward AI systems engineering. NyayaSetu — a legal AI platform with hybrid RAG, Neo4j traversal, and a multi-node pipeline. CodeVista — a microservices code-analysis platform with LLM repo summaries. Domains changed; systems thinking didn't.",
    tags: ["RAG", "Neo4j", "Qdrant", "FastAPI", "Microservices"],
  },
  {
    year: "2023–2024",
    cat: "Project",
    category: "project",
    title: "Going Deeper — ManasGriha, PDFer, Whisper",
    desc: "Three systems in quick succession. ManasGriha: multi-persona conversational AI with real-time SSE streaming. PDFer: an event-driven RAG pipeline on Inngest + LlamaIndex + Qdrant. Whisper: a secure LAN chat app with TweetNaCl ECDH end-to-end encryption.",
    tags: ["LangChain", "Inngest", "LlamaIndex", "TweetNaCl", "SSE"],
  },
  {
    year: "2024",
    cat: "Education",
    category: "education",
    title: "PG Diploma in Generative & Agentic AI — IIT Gandhinagar",
    desc: "Joined IIT Gandhinagar's PG Diploma in Generative AI and Agentic AI. The decision was deliberate: formalize the depth, work with world-class faculty, build at the frontier. Not a career break — an acceleration.",
    tags: ["IIT Gandhinagar", "GenAI", "Agentic AI"],
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
    year: "2025",
    cat: "Achievement",
    category: "achievement",
    title: "Won HackRush '26 — IIT Gandhinagar",
    desc: "Competed and won HackRush '26, IIT Gandhinagar's flagship hackathon. A validation of the ability to execute under pressure, architect fast, and ship a working system in compressed time.",
    tags: ["Hackathon", "IIT Gandhinagar", "Winner"],
  },
  {
    year: "2025",
    cat: "Project",
    category: "project",
    title: "Solace AI — The Capstone",
    desc: "A 7-stage LangGraph multi-agent pipeline for clinical biomedical research: Researcher → Retriever → Graph Builder → Corroborator → Fact Checker → Synthesizer → Editor. Hybrid GraphRAG over Hetionet/PrimeKG with hallucination containment at the architecture level. RAGAS + LangSmith for evaluation.",
    impact: "Capstone — IIT Gandhinagar PG Diploma",
    tags: ["LangGraph", "GraphRAG", "Multi-Agent", "Biomedical"],
  },
  {
    year: "2025 — Present",
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
  badge: "Featured · IIT Gandhinagar Capstone",
  desc: "A 7-stage multi-agent biomedical research pipeline that turns clinical queries into structured, citation-backed evidence documents. Hybrid GraphRAG over biomedical knowledge graphs, a dedicated Corroborator stage for hallucination containment, and correctness prioritized over latency.",
  tags: ["LangGraph", "FastAPI", "GraphRAG", "LLMOps", "Groq", "Multi-Agent", "Biomedical"],
};

const PROJECTS = [
  {
    name: "NyayaSetu",
    repo: "NyayaSetu",
    cat: "AI / ML",
    desc: "Hybrid RAG legal platform that runs queries through a multi-node pipeline and returns clause maps with confidence scores. Neo4j traversal + Qdrant retrieval, Stripe payments, expert escalation.",
    tags: ["Hybrid RAG", "FastAPI", "Neo4j", "Qdrant", "Next.js", "Microservices"],
  },
  {
    name: "PDFer",
    repo: "PDFer",
    cat: "AI / ML",
    desc: "Event-driven PDF ingestion and Q&A — drop a PDF, ask anything. Inngest orchestrates load → chunk → embed → upsert; queries search Qdrant and answer locally via Ollama.",
    tags: ["RAG", "Inngest", "LlamaIndex", "Qdrant", "Ollama", "Event-Driven"],
  },
  {
    name: "CIP — Customer Intelligence Platform",
    repo: "customer-intelligence-platform",
    cat: "MLOps",
    desc: "Production ML platform for conversion prediction and complaint intelligence. XGBoost champion vs baseline, FAISS RAG over CFPB complaints, Evidently drift monitoring gating deployment via CI.",
    tags: ["MLflow", "XGBoost", "FAISS", "Evidently", "FastAPI", "Drift Monitoring"],
  },
  {
    name: "MultiCrewMCP",
    repo: "MultiCrewMCP",
    cat: "AI / ML",
    desc: "Operations assistant wiring CrewAI agent crews to an MCP server. Researcher + writer agents drive tools over MCP, with tracing and prompt-injection-resistant tests.",
    tags: ["CrewAI", "MCP", "Multi-Agent", "Python", "Prompt Injection Testing"],
  },
  {
    name: "ManasGriha",
    repo: "ManasGriha",
    cat: "AI / ML",
    desc: "Multi-persona conversational AI with real-time SSE streaming — switch personas, chat one-on-one or in groups, with persisted conversation history.",
    tags: ["FastAPI", "LangChain", "SSE", "Groq", "Conversational AI"],
  },
  {
    name: "CodeVista",
    repo: "CodeVista",
    cat: "Full-Stack",
    desc: "Microservices platform for deep repository analysis — LLM-powered summaries, symbol/relationship parsing, and real-time dependency-graph visualization behind an API gateway.",
    tags: ["Node.js", "Microservices", "LLM", "React", "MongoDB", "API Gateway"],
  },
  {
    name: "Nexome",
    repo: "Nexome",
    cat: "Bioinformatics",
    desc: "Intelligent biological report platform with in-browser 3D protein rendering on HTML5 Canvas and live AlphaFold, UniProt, and PubMed integrations with local caching.",
    tags: ["Bioinformatics", "Node.js", "AlphaFold", "UniProt", "HTML5 Canvas"],
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
    desc: "Streamlit recommendation app using cosine similarity over a pre-computed similarity matrix for fast, explainable suggestions.",
    tags: ["Streamlit", "Scikit-learn", "NLP", "Cosine Similarity"],
  },
  {
    name: "SpamDetector",
    repo: "SpamDetector",
    cat: "ML / NLP",
    desc: "Text spam classifier with an NLTK preprocessing pipeline (tokenization, stopwords, stemming) and a scikit-learn model behind a Streamlit UI.",
    tags: ["NLP", "Text Classification", "NLTK", "Scikit-learn", "Streamlit"],
  },
  {
    name: "Binding Free Energy Estimator",
    repo: "BFEER",
    cat: "Bioinformatics",
    desc: "Open-source drug-discovery tool for binding free energy estimation — adopted by 100+ scientists globally, built under a PG Research Fellowship.",
    tags: ["Drug Discovery", "GROMACS", "VMD", "Python", "Open Source"],
  },
  {
    name: "SupplyChainAutomationSolution",
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
          <a class="proj-link" href="${repoUrl(p.repo)}" target="_blank" rel="noopener">${GH_ICON} GitHub</a>
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
  renderProjects();
  renderSkills();
  initScrollReveal();
  initTypewriter();
  initMemoji();
  initNav();
});
