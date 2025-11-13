import React, { useEffect, useState } from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";

function LinksNavegationFooter({ mode = "blog" }) {
  const { t } = useTranslation();
  const [visibleLinks, setVisibleLinks] = useState([]);

  useEffect(() => {
    const menuItems = t("navbar.menuItems", { returnObjects: true }) || {};
    const allIds = Object.keys(menuItems);
    const allLabels = Object.values(menuItems);

    const paired = allIds.map((id, index) => ({
      id,
      label: allLabels[index] || id,
    }));

    setVisibleLinks(paired);
  }, [t]);

  const half = Math.ceil(visibleLinks.length / 2);
  const firstHalf = visibleLinks.slice(0, half);
  const secondHalf = visibleLinks.slice(half);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderLink = (id, label) => {
    const commonProps = {
      "aria-label": label,
      title: label,
      "data-track": id,
      className: "cursor-pointer",
    };

    if (mode === "blog") {
      // Scroll suave, mas com <a href> rastreável
      return (
        <a
          href={`#${id}`}
          {...commonProps}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(id);
          }}
        >
          <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
            {label}
          </span>
        </a>
      );
    } else {
      const to = id === "inicio" ? "/" : `/${id.toLowerCase()}`;
      return (
        <a href={to} {...commonProps}>
          <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
            {label}
          </span>
        </a>
      );
    }
  };

  return (
    <MotionDivDownToUp>
      <div className="flex justify-between full opacity-90">
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {firstHalf.map(({ id, label }) => (
            <div key={id} className="h-auto hover:underline">
              {renderLink(id, label)}
            </div>
          ))}
        </div>

        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {secondHalf.map(({ id, label }) => (
            <div key={id} className="h-auto hover:underline">
              {renderLink(id, label)}
            </div>
          ))}
        </div>
      </div>
    </MotionDivDownToUp>
  );
}

export default LinksNavegationFooter;
