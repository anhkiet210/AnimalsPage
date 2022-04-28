import React from "react";

import BannerImage from "../../../images/social-media-users.png";
import { Link } from "react-router-dom";
const ClientBanner = () => {
  return (
    <div className="h-fit md:h-screen w-full bg-[#EFF3F9]  px-[5%]">
      <div className="text-center w-full flex items-center h-full gap-4 flex-col md:flex-row">
        <div className="w-1/2 h-full text-center flex items-center  justify-center flex-col">
          <small className="hidden md:block">Welcome to Happy Searching</small>
          <h1 className="text-2xl md:text-5xl my-2 md:my-4 font-semibold">
            Simple searching website
          </h1>
          <small className="md:hidden block">Welcome to Happy Searching</small>
          <h1 className="w-3/4 my-2 text-sm text-center sm:text-base">
            The place where to search information about animals. Let's relax and
            experience!
          </h1>

          <Link
            to="/explore/all"
            className="my-4 flex items-center justify-center"
          >
            <button className="bg-purple-700 hover:bg-purple-800 px-5 py-1.5 rounded text-white duration-200 ease-linear">
              Get stated
            </button>
          </Link>
        </div>
        <div className="w-1/2 h-full">
          <img
            src={BannerImage}
            alt="banner"
            className="object-contain bg-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default ClientBanner;
