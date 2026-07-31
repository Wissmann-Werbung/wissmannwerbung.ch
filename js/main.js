// Mobile-Navigation
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Jahr im Footer aktuell halten
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// Portfolio-Filter
const pfFilters = document.getElementById('pfFilters');
if (pfFilters) {
  const buttons = pfFilters.querySelectorAll('.pf-filter');
  const groups = document.querySelectorAll('.pf-group');
  const hint = document.getElementById('pfHint');

  const applyFilter = (filter) => {
    groups.forEach((group) => {
      group.hidden = group.dataset.cat !== filter;
    });
    buttons.forEach((btn) => {
      const active = btn.dataset.filter === filter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    if (hint) hint.hidden = true;
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });
}

// Lightbox für Portfolio-Bilder
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');

  const openLightbox = (src, caption, alt) => {
    lbImg.src = src;
    lbImg.alt = alt || caption || '';
    lbCaption.textContent = caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lbImg.src = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.pf-item').forEach((item) => {
    const img = item.querySelector('img');
    const cap = item.querySelector('figcaption');
    if (!img) return;
    item.addEventListener('click', () => {
      openLightbox(img.currentSrc || img.src, cap ? cap.textContent : '', img.alt);
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
}
