import { goalData } from "@/app/lib/utils/GoalData";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Upcoming: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 w-full rounded-lg bg-[#0A0A0A]">
      {/* header */}
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">My planning</h2>
        <div>
          <Link href="/dashboard/savings">
            <button
              className="h-fit border-2 inline-flex items-center gap-2 rounded-lg p-2 hover:border-[#CCFF00]"
              aria-label="button"
            >
              <Image
                src="/assets/svgs/Add.svg"
                alt="Plus icon"
                width={30}
                height={30}
              />
              Add new goal
            </button>
          </Link>
        </div>
      </div>

      {/* goals */}
      <div className="flex flex-col gap-5 pr-2 overflow-y-scroll">
        {goalData.map((data) => (
          <div className="flex gap-5" key={data.id}>
            <div className="bg-white rounded-lg p-1">
              <Image src={data.svg} alt={data.alt} width={40} height={40} />
            </div>
            <div className="flex flex-col w-full justify-between gap-2">
              <div className="flex justify-between items-end">
                <h3 className="text-lg font-bold">{data.name}</h3>
                <p className="text-[#9ca3af] text-xs font-bold">
                  <span>${data.goal}/</span>${data.actual}
                </p>
              </div>
              <Progress
                value={data.progress}
                classNames={{
                  indicator: "bg-[#CCFF00]",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
