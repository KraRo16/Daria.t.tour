// ЗАГЛУШКИ: заменить настоящими отзывами (или скрыть секцию до первых отзывов)
export interface Review {
  text: string;
  author: string;
  place: string;
  lang: "it" | "en" | "uk"; // язык самого отзыва, для доступности
}

export const reviews: Review[] = [
  {
    text: "Daria ci ha fatto vedere Brera con occhi completamente diversi. Non una lezione, un’esperienza.",
    author: "Giulia M.",
    place: "Milano",
    lang: "it",
  },
  {
    text: "A walk through Città Alta that felt like stepping into a painting. Highly recommended.",
    author: "Sarah K.",
    place: "Bergamo",
    lang: "en",
  },
  {
    text: "Дарія розповідає про картини так, що їх хочеться роздивлятися годинами.",
    author: "Олена Т.",
    place: "Accademia Carrara",
    lang: "uk",
  },
];
