"use client";

import { useState, useEffect } from "react";

const SavingCalc = () => {
  const [amountToSave, setAmountToSave] = useState("");
  const [months, setMonths] = useState("");
  const [monthySaving, setMonthySaving] = useState(0);

  useEffect(() => {
    const calculateSaving = () => {
      const amount = parseFloat(amountToSave);
      const numberOfMonths = parseInt(months);

      if (!isNaN(amount) && !isNaN(numberOfMonths) && numberOfMonths > 0) {
        const saving = Math.round(amount / numberOfMonths);
        setMonthySaving(saving);
      } else {
        setMonthySaving(0);
      }
    };

    calculateSaving();
  }, [amountToSave, months]);

  return (
    <div className="bg-[#0A0A0A] rounded-lg flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Monthly installment calculator</h3>
      <label className="w-fit inline-flex gap-3 mt-3">
        <input
          aria-label="Amount to save"
          className="p-2 rounded-lg focus:outline-[#CCFF00]"
          type="number"
          value={amountToSave}
          onChange={(e) => setAmountToSave(e.target.value)}
          placeholder="$0"
        />
        <input
          aria-label="Number of months"
          className="p-2 rounded-lg focus:outline-[#CCFF00]"
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          placeholder="Number of months"
        />
      </label>
      <span className="mt-3 font-medium">
        Necessary savings: ${monthySaving}
      </span>
    </div>
  );
};

export default SavingCalc;
