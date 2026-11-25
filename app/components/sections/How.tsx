import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import s from "./How.module.css";

const STEPS = [1, 2, 3] as const;

export function How({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section className={s.section}>
      <div ref={head.ref} className={`reveal ${head.hidden ? "reveal-hide" : ""}`}>
        <div className="eyebrow">{t("how.eyebrow")}</div>
        <h2 className={s.title}>{t("how.title")}</h2>
      </div>
      <div ref={grid.ref} className={`${s.grid} reveal ${grid.hidden ? "reveal-hide" : ""}`}>
        {STEPS.map((n) => (
          <div key={n} className={s.card}>
            <b>0{n}</b>
            <h3>{t(`how.${n}t` as const)}</h3>
            <p>{t(`how.${n}d` as const)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
