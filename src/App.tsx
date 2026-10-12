import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Plus, X, Download, Code2, Asterisk } from 'lucide-react';
import { experiments, links, profile, projects, type Project } from './content';
import { ProjectVisual } from './Visuals';
import { CinematicHero } from './components/CinematicHero';

const ease = [0.22, 1, 0.36, 1] as const;
function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, ease, delay }}>{children}</motion.div>;
}
function IndexLabel({ number, children }: { number: string; children: ReactNode }) { return <div className="index-label"><span className="index-box">{number}</span><span>{children}</span></div>; }
function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) { return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17} aria-hidden="true" /></a>; }

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-10% 0px -55% 0px' });
    ['work', 'about', 'experiments', 'contact'].forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <header className="site-header frame"><a className="wordmark" href="#home" aria-label="Jayesh Sonar home">JAYESH<br />SONAR<span className="brand-point">↗</span></a><div className="nav-caption">COMPUTER SCIENCE<br />AI / ML & SOFTWARE</div><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}{open ? <X size={20} /> : <Plus size={20} />}</button><nav id="main-nav" className={open ? 'open' : ''} aria-label="Main navigation">{['Work', 'About', 'Experiments', 'Contact'].map((label, index) => <a key={label} className={active === label.toLowerCase() ? 'nav-active' : ''} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}><span>{label}</span><small>0{index + 1}</small></a>)}</nav></header>;
}

function ProjectShowcase({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return <Reveal className={`project-showcase showcase-${project.visual}`}><button className="project-visual-button" data-project={project.id} data-cursor="VIEW" aria-haspopup="dialog" aria-label={`Open case study: ${project.title}`} onClick={() => onOpen(project)}><ProjectVisual type={project.visual} /><span className="visual-open"><ArrowUpRight size={24} /></span></button><div className="project-caption"><span className="project-number">/{project.number}</span><div className="project-name"><span className="project-discipline">{project.category} / {project.tech.slice(0, 2).join(' + ')}</span><h3><button onClick={() => onOpen(project)}>{project.title}</button></h3><p>{project.subtitle}</p></div><p className="project-summary">{project.summary}<span className="project-approach">{project.approach}</span></p><button className="case-link" onClick={() => onOpen(project)} aria-label={`Read ${project.title} case study`}>Explore case <ArrowUpRight size={18} /></button></div></Reveal>;
}

function Work({ onOpen }: { onOpen: (project: Project) => void }) {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter(project => filter === 'All' || project.category === filter);
  return <section className="work-section frame" id="work" aria-labelledby="work-title"><IndexLabel number="01">SELECTED WORK / A COLLECTION IN PROGRESS</IndexLabel><div className="section-heading"><Reveal><h2 id="work-title">THOUGHT.<br /><span className="offset-word">THEN BUILT.</span><sup>(05)</sup></h2></Reveal><p>Real problems. Considered solutions.<br />A selection of ideas I’ve turned into code.<br /><span>From intelligent systems to everyday tools.</span></p></div><div className="work-toolbar"><div className="filters" role="group" aria-label="Filter projects">{['All', 'AI / ML', 'Software'].map(label => <button key={label} data-filter={label} className={filter === label ? 'active' : ''} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label === 'All' ? 'All work' : label}<span>{label === 'All' ? '05' : String(projects.filter(p => p.category === label).length).padStart(2, '0')}</span></button>)}</div><span className="work-count" aria-live="polite">{String(visible.length).padStart(2, '0')} SELECTED PROJECTS</span></div><div className={`project-gallery ${filter !== 'All' ? 'filtered' : ''}`}>{visible.map(project => <ProjectShowcase key={project.id} project={project} onOpen={onOpen} />)}</div></section>;
}

