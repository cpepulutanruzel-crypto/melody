
function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container py-5">

        <div className="row justify-content-center text-center">

          <div className="col-12 col-lg-8">

            <p className="text-uppercase text-secondary fw-semibold letter-spacing mb-3">
              Contact
            </p>

            <h2 className="display-5 fw-semibold mb-4">
              Interested In This Home?
            </h2>

            <p className="text-secondary fs-5 lh-lg mb-5">
              For inquiries, property viewing, or more information,
              feel free to contact the owner directly.
            </p>

          </div>

        </div>


        <div className="row justify-content-center g-4">

          {/* Phone */}
          <div className="col-12 col-md-5">

            <div className="contact-option text-center p-4 h-100">

              <div className="contact-icon">
                ☎
              </div>

              <h3 className="h5 fw-semibold mt-3">
                Call Us
              </h3>

              <p className="text-secondary mb-4">
                Speak directly with the owner.
              </p>

              <a
                href="cell:+63 9665 532 580"
                className="btn btn-dark w-100"
              >
                +63 9665 532 580
              </a>

            </div>

          </div>


          {/* Facebook */}
          <div className="col-12 col-md-5">

            <div className="contact-option text-center p-4 h-100">

              <div className="contact-icon">
                f
              </div>

              <h3 className="h5 fw-semibold mt-3">
                Facebook
              </h3>

              <p className="text-secondary mb-4">
                Send us a message through Facebook.
              </p>

              <a
                href="https://www.facebook.com/melody.urriza.2024"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark w-100"
              >
                Message on Facebook
              </a>

            </div>

          </div>

        </div>


        {/* Location */}
        <div className="row justify-content-center mt-5">

          <div className="col-12 text-center">

            <p className="text-secondary mb-0">
              📍 Brgy San Ignacio, San Pablo, Laguna
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;

