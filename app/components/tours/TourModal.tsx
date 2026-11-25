import { useEffect, useRef } from "react";
import { CONTACT, LANGUAGES_OFFERED } from "~/data/site";
import { hoursLabel, type Tour } from "~/data/tours";
import { getT, type Lang } from "~/i18n/ui";
import s from "./TourModal.module.css";

interface Props {
  tour: Tour | null;
  lang: Lang;
  onClose: () => void;
}

export function TourModal({ tour, lang, onClose }: Props) {
  const t = getT(lang);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (tour && !d.open) d.showModal();
    if (!tour && d.open) d.close();
  }, [tour]);

  return (
    <dialog
      ref={ref}
      className={s.dialog}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // клик по затемнённому фону
      }}
    >
      {tour && (
        <>
          <div className={s.visual} style={{ background: tour.gradient }} />
          <div className={s.body}>
            <button type="button" className={s.close} onClick={onClose} aria-label={t("tour.close")}>
              ×
            </button>
            <div className="eyebrow">{t(`city.${tour.city}` as const)}</div>
            <h3 className={s.title}>{tour.name}</h3>
            <p className={s.desc}>{tour.description[lang]}</p>

            <div className={s.stopsLabel}>{t("tour.stops")}</div>
            <div className={s.chips}>
              {tour.stops.map((stop) => (
                <span key={stop}>{stop}</span>
              ))}
            </div>

            <dl className={s.facts}>
              <dt>{t("tour.duration")}</dt>
              <dd>{hoursLabel(tour.durationH, lang)}</dd>
              <dt>{t("tour.meet")}</dt>
              <dd>{tour.meetingPoint}</dd>
              <dt>{t("tour.langs")}</dt>
              <dd>{LANGUAGES_OFFERED}</dd>
              <dt>{t("tour.group")}</dt>
              <dd>
                {t("tour.upto")} {tour.maxGroup} {t("tour.people")}
              </dd>
              <dt>{t("tour.price")}</dt>
              <dd>
                {t("tour.from")} €{tour.priceFrom}
              </dd>
            </dl>

            <a className="btn" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(tour.name)}`}>
              {t("tour.request")}
            </a>
          </div>
        </>
      )}
    </dialog>
  );
}
