import { Navbar } from '../src/components/Navbar'
import { Hero } from '../src/components/Hero'
import { About } from '../src/components/About'
import { MenuPreview } from '../src/components/MenuPreview'
import { FullMenu } from '../src/components/FullMenu'
import { Reservation } from '../src/components/Reservation'
import { Hours } from '../src/components/Hours'
import { Location } from '../src/components/Location'
import { Gallery } from '../src/components/Gallery'
import { Reviews } from '../src/components/Reviews'
import { Events } from '../src/components/Events'
import { Contact } from '../src/components/Contact'
import { Footer } from '../src/components/Footer'
import { StickyReserveBar } from '../src/components/StickyReserveBar'
// ▼ DEMO-WERKZEUG – für die Kunden-Version entfernen (siehe Datei-Header in ThemeSwitcher.tsx)
import { ThemeSwitcher } from '../src/components/ThemeSwitcher'
// ▲ DEMO-WERKZEUG

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <FullMenu />
        <Reservation />
        <Hours />
        <Location />
        <Gallery />
        <Reviews />
        <Events />
        <Contact />
      </main>
      <Footer />
      <StickyReserveBar />
      {/* ▼ DEMO-WERKZEUG – für die Kunden-Version entfernen */}
      <ThemeSwitcher />
      {/* ▲ DEMO-WERKZEUG */}
    </>
  )
}
