import { useRouter } from "next/router";
import React from "react";

export function NavItem({
  item,
  active = () => {
    return false;
  },
}) {
  const { title, path, icon } = item;
  const isActiveRoot = active(path);

  return (
    <a
      href={path}
      className={`no-underline py-4 ${
        isActiveRoot ? "font-bold" : "text-gray-200"
      } hover:font-bold`}
    >
      <button className="p-2 flex gap-2 items-center capitalize">
        {icon}
        {title}
      </button>
    </a>
  );
}

function NavSection({ navConfig }) {
  const router = useRouter();
  const { pathname } = router;
  console.log("path", pathname);

  const match = (path) => path === pathname;
  return (
    <ul className="-ml-2">
      {navConfig.map((item, index) => (
        <li key={index} className="text-white py-2">
          <NavItem item={item} active={match} />
        </li>
      ))}
    </ul>
  );
}

export default NavSection;
