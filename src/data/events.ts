export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Matteo Ortuso & Marco Indino Live",
    date: "Sabato 24 Gen, 21:30",
    location: "Provo.Cult C.Lab, San Giovanni Rotondo",
    image: "/images/event-provocult.png",
    description: "Presentazione dell'EP d'esordio 'BLU'. Ingresso libero con tessera."
  },
  {
    id: "2",
    title: "Matteo Ortuso @ Barezzi Festival",
    date: "14/15 Novembre 2025, 13:00",
    location: "Caffè del Prato, Parma",
    image: "/images/event-barezzi.png",
    description: "XIX Edizione Barezzi Festival."
  },
  {
    id: "3",
    title: "Matteo Ortuso & Marco Indino",
    date: "Giovedì 22 Gen, 21:00",
    location: "Live Acustico",
    image: "/images/event-duo.png",
    description: "Voce, Chitarra, Tromba e Flicorno."
  }
];
