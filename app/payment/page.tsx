import PlanCard from "../components/ui/common/PlanCard";

export default function Payment() {
  return (
    <main className="flex flex-col items-center pt-10 h-screen bg-[#0A0A0A] text-white">
      <h1 className="text-7xl font-bold">
        <span className="text-[#CCFF00]">Pro</span> Access
      </h1>
      <p className="text-center text-lg mt-5">
        Get more from <span className="text-[#CCFF00] font-bold">GT</span>
        racking with our flexible subscription plans. <br /> Choose the plan
        that best suits your needs and get acces to all features.
      </p>
      <section className="flex gap-10 mt-10">
        <div className="flex space-x-4">
          <PlanCard
            planType="Pro"
            price={34}
            features={[
              "Enhanced Analytics",
              "Custom Domain",
              "E-commerce Integration",
              "Priority Support",
              "Advanced Security",
            ]}
          />
          <PlanCard
            planType="Business"
            price={56}
            features={[
              "Advanced Marketing Tools",
              "Customizable Templates",
              "Multi-user Access",
              "Third-party Integrations",
              "24/7 Priority Support",
            ]}
            isBestOffer
          />
        </div>
      </section>
    </main>
  );
}
