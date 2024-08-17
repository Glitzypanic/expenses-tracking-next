"use client";

import Image from "next/image";
import NavLink from "./NavLinks";
import ProAccess from "./ProAcces";

export default function SideNav() {
  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: "/assets/svgs/Dashboard-w.svg",
      activeIcon: "/assets/svgs/Dashboard.svg",
    },
    {
      href: "/dashboard/payments",
      label: "Payments",
      icon: "/assets/svgs/Transaction-w.svg",
      activeIcon: "/assets/svgs/Transaction.svg",
    },
    {
      href: "/dashboard/savings",
      label: "Savings",
      icon: "/assets/svgs/Save-w.svg",
      activeIcon: "/assets/svgs/Savings.svg",
    },
    {
      href: "/dashboard/reports",
      label: "Reports",
      icon: "/assets/svgs/Report-w.svg",
      activeIcon: "/assets/svgs/Report.svg",
    },
  ];

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
        <ProAccess />
      </div>
    </nav>
  );
}
