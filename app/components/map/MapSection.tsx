import { useState } from "react";
import { LombardyMap } from "./LombardyMap";
import { toursByCity, hoursLabel, type City } from "~/data/tours";
import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import s from "./MapSection.module.css";

export function MapSection({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const [shown, setShown] = useState<City | null>(null); // город в панели (по наведению или клику)
  const [selected, setSelected] = useState<City | null>(null); // город, по которому уже кликали
  const map = useReveal<HTMLDivElement>();
  const info = useReveal<HTMLDivElement>();

  const go = (city: City) => {
    const el = document.getElementById(`city-${city}`);
    if (!el) return; // блок туров появится на следующем шаге
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("flash");
    window.setTimeout(() => el.classList.remove("flash"), 1800);
  };

  const onSelect = (city: City) => {
    const touch = window.matchMedia("(hover: none)").matches;
    const again = selected === city;
    setSelected(city);
    setShown(city);
    // на телефоне первое касание показывает панель, второе ведёт к турам
    if (touch && !again) return;
    go(city);
  };

  return (
    <section id="mappa" className={s.section}>
      <div className={s.wrap}>
        <div ref={map.ref} className={`${s.map} reveal ${map.hidden ? "reveal-hide" : ""}`}>
          <LombardyMap lang={lang} active={shown} onHover={setShown} onSelect={onSelect} />
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
                      <span>{tour.name}</span>
                      <span>{hoursLabel(tour.durationH, lang)}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className="btn" onClick={() => go(shown)}>
                  {t("map.go")}
                </button>
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
    </section>
  );
}