function About() {
  return <section className="about-section frame" id="about" aria-labelledby="about-title"><IndexLabel number="02">THE PERSON BEHIND THE PROJECTS</IndexLabel><div className="about-intro"><Reveal className="about-title"><h2 id="about-title">SERIOUS<br />ABOUT<br /><span className="italic-word">possibility.</span></h2><span className="about-star"><Asterisk strokeWidth={1.1} /></span></Reveal><div className="about-text"><Reveal><p className="about-lead">A curious mind.<br />A habit of building things.</p><p>I’m Jayesh Sonar, a computer science student at Pillai College of Engineering. I’m interested in the point where software, machine learning, and thoughtful experiences meet.</p><p>My work ranges from AI-assisted applications to interactive AR learning. I like taking a problem apart, understanding the pieces, and making something useful from them.</p><a className="underlined-link" href={profile.resume} download="Jayesh-Sonar-Resume.pdf">Download résumé <Download size={18} /></a></Reveal><div className="about-facts"><div><strong>8.9<span>/10</span></strong><span>CGPA / THROUGH SEMESTER 6</span></div><a href={profile.leetcode} target="_blank" rel="noopener noreferrer"><strong>15<span>%</span><ArrowUpRight size={20} /></strong><span>TOP GLOBAL LEETCODE PERCENTILE</span></a></div></div></div><div className="experience-strip"><span className="small-label">IN THE REAL WORLD</span><div><h3>Software / AR Development Intern</h3><p>Bio-verse · Pillai College of Engineering</p></div><p className="experience-description">{profile.experience[0].description}</p><span className="experience-date">MAY — JUN 2025</span></div><div className="skills-editorial"><span className="small-label">TOOLS I THINK WITH</span><div>{profile.additionalSkills.map(group => <details key={group.label}><summary>{group.label}<Plus size={18} /></summary><p>{group.items.join(' / ')}</p></details>)}<details><summary>AI / ML<Plus size={18} /></summary><p>PyTorch / TensorFlow / Keras / BERT / OpenCV / YOLO / Hugging Face</p></details><details><summary>Courses & certifications<Plus size={18} /></summary><ul>{profile.certifications.map(item => <li key={item}>{item}</li>)}</ul></details></div></div></section>;
}

function Journey() {
  const [selected, setSelected] = useState(0); const reduced = useReducedMotion();
  const chapter = profile.journey[selected];
  return <section className="journey-section frame" aria-labelledby="journey-title" id="journey"><div className="journey-heading"><IndexLabel number="↗">THE LONGER STORY</IndexLabel><h2 id="journey-title">FOUR YEARS.<br />STILL BECOMING.</h2><p>It started on my birthday, 18 August 2023.<br />From finding my footing to preparing for my first professional role.</p></div><div className="journey-layout"><div className="year-navigation" role="group" aria-label="Choose an engineering year">{profile.journey.map((item, index) => <button key={item.year} data-year={index} aria-pressed={selected === index} aria-controls="journey-story" onClick={() => setSelected(index)}><span>0{index+1}</span><strong>{item.dates}</strong><span>{item.label}</span><ArrowRight size={20} /></button>)}</div><div id="journey-story" className="journey-story" aria-live="polite" aria-atomic="true"><AnimatePresence mode="wait"><motion.div key={selected} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><span className="small-label">CHAPTER {chapter.year}</span><h3>{chapter.title}</h3><p>{chapter.story}</p><div className="chapter-reflection"><span className="small-label">WHAT I TAKE FORWARD</span><p>{chapter.reflection}</p></div><ul className="chapter-skills" aria-label="Chapter focus">{chapter.skills.map(skill => <li key={skill}>{skill}</li>)}</ul><span className="chapter-milestone">{chapter.milestone}</span></motion.div></AnimatePresence></div></div></section>;
}

function SignalPlayground() {
  const [spread, setSpread] = useState(50);
  return <div className="signal-playground"><div className="signal-header"><span>PLAY WITH THE POSSIBILITIES</span><span>↗ LIVE EXPLORATION</span></div><svg viewBox="0 0 900 230" role="img" aria-label="An interactive field of flowing signal lines">{Array.from({ length: 25 }, (_, index) => { const points = Array.from({ length: 110 }, (_, step) => { const x = step / 109 * 900; const envelope = Math.sin(step / 109 * Math.PI); const y = 115 + (index - 12) * 4 + Math.sin(step / 109 * Math.PI * 3 + index * 0.12) * envelope * (spread * 0.65 + 5); return `${step ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`; }).join(' '); return <path d={points} key={index} fill="none" stroke={index % 7 === 0 ? '#aebfe7' : '#8294ae'} opacity={index % 7 === 0 ? 1 : 0.4} strokeWidth="1" />; })}</svg><label className="signal-control"><span>STRUCTURE</span><input aria-label="Signal variation" type="range" min="0" max="100" value={spread} onChange={event => setSpread(Number(event.target.value))} /><span>EXPLORATION</span></label></div>;
}

