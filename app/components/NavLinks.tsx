"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink({ item }: { item: any }) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={item.href}
      className={clsx(
        "flex gap-2 py-2 px-4 hover:bg-[#CCFF00] hover:text-black cursor-pointer hover:rounded-lg",
        {
          "bg-[#CCFF00] text-black rounded-lg": pathname === item.href,
        }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={pathname === item.href || isHovered ? item.activeIcon : item.icon}
        alt=""
        width={25}
        height={25}
      />
      {item.label}
    </Link>
  );
}
