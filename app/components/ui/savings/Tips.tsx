import Image from "next/image";

export default function Tips() {
  const tips = [
    "Pay yourself first: Set aside savings before spending on non-essentials.",
    "Track your expenses to identify areas where you can cut back.",
    "Set specific, achievable savings goals to stay motivated.",
    "Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings.",
    "Automate your savings to make it a habit.",
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  return (
    <div className="flex flex-col justify-center bg-[#7A306C] rounded-lg h-full w-full p-5">
      <Image
        src={"/Euro.svg"}
        alt="sdf"
        width={300}
        height={300}
        className="place-self-center"
      />
      <p className="text-white mt-5">
        <span className="font-bold">Savings Tip: </span>
        {randomTip}
      </p>
    </div>
  );
}
