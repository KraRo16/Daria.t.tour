import { toursByCity, type City, type Tour } from "~/data/tours";
import { getT, type Lang } from "~/i18n/ui";
import { useReveal } from "~/hooks/useReveal";
import { TourCard } from "./TourCard";
import s from "./CityBlock.module.css";

interface Props {
  city: City;
  lang: Lang;
  onOpen: (tour: Tour) => void;
}

export function CityBlock({ city, lang, onOpen }: Props) {
  const t = getT(lang);
  const head = useReveal<HTMLElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <div id={`city-${city}`} className={s.city}>
      <header ref={head.ref} className={`${s.head} reveal ${head.hidden ? "reveal-hide" : ""}`}>
        <h2 className={s.title}>{t(`city.${city}` as const)}</h2>
        <p>{t(`city.${city}.desc` as const)}</p>
      </header>

      <div ref={grid.ref} className={`${s.cards} reveal ${grid.hidden ? "reveal-hide" : ""}`}>
        {toursByCity(city).map((tour, i) => (
          <TourCard key={tour.id} tour={tour} index={i} lang={lang} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}
