import Image from "next/image";
import NavLink from "../sidenav/NavLinks";

export default function Header() {
  const settingsItem = {
    href: "/dashboard/settings/profile",
    icon: "/assets/svgs/Settings-w.svg",
    activeIcon: "/assets/svgs/Settings.svg",
  };

  return (
    <header className="flex justify-between items-center rounded-lg m-5 p-6 bg-[#0A0A0A]">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <h2 className="text-[#9ca3af]">
          Hi Jose, here are your financial stats
        </h2>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-6">
          <Image
            src={"/assets/svgs/Notification.svg"}
            alt="search"
            width={25}
            height={25}
            className="cursor-pointer"
          />
          <NavLink item={settingsItem} />
        </div>
        <div>
          <Image
            src={"/assets/img/Jose.jpeg"}
            alt="search"
            width={60}
            height={60}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
