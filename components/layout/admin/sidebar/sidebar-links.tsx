import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import SidebarLink from "../../common/sidebar-link";
import { IoIosHelpCircleOutline } from "react-icons/io";

export type TLinkItem = {
  id: string;
  label: string;
  link: string;
  icon: React.ReactNode;
};

const linkBItems: TLinkItem[] = [
  {
    label: "Settings",
    id: "settings",
    link: "/admin",
    icon: <IoSettingsSharp />,
  },
  {
    label: "Help center",
    id: "helpcenter",
    link: "/admin",
    icon: <IoIosHelpCircleOutline />,
  },
];

const linkItems: TLinkItem[] = [
  {
    label: "Dashboard",
    id: "dashboard",
    link: "/admin",
    icon: <LuLayoutDashboard />,
  },
  {
    label: "Amenities",
    id: "amenities",
    link: "/admin/amenities",
    icon: <FaUsers />,
  },
  {
    label: "Hosts",
    id: "hosts",
    link: "/admin/hosts",
    icon: <FaUsers />,
  },
  {
    label: "Users",
    id: "users",
    link: "/admin/users",
    icon: <FaUsers />,
  },
];

const AdminSidebarLinks = () => {
  return (
    <div className="flex-1 flex flex-col justify-between overflow-y-auto h-full">
      <div className="px-2 flex flex-col gap-1 py-2">
        {linkItems.map((item) => (
          <SidebarLink key={item.id} item={item} />
        ))}
      </div>
      <div className="px-2 flex flex-col justify-end  gap-1 py-2">
        {linkBItems.map((item) => (
          <SidebarLink key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebarLinks;
