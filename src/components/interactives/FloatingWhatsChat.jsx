import React, { useState, useEffect } from "react";
import content from "../../content/content";
import WhatsChat from "./WhatsChat";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

const FloatingWhatsChat = ({ buttonType }) => {
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
      window.open(whatsappContactLink, "_blank");
    }
  };

  return (
    <button className={`${isVisible ? "animate-fade-in" : "hidden"}`}>
      <WhatsChat />
    </button>
  );
};

export default FloatingWhatsChat;
