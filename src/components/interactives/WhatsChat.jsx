import React, { useState, useEffect, useRef } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/favico/android-icon-192x192.png";
import "../../../src/index.css";
import { infos } from "../../content/content";

const whatsNumber = `${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}`;

export default function WhatsChat() {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipTextRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsVisible(scrollTop > 100);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseChat = () => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 transition-opacity duration-300">
      <FloatingWhatsApp
        className={`custom-whatsapp-button ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        status="w-3"
        chatboxHeight="auto"
        phoneNumber={whatsNumber}
        notification={true}
        notificationDelay={2}
        notificationLoop={2}
        accountName={infos.name}
        avatar={imgProfilePicture}
        initialMessageByServer={infos.whatsChatDefaultMessage}
        initialMessageByClient={infos.whatsappDefaultMessage}
        statusMessage="Disponível"
        startChatText="Falar no whatsapp"
        tooltipText={
          <p ref={tooltipTextRef} className="_tooltip_181xn_903">
            WhatsApp
            <br />
          </p>
        }
        allowEsc={true}
        onClose={handleCloseChat}
      />
    </div>
  );
}
