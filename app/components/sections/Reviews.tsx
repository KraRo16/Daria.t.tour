import { useEffect, useState } from "react";
import { reviews } from "~/data/reviews";
import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import s from "./Reviews.module.css";

export function Reviews({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const box = useReveal<HTMLDivElement>();

  // автопрокрутка раз в 6 секунд; пауза при наведении/фокусе и при «уменьшить анимацию»
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setIdx((p) => (p + 1) % reviews.length), 6000);
    return () => window.clearTimeout(id);
  }, [idx, paused]);

  const r = reviews[idx];

  return (
    <section className={s.section}>
      <div
        ref={box.ref}
        className={`reveal ${box.hidden ? "reveal-hide" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="eyebrow">{t("rev.eyebrow")}</div>
        <h2 className={s.title}>{t("rev.title")}</h2>

        <figure key={idx} className={s.slide}>
          <blockquote lang={r.lang} className={s.quote}>
            “{r.text}”
          </blockquote>
          <div className={s.stars} role="img" aria-label="5 / 5">
            ★★★★★
          </div>
          <figcaption className={s.who}>
            {r.author} · {r.place}
          </figcaption>
        </figure>

        <div className={s.dots}>
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${s.dot} ${i === idx ? s.dotOn : ""}`}
              aria-label={`${t("rev.go")} ${i + 1}`}
              aria-current={i === idx ? "true" : undefined}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
