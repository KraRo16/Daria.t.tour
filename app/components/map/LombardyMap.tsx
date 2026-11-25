import { LOMBARDY as M } from "~/data/lombardy";
import { cities, type City } from "~/data/tours";
import { getT, type Lang } from "~/i18n/ui";
import s from "./LombardyMap.module.css";

interface Props {
  lang: Lang;
  active: City | null;
  onHover: (city: City) => void;
  onSelect: (city: City) => void;
}

export function LombardyMap({ lang, active, onHover, onSelect }: Props) {
  const t = getT(lang);

  const bind = (c: City) => ({
    onMouseEnter: () => onHover(c),
    onClick: () => onSelect(c),
  });

  return (
    <svg viewBox={M.viewBox} className={s.svg} role="group" aria-label={t("map.aria")}>
      <path className={s.nb} d={M.neighbors} />
      <path className={s.region} d={M.region} />
      <path className={s.lines} d={M.provinceLines} />

      {cities.map((c) => (
        <path
          key={c}
          d={M.provinces[c]}
          className={`${s.prv} ${active === c ? s.hot : ""}`}
          tabIndex={0}
          role="button"
          aria-label={t(`city.${c}` as const)}
          onFocus={() => onHover(c)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(c);
            }
          }}
          {...bind(c)}
        />
      ))}

      <path className={s.route} d={M.route} />

      {M.towns.map((town) => (
        <g key={town.name}>
          <circle className={s.tw} cx={town.x} cy={town.y} r={2.5} />
          <text className={s.tl} x={town.x + 6} y={town.y - 4}>
            {town.name}
          </text>
        </g>
      ))}

      {cities.map((c) => {
        const p = M.cities[c];
        return (
          <g key={c} className={`${s.pt} ${active === c ? s.hot : ""}`} aria-hidden="true" {...bind(c)}>
            <circle className={s.ring} cx={p.x} cy={p.y} r={11} />
            <circle className={s.dot} cx={p.x} cy={p.y} r={9} />
            <text x={p.labelX} y={p.labelY} textAnchor={p.anchor}>
              {t(`city.${c}` as const)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
