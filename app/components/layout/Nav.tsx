import { Link } from "react-router";
import { languages, getT, type Lang } from "~/i18n/ui";
import logo from "~/assets/logo.png";
import s from "./Nav.module.css";

export function Nav({ lang }: { lang: Lang }) {
  const t = getT(lang);
  return (
    <nav className={s.nav}>
      <a className={s.logo} href="#top">
        <img src={logo} alt="" width={38} height={38} />
        Daria Romanenko Tour
      </a>
      <ul className={s.links}>
        <li>
          <a href="#chi">{t("nav.about")}</a>
        </li>
        <li>
          <a href="#mappa">{t("nav.tours")}</a>
        </li>
        <li>
          <a href="#contatti">{t("nav.contact")}</a>
        </li>
      </ul>
      <div className={s.lang}>
        {(Object.keys(languages) as Lang[]).map((l) => (
          <Link
            key={l}
            to={`/${l}`}
            reloadDocument
            hrefLang={l}
            aria-current={l === lang ? "true" : undefined}
            className={l === lang ? `${s.btn} ${s.on}` : s.btn}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}
