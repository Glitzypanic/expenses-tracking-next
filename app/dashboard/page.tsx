import LineChart from "../components/ui/LineChart";
import PieChart from "../components/ui/PieChart";
import CardOverview from "../components/ui/CardOverview";
import SavingGoal from "../components/ui/SavingGoal";
import Upcoming from "../components/ui/Upcoming";
import { Pi } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-[#1A1A1A] flex  ml-5 mr-5">
      <section className="flex">
        <LineChart />
      </section>
      <section className="grid grid-cols-2 h-fit w-fit gap-5">
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
      </section>
      <aside className="ml-5 w-[525px]">
        <PieChart />
        <SavingGoal />
        <Upcoming />
      </aside>
    </main>
  );
}
