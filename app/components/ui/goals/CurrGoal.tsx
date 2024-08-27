import { goalData } from "@/app/lib/utils/GoalData";

const CurrGoal = () => {
  return (
    <div className="bg-[#0A0A0A] rounded-lg flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Add saving to current goal</h3>
      <form className="w-fit inline-flex gap-3 mt-3">
        <select
          aria-label="Select a goal"
          name="Select a goal"
          id=""
          className="px-1 rounded-lg focus:outline-[#CCFF00]"
        >
          <option disabled>Select a goal</option>
          {goalData.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <input
          aria-label="Enter amount"
          type="number"
          className="p-2 rounded-lg focus:outline-[#CCFF00]"
          placeholder="$0"
        />
        <button
          aria-label="button"
          className="bg-white text-black hover:bg-[#CCFF00] px-4 rounded-lg"
        >
          Add mount
        </button>
      </form>
    </div>
  );
};

export default CurrGoal;
