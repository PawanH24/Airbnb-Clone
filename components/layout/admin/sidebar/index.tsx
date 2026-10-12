import React from "react";
import AdminSidebarLinks from "./sidebar-links";
import logo from "@/assets/airbnb_logo.png";
import Image from "next/image";

const AdminSidebar = () => {
  return (
    <aside className="flex flex-col w-70 border-r border-gray-300  ">
      {/* logo */}
      <div className="h-16 flex items-center justify-center font-semibold text-rose-500 text-xl">
        <Image height={35} width={35} src={logo} alt="logo" />
        <h1>airbnb</h1>
      </div>

      {/* links */}
      <AdminSidebarLinks />
    </aside>
  );
};

export default AdminSidebar;
