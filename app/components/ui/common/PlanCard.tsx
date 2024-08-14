import React from "react";

type PlanCardProps = {
  planType: string;
  price: number;
  features: string[];
  isBestOffer?: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({
  planType,
  price,
  features,
  isBestOffer,
}) => {
  return (
    <div
      className={`flex flex-col justify-between p-6 rounded-lg shadow-lg text-[#0A0A0A] ${
        isBestOffer ? "bg-blue-100 border-2 border-blue-500" : "bg-white"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">{planType}</h2>
          {isBestOffer && (
            <span className="px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">
              Best offer
            </span>
          )}
        </div>
        <p className="text-4xl font-bold">${price}</p>
        <p className="text-sm text-gray-500">per month</p>
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
        className={`mt-6 px-4 py-2 text-white font-semibold rounded-lg ${
          isBestOffer ? "bg-blue-600" : "bg-black"
        } hover:opacity-90`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PlanCard;
