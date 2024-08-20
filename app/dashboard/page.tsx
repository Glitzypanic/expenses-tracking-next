import CardOverview from "../components/ui/dashboard/CardOverview";
import LineChart from "../components/ui/charts/LineChart";
import PieChart from "../components/ui/charts/PieChart";
import SavingGoal from "../components/ui/goals/SavingGoal";
import TableDaily from "../components/ui/tables/TableDaily";
import GoalsResume from "../components/ui/goals/GoalsResume";
import AreaChart from "../components/ui/charts/AreaChart";

export default function Page() {
  return (
    <main className="bg-[#1A1A1A] flex w-full flex-col gap-5">
      <section className="flex gap-5 w-full">
        <CardOverview
          title={"Total Balance"}
          value={"7,400"}
          percentage={" 5,4%"}
          description={"last month"}
        />
        <CardOverview
          title={"Monthly Expenses"}
          value={"1,400"}
          percentage={" 10%"}
          description={"last month"}
        />
      </section>

      <section className="">
        <AreaChart />
      </section>

      <div className="flex md:flex-col lg:flex-row gap-5 mb-5">
        <section className="w-full">
          <TableDaily />
        </section>
        <aside className="flex flex-col w-full gap-5">
          <SavingGoal />
          <GoalsResume />
        </aside>
      </div>
    </main>
  );
}
