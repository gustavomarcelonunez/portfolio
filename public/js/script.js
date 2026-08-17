document.addEventListener('DOMContentLoaded', function () {

  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  const noTab = document.getElementById('content-no-tab');

  function activateTab(targetId) {
    tabs.forEach(t => {
      const isActive = t.dataset.content === targetId;
      t.classList.toggle('active-tab', isActive);
      t.setAttribute('aria-selected', isActive);
      t.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    panels.forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-hidden', 'true');
    });

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add('active');
      target.setAttribute('aria-hidden', 'false');
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      activateTab(this.dataset.content);
    });
  });

  tabs.forEach((tab, index) => {
    tab.id = tab.id || `tab-${index}`;
    const panel = document.getElementById(tab.dataset.content);
    if (panel) {
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);
    }
    tab.addEventListener('keydown', event => {
      let nextIndex = null;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex].dataset.content);
    });
  });

  document.querySelectorAll('[data-tab-target]').forEach(button => {
    button.addEventListener('click', () => {
      activateTab(button.dataset.tabTarget);
      document.querySelector('.tabs-nav')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  const hashTarget = window.location.hash.slice(1);
  const initialTarget = document.getElementById(hashTarget)?.classList.contains('tab-panel')
    ? hashTarget
    : 'content-no-tab';
  activateTab(initialTarget);

  buildKnowledgeGraph();
});

// Datos traducibles de cada nodo (label + descripción), por idioma
const kgNodeText = {
  es: {
    me:       { label: 'Gustavo M. Nuñez', desc: 'Doctorando en Ciencias de la Computación, trabajando en IA neuro-simbólica y sistemas de conocimiento marino.' },
    llm:      { label: 'LLM',               desc: 'Large Language Models utilizados en mi investigación: GPT-4o-mini, Mixtral 8×7B, Mistral 7B, Ministral 14B, LLaMA3 8B, entre otros, para tareas de extracción de conocimiento y respuesta de preguntas.' },
    conicet:  { label: 'CONICET',           desc: 'Consejo Nacional de Investigaciones Científicas y Técnicas. Organismo a través del cual desarrollo mi investigación doctoral.' },
    hermes:   { label: 'HERMES',            desc: 'Plataforma de GraphRAG que genera y compara Knowledge Graphs a partir de un corpus histórico de biología marina argentina, con verificación simbólica post-hoc.' },
    botgbif:  { label: 'BotGBIF',           desc: 'Bot conversacional que permite consultar datos de biodiversidad de GBIF en lenguaje natural.' },
    aquamind: { label: 'AquaMind',          desc: 'Sistema multiagente que integra WoRMS y OBIS para análisis de ocurrencia de especies marinas mediante lenguaje natural.' },
    gf:       { label: 'Grounding Fidelity',desc: 'Métrica que mide en qué medida las respuestas generadas por un sistema RAG/GraphRAG son trazables al grafo simbólico subyacente. Parte central de la evaluación de mi tesis doctoral.' },
    obisbot:  { label: 'OBIS Bot',          desc: 'Bot conversacional para explorar datos del Ocean Biodiversity Information System (OBIS) en lenguaje natural.' },
    uns:      { label: 'UNS',               desc: 'Universidad Nacional del Sur, Bahía Blanca. Institución donde realizo mi doctorado en Ciencias de la Computación.' },
    cenpat:   { label: 'CESIMAR-CENPAT',    desc: 'Centro para el Estudio de Sistemas Marinos, parte del Centro Nacional Patagónico (CENPAT-CONICET), Puerto Madryn. Lugar donde desarrollo mis actividades de investigación.' },
    graphrag: { label: 'GraphRAG',          desc: 'Extensión de RAG (Retrieval-Augmented Generation) basada en grafos de conocimiento, utilizada como mecanismo de recuperación en mi investigación.' }
  },
  en: {
    me:       { label: 'Gustavo M. Nuñez', desc: 'PhD candidate in Computer Science, working on neuro-symbolic AI and marine knowledge systems.' },
    llm:      { label: 'LLM',               desc: 'Large Language Models used in my research: GPT-4o-mini, Mixtral 8×7B, Mistral 7B, Ministral 14B, LLaMA3 8B, among others, for knowledge extraction and question-answering tasks.' },
    conicet:  { label: 'CONICET',           desc: 'National Scientific and Technical Research Council (Argentina). The institution through which I carry out my doctoral research.' },
    hermes:   { label: 'HERMES',            desc: 'GraphRAG platform that generates and compares Knowledge Graphs from a historical Argentine marine biology corpus, with post-hoc symbolic verification.' },
    botgbif:  { label: 'BotGBIF',           desc: 'Conversational bot that allows querying GBIF biodiversity data in natural language.' },
    aquamind: { label: 'AquaMind',          desc: 'Multi-agent system that integrates WoRMS and OBIS for marine species occurrence analysis through natural language.' },
    gf:       { label: 'Grounding Fidelity',desc: 'Metric measuring to what extent answers generated by a RAG/GraphRAG system are traceable to the underlying symbolic graph. Central part of my doctoral thesis evaluation.' },
    obisbot:  { label: 'OBIS Bot',          desc: 'Conversational bot for exploring Ocean Biodiversity Information System (OBIS) data in natural language.' },
    uns:      { label: 'UNS',               desc: 'Universidad Nacional del Sur, Bahía Blanca. The institution where I pursue my PhD in Computer Science.' },
    cenpat:   { label: 'CESIMAR-CENPAT',    desc: 'Center for the Study of Marine Systems, part of the Patagonian National Center (CENPAT-CONICET), Puerto Madryn. Where I carry out my research activities.' },
    graphrag: { label: 'GraphRAG',          desc: 'Graph-based extension of RAG (Retrieval-Augmented Generation), used as a retrieval mechanism in my research.' }
  },
  it: {
    me:       { label: 'Gustavo M. Nuñez', desc: 'Dottorando in Informatica, con ricerche sull\'IA neuro-simbolica e i sistemi di conoscenza marina.' },
    llm:      { label: 'LLM',               desc: 'Grandi Modelli Linguistici utilizzati nella mia ricerca: GPT-4o-mini, Mixtral 8×7B, Mistral 7B, Ministral 14B, LLaMA3 8B, tra gli altri, per attività di estrazione della conoscenza e risposta a domande.' },
    conicet:  { label: 'CONICET',           desc: 'Consiglio Nazionale delle Ricerche Scientifiche e Tecniche (Argentina). L\'istituzione attraverso cui svolgo la mia ricerca dottorale.' },
    hermes:   { label: 'HERMES',            desc: 'Piattaforma GraphRAG che genera e confronta Knowledge Graph da un corpus storico di biologia marina argentina, con verifica simbolica post-hoc.' },
    botgbif:  { label: 'BotGBIF',           desc: 'Bot conversazionale che consente di interrogare i dati di biodiversità GBIF in linguaggio naturale.' },
    aquamind: { label: 'AquaMind',          desc: 'Sistema multi-agente che integra WoRMS e OBIS per l\'analisi di occorrenza di specie marine tramite linguaggio naturale.' },
    gf:       { label: 'Grounding Fidelity',desc: 'Metrica che misura in che misura le risposte generate da un sistema RAG/GraphRAG sono tracciabili al grafo simbolico sottostante. Parte centrale della valutazione della mia tesi dottorale.' },
    obisbot:  { label: 'OBIS Bot',          desc: 'Bot conversazionale per esplorare i dati dell\'Ocean Biodiversity Information System (OBIS) in linguaggio naturale.' },
    uns:      { label: 'UNS',               desc: 'Universidad Nacional del Sur, Bahía Blanca. L\'istituzione dove svolgo il mio dottorato in Informatica.' },
    cenpat:   { label: 'CESIMAR-CENPAT',    desc: 'Centro per lo Studio dei Sistemi Marini, parte del Centro Nazionale Patagonico (CENPAT-CONICET), Puerto Madryn. Dove svolgo le mie attività di ricerca.' },
    graphrag: { label: 'GraphRAG',          desc: 'Estensione di RAG (Retrieval-Augmented Generation) basata su grafi di conoscenza, utilizzata come meccanismo di recupero nella mia ricerca.' }
  },
  it: {
    me:       { label: 'Gustavo M. Nuñez', desc: 'Dottorando in Scienze Informatiche, lavoro su IA neuro-simbolica e sistemi di conoscenza marina.' },
    llm:      { label: 'LLM',               desc: 'Large Language Models utilizzati nella mia ricerca: GPT-4o-mini, Mixtral 8×7B, Mistral 7B, Ministral 14B, LLaMA3 8B, tra altri, per attività di estrazione della conoscenza e risposta a domande.' },
    conicet:  { label: 'CONICET',           desc: 'Consiglio Nazionale delle Ricerche Scientifiche e Tecniche (Argentina). Ente attraverso il quale svolgo la mia ricerca dottorale.' },
    hermes:   { label: 'HERMES',            desc: 'Piattaforma GraphRAG che genera e confronta Knowledge Graph a partire da un corpus storico di biologia marina argentina, con verifica simbolica post-hoc.' },
    botgbif:  { label: 'BotGBIF',           desc: 'Bot conversazionale che consente di consultare dati di biodiversità GBIF in linguaggio naturale.' },
    aquamind: { label: 'AquaMind',          desc: 'Sistema multi-agente che integra WoRMS e OBIS per l\'analisi della presenza di specie marine tramite linguaggio naturale.' },
    gf:       { label: 'Grounding Fidelity',desc: 'Metrica che misura in che misura le risposte generate da un sistema RAG/GraphRAG siano tracciabili al grafo simbolico sottostante. Parte centrale della valutazione della mia tesi dottorale.' },
    obisbot:  { label: 'OBIS Bot',          desc: 'Bot conversazionale per esplorare i dati dell\'Ocean Biodiversity Information System (OBIS) in linguaggio naturale.' },
    uns:      { label: 'UNS',               desc: 'Universidad Nacional del Sur, Bahía Blanca. L\'istituzione dove svolgo il mio dottorato in Scienze Informatiche.' },
    cenpat:   { label: 'CESIMAR-CENPAT',    desc: 'Centro per lo Studio dei Sistemi Marini, parte del Centro Nazionale Patagonico (CENPAT-CONICET), Puerto Madryn. Dove svolgo le mie attività di ricerca.' },
    graphrag: { label: 'GraphRAG',          desc: 'Estensione di RAG (Retrieval-Augmented Generation) basata su grafi di conoscenza, utilizzata come meccanismo di recupero nella mia ricerca.' }
  }
};

const kgNodeLinks = {
  conicet:  'https://www.conicet.gov.ar',
  hermes:   'https://hermes-project.streamlit.app',
  botgbif:  'https://botgbif.streamlit.app',
  aquamind: 'https://aquamind.streamlit.app',
  obisbot:  'https://obis-bot.streamlit.app',
  uns:      'https://www.uns.edu.ar',
  cenpat:   'https://www.cenpat-conicet.gob.ar'
};

const kgEdgeText = {
  es: {
    researchesAt: 'investiga en',
    worksAt: 'trabaja en',
    studiesAt: 'doctorando en',
    uses: 'utiliza',
    researches: 'investiga',
    proposes: 'propone',
    develops: 'desarrolla',
    belongsTo: 'pertenece a',
    implements: 'implementa'
  },
  en: {
    researchesAt: 'researches at',
    worksAt: 'works at',
    studiesAt: 'PhD candidate at',
    uses: 'uses',
    researches: 'researches',
    proposes: 'proposes',
    develops: 'develops',
    belongsTo: 'belongs to',
    implements: 'implements'
  },
  it: {
    researchesAt: 'fa ricerca presso',
    worksAt: 'lavora presso',
    studiesAt: 'dottorando presso',
    uses: 'utilizza',
    researches: 'ricerca',
    proposes: 'propone',
    develops: 'sviluppa',
    belongsTo: 'appartiene a',
    implements: 'implementa'
  }
};

function buildKnowledgeGraph() {
  const svg = document.getElementById('kgSvg');
  if (!svg) return;

  const edgesGroup = document.getElementById('kgEdges');
  const nodesGroup = document.getElementById('kgNodes');

  // Limpiar grafo previo (necesario al regenerar por cambio de idioma)
  edgesGroup.innerHTML = '';
  nodesGroup.innerHTML = '';
  hideKgPopup();

  const lang = (typeof currentLang !== 'undefined' && kgNodeText[currentLang]) ? currentLang : 'es';
  const text = kgNodeText[lang];
  const relationText = kgEdgeText[lang] || kgEdgeText.es;

  // Centro del SVG (responsive)
  const viewBox = svg.viewBox.baseVal;

  const cx = viewBox && viewBox.width
    ? viewBox.width / 2
    : svg.clientWidth / 2;

  const cy = viewBox && viewBox.height
    ? viewBox.height / 2
    : svg.clientHeight / 2;


  // Distribución semántica estable: instituciones, investigación y proyectos.
  // Las coordenadas usan el viewBox, por lo que siguen siendo responsive.
  const satellitesBase = [
    { id: 'conicet',  x: 110, y: 105, r: 23, type: 'n-institution', category: 'institution', delay: 0.4 },
    { id: 'cenpat',   x: 95,  y: 255, r: 23, type: 'n-institution', category: 'institution', delay: 0.8 },
    { id: 'uns',      x: 165, y: 405, r: 21, type: 'n-institution', category: 'institution', delay: 1.2 },
    { id: 'llm',      x: 310, y: 70,  r: 18, type: 'n-concept', category: 'research', delay: 0.4 },
    { id: 'graphrag', x: 515, y: 90,  r: 20, type: 'n-concept', category: 'research', delay: 1.0 },
    { id: 'gf',       x: 645, y: 205, r: 18, type: 'n-concept', category: 'research', delay: 0.6 },
    { id: 'hermes',   x: 610, y: 365, r: 24, type: 'n-project', category: 'project', delay: 1.6 },
    { id: 'aquamind', x: 470, y: 450, r: 22, type: 'n-project', category: 'project', delay: 2.0 },
    { id: 'botgbif',  x: 285, y: 455, r: 18, type: 'n-project', category: 'project', delay: 2.4 },
    { id: 'obisbot',  x: 95,  y: 405, r: 18, type: 'n-project', category: 'project', delay: 0.2 }
  ].map(function (n) {
    return Object.assign({}, n, text[n.id], { link: kgNodeLinks[n.id] });
  });

  const satellites = satellitesBase;
  const me = Object.assign({ id: 'me', x: cx, y: cy, r: 38, type: 'n-me', category: 'me', delay: 0 }, text.me);
  const nodes = [me].concat(satellites);

  const edges = [
    { source: 'me', target: 'conicet', category: 'institution', relation: 'researchesAt', labelOffset: -10, labelT: 0.62 },
    { source: 'me', target: 'cenpat', category: 'institution', relation: 'worksAt', labelOffset: -11, labelT: 0.62 },
    { source: 'me', target: 'uns', category: 'institution', relation: 'studiesAt', labelOffset: -10, labelT: 0.62 },
    { source: 'me', target: 'llm', category: 'research', relation: 'uses', labelOffset: 10, labelT: 0.60 },
    { source: 'me', target: 'graphrag', category: 'research', relation: 'researches', labelOffset: 10, labelT: 0.62 },
    { source: 'me', target: 'gf', category: 'research', relation: 'proposes', labelOffset: 10, labelT: 0.62 },
    { source: 'me', target: 'hermes', category: 'project', relation: 'develops', labelOffset: -10, labelT: 0.62 },
    { source: 'me', target: 'aquamind', category: 'project', relation: 'develops', labelOffset: -10, labelT: 0.62 },
    { source: 'me', target: 'botgbif', category: 'project', relation: 'develops', labelOffset: -10, labelT: 0.62 },
    { source: 'me', target: 'obisbot', category: 'project', relation: 'develops', labelOffset: -10, labelT: 0.62 },
    { source: 'cenpat', target: 'conicet', category: 'institution', relation: 'belongsTo', labelOffset: 12, labelT: 0.50 },
    { source: 'hermes', target: 'graphrag', category: 'research', relation: 'implements', labelOffset: 12, labelT: 0.52 }
  ];

  const svgNS = 'http://www.w3.org/2000/svg';
  const nodeMap = {};
  nodes.forEach(n => nodeMap[n.id] = n);

  addKgArrowMarkers(svg, svgNS);

  edges.forEach(function (edge) {
    const a = nodeMap[edge.source];
    const b = nodeMap[edge.target];
    const geometry = createStraightEdge(a, b, edge.labelT, edge.labelOffset);
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('class', 'kg-edge edge-' + edge.category);
    line.setAttribute('x1', geometry.startX);
    line.setAttribute('y1', geometry.startY);
    line.setAttribute('x2', geometry.endX);
    line.setAttribute('y2', geometry.endY);
    line.setAttribute('marker-end', 'url(#kg-arrow-' + edge.category + ')');
    line.dataset.source = edge.source;
    line.dataset.target = edge.target;
    edgesGroup.appendChild(line);

    const label = relationText[edge.relation] || edge.relation;
    const labelGroup = document.createElementNS(svgNS, 'g');
    labelGroup.setAttribute('class', 'kg-edge-label label-' + edge.category);
    labelGroup.dataset.source = edge.source;
    labelGroup.dataset.target = edge.target;

    const labelWidth = Math.max(42, label.length * 5.8 + 16);
    const labelBg = document.createElementNS(svgNS, 'rect');
    labelBg.setAttribute('x', geometry.labelX - labelWidth / 2);
    labelBg.setAttribute('y', geometry.labelY - 9);
    labelBg.setAttribute('width', labelWidth);
    labelBg.setAttribute('height', 18);
    labelBg.setAttribute('rx', 9);
    labelGroup.appendChild(labelBg);

    const labelText = document.createElementNS(svgNS, 'text');
    labelText.setAttribute('x', geometry.labelX);
    labelText.setAttribute('y', geometry.labelY + 3.5);
    labelText.textContent = label;
    labelGroup.appendChild(labelText);
    edgesGroup.appendChild(labelGroup);

    edge.lineElement = line;
    edge.labelElement = labelGroup;
    edge.labelWidth = labelWidth;
  });

  const popup = document.getElementById('kgPopup');

  nodes.forEach(function (n) {
    const g = document.createElementNS(svgNS, 'g');
    g.setAttribute('class', 'kg-node-group');
    g.dataset.nodeId = n.id;
    g.style.cursor = 'pointer';

    const pulse = document.createElementNS(svgNS, 'circle');
    const pulseColorClass = n.category === 'me' ? 'p-me' : 'p-' + n.category;
    pulse.setAttribute('class', 'kg-pulse ' + pulseColorClass);
    pulse.setAttribute('cx', n.x);
    pulse.setAttribute('cy', n.y);
    pulse.setAttribute('r', n.r);
    pulse.style.animationDelay = n.delay + 's';
    g.appendChild(pulse);

    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('class', 'kg-node ' + n.type);
    circle.setAttribute('cx', n.x);
    circle.setAttribute('cy', n.y);
    circle.setAttribute('r', n.r);
    g.appendChild(circle);

    const core = document.createElementNS(svgNS, 'circle');
    core.setAttribute('class', 'kg-node-core');
    core.setAttribute('cx', n.x);
    core.setAttribute('cy', n.y);
    core.setAttribute('r', Math.max(4, Math.round(n.r * 0.24)));
    g.appendChild(core);

    const labelWidth = Math.max(48, n.label.length * 6.2 + 18);
    n.labelWidth = labelWidth;
    const labelBg = document.createElementNS(svgNS, 'rect');
    labelBg.setAttribute('class', 'kg-label-bg');
    labelBg.setAttribute('x', n.x - labelWidth / 2);
    labelBg.setAttribute('y', n.y + n.r + 6);
    labelBg.setAttribute('width', labelWidth);
    labelBg.setAttribute('height', 21);
    labelBg.setAttribute('rx', 10.5);
    g.appendChild(labelBg);

    const labelEl = document.createElementNS(svgNS, 'text');
    labelEl.setAttribute('class', 'kg-label');
    labelEl.setAttribute('x', n.x);
    labelEl.setAttribute('y', n.y + n.r + 20);
    labelEl.textContent = n.label;
    g.appendChild(labelEl);

    g.addEventListener('click', function (ev) {
      ev.stopPropagation();
      ev.preventDefault();
      if (g.dataset.dragged === 'true') {
        g.dataset.dragged = 'false';
        return;
      }
      showKgPopup(n);
    });

    g.addEventListener('mouseenter', function () { focusKgNode(n.id, edges); });
    g.addEventListener('mouseleave', clearKgFocus);

    nodesGroup.appendChild(g);
    n.element = g;
  });

  enableKgDragging(svg, nodes, edges, nodeMap);

  if (popup && !popup.dataset.bound) {
    popup.dataset.bound = 'true';

    function closeIfOutside(ev) {
      if (!popup.contains(ev.target) && !ev.target.closest('.kg-node-group')) {
        hideKgPopup();
      }
    }

    document.addEventListener('click', closeIfOutside);
    document.addEventListener('touchend', closeIfOutside);

    const closeBtn = popup.querySelector('.kg-popup-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', hideKgPopup);
      closeBtn.addEventListener('touchend', function(ev) {
        ev.preventDefault();
        hideKgPopup();
      });
    }
  }
}

function createStraightEdge(a, b, labelT, labelOffset) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const distance = Math.hypot(dx, dy) || 1;
  const ux = dx / distance;
  const uy = dy / distance;
  const startX = a.x + ux * (a.r + 3);
  const startY = a.y + uy * (a.r + 3);
  const endX = b.x - ux * (b.r + 9);
  const endY = b.y - uy * (b.r + 9);
  const t = labelT || 0.5;
  const offset = labelOffset || 0;
  return {
    startX: startX.toFixed(1),
    startY: startY.toFixed(1),
    endX: endX.toFixed(1),
    endY: endY.toFixed(1),
    labelX: startX + (endX - startX) * t - uy * offset,
    labelY: startY + (endY - startY) * t + ux * offset
  };
}

