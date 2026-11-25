import { YEAR } from "~/data/site";
import { getT, type Lang } from "~/i18n/ui";
import s from "./Footer.module.css";

export function Footer({ lang }: { lang: Lang }) {
  const t = getT(lang);
  return (
    <footer className={s.footer}>
      <span>© {YEAR} Daria Romanenko Tour</span>
      <span>{t("hero.title")}</span>
    </footer>
  );
}
