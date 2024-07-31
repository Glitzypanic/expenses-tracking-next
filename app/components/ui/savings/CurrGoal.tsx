import { GoalData } from "@/lib/utils/GoalData";

const CurrGoal = () => {
  return (
    <div className="w-full h-fit bg-[#0A0A0A] rounded-lg flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Add saving to current goal</h3>
      <label className="w-fit inline-flex gap-3 mt-3">
        <select
          aria-label="Select a goal"
          name="Select a goal"
          id=""
          className="px-5 rounded-lg focus:outline-[#CCFF00]"
        >
          {GoalData.map((item) => (
            <option key={item.key} value={item.key}>
              {item.label}
            </option>
          ))}
        </select>

        <input
          aria-label="Enter amount"
          type="text"
          className="p-2 rounded-lg focus:outline-[#CCFF00]"
          placeholder="Mount"
        />
        <button
          aria-label="button"
          className="bg-white text-black hover:bg-[#CCFF00] w-fit px-5 py-2 ml-5 rounded-lg"
        >
          Add mount
        </button>
      </label>
    </div>
  );
};

export default CurrGoal;
