import React from "react";
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="bg-accent text-neutral">
      <div className="flex sm:mx-10 flex-wrap px-2 py-2 text-sm font-medium">
        <div className="flex justify-center items-center">
          <PhoneIcon className="h-5 w-5 mr-1 " />
          +1254 4564 8788
        </div>

        <div className="sm:mx-5 flex justify-center items-center">
          <LocationMarkerIcon className="h-6 w-5 mr-1 " />
          64 Weigall Avenue, Mount Bryan, SA 5110, Australia
        </div>
      </div>
    </div>
  );
};

export default Header;
