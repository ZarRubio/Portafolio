import { useEffect, useRef } from 'react';

const INTERACTIVE = 'a, button, [role="tab"], input, textarea, label, summary';

// Decorative cursor follower: a soft glow + a ring that trails the pointer, grows over
// interactive elements and pulses on click. Mouse/trackpad only; off for touch and reduced motion.
export function CursorGlow() {
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!fine || reduced || !ring || !glow) return undefined;

    document.documentElement.classList.add('has-cursor-glow');
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let frame = 0;

    const tick = () => {
      ringX += (targetX - ringX) * 0.2;
      ringY += (targetY - ringY) * 0.2;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      glow.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      frame = Math.abs(targetX - ringX) + Math.abs(targetY - ringY) > 0.1 ? requestAnimationFrame(tick) : 0;
    };
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      ring.classList.add('is-visible');
      glow.classList.add('is-visible');
      ring.classList.toggle('is-hover', Boolean(event.target.closest?.(INTERACTIVE)));
      wake();
    };
    const onLeave = () => {
      ring.classList.remove('is-visible');
      glow.classList.remove('is-visible');
    };
    const onDown = () => {
      ring.classList.remove('is-click');
      void ring.offsetWidth; // restart the pulse animation
      ring.classList.add('is-click');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerleave', onLeave);
      document.documentElement.classList.remove('has-cursor-glow');
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className='cursor-glow' aria-hidden='true' />
      <div ref={ringRef} className='cursor-ring' aria-hidden='true'><span /></div>
    </>
  );
}
