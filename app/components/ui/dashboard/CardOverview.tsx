export default function CardOverview({
  title,
  value,
  percentage,
  description,
}: {
  title: string;
  value: string;
  percentage: string;
  description: string;
}) {
  return (
    <article>
      <div className="bg-[#0A0A0A] rounded-lg p-5 flex flex-col">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-center gap-10">
          <span className="text-5xl mt-5">
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
