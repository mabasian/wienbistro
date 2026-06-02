import { l, type Localized } from './index'

// Zentrale UI-Microcopy (zweisprachig). Inhalte (Menü, Events …) liegen in src/content/*.
export const ui = {
  // Navigation
  navAbout: l('Über uns', 'About'),
  navMenu: l('Speisekarte', 'Menu'),
  navHours: l('Öffnungszeiten', 'Hours'),
  navGallery: l('Galerie', 'Gallery'),
  navLocation: l('Standort', 'Location'),
  navContact: l('Kontakt', 'Contact'),
  navReservation: l('Reservierung', 'Reservation'),

  // CTAs
  ctaReserve: l('Tisch reservieren', 'Reserve a table'),
  ctaViewMenu: l('Speisekarte ansehen', 'View menu'),
  openMenuAria: l('Menü öffnen', 'Open menu'),
  closeMenuAria: l('Menü schließen', 'Close menu'),
  callAria: l('Anrufen', 'Call'),

  // Hero
  heroDiscover: l('Mehr entdecken', 'Discover more'),

  // About
  aboutEyebrow: l('Über uns', 'About us'),
  aboutTitle: l(
    'Ein Grätzl-Café, das den Vormittag feiert',
    'A neighbourhood café that celebrates the morning',
  ),
  aboutP1: l(
    'Das WienBistro ist aus einer einfachen Idee entstanden: ein Ort, an dem man ungezwungen frühstücken, in Ruhe einen guten Kaffee trinken und mittags ehrlich essen kann – alles unter einem Dach, alles hausgemacht.',
    'WienBistro grew from a simple idea: a place to have a relaxed breakfast, enjoy a good coffee in peace and eat honest food at lunch – all under one roof, all homemade.',
  ),
  aboutP2: l(
    'Wir verbinden Wiener Kaffeehaus-Tradition mit moderner Brunch-Kultur. Unsere Semmeln kommen vom Bäcker ums Eck, die Eier sind bio, der Kaffee stammt von einer kleinen Wiener Rösterei. Was bei uns auf den Tisch kommt, machen wir mit Sorgfalt – ohne Eile, aber mit Herz.',
    'We blend Viennese coffee-house tradition with modern brunch culture. Our rolls come from the baker around the corner, the eggs are organic and the coffee is from a small Viennese roastery. Everything we serve is made with care – unhurried, but with heart.',
  ),
  aboutP3: l(
    'Egal ob früher Espresso, ausgedehnter Wochenend-Brunch oder schnelles Mittagessen: Bei uns bist du willkommen, so wie du bist.',
    'Whether an early espresso, a leisurely weekend brunch or a quick lunch: you are welcome here, just as you are.',
  ),
  aboutBadgeSince: l('seit 2019', 'since 2019'),
  aboutBadgeHeart: l('im Herzen von Neubau', 'in the heart of Neubau'),
  factDaily: l('Täglich', 'Daily'),
  factDailyLabel: l('frisch & hausgemacht', 'fresh & homemade'),
  factOrganic: l('Bio', 'Organic'),
  factOrganicLabel: l('Eier & Milch aus der Region', 'eggs & milk from the region'),
  factSpecialty: l('Specialty', 'Specialty'),
  factSpecialtyLabel: l('Kaffee von einer Wiener Rösterei', 'coffee from a Viennese roastery'),

  // Menü-Vorschau
  previewEyebrow: l('Unsere Karte', 'Our menu'),
  previewTitle: l('Vier gute Gründe, vorbeizukommen', 'Four good reasons to drop by'),
  previewIntro: l(
    'Von ganztägigem Frühstück über Specialty Coffee bis zum wechselnden Mittagsteller – ein Überblick. Die vollständige Karte findest du gleich darunter.',
    'From all-day breakfast and specialty coffee to a rotating lunch plate – an overview. The full menu is right below.',
  ),
  previewView: l('Ansehen →', 'View →'),

  // Vollständige Speisekarte
  menuEyebrow: l('Speisekarte', 'Menu'),
  menuTitle: l('Alles auf einen Blick', 'Everything at a glance'),
  menuIntro: l(
    'Alle Preise in Euro, inkl. Steuer. Unsere Karte wechselt mit der Saison – Tagesgerichte findest du auf der Tafel im Lokal.',
    'All prices in euros, incl. tax. Our menu changes with the season – daily specials are on the board in-house.',
  ),

  // Reservierung
  resEyebrow: l('Reservierung', 'Reservation'),
  resTitle: l('Sichere dir deinen Tisch', 'Reserve your table'),
  resIntro: l(
    'Besonders am Wochenende zum Brunch wird es bei uns gern voll. Reserviere am besten vorab – wir freuen uns auf dich. Für größere Gruppen ab 7 Personen oder kurzfristige Anfragen ruf uns einfach an.',
    'Especially for weekend brunch it gets busy. Best to book ahead – we look forward to seeing you. For groups of 7+ or short-notice requests, just give us a call.',
  ),
  resFieldDate: l('Datum', 'Date'),
  resFieldTime: l('Uhrzeit', 'Time'),
  resFieldGuests: l('Personen', 'Guests'),
  resFieldName: l('Name', 'Name'),
  resFieldPhone: l('Telefon', 'Phone'),
  resFieldEmail: l('E-Mail', 'Email'),
  resFieldNote: l('Anmerkung (optional)', 'Note (optional)'),
  resChoose: l('Bitte wählen', 'Please choose'),
  resNamePlaceholder: l('Vor- und Nachname', 'First and last name'),
  resEmailPlaceholder: l('du@beispiel.at', 'you@example.com'),
  resNotePlaceholder: l(
    'Kinderstuhl, Allergien, besonderer Anlass …',
    'High chair, allergies, special occasion …',
  ),
  resSubmit: l('Reservierung anfragen', 'Request reservation'),
  resDemoNote: l(
    'Demo-Formular – es werden keine Daten gespeichert oder gesendet.',
    'Demo form – no data is stored or sent.',
  ),
  resSuccessTitle: l('Danke für deine Anfrage!', 'Thanks for your request!'),
  resSuccessBody: l(
    'Dies ist eine Demo-Reservierung ohne tatsächliche Buchung. In der Live-Version bestätigen wir deinen Tisch per E-Mail innerhalb weniger Stunden.',
    'This is a demo reservation without an actual booking. In the live version we confirm your table by email within a few hours.',
  ),
  resAgain: l('Neue Anfrage stellen', 'Make another request'),

  // Öffnungszeiten
  hoursEyebrow: l('Öffnungszeiten', 'Opening hours'),
  hoursTitle: l('Wann wir für dich da sind', "When we're here for you"),
  hoursIntroLead: l('Frühstück gibt es bei uns den ganzen Tag.', 'We serve breakfast all day long.'),
  hoursOpenNow: l('Jetzt geöffnet', 'Open now'),
  hoursUntil: l('bis', 'until'),
  hoursClosed: l('Gerade geschlossen', 'Currently closed'),
  hoursWeekly: l('Wochenübersicht', 'Weekly hours'),
  hoursToday: l('Heute', 'Today'),

  // Standort
  locEyebrow: l('Standort', 'Location'),
  locTitle: l('So findest du uns', 'How to find us'),
  locIntro: l(
    'Mitten in Neubau – gut erreichbar mit den Öffis und zu Fuß vom Spittelberg in wenigen Minuten.',
    'Right in Neubau – easy to reach by public transport and a few minutes on foot from Spittelberg.',
  ),
  locOpenMaps: l('Auf Google Maps öffnen', 'Open in Google Maps'),
  locOpenMapsArrow: l('Auf Google Maps öffnen →', 'Open in Google Maps →'),
  locAddress: l('Adresse', 'Address'),
  locTransitTitle: l('Öffentliche Anreise', 'Public transport'),
  locGoodToKnow: l('Gut zu wissen', 'Good to know'),
  locGoodToKnowBody: l(
    'Barrierefrei zugänglich · WLAN für Gäste · hundefreundlich · Kinderstühle vorhanden.',
    'Wheelchair accessible · guest Wi-Fi · dog-friendly · high chairs available.',
  ),

  // Galerie
  galleryEyebrow: l('Galerie', 'Gallery'),
  galleryTitle: l('Ein Blick zu uns herein', 'A look inside'),
  galleryIntro: l(
    'Frühstück, Kaffee, Mehlspeisen und die Atmosphäre im Lokal – am besten kommst du einfach selbst vorbei.',
    'Breakfast, coffee, pastries and the atmosphere in-house – best to come and see for yourself.',
  ),

  // Bewertungen
  reviewsEyebrow: l('Bewertungen', 'Reviews'),
  reviewsTitle: l('Was unsere Gäste sagen', 'What our guests say'),
  reviewsRating: l('4,9 von 5 · über 320 Bewertungen', '4.9 out of 5 · 320+ reviews'),

  // Events
  eventsEyebrow: l('Events & Specials', 'Events & specials'),
  eventsTitle: l('Immer einen Besuch wert', 'Always worth a visit'),
  eventsIntro: l(
    'Ob Wochenend-Brunch, saisonale Spezialitäten oder unsere Kaffee-Verkostung – bei uns ist immer etwas los.',
    'Weekend brunch, seasonal specials or our coffee tasting – there is always something going on.',
  ),

  // Kontakt
  contactEyebrow: l('Kontakt', 'Contact'),
  contactTitle: l('Schreib oder ruf uns an', 'Write or call us'),
  contactIntro: l(
    'Fragen zu einer Reservierung, einer Feier oder einfach so? Wir freuen uns, von dir zu hören.',
    'Questions about a reservation, an event or just to say hi? We would love to hear from you.',
  ),
  contactPhone: l('Telefon', 'Phone'),
  contactEmail: l('E-Mail', 'Email'),
  contactAddress: l('Adresse', 'Address'),

  // Footer
  footerNav: l('Navigation', 'Navigation'),
  footerContact: l('Kontakt', 'Contact'),
  footerImprint: l('Impressum', 'Imprint'),
  footerPrivacy: l('Datenschutz', 'Privacy'),
  footerClose: l('Schließen', 'Close'),
  legalPlaceholder: l(
    'Platzhalter – im Kundenprojekt durch die rechtlich korrekten Angaben ersetzen (in Österreich gesetzlich verpflichtend).',
    'Placeholder – replace with the legally correct details in the client project (legally required in Austria).',
  ),
  privacyP1: l(
    'Der Schutz deiner persönlichen Daten ist uns ein Anliegen. Diese Website ist eine Demo; das Reservierungsformular speichert oder übermittelt keine Daten.',
    'Protecting your personal data matters to us. This website is a demo; the reservation form does not store or transmit any data.',
  ),
  privacyP2: l(
    'In der Live-Version werden eingegebene Daten ausschließlich zur Bearbeitung deiner Reservierung verwendet und nicht an Dritte weitergegeben. Es gelten die Bestimmungen der DSGVO.',
    'In the live version, data you enter is used solely to process your reservation and is not shared with third parties. GDPR rules apply.',
  ),
} satisfies Record<string, Localized>
