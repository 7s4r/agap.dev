export default function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">From stunning product design to flawless code. We help you win!</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">A team of 10+ experienced developers and designers, ready to help you build your web and mobile applications.</h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a href="#contact" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Start a project</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
