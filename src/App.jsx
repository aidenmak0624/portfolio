import { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const fullTerminalText = "Software Developer — Full-Stack · AI · Shipping Products";

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullTerminalText.length) {
        setTerminalText(fullTerminalText.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const featuredProjects = [
    {
      id: 0,
      title: "The Golden Fork — AI Restaurant Platform",
      tag: "Full-Stack · RAG · OpenAI · Stripe · Next.js",
      description:
        "End-to-end restaurant ordering system with an AI-powered menu assistant. Built a RAG pipeline using OpenAI embeddings and Pinecone vector search that understands dietary needs, recommends dishes, and suggests pairings in real time. Features Stripe checkout, WebSocket-driven kitchen display, manager dashboard with sales velocity and menu engineering analytics, and a customer feedback loop. Deployed live on Render.",
      metrics: [
        { label: "AI Engine", value: "RAG" },
        { label: "Live Demo", value: "Yes" },
        { label: "Features", value: "12+" },
      ],
      color: "#f59e0b",
      github: "https://github.com/aidenmak0624/golden-fork",
      live: "https://golden-fork-9tn2.onrender.com",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "OpenAI", "Pinecone", "Stripe", "WebSocket", "Recharts"],
      isNew: true,
    },
    {
      id: 1,
      title: "Upstander Program — CMHR Partnership",
      tag: "AI Education · Gemini · Flask · NLP",
      description:
        "AI-enhanced educational platform built in partnership with the Canadian Museum for Human Rights. Personalized learning journeys through conversational AI, strength assessments, scenario-based simulations, and community engagement — guiding users from recognizing injustice to taking action.",
      metrics: [
        { label: "Partner", value: "CMHR" },
        { label: "AI Engine", value: "Gemini" },
        { label: "Modules", value: "6" },
      ],
      color: "#f59e0b",
      github: "https://github.com/aidenmak0624/Upstander_Program",
      tech: ["Python", "Gemini Flash 2.0", "Flask", "NLP", "Pandas"],
    },
    {
      id: 2,
      title: "Human Rights Education Agent",
      tag: "Agentic AI · LangGraph · Workflow Orchestration",
      description:
        "Self-initiated project extending the CMHR education mission. Designed workflow orchestration system coordinating multiple background services and asynchronous task processing. Uses LangGraph to orchestrate 5 specialized tools — RAG retrieval, web search, lesson planning, fact verification, and self-reflection — across 25+ authoritative legal documents.",
      metrics: [
        { label: "Retrieval Speed", value: "0.013s" },
        { label: "Agent Tools", value: "5" },
        { label: "Documents", value: "25+" },
      ],
      color: "#00e5a0",
      github: "https://github.com/aidenmak0624/human-right-edu-agent",
      tech: ["Python", "LangGraph", "LangChain", "Gemini", "ChromaDB", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Human Rights Education RAG",
      tag: "RESTful API · RAG · PostgreSQL",
      description:
        "Self-initiated project building a scalable RESTful API backend for the educational chatbot. Handles concurrent user sessions with PostgreSQL for data persistence. ChromaDB vector store with 112 document chunks across 9 collections. Optimized API response time from 6.8s to 0.2s (97% improvement) through database indexing, query optimization, and caching.",
      metrics: [
        { label: "API Speedup", value: "97%" },
        { label: "Response Time", value: "0.2s" },
        { label: "Doc Chunks", value: "112" },
      ],
      color: "#6366f1",
      github: "https://github.com/aidenmak0624/Human_Right_Edu_RAG",
      tech: ["Python", "Flask", "PostgreSQL", "ChromaDB", "Gemini", "RESTful APIs"],
    },
    {
      id: 4,
      title: "Data Automation Agent",
      tag: "AI Tool · Streamlit · SQLite",
      description:
        "AI-powered data processing system that automates document analysis, sorting, and transformation. Features file upload, intelligent categorization, and structured output through a Streamlit interface backed by Gemini.",
      metrics: [
        { label: "Interface", value: "Streamlit" },
        { label: "AI", value: "Gemini" },
        { label: "Storage", value: "SQLite" },
      ],
      color: "#ec4899",
      github: "https://github.com/aidenmak0624/data_automation_agent",
      tech: ["Python", "Gemini", "Streamlit", "SQLite"],
    },
  ];

  const moreProjects = [
    {
      id: 5,
      title: "TeachReach Tutoring Platform",
      tag: "Agile · Java · SOLID · CI/CD",
      description:
        "Production-ready educational platform built in a 5-person Agile team with 2-week sprints, daily standups, and collaborative Git workflows. Architected scalable backend using design patterns (Factory, Singleton, DAO) following SOLID principles. Deployed with zero critical bugs and 90%+ test coverage, reducing post-deployment issues by 95%.",
      metrics: [
        { label: "Test Coverage", value: "90%+" },
        { label: "Team Size", value: "5" },
        { label: "Issue Reduction", value: "95%" },
      ],
      color: "#a78bfa",
      github: "https://github.com/aidenmak0624/TeachReach",
      tech: ["Java", "SQL", "JDBC", "JUnit", "Agile/Scrum", "CI/CD"],
    },
    {
      id: 6,
      title: "Municipal Data Analytics Platform",
      tag: "PostgreSQL · Database Engineering · Analytics",
      description:
        "Architected normalized relational database schema with 15+ interconnected tables, processing 100,000+ municipal service records. Developed 29+ optimized SQL queries with complex joins, window functions, and aggregations. Reduced query execution time by 85% through strategic indexing and built automated data validation achieving 95% data cleanliness.",
      metrics: [
        { label: "Query Speedup", value: "85%" },
        { label: "SQL Queries", value: "29+" },
        { label: "Data Quality", value: "95%" },
      ],
      color: "#14b8a6",
      github: "https://github.com/aidenmak0624/311_Service_Request_Analysis",
      tech: ["SQL", "PostgreSQL", "Python", "Pandas", "scikit-learn", "Database Design"],
    },
    {
      id: 7,
      title: "Systems Programming in C",
      tag: "OS · MPI · OpenMP · Parallel",
      description:
        "11 complete systems projects: MLFQ scheduler, FAT32 filesystem reader, MPI distributed computing, and OpenMP parallel algorithms. 3,000+ lines of C demonstrating low-level engineering depth.",
      metrics: [
        { label: "Projects", value: "11" },
        { label: "Lines of C", value: "3K+" },
        { label: "Frameworks", value: "MPI/OMP" },
      ],
      color: "#f97316",
      github: "https://github.com/aidenmak0624/System_Programming_C",
      tech: ["C", "MPI", "OpenMP", "POSIX Threads", "SLURM"],
    },
    {
      id: 8,
      title: "Premier League DBMS",
      tag: "SQL · JDBC · Database Design",
      description:
        "Sports database management system with relational design, JDBC connectivity, and SQL queries for Premier League data analysis.",
      metrics: [
        { label: "Stack", value: "Java/SQL" },
        { label: "Interface", value: "JDBC" },
        { label: "Type", value: "DBMS" },
      ],
      color: "#64748b",
      github: "https://github.com/aidenmak0624/Premier_League_Database_Management_System",
      tech: ["Java", "SQL", "JDBC"],
    },
  ];

  const allDisplayedProjects = showAllProjects
    ? [...featuredProjects, ...moreProjects]
    : featuredProjects;

  const skills = [
    {
      category: "Languages",
      items: ["TypeScript", "Python (Advanced)", "Java", "C/C++", "SQL"],
    },
    {
      category: "AI / ML",
      items: [
        "OpenAI API",
        "Pinecone",
        "LangGraph",
        "LangChain",
        "ChromaDB",
        "RAG Pipelines",
        "Gemini API",
        "Workflow Orchestration",
        "Sentence Transformers",
        "Scikit-learn",
      ],
    },
    {
      category: "Full-Stack & APIs",
      items: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Flask",
        "RESTful API Design",
        "PostgreSQL",
        "Stripe Integration",
        "WebSocket",
        "Database Schema Design",
        "SQL Optimization & Indexing",
      ],
    },
    {
      category: "DevOps & Practices",
      items: [
        "Git",
        "Linux/Unix",
        "CI/CD Pipelines",
        "GCP",
        "Render",
        "Agile/Scrum",
        "TDD",
        "JUnit",
        "SOLID Principles",
      ],
    },
  ];

  const navItems = ["about", "projects", "skills", "contact"];

  const GridBackground = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background: `
          radial-gradient(ellipse at ${mousePos.x}px ${mousePos.y}px, rgba(0, 229, 160, 0.03) 0%, transparent 50%),
          linear-gradient(180deg, #09090b 0%, #0c0c10 100%)
        `,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: `translateY(${scrollY * -0.15}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,229,160,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      />
    </div>
  );

  const NeuralDecoration = () => (
    <svg
      style={{
        position: "absolute",
        top: -80,
        right: -40,
        width: 300,
        height: 300,
        opacity: 0.06,
      }}
      viewBox="0 0 300 300"
    >
      {[50, 100, 150, 200, 250].map((y) =>
        [50, 150, 250].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={3} fill="#00e5a0" />
        ))
      )}
      {[
        [50, 50, 150, 100],
        [150, 100, 250, 50],
        [50, 100, 150, 150],
        [150, 150, 250, 100],
        [50, 150, 150, 200],
        [150, 200, 250, 150],
        [50, 200, 150, 250],
        [150, 250, 250, 200],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#00e5a0"
          strokeWidth={0.5}
        />
      ))}
    </svg>
  );

  const ProjectCard = ({ project, idx }) => (
    <div
      className="project-card"
      style={{ "--accent": project.color }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: project.color,
              letterSpacing: 2,
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {project.tag}
            {project.isNew && (
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                  color: "#fff",
                  fontSize: 9,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 100,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  animation: "glowPulse 2s infinite",
                }}
              >
                NEW
              </span>
            )}
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 28,
              fontWeight: 700,
              color: "#fafafa",
            }}
          >
            {project.title}
          </h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
              title="Live Demo"
              style={{ borderColor: "rgba(0,229,160,0.3)", color: "#00e5a0", background: "rgba(0,229,160,0.05)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            title="View on GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#3f3f46",
              padding: "6px 12px",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 8,
            }}
          >
            0{idx + 1}
          </div>
        </div>
      </div>

      <p
        style={{
          fontSize: 15,
          lineHeight: 1.7,
          color: "#71717a",
          marginBottom: 20,
          maxWidth: 700,
        }}
      >
        {project.description}
      </p>

      {/* Tech pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginBottom: 20,
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              padding: "3px 10px",
              borderRadius: 100,
              background: `${project.color}10`,
              border: `1px solid ${project.color}25`,
              color: project.color,
              letterSpacing: 0.5,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {project.metrics.map((m) => (
          <div key={m.label} className="metric-box">
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 20,
                fontWeight: 700,
                color: project.color,
                marginBottom: 4,
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: "#52525b",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Hover glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          opacity: hoveredProject === project.id ? 0.4 : 0,
          transition: "opacity 0.5s",
        }}
      />
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090b",
        color: "#e4e4e7",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=JetBrains+Mono:wght@300;400;500;700&family=Playfair+Display:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: rgba(0,229,160,0.3); color: #fff; }
        html { scroll-behavior: smooth; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0,229,160,0.1); }
          50% { box-shadow: 0 0 40px rgba(0,229,160,0.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .nav-link {
          position: relative;
          color: #71717a;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: color 0.3s;
          font-family: 'JetBrains Mono', monospace;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px 0;
        }
        .nav-link:hover { color: #00e5a0; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #00e5a0;
          transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }

        .project-card {
          position: relative;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 36px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .project-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
          transform: translateY(-4px);
        }
        .project-card:hover::before { opacity: 1; }

        .project-link-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          color: #71717a;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
        }
        .project-link-btn:hover {
          border-color: rgba(0,229,160,0.4);
          color: #00e5a0;
          background: rgba(0,229,160,0.05);
        }

        .skill-pill {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-family: 'JetBrains Mono', monospace;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          color: #a1a1aa;
          transition: all 0.3s;
          cursor: default;
        }
        .skill-pill:hover {
          background: rgba(0,229,160,0.08);
          border-color: rgba(0,229,160,0.2);
          color: #00e5a0;
        }

        .metric-box {
          padding: 16px;
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          text-align: center;
          flex: 1;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 100px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          border: none;
        }
        .cta-primary {
          background: #00e5a0;
          color: #09090b;
        }
        .cta-primary:hover {
          background: #00ffb3;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,229,160,0.25);
        }
        .cta-secondary {
          background: transparent;
          color: #e4e4e7;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .cta-secondary:hover {
          border-color: rgba(0,229,160,0.4);
          color: #00e5a0;
          transform: translateY(-2px);
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #00e5a0;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: #00e5a0;
        }

        .show-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 100px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 1px;
          background: transparent;
          color: #71717a;
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 32px;
        }
        .show-more-btn:hover {
          border-color: rgba(0,229,160,0.3);
          color: #00e5a0;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 100px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 1px;
          background: rgba(0,229,160,0.06);
          border: 1px solid rgba(0,229,160,0.15);
          color: #00e5a0;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          color: #71717a;
          text-decoration: none;
          transition: all 0.3s;
        }
        .social-link:hover {
          border-color: rgba(0,229,160,0.3);
          color: #00e5a0;
          background: rgba(0,229,160,0.05);
          transform: translateY(-2px);
        }
      `}</style>

      <GridBackground />

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            scrollY > 50 ? "rgba(9,9,11,0.85)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
          borderBottom:
            scrollY > 50
              ? "1px solid rgba(255,255,255,0.04)"
              : "none",
          transition: "all 0.4s",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 18,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: "#00e5a0" }}>~/</span>aiden.mak
          <span
            style={{
              color: "#00e5a0",
              animation: "glowPulse 2s infinite",
            }}
          >
            _
          </span>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {navItems.map((item) => (
            <button
              key={item}
              className="nav-link"
              onClick={() =>
                document
                  .getElementById(item)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item}
            </button>
          ))}
          <a
            href="/resume.pdf"
            className="cta-btn cta-secondary"
            style={{
              padding: "8px 20px",
              fontSize: 11,
              letterSpacing: 1.5,
            }}
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: 900,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: "#00e5a0",
                letterSpacing: 3,
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 0.8s 0.3s",
              }}
            >
              {"> "}HELLO WORLD — I'M
            </div>
            <span className="status-badge">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00e5a0",
                  display: "inline-block",
                }}
              />
              Open to work
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 900,
              lineHeight: 1,
              marginBottom: 24,
              color: "#fafafa",
              letterSpacing: -2,
            }}
          >
            Aiden Mak
          </h1>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "#a1a1aa",
              marginBottom: 40,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ color: "#52525b" }}>$ </span>
            {terminalText}
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1.1em",
                background: "#00e5a0",
                marginLeft: 2,
                opacity: cursorVisible ? 1 : 0,
              }}
            />
          </div>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "#71717a",
              maxWidth: 620,
              marginBottom: 48,
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.8s 0.6s",
            }}
          >
            24-year-old BSc Honours CS grad from the University of
            Manitoba (2025), now based in Toronto. I build full-stack AI
            products — from a CMHR educational platform to a live restaurant
            system with RAG-powered menu recommendations and Stripe checkout.
            Trilingual (Cantonese, Mandarin, English) and passionate about
            shipping systems that solve real problems, not just demo.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.8s 0.8s",
            }}
          >
            <button
              className="cta-btn cta-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <span style={{ fontSize: 16 }}>↓</span>
            </button>
            <a
              className="cta-btn cta-secondary"
              href="https://github.com/aidenmak0624"
              target="_blank"
              rel="noopener"
            >
              GitHub
              <span style={{ fontSize: 14 }}>↗</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: scrollY > 100 ? 0 : 0.4,
            transition: "opacity 0.5s",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: 1,
              height: 40,
              background:
                "linear-gradient(to bottom, #00e5a0, transparent)",
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "120px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label">About</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 42,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#fafafa",
                  marginBottom: 24,
                }}
              >
                AI that does
                <br />
                more than{" "}
                <span
                  style={{ color: "#00e5a0", fontStyle: "italic" }}
                >
                  demo
                </span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#71717a",
                  marginBottom: 20,
                }}
              >
                I build full-stack AI products that go beyond a polished
                prototype. It started with a partnership with the Canadian
                Museum for Human Rights, then I independently engineered a
                RAG pipeline and autonomous agent to push the mission further.
                Most recently, I shipped The Golden Fork — a complete restaurant
                platform with AI menu recommendations, Stripe payments, and
                real-time kitchen management.
              </p>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#71717a",
                  marginBottom: 20,
                }}
              >
                My stack spans the full product surface: Next.js, React,
                and TypeScript on the frontend; PostgreSQL, Flask, and
                RESTful APIs on the backend; OpenAI, Pinecone, LangGraph,
                and ChromaDB for AI. I also write C — MLFQ schedulers,
                FAT32 readers, and MPI parallel systems — because
                understanding the machine matters.
              </p>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#71717a",
                }}
              >
                Currently looking for software engineering and AI/ML
                roles in Toronto where I can ship systems that solve
                real problems.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <NeuralDecoration />
              <div
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  padding: 32,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  lineHeight: 2.2,
                  color: "#52525b",
                }}
              >
                <div style={{ color: "#00e5a0", marginBottom: 8 }}>
                  // aiden.config.json
                </div>
                <div>
                  {"{"} <br />
                  {"  "}
                  <span style={{ color: "#6366f1" }}>"age"</span>
                  :{" "}
                  <span style={{ color: "#a1a1aa" }}>
                    24
                  </span>
                  ,<br />
                  {"  "}
                  <span style={{ color: "#6366f1" }}>"education"</span>
                  :{" "}
                  <span style={{ color: "#a1a1aa" }}>
                    "BSc Honours CS, UManitoba '25"
                  </span>
                  ,<br />
                  {"  "}
                  <span style={{ color: "#6366f1" }}>"location"</span>
                  :{" "}
                  <span style={{ color: "#a1a1aa" }}>
                    "Toronto, ON"
                  </span>
                  ,<br />
                  {"  "}
                  <span style={{ color: "#6366f1" }}>"focus"</span>:{" "}
                  <span style={{ color: "#a1a1aa" }}>
                    ["Full-Stack AI", "RAG", "Shipping Products"]
                  </span>
                  ,<br />
                  {"  "}
                  <span style={{ color: "#6366f1" }}>"languages"</span>
                  :{" "}
                  <span style={{ color: "#a1a1aa" }}>
                    ["Cantonese", "Mandarin", "English"]
                  </span>
                  ,<br />
                  {"  "}
                  <span style={{ color: "#6366f1" }}>"partner"</span>
                  :{" "}
                  <span style={{ color: "#a1a1aa" }}>
                    "Canadian Museum for Human Rights"
                  </span>
                  ,<br />
                  {"  "}
                  <span style={{ color: "#6366f1" }}>"interests"</span>
                  :{" "}
                  <span style={{ color: "#a1a1aa" }}>
                    ["Coffee", "Hiking", "Travelling", "Badminton"]
                  </span>
                  <br />
                  {"}"}
                </div>
              </div>

              {/* Highlight card */}
              <div
                style={{
                  marginTop: 20,
                  background: "rgba(0,229,160,0.04)",
                  border: "1px solid rgba(0,229,160,0.1)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#00e5a0",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: "#a1a1aa",
                  }}
                >
                  CMHR partnership → RAG & agent extensions → Golden Fork shipped live
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          padding: "120px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label">Featured Work</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 42,
              fontWeight: 700,
              color: "#fafafa",
              marginBottom: 16,
            }}
          >
            Projects
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#52525b",
              marginBottom: 48,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: 0.5,
            }}
          >
            Original work — no forks, no wrappers
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {allDisplayedProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                idx={idx}
              />
            ))}
          </div>

          {!showAllProjects && (
            <div style={{ textAlign: "center" }}>
              <button
                className="show-more-btn"
                onClick={() => setShowAllProjects(true)}
              >
                Show {moreProjects.length} more projects
                <span>+</span>
              </button>
            </div>
          )}
          {showAllProjects && (
            <div style={{ textAlign: "center" }}>
              <button
                className="show-more-btn"
                onClick={() => setShowAllProjects(false)}
              >
                Show less
                <span>-</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        style={{
          padding: "120px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label">Expertise</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 42,
              fontWeight: 700,
              color: "#fafafa",
              marginBottom: 60,
            }}
          >
            Tech Stack
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 40,
            }}
          >
            {skills.map((group) => (
              <div key={group.category}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: "#52525b",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {group.category}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "120px 48px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            className="section-label"
            style={{ justifyContent: "center" }}
          >
            Get In Touch
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              color: "#fafafa",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Let's build something
            <br />
            <span style={{ color: "#00e5a0", fontStyle: "italic" }}>
              meaningful
            </span>{" "}
            together
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#71717a",
              marginBottom: 40,
              maxWidth: 540,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            I'm actively looking for software engineering, AI/ML, and
            backend development roles in Toronto. Whether it's a job
            opportunity, a collaboration, or just a conversation about
            building systems that matter — I'd love to hear from you.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <a
              className="cta-btn cta-primary"
              href="mailto:mcwaiden000@gmail.com"
            >
              Say Hello
              <span>→</span>
            </a>
            <a
              className="cta-btn cta-secondary"
              href="https://linkedin.com/in/mcwaiden"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
              <span style={{ fontSize: 14 }}>↗</span>
            </a>
          </div>

          {/* Social links row */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <a
              className="social-link"
              href="https://github.com/aidenmak0624"
              target="_blank"
              rel="noopener"
              title="GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              className="social-link"
              href="https://linkedin.com/in/mcwaiden"
              target="_blank"
              rel="noopener"
              title="LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              className="social-link"
              href="mailto:mcwaiden000@gmail.com"
              title="Email"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/aiden_codinginvibe"
              target="_blank"
              rel="noopener"
              title="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "40px 48px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#3f3f46",
          }}
        >
          {"\u00A9"} 2026 Aiden Mak
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#3f3f46",
          }}
        >
          Toronto, ON
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
