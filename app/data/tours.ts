import type { Lang } from "~/i18n/ui";
import cittaAlta from "~/assets/tours/citta-alta.jpg";
import accademiaCarrara from "~/assets/tours/accademia-carrara.jpg";
import gamec from "~/assets/tours/gamec.jpg";
import centroStorico from "~/assets/tours/centro-storico.jpg";
import pinacotecaBrera from "~/assets/tours/pinacoteca-di-brera.jpg";
import palazzoCitterio from "~/assets/tours/palazzo-citterio.jpg";

export type City = "bergamo" | "milano";
export const cities: City[] = ["bergamo", "milano"];

type L10n = Record<Lang, string>;
type Stop = string | L10n; // имя собственное (не переводится) или переводимое название

export interface Tour {
  id: string; // slug, потом пригодится для страницы тура
  city: City;
  name: string; // имя собственное, не переводится
  duration: { min: number; max?: number; note?: L10n }; // часы
  price: { min: number; max?: number }; // евро
  maxGroup?: number; // не указан → строка скрывается в модалке
  gradient: string; // фон на время загрузки фото
  image: string;
  imagePosition: string; // какая часть кадра остаётся видимой при обрезке (object-position)
  subtitle: L10n;
  description: L10n;
  stops: Stop[];
  meetingPoint: string;
  extras: { ticket?: "museum" | "museumChurches" | "duomo"; audioguide?: number }; // audioguide: € с человека
}

