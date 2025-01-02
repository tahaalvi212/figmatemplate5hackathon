import React from "react";
import { LuPhone } from "react-icons/lu";
import { BiMessage } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Topheader = () => {
  return (
    <div className="w-full h-[auto] bg-[#252B42] flex flex-col md:flex-row justify-between items-center p-[12px] md:p-[24px]">
      {/* Contact Info */}
      <div className="flex text-[#FFFFFF] flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-4">
          <LuPhone />
          <h6 className="font-bold text-[14px] leading-[24px]">
            (225) 555-0118
          </h6>
        </div>
        <div className="flex items-center gap-2 md:gap-5 mt-2 md:mt-0">
          <BiMessage className="w-[16px] h-[16px]" />
          <h6 className="font-bold text-[14px] leading-[24px]">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      {/* Follow Us Text */}
      <div className="flex items-center text-[#FFFFFF] font-bold text-[14px] text-center mt-2 md:mt-0 gap-2">
        <h6>Follow Us and get a chance to win 80% off</h6>
      </div>

      {/* Social Icons */}
      <div className="flex items-center text-[#FFFFFF] gap-2 mt-2 md:mt-0">
        <h6 className="font-bold text-[14px]">Follow Us:</h6>
        <IoLogoInstagram className="w-[18px] h-[18px]" />
        <FiYoutube className="w-[18px] h-[18px]" />
        <FaFacebook className="w-[18px] h-[18px]" />
        <FaTwitterSquare className="w-[18px] h-[18px]" />
      </div>
    </div>
  );
};

export default Topheader;
