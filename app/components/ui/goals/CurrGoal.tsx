interface Prop {
  selectedGoalTitle: string;
}

const CurrGoal: React.FC<Prop> = ({ selectedGoalTitle }) => {
  return (
    <div className="flex flex-col justify-center rounded-lg bg-[#0A0A0A] p-5">
      <h3 className="font-semibold text-2xl">Add saving to current goal</h3>
      <form className="w-fit inline-flex gap-3 mt-3">
        <select
          aria-label="Select a goal"
          name="Select a goal"
          id=""
          className="rounded-lg px-1 focus:outline-[#CCFF00]"
        >
          <option disabled>Select a goal</option>
          <option>{selectedGoalTitle}</option>
        </select>

        <input
          aria-label="Enter amount"
          type="number"
          className="rounded-lg p-2 focus:outline-[#CCFF00]"
          placeholder="$0"
        />
        <button
          aria-label="button"
          className="rounded-lg bg-white px-4 text-black hover:bg-[#CCFF00]"
        >
          Add mount
        </button>
      </form>
    </div>
  );
};

export default CurrGoal;
