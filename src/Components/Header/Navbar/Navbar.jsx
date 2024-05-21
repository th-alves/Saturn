import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { FaAngleDown, FaCartFlatbed, FaBars, FaX } from "react-icons/fa6";
import SaturnLogo from "../../assets/SATURN_PHARM_rx.png";
import { motion } from "framer-motion";
import Modal from "../../Modal/Modal";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Lógica Modal
  const [openModal, setOpenModal] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
    },
  };

  return (
    <nav className="flex items-center justify-between md:justify-around p-5 sticky top-0 z-index[99] flex-wrap bg-white">
      {/* Links */}
      <ul className="hidden md:flex gap-5">
        <li>
          <NavLink to="/">Início</NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre nós</NavLink>
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
      <img src={SaturnLogo} alt="Saturn logo" className="w-24" />

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
        <a
          href="#"
          className="flex items-center gap-2 bg-sky-700 border border-sky-700  text-white p-2 px-5 rounded-lg hover:bg-sky-900 transition duration-300"
        >
          <FaCartFlatbed /> Carrinho
          <span className="bg-black px-2 rounded-full">0</span>
        </a>
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
        <motion.ul
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex basis-full flex-col items-center origin-top"
        >
          <li className="mt-4">
            <NavLink to="/">Início</NavLink>
          </li>
          <li className="mt-4">
            <NavLink to="/sobre">Sobre nós</NavLink>
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
            <a
              href="#"
              className="flex items-center gap-2 bg-sky-700 border border-sky-700  text-white p-2 px-5 rounded-lg hover:bg-sky-900 transition duration-300"
            >
              <FaCartFlatbed /> Carrinho
              <span className="bg-black px-2 rounded-full">0</span>
            </a>
          </div>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