export const tours: Tour[] = [
  {
    id: "citta-alta",
    city: "bergamo",
    name: "Città Alta",
    duration: {
      min: 1.5,
      max: 2,
      note: {
        it: "con la Basilica Santa Maria Maggiore",
        en: "including the Basilica of Santa Maria Maggiore",
        uk: "з базилікою Санта-Марія-Маджоре",
      },
    },
    price: { min: 150, max: 180 },
    gradient: "linear-gradient(160deg,#ffd27a,#e58a2e 55%,#7a3b22)",
    image: cittaAlta,
    imagePosition: "52% 50%",
    subtitle: {
      it: "Centro storico di Bergamo",
      en: "Bergamo’s old town",
      uk: "Історичний центр Бергамо",
    },
    description: {
      it: "Una stratificazione storica di epoche romana, medioevale e rinascimentale.",
      en: "A historical stratification from the Roman, Medieval and Renaissance eras.",
      uk: "Історична стратифікація з римської, середньовічної та епох Відродження.",
    },
    stops: [
      "La Rocca",
      "le Case-Torri",
      "l'antico lavatoio",
      "Piazza Vecchia con la Cappella Colleoni e la Basilica di Santa Maria Maggiore",
    ],
    meetingPoint: "Piazza Mercato delle Scarpe",
    extras: { ticket: "museumChurches", audioguide: 2.5 },
  },
  {
    id: "accademia-carrara",
    city: "bergamo",
    name: "Accademia Carrara",
    duration: { min: 1.5 },
    price: { min: 150 },
    maxGroup: 25,
    gradient: "linear-gradient(160deg,#f2a65a,#b5532f 55%,#4a2418)",
    image: accademiaCarrara,
    imagePosition: "50% 25%",
    subtitle: {
      it: "Museo d’arte XV–XIX sec.",
      en: "Art museum, 15th–19th c.",
      uk: "Музей мистецтва XV–XIX ст.",
    },
    description: {
      it: "Dipinti preziosi dal Gotico all’Ottocento, un’immersione totale nella storia dell’arte.",
      en: "Precious paintings from the Gothic to the 19th century: a total immersion in the history of art.",
      uk: "Коштовні полотна від готики до XIX століття: повне занурення в історію мистецтва.",
    },
    stops: ["Mantegna", "Bellini", "Raffaello", "Botticelli", "Lotto"],
    meetingPoint: "Ingresso Accademia Carrara",
    extras: { ticket: "museum", audioguide: 1 },
  },
  {
    id: "gamec",
    city: "bergamo",
    name: "GAMeC",
    duration: { min: 1 },
    price: { min: 150 },
    maxGroup: 20,
    gradient: "linear-gradient(160deg,#ffe066,#f08a1c 50%,#b83a2a)",
    image: gamec,
    imagePosition: "50% 50%",
    subtitle: {
      it: "Galleria d’Arte Moderna e Contemporanea",
      en: "Modern and Contemporary Art Gallery",
      uk: "Галерея сучасного мистецтва",
    },
    description: {
      it: "Le avanguardie del Novecento e Arte Contemporanea: capirle senza fatica!",
      en: "The 20th-century avant-gardes and contemporary art: understanding them without effort!",
      uk: "Авангарди XX століття та сучасне мистецтво: зрозуміти їх без зусиль!",
    },
    stops: [
      "Balla",
      "Manzù",
      "Kandinsky",
      "De Chirico",
      "Morandi",
      "Mastrovito",
      "De Bruyckere",
      { it: "Mostre temporanee", en: "Temporary exhibitions", uk: "Тимчасові виставки" },
    ],
    meetingPoint: "Ingresso GAMeC",
    extras: { ticket: "museum" },
  },
  {
    id: "centro-storico",
    city: "milano",
    name: "Centro storico",
    duration: {
      min: 2,
      max: 3,
      note: { it: "con Duomo", en: "including the Duomo", uk: "з Дуомо" },
    },
    price: { min: 180, max: 240 },
    maxGroup: 25,
    gradient: "linear-gradient(160deg,#ffe9a8,#e9b44c 55%,#7b5a2a)",
    image: centroStorico,
    imagePosition: "50% 40%",
    subtitle: {
      it: "Castello Sforzesco · Duomo",
      en: "Sforza Castle · Duomo",
      uk: "Замок Сфорца · Дуомо",
    },
    description: {
      it: "Dal Castello Sforzesco al Duomo, una passeggiata alla scoperta di Milano!",
      en: "From Sforza Castle to the Duomo, a walk to discover Milan!",
      uk: "Від замку Сфорцеско до Дуомо: прогулянка, щоб відкрити Мілан!",
    },
    stops: [
      "Castello Sforzesco",
      "Via Dante",
      "Piazza Mercanti",
      "Piazza Duomo",
      "Galleria Vittorio Emanuele II",
      "Piazza della Scala",
    ],
    meetingPoint: "Castello Sforzesco",
    extras: { ticket: "duomo", audioguide: 2.5 },
  },
  {
    id: "pinacoteca-di-brera",
    city: "milano",
    name: "Pinacoteca di Brera",
    duration: { min: 2 },
    price: { min: 180 },
    maxGroup: 25,
    gradient: "linear-gradient(160deg,#f7c873,#c56a3a 55%,#4d2a1c)",
    image: pinacotecaBrera,
    imagePosition: "50% 40%",
    subtitle: {
      it: "Museo d’arte XII–XIX sec.",
      en: "Art museum, 12th–19th c.",
      uk: "Музей мистецтва XII–XIX ст.",
    },
    description: {
      it: "Un viaggio attraverso i capolavori di Brera per scoprire il legame tra i grandi artisti del passato!",
      en: "A journey through Brera’s masterpieces to discover the link between the great artists of the past!",
      uk: "Подорож шедеврами Брери, щоб відкрити зв’язок між великими митцями минулого!",
    },
    stops: [
      "Bellini",
      "Mantegna",
      "Tintoretto",
      "Veronese",
      "Bramante",
      "Raffaello",
      "Piero della Francesca",
      "Caravaggio",
      "Canaletto",
      "Hayez",
    ],
    meetingPoint: "Ingresso Pinacoteca di Brera",
    extras: { ticket: "museum", audioguide: 2 },
  },
  {
    id: "palazzo-citterio",
    city: "milano",
    name: "Palazzo Citterio",
    duration: { min: 1 },
    price: { min: 150 },
    maxGroup: 20,
    gradient: "linear-gradient(160deg,#ffd45c,#ee8f1e 45%,#8a3b4a)",
    image: palazzoCitterio,
    imagePosition: "50% 35%",
    subtitle: {
      it: "Museo d’arte del XX sec.",
      en: "20th-century art museum",
      uk: "Музей мистецтва XX ст.",
    },
    description: {
      it: "Le avanguardie del Novecento da assaporare in tutta tranquillità!",
      en: "The 20th-century avant-gardes, to be savoured in complete calm!",
      uk: "Авангарди XX століття, якими можна насолоджуватися без поспіху!",
    },
    stops: ["Boccioni", "Morandi", "Modigliani", "Picasso", "Carrà", "Sironi", "De Chirico"],
    meetingPoint: "Ingresso Palazzo Citterio",
    extras: { ticket: "museum", audioguide: 2 },
  },
];

export const toursByCity = (city: City) => tours.filter((t) => t.city === city);

const num = (n: number, lang: Lang) => String(n).replace(".", lang === "en" ? "." : ",");

export function durationLabel(d: Tour["duration"], lang: Lang) {
  const range = d.max ? `${num(d.min, lang)} – ${num(d.max, lang)}` : num(d.min, lang);
  return `${range} ${lang === "uk" ? "год" : "h"}`;
}

export const priceLabel = (p: Tour["price"]) => (p.max ? `€${p.min} – €${p.max}` : `€${p.min}`);

export const stopLabel = (s: Stop, lang: Lang) => (typeof s === "string" ? s : s[lang]);

export function moneyPerPerson(n: number, lang: Lang) {
  const v = n.toFixed(2);
  return lang === "en" ? `€${v}` : `${v.replace(".", ",")} €`;
}
