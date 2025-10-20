import React, { useState } from "react";


import Pictura1 from "../Assets/Pictura1.webp";
import Pictura2 from "../Assets/Pictura2.webp";
import Pictura3 from "../Assets/Pictura3.webp";
import Pictura4 from "../Assets/Pictura4.webp";
import Pictura5 from "../Assets/Pictura5.webp";
import Pictura6 from "../Assets/Pictura6.webp";
import Pictura7 from "../Assets/Pictura7.webp";
import Pictura8 from "../Assets/Pictura8.webp";
import Pictura9 from "../Assets/Pictura9.webp";
import Pictura10 from "../Assets/Pictura10.webp";
import Pictura11 from "../Assets/Pictura11.webp";
import Pictura12 from "../Assets/Pictura12.webp";
import Pictura13 from "../Assets/Pictura13.webp";
import Pictura14 from "../Assets/Pictura14.webp";
import Pictura15 from "../Assets/Pictura15.webp";
import Pictura16 from "../Assets/Pictura16.webp";
import Pictura17 from "../Assets/Pictura17.webp";
import Pictura18 from "../Assets/Pictura18.webp";
import Pictura19 from "../Assets/Pictura19.webp";
import Pictura20 from "../Assets/Pictura20.webp";

const galleryItems = [
  { id: 1, image: Pictura1, title: "Interchange", dimensions: "90cm x 110cm", medium: "oil, charcoal, plaster mesh, encaustic", year: 2023 },
  { id: 2, image: Pictura2, title: "Wormhole", dimensions: "205cm x 175cm", medium: "oil, charcoal, encaustic", year: 2024 },
  { id: 3, image: Pictura3, title: "Girdled", dimensions: "160cm x 160cm", medium: "oil, charcoal, plaster mesh, encaustic", year: 2023 },
  { id: 4, image: Pictura4, title: "Convergence", dimensions: "180cm x 150cm", medium: "oil and charcoal on linen", year: 2024 },
  { id: 5, image: Pictura5, title: "Erosion", dimensions: "120cm x 100cm", medium: "oil and encaustic", year: 2023 },
  { id: 6, image: Pictura6, title: "Reflection", dimensions: "140cm x 120cm", medium: "oil and wax", year: 2023 },
  { id: 7, image: Pictura7, title: "Threshold", dimensions: "160cm x 140cm", medium: "oil, pigment, linen", year: 2024 },
  { id: 8, image: Pictura8, title: "Veil of Light", dimensions: "130cm x 110cm", medium: "oil, encaustic, paper", year: 2023 },
  { id: 9, image: Pictura9, title: "Echoes", dimensions: "180cm x 200cm", medium: "oil and charcoal", year: 2024 },
  { id: 10, image: Pictura10, title: "Horizons", dimensions: "200cm x 160cm", medium: "oil, wax, hessian", year: 2023 },
  { id: 11, image: Pictura11, title: "Silent Fields", dimensions: "150cm x 130cm", medium: "oil and mixed media", year: 2024 },
  { id: 12, image: Pictura12, title: "Fragmented Time", dimensions: "190cm x 150cm", medium: "oil and charcoal", year: 2023 },
  { id: 13, image: Pictura13, title: "Untold Stories", dimensions: "200cm x 180cm", medium: "oil, sand, plaster", year: 2024 },
  { id: 14, image: Pictura14, title: "Memory Thread", dimensions: "160cm x 140cm", medium: "oil and encaustic on fabric", year: 2023 },
  { id: 15, image: Pictura15, title: "Afterglow", dimensions: "170cm x 150cm", medium: "oil, charcoal, pigment", year: 2024 },
  { id: 16, image: Pictura16, title: "Crosscurrents", dimensions: "180cm x 120cm", medium: "oil and plaster mesh", year: 2023 },
  { id: 17, image: Pictura17, title: "Beyond the Line", dimensions: "200cm x 150cm", medium: "oil, wax, ink", year: 2024 },
  { id: 18, image: Pictura18, title: "Still Waters", dimensions: "160cm x 130cm", medium: "oil and encaustic", year: 2023 },
  { id: 19, image: Pictura19, title: "Whispering Walls", dimensions: "220cm x 180cm", medium: "oil and charcoal on paper", year: 2024 },
  { id: 20, image: Pictura20, title: "Transcendence", dimensions: "180cm x 150cm", medium: "oil and plaster mesh", year: 2023 },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openAt = (index) => setSelectedIndex(index);
  const close = () => setSelectedIndex(null);

  return (
    <>
      <div className="gallery-wrapper">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => openAt(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") openAt(idx); }}
          >
            <img
              src={item.image}
              alt={`${item.title} (${item.year})`}
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-text">
              <h3 className="gallery-title">{item.title}</h3>
              <p className="gallery-desc">{`${item.dimensions} · ${item.medium} · (${item.year})`}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={close} role="presentation">
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[selectedIndex].image}
              alt={galleryItems[selectedIndex].title}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3 className="gallery-title">{galleryItems[selectedIndex].title}</h3>
              <p className="gallery-desc">{`${galleryItems[selectedIndex].dimensions} · ${galleryItems[selectedIndex].medium} · (${galleryItems[selectedIndex].year})`}</p>
            </div>
            <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
