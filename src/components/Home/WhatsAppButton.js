import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div >
      <a href="https://wa.me/message/3N4567BK3QM5A1" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={60} color="#FFFFFF" className="whatsapp-button" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
