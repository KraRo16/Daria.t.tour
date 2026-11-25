import type { Lang } from "~/i18n/ui";

export type City = "bergamo" | "milano";
export const cities: City[] = ["bergamo", "milano"];

type L10n = Record<Lang, string>;

export interface Tour {
  id: string; // slug, потом пригодится для страницы тура
  city: City;
  name: string; // имя собственное, не переводится
  durationH: number;
  priceFrom: number; // ЗАГЛУШКА, заменить реальными ценами
  maxGroup: number; // ЗАГЛУШКА
  gradient: string; // пока градиент, позже фото
  subtitle: L10n;
  description: L10n;
  stops: string[];
  meetingPoint: string;
}

export const tours: Tour[] = [
  {
    id: "citta-alta",
    city: "bergamo",
    name: "Città Alta",
    durationH: 2,
    priceFrom: 150,
    maxGroup: 25,
    gradient: "linear-gradient(160deg,#ffd27a,#e58a2e 55%,#7a3b22)",
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
    meetingPoint: "Funicolare, Città Alta",
  },
  {
    id: "accademia-carrara",
    city: "bergamo",
    name: "Accademia Carrara",
    durationH: 2,
    priceFrom: 100,
    maxGroup: 8,
    gradient: "linear-gradient(160deg,#f2a65a,#b5532f 55%,#4a2418)",
    subtitle: {
      it: "Museo d’arte XV–XIX sec.",
      en: "Art museum, 15th–19th c.",
      uk: "Музей мистецтва XV–XIX ст.",
    },
    description: {
      it: "Dal Rinascimento all’Ottocento, imparando a guardare pennellata e composizione.",
      en: "From the Renaissance to the 1800s, learning to look at brushwork and composition.",
      uk: "Від Ренесансу до XIX ст.: вчимося бачити мазок і композицію.",
    },
    stops: ["Raffaello", "Botticelli", "Lorenzo Lotto"],
    meetingPoint: "Ingresso Accademia Carrara",
  },
  {
    id: "gamec",
    city: "bergamo",
    name: "GAMeC",
    durationH: 2,
    priceFrom: 100,
    maxGroup: 8,
    gradient: "linear-gradient(160deg,#ffe066,#f08a1c 50%,#b83a2a)",
    subtitle: {
      it: "Galleria d’Arte Moderna e Contemporanea",
      en: "Modern and Contemporary Art Gallery",
      uk: "Галерея сучасного мистецтва",
    },
    description: {
      it: "L’arte del Novecento e di oggi: colore, gesto e idee spiegati senza paura.",
      en: "20th-century and current art: colour, gesture and ideas, no intimidation.",
      uk: "Мистецтво XX століття й сьогодення: колір, жест, ідеї без складнощів.",
    },
    stops: ["Collezione permanente", "Mostre temporanee", "Arte del Novecento"],
    meetingPoint: "Ingresso GAMeC",
  },
  {
    id: "centro-storico",
    city: "milano",
    name: "Centro storico",
    durationH: 3,
    priceFrom: 120,
    maxGroup: 8,
    gradient: "linear-gradient(160deg,#ffe9a8,#e9b44c 55%,#7b5a2a)",
    subtitle: {
      it: "Palazzo Sforzesco · Duomo",
      en: "Sforza Castle · Duomo",
      uk: "Замок Сфорца · Дуомо",
    },
    description: {
      it: "Dal Castello al Duomo: volumi, luce e dettagli di una città che si scopre camminando.",
      en: "From the Castle to the Duomo: volumes, light and details of a city best met on foot.",
      uk: "Від замку до Дуомо: об’єми, світло й деталі міста, яке відкривають пішки.",
    },
    stops: ["Piazza del Duomo", "Galleria Vittorio Emanuele II", "Castello Sforzesco"],
    meetingPoint: "Piazza del Duomo",
  },
  {
    id: "pinacoteca-di-brera",
    city: "milano",
    name: "Pinacoteca di Brera",
    durationH: 2.5,
    priceFrom: 110,
    maxGroup: 8,
    gradient: "linear-gradient(160deg,#f7c873,#c56a3a 55%,#4d2a1c)",
    subtitle: {
      it: "Museo d’arte XII–XIX sec.",
      en: "Art museum, 12th–19th c.",
      uk: "Музей мистецтва XII–XIX ст.",
    },
    description: {
      it: "I capolavori di Brera raccontati attraverso luce, colore e costruzione dell’immagine.",
      en: "Brera’s masterpieces told through light, colour and how an image is built.",
      uk: "Шедеври Брери крізь світло, колір і побудову зображення.",
    },
    stops: ["Il Bacio · Hayez", "Mantegna · Cristo morto", "Raffaello · Sposalizio"],
    meetingPoint: "Ingresso Pinacoteca di Brera",
  },
  {
    id: "palazzo-citterio",
    city: "milano",
    name: "Palazzo Citterio",
    durationH: 2,
    priceFrom: 100,
    maxGroup: 8,
    gradient: "linear-gradient(160deg,#ffd45c,#ee8f1e 45%,#8a3b4a)",
    subtitle: {
      it: "Museo d’arte del XX sec.",
      en: "20th-century art museum",
      uk: "Музей мистецтва XX ст.",
    },
    description: {
      it: "Il Novecento a Milano: un percorso dentro il palazzo e le sue collezioni.",
      en: "The 20th century in Milan: a path through the palace and its collections.",
      uk: "XX століття в Мілані: маршрут палацом і його колекціями.",
    },
    stops: ["Collezione Jucker", "Collezione Vitali", "Architettura del palazzo"],
    meetingPoint: "Ingresso Palazzo Citterio",
  },
];

export const toursByCity = (city: City) => tours.filter((t) => t.city === city);

export function hoursLabel(h: number, lang: Lang) {
  const n = String(h).replace(".", lang === "en" ? "." : ",");
  return `${n} ${lang === "uk" ? "год" : "h"}`;
}
