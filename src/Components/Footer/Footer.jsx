import React from "react";
import SaturnLogo from "../../Components/assets/SATURN_PHARM_rx.png";
import InputFooter from "./InputFooter/InputFooter";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 md:flex-row justify-around p-10  text-white font-semibold mt-10 bg-backgroundFooter">
      <div className="flex flex-col items-center">
        <img src={SaturnLogo} alt="Saturn logo" className="w-28 mb-5 invert" />

        <a href="#" className="hover:text-sky-500">
          Início
        </a>
        <a href="#" className="hover:text-sky-500">
          Sobre nós
        </a>
      </div>

      <div className="text-center">
        <h1>Fique por dentro dos próximos drops!</h1>
        <InputFooter />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-5">
          <h1 className="mb-3">Termos</h1>
          <a href="#" className="hover:text-sky-500">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-sky-500">
            Termos de Política
          </a>
        </div>

        <div>
          <div className="flex justify-center gap-2">
            <a href="https://www.instagram.com/saturnsonline/" target="_blank">
              <FaInstagram className="text-lg hover:text-sky-500 transition duration-500" />
            </a>
            <a href="">
              <FaTwitter className="text-lg hover:text-sky-500 transition duration-500" />
            </a>
          </div>
          <p>
            By{" "}
            <a
              href="https://www.instagram.com/th_ntc"
              target="_blank"
              className="hover:text-sky-500"
            >
              Thgx$
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
