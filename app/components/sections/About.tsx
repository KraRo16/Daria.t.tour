import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import { useCountUp } from "~/hooks/useCountUp";
import daria from "~/assets/daria.jpg";
import s from "./About.module.css";
import { cities, tours } from "~/data/tours";

function Stat({ n, label }: { n: number; label: string }) {
  const { ref, value } = useCountUp(n);
  return (
    <div>
      <b ref={ref}>{value}</b>
      <small>{label}</small>
    </div>
  );
}

export function About({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const photo = useReveal<HTMLDivElement>();
  const text = useReveal<HTMLDivElement>();
  const pre = t("about.pre");
  const post = t("about.post");

  return (
    <section id="chi" className={s.about}>
      <div ref={photo.ref} className={`${s.portrait} reveal ${photo.hidden ? "reveal-hide" : ""}`}>
        <img src={daria} alt={t("about.photoAlt")} width={570} height={615} loading="lazy" />
      </div>

      <div ref={text.ref} className={`reveal ${text.hidden ? "reveal-hide" : ""}`}>
        <div className="eyebrow">{t("about.eyebrow")}</div>
        <h2 className={s.title}>
          {t("about.line1")}
          <br />
          {pre && `${pre} `}
          <em>{t("about.em")}</em>
          {post && ` ${post}`}
        </h2>
        <p className={s.text}>{t("about.p1")}</p>
        <p className={s.text}>{t("about.p2")}</p>
        <a className="btn" href="#mappa">
          {t("about.cta")}
        </a>

        <div className={s.stats}>
          <Stat n={cities.length} label={t("stats.cities")} />
          <Stat n={tours.length} label={t("stats.tours")} />
          <Stat n={3} label={t("stats.langs")} />
        </div>
      </div>
    </section>
  );
}
