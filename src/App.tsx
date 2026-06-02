import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { MenuPreview } from './components/MenuPreview'
import { FullMenu } from './components/FullMenu'
import { Reservation } from './components/Reservation'
import { Hours } from './components/Hours'
import { Location } from './components/Location'
import { Gallery } from './components/Gallery'
import { Reviews } from './components/Reviews'
import { Events } from './components/Events'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { StickyReserveBar } from './components/StickyReserveBar'

function App() {
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
    </>
  )
}

export default App
