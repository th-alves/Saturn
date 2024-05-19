import React, { useState } from "react";

const Card = ({ productImg, hoveredImg, productName, price }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-center border border-zinc-200 rounded-md p-4 shadow-lg w-[85%] mx-auto md:mx-0 bg-white">
      {hovered ? (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={hoveredImg}
            alt="t-shirt 2"
            className=" md:w-72 transition-all duration-300"
          />
        </div>
      ) : (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={productImg}
            alt="t-shirt 1"
            className="w-96 md:w-80 transition-all duration-300"
          />
        </div>
      )}

      <h3 className="mt-4 text-center">{productName}</h3>
      <p className="my-4 text-zinc-500">{price}</p>
      <button className="border border-zinc-400 p-2 px-4 rounded-md hover:bg-zinc-900 hover:text-white transition duration-300">
        Comprar
      </button>
    </div>
  );
};

export default Card;
