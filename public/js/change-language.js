const i18n = {
  es: {
    // Hero
    "greetings":    "> Saludos! Mi nombre es",
    "intro1":       "Soy Licenciado en Informática egresado en la Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), y actualmente realizo un doctorado en Ciencias de la Computación en la Universidad Nacional del Sur (UNS), Bahía Blanca. Desempeño mis actividades de investigación en CESIMAR-CONICET, Puerto Madryn, Argentina.\n\nEste espacio refleja mis proyectos, investigaciones y publicaciones en IA, sistemas de conocimiento y ciencias del mar. Si querés saber más, no dudes en contactarme.",
    "cv-link":      "Descargar CV →",

    // Tabs
    "tab-button0":          "Proyectos",
    "tab-button-research":  "Investigación",
    "tab-button1":          "Historia académica",
    "tab-button2":          "Publicaciones",
    "tab-button3":          "Experiencia",
    "tab-button4":          "Contacto",


    // Proyectos — tags
    "proj-hermes-tag":   "GraphRAG · KG · LLM",
    "proj-aquamind-tag": "Multiagente · Web Semántica",
    "proj-botgbif-tag":  "Bot · Linked Open Data",
    "proj-obisbot-tag":  "Bot · Oceanografía",
    "proj-odp-tag":      "Dashboard · LOD",
    "proj-mapyzer-tag":  "Visualización · GIS",

    // Proyectos — descripciones
    "proj-hermes-desc":   "Plataforma web de GraphRAG que genera y compara Knowledge Graphs a partir de un corpus histórico de biología marina argentina (Carrara, 1952). Soporta 6 KGs y 4 LLMs para Q&A en español con verificación simbólica post-hoc.",
    "proj-aquamind-desc": "Sistema multiagente para consulta de especies marinas que integra WoRMS y OBIS mediante lenguaje natural. Combina recuperación de información, razonamiento semántico y LLMs.",
    "proj-botgbif-desc":  "Bot de consulta sobre biodiversidad que accede a datos de GBIF mediante lenguaje natural. Facilita el acceso a registros de ocurrencia de especies para investigadores y público general.",
    "proj-obisbot-desc":  "Bot conversacional para exploración de datos del Ocean Biodiversity Information System (OBIS). Permite consultas en lenguaje natural sobre distribución y ocurrencia de especies marinas.",
    "proj-odp-desc":      "Dashboard de visualización para datos abiertos enlazados sobre conservación de especies marinas en el Atlántico Sur. Integra fuentes heterogéneas mediante Linked Open Data.",
    "proj-mapyzer-desc":  "Herramienta de carga y visualización de datos espacio-temporales para ciencias del mar. Permite explorar datasets georreferenciados de forma interactiva.",
    "proj-visit":         "Ver proyecto →",

    // Investigación
    "research-title1":  "Línea doctoral",
    "research-intro":   "Mi investigación doctoral se ubica en la intersección entre la IA neuro-simbólica y los sistemas de conocimiento marino. Estudio cómo los grafos de conocimiento marino pueden integrarse con Large Language Models mediante frameworks de recuperación y razonamiento neuro-simbólico, para sostener inferencia fundamentada (<em>grounded</em>) e interacción en lenguaje natural sobre datos heterogéneos de ciencias del mar — un enfoque conocido como <em>ontology-grounded reasoning</em>. El trabajo explora métodos de recuperación basados en grafos, incluyendo GraphRAG, junto con arquitecturas multiagente para extracción, recuperación y análisis de conocimiento en datos de biodiversidad marina y oceanografía. Como parte de la evaluación, defino métricas como <strong>solidez semántica (<em>semantic soundness</em>)</strong> y <strong>fidelidad de fundamentación (<em>grounding fidelity</em>)</strong> para medir en qué medida las respuestas generadas son trazables al grafo simbólico subyacente.",
    "research-title2":  "Dirección",
    "advisor1-role":    "Director — Universidad Nacional del Sur (UNS)",
    "advisor2-role":    "Co-director — CESIMAR-CONICET / UNPSJB",
    "research-title3":  "Afiliación institucional",
    "research-period":  "Agosto 2024 — Presente",
    "research-title4":  "Áreas de interés",
    "rtag1": "IA neuro-simbólica",
    "rtag2": "Grafos de conocimiento",
    "rtag3": "RAG / GraphRAG",
    "rtag4": "Web semántica",
    "rtag5": "Evaluación de LLMs",
    "rtag6": "Datos abiertos enlazados",

    // Historia académica
    "tab1-title1":  "Nivel Universitario",
    "tab1-title2":  "Cursos",
    "tab1-title3":  "Certificaciones",
    "phd":          "<strong>2024 - presente:</strong> Doctorado en Ciencias de la Computación. Universidad Nacional del Sur (UNS), Puerto Madryn.",
    "degree":       "<strong>2018 - 2024:</strong> Licenciatura en Informática. UNPSJB, Puerto Madryn.",
    "analyst":      "<strong>2018 - 2021:</strong> Analista Programador Universitario. UNPSJB, Puerto Madryn.",
    "course7":      "Fundamentos de Inteligencia Artificial Explicable.",
    "course7-meta": "UNS, 2026, Bahía Blanca, Argentina.",
    "course6":      "Reconocimiento de Patrones y Aprendizaje de Máquina.",
    "course6-meta": "UNS, 2025, Bahía Blanca, Argentina.",
    "course5":      "Procesamiento de Imágenes y Visión Computacional I.",
    "course5-meta": "UNS, 2025, Bahía Blanca, Argentina.",
    "course-adapt": "Curso de formación sobre mejores prácticas oceánicas.",
    "course-gov":   "Gobernanza y Ética en la Gestión de la Información.",
    "course-gov-meta": "UNS, 2024, Bahía Blanca.",
    "course4":      "Introducción del Lenguaje R y Python aplicado a la Ciencia de Datos.",
    "course3":      "Aprendizaje profundo por refuerzo.",
    "course2":      "Clasificadores probabilísticos en aprendizaje automático.",
    "course1":      "Webapps de atrás hacia adelante.",

    // Publicaciones
    "tab2-title1":    "Artículos en Revistas",
    "tab2-title2":    "Papers",
    "tab2-title2b":   "Papers",
    "tab2-title3":    "Conferencias",
    "pub-link-text":  "→ Ver artículo",
    "pub-venue-1":    "Journal of Computer Science & Technology (JCST) — Octubre 2024.",
    "pub-venue-2":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2025 — Universidad Nacional de Cuyo (UNCUYO), Mendoza, Argentina.",
    "pub-venue-3":    "1st GOBLIN Workshop on Knowledge Graph Technologies (GOBLIN25) — Leipzig, Alemania, 2025.",
    "pub-venue-4":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2024 — Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), Puerto Madryn, Argentina.",
    "pub-venue-5":    "XI Jornadas de Cloud Computing, Big Data & Emerging Topics — La Plata, Argentina, junio 2023.",
    "pub-venue-6":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2023 — Junín, Argentina.",
    "pub-venue-7":    "Congreso Argentino de Ciencias de la Computación (CACIC) 2022 — Universidad Nacional de La Rioja (UNLaR), La Rioja, Argentina.",
    "pub-venue-8":    "Congreso Argentino de Ciencias de la Computación (CACIC) 2022 — Universidad Nacional de La Rioja (UNLaR), La Rioja, Argentina.",
    "pub-venue-9":    "X Jornadas de Cloud Computing, Big Data & Emerging Topics — La Plata, Argentina, 2022.",
    "pub-venue-10":   "Workshop de Investigadores en Ciencias de la Computación (WICC) 2022 — Mendoza, Argentina.",
    "pub-venue-11":   "Congreso Argentino de Ciencias de la Computación (CACIC) 2021 — Modalidad virtual, octubre 2021.",
    "pub-iodc-meta":  "International Ocean Data Conference III (IODC-III) — Marzo 2025, Santa Marta, Colombia.",

    // Experiencia — Desarrollo de Software
    "tab3-title1":    "Desarrollo de Software",
    "exp1-period":    "Marzo 2023 — Julio 2024",
    "exp2-period":    "Septiembre 2021 — Enero 2022",
    "exp3-company":   "Laboratorio de Informática — UNPSJB",
    "exp3-period":    "Abril 2021 — Marzo 2023",
    "exp4-company":   "Pasantía — UNPSJB",
    "exp4-period":    "Septiembre 2020 — Octubre 2021",

    // Experiencia — Instrucción Académica
    "tab3-title2":    "Instrucción Académica",
    "aca0-company":   "Auxiliar en Elementos de Informática — UNPSJB",
    "aca0-period":    "Febrero 2025 — Presente",
    "aca1-company":   "Auxiliar en Análisis Matemático — UNPSJB",
    "aca1-period":    "Agosto 2021 — Julio 2024",
    "aca2-company":   "Tutor Alumno — UNPSJB",
    "aca2-period":    "Abril 2019 — Marzo 2024",
    "aca3-company":   "Profesor de Informática — Fundación de Altos Estudios en Ciencias Comerciales",
    "aca3-period":    "Mayo 2022 — Agosto 2022",
    "aca4-company":   "Profesor de Tecnologías Móviles — UNPSJB",
    "aca4-period":    "Septiembre 2019 — Diciembre 2019",
    "aca5-company":   "Profesor de Computación — UNPSJB",
    "aca5-period":    "Septiembre 2019 — Diciembre 2019",

    // Contacto
    "tab4-title1":    "Contacto",
    "email-label":    "Email",
    "message-title":  "Mensaje",
    "send-button":    "Enviar",
  },

  en: {
    // Hero
    "greetings":    "> Hi! My name is",
    "intro1":       "I hold a degree in Computer Science from the Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), and I am currently pursuing a PhD in Computer Science at the Universidad Nacional del Sur (UNS), Bahía Blanca. I carry out my research at CESIMAR-CONICET, Puerto Madryn, Argentina.\n\nThis space reflects my projects, research and publications in AI, knowledge systems and marine science. Feel free to reach out!",
    "cv-link":      "Download CV →",

    // Tabs
    "tab-button0":          "Projects",
    "tab-button-research":  "Research",
    "tab-button1":          "Academic history",
    "tab-button2":          "Publications",
    "tab-button3":          "Experience",
    "tab-button4":          "Contact",


    // Proyectos — tags
    "proj-hermes-tag":   "GraphRAG · KG · LLM",
    "proj-aquamind-tag": "Multi-agent · Semantic Web",
    "proj-botgbif-tag":  "Bot · Linked Open Data",
    "proj-obisbot-tag":  "Bot · Oceanography",
    "proj-odp-tag":      "Dashboard · LOD",
    "proj-mapyzer-tag":  "Visualization · GIS",

    // Proyectos — descripciones
    "proj-hermes-desc":   "GraphRAG web platform that generates and compares Knowledge Graphs from a historical Argentine marine biology corpus (Carrara, 1952). Supports 6 KGs and 4 LLMs for Spanish Q&A with post-hoc symbolic verification.",
    "proj-aquamind-desc": "Multi-agent system for marine species querying that integrates WoRMS and OBIS through natural language. Combines information retrieval, semantic reasoning and LLMs.",
    "proj-botgbif-desc":  "Biodiversity query bot that accesses GBIF data through natural language. Facilitates access to species occurrence records for researchers and the general public.",
    "proj-obisbot-desc":  "Conversational bot for exploring Ocean Biodiversity Information System (OBIS) data. Enables natural language queries about marine species distribution and occurrence.",
    "proj-odp-desc":      "Visualization dashboard for linked open data on marine species conservation in the South Atlantic. Integrates heterogeneous sources through Linked Open Data.",
    "proj-mapyzer-desc":  "Spatio-temporal data loading and visualization tool for marine sciences. Allows interactive exploration of georeferenced datasets.",
    "proj-visit":         "View project →",

    // Investigación
    "research-title1":  "Doctoral research",
    "research-intro":   "My doctoral research sits at the intersection of neuro-symbolic AI and marine knowledge systems. I study how marine knowledge graphs can be integrated with Large Language Models through neuro-symbolic retrieval and reasoning frameworks, to support grounded inference and natural-language interaction over heterogeneous marine science data — an approach known as <em>ontology-grounded reasoning</em>. The work explores graph-based retrieval methods, including GraphRAG, together with multi-agent architectures for knowledge extraction, retrieval and analysis across marine biodiversity and oceanographic datasets. As part of the evaluation, I define metrics such as <strong>semantic soundness</strong> and <strong>grounding fidelity</strong> to measure to what extent generated answers are traceable to the underlying symbolic graph.",
    "research-title2":  "Supervision",
    "advisor1-role":    "Advisor — Universidad Nacional del Sur (UNS)",
    "advisor2-role":    "Co-advisor — CESIMAR-CONICET / UNPSJB",
    "research-title3":  "Institutional affiliation",
    "research-period":  "August 2024 — Present",
    "research-title4":  "Areas of interest",
    "rtag1": "Neuro-symbolic AI",
    "rtag2": "Knowledge graphs",
    "rtag3": "RAG / GraphRAG",
    "rtag4": "Semantic Web",
    "rtag5": "LLM evaluation",
    "rtag6": "Linked open data",

    // Historia académica
    "tab1-title1":  "University Education",
    "tab1-title2":  "Courses",
    "tab1-title3":  "Certifications",
    "phd":          "<strong>2024 - present:</strong> PhD in Computer Science. Universidad Nacional del Sur (UNS), Puerto Madryn.",
    "degree":       "<strong>2018 - 2024:</strong> Bachelor's Degree in Computer Science. UNPSJB, Puerto Madryn.",
    "analyst":      "<strong>2018 - 2021:</strong> University Programming Analyst. UNPSJB, Puerto Madryn.",
    "course7":      "Fundamentals of Explainable Artificial Intelligence.",
    "course7-meta": "UNS, 2026, Bahía Blanca, Argentina.",
    "course6":      "Pattern Recognition and Machine Learning.",
    "course6-meta": "UNS, 2025, Bahía Blanca, Argentina.",
    "course5":      "Image Processing and Computer Vision I.",
    "course5-meta": "UNS, 2025, Bahía Blanca, Argentina.",
    "course-adapt": "Training course on ocean best practices.",
    "course-gov":   "Governance and Ethics in Information Management.",
    "course-gov-meta": "UNS, 2024, Bahía Blanca.",
    "course4":      "Introduction to R and Python for Data Science.",
    "course3":      "Deep reinforcement learning.",
    "course2":      "Probabilistic classifiers in machine learning.",
    "course1":      "Webapps from back to front.",

    // Publicaciones
    "tab2-title1":    "Journal Articles",
    "tab2-title2":    "Papers",
    "tab2-title2b":   "Papers",
    "tab2-title3":    "Conferences",
    "pub-link-text":  "→ View article",
    "pub-venue-1":    "Journal of Computer Science & Technology (JCST) — October 2024.",
    "pub-venue-2":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2025 — Universidad Nacional de Cuyo (UNCUYO), Mendoza, Argentina.",
    "pub-venue-3":    "1st GOBLIN Workshop on Knowledge Graph Technologies (GOBLIN25) — Leipzig, Germany, 2025.",
    "pub-venue-4":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2024 — Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), Puerto Madryn, Argentina.",
    "pub-venue-5":    "XI Jornadas de Cloud Computing, Big Data & Emerging Topics — La Plata, Argentina, June 2023.",
    "pub-venue-6":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2023 — Junín, Argentina.",
    "pub-venue-7":    "Congreso Argentino de Ciencias de la Computación (CACIC) 2022 — Universidad Nacional de La Rioja (UNLaR), La Rioja, Argentina.",
    "pub-venue-8":    "Congreso Argentino de Ciencias de la Computación (CACIC) 2022 — Universidad Nacional de La Rioja (UNLaR), La Rioja, Argentina.",
    "pub-venue-9":    "X Jornadas de Cloud Computing, Big Data & Emerging Topics — La Plata, Argentina, 2022.",
    "pub-venue-10":   "Workshop de Investigadores en Ciencias de la Computación (WICC) 2022 — Mendoza, Argentina.",
    "pub-venue-11":   "Congreso Argentino de Ciencias de la Computación (CACIC) 2021 — Virtual format, October 2021.",
    "pub-iodc-meta":  "International Ocean Data Conference III (IODC-III) — March 2025, Santa Marta, Colombia.",

    // Experiencia — Software Development
    "tab3-title1":    "Software Development",
    "exp1-period":    "March 2023 — July 2024",
    "exp2-period":    "September 2021 — January 2022",
    "exp3-company":   "IT Lab — UNPSJB",
    "exp3-period":    "April 2021 — March 2023",
    "exp4-company":   "Internship — UNPSJB",
    "exp4-period":    "September 2020 — October 2021",

    // Experiencia — Academic Instruction
    "tab3-title2":    "Academic Instruction",
    "aca0-company":   "Teaching Assistant, Computer Science Fundamentals — UNPSJB",
    "aca0-period":    "February 2025 — Present",
    "aca1-company":   "Teaching Assistant, Mathematical Analysis — UNPSJB",
    "aca1-period":    "August 2021 — July 2024",
    "aca2-company":   "Student Tutor — UNPSJB",
    "aca2-period":    "April 2019 — March 2024",
    "aca3-company":   "Informatics Instructor — Fundación de Altos Estudios en Ciencias Comerciales",
    "aca3-period":    "May 2022 — August 2022",
    "aca4-company":   "Mobile Technologies Instructor — UNPSJB",
    "aca4-period":    "September 2019 — December 2019",
    "aca5-company":   "Computer Science Instructor — UNPSJB",
    "aca5-period":    "September 2019 — December 2019",

    // Contacto
    "tab4-title1":    "Contact",
    "email-label":    "Email",
    "message-title":  "Message",
    "send-button":    "Send",
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function changeLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = i18n[lang];

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    const value = t[key];
    if (value === null || value === undefined) return;

    if (key === 'cv-link') {
      el.textContent = value;
      return;
    }

    if (key === 'intro1') {
      const cvLink = el.querySelector('a.cv-link');
      const lines = value.split('\n\n');
      el.innerHTML = '';
      lines.forEach((line, i) => {
        el.appendChild(document.createTextNode(line));
        if (i < lines.length - 1) {
          el.appendChild(document.createElement('br'));
          el.appendChild(document.createElement('br'));
        }
      });
      if (cvLink) {
        el.appendChild(document.createElement('br'));
        el.appendChild(cvLink);
      }
      return;
    }

    if (key === 'greetings') {
      const promptChar = el.querySelector('.prompt-char');
      el.innerHTML = '';
      if (promptChar) {
        el.appendChild(promptChar);
        el.appendChild(document.createTextNode(' ' + value.replace(/^>\s*/, '')));
      } else {
        el.textContent = value;
      }
      return;
    }

    if (value.includes('<')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  const emailInput = document.getElementById('user_email');
  const msgTextarea = document.getElementById('user_message');
  if (emailInput) emailInput.placeholder = lang === 'es' ? 'tu@email.com' : 'your@email.com';
  if (msgTextarea) msgTextarea.placeholder = lang === 'es' ? 'Escribí tu mensaje acá...' : 'Write your message here...';

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', function () {
  applyLanguage(currentLang);
});
