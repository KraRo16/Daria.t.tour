import { useParams } from "react-router";
import type { Route } from "./+types/home";
import { defaultLang, getT, isLang } from "~/i18n/ui";
import { Nav } from "~/components/layout/Nav";
import { Hero } from "~/components/hero/Hero";
import { About } from "~/components/sections/About";
import { Principles } from "~/components/sections/Principles";
import { MapSection } from "~/components/map/MapSection";
import { How } from "~/components/sections/How";
import { Reviews } from "~/components/sections/Reviews";
import { Faq } from "~/components/sections/Faq";
import { Cta } from "~/components/sections/Cta";
import { Footer } from "~/components/layout/Footer";

export function meta({ params }: Route.MetaArgs) {
  const lang = isLang(params.lang) ? params.lang : defaultLang;
  const t = getT(lang);
  return [{ title: t("meta.title") }, { name: "description", content: t("meta.description") }];
}

export default function Home() {
  const { lang: raw } = useParams();
  const lang = isLang(raw) ? raw : defaultLang;
  const t = getT(lang);

  return (
    <>
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Principles lang={lang} />
        <MapSection lang={lang} />
        <How lang={lang} />
        <Reviews lang={lang} />
        <Faq lang={lang} />
        <Cta lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
