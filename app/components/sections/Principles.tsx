import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import s from "./Principles.module.css";

const ITEMS = [1, 2, 3] as const;

export function Principles({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section className={s.section}>
      <div ref={head.ref} className={`reveal ${head.hidden ? "reveal-hide" : ""}`}>
        <div className="eyebrow">{t("look.eyebrow")}</div>
        <h2 className={s.title}>{t("look.title")}</h2>
      </div>

      <div ref={grid.ref} className={`${s.grid} reveal ${grid.hidden ? "reveal-hide" : ""}`}>
        {ITEMS.map((n) => (
          <div key={n} className={s.card}>
            <h3>{t(`look.${n}t` as const)}</h3>
            <p>{t(`look.${n}d` as const)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
