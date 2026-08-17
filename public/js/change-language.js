const i18n = {
  es: {
    // Hero
    "greetings":    "> Saludos! Mi nombre es",
    "intro1":       "Soy Licenciado en Informática egresado en la Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), y actualmente realizo un doctorado en Ciencias de la Computación en la Universidad Nacional del Sur (UNS), Bahía Blanca. Desempeño mis actividades de investigación en CESIMAR-CONICET, Puerto Madryn, Argentina.\n\nEste espacio refleja mis proyectos, investigaciones y publicaciones en IA, sistemas de conocimiento y ciencias del mar. Si querés saber más, no dudes en contactarme.",
    "cv-link":      "Descargar CV →",
    "positioning": "Doctorando especializado en Knowledge Graphs, LLMs y razonamiento neuro-simbólico aplicado a las ciencias del mar.",
    "cta-research": "Ver investigación", "cta-projects": "Explorar proyectos",
    "highlight-iswc": "Trabajo doctoral aceptado en el Doctoral Consortium",
    "highlight-affiliation": "Investigación interdisciplinaria en IA y ciencias del mar",
    "highlight-hermes": "Evaluación trazable de sistemas GraphRAG",

    // Tabs
    "tab-button-graph":     "Grafo",
    "tab-button0":          "Proyectos",
    "tab-button-research":  "Investigación",
    "tab-button1":          "Historia académica",
    "tab-button2":          "Publicaciones",
    "tab-button3":          "Experiencia",
    "tab-button4":          "Contacto",


    // Proyectos — tags
    "proj-hermes-tag":   "GraphRAG · KG · LLM",
    "proj-aquamind-tag": "Multiagente · Informática marina",
    "proj-botgbif-tag":  "Bot · Linked Open Data",
    "proj-obisbot-tag":  "Bot · Oceanografía",
    "proj-odp-tag":      "Dashboard · LOD",
    "proj-mapyzer-tag":  "Visualización · GIS",

    // Proyectos — descripciones
    "proj-hermes-desc":   "Plataforma web de GraphRAG que genera y compara Knowledge Graphs a partir de un corpus histórico de biología marina argentina (Carrara, 1952). Soporta 6 KGs y 4 LLMs para Q&A en español con verificación simbólica post-hoc.",
    "proj-aquamind-desc": "Prototipo multiagente que valida taxonomía con WoRMS, recupera ocurrencias de OBIS, las contextualiza mediante ecorregiones MEOW y genera síntesis interpretativas con LLMs.",
    "proj-botgbif-desc":  "Prototipo conversacional que busca datasets mediante la API de GBIF y permite consultar en lenguaje natural tanto su metadata como las ocurrencias de un dataset seleccionado.",
    "proj-obisbot-desc":  "Prototipo conversacional que localiza datasets de OBIS mediante el nombre científico completo y permite consultar su metadata o las ocurrencias de un dataset seleccionado.",
    "proj-odp-desc":      "Plataforma publicada para integrar y visualizar información de biodiversidad marina y oceanografía mediante un modelo conceptual, Linked Open Data y consultas SPARQL.",
    "proj-mapyzer-desc":  "Plataforma web para cargar, organizar y visualizar datos espacio-temporales mediante mapas dinámicos, filtros y una línea de tiempo interactiva.",
    "impact-label": "Aporte:",
    "proj-hermes-impact": "Hace comparable la calidad estructural y el grounding de múltiples KGs y LLMs sobre un mismo corpus.",
    "proj-aquamind-impact": "Abstrae APIs, grandes volúmenes de datos y procesamiento geoespacial en un único flujo orientado al científico marino.",
    "proj-botgbif-impact": "Convierte una búsqueda técnica en GBIF en una exploración guiada y conversacional de datasets de biodiversidad.",
    "proj-obisbot-impact": "Reduce las barreras técnicas para explorar datos abiertos de biodiversidad marina desde una interfaz orientada a científicos del mar.",
    "proj-odp-impact": "Conecta sensores, especies, ocurrencias y variables ambientales para apoyar investigación y conservación en el Atlántico Sur.",
    "proj-mapyzer-impact": "Acerca capacidades GIS a organizaciones con pocos recursos técnicos y datos dispersos o sin georreferenciar.",
    "proj-visit":         "Ver proyecto →",
    "proj-case-study":    "Ver caso de estudio →",
    "kg-popup-link-text": "Visitar →",

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
    "name-label":     "Nombre",
    "email-label":    "Email",
    "message-title":  "Mensaje",
    "send-button":    "Enviar",
    "contact-intro": "Estoy abierto a colaboraciones académicas y tecnológicas en Knowledge Graphs, GraphRAG, evaluación de LLMs e informática marina. El correo ingresado será verificado antes de entregar el mensaje.",
  },

  en: {
    // Hero
    "greetings":    "> Hi! My name is",
    "intro1":       "I hold a degree in Computer Science from the Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), and I am currently pursuing a PhD in Computer Science at the Universidad Nacional del Sur (UNS), Bahía Blanca. I carry out my research at CESIMAR-CONICET, Puerto Madryn, Argentina.\n\nThis space reflects my projects, research and publications in AI, knowledge systems and marine science. Feel free to reach out!",
    "cv-link":      "Download CV →",
    "positioning": "PhD candidate specializing in Knowledge Graphs, LLMs, and neuro-symbolic reasoning for marine science.",
    "cta-research": "View research", "cta-projects": "Explore projects",
    "highlight-iswc": "Doctoral work accepted at the Doctoral Consortium",
    "highlight-affiliation": "Interdisciplinary research in AI and marine science",
    "highlight-hermes": "Traceable evaluation of GraphRAG systems",

    // Tabs
    "tab-button-graph":     "Graph",
    "tab-button0":          "Projects",
    "tab-button-research":  "Research",
    "tab-button1":          "Academic history",
    "tab-button2":          "Publications",
    "tab-button3":          "Experience",
    "tab-button4":          "Contact",


    // Proyectos — tags
    "proj-hermes-tag":   "GraphRAG · KG · LLM",
    "proj-aquamind-tag": "Multi-agent · Marine informatics",
    "proj-botgbif-tag":  "Bot · Linked Open Data",
    "proj-obisbot-tag":  "Bot · Oceanography",
    "proj-odp-tag":      "Dashboard · LOD",
    "proj-mapyzer-tag":  "Visualization · GIS",

    // Proyectos — descripciones
    "proj-hermes-desc":   "GraphRAG web platform that generates and compares Knowledge Graphs from a historical Argentine marine biology corpus (Carrara, 1952). Supports 6 KGs and 4 LLMs for Spanish Q&A with post-hoc symbolic verification.",
    "proj-aquamind-desc": "Multi-agent prototype that validates taxonomy with WoRMS, retrieves OBIS occurrences, contextualizes them through MEOW ecoregions, and generates interpretive syntheses with LLMs.",
    "proj-botgbif-desc":  "Conversational prototype that searches datasets through the GBIF API and supports natural-language questions over both their metadata and the occurrences of a selected dataset.",
    "proj-obisbot-desc":  "Conversational prototype that locates OBIS datasets by full scientific name and supports questions over their metadata or the occurrences of a selected dataset.",
    "proj-odp-desc":      "Published platform that integrates and visualizes marine biodiversity and oceanographic information through a conceptual model, Linked Open Data, and SPARQL queries.",
    "proj-mapyzer-desc":  "Web platform for loading, organizing, and visualizing spatio-temporal data through dynamic maps, filters, and an interactive timeline.",
    "impact-label": "Impact:",
    "proj-hermes-impact": "Makes the structural quality and grounding of multiple KGs and LLMs comparable on the same corpus.",
    "proj-aquamind-impact": "Encapsulates APIs, large-scale data access, and geospatial processing in a single workflow designed for marine scientists.",
    "proj-botgbif-impact": "Turns a technical GBIF search into a guided, conversational exploration of biodiversity datasets.",
    "proj-obisbot-impact": "Lowers technical barriers to exploring open marine biodiversity data through an interface designed for marine scientists.",
    "proj-odp-impact": "Connects sensors, species, occurrences, and environmental variables to support research and conservation in the South Atlantic.",
    "proj-mapyzer-impact": "Brings GIS capabilities to organizations with limited technical resources and scattered or non-georeferenced data.",
    "proj-visit":         "View project →",
    "proj-case-study":    "View case study →",
    "kg-popup-link-text": "Visit →",

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
    "name-label":     "Name",
    "email-label":    "Email",
    "message-title":  "Message",
    "send-button":    "Send",
    "contact-intro": "I am open to academic and technology collaborations in Knowledge Graphs, GraphRAG, LLM evaluation, and marine informatics. The email address entered will be verified before the message is delivered.",
  },

  it: {
    // Hero
    "greetings":    "> Salve! Mi chiamo",
    "intro1":       "Sono Laureato in Informatica presso l'Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), e attualmente sto svolgendo un dottorato in Scienze Informatiche presso l'Universidad Nacional del Sur (UNS), Bahía Blanca. Svolgo le mie attività di ricerca presso il CESIMAR-CONICET, Puerto Madryn, Argentina.\n\nQuesto spazio riflette i miei progetti, ricerche e pubblicazioni in IA, sistemi di conoscenza e scienze del mare. Se vuoi saperne di più, non esitare a contattarmi.",
    "cv-link":      "Scarica CV →",
    "positioning": "Dottorando specializzato in Knowledge Graphs, LLM e ragionamento neuro-simbolico applicato alle scienze del mare.",
    "cta-research": "Vedi la ricerca", "cta-projects": "Esplora i progetti",
    "highlight-iswc": "Lavoro di dottorato accettato al Doctoral Consortium",
    "highlight-affiliation": "Ricerca interdisciplinare in IA e scienze del mare",
    "highlight-hermes": "Valutazione tracciabile dei sistemi GraphRAG",

    // Tabs
    "tab-button-graph":     "Grafo",
    "tab-button0":          "Progetti",
    "tab-button-research":  "Ricerca",
    "tab-button1":          "Percorso accademico",
    "tab-button2":          "Pubblicazioni",
    "tab-button3":          "Esperienza",
    "tab-button4":          "Contatto",

    // Proyectos — tags
    "proj-hermes-tag":   "GraphRAG · KG · LLM",
    "proj-aquamind-tag": "Multi-agente · Informatica marina",
    "proj-botgbif-tag":  "Bot · Linked Open Data",
    "proj-obisbot-tag":  "Bot · Oceanografia",
    "proj-odp-tag":      "Dashboard · LOD",
    "proj-mapyzer-tag":  "Visualizzazione · GIS",

    // Proyectos — descripciones
    "proj-hermes-desc":   "Piattaforma web GraphRAG che genera e confronta Knowledge Graph a partire da un corpus storico di biologia marina argentina (Carrara, 1952). Supporta 6 KG e 4 LLM per Q&A in spagnolo con verifica simbolica post-hoc.",
    "proj-aquamind-desc": "Prototipo multi-agente che convalida la tassonomia con WoRMS, recupera le occorrenze OBIS, le contestualizza tramite le ecoregioni MEOW e genera sintesi interpretative con LLM.",
    "proj-botgbif-desc":  "Prototipo conversazionale che cerca dataset tramite l’API GBIF e consente domande in linguaggio naturale sia sui metadati sia sulle occorrenze di un dataset selezionato.",
    "proj-obisbot-desc":  "Prototipo conversazionale che individua dataset OBIS tramite il nome scientifico completo e consente domande sui metadati o sulle occorrenze di un dataset selezionato.",
    "proj-odp-desc":      "Piattaforma pubblicata che integra e visualizza informazioni sulla biodiversità marina e l’oceanografia tramite un modello concettuale, Linked Open Data e query SPARQL.",
    "proj-mapyzer-desc":  "Piattaforma web per caricare, organizzare e visualizzare dati spazio-temporali mediante mappe dinamiche, filtri e una linea temporale interattiva.",
    "impact-label": "Contributo:",
    "proj-hermes-impact": "Rende comparabili la qualità strutturale e il grounding di diversi KG e LLM sullo stesso corpus.",
    "proj-aquamind-impact": "Racchiude API, accesso a grandi volumi di dati ed elaborazione geospaziale in un unico flusso pensato per gli scienziati marini.",
    "proj-botgbif-impact": "Trasforma una ricerca tecnica in GBIF in un’esplorazione guidata e conversazionale dei dataset sulla biodiversità.",
    "proj-obisbot-impact": "Riduce le barriere tecniche all’esplorazione dei dati aperti sulla biodiversità marina con un’interfaccia pensata per gli scienziati marini.",
    "proj-odp-impact": "Collega sensori, specie, occorrenze e variabili ambientali per sostenere ricerca e conservazione nell’Atlantico meridionale.",
    "proj-mapyzer-impact": "Porta funzionalità GIS a organizzazioni con risorse tecniche limitate e dati dispersi o non georeferenziati.",
    "proj-visit":         "Vedi progetto →",
    "proj-case-study":    "Vedi caso di studio →",
    "kg-popup-link-text": "Visita →",

    // Investigación
    "research-title1":  "Linea di ricerca dottorale",
    "research-intro":   "La mia ricerca dottorale si colloca all'intersezione tra l'IA neuro-simbolica e i sistemi di conoscenza marina. Studio come i grafi di conoscenza marina possano essere integrati con i Large Language Models attraverso framework di recupero e ragionamento neuro-simbolico, per sostenere un'inferenza fondata (<em>grounded</em>) e l'interazione in linguaggio naturale su dati eterogenei delle scienze del mare — un approccio noto come <em>ontology-grounded reasoning</em>. Il lavoro esplora metodi di recupero basati su grafi, incluso GraphRAG, insieme ad architetture multi-agente per l'estrazione, il recupero e l'analisi della conoscenza in dati di biodiversità marina e oceanografia. Come parte della valutazione, definisco metriche come <strong>solidità semantica (<em>semantic soundness</em>)</strong> e <strong>fedeltà di fondazione (<em>grounding fidelity</em>)</strong> per misurare in che misura le risposte generate siano tracciabili al grafo simbolico sottostante.",
    "research-title2":  "Supervisione",
    "advisor1-role":    "Direttore — Universidad Nacional del Sur (UNS)",
    "advisor2-role":    "Co-direttore — CESIMAR-CONICET / UNPSJB",
    "research-title3":  "Affiliazione istituzionale",
    "research-period":  "Agosto 2024 — Presente",
    "research-title4":  "Aree di interesse",
    "rtag1": "IA neuro-simbolica",
    "rtag2": "Grafi di conoscenza",
    "rtag3": "RAG / GraphRAG",
    "rtag4": "Web semantico",
    "rtag5": "Valutazione di LLM",
    "rtag6": "Dati aperti collegati",

    // Historia académica
    "tab1-title1":  "Formazione Universitaria",
    "tab1-title2":  "Corsi",
    "tab1-title3":  "Certificazioni",
    "phd":          "<strong>2024 - presente:</strong> Dottorato in Scienze Informatiche. Universidad Nacional del Sur (UNS), Puerto Madryn.",
    "degree":       "<strong>2018 - 2024:</strong> Laurea in Informatica. UNPSJB, Puerto Madryn.",
    "analyst":      "<strong>2018 - 2021:</strong> Analista Programmatore Universitario. UNPSJB, Puerto Madryn.",
    "course7":      "Fondamenti di Intelligenza Artificiale Spiegabile.",
    "course7-meta": "UNS, 2026, Bahía Blanca, Argentina.",
    "course6":      "Riconoscimento di Pattern e Apprendimento Automatico.",
    "course6-meta": "UNS, 2025, Bahía Blanca, Argentina.",
    "course5":      "Elaborazione di Immagini e Visione Artificiale I.",
    "course5-meta": "UNS, 2025, Bahía Blanca, Argentina.",
    "course-adapt": "Corso di formazione sulle migliori pratiche oceaniche.",
    "course-gov":   "Governance ed Etica nella Gestione dell'Informazione.",
    "course-gov-meta": "UNS, 2024, Bahía Blanca.",
    "course4":      "Introduzione al linguaggio R e Python applicato alla Scienza dei Dati.",
    "course3":      "Apprendimento profondo per rinforzo.",
    "course2":      "Classificatori probabilistici nell'apprendimento automatico.",
    "course1":      "Webapp dal back-end al front-end.",

    // Publicaciones
    "tab2-title1":    "Articoli su Riviste",
    "tab2-title2":    "Paper",
    "tab2-title2b":   "Paper",
    "tab2-title3":    "Conferenze",
    "pub-link-text":  "→ Vedi articolo",
    "pub-venue-1":    "Journal of Computer Science & Technology (JCST) — Ottobre 2024.",
    "pub-venue-2":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2025 — Universidad Nacional de Cuyo (UNCUYO), Mendoza, Argentina.",
    "pub-venue-3":    "1st GOBLIN Workshop on Knowledge Graph Technologies (GOBLIN25) — Lipsia, Germania, 2025.",
    "pub-venue-4":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2024 — Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB), Puerto Madryn, Argentina.",
    "pub-venue-5":    "XI Jornadas de Cloud Computing, Big Data & Emerging Topics — La Plata, Argentina, giugno 2023.",
    "pub-venue-6":    "Workshop de Investigadores en Ciencias de la Computación (WICC) 2023 — Junín, Argentina.",
    "pub-venue-7":    "Congreso Argentino de Ciencias de la Computación (CACIC) 2022 — Universidad Nacional de La Rioja (UNLaR), La Rioja, Argentina.",
    "pub-venue-8":    "Congreso Argentino de Ciencias de la Computación (CACIC) 2022 — Universidad Nacional de La Rioja (UNLaR), La Rioja, Argentina.",
    "pub-venue-9":    "X Jornadas de Cloud Computing, Big Data & Emerging Topics — La Plata, Argentina, 2022.",
    "pub-venue-10":   "Workshop de Investigadores en Ciencias de la Computación (WICC) 2022 — Mendoza, Argentina.",
    "pub-venue-11":   "Congreso Argentino de Ciencias de la Computación (CACIC) 2021 — Modalità virtuale, ottobre 2021.",
    "pub-iodc-meta":  "International Ocean Data Conference III (IODC-III) — Marzo 2025, Santa Marta, Colombia.",

    // Experiencia — Desarrollo de Software
    "tab3-title1":    "Sviluppo Software",
    "exp1-period":    "Marzo 2023 — Luglio 2024",
    "exp2-period":    "Settembre 2021 — Gennaio 2022",
    "exp3-company":   "Laboratorio di Informatica — UNPSJB",
    "exp3-period":    "Aprile 2021 — Marzo 2023",
    "exp4-company":   "Tirocinio — UNPSJB",
    "exp4-period":    "Settembre 2020 — Ottobre 2021",

    // Experiencia — Instrucción Académica
    "tab3-title2":    "Didattica Universitaria",
    "aca0-company":   "Assistente di Elementi di Informatica — UNPSJB",
    "aca0-period":    "Febbraio 2025 — Presente",
    "aca1-company":   "Assistente di Analisi Matematica — UNPSJB",
    "aca1-period":    "Agosto 2021 — Luglio 2024",
    "aca2-company":   "Tutor Studenti — UNPSJB",
    "aca2-period":    "Aprile 2019 — Marzo 2024",
    "aca3-company":   "Docente di Informatica — Fundación de Altos Estudios en Ciencias Comerciales",
    "aca3-period":    "Maggio 2022 — Agosto 2022",
    "aca4-company":   "Docente di Tecnologie Mobili — UNPSJB",
    "aca4-period":    "Settembre 2019 — Dicembre 2019",
    "aca5-company":   "Docente di Informatica — UNPSJB",
    "aca5-period":    "Settembre 2019 — Dicembre 2019",

    // Contacto
    "tab4-title1":    "Contatto",
    "name-label":     "Nome",
    "email-label":    "Email",
    "message-title":  "Messaggio",
    "send-button":    "Invia",
    "contact-intro": "Sono disponibile per collaborazioni accademiche e tecnologiche su Knowledge Graphs, GraphRAG, valutazione degli LLM e informatica marina. L'indirizzo email inserito sarà verificato prima della consegna del messaggio.",
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function changeLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyLanguage(lang);
  if (typeof buildKnowledgeGraph === 'function') {
    buildKnowledgeGraph();
  }
}

function applyLanguage(lang) {
  const t = i18n[lang];

  document.querySelectorAll('.language-buttons [data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', button.dataset.lang === lang ? 'true' : 'false');
  });

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

  const nameInput = document.getElementById('user_name');
  const emailInput = document.getElementById('user_email');
  const msgTextarea = document.getElementById('user_message');
  if (nameInput) nameInput.placeholder = lang === 'es' ? 'Tu nombre' : lang === 'it' ? 'Il tuo nome' : 'Your name';
  if (emailInput) emailInput.placeholder = lang === 'es' ? 'tu@email.com' : lang === 'it' ? 'tuo@email.com' : 'your@email.com';
  if (msgTextarea) msgTextarea.placeholder = lang === 'es' ? 'Escribí tu mensaje acá...' : lang === 'it' ? 'Scrivi il tuo messaggio qui...' : 'Write your message here...';

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', function () {
  applyLanguage(currentLang);
});
