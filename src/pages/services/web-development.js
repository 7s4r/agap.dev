import Head from 'next/head'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Page() {
  return (
    <>
      <Head>
        <title>Web development | Agap.dev</title>
        <meta name="description" content="Web development" />
        <meta name="keywords" content="web development" />
      </Head>
      <Header />
      <main id="main">
        <Breadcrumb />
        <Blog />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
