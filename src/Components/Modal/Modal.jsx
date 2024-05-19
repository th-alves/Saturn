import React from "react";
import Tabs from "./Tabs";

const Modal = ({ isModalOpen, setModalOpen }) => {
  const closeModal = (e) => {
    if (e.target.id === "modal") {
      setModalOpen(false);
    }
  };

  if (isModalOpen) {
    return (
      <div
        id="modal"
        onClick={closeModal}
        className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-[1000]"
      >
        <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 py-10 rounded-lg">
          <div>
            <Tabs />
          </div>
          <button
            onClick={setModalOpen}
            className="absolute top-0 right-0 bg-white px-3 text-xl"
          >
            X
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
