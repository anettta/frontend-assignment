import React from "react";
import { useGlobalContext } from "./context";
import SingleMovie from "./SingleMovie";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <SingleMovie />
        <button className="close-modal-btn" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
