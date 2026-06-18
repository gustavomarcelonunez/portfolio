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
});
