import React from "react";
import { AiOutlinePhone } from "react-icons/ai"; // Ensure this import is correct

const CallLogButton = () => {
  return (
    <a href="tel:+966505321681" className="call-log-button">
      <div className="call-log-button-icon">
        <AiOutlinePhone size={32} />
      </div>
    </a>
  );
};

export default CallLogButton;
