import React from "react";
import Pictura1 from "../Assets/Pictura4.webp";
import Pictura2 from "../Assets/Pictura1.webp";
import Pictura3 from "../Assets/Pictura8.webp";
import Pictura4 from "../Assets/Pictura7.webp";
import Pictura5 from "../Assets/Pictura12.webp";

const Slide = () => {
  const workInfoData = [
    {
      image: Pictura1,
      title: "Casa de la marginea satului",
      text: "200 x 300 cm, ulei și acrilic pe pânză (2024)"
    },
    {
      image: Pictura2,
      title: "Biserica din deal",
      text: "150 x 250 cm, cărbune și acuarelă pe hârtie (2024)"
    },
    {
      image: Pictura3,
      title: "Tăcerea florilor în lumină",
      text: "180 x 320 cm, encaustic și tempera pe pânză (2024)"
    },
    {
      image: Pictura4,
      title: "Luntrea viselor pe râu",
      text: "220 x 400 cm, ulei, pastel și in pe pânză (2024)"
    }
  ];

  return (
    <div className="slide-wrapper">
      {/* Full-width top image */}
      <div className="top-image w-full">
        <img src={Pictura5} alt="Top Banner" className="w-full h-auto object-cover" />
      </div>

      {/* Alternating sections */}
      {workInfoData.map((item, index) => (
        <div
          key={item.title}
          className={`section flex flex-col md:flex-row items-center my-12 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="section-image md:w-1/2 w-full p-4">
            <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="section-text md:w-1/2 w-full p-4">
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <p className="text-gray-700">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slide;
