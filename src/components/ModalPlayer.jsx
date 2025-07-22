import React from "react";
import "./ModalPlayer.css";

function ModalPlayer({ src, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <video controls autoPlay src={src} />
    </div>
  );
}

export default ModalPlayer;
