import Image from "next/image";

export default function TopExpenses() {
  return (
    <section className="flex flex-col h-full">
      <h2 className="text-5xl font-bold">Balance</h2>
      <div className="flex gap-32 items-center">
        <h3 className="text-8xl mt-12">
          <span className="text-[#CCFF00]">$</span>7,400
        </h3>
        <Image
          src={"/Banknotes.svg"}
          alt="Money icon"
          width={220}
          height={220}
        />
      </div>
    </section>
  );
}
