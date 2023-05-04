import React from "react";

// component
import { Icon } from "@iconify/react";

export const getNavIcon = (icon = "") => {
  if (icon === "") {
    return null;
  }
  return <Icon icon={icon} width={20} />;
};

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: getNavIcon("lucide:pie-chart"),
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: getNavIcon("mdi:tag-multiple-outline"),
  },
  {
    title: "Schedules",
    path: "/schedules",
    icon: getNavIcon("akar-icons:schedule"),
  },
  {
    title: "Users",
    path: "/users",
    icon: getNavIcon("mdi:user-circle-outline"),
  },
  {
    title: "Settings",
    path: "/settings",
    icon: getNavIcon("ant-design:setting-outlined"),
  },
];

export default navConfig;
