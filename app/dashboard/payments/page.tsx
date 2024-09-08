"use client";

import { generateData, User } from "@/app/lib/utils/generateData";
import { Pagination } from "@nextui-org/pagination";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const PaymentsPage = () => {
  const users: User[] = generateData(15);
  const [data, setData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const numRecords = 10; // Número de registros a generar
    const newData = generateData(numRecords); // Genera los datos de prueba
    setData(newData); // Guarda los datos en el estado "data"
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const numRecords = 10; // Número de registros a generar
    const newData = generateData(numRecords); // Genera los datos de prueba
    setData(newData); // Guarda los datos en el estado "data"
  };

  return (
    <div className="mb-5 rounded-lg bg-[#0A0A0A] p-5">
      <div className="flex justify-between py-6">
        <h2 className="text-3xl font-bold">Payments</h2>
        <button
          className="rounded-lg border border-white px-4 hover:border-[#CCFF00]"
          aria-label="Button"
        >
          + Create payment
        </button>
      </div>
      <table className="mb-[26px] min-w-full  border-b border-white text-left">
        <thead className="border border-white">
          <tr>
            <th className="py-3 px-4">Id</th>
            <th className="py-3 px-4">Order</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 text-[#9ca3af]">INV0{user.id}</td>
              <td className="py-2 px-4">{user.order}</td>
              <td className="py-2 px-4">$ {user.amount}</td>
              <td className="py-2 px-4">{user.date}</td>
              <td
                className={clsx(
                  "my-2 flex w-20 justify-center rounded-lg px-3 font-medium",
                  {
                    "bg-[#326747]  text-white": user.status === "Paid",
                    "bg-[#66338b] text-white": user.status === "Unpaid",
                  }
                )}
              >
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <Pagination
          total={10}
          initialPage={1}
          classNames={{ cursor: "bg-[#CCFF00]" }}
          onChange={handlePageChange}
          showControls
          aria-label="pagination"
        />
      </div>
    </div>
  );
};

export default PaymentsPage;
