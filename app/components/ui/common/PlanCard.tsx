import React from "react";

type PlanCardProps = {
  planType: string;
  planDescription: string;
  price: number;
  features: string[];
  isBestOffer?: boolean;
  isMonthly?: boolean;
  isEnterprise?: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({
  planType,
  planDescription,
  price,
  features,
  isBestOffer,
  isMonthly,
  isEnterprise,
}) => {
  return (
    <div
      className={`flex flex-col justify-between p-6 rounded-lg ${
        isBestOffer
          ? "bg-[#0A0A0A] border-2 border-[#CCFF00]"
          : "bg-[#0A0A0A] border-2 border-white"
      }`}
    >
      <div>
        <div className="flex flex-col justify-between mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{planType}</h2>
            {isBestOffer && (
              <span className="px-2 py-1 text-xs font-medium text-[#0A0A0A] bg-[#CCFF00] rounded-full">
                Popular
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 w-[200px] mb-5">
            {planDescription}
          </p>
        </div>
        <p className="text-4xl font-bold">
          ${price}
          {isMonthly && (
            <span className="text-gray-400 text-sm"> / Monthly</span>
          )}
          {isEnterprise && (
            <span className="text-[#CCFF00] text-md"> Lets Talk</span>
          )}
        </p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-6 px-4 py-2 font-semibold rounded-lg ${
          isBestOffer ? "bg-[#CCFF00] text-[#0A0A0A]" : "bg-black text-white"
        } hover:opacity-90`}
        aria-label="button"
      >
        Get Started
      </button>
    </div>
  );
};

export default PlanCard;
