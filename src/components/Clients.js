const images = [
  '/assets/img/clients/client-1.png',
  '/assets/img/clients/client-2.png',
  '/assets/img/clients/client-3.png',
  '/assets/img/clients/client-4.png',
  '/assets/img/clients/client-5.png',
  '/assets/img/clients/client-6.png',
  '/assets/img/clients/client-7.png',
  '/assets/img/clients/client-8.png',
]

export default function Clients() {
  return (
    <section id="clients" className="clients">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Our Clients</h2>
          <p>Temporibus omnis officia</p>
        </header>

        <div className="clients-slider swiper-container">
          <div className="swiper-wrapper align-items-center">
            {images.map((image, index) => (
              <div className="swiper-slide" key={index}><img src={image} className="img-fluid" alt="" /></div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

    </section>
  )
}
