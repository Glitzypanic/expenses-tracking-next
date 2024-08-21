export default function CardOverview() {
  return (
    <article className="flex p-5 rounded-lg bg-[#0A0A0A] gap-10">
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold">Income</h3>
        <div className="flex items-center gap-10">
          <span className="text-5xl mt-5">
            <span className="text-[#CCFF00]">$</span>
            7,400
          </span>
          <div className="text-[#9ca3af] text-xs font-semibold">
            <span className="">
              <span className="">+ </span>
              5,4
            </span>
            <p>Last month</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold">Expense</h3>
        <div className="flex items-center gap-10">
          <span className="text-5xl mt-5">
            <span className="text-[#CCFF00]">$</span>
            300
          </span>
          <div className="text-[#9ca3af] text-xs font-semibold">
            <span className="">
              <span className="">- </span>
              5,4
            </span>
            <p>Last month</p>
          </div>
        </div>
      </div>
    </article>
  );
}
