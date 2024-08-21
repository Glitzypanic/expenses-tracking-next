import SettingsNav from "@/app/components/ui/sidenav/SettingsNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex md:flex-col lg:flex-row h-screen bg-[#1A1A1A] gap-5 text-[#F5F5F5] dark">
      <div>
        <SettingsNav />
      </div>
      <section className="flex w-full flex-col">
        <div>{children}</div>
      </section>
    </div>
  );
}
