import SettingsNav from "@/app/components/ui/sidebar/SettingsNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row bg-[#1A1A1A] text-[#F5F5F5] dark">
      <div>
        <SettingsNav />
      </div>
      <section className="flex w-full flex-col">
        <div>{children}</div>
      </section>
    </div>
  );
}
