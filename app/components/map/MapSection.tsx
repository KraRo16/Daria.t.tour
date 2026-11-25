import { useState } from "react";
import { LombardyMap } from "./LombardyMap";
import { TourModal } from "~/components/tours/TourModal";
import { toursByCity, type City, type Tour } from "~/data/tours";
import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import s from "./MapSection.module.css";

export function MapSection({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const [shown, setShown] = useState<City | null>(null); // город в панели (наведение, фокус или клик)
  const [open, setOpen] = useState<Tour | null>(null); // тур, открытый в модалке
  const map = useReveal<HTMLDivElement>();
  const info = useReveal<HTMLDivElement>();

  return (
    <section id="mappa" className={s.section}>
      <div className={s.wrap}>
        <div ref={map.ref} className={`${s.map} reveal ${map.hidden ? "reveal-hide" : ""}`}>
          <LombardyMap lang={lang} active={shown} onSelect={setShown} />
        </div>

        <div ref={info.ref} className={`reveal ${info.hidden ? "reveal-hide" : ""}`}>
          <div className="eyebrow">{t("map.eyebrow")}</div>
          <h2 className={s.title}>{t("map.title")}</h2>
          <p className={s.hint}>{t("map.hint")}</p>

          <div className={s.panel}>
            {shown ? (
              <>
                <h3>{t(`city.${shown}` as const)}</h3>
                <p>{t(`city.${shown}.desc` as const)}</p>
                <ul className={s.list}>
                  {toursByCity(shown).map((tour) => (
                    <li key={tour.id}>
                      <div>
                        <span>{tour.name}</span>
                        <small>{tour.subtitle[lang]}</small>
                      </div>
                      <button type="button" className={s.more} onClick={() => setOpen(tour)}>
                        {t("tour.open")}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p>{t("map.default")}</p>
                <p className={s.dist}>{t("map.dist")}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <TourModal tour={open} lang={lang} onClose={() => setOpen(null)} />
    </section>
  );
}
