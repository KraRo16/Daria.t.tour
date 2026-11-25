import { useEffect, useRef, useState } from "react";
import { getT, type Lang } from "~/i18n/ui";
import s from "./Hero.module.css";

const FADE = 1.2; // длительность перехода, секунды

const SLIDES = [
  { src: "/video/hero-bergamo.mp4", poster: "/video/hero-bergamo-poster.jpg", cap: "hero.cap.bg" },
  { src: "/video/hero-milano.mp4", poster: "/video/hero-milano-poster.jpg", cap: "hero.cap.mi" },
] as const;

export function Hero({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const [st, setSt] = useState({ active: 0, prev: -1 });
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const current = useRef(0);
  const switching = useRef(false);
  const motion = useRef(false);

  const goTo = (next: number) => {
    const from = current.current;
    const a = refs.current[from];
    const b = refs.current[next];
    if (!motion.current || switching.current || next === from || !a || !b) return;
    switching.current = true;
    b.currentTime = 0;
    b.play().catch(() => {});
    current.current = next;
    setSt({ active: next, prev: from });
    window.setTimeout(
      () => {
        a.pause();
        a.currentTime = 0;
        setSt((p) => ({ ...p, prev: -1 }));
        switching.current = false;
      },
      FADE * 1000 + 100,
    );
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const vids = refs.current.filter(Boolean) as HTMLVideoElement[];
    motion.current = true;
    vids.forEach((v) => (v.muted = true)); // React не пишет атрибут muted в серверный HTML
    vids[0].play().catch(() => {});

    const onTime = (e: Event) => {
      const v = e.currentTarget as HTMLVideoElement;
      if (vids.indexOf(v) !== current.current || !v.duration) return;
      if (v.currentTime >= v.duration - FADE) goTo((current.current + 1) % vids.length);
    };
    vids.forEach((v) => v.addEventListener("timeupdate", onTime));
    return () => vids.forEach((v) => v.removeEventListener("timeupdate", onTime));
  }, []);

  const words = t("hero.title").split(" ");

  return (
    <section id="top" className={s.hero}>
      {SLIDES.map((sl, i) => (
        <video
          key={sl.src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`${s.video} ${i === st.active ? s.on : i === st.prev ? s.prev : ""}`}
          muted
          playsInline
          preload="auto"
          poster={sl.poster}
          aria-hidden="true"
        >
          <source src={sl.src} type="video/mp4" />
        </video>
      ))}
      <div className={s.shade} />

      <h1 className={s.title}>
        {words.map((w, i) => (
          <span key={i}>
            <span className={s.w}>
              <b style={{ animationDelay: `${i * 0.12}s` }}>{w}</b>
            </span>{" "}
          </span>
        ))}
        <em className={s.sub}>
          <span className={s.w}>
            <b style={{ animationDelay: "0.5s" }}>{t("hero.subtitle")}</b>
          </span>
        </em>
      </h1>

      <svg className={s.stroke} viewBox="0 0 640 30" preserveAspectRatio="none" aria-hidden="true">
        <path d="M2 18 C120 4 220 28 330 14 S540 6 638 16" />
      </svg>
      <div className={s.meta}>
        <span key={st.active} className={s.cap}>
          {t(SLIDES[st.active].cap)}
        </span>
        <div className={s.dots}>
          {SLIDES.map((sl, i) => (
            <button
              key={sl.src}
              type="button"
              className={i === st.active ? s.dotOn : s.dot}
              aria-label={t(sl.cap)}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
