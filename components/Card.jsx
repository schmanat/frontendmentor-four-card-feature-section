import React from "react";
import Image from "next/image";

const Card = ({ title, description, icon, variant, className }) => {
  const borderVariant = new Map([
    ["cyan", "border-cyan"],
    ["red", "border-red"],
    ["orange", "border-orange"],
    ["blue", "border-blue"],
  ]);

  return (
    <div
      className={`w-full rounded-lg drop-shadow-lg p-8 text-left bg-white border-t-4 ${borderVariant.get(
        variant
      )} ${className}`}
    >
      <h3 className="text-xl text-blue-very-dark font-bold">{title}</h3>
      <p className="font-extralight text-normal text-blue-grayish">
        {description}
      </p>
      <div className="mt-10 text-right">
        <Image src={icon} width={60} height={60} alt={`${title} icon`} />
      </div>
    </div>
  );
};

export default Card;
