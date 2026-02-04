import { BarChartOutlined, CalendarOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const menus = [
  {
    key: "/",
    title: "Dashboard",
    icon: BarChartOutlined,
  },
  {
    key: "/calendar",
    title: "Calendar",
    icon: CalendarOutlined,
  },
];
export const makeMenus = () => {
  return menus.map((menu, index) => ({
    key: menu.key,
    icon: React.createElement(menu.icon),
    label: <Link to={menu.key}>{menu.title}</Link>,
  }));
};