function Experiments({ onOpen }: { onOpen: (project: Project) => void }) {
  return <section className="experiments-section" id="experiments" aria-labelledby="experiments-title"><div className="frame"><IndexLabel number="03">THE LAB / ALWAYS A WORK IN PROGRESS</IndexLabel><div className="experiments-heading"><Reveal><h2 id="experiments-title">CURIOUS<br /><span>BY DEFAULT.</span></h2></Reveal><p>Small experiments.<br />Interesting questions.<br />Sometimes, that’s where the best ideas start.</p></div><div className="experiment-grid">{experiments.map(project => <Reveal key={project.id}><button className="experiment-button" data-project={project.id} data-cursor="OPEN" aria-haspopup="dialog" onClick={() => onOpen(project)}><ProjectVisual type={project.visual} /><div className="experiment-caption"><div><span className="small-label">{project.visual === 'fruit' ? 'COMPUTER VISION' : 'NATURAL LANGUAGE'}</span><h3>{project.title}</h3></div><ArrowUpRight size={27} /></div><p>{project.summary}</p></button></Reveal>)}</div><SignalPlayground /></div></section>;
}

function Contact() {
  return <section className="contact-section frame" id="contact" aria-labelledby="contact-title"><IndexLabel number="04">GOOD THINGS START WITH A CONVERSATION</IndexLabel><Reveal><a className="contact-title-link" href={`mailto:${profile.email}`}><h2 id="contact-title">HAVE AN IDEA?<br /><span>LET’S BUILD IT.</span></h2><ArrowUpRight className="contact-big-arrow" strokeWidth={1.2} /></a></Reveal><div className="contact-bottom"><div><span className="small-label">FOR OPPORTUNITIES & INTERESTING PROBLEMS</span><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20} /></a></div><div className="contact-socials">{links.map(link => <ExternalLink key={link.name} href={link.url}>{link.name}</ExternalLink>)}</div></div><footer><span>JAYESH SONAR © {new Date().getFullYear()}</span><span>ALWAYS LEARNING. ALWAYS BUILDING.</span><a href="#home">BACK TO TOP <ArrowUpRight size={15} /></a></footer></section>;
}

function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (project && !dialog.current?.open) dialog.current?.showModal(); }, [project]);
  return <dialog ref={dialog} id="project-dialog" className="case-dialog" data-theme={project?.visual} aria-labelledby="dialog-title" onClose={onClose} onClick={event => { if (event.target !== event.currentTarget) return; const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close(); }}><div className="dialog-top"><span className="small-label">BEHIND THE PROJECT</span><button className="dialog-close" aria-label="Close project details" onClick={() => dialog.current?.close()}>Close <X size={20} /></button></div>{project && <div className="dialog-content"><span className="small-label">{project.number} / {project.category}</span><h2 id="dialog-title">{project.title}</h2><p className="dialog-lead">{project.summary}</p><div className="dialog-tech">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div><div className="case-sections">{[['The problem', project.problem], ['The solution', project.approach], ['What I built', project.contribution], ['The outcome', project.result]].filter(([, body]) => body).map(([title, body], index) => <section key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{body}</p></div></section>)}</div><p className="case-note">{project.note}</p><div className="case-actions">{project.repo && <ExternalLink href={project.repo} className="underlined-link"><Code2 size={17} /> View source</ExternalLink>}{project.demo && <ExternalLink href={project.demo} className="underlined-link">Live demo</ExternalLink>}<span className="small-label">{project.source}</span></div></div>}</dialog>;
}

function Cursor() {
  const [label, setLabel] = useState(''); const reduced = useReducedMotion();
  const x = useMotionValue(-100); const y = useMotionValue(-100);
  useEffect(() => {
    if (reduced || !matchMedia('(pointer: fine) and (hover: hover)').matches) return;
    const move = (event: PointerEvent) => { x.set(event.clientX); y.set(event.clientY); setLabel((event.target as Element).closest<HTMLElement>('[data-cursor]')?.dataset.cursor || ''); };
    const leave = () => setLabel('');
    document.addEventListener('pointermove', move); document.addEventListener('pointerleave', leave);
    return () => { document.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', leave); };
  }, [reduced, x, y]);
  if (reduced) return null;
  return <motion.div className="cursor-label" aria-hidden="true" style={{ x, y }} animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.7 }}>{label}<ArrowUpRight size={15} /></motion.div>;
}

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return <><motion.div className="scroll-progress" style={{ scaleX: progress }} /><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><CinematicHero /><Work onOpen={setSelected} /><About /><Journey /><Experiments onOpen={setSelected} /><Contact /></main><CaseStudy project={selected} onClose={() => setSelected(null)} /><Cursor /></>;
}
