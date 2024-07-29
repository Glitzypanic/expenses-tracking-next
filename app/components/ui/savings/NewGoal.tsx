const NewGoal = () => {
  return (
    <div className="w-full h-32 flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Add new saving goal</h3>
      <div>
        <label className="w-fit inline-flex gap-3 mt-3">
          <input
            type="text"
            className="p-2 rounded-lg"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            type="text"
            className="p-2 rounded-lg"
            name=""
            id=""
            placeholder="Goal mount"
          />
          <input
            type="text"
            className="p-2 rounded-lg"
            name=""
            id=""
            placeholder="Actual mount"
          />
        </label>
        <button>Add</button>
      </div>
    </div>
  );
};

export default NewGoal;
