"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Modal para agregar un nuevo objetivo
function GoalModal({ onSubmit }: any) {
  const router = useRouter();

  // Estados para los inputs
  const [goal, setGoal] = useState("");
  const [total, setTotal] = useState<number | null>(null);
  const [initialAmount, setinitialAmount] = useState<number | null>(null);

  // Almacenar el valor de initialAmount
  const Current = initialAmount;

  // Funcion para enviar el formulario
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ goal, total, initialAmount });
    router.back();
  };

  return (
    <div className="fixed z-10 inset-0 bg-[#1A1A1A] bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-[#0A0A0A] p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">New Goal</h2>
          <button
            onClick={() => router.back()}
            className="text-2xl hover:text-[#CCFF00]"
          >
            &times;
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="goal" className="block text-lg font-medium">
              Name
            </label>

            <input
              type="text"
              aria-label="Goal"
              id="goal"
              name="goal"
              placeholder="e.g Buy a new car"
              value={goal}
              onChange={(e) => setGoal(e.target.value)} // Actualiza el estado
              required
              className="mt-1 p-2 block w-full rounded-md focus:outline-[#CCFF00]"
            />
          </div>

          <div>
            <label htmlFor="total" className="block text-lg font-medium ">
              Total
            </label>

            <input
              type="number"
              aria-label="Total"
              id="total"
              name="total"
              placeholder="$0"
              value={total !== null ? total : ""}
              onChange={(e) =>
                setTotal(e.target.value ? Number(e.target.value) : null)
              } // Actualiza el estado
              required
              className="mt-1 p-2 block w-full rounded-md shadow-sm focus:outline-[#CCFF00]"
            />
          </div>

          <div>
            <label
              htmlFor="initialAmount"
              className="block text-lg font-medium "
            >
              Initial Amount{" "}
              <span className="text-gray-500 text-sm">(optional)</span>
            </label>

            <input
              type="number"
              aria-label="initialAmount"
              id="initialAmount"
              name="initialAmount"
              placeholder="$0"
              value={initialAmount !== null ? initialAmount : ""}
              onChange={(e) =>
                setinitialAmount(e.target.value ? Number(e.target.value) : null)
              }
              required
              className="mt-1 p-2 block w-full rounded-md shadow-sm focus:outline-[#CCFF00]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border-2 hover:border-[#CCFF00] rounded-lg text-sm font-medium mt-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GoalModal;
