"use client";

import { act, useState } from "react";

const AddFunds = () => {
  const [amount, setAmount] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleSelectedChange = (e: any) => {
    setSelectValue(e.target.value);
    setError("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (amount === "") {
      setError("Amount is required");
    } else if (selectValue === "") {
      setError("Select method is required");
    } else {
      alert("Submitted");
      console.log("Submitted");
    }
  };

  return (
    <div className="w-[800px] h-fit bg-[#0A0A0A] rounded-lg flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Add funds</h3>
      <div>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="flex gap-3">
            <input
              aria-label="Amount"
              type="number"
              className="p-2 rounded-lg focus:outline-[#CCFF00]"
              value={amount}
              onChange={handleInputChange}
              placeholder="$0"
            />
            <select
              aria-label="Payment method"
              value={selectValue}
              onChange={handleSelectedChange}
              className="pr-7 pl-1 rounded-lg focus:outline-[#CCFF00]"
            >
              <option value="" disabled>
                Select method
              </option>
              <option value="1">Card</option>
              <option value="2">Bank</option>
            </select>
            <button
              type="submit"
              aria-label="Add funds"
              className="bg-white text-black hover:bg-[#CCFF00] w-fit px-10 py-2 rounded-lg"
            >
              Add
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddFunds;
