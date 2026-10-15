import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import './Lanyard.css';

const Lanyard = lazy(() => import('./Lanyard'));
const artwork = '/images/id/';

export function IdentityBadge() {
  const host = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNear(true); observer.disconnect(); }
    }, { rootMargin: '200px' });
    if (host.current) observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  const fallback = <img className="lanyard-fallback" src={`${artwork}front.svg`} alt="Jayesh Sonar’s ID card" />;
  return <div ref={host} className="identity-badge">
    <h2 id="about-title" className="id-sr-only">Meet Jayesh Sonar</h2>
    {near ? <Suspense fallback={fallback}><Lanyard frontImage={`${artwork}front.svg`} backImage={`${artwork}back.svg`} strapImage={`${artwork}strap.svg`} cardColor="#152825" strapColor="#214a40" metal="gold" size={0.68} strapLength={0.22} breeze={0.65} damping={0.55} /></Suspense> : fallback}
  </div>;
}
