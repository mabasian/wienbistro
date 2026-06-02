export type Testimonial = {
  quote: string
  author: string
  context: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Das beste Frühstück im Grätzl. Die Melange ist perfekt und das Avocado-Brot ein Traum. Mein neues Stammlokal.',
    author: 'Katharina M.',
    context: 'Google-Bewertung',
    rating: 5,
  },
  {
    quote:
      'Endlich ein Brunch in Neubau, wo man nicht ewig ansteht und trotzdem alles hausgemacht schmeckt. Sehr herzliches Team.',
    author: 'Daniel R.',
    context: 'Stammgast',
    rating: 5,
  },
  {
    quote:
      'Schöner, ruhiger Ort zum Arbeiten am Vormittag, super Filterkaffee. Am Wochenende dann mit Freundinnen zum Brunch – passt immer.',
    author: 'Lena S.',
    context: 'Google-Bewertung',
    rating: 5,
  },
  {
    quote:
      'Der Tagesteller mittags ist jedes Mal eine kleine Überraschung und immer richtig gut. Faires Preis-Leistungs-Verhältnis.',
    author: 'Thomas P.',
    context: 'Nachbar aus der Lindengasse',
    rating: 5,
  },
]
