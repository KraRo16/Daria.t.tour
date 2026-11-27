import { useEffect, useRef } from "react";
import { CONTACT, LANGUAGES_OFFERED } from "~/data/site";
import { durationLabel, moneyPerPerson, priceLabel, stopLabel, type Tour } from "~/data/tours";
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
          <div className={s.visual} style={{ background: tour.gradient }}>
            <img src={tour.image} alt={tour.name} style={{ objectPosition: tour.imagePosition }} />
          </div>
          <div className={s.body}>
            <button type="button" className={s.close} onClick={onClose} aria-label={t("tour.close")}>
              ×
            </button>
            <div className="eyebrow">{t(`city.${tour.city}` as const)}</div>
            <h3 className={s.title}>{tour.name}</h3>
            <p className={s.desc}>{tour.description[lang]}</p>

            <div className={s.stopsLabel}>{t("tour.stops")}</div>
            <div className={s.chips}>
              {tour.stops.map((stop) => {
                const label = stopLabel(stop, lang);
                return <span key={label}>{label}</span>;
              })}
            </div>

            <dl className={s.facts}>
              <dt>{t("tour.duration")}</dt>
              <dd>
                {durationLabel(tour.duration, lang)}
                {tour.duration.note && ` (${tour.duration.note[lang]})`}
              </dd>
              <dt>{t("tour.meet")}</dt>
              <dd>{tour.meetingPoint}</dd>
              <dt>{t("tour.langs")}</dt>
              <dd>{LANGUAGES_OFFERED}</dd>
              {tour.maxGroup && (
                <>
                  <dt>{t("tour.group")}</dt>
                  <dd>
                    {t("tour.upto")} {tour.maxGroup} {t("tour.people")}
                  </dd>
                </>
              )}
              <dt>{t("tour.price")}</dt>
              <dd>{priceLabel(tour.price)}</dd>
            </dl>

            <div className={s.extras}>
              <div className={s.extrasTitle}>{t("tour.extrasTitle")}</div>
              <ul>
                {tour.extras.ticket && (
                  <li>
                    {t(`extra.${tour.extras.ticket}` as const)}: {t("extra.buyApart")}.
                  </li>
                )}
                {tour.extras.audioguide !== undefined && (
                  <li>
                    {t("extra.audioguide")}: {moneyPerPerson(tour.extras.audioguide, lang)} {t("extra.perPerson")} (
                    {t("extra.payOnSite")}).
                  </li>
                )}
              </ul>
            </div>

            <a className="btn" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(tour.name)}`}>
              {t("tour.request")}
            </a>
          </div>
        </>
      )}
    </dialog>
  );
}
