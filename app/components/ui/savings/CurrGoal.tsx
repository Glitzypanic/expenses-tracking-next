const CurrGoal = () => {
  return (
    <div className="w-full h-32 flex flex-col justify-center p-5">
      <h3 className="font-semibold text-2xl">Saving goals calculator</h3>
      <label className="w-fit inline-flex gap-3 mt-3">
        <input
          type="text"
          className="p-2 rounded-lg"
          placeholder="Saving Goal"
        />
        <input
          type="text"
          className="p-2 rounded-lg"
          placeholder="Number of Month"
        />
      </label>
      <p className="mt-2 font-medium">Month savings necessary: $0</p>
    </div>
  );
};

export default CurrGoal;
