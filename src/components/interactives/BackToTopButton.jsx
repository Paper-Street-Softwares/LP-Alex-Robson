import { ArrowUp } from "lucide-react";

import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-8 left-8 p-3 bg-primary rounded-full z-10 focus:outline-none hover:scale-125 transition`}
      onClick={scrollToTop}
    >
      <ArrowUp className="text-iconButtons" />
    </button>
  );
};

export default BackToTopButton;
