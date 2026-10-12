import { portfolio } from './content.js';

const $ = (selector) => document.querySelector(selector);
const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const safeLink = (value, local = false) => {
  if (!value) return null;
  if (local && /^\.\/assets\/[a-zA-Z0-9/_ .-]+$/.test(value)) return value;
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; }
};
const linkMarkup = (label, url, className = '') => `<a class="${className}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} <span aria-hidden="true">↗</span></a>`;

if (!portfolio.preview) $('#preview-banner').hidden = true;
if (portfolio.name) {
  $('#brand-name').innerHTML = `${escape(portfolio.name.toUpperCase())}<span class="wordmark-sub">PORTFOLIO / ENGINEERING</span>`;
  $('#brand-initials').textContent = portfolio.initials;
  $('#footer-credit').textContent = `${portfolio.name.toUpperCase()} / COMPUTER SCIENCE`;
  document.title = `${portfolio.name} — Computer Science & AI/ML`;
}
if (portfolio.bio) $('#about-bio').textContent = portfolio.bio;
if (portfolio.college) $('#about-details').textContent = `B.Tech in Computer Science at ${portfolio.college}${portfolio.graduationYear ? `, graduating in ${portfolio.graduationYear}` : ''}. Interested in opportunities to turn curiosity into useful software and machine learning applications.`;
if (portfolio.educationNote) $('#about-details').textContent += ` ${portfolio.educationNote}`;
const portrait = safeLink(portfolio.portrait, true);
if (portrait) {
  $('.hero-art').innerHTML = `<img class="hero-portrait" src="${escape(portrait)}" alt="" fetchpriority="high">`;
}
const resume = safeLink(portfolio.resume, true);
if (resume) { $('#resume-link').href = resume; $('#resume-link').hidden = false; $('#resume-link').download = 'Jayesh-Sonar-Resume.pdf'; $('#resume-pending').hidden = true; }
if (portfolio.skills.length) $('#skills-list').innerHTML = `<div class="skill-list">${portfolio.skills.map(skill => `<span class="skill" title="${escape(skill.evidence)}">${escape(skill.name)}</span>`).join('')}</div>`;
if (portfolio.learningInterests?.length) $('#skills-list').insertAdjacentHTML('beforeend', `<p class="pending-copy">Also exploring: ${portfolio.learningInterests.map(escape).join(' / ')}</p>`);
if (portfolio.additionalSkills?.length) $('#skills-list').insertAdjacentHTML('beforeend', `<details class="learning-details toolkit-details"><summary>Explore the full toolkit <span aria-hidden="true">+</span></summary>${portfolio.additionalSkills.map(group => `<div class="toolkit-group"><h4>${escape(group.label)}</h4><p>${group.items.map(escape).join(' · ')}</p></div>`).join('')}</details>`);
$('#experience-list').innerHTML = (portfolio.experience || []).map(item => `<article class="experience-entry"><p class="tiny-label">${escape(item.dates)}</p><h4>${escape(item.role)}</h4><p class="experience-org">${escape(item.organization)}</p><p>${escape(item.description)}</p></article>`).join('');
$('#additional-projects').innerHTML = (portfolio.additionalProjects || []).map(item => `<article class="experience-entry"><h4>${escape(item.title)}</h4><p>${escape(item.description)}</p><p class="additional-tech">${item.tech.map(escape).join(' / ')}</p></article>`).join('');
$('#certifications-list').innerHTML = (portfolio.certifications || []).map(item => `<li>${escape(item)}</li>`).join('');
if (portfolio.interests.length) { $('#interests-copy').textContent = portfolio.interests.join(' / '); $('#interests-row').hidden = false; }
const socialLinks = [['GitHub', safeLink(portfolio.github)], ['LinkedIn', safeLink(portfolio.linkedin)], ['LeetCode', safeLink(portfolio.leetcode)]].filter(([, url]) => url);
$('#social-links').innerHTML = socialLinks.map(([label, url]) => linkMarkup(label, url)).join('');
if (portfolio.email && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(portfolio.email)) {
  $('#contact-actions').innerHTML = `<a class="contact-button" href="mailto:${escape(encodeURIComponent(portfolio.email))}">Say hello <span aria-hidden="true">↗</span></a>`;
} else if (safeLink(portfolio.linkedin)) {
  $('#contact-actions').innerHTML = linkMarkup('Let’s connect', safeLink(portfolio.linkedin), 'contact-button');
}

function artwork(visual) {
  if (visual === 'neural') return `<div class="visual-object neural-object">${Array.from({ length: 7 }, (_, i) => `<i style="--i:${i}"></i>`).join('')}<div class="neural-core"></div></div><div class="neural-label">INTELLIGENCE</div>`;
  if (visual === 'software') return '<div class="visual-object software-object"><div class="window-top"><i></i><i></i><i></i></div><div class="window-body"><div class="window-sidebar"></div><div class="window-content"><i></i><i></i><i></i></div></div></div>';
  if (visual === 'audit') return '<div class="visual-object audit-object"><div class="art-label">INTERFACE / UNDER REVIEW</div><div class="audit-line"></div><div class="audit-line short"></div><div class="audit-scan">A CLOSER LOOK <span>↗</span></div></div>';
  if (visual === 'fruit') return '<div class="visual-object fruit-object"><span class="fruit-label">VISION / CLASSIFICATION</span></div>';
  return '<div class="visual-object experiment-object">Aa<span aria-hidden="true">↗</span><small>LANGUAGE / A LITTLE MORE CLARITY</small></div>';
}

