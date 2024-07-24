import { Progress } from "@nextui-org/react";

export default function ExpensesPage() {
  return (
    <div className="bg-[#0A0A0A] rounded-lg col-span-2 px-6 h-full m-5 p-5">
      <h2 className="text-3xl font-bold pt-6">Savings</h2>
      <section className="flex flex-col gap-10 rounded-lg w-full bg-[#0A0A0A] h-fit p-5 mt-4">
        <div className="flex justify-between">
          <div className="block">
            <h2 className="text-2xl font-bold">Goal</h2>
            <span className="text-[#9ca3af]">68% Progress</span>
          </div>
          <div>
            <button className="h-fit border-2 rounded-lg p-2 hover:border-[#CCFF00]">
              View Report
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-end gap-5">
            <h2 className="text-5xl">
              <span className="text-[#CCFF00]">$</span>3,400
            </h2>
            <span className="text-[#9ca3af]">of $5,000</span>
          </div>
          <Progress
            value={68}
            classNames={{
              indicator: "bg-[#CCFF00]",
            }}
          />
        </div>
      </section>
    </div>
  );
}
