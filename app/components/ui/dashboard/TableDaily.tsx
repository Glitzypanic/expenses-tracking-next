import React from "react";
import { mockData } from "@/lib/utils/MockData";
import clsx from "clsx";
import Link from "next/link";

const TableDaily: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">Daily Payments</h2>
          <span className="text-[#9ca3af]">Data from 1-12 Apr, 2024</span>
        </div>
        <Link href="/dashboard/payments">
          <button className="h-fit border-2 rounded-lg p-2 hover:border-[#CCFF00]">
            See all
          </button>
        </Link>
      </div>
      <table className="min-w-full text-left mt-7 mb-[26px]">
        <thead className="border border-white">
          <tr>
            <th className="py-3 px-4">Order</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {mockData.map((data) => (
            <tr key={data.id}>
              <th className="py-2 px-4">{data.order}</th>
              <th className="py-2 px-4">{data.amount}</th>
              <th className="py-2 px-4">{data.date}</th>
              <div className="py-2">
                <th
                  className={clsx("rounded-lg flex w-fit px-3 font-medium", {
                    "bg-[#c4f9e4]  text-[#28895e]": data.status === "Paid",
                    "bg-[#dfd3ff] text-[#7d62ca]": data.status === "Unpaid",
                  })}
                >
                  {data.status}
                </th>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableDaily;
