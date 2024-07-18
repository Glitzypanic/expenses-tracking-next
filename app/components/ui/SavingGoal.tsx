import { Slider } from "@/components/ui/slider";

export default function SavingGoal() {
  return (
    <section className="flex flex-col gap-10 rounded-lg w-full bg-[#0A0A0A] h-fit p-5 mt-4">
      <div className="flex justify-between">
        <div className="block">
          <h2 className="text-2xl font-bold">Saving Goals</h2>
          <span className="text-[#9ca3af]">75% Progress</span>
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
            <span className="text-[#CCFF00]">$</span>1,200
          </h2>
          <span className="text-[#9ca3af]">of $2,000</span>
        </div>
        <Slider defaultValue={[40]} max={100} step={1} />
      </div>
    </section>
  );
}
