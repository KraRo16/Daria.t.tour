import { ITALY } from "~/data/italy";
import { getT, type Lang } from "~/i18n/ui";
import s from "./ItalyLocator.module.css";

export function ItalyLocator({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const f = ITALY.frame;
  return (
    <svg className={s.locator} viewBox={ITALY.viewBox} role="img" aria-label={t("map.italy")}>
      <path className={s.regions} d={ITALY.regions} />
      <path className={s.lombardia} d={ITALY.lombardia} />
      <rect className={s.frame} x={f.x} y={f.y} width={f.w} height={f.h} rx={2} />
    </svg>
  );
}
