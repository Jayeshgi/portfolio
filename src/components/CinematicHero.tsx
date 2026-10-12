import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';

function ElasticWord({ text, className = '' }: { text: string; className?: string }) {
  const [pointer, setPointer] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return <span className={`elastic-word ${className}`} aria-hidden="true" onPointerMove={event => {
    if (reduced || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer((event.clientX - bounds.left) / bounds.width * text.length);
  }} onPointerLeave={() => setPointer(null)}>
    {[...text].map((letter, index) => {
      const influence = pointer === null ? 0 : Math.exp(-Math.pow(index + 0.5 - pointer, 2) / 1.15);
      return <motion.span key={index} className="elastic-letter" animate={{ scaleY: 1 + influence * 0.38, scaleX: 1 + influence * 0.035, y: -influence * 5 }} transition={{ type: 'spring', stiffness: 280, damping: 19, mass: 0.45 }}>{letter}</motion.span>;
    })}
  </span>;
}

export function CinematicHero() {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 26, restDelta: 0.001 });
  const portraitY = useTransform(progress, [0, 1], [0, -28]);
  const portraitRotate = useTransform(progress, [0, 1], [-1, 4]);
  const portraitTurn = useTransform(progress, [0, 1], [10, -18]);
  const portraitTilt = useTransform(progress, [0, 1], [-2, 5]);
  const portraitScale = useTransform(progress, [0, 1], [1, 0.94]);
  const nameY = useTransform(progress, [0, 0.6], [0, -90]);
  const nameOpacity = useTransform(progress, [0, 0.28, 0.43], [1, 1, 0]);
  const secondOpacity = useTransform(progress, [0.5, 0.75], [0, 1]);
  const secondY = useTransform(progress, [0.38, 1], [55, 0]);
  const backgroundY = useTransform(progress, [0, 1], ['0%', '-8%']);
  const backgroundOpacity = useTransform(progress, [0, 1], [0.4, 0.65]);
  const lineScale = useTransform(progress, [0, 1], [0.04, 1]);

  return <section ref={section} id="home" className={`cinematic-hero${reduced ? ' cinema-reduced' : ''}`} aria-labelledby="hero-title">
    <div className="cinematic-stage">
      <motion.div className="cinema-landscape" aria-hidden="true" style={reduced ? undefined : { y: backgroundY, opacity: backgroundOpacity }}>
        <div className="cinema-landscape-drift" style={{ animationPlayState: paused || reduced ? 'paused' : 'running' }}>
          <img src="/images/personal/sunset.jpg" alt="" width="960" height="1280" />
        </div>
      </motion.div>
      <div className="cinema-shade" aria-hidden="true" />
      <div className="cinema-grain" aria-hidden="true" />
      <div className="cinema-topline"><span>JAYESH SONAR / A PERSONAL PORTFOLIO</span><span className="cinema-availability"><i /> OPEN TO OPPORTUNITIES</span></div>

      <div className="cinema-portrait-light" aria-hidden="true" />
      <motion.div className="cinema-portrait" style={reduced ? undefined : { y: portraitY, rotateZ: portraitRotate, rotateY: portraitTurn, rotateX: portraitTilt, scale: portraitScale, transformPerspective: 1200 }}>
        <img src="/images/personal/jayesh-cutout.png" alt="Jayesh Sonar, facing left toward his introduction" width="1086" height="1448" fetchPriority="high" />
      </motion.div>

      <motion.div className="cinema-intro" style={reduced ? undefined : { y: nameY, opacity: nameOpacity }}>
        <p className="cinema-kicker">A CURIOUS MIND, IN THE MAKING.</p>
        <h1 id="hero-title" aria-label="Jayesh Sonar"><ElasticWord text="JAYESH" /><ElasticWord text="SONAR." className="cinema-surname" /></h1>
      </motion.div>

      <motion.aside className="cinema-profile" style={reduced ? undefined : { opacity: nameOpacity }} aria-label="About Jayesh">
        <span className="cinema-kicker">THE PERSON BEHIND THE CODE</span>
        <div className="cinema-intro-copy"><p>Computer science.<br /><em>A human perspective.</em></p></div>
        <p className="cinema-bio">I’m a computer science student at Pillai College of Engineering, exploring AI, computer vision, and the software that brings them into everyday use.</p>
        <p className="cinema-bio">From detecting fruit in images to investigating interface patterns, I learn by building ideas into working projects.</p>
        <p className="cinema-college">2023—2027 / B.TECH COMPUTER SCIENCE</p>
      </motion.aside>

      {!reduced && <motion.div className="cinema-second-copy" style={{ opacity: secondOpacity, y: secondY }}>
        <span className="cinema-kicker">FOUR YEARS OF ENGINEERING. A STORY STILL UNFOLDING.</span>
        <h2>STILL<br /><em>becoming.</em></h2>
        <p>From my first year in 2023 to building with AI.<br />A few moments from the person behind the projects.</p>
        <span className="cinema-years">2023 <span>—</span> 2027</span>
      </motion.div>}

      <span className="cinema-margin-note" aria-hidden="true">CODE / CURIOSITY / EVERYTHING IN BETWEEN</span>
      <div className="cinema-bottom">
        <a className="cinema-work-link" href="#work">EXPLORE MY WORK <ArrowDown size={19} /></a>
        <span className="cinema-scroll-note">{reduced ? 'AI / ML & SOFTWARE' : 'SCROLL TO TURN THE PAGE'}<span className="cinema-chapter-line"><motion.i style={{ scaleX: reduced ? 1 : lineScale }} /></span></span>
        {!reduced && <button className="cinema-motion-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Resume background motion' : 'Pause background motion'}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? 'BACKGROUND PAUSED' : 'PAUSE MOTION'}</span></button>}
        {reduced && <a className="cinema-contact-link" href="mailto:er.jayeshsonar@gmail.com">SAY HELLO <ArrowUpRight size={17} /></a>}
      </div>
    </div>
  </section>;
}
