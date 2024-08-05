import Image from "next/image";

export default function ProAccess() {
  return (
    <div className="flex flex-col p-2 bg-[#CCFF00] m-5 rounded-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold text-[#0A0A0A]">Get Pro Access</h1>
        <p className="text-[#0A0A0A] text-center text-sm">
          Unlock the full potential of GTracking with Pro Access
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <button className="inline-flex gap-2 bg-[#0A0A0A] text-white py-2 font-medium px-6 rounded-lg">
          <Image
            src={"/Sparkling.svg"}
            alt="Sparkling icon"
            width={20}
            height={20}
          />{" "}
          Get Pro Access
        </button>
      </div>
    </div>
  );
}
