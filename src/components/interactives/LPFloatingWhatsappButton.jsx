import React, { useState, useEffect } from "react";
import whatsappWebm from "../../assets/importAssets/whatsappGif.webp";
import Modal from "../util/Modal";
import { Target } from "lucide-react";
import LpContent from "../../content/LpContent";

const LPFloatingWhatsappButton = ({ buttonType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (buttonType === "form") {
      setOpenModal(!openModal);
    } else {
      window.open(LpContent.links.ctaWhatsapp, "_blank");
    }
  };

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-2 right-3 p-4 text-secondary z-20 rounded-full focus:outline-none `}
      onClick={handleClick}
    >
      {openModal ? null : (
        <img
          className="w-16 transition focus:outline-none hover:scale-125"
          src={whatsappWebm}
          alt="Floating Button"
        />
      )}
      {buttonType === "form" && (
        <Modal isOpen={openModal} setCloseModal={setOpenModal} />
      )}
    </button>
  );
};

export default LPFloatingWhatsappButton;
