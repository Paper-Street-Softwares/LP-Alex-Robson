import React from "react";
import content from "../../../../../content/content";
import MotionDivDownToUp from "../../../../animation/MotionDivDownToUp";
import contentLp01 from "../../../../../content/contentLp01";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function LogoDefaultAboutLpv() {
  const images = [
    {
      original: contentLp01.about.imagesGaleria.imagem1,
      thumbnail: contentLp01.about.imagesGaleria.imagem1,
    },
    {
      original: contentLp01.about.imagesGaleria.imagem2,
      thumbnail: contentLp01.about.imagesGaleria.imagem2,
    },
    {
      original: contentLp01.about.imagesGaleria.imagem3,
      thumbnail: contentLp01.about.imagesGaleria.imagem3,
    },
  ];

  return (
    // <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
    //   <img
    //     src={contentLp01.about.imgAbout}
    //     alt={contentLp01.about.ariaLabel}
    //     className="shadow-custom-opacity shadow-primary relative bg-center bg-no-repeat bg-cover h-auto w-[90%] tablet1:w-full rounded-xl"
    //   />
    // </MotionDivDownToUp>
    <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
      <div
        // style={{
        //   backgroundImage: `url(${content.texts.about.imagem.img})`,
        // }}
        className="shadow-custom-opacity shadow-secondary/25 relative bg-center bg-no-repeat bg-cover h-[350px] w-[90%] tablet1:w-full tablet1:h-[740px] desktop1:h-[467px] rounded-xl"
      >
        <ImageGallery
          items={images}
          showNav={false} // Ativando a navegação
          showFullscreenButton={false} // Desativando botão de tela cheia
          useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
          showBullets={true}
          showThumbnails={false}
          additionalClass="custom-gallery"
          autoPlay={true}
        />
        <style>
          {`
                    .custom-gallery .image-gallery-slide img {
                      height: 350px; 
                      width: 100%;
                      object-fit: cover;
                      border-radius: 10px;
                    }

                     @media (min-width: 640px) and (max-width: 1023px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 800px;
                        }
                      }

                      @media (min-width: 1024px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 470px;
                        }
                      }


                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                    }
                  `}
        </style>
        {/* <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-30 right-[-10px] top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img> */}
      </div>
      {/* <img
            src={content.texts.about.imagem.img}
            alt="Imagem de uma praia de Arraial"
            className=""
        /> */}
    </MotionDivDownToUp>
  );
}

export default LogoDefaultAboutLpv;
