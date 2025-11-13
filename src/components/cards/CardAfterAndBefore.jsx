import React from "react";

function CardsAnteseDepois({ descriptionBefore, descriptionAfter, className }) {
  return (
    <div
      className={`flex flex-col items-center desktop1:items-start desktop1:flex-row justify-evenly gap-20 desktop1:gap-0 ${className}`}
    >
      <div className="flex flex-col relative max-w-[400px] shadow-lg rounded-xl ">
        <div className="py-2 px-4 w-fit rounded-br-xl rounded-tr-xl desktop1:rounded-bl-xl desktop1:rounded-tl-xl bg-red-500 absolute font-bold top-[-50px] desktop1:translate-x-[160px] text-white">
          Antes
        </div>
        <div className="p-7 bg-white w-fit rounded-xl border-2 border-red-500/40">
          <p className="w-full">{descriptionAfter}</p>
        </div>
      </div>

      <div className="flex flex-col relative max-w-[400px] shadow-lg rounded-xl">
        <div className="py-2 px-4 w-fit rounded-bl-xl rounded-tl-xl desktop1:rounded-br-xl desktop1:rounded-tr-xl bg-yellow-500 absolute font-bold top-[-50px] desktop1:translate-x-[-160px] right-0 text-black">
          Depois
        </div>
        <div className="p-7 bg-white w-fit rounded-xl border-2 border-yellow-500/40">
          <p className="w-full">{descriptionBefore}</p>
        </div>
      </div>
    </div>
  );
}

export default CardsAnteseDepois;
