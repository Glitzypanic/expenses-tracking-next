import SideNav from "../components/SideNav";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-y-scroll bg-[#1A1A1A] text-[#F5F5F5]">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <section className="flex w-full flex-col">
        <Header />
        <div>{children}</div>
      </section>
    </div>
  );
}
