import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Programs from './components/Programs'
import ProjectsGallery from './components/ProjectsGallery'
import RobotikKodlama from './components/RobotikKodlama'
import Steam from './components/Steam'
import WhyCoding from './components/WhyCoding'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-night">
      <a
        href="#anasayfa"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        İçeriğe geç
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyCoding />
        <Programs />
        <Steam />
        <RobotikKodlama />
        <ProjectsGallery />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
