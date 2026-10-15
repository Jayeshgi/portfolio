import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './HoverExpand.css';

export interface HoverExpandItem {
  label: string;
  sublabel?: string;
  image: string;
  imageAlt?: string;
  description?: string;
}

// Adapted from the supplied HoverExpand, using the site's existing motion package.
export function HoverExpand({ items }: { items: HoverExpandItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [tapped, setTapped] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const active = hovered ?? focused ?? tapped;

  return <div className="tech-hover-list" onPointerLeave={event => { if (event.pointerType === 'mouse') setHovered(null); }}>
    {items.map((item, i) => {
      const expanded = active === i;
      return <motion.button key={item.label} type="button" className="tech-hover-row"
        aria-expanded={expanded} aria-controls={`tech-detail-${i}`}
        onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(i); }}
        onFocus={event => { if (event.currentTarget.matches(':focus-visible')) setFocused(i); }}
        onBlur={() => setFocused(null)}
        onClick={() => setTapped(tapped === i ? null : i)}
        onKeyDown={event => { if (event.key === 'Escape') { setHovered(null); setFocused(null); setTapped(null); } }}
        initial={false}
        animate={{ height: expanded ? 'var(--tech-row-height)' : 78 }}
        transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 280, damping: 32, mass: 0.9 }}>
        <motion.div className="tech-hover-art" initial={false}
          animate={{ opacity: expanded ? 1 : 0.22, scale: expanded ? 1 : 1.06 }}
          transition={{ duration: reduced ? 0 : 0.45 }}>
          <img src={item.image} alt={item.imageAlt ?? ''} loading="lazy" decoding="async" />
        </motion.div>
        <div className="tech-hover-shade" />
        <div className="tech-hover-copy">
          <span className="tech-hover-heading"><span className="tech-hover-number">{String(i + 1).padStart(2, '0')}</span><span className="tech-hover-label">{item.label}</span><span className="tech-hover-category">{item.sublabel}</span><span className="tech-hover-arrow" aria-hidden="true">{expanded ? '−' : '↗'}</span></span>
          <motion.span id={`tech-detail-${i}`} className="tech-hover-description" aria-hidden={!expanded}
            initial={false} animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0, marginTop: expanded ? 14 : 0 }}
            transition={{ duration: reduced ? 0 : 0.22 }}>{item.description}</motion.span>
        </div>
      </motion.button>;
    })}
  </div>;
}