function addKgArrowMarkers(svg, svgNS) {
  let defs = svg.querySelector('defs[data-kg-defs]');
  if (defs) defs.remove();
  defs = document.createElementNS(svgNS, 'defs');
  defs.dataset.kgDefs = 'true';

  const colors = {
    institution: '#b78cff',
    research: '#5fa0fe',
    project: '#00ce67'
  };

  Object.keys(colors).forEach(function (category) {
    const marker = document.createElementNS(svgNS, 'marker');
    marker.setAttribute('id', 'kg-arrow-' + category);
    marker.setAttribute('viewBox', '0 0 8 8');
    marker.setAttribute('refX', '7');
    marker.setAttribute('refY', '4');
    marker.setAttribute('markerWidth', '6');
    marker.setAttribute('markerHeight', '6');
    marker.setAttribute('orient', 'auto');
    const arrow = document.createElementNS(svgNS, 'path');
    arrow.setAttribute('d', 'M 0 0 L 8 4 L 0 8 z');
    arrow.setAttribute('fill', colors[category]);
    marker.appendChild(arrow);
    defs.appendChild(marker);
  });

  svg.insertBefore(defs, svg.firstChild);
}

function enableKgDragging(svg, nodes, edges, nodeMap) {
  let drag = null;

  nodes.forEach(function (node) {
    const group = node.element;
    if (!group) return;

    group.addEventListener('pointerdown', function (event) {
      if (event.button !== undefined && event.button !== 0) return;
      const point = getKgPointer(svg, event);
      drag = {
        node,
        group,
        pointerId: event.pointerId,
        offsetX: point.x - node.x,
        offsetY: point.y - node.y,
        startX: point.x,
        startY: point.y,
        moved: false
      };
      group.setPointerCapture?.(event.pointerId);
      group.classList.add('is-dragging');
      hideKgPopup();
      event.preventDefault();
    });
  });

  svg.addEventListener('pointermove', function (event) {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const point = getKgPointer(svg, event);
    if (Math.hypot(point.x - drag.startX, point.y - drag.startY) > 4) drag.moved = true;

    const viewBox = svg.viewBox.baseVal;
    const horizontalMargin = Math.max(drag.node.r + 12, drag.node.labelWidth / 2 + 6);
    const topMargin = drag.node.r + 12;
    const bottomMargin = drag.node.r + 38;
    drag.node.x = clamp(point.x - drag.offsetX, horizontalMargin, viewBox.width - horizontalMargin);
    drag.node.y = clamp(point.y - drag.offsetY, topMargin, viewBox.height - bottomMargin);

    updateKgNodePosition(drag.node);
    updateKgConnectedEdges(drag.node.id, edges, nodeMap);
    event.preventDefault();
  });

  function finishDrag(event) {
    if (!drag || event.pointerId !== drag.pointerId) return;
    drag.group.releasePointerCapture?.(event.pointerId);
    drag.group.classList.remove('is-dragging');
    drag.group.dataset.dragged = drag.moved ? 'true' : 'false';
    drag = null;
  }

  svg.addEventListener('pointerup', finishDrag);
  svg.addEventListener('pointercancel', finishDrag);
}

