
import { useState } from "react";

import houseExterior from "../assets/house-exterior.jpg";
import houseLivingRoom from "../assets/living-room.jpg";
import houseKitchen from "../assets/house-kitchen.jpg";
import MaBedroom from "../assets/house-bedroom-a.jpg";
import MbBedroom from "../assets/house-bedroom-b.jpg";
import SBedroom from "../assets/house-bedroom.jpg";
import MaComfortroom from "../assets/comfort-room-a.jpg";
import Garage from "../assets/H-garage-dirtyKit.jpg";
import Veradaa from "../assets/veranda.jpg";
import UpperLivingRoom from "../assets/living-room-upper.jpg";
import MSBcr from "../assets/master-bedroom-cr.jpg";
import MSBshower from "../assets/master-bedroom-shower.jpg";
import Bathroom from "../assets/bathroom.jpg";
import Verandab from "../assets/verandab.jpg";

function Gallery() {
  // Stores the image currently being viewed
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: "Exterior",
      image: houseExterior,
      size: "large",
    },
    {
      title: "Living Room",
      image: houseLivingRoom,
      size: "normal",
    },
    {
      title: "Upper Living Room",
      image: UpperLivingRoom,
      size: "normal",
    },
    {
      title: "Kitchen",
      image: houseKitchen,
      size: "normal",
    },
    {
      title: "Master Bedroom A",
      image: MaBedroom,
      size: "normal",
    },
    {
      title: "Master Comfort Room A",
      image: MaComfortroom,
      size: "normal",
    },
    {
      title: "Master Bedroom B",
      image: MbBedroom,
      size: "normal",
    },
    {
      title: "Master Bedroom B Comfort Room",
      image: MSBcr,
      size: "normal",
    },
    {
      title: "Master Bedroom B Shower",
      image: MSBshower,
      size: "normal",
    },
    {
      title: "Bedroom",
      image: SBedroom,
      size: "normal",
    },
    {
      title: "Bathroom",
      image: Bathroom,
      size: "normal",
    },
    {
      title: "Garage and Dirty Kitchen",
      image: Garage,
      size: "normal",
    },
    {
      title: "Veranda",
      image: Veradaa,
      size: "normal",
    },
    {
      title: "Veranda",
      image: Verandab,
      size: "normal",
    },
  ];

  return (
    <section id="gallery" className="py-5">
      <div className="container py-5">

        {/* Heading */}
        <div className="row mb-5">
          <div className="col-12 col-lg-7">

            <p className="text-uppercase text-secondary fw-semibold letter-spacing mb-3">
              Property Gallery
            </p>

            <h2 className="display-5 fw-semibold">
              Take A Look
              <br />
              Inside The Home
            </h2>

          </div>
        </div>


        {/* Gallery */}
        <div className="row g-3">

          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? "col-12 col-lg-8"
                  : "col-12 col-md-6 col-lg-4"
              }
            >

              <div
                className="gallery-item"
                onClick={() => setSelectedImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid w-100"
                />

                <div className="gallery-overlay">
                  <span>{item.title}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>


      {/* =========================
          IMAGE MODAL
      ========================= */}

      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close button */}
          <button
            type="button"
            className="image-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            &times;
          </button>


          {/* Full image */}
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="image-modal-img"
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}

    </section>
  );
}

export default Gallery;

