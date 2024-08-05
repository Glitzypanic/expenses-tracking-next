import PieChart from "../../components/ui/dashboard/PieChart";
import NewGoal from "@/app/components/ui/savings/NewGoal";
import CurrGoal from "@/app/components/ui/savings/CurrGoal";
import SavingCalc from "@/app/components/ui/savings/SavingCalc";
import { Calendar } from "@nextui-org/react";
import { Stats } from "@/app/components/ui/savings/Stats";
import Tips from "@/app/components/ui/savings/Tips";

export default function ExpensesPage() {
  return (
    <div className=" col-span-2 h-full mx-5 mt-5">
      <section className=" flex gap-5 rounded-lg w-fit">
        <div className="bg-[#0A0A0A] rounded-lg p-5 w-fit">
          <h2 className="text-3xl font-bold">Savings</h2>
          <PieChart />
        </div>
        <div className="flex flex-col justify-between">
          <SavingCalc />
          <CurrGoal />
          <NewGoal />
        </div>
        <div className="">
          <Tips />
        </div>
      </section>
      <section className="flex mt-5">
        <div className="rounded-lg p-5 bg-[#0A0A0A] w-fit">
          <Calendar
            aria-label="Date (Visible Month)"
            visibleMonths={3}
            classNames={{
              gridBody: "bg-[#0A0A0A]",
              base: "shadow-none",
              gridWrapper: "bg-[#0A0A0A]",
            }}
          />
        </div>
        <div className="ml-5 bg-[#0A0A0A] w-fit p-5 h-fit rounded-lg flex items-center justify-center">
          <Stats />
        </div>
      </section>
    </div>
  );
}
