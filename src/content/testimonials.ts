import { l, type Localized } from '../i18n'

export type Testimonial = {
  quote: Localized
  author: string
  context: Localized
  rating: number
}

const google = l('Google-Bewertung', 'Google review')

export const testimonials: Testimonial[] = [
  {
    quote: l(
      'Das beste Frühstück im Grätzl. Die Melange ist perfekt und das Avocado-Brot ein Traum. Mein neues Stammlokal.',
      'The best breakfast in the neighbourhood. The Melange is perfect and the avocado toast is a dream. My new regular spot.',
    ),
    author: 'Katharina M.',
    context: google,
    rating: 5,
  },
  {
    quote: l(
      'Endlich ein Brunch in Neubau, wo man nicht ewig ansteht und trotzdem alles hausgemacht schmeckt. Sehr herzliches Team.',
      'Finally a brunch in Neubau where you don’t queue forever and everything still tastes homemade. Very warm team.',
    ),
    author: 'Daniel R.',
    context: l('Stammgast', 'Regular guest'),
    rating: 5,
  },
  {
    quote: l(
      'Schöner, ruhiger Ort zum Arbeiten am Vormittag, super Filterkaffee. Am Wochenende dann mit Freundinnen zum Brunch – passt immer.',
      'A lovely, quiet place to work in the morning, great filter coffee. On weekends for brunch with friends – always a good fit.',
    ),
    author: 'Lena S.',
    context: google,
    rating: 5,
  },
  {
    quote: l(
      'Der Tagesteller mittags ist jedes Mal eine kleine Überraschung und immer richtig gut. Faires Preis-Leistungs-Verhältnis.',
      'The daily lunch plate is a little surprise every time and always really good. Fair value for money.',
    ),
    author: 'Thomas P.',
    context: l('Nachbar aus der Lindengasse', 'Neighbour from Lindengasse'),
    rating: 5,
  },
]
