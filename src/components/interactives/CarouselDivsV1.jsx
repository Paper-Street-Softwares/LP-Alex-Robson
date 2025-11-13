import React from "react";
import { Carousel } from "primereact/carousel";
import img1 from "../../../assets/imgs/testimonials/img1.png";
import img2 from "../../../assets/imgs/testimonials/img2.png";
import img3 from "../../../assets/imgs/testimonials/img3.png";

export default function CarouselDivsV1() {
  // Array de JSX (imagens ou cards)
  const items = [
    <img src={img1} alt="Depoimento 1" className="rounded-2xl w-full h-auto" />,
    <img src={img2} alt="Depoimento 2" className="rounded-2xl w-full h-auto" />,
    <img src={img3} alt="Depoimento 3" className="rounded-2xl w-full h-auto" />,
  ];

  const responsiveOptions = [
    { breakpoint: "2500px", numVisible: 3, numScroll: 3 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 3 },
    { breakpoint: "767px", numVisible: 2, numScroll: 2 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const itemTemplate = (item) => (
    <div className="p-2" style={{ width: "100%" }}>
      {item}
    </div>
  );

  return (
    <div>
      <Carousel
        value={items}
        itemTemplate={itemTemplate}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={8000}
        showNavigators
        className="w-full"
        prevIcon={<span style={{ color: "black", fontSize: "200%" }}>❮</span>}
        nextIcon={<span style={{ color: "black", fontSize: "200%" }}>❯</span>}
      />
    </div>
  );
}
