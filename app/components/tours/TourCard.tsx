import { useRef } from "react";
import { hoursLabel, type Tour } from "~/data/tours";
import { getT, type Lang } from "~/i18n/ui";
import s from "./TourCard.module.css";

interface Props {
  tour: Tour;
  index: number;
  lang: Lang;
  onOpen: (tour: Tour) => void;
}

export function TourCard({ tour, index, lang, onOpen }: Props) {
  const t = getT(lang);
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <button
      ref={ref}
      type="button"
      className={s.card}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(tour)}
    >
      <div className={s.art} style={{ background: tour.gradient }} />
      <span className={s.n}>0{index + 1}</span>
      <span className={s.pill}>{hoursLabel(tour.durationH, lang)}</span>
      <h3>{tour.name}</h3>
      <p>{tour.subtitle[lang]}</p>
      <span className={s.go}>{t("tour.open")}</span>
    </button>
  );
}
