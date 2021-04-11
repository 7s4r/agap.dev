import Navbar from './Navbar'

export default function Header() {
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="/assets/img/logo3.png" alt="" />
          <span>Agap.dev</span>
        </a>
        <Navbar />
      </div>
    </header>
  )
}
