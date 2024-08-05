"use client";

import Image from "next/image";
import NavLink from "./NavLinks";
import ProAccess from "./ProAcces";

export default function SideNav() {
  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: "/Dashboard-w.svg",
      activeIcon: "/Dashboard.svg",
    },
    {
      href: "/dashboard/payments",
      label: "Payments",
      icon: "/Transaction-w.svg",
      activeIcon: "/Transaction.svg",
    },
    {
      href: "/dashboard/savings",
      label: "Savings",
      icon: "/Save-w.svg",
      activeIcon: "/Savings.svg",
    },
    {
      href: "/dashboard/reports",
      label: "Reports",
      icon: "/Report-w.svg",
      activeIcon: "/Report.svg",
    },
  ];

  const settingsItem = {
    href: "/dashboard/settings",
    label: "Settings",
    icon: "/Settings-w.svg",
    activeIcon: "/Settings.svg",
  };

  return (
    <nav className="w-64 absolute h-full flex flex-col bg-[#0A0A0A]">
      <header className="flex justify-center items-center gap-2 px-5 py-10">
        <Image
          className="rounded-lg"
          src="/Logo-xs.png"
          width={40}
          height={40}
          alt="Company logo"
        />
        <span className="text-3xl font-bold text-[#F5F5F5]">GTracking</span>
      </header>
      <div className="flex flex-col flex-grow justify-between">
        <ul className="flex flex-col mt-5 gap-2 text-white px-5 text-lg">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </ul>
        <div className="h-full flex items-end">
          <ProAccess />
        </div>
        <ul className="flex flex-col mt-auto mb-5 gap-2 text-white px-5 text-lg">
          <NavLink item={settingsItem} />
        </ul>
      </div>
    </nav>
  );
}
