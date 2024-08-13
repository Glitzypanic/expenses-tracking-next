import Goals from "@/app/components/ui/goals/Goals";
import CurrGoal from "@/app/components/ui/goals/CurrGoal";
import AddFunds from "@/app/components/ui/goals/AddFunds";
import PieChart from "../../components/ui/charts/PieChart";
import SavingCalc from "@/app/components/ui/savings/SavingCalc";
import Tips from "@/app/components/ui/common/Tips";
import Balance from "@/app/components/ui/savings/Balance";

export default function ExpensesPage() {
  return (
    <div className=" col-span-2 h-full mx-5 mt-5">
      <section className=" flex gap-5 rounded-lg w-fit">
        <div className="bg-[#0A0A0A] rounded-lg p-5 w-[600px]">
          <h2 className="text-3xl font-bold">Savings</h2>
          <PieChart />
        </div>
        <div className="flex flex-col justify-between">
          <AddFunds />
          <CurrGoal />
          <SavingCalc />
        </div>
        <div className="">
          <Tips />
        </div>
      </section>
      <section className="flex mt-5">
        <div className="mr-5 bg-[#0A0A0A] w-fit p-5 rounded-lg">
          <Balance />
        </div>
        <div className="rounded-lg p-5 bg-[#0A0A0A] w-[900px]">
          <Goals />
          {/* <Calendar
            aria-label="Date (Visible Month)"
            visibleMonths={3}
            classNames={{
              gridBody: "bg-[#0A0A0A]",
              base: "shadow-none",
              gridWrapper: "bg-[#0A0A0A]",
            }}
          /> */}
        </div>
      </section>
    </div>
  );
}
