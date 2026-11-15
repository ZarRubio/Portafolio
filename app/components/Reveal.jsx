import { useEffect, useRef, useState } from 'react';

export function Reveal({ children, className = '', delay = 0, as = 'div', amount = 0.18 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const Tag = as;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: amount, rootMargin: '0px 0px -48px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
