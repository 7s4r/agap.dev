import Link from 'next/link'

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link scrollto active " href="#header">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li className="dropdown"><a href="#services"><span>Services</span> <i className="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="#">Web development</a></li>
            <li><a href="#">Mobile application</a></li>
            <li><a href="#">Product design</a></li>
            <li><a href="#">DevOps</a></li>
            <li><a href="#">Machine learning</a></li>
            <li><a href="#">Blockchain</a></li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><a className="getstarted scrollto" href="#contact">Contact us</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  )
}
