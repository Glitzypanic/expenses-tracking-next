import { Progress } from "@nextui-org/progress";

export default function SavingGoal() {
  return (
    <section className="flex flex-col gap-10 rounded-lg w-full bg-[#0A0A0A] h-fit p-5 mt-4">
      <div className="flex justify-between">
        <div className="block">
          <h2 className="text-2xl font-bold">Saving Goals</h2>
          <span className="text-[#9ca3af]">68% Progress</span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-end gap-5">
          <h2 className="text-5xl">
            <span className="text-[#CCFF00]">$</span>3,800
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
  );
}
