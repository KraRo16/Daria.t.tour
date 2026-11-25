import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import s from "./Faq.module.css";

const ITEMS = [1, 2, 3, 4] as const;

export function Faq({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const box = useReveal<HTMLDivElement>();

  return (
    <section className={s.section}>
      <div ref={box.ref} className={`${s.wrap} reveal ${box.hidden ? "reveal-hide" : ""}`}>
        <div className="eyebrow">{t("faq.eyebrow")}</div>
        <h2 className={s.title}>{t("faq.title")}</h2>
        {ITEMS.map((n) => (
          <details key={n} className={s.item}>
            <summary>{t(`faq.q${n}` as const)}</summary>
            <p>{t(`faq.a${n}` as const)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
