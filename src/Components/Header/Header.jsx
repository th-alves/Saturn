import React from "react";
import Navbar from "./Navbar/Navbar";
import SaturnGif from "../assets/saturn-gif.gif";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="w-full md:w-screen">
        <img
          rel="preload"
          fetchpriority="high"
          as="gif"
          src={SaturnGif}
          className="w-full h-40 md:h-72 object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
