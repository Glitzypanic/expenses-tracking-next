import Image from "next/image";

export default function TopExpenses() {
  return (
    <section className="flex items-center justify-between w-full">
      <h3 className="text-8xl">
        <span className="text-[#CCFF00]">$</span>7,400
      </h3>
      <Image
        src={"/assets/svgs/Banknotes.svg"}
        alt="Money icon"
        width={220}
        height={220}
        className="border-2 border-red-500 rounded-lg"
      />
    </section>
  );
}
