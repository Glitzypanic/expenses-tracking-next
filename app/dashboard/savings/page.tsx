import { Progress } from "@nextui-org/react";
import PieChart from "../../components/ui/PieChart";

export default function ExpensesPage() {
  return (
    <div className="bg-[#0A0A0A] rounded-lg col-span-2 px-6 h-full m-5 p-5">
      <h2 className="text-3xl font-bold pt-6">Savings</h2>
      <PieChart />
    </div>
  );
}
