import React from "react";

function IconButtonCartao({ icon, label, ariaLabel, width = "w-full" }) {
  return (
    <button
      aria-label={ariaLabel}
      className={`flex gap-2 ${width} items-center justify-center p-2 rounded-md bg-buttonColor`}
    >
      {icon}
      {label && (
        <span className="text-paragraph2 font-secondFont text-center">
          {label}
        </span>
      )}
    </button>
  );
}

export default IconButtonCartao;
