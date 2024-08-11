import TotalBalance from "@/app/components/ui/reports/TotalBalance";
import MonthlyExpenses from "@/app/components/ui/reports/MonthlyExpenses";
import ReportChart from "@/app/components/ui/reports/ReportChart";
import Image from "next/image";

export default function ReportsPage() {
  const financialTips = [
    "Tip: Track your expenses to identify areas where you can cut back.",
    "Reminder: Review your subscriptions and cancel unused ones.",
    "Goal: Try to save at least 20% of your monthly income.",
    "Idea: Consider setting up automatic transfers to your savings account.",
    "Alert: Don't forget to plan for upcoming big expenses.",
  ];

  const randomTip =
    financialTips[Math.floor(Math.random() * financialTips.length)];

  return (
    <div className="rounded-lg h-full m-5">
      <section className="mt-5 flex gap-5 justify-between">
        <div className="w-[1000px]">
          <ReportChart />
        </div>
        <div>
          <div className="flex gap-10">
            <TotalBalance />
            <MonthlyExpenses />
          </div>
          <div className="flex gap-10 mt-5">
            <button className="border-white border-2 p-4 hover:border-[#CCFF00] rounded-lg w-64 bg-[#0A0A0A]">
              Download monthly report
            </button>
            <button className="border-white border-2 p-4 hover:border-[#CCFF00] rounded-lg w-64 bg-[#0A0A0A]">
              Download yearly report
            </button>
          </div>
          <div className="bg-[#307A4F] h-[493px] mt-5 rounded-lg flex flex-col justify-center items-center">
            <Image
              src={"/assets/svgs/Business-Report.svg"}
              alt="Report icon"
              width={300}
              height={300}
            />
            <p className="font-bold mt-10">{randomTip}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
