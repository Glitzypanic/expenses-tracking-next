import AreaChart from "../components/ui/charts/AreaChart";
import Goals from "../components/ui/goals/Goals";
import SavingGoal from "../components/ui/goals/SavingGoal";
import TableDaily from "../components/ui/tables/TableDaily";

export default function Page({ searchParams }: any) {
  return (
    <main className="bg-[#1A1A1A] flex w-full flex-col gap-5">
      <section className="">
        <AreaChart />
      </section>

      <div className="flex md:flex-col lg:flex-row gap-5 mb-5 ">
        <section className="w-full">
          <TableDaily />
        </section>
        <aside className="flex flex-col w-full gap-5">
          <SavingGoal />
          <div className="h-[280px]">
            <Goals searchParam={searchParams} showLink={false} />
          </div>
        </aside>
      </div>
    </main>
  );
}
