import PieChart from "../../components/ui/dashboard/PieChart";
import NewGoal from "@/app/components/ui/savings/NewGoal";
import CurrGoal from "@/app/components/ui/savings/CurrGoal";
import SavingCalc from "@/app/components/ui/savings/SavingCalc";

export default function ExpensesPage() {
  return (
    <div className=" col-span-2 h-full mx-5 mt-5">
      <section className="flex flex-col gap-5">
        <div className="bg-[#0A0A0A] rounded-lg p-5">
          <h2 className="text-3xl font-bold">Savings</h2>
          <PieChart />
        </div>
        <div className="bg-[#0A0A0A] rounded-lg">
          <SavingCalc />
        </div>
        <div className="bg-[#0A0A0e] rounded-lg">
          <CurrGoal />
        </div>
        <div className="bg-[#0A0A0A] rounded-lg">
          <NewGoal />
        </div>
      </section>
    </div>
  );
}
