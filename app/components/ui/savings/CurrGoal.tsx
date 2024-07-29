const CurrGoal = () => {
  return (
    <div className="w-full h-32 flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Add saving to current goal</h3>
      <label className="w-fit inline-flex gap-3 mt-3">
        <select name="Select goal" id="">
          <option value="0">Select goal</option>
          <option value="1">Goal 1</option>
          <option value="2">Goal 2</option>
          <option value="3">Goal 3</option>
        </select>
        <input type="text" className="p-2 rounded-lg" placeholder="Mount" />
        <button>Add mount</button>
      </label>
    </div>
  );
};

export default CurrGoal;
