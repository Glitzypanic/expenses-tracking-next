"use client";

import NavLink from "./NavLinks";
import Link from "next/link";

export default function SettingsNav() {
  const navLinks = [
    {
      href: "/dashboard/settings/profile",
      label: "Edit Profile",
      icon: "/assets/svgs/Profile-w.svg",
      activeIcon: "/assets/svgs/Profile.svg",
    },
    {
      href: "/dashboard/settings/plans",
      label: "Plans",
      icon: "/assets/svgs/Wallet-w.svg",
      activeIcon: "/assets/svgs/Wallet.svg",
    },
    {
      href: "/dashboard/settings/help",
      label: "Help & Support",
      icon: "/assets/svgs/Help-w.svg",
      activeIcon: "/assets/svgs/Help.svg",
    },
  ];

  return (
    <nav className="bg-[#0A0A0A] rounded-lg col-span-2 px-6 p-5">
      <h2 className="text-2xl font-bold mb-10">
        Update And Manage Your Account
      </h2>
      <ul className="w-full text-white text-lg">
        <li className="flex flex-col gap-2 ">
          {navLinks.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </li>
      </ul>
      <Link href={"/dashboard/settings/logout"}>
        <button
          className="border-2 rounded-lg font-bold py-2 px-5 mt-24 w-full text-white hover:bg-red-500/10 hover:text-red-500 hover:border-red-500"
          aria-label="button"
        >
          Logout
        </button>
      </Link>
    </nav>
  );
}
