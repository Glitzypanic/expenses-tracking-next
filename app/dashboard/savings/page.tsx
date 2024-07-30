import PieChart from "../../components/ui/dashboard/PieChart";
import NewGoal from "@/app/components/ui/savings/NewGoal";
import CurrGoal from "@/app/components/ui/savings/CurrGoal";
import SavingCalc from "@/app/components/ui/savings/SavingCalc";

export default function ExpensesPage() {
  return (
    <div className=" col-span-2 h-full mx-5 mt-5">
      <section className=" flex gap-5 rounded-lg p-5 w-fit">
        <div className="bg-[#0A0A0A] rounded-lg p-5 w-fit">
          <h2 className="text-3xl font-bold">Savings</h2>
          <PieChart />
        </div>
        <div className="flex flex-col gap-7">
          <SavingCalc />
          <CurrGoal />
          <NewGoal />
        </div>
      </section>
    </div>
  );
}
