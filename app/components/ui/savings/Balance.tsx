import Image from "next/image";

interface BalanceProps {
  amount: number;
}

const Balance: React.FC<BalanceProps> = ({ amount }) => {
  return (
    <section className="flex items-center justify-between w-full">
      <h3 className="text-8xl">
        <span className="text-[#CCFF00]">$</span>
        {amount}
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
};

export default Balance;
