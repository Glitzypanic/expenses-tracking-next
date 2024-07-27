import { Progress } from "@nextui-org/react";
import PieChart from "../../components/ui/PieChart";

export default function ExpensesPage() {
  return (
    <div className="bg-[#0A0A0A] rounded-lg col-span-2 px-6 h-full m-5 p-5">
      <h2 className="text-3xl font-bold pt-6">Savings</h2>
      <PieChart />
      <div className="w-full border-2 h-32 flex flex-col justify-center p-5">
        <h3 className="font-semibold text-2xl">Saving goals calculator</h3>
        <label className="w-fit inline-flex gap-3 mt-3">
          <input
            type="text"
            className="p-2 rounded-lg"
            placeholder="Saving Goal"
          />
          <input
            type="text"
            className="p-2 rounded-lg"
            placeholder="Number of Month"
          />
        </label>
        <p className="mt-2 font-medium">Month savings necessary: $0</p>
      </div>
    </div>
  );
}
