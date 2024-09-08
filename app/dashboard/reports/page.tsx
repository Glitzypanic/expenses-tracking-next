"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import MonthlyExpenses from "@/app/components/ui/reports/MonthlyExpenses";
import ReportChart from "@/app/components/ui/reports/ReportChart";
import TotalBalance from "@/app/components/ui/reports/TotalBalance";

export default function ReportsPage() {
  const financialTips = [
    "Tip: Track your expenses to identify areas where you can cut back.",
    "Reminder: Review your subscriptions and cancel unused ones.",
    "Goal: Try to save at least 20% of your monthly income.",
    "Idea: Consider setting up automatic transfers to your savings account.",
    "Alert: Don't forget to plan for upcoming big expenses.",
  ];

  const [randomTip, setRandomTip] = useState(financialTips[0]);

  useEffect(() => {
    setRandomTip(
      financialTips[Math.floor(Math.random() * financialTips.length)]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="rounded-lg flex md:flex-col lg:flex-row gap-5">
      <div className="w-full">
        <ReportChart />
      </div>
      <div className="w-full">
        <div className="flex gap-5">
          <TotalBalance />
          <MonthlyExpenses />
        </div>
        <div className="flex gap-5 mt-5">
          <button
            className="border-white border-2 p-4 hover:border-[#CCFF00] rounded-lg w-full bg-[#0A0A0A]"
            aria-label="Download button"
          >
            Download monthly report
          </button>
          <button
            className="border-white border-2 p-4 hover:border-[#CCFF00] rounded-lg w-full bg-[#0A0A0A]"
            aria-label="Download button"
          >
            Download yearly report
          </button>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center rounded-lg bg-[#307A4F] p-6 md:mb-5">
          <Image
            src={"/assets/svgs/Business-Report.svg"}
            alt="Report icon"
            width={300}
            height={300}
          />
          <p className="font-bold mt-2">{randomTip}</p>
        </div>
      </div>
    </section>
  );
}
