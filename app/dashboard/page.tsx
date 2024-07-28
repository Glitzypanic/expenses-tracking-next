import LineChart from "../components/ui/dashboard/LineChart";
import PieChart from "../components/ui/dashboard/PieChart";
import CardOverview from "../components/ui/dashboard/CardOverview";
import SavingGoal from "../components/ui/dashboard/SavingGoal";
import Upcoming from "../components/ui/dashboard/Upcoming";
import TableDaily from "../components/ui/dashboard/TableDaily";

export default function Page() {
  return (
    <main className="bg-[#1A1A1A] flex m-5 h-full">
      <section className="flex-grow grid grid-cols-[1fr,auto] mr-5">
        <div className="grid grid-cols-[1fr,auto] h-fit">
          <div>
            <LineChart />
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-5 h-fit">
            <CardOverview
              title={"Total Balance"}
              value={"7,400"}
              percentage={" 5,4%"}
              description={"last month"}
            />
            <CardOverview
              title={"Monthly Expenses"}
              value={"10,400"}
              percentage={" 10%"}
              description={"last month"}
            />
            <CardOverview
              title={"Remaining Budget"}
              value={"15,000"}
              percentage={" 15%"}
              description={"used budget"}
            />
            <CardOverview
              title={"Savings"}
              value={"15,000"}
              percentage={" 15%"}
              description={"last month"}
            />
          </div>

          <div className="bg-[#0A0A0A] rounded-lg col-span-2 mt-4 p-5 h-full">
            <TableDaily />
          </div>
        </div>
      </section>

      <aside className="w-[525px]">
        <PieChart />
        <SavingGoal />
        <Upcoming />
      </aside>
    </main>
  );
}
