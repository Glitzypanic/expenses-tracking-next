"use client";

import React from "react";
import { useRouter } from "next/navigation";

function GoalModal() {
  const router = useRouter();

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
        <form className="space-y-4">
          <div>
            <label htmlFor="goal" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="goal"
              name="goal"
              placeholder="e.g Buy a new car"
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
              id="total"
              name="total"
              placeholder="$0"
              required
              className="mt-1 p-2 block w-full rounded-md shadow-sm focus:outline-[#CCFF00]"
            />
          </div>
          <div>
            <label htmlFor="adding" className="block text-lg font-medium ">
              Add to goal{" "}
              <span className="text-gray-500 text-sm">(optional)</span>
            </label>
            <input
              type="number"
              id="adding"
              name="adding"
              placeholder="$0"
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
