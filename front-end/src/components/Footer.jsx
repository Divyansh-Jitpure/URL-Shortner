import React from "react";

const Footer = () => {
  return (
    <div className="mb-10 flex justify-center text-center">
      <span className="text-black">
        &copy; 2024 All Rights Reserved<span className="mx-2">—</span>
      </span>
      <a
        className="laptop:inline block text-[#00ADB5] hover:text-[#00d4df]"
        href="https://github.com/Divyansh-Jitpure"
        target="_blank"
      >
        @Divyansh Jitpure
      </a>
    </div>
  );
};

export default Footer;
