import React from "react";
import SaturnLogo from "../../Components/assets/SATURN_PHARM_rx.webp";
import InputFooter from "./InputFooter/InputFooter";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 md:flex-row justify-around p-10  text-white font-semibold mt-10 bg-backgroundFooter">
      <div className="flex flex-col items-center">
        <img src={SaturnLogo} alt="Saturn logo" className="w-28 mb-5 invert" />

        <Link to={"/"} className="hover:text-sky-500">
          Início
        </Link>
        <Link to={"/sobre"} className="hover:text-sky-500">
          Sobre nós
        </Link>
      </div>

      <div className="text-center">
        <h1>Fique por dentro dos próximos drops!</h1>
        <InputFooter />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-5">
          <h1 className="mb-3">Termos</h1>
          <Link href="#" className="hover:text-sky-500">
            Política de Privacidade
          </Link>
          <Link href="#" className="hover:text-sky-500">
            Termos de Política
          </Link>
        </div>

        <div>
          <div className="flex justify-center gap-2">
            <Link
              to={"https://www.instagram.com/saturnsonline/"}
              target="_blank"
              aria-label="Instagram da loja Saturn"
            >
              <FaInstagram className="text-lg hover:text-sky-500 transition duration-500 m-2" />
            </Link>
            <Link href="#" aria-label="Twitter da loja Saturn">
              <FaTwitter className="text-lg hover:text-sky-500 transition duration-500 m-2" />
            </Link>
          </div>
          <p className="m-2">
            By{" "}
            <Link
              to={"https://www.instagram.com/th_ntc"}
              target="_blank"
              className="hover:text-sky-500"
            >
              Thgx$
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
