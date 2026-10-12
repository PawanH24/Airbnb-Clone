import Link from "next/link";
import React from "react";
import { TLinkItem } from "../admin/sidebar/sidebar-links";

type TProps = {
  item: TLinkItem;
};

const SidebarLink = ({ item: { icon, label, link } }: TProps) => {
  return (
    <Link href={link}>
      <div className="flex items-center gap-2 px-2 py-2.5 rounded text-gray-600 font-semibold text-lg hover:bg-rose-400  transition-all duration-300">
        {icon}
        <p>{label}</p>
      </div>
    </Link>
  );
};

export default SidebarLink;
