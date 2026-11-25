import { useEffect, useRef, useState } from "react";

// В HTML сразу итоговое число; анимация 0 → n запускается, когда блок виден.
export function useCountUp(target: number, ms = 900) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setValue(0);
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / ms, 1);
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3)))); // easeOutCubic
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target, ms]);

  return { ref, value };
}