function renderProjects(category = 'All') {
  const projects = portfolio.projects.filter(project => category === 'All' || project.category === category);
  $('#project-grid').innerHTML = projects.length ? projects.map(project => `<article class="project-card"><button class="project-open" data-project="${escape(project.id)}" aria-haspopup="dialog" aria-label="Read about ${escape(project.title)}"><div class="project-art art-${escape(project.visual)}" aria-hidden="true"><span class="art-id">${escape(project.number)} / ${escape(project.category.toUpperCase())}</span>${artwork(project.visual)}<span class="placeholder-tag">${project.placeholder ? 'PROJECT PLACEHOLDER' : 'CONCEPT ILLUSTRATION'}</span><span class="project-arrow">↗</span></div><div class="project-meta"><div><h3>${escape(project.title)}</h3><p>${escape(project.summary)}</p></div><span class="project-category">${escape(project.category)}</span></div></button></article>`).join('') : '<p class="empty-state">No projects in this category yet.</p>';
  $('#project-count').textContent = `${String(projects.length).padStart(2, '0')} ${portfolio.projects.some(project => project.placeholder) ? 'PROJECT SPACES' : 'PROJECTS'}`;
  $('.filter[data-filter="All"] span').textContent = String(portfolio.projects.length).padStart(2, '0');
}
$('.filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  document.querySelectorAll('[data-filter]').forEach(filter => {
    const active = filter === button;
    filter.setAttribute('aria-pressed', String(active));
    filter.classList.toggle('active', active);
  });
  renderProjects(button.dataset.filter);
});
renderProjects();

const dialog = $('#project-dialog');
$('#project-grid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]');
  if (!button) return;
  const project = portfolio.projects.find(item => item.id === button.dataset.project);
  if (!project) return;
  const details = [['The problem', project.problem], ['My contribution', project.contribution], ['The approach', project.approach], ['The outcome', project.result], ['What I learned', project.lesson]].filter(([, text]) => text);
  $('#dialog-body').innerHTML = `<p class="dialog-category">${escape(project.category)}${project.year ? ` / ${escape(project.year)}` : ''}</p><h2 id="dialog-title">${escape(project.title)}</h2><p class="dialog-summary">${escape(project.summary)}</p>${project.placeholder ? '<p class="dialog-note">This is a space reserved for a real project. The case study, technologies, and links will be added with the project details.</p>' : ''}${project.notice ? `<p class="dialog-note">${escape(project.notice)}</p>` : ''}${project.tech.length ? `<div class="skill-list">${project.tech.map(tech => `<span class="skill">${escape(tech)}</span>`).join('')}</div>` : ''}${details.map(([label, text]) => `<section class="dialog-detail"><h3>${label}</h3><p>${escape(text)}</p></section>`).join('')}<div class="dialog-links">${safeLink(project.repo) ? linkMarkup('View source', safeLink(project.repo), 'text-link') : ''}${safeLink(project.demo) ? linkMarkup('Live demo', safeLink(project.demo), 'text-link') : ''}</div>`;
  dialog.showModal();
  dialog.scrollTop = 0;
});
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });

function renderJourney(index) {
  const item = portfolio.journey[index];
  if (!item) return;
  document.querySelectorAll('[data-year]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.year) === index)));
  $('#journey-story').innerHTML = `<div class="story-year"><span>YEAR ${escape(item.year)} / ${escape(item.label.toUpperCase())}</span>${item.dates ? `<span>${escape(item.dates)}</span>` : ''}</div><h3>${escape(item.title)}</h3><p>${escape(item.story || 'Every journey has a chapter like this. Your real milestones, challenges, and discoveries will tell this part of the story.')}</p>${item.skills.length ? `<div class="story-tags">${item.skills.map(skill => `<span>${escape(skill)}</span>`).join('')}</div>` : ''}<span class="story-note">${escape(item.milestone || 'CHAPTER DETAILS COMING SOON')}</span>`;
}
$('#journey-deck').innerHTML = portfolio.journey.map((item, index) => `<button class="year-card" data-year="${index}" aria-pressed="${index === 0}" aria-controls="journey-story" style="--position:${index - 1.5};--dip:${Math.abs(index - 1.5)};--layer:${index + 1}" aria-label="Year ${index + 1}: ${escape(item.label)}"><span class="year-top">ENGINEERING <span aria-hidden="true">↗</span></span><span class="year-shape" aria-hidden="true"></span><span class="year-number">${escape(item.year)}</span><span class="year-title">${escape(item.label.toUpperCase())}</span></button>`).join('');
$('#journey-deck').addEventListener('click', (event) => { const button = event.target.closest('[data-year]'); if (button) renderJourney(Number(button.dataset.year)); });
renderJourney(0);

const menuToggle = $('.menu-toggle');
const nav = $('#main-nav');
function closeMenu() { menuToggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') !== 'true'; menuToggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') { closeMenu(); menuToggle.focus(); } });
matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

// Content stays visible if motion support is unavailable or reduced motion is requested.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const entrances = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.animate([{ opacity: 0.5, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 500, easing: 'ease-out' });
      entrances.unobserve(entry.target);
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.section-heading, .about-layout, .contact-heading').forEach(element => entrances.observe(element));
}
