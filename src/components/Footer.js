function handleSubmit(event) {
  console.log(event)
}

export default function Footer() {
  return (
    <footer id="footer" className="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <div className="col-lg-6">
            <form method="post" onSubmit={handleSubmit}>
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo3.png" alt="" />
              <span>Agap.dev</span>
            </a>
            <p>We are an agile software house producing top quality applications. Since 2009, we delivered a variety of projects for companies of all sizes - from one-person startups to big enterprises, universities, and non-profits. We build client relationships on trust, openly sharing our work methods and the rules we rely on.</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> hi@agap.dev<br />
            </p>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Agap.dev</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Made by <a href="https://agap.group/">Agap.group</a>
      </div>
    </div>
  </footer>
  )
}
