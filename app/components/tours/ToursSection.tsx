import { useState } from "react";
import { cities, type Tour } from "~/data/tours";
import { getT, type Lang } from "~/i18n/ui";
import { CityBlock } from "./CityBlock";
import { TourModal } from "./TourModal";
import s from "./ToursSection.module.css";

export function ToursSection({ lang }: { lang: Lang }) {
  const t = getT(lang);
  const [open, setOpen] = useState<Tour | null>(null);

  return (
    <section id="tour" className={s.section}>
      <div className="eyebrow">{t("tours.eyebrow")}</div>
      {cities.map((city) => (
        <CityBlock key={city} city={city} lang={lang} onOpen={setOpen} />
      ))}
      <TourModal tour={open} lang={lang} onClose={() => setOpen(null)} />
    </section>
  );
}