function getKgPointer(svg, event) {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function updateKgNodePosition(node) {
  const group = node.element;
  const circles = group.querySelectorAll('circle');
  circles.forEach(function (circle) {
    circle.setAttribute('cx', node.x);
    circle.setAttribute('cy', node.y);
  });

  const labelBg = group.querySelector('.kg-label-bg');
  labelBg.setAttribute('x', node.x - node.labelWidth / 2);
  labelBg.setAttribute('y', node.y + node.r + 6);
  const label = group.querySelector('.kg-label');
  label.setAttribute('x', node.x);
  label.setAttribute('y', node.y + node.r + 20);
}

function updateKgConnectedEdges(nodeId, edges, nodeMap) {
  edges.forEach(function (edge) {
    if (edge.source !== nodeId && edge.target !== nodeId) return;
    const geometry = createStraightEdge(nodeMap[edge.source], nodeMap[edge.target], edge.labelT, edge.labelOffset);
    edge.lineElement.setAttribute('x1', geometry.startX);
    edge.lineElement.setAttribute('y1', geometry.startY);
    edge.lineElement.setAttribute('x2', geometry.endX);
    edge.lineElement.setAttribute('y2', geometry.endY);

    const rect = edge.labelElement.querySelector('rect');
    rect.setAttribute('x', geometry.labelX - edge.labelWidth / 2);
    rect.setAttribute('y', geometry.labelY - 9);
    const text = edge.labelElement.querySelector('text');
    text.setAttribute('x', geometry.labelX);
    text.setAttribute('y', geometry.labelY + 3.5);
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function focusKgNode(nodeId, edges) {
  const connected = new Set([nodeId]);
  edges.forEach(function (edge) {
    if (edge.source === nodeId) connected.add(edge.target);
    if (edge.target === nodeId) connected.add(edge.source);
  });

  document.querySelectorAll('.kg-node-group').forEach(function (node) {
    node.classList.toggle('is-dimmed', !connected.has(node.dataset.nodeId));
    node.classList.toggle('is-focused', node.dataset.nodeId === nodeId);
  });
  document.querySelectorAll('.kg-edge, .kg-edge-label').forEach(function (edge) {
    const active = edge.dataset.source === nodeId || edge.dataset.target === nodeId;
    edge.classList.toggle('is-active', active);
    edge.classList.toggle('is-dimmed', !active);
  });
}

function clearKgFocus() {
  document.querySelectorAll('.kg-node-group, .kg-edge, .kg-edge-label').forEach(function (element) {
    element.classList.remove('is-dimmed', 'is-focused', 'is-active');
  });
}

function showKgPopup(node) {
  const popup = document.getElementById('kgPopup');
  if (!popup) return;

  const titleEl = popup.querySelector('.kg-popup-title');
  const descEl = popup.querySelector('.kg-popup-desc');
  const linkEl = popup.querySelector('.kg-popup-link');

  titleEl.textContent = node.label;
  descEl.textContent = node.desc || '';

  if (node.link) {
    linkEl.href = node.link;
    linkEl.style.display = 'inline-flex';
  } else {
    linkEl.style.display = 'none';
  }

  popup.classList.add('open');
}

function hideKgPopup() {
  const popup = document.getElementById('kgPopup');
  if (popup) popup.classList.remove('open');
}
