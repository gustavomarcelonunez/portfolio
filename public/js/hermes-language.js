const hermesI18n = {
  es: {
    back: '← Volver al portfolio', category: 'Caso de estudio · GraphRAG · IA neuro-simbólica',
    lead: 'Una plataforma web para consultar y comparar seis grafos de conocimiento marino, generar respuestas con distintos LLMs y verificar —afirmación por afirmación— si cada respuesta está respaldada por las tripletas recuperadas.',
    'open-system': 'Abrir HERMES ↗', 'view-code': 'Ver código ↗', 'status-label': 'Estado del trabajo', 'status-value': 'En revisión · RAGE-KG 2026', 'status-detail': 'Workshop co-localizado con ISWC 2026, Bari',
    'metric-graphs': 'grafos comparables', 'metric-llms': 'LLMs de respuesta', 'metric-evals': 'evaluaciones factoriales', 'metric-best': 'mejor GF ponderada',
    'problem-kicker': 'El problema', 'problem-title': 'Una respuesta plausible no necesariamente está fundamentada',
    'problem-p1': 'GraphRAG puede recuperar un subgrafo y entregarlo como contexto a un modelo de lenguaje, pero eso no garantiza que la respuesta generada utilice realmente esa evidencia. El LLM todavía puede incorporar conocimiento paramétrico o producir afirmaciones que no aparecen en el grafo.',
    'problem-p2': 'Los evaluadores tradicionales de RAG trabajan principalmente con fragmentos de texto. HERMES traslada la evaluación al contexto estructurado de GraphRAG: tripletas explícitas de sujeto, predicado y objeto.',
    'contribution-kicker': 'Contribución científica', 'contribution-title': 'Grounding Fidelity: trazabilidad entre afirmaciones y evidencia simbólica',
    'contribution-intro': 'La contribución central de HERMES es un verificador neuro-simbólico post-generación. Descompone la respuesta en afirmaciones atómicas, contrasta cada una exclusivamente con las tripletas recuperadas y asigna uno de tres estados.',
    supported: 'Respaldada', 'supported-desc': 'Existe evidencia directa y trazable en las tripletas.', partial: 'Parcial', 'partial-desc': 'La evidencia respalda solo una parte de la afirmación.', unsupported: 'No respaldada', 'unsupported-desc': 'No hay evidencia suficiente en el subgrafo recuperado.',
    'strict-desc': 'Una medida conservadora que solo acredita afirmaciones completamente respaldadas.', 'weighted-desc': 'Una variante que reconoce evidencia parcial sin equipararla con respaldo completo.',
    'architecture-kicker': 'Arquitectura', 'architecture-title': 'Del corpus histórico a una respuesta auditable',
    'step1-title': 'Seis grafos', 'step1-desc': 'El mismo corpus y prompts; cambia el LLM constructor.', 'step2-title': 'Recuperación', 'step2-desc': 'Embeddings, selección semántica y expansión de 1–3 saltos.', 'step3-title': 'Generación', 'step3-desc': 'Un LLM responde usando las tripletas serializadas como contexto.', 'step4-title': 'Verificación', 'step4-desc': 'Cada afirmación se audita contra el subgrafo recuperado.',
    'architecture-note': 'El diseño expone toda la cadena de evidencia: consulta → nodos recuperados → subgrafo → tripletas → respuesta → verificación por afirmación.',
    'results-kicker': 'Evaluación', 'results-title': 'Un experimento factorial sobre grafos y modelos',
    'results-p1': 'La evaluación combina 10 preguntas de competencia, 6 grafos construidos con distintos LLMs y 4 modelos generadores de respuestas: 240 configuraciones, de las cuales 235 produjeron resultados válidos.',
    'results-p2': 'La Grounding Fidelity ponderada promedio fue 0.50. El modelo de respuesta tuvo un efecto dominante, mientras que la calidad y cohesión del grafo también influyeron sobre la fundamentación final.',
    'results-p3': 'La mejor combinación fue el grafo construido con GPT-4o-mini y respuestas generadas con Llama 3.3 70B, con GF ponderada de 0.95 y GF estricta de 0.91.', 'best-combination': 'Mejor combinación',
    'gallery-kicker': 'Sistema', 'gallery-title': 'La evidencia permanece visible en cada etapa', 'caption-graph': 'Selección, exploración interactiva y comparación estructural de grafos.', 'caption-metrics': 'Métricas estructurales y consulta en lenguaje natural.', 'caption-triplets': 'Respuesta acompañada por las tripletas exactas utilizadas como contexto.', 'caption-grounding': 'Verificación por afirmación, evidencia citada y resumen de Grounding Fidelity.',
    'role-kicker': 'Origen de la propuesta', 'role-title': 'De comparar grafos a evaluar la evidencia', 'role-p1': 'HERMES surgió de la necesidad de comparar, bajo condiciones controladas, cómo distintos modelos de lenguaje afectan la estructura de los grafos de conocimiento y la calidad de las respuestas obtenidas a partir de ellos.', 'role-p2': 'Durante ese desarrollo apareció una pregunta adicional: ¿cómo determinar si una respuesta está realmente fundamentada en el subgrafo recuperado? Esa necesidad dio origen a Grounding Fidelity, una métrica que cuantifica la trazabilidad de las afirmaciones generadas respecto de las tripletas utilizadas como contexto.', 'paper-authors': 'Paper: Gustavo Nuñez, Marcos Zárate y Pablo R. Fillottrani.',
    'technology-kicker': 'Tecnología y apertura', 'technology-title': 'Un prototipo reproducible y abierto', license: 'Código publicado bajo licencia MIT. El repositorio incluye resultados de evaluación y análisis de sensibilidad.',
    'cta-kicker': 'Explorar el proyecto', 'cta-title': 'Consultá un grafo, inspeccioná la evidencia y evaluá la respuesta.', contact: 'Contacto'
  },
  en: {
    back: '← Back to portfolio', category: 'Case study · GraphRAG · Neuro-symbolic AI',
    lead: 'A web platform for querying and comparing six marine knowledge graphs, generating answers with multiple LLMs, and verifying —claim by claim— whether each response is supported by the retrieved triples.',
    'open-system': 'Open HERMES ↗', 'view-code': 'View source ↗', 'status-label': 'Paper status', 'status-value': 'Under review · RAGE-KG 2026', 'status-detail': 'Workshop co-located with ISWC 2026, Bari',
    'metric-graphs': 'comparable graphs', 'metric-llms': 'answer LLMs', 'metric-evals': 'factorial evaluations', 'metric-best': 'best weighted GF',
    'problem-kicker': 'The problem', 'problem-title': 'A plausible answer is not necessarily a grounded answer',
    'problem-p1': 'GraphRAG can retrieve a subgraph and provide it to a language model as context, but this does not guarantee that the generated response actually uses that evidence. The LLM may still incorporate parametric knowledge or produce claims that do not appear in the graph.',
    'problem-p2': 'Traditional RAG evaluators work mainly with text chunks. HERMES moves evaluation into GraphRAG’s structured context: explicit subject, predicate, and object triples.',
    'contribution-kicker': 'Scientific contribution', 'contribution-title': 'Grounding Fidelity: traceability between claims and symbolic evidence',
    'contribution-intro': 'HERMES’s central contribution is a post-generation neuro-symbolic verifier. It decomposes an answer into atomic claims, checks each one exclusively against the retrieved triples, and assigns one of three states.',
    supported: 'Supported', 'supported-desc': 'Direct, traceable evidence exists in the triples.', partial: 'Partial', 'partial-desc': 'The evidence supports only part of the claim.', unsupported: 'Unsupported', 'unsupported-desc': 'The retrieved subgraph contains insufficient evidence.',
    'strict-desc': 'A conservative measure that credits only fully supported claims.', 'weighted-desc': 'A variant that recognizes partial evidence without equating it with full support.',
    'architecture-kicker': 'Architecture', 'architecture-title': 'From historical corpus to auditable answer',
    'step1-title': 'Six graphs', 'step1-desc': 'The corpus and prompts remain fixed; the construction LLM changes.', 'step2-title': 'Retrieval', 'step2-desc': 'Embeddings, semantic selection, and 1–3 hop expansion.', 'step3-title': 'Generation', 'step3-desc': 'An LLM answers using the serialized triples as context.', 'step4-title': 'Verification', 'step4-desc': 'Every claim is audited against the retrieved subgraph.',
    'architecture-note': 'The design exposes the full evidence chain: query → retrieved nodes → subgraph → triples → answer → claim-level verification.',
    'results-kicker': 'Evaluation', 'results-title': 'A factorial experiment across graphs and models',
    'results-p1': 'The evaluation combines 10 competency questions, 6 graphs constructed with different LLMs, and 4 answer-generation models: 240 configurations, of which 235 produced valid results.',
    'results-p2': 'Mean weighted Grounding Fidelity was 0.50. The answer-generation model had the dominant effect, while graph quality and cohesion also influenced final grounding.',
    'results-p3': 'The best combination paired the GPT-4o-mini-constructed graph with Llama 3.3 70B answers, reaching 0.95 weighted GF and 0.91 strict GF.', 'best-combination': 'Best combination',
    'gallery-kicker': 'System', 'gallery-title': 'Evidence remains visible at every stage', 'caption-graph': 'Graph selection, interactive exploration, and structural comparison.', 'caption-metrics': 'Structural metrics and natural-language querying.', 'caption-triplets': 'The answer alongside the exact triples used as context.', 'caption-grounding': 'Claim-level verification, cited evidence, and Grounding Fidelity summary.',
    'role-kicker': 'Origin of the proposal', 'role-title': 'From comparing graphs to evaluating evidence', 'role-p1': 'HERMES emerged from the need to compare, under controlled conditions, how different language models affect knowledge graph structure and the quality of the answers obtained from those graphs.', 'role-p2': 'That development raised an additional question: how can we determine whether an answer is genuinely grounded in the retrieved subgraph? This need led to Grounding Fidelity, a metric that quantifies the traceability of generated claims to the triples used as context.', 'paper-authors': 'Paper: Gustavo Nuñez, Marcos Zárate, and Pablo R. Fillottrani.',
    'technology-kicker': 'Technology and openness', 'technology-title': 'An open, reproducible prototype', license: 'Code released under the MIT License. The repository includes evaluation results and sensitivity analyses.',
    'cta-kicker': 'Explore the project', 'cta-title': 'Query a graph, inspect the evidence, and evaluate the answer.', contact: 'Contact'
  },
  it: {
    back: '← Torna al portfolio', category: 'Caso di studio · GraphRAG · IA neuro-simbolica',
    lead: 'Una piattaforma web per interrogare e confrontare sei grafi di conoscenza marina, generare risposte con diversi LLM e verificare —affermazione per affermazione— se ogni risposta è supportata dalle triple recuperate.',
    'open-system': 'Apri HERMES ↗', 'view-code': 'Vedi il codice ↗', 'status-label': 'Stato del lavoro', 'status-value': 'In revisione · RAGE-KG 2026', 'status-detail': 'Workshop co-locato con ISWC 2026, Bari',
    'metric-graphs': 'grafi confrontabili', 'metric-llms': 'LLM di risposta', 'metric-evals': 'valutazioni fattoriali', 'metric-best': 'miglior GF ponderata',
    'problem-kicker': 'Il problema', 'problem-title': 'Una risposta plausibile non è necessariamente fondata',
    'problem-p1': 'GraphRAG può recuperare un sottografo e fornirlo come contesto a un modello linguistico, ma ciò non garantisce che la risposta generata utilizzi davvero tali evidenze. L’LLM può ancora incorporare conoscenza parametrica o produrre affermazioni assenti dal grafo.',
    'problem-p2': 'I valutatori RAG tradizionali lavorano soprattutto con frammenti di testo. HERMES porta la valutazione nel contesto strutturato di GraphRAG: triple esplicite soggetto, predicato e oggetto.',
    'contribution-kicker': 'Contributo scientifico', 'contribution-title': 'Grounding Fidelity: tracciabilità tra affermazioni ed evidenza simbolica',
    'contribution-intro': 'Il contributo centrale di HERMES è un verificatore neuro-simbolico post-generazione. Scompone la risposta in affermazioni atomiche, confronta ciascuna esclusivamente con le triple recuperate e assegna uno dei tre stati.',
    supported: 'Supportata', 'supported-desc': 'Esiste evidenza diretta e tracciabile nelle triple.', partial: 'Parziale', 'partial-desc': 'L’evidenza supporta solo una parte dell’affermazione.', unsupported: 'Non supportata', 'unsupported-desc': 'Il sottografo recuperato non contiene evidenza sufficiente.',
    'strict-desc': 'Una misura conservativa che accredita solo affermazioni completamente supportate.', 'weighted-desc': 'Una variante che riconosce l’evidenza parziale senza equipararla al supporto completo.',
    'architecture-kicker': 'Architettura', 'architecture-title': 'Dal corpus storico a una risposta verificabile',
    'step1-title': 'Sei grafi', 'step1-desc': 'Corpus e prompt rimangono fissi; cambia l’LLM di costruzione.', 'step2-title': 'Recupero', 'step2-desc': 'Embedding, selezione semantica ed espansione di 1–3 salti.', 'step3-title': 'Generazione', 'step3-desc': 'Un LLM risponde usando le triple serializzate come contesto.', 'step4-title': 'Verifica', 'step4-desc': 'Ogni affermazione viene verificata rispetto al sottografo recuperato.',
    'architecture-note': 'Il design espone l’intera catena di evidenze: query → nodi recuperati → sottografo → triple → risposta → verifica per affermazione.',
    'results-kicker': 'Valutazione', 'results-title': 'Un esperimento fattoriale su grafi e modelli',
    'results-p1': 'La valutazione combina 10 domande di competenza, 6 grafi costruiti con LLM diversi e 4 modelli di generazione: 240 configurazioni, delle quali 235 hanno prodotto risultati validi.',
    'results-p2': 'La Grounding Fidelity ponderata media è stata 0,50. Il modello di risposta ha avuto l’effetto dominante, mentre qualità e coesione del grafo hanno influenzato il grounding finale.',
    'results-p3': 'La combinazione migliore ha associato il grafo costruito con GPT-4o-mini alle risposte di Llama 3.3 70B, raggiungendo 0,95 di GF ponderata e 0,91 di GF strict.', 'best-combination': 'Miglior combinazione',
    'gallery-kicker': 'Sistema', 'gallery-title': 'L’evidenza rimane visibile in ogni fase', 'caption-graph': 'Selezione, esplorazione interattiva e confronto strutturale dei grafi.', 'caption-metrics': 'Metriche strutturali e interrogazione in linguaggio naturale.', 'caption-triplets': 'La risposta insieme alle triple esatte utilizzate come contesto.', 'caption-grounding': 'Verifica per affermazione, evidenze citate e sintesi della Grounding Fidelity.',
    'role-kicker': 'Origine della proposta', 'role-title': 'Dal confronto dei grafi alla valutazione delle evidenze', 'role-p1': 'HERMES nasce dalla necessità di confrontare, in condizioni controllate, come diversi modelli linguistici influenzino la struttura dei grafi di conoscenza e la qualità delle risposte ottenute da essi.', 'role-p2': 'Durante lo sviluppo è emersa un’ulteriore domanda: come stabilire se una risposta sia realmente fondata sul sottografo recuperato? Da questa esigenza nasce Grounding Fidelity, una metrica che quantifica la tracciabilità delle affermazioni generate rispetto alle triple utilizzate come contesto.', 'paper-authors': 'Paper: Gustavo Nuñez, Marcos Zárate e Pablo R. Fillottrani.',
    'technology-kicker': 'Tecnologia e apertura', 'technology-title': 'Un prototipo aperto e riproducibile', license: 'Codice pubblicato con licenza MIT. Il repository include risultati di valutazione e analisi di sensibilità.',
    'cta-kicker': 'Esplora il progetto', 'cta-title': 'Interroga un grafo, ispeziona l’evidenza e valuta la risposta.', contact: 'Contatto'
  }
};

function applyHermesLanguage(lang) {
  const dictionary = hermesI18n[lang] || hermesI18n.es;
  document.querySelectorAll('[data-key]').forEach(element => {
    const value = dictionary[element.dataset.key];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', button.dataset.lang === lang ? 'true' : 'false');
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => applyHermesLanguage(button.dataset.lang));
  });
  applyHermesLanguage(localStorage.getItem('lang') || 'es');
});
