import React, { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Footer = () => {

  return (
      <div id="footer" className="bg-gray-900 mx-auto w-full py-10 px-4 md:px-20 flex text-center justify-between text-gray-400">
        <span >© Muhammad Atiq</span>
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            Source code
            <OpenInNewIcon fontSize="[16px]" className="text-white hover:text-green-400 transition" />
        </a>
      </div>
  );
};

export default Footer;
