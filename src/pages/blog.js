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
        <title>Blog | Agap.dev</title>
        <meta name="description" content="Blog content" />
        <meta name="keywords" content="blog,content" />
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
