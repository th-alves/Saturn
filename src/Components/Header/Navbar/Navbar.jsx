import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaCartFlatbed, FaBars, FaX } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import "animate.css";

import DropdownMenu from "./DropdownMenu";
import Modal from "../../Modal/Modal";
import SaturnLogo from "../../assets/SATURN_PHARM_rx.webp";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Lógica Modal
  const [openModal, setOpenModal] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between md:justify-around p-5 sticky top-0 z-index[99] flex-wrap bg-white">
      {/* Links */}
      <ul className="hidden md:flex gap-5">
        <li>
          <Link to={"/"}>Início</Link>
        </li>
        <li>
          <Link to={"/sobre"}>Sobre nós</Link>
        </li>
        <li
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpenDropdown((prev) => !prev)}
        >
          Comprar <FaAngleDown />
          {openDropdown && <DropdownMenu />}
        </li>
      </ul>

      {/* Logo */}
      <Link to={"/"}>
        <img src={SaturnLogo} alt="Saturn logo" className="w-24" />
      </Link>

      {/* Botões de Login e Carrinho */}
      <div className="hidden md:flex items-center gap-5">
        <button
          onClick={() => setOpenModal(true)}
          className="border border-black p-2 px-5 rounded-lg font-bold hover:bg-sky-700 hover:text-white transition duration-300"
        >
          Login
        </button>

        {/* Modal */}
        <Modal
          isModalOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        />
        <Link
          href="#"
          className="flex items-center gap-2 bg-sky-700 border border-sky-700  text-white p-2 px-5 rounded-lg hover:bg-sky-900 transition duration-300"
        >
          <FaCartFlatbed /> Carrinho
          <span className="bg-black px-2 rounded-full">0</span>
        </Link>
      </div>

      <div className="md:hidden">
        <button type="button" aria-label="abrirMenu" onClick={toggleNavbar}>
          {isOpen ? (
            <div className="border border-zinc-500 p-2 px-4 rounded-md">
              <FaX className="text-2xl" />
            </div>
          ) : (
            <div className="border border-zinc-500 p-2 px-4 rounded-md">
              <FaBars className="text-2xl" />
            </div>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="flex basis-full flex-col items-center origin-top ">
          <Fade cascade damping={0.1}>
            <li className="mt-4">
              <Link to={"/"}>Início</Link>
            </li>
            <li className="mt-4">
              <Link to={"/sobre"}>Sobre nós</Link>
            </li>
            <li
              className="flex flex-col items-center gap-2 mt-4"
              onClick={() => setOpenDropdown((prev) => !prev)}
            >
              <p className="flex items-center gap-1">
                Comprar <FaAngleDown />
              </p>
              {openDropdown && <DropdownMenu />}
            </li>
            {/* Nav Buttons */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <button
                onClick={() => setOpenModal(true)}
                className="border border-black p-2 px-5 rounded-lg font-bold hover:bg-sky-700 hover:text-white transition duration-300"
              >
                Login
              </button>
              {/* Modal */}
              <Modal
                isModalOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}
              />
              <Link
                href="#"
                className="flex items-center gap-2 bg-sky-700 border border-sky-700  text-white p-2 px-5 rounded-lg hover:bg-sky-900 transition duration-300"
              >
                <FaCartFlatbed /> Carrinho
                <span className="bg-black px-2 rounded-full">0</span>
              </Link>
            </div>
          </Fade>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
