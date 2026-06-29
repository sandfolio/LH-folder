'use client';
import * as React from 'react';
import { cn } from './utils';

// ─── FadeIn — scroll reveal ───────────────────────────────────────────────────

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;   // ms
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn('transition-all ease-out', className)}
      style={{
        transitionDuration: '480ms',
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      {children}
    </div>
  );
}

// ─── Stagger — wraps children with staggered FadeIn ──────────────────────────

interface StaggerProps {
  children: React.ReactNode;
  staggerMs?: number;
  className?: string;
}

export function Stagger({ children, staggerMs = 80, className }: StaggerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <FadeIn delay={i * staggerMs}>{child}</FadeIn>
      ))}
    </div>
  );
}

// ─── CountUp — animates a number from 0 to target ────────────────────────────

interface CountUpProps {
  to: number;
  duration?: number;  // ms
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ to, duration = 1200, prefix = '', suffix = '', className }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const raf = (now: number) => {
      const pct = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - pct, 4); // ease-out-quart
      setCount(Math.round(ease * to));
      if (pct < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString('hi-IN')}{suffix}
    </span>
  );
}

// ─── QuietMarquee — subtle logo / partner band ───────────────────────────────

interface QuietMarqueeProps {
  children: React.ReactNode;
  speed?: number;   // seconds for one full pass
  className?: string;
}

export function QuietMarquee({ children, speed = 30, className }: QuietMarqueeProps) {
  return (
    <div className={cn('overflow-hidden', className)} aria-hidden>
      <div
        className="flex gap-12 w-max"
        style={{ animation: `ticker-scroll ${speed}s linear infinite` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
