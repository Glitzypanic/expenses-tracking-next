const NewGoal = () => {
  return (
    <div className="w-[800px] h-fit bg-[#0A0A0A] rounded-lg flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Add new goal</h3>
      <div>
        <label className="w-fit inline-flex gap-3 mt-3">
          <input
            aria-label="Name"
            type="text"
            className="p-2 rounded-lg focus:outline-[#CCFF00]"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            aria-label="Goal mount"
            type="text"
            className="p-2 rounded-lg focus:outline-[#CCFF00]"
            name=""
            id=""
            placeholder="Goal mount"
          />
          <input
            aria-label="Actual mount"
            type="text"
            className="p-2 rounded-lg focus:outline-[#CCFF00]"
            name=""
            id=""
            placeholder="Actual mount"
          />
        </label>
        <button
          aria-label="Add"
          className="bg-white text-black hover:bg-[#CCFF00] w-fit px-10 py-2 ml-5 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewGoal;
