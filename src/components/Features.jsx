
function Features() {
  const features = [
    {
      title: "Spacious Living Room",
      description:
        "A comfortable living space suitable for family gatherings and relaxation.",
    },
    {
      title: "Modern Kitchen",
      description:
        "A functional kitchen with plenty of preparation and storage space.",
    },
    {
      title: "Private Garage",
      description:
        "Dedicated parking space with convenient access to the house.",
    },
    {
      title: "Natural Lighting",
      description:
        "Large windows provide plenty of natural light throughout the home.",
    },
    {
      title: "Family Bedrooms",
      description:
        "Comfortable bedrooms designed to provide privacy and relaxation.",
    },
    {
      title: "Outdoor Space",
      description:
        "Additional outdoor space suitable for gardening and family activities.",
    },
  ];

  return (
    <section id="features" className="py-5 bg-white">

      <div className="container py-5">

        {/* Section Heading */}
        <div className="row mb-4 mb-lg-5">

          <div className="col-12 col-lg-7">

            <p className="text-uppercase text-secondary fw-semibold letter-spacing mb-3">
              Property Features
            </p>

            <h2 className="features-title fw-semibold">
              Everything You Need
              <br className="d-none d-md-block" />
              In One Home
            </h2>

          </div>

        </div>


        {/* Features */}
        <div className="row g-3 g-md-4">

          {features.map((feature, index) => (

            <div
              className="col-12 col-md-6 col-lg-4"
              key={index}
            >

              <div className="feature-card h-100 p-4 p-md-4">

                <div className="feature-number mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="h5 fw-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-secondary mb-0 lh-lg">
                  {feature.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;

