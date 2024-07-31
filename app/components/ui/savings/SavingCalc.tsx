const SavingCalc = () => {
  return (
    <div className="w-full h-fit bg-[#0A0A0A] rounded-lg flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Calculate your savings</h3>
      <label className="w-fit inline-flex gap-3 mt-3">
        <input
          className="p-2 rounded-lg focus:outline-[#CCFF00]"
          type="text"
          placeholder="Amount to save"
        />
        <input
          className="p-2 rounded-lg focus:outline-[#CCFF00]"
          type="text"
          placeholder="Number of months"
        />
      </label>
      <span className="mt-3 font-medium">Saving necessary: $0</span>
    </div>
  );
};

export default SavingCalc;
