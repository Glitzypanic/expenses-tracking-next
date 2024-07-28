import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Upcoming() {
  return (
    <section className="flex flex-col gap-5 rounded-lg w-full bg-[#0A0A0A] h-fit p-5 mt-4">
      <div className="flex justify-between">
        <div className="block">
          <h2 className="text-2xl font-bold">My planning</h2>
        </div>
        <div>
          <Link href="/dashboard/savings">
            <button className="h-fit border-2 rounded-lg p-2 hover:border-[#CCFF00]">
              See all
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="bg-white rounded-lg p-1">
            <Image src="/Home.svg" alt="" width={40} height={40} />
          </div>
          <div className="flex flex-col w-[300px] justify-between gap-2">
            <div className="flex justify-between items-end">
              <h3 className="text-lg font-bold">House</h3>
              <p className="text-[#9ca3af] text-xs font-bold">
                <span>$2,300/</span>$8,000
              </p>
            </div>
            <Progress
              value={40}
              classNames={{
                indicator: "bg-[#CCFF00]",
              }}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-white rounded-lg p-1">
            <Image src="/Car.svg" alt="" width={40} height={40} />
          </div>
          <div className="flex flex-col w-[300px] justify-between gap-2">
            <div className="flex justify-between items-end">
              <h3 className="text-lg font-bold">New car</h3>
              <p className="text-[#9ca3af] text-xs font-bold">
                <span>$2,300/</span>$8,000
              </p>
            </div>
            <Progress
              value={40}
              classNames={{
                indicator: "bg-[#CCFF00]",
              }}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-white rounded-lg p-1">
            <Image src="/Vacation.svg" alt="" width={40} height={40} />
          </div>
          <div className="flex flex-col w-[300px] justify-between gap-2">
            <div className="flex justify-between items-end">
              <h3 className="text-lg font-bold">Vacations</h3>
              <p className="text-[#9ca3af] text-xs font-bold">
                <span>$2,300/</span>$8,000
              </p>
            </div>
            <Progress
              value={40}
              classNames={{
                indicator: "bg-[#CCFF00]",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
