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
        <title>Mobile application | Agap.dev</title>
        <meta name="description" content="Mobile application" />
        <meta name="keywords" content="mobile application" />
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
