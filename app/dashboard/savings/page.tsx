import Goals from "@/app/components/ui/goals/Goals";
import CurrGoal from "@/app/components/ui/goals/CurrGoal";
import AddFunds from "@/app/components/ui/goals/AddFunds";
import PieChart from "../../components/ui/charts/PieChart";
import SavingCalc from "@/app/components/ui/savings/SavingCalc";
import Tips from "@/app/components/ui/common/Tips";
import Balance from "@/app/components/ui/savings/Balance";

export default function ExpensesPage({ searchParams }: any) {
  return (
    <div>
      <section className="flex md:flex-col lg:flex-row gap-5 rounded-lg">
        <div className="bg-[#0A0A0A] rounded-lg p-5 w-full">
          <PieChart />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <AddFunds />
          <CurrGoal />
          <SavingCalc />
        </div>
        <div className="w-full">
          <Tips />
        </div>
      </section>
      <section className="flex md:flex-col lg:flex-row my-5 gap-5 h-[280px]">
        <div className="flex w-full items-center bg-[#0A0A0A] p-5 rounded-lg">
          <Balance />
        </div>
        <Goals searchParam={searchParams} showLink={true} />
      </section>
    </div>
  );
}
