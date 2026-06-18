document.addEventListener('DOMContentLoaded', function () {

  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  const noTab = document.getElementById('content-no-tab');

  function activateTab(targetId) {
    tabs.forEach(t => {
      const isActive = t.dataset.content === targetId;
      t.classList.toggle('active-tab', isActive);
      t.setAttribute('aria-selected', isActive);
    });

    panels.forEach(p => {
      p.classList.remove('active');
    });

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add('active');
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const targetId = this.dataset.content;

      if (this.classList.contains('active-tab')) {
        this.classList.remove('active-tab');
        this.setAttribute('aria-selected', 'false');
        panels.forEach(p => p.classList.remove('active'));
        if (noTab) noTab.classList.add('active');
        return;
      }

      activateTab(targetId);
    });
  });

  if (noTab) noTab.classList.add('active');

  buildKnowledgeGraph();
});

function buildKnowledgeGraph() {
  const svg = document.getElementById('kgSvg');
  if (!svg) return;

  const edgesGroup = document.getElementById('kgEdges');
  const nodesGroup = document.getElementById('kgNodes');

  // Centro del SVG (responsive)
  const viewBox = svg.viewBox.baseVal;

  const cx = viewBox && viewBox.width
    ? viewBox.width / 2
    : svg.clientWidth / 2;

  const cy = viewBox && viewBox.height
    ? viewBox.height / 2
    : svg.clientHeight / 2;


  // Nodos satélite
  const satellitesBase = [
    { id: 'conicet', label: 'CONICET', r: 24, type: 'n-concept', delay: 0.4 },
    { id: 'hermes', label: 'HERMES', r: 22, type: 'n-entity', delay: 1.6 },
    { id: 'botgbif', label: 'BotGBIF', r: 18, type: 'n-entity', delay: 2.4 },
    { id: 'aquamind', label: 'AquaMind', r: 20, type: 'n-entity', delay: 2.0 },
    { id: 'gf', label: 'Grounding Fidelity', r: 20, type: 'n-entity', delay: 0.6 },
    { id: 'obisbot', label: 'OBIS Bot', r: 18, type: 'n-entity', delay: 0.2 },
    { id: 'uns', label: 'UNS', r: 20, type: 'n-concept', delay: 1.2 },
    { id: 'cenpat', label: 'CESIMAR-CENPAT', r: 22, type: 'n-concept', delay: 0.8 },
    { id: 'graphrag', label: 'GraphRAG', r: 18, type: 'n-concept', delay: 1.0 }
  ];

  // Distribución equilibrada en anillos
  const rings = [150, 180, 205];
  const rotation = Math.random() * 360;

  const satellites = satellitesBase.map((node, i, arr) => ({
    ...node,

    angle:
      rotation +
      (360 / arr.length) * i +
      (Math.random() * 24 - 12),

    dist: rings[i % rings.length]
  }));

  satellites.forEach(function (n) {
    const rad = n.angle * Math.PI / 180;
    n.x = Math.round(cx + n.dist * Math.cos(rad));
    n.y = Math.round(cy + n.dist * Math.sin(rad));
  });

  const me = { id: 'me', x: cx, y: cy, r: 36, type: 'n-hermes', label: 'Gustavo M. Nuñez', delay: 0 };
  const nodes = [me].concat(satellites);

  const edges = satellites.map(function (n) { return ['me', n.id]; });
  edges.push(['conicet', 'cenpat']);
  edges.push(['conicet', 'uns']);

  const svgNS = 'http://www.w3.org/2000/svg';
  const nodeMap = {};
  nodes.forEach(n => nodeMap[n.id] = n);

  edges.forEach(function (pair) {
    const a = nodeMap[pair[0]];
    const b = nodeMap[pair[1]];
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('class', 'kg-edge');
    line.setAttribute('x1', a.x);
    line.setAttribute('y1', a.y);
    line.setAttribute('x2', b.x);
    line.setAttribute('y2', b.y);
    edgesGroup.appendChild(line);
  });

  nodes.forEach(function (n) {
    const g = document.createElementNS(svgNS, 'g');

    const pulse = document.createElementNS(svgNS, 'circle');
    const pulseColorClass = n.type === 'n-hermes' ? 'p-hermes' : (n.type === 'n-entity' ? 'p-entity' : 'p-concept');
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

    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('class', 'kg-label');
    text.setAttribute('x', n.x);
    text.setAttribute('y', n.y + n.r + 16);
    text.textContent = n.label;
    g.appendChild(text);

    nodesGroup.appendChild(g);
  });
}