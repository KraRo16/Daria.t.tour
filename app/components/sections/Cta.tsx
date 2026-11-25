import { CONTACT } from "~/data/site";
import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import s from "./Cta.module.css";

export function Cta({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const box = useReveal<HTMLDivElement>();

  return (
    <section id="contatti" className={s.cta}>
      <div ref={box.ref} className={`reveal ${box.hidden ? "reveal-hide" : ""}`}>
        <div className="eyebrow">{t("nav.contact")}</div>
        <h2 className={s.title}>
          {t("cta.title1")}
          <br />
          <em>{t("cta.title2")}</em>
        </h2>
        <a className="btn" href={`mailto:${CONTACT.email}`}>
          {t("cta.button")}
        </a>

        <div className={s.contacts}>
          <div>
            <small>Email</small>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div>
            <small>{t("cta.phone")}</small>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
          </div>
          <div>
            <small>{t("cta.where")}</small>
            Milano · Bergamo
          </div>
        </div>
      </div>
    </section>
  );
}
