function HouseInfo() {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">

        <div className="row align-items-center g-5">

          {/* Description */}
          <div className="col-12 col-lg-7">

            <p className="text-uppercase text-secondary fw-semibold letter-spacing mb-3">
              About The Property
            </p>

            <h2 className="display-5 fw-semibold mb-4">
              A Home Designed
              <br />
              For Modern Living
            </h2>

            <p className="text-secondary fs-5 lh-lg">
              This beautiful modern family home offers a comfortable
              and spacious living environment. Designed with both
              functionality and style in mind, the property provides
              generous living spaces for families looking for a
              peaceful and convenient place to call home.
            </p>

            <p className="text-secondary lh-lg">
              The house features thoughtfully designed interiors,
              quality finishes, and plenty of natural light throughout
              the living spaces.
            </p>

          </div>


          {/* Property Details */}
          <div className="col-12 col-lg-5">

            <div className="property-details p-4 p-lg-5">

              <h3 className="h4 fw-semibold mb-4">
                Property Details
              </h3>

              <div className="row g-4">

                <div className="col-6">
                  <div className="property-detail">
                    <span className="detail-label">
                      Bedrooms
                    </span>

                    <strong className="detail-value">
                      4
                    </strong>
                  </div>
                </div>

                <div className="col-6">
                  <div className="property-detail">
                    <span className="detail-label">
                      Bathrooms
                    </span>

                    <strong className="detail-value">
                      4
                    </strong>
                  </div>
                </div>

                <div className="col-6">
                  <div className="property-detail">
                    <span className="detail-label">
                      Floor Area
                    </span>

                    <strong className="detail-value">
                      150 sqm
                    </strong>
                  </div>
                </div>

                <div className="col-6">
                  <div className="property-detail">
                    <span className="detail-label">
                      Lot Area
                    </span>

                    <strong className="detail-value">
                      200 sqm
                    </strong>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HouseInfo;