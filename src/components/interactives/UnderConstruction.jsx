import React from "react";
import content from "../../content/content";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgSectionDark text-white text-center px-4">
      <img
        src={content.texts.navbar.logo.img}
        alt="Logo do Cliente"
        className="min-w-[30%] desktop2:min-w-[20%] mb-8"
      />

      <h1 className="text-4xl font-bold mb-4 font-mainFont text-white">
        EM <span className="text-white">BREVE</span>
      </h1>

      <p className="text-lg w-[90%] phone2:w-[70%] tablet1:w-[40%] desktop1:w-[30%] desktop2:max-w-[281px] text-primary font-mainFont">
        Estamos trabalhando para oferecer a você a melhor experiência!
      </p>
    </div>
  );
}
