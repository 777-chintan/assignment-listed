import React from "react";
import { signOut } from "next-auth/react";

// conmponents
import NavSection, { NavItem } from "./NavSection";
import navConfig, { getNavIcon } from "./NavConfig";

function SideBar() {
  return (
    <div className="text-white p-4 mb-8 flex flex-col pl-8 pt-8 justify-between min-h-full">
      <div>
        <h1 className="font-bold text-4xl mb-8">Board. </h1>
        <NavSection navConfig={navConfig} />
      </div>
      <div>
        <NavItem item={{ path: "/dashboard", title: "Help", icon: "" }} />
        <NavItem item={{ path: "/dashboard", title: "Contact Us", icon: "" }} />
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
  );
}

export default SideBar;
