export default function CardOverview({
  title,
  value,
  percentage,
  description,
}) {
  return (
    <article>
      <div className="bg-[#0A0A0A] w-[310px] h-[181px] rounded-lg p-5 justify-between flex flex-col gap-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-center gap-5">
          <span className="text-5xl">
            <span className="text-[#CCFF00]">$</span>
            {value}
          </span>
          <div className="text-[#9ca3af] text-xs font-semibold">
            <span className="">
              <span className="">+</span>
              {percentage}
            </span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
