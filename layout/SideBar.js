import React, { useState } from "react";
import { signOut } from "next-auth/react";

// conmponents
import NavSection, { NavItem } from "./NavSection";
import navConfig, { getNavIcon } from "./NavConfig";
import { Icon } from "@iconify/react";

function SideBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          isNavbarOpen ? "hidden" : "block"
        } lg:hidden -mb-4 lg:mb-0`}
        onClick={() => {
          setIsNavbarOpen(true);
        }}
      >
        <Icon icon="mdi:menu" width={30} />
      </div>
      <div
        className={`${
          isNavbarOpen ? "flex" : "hidden"
        } absolute lg:relative top-5 w-[90%] min-h-[95%] mr-4 z-10 lg:w-1/5  h-[90vh] bg-black rounded-[36px] text-white p-4 mb-8 flex-col pl-8 pt-8 lg:flex justify-between lg:min-h-full`}
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-bold text-4xl">Board. </h1>
            <div
              className={`${
                isNavbarOpen ? "block" : "hidden"
              } lg:hidden cursor-pointer`}
              onClick={() => {
                setIsNavbarOpen(false);
              }}
            >
              <Icon icon="ic:outline-close" width={30} />
            </div>
          </div>

          <NavSection navConfig={navConfig} />
        </div>
        <div>
          <NavItem item={{ path: "/dashboard", title: "Help", icon: "" }} />
          <NavItem
            item={{ path: "/dashboard", title: "Contact Us", icon: "" }}
          />
          <button
            className="py-4 text-gray-200 p-2 flex gap-2 items-center capitalize"
            onClick={() => {
              signOut();
            }}
          >
            {getNavIcon("tabler:logout")}
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
