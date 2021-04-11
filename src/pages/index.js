import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Values from '../components/Values'
import Features from '../components/Features'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Clients from '../components/Clients'
import Posts from '../components/Posts'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <>
      <Head>
        <title>Agap.dev</title>
        <meta name="description" content="Web and Mobile Development" />
        <meta name="keywords" content="" />
      </Head>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Values />
        <Features />
        <Services />
        <Portfolio />
        <Testimonials />
        <Clients />
        <Posts />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
