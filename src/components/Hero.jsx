

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">

          <div className="col-12 col-lg-8 col-xl-7">

            <div className="hero-content text-white">

              <p className="text-uppercase fw-semibold letter-spacing mb-3">
                Property For Sale
              </p>

              <h1 className="display-1 fw-medium mb-4">
                Modern Family Home
              </h1>

              <p className="fs-5 mb-2">
                📍 Brgy San Ignacio, San Pablo, Laguna
              </p>

              <h2 className="fw-semibold mb-4">
                ₱5,000,000 (negotiable)
              </h2>

              <a
                href="#contact"
                className="btn btn-light btn-lg px-4 py-3"
              >
                Contact Owner
              </a>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;