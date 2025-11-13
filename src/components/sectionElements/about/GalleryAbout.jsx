import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";

function GalleryAbout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 424);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 424);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    {
      original: isMobile
        ? content.texts.about.galeria.slide1.imgMobile.imgMobile1
        : content.texts.about.galeria.slide1.img.img1,
      originalAlt: content.texts.about.galeria.slide1.alt,
    },
    {
      original: isMobile
        ? content.texts.about.galeria.slide2.imgMobile.imgMobile2
        : content.texts.about.galeria.slide2.img.img2,
      originalAlt: content.texts.about.galeria.slide2.alt,
    },
    {
      original: isMobile
        ? content.texts.about.galeria.slide3.imgMobile.imgMobile3
        : content.texts.about.galeria.slide3.img.img3,
      originalAlt: content.texts.about.galeria.slide3.alt,
    },
    // {
    //   original: isMobile
    //     ? content.texts.about.galeria.slide4.imgMobile.imgMobile4
    //     : content.texts.about.galeria.slide4.img.img4,
    //   originalAlt: content.texts.about.galeria.slide4.alt,
    // },
  ];

  return (
    <div className="flex bg-bgSectionLight justify-center w-full h-auto rounded-[20px]">
      <MotionDivDownToUp className="relative flex justify-center w-full">
        <div className="w-full">
          <ImageGallery
            items={images}
            showNav={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showBullets={false}
            showPlayButton={false}
            showThumbnails={false}
            autoPlay={true}
            additionalClass="custom-gallery"
          />
          <style>
            {`
              .custom-gallery .image-gallery-slide img {
                height: 500px; 
                width: 100%;
                object-fit: cover;
                border-radius: 10px;
              }

              @media (min-width: 640px) and (max-width: 1023px) {
                .custom-gallery .image-gallery-slide img {
                  height: 900px;
                }
              }

              @media (min-width: 1024px) {
                .custom-gallery .image-gallery-slide img {
                  min-height: 700px;
                  
                }
              }

              .custom-gallery .image-gallery-thumbnails img {
                height: 60px;  
                width: 100px;  
                object-fit: cover; 
              }
            `}
          </style>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}

export default GalleryAbout;
