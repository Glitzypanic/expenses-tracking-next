import React from "react";
import { mockData } from "@/app/lib/utils/MockData";
import clsx from "clsx";
import Link from "next/link";

const TableDaily: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] p-5 rounded-lg h-full">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">Payments</h2>
          <span className="text-[#9ca3af]">Data from 1-12 Apr, 2024</span>
        </div>
        <Link href="/dashboard/payments">
          <button
            className="h-fit border-2 rounded-lg p-2 hover:border-[#CCFF00]"
            aria-label="button"
          >
            See all
          </button>
        </Link>
      </div>
      <table className="min-w-full text-left mt-7 mb-[26px]">
        <thead className="border border-white">
          <tr>
            <th className="py-3 px-4" role="columnheader">
              Order
            </th>
            <th className="py-3 px-4" role="columnheader">
              Amount
            </th>
            <th className="py-3 px-4" role="columnheader">
              Date
            </th>
            <th className="py-3" role="columnheader">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {mockData.map((data) => (
            <tr key={data.id}>
              <th className="py-2 px-4">{data.order}</th>
              <th className="py-2 px-4">{data.amount}</th>
              <th className="py-2 px-4">{data.date}</th>
              <th
                className={clsx(
                  "rounded-lg flex w-20 justify-center px-3 my-2 font-medium",
                  {
                    "bg-[#326747]  text-white": data.status === "Paid",
                    "bg-[#66338b] text-white": data.status === "Unpaid",
                  }
                )}
              >
                {data.status}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableDaily;
