import PlanCard from "@/app/components/ui/common/PlanCard";

export default function Page() {
  return (
    <main className="bg-[#0A0A0A] mt-5 p-5 rounded-lg w-[1250px]">
      <header className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <p className="text-center text-lg mt-5">
          Get more from GTracking with our flexible subscription plans. <br />
          Choose the plan that best suits your needs and get acces to all
          features.
        </p>
      </header>
      <section className="flex gap-5 mt-10 justify-center mb-10">
        <PlanCard
          planType="Basic"
          price={0}
          planDescription="Get started with the basic"
          features={[
            "Enhanced Analytics",
            "Custom Domain",
            "E-commerce Integration",
          ]}
        />
        <PlanCard
          planType="Pro"
          price={9.99}
          planDescription="Get started with the pro"
          features={[
            "Advanced Marketing Tools",
            "Customizable Templates",
            "Multi-user Access",
            "Third-party Integrations",
            "24/7 Priority Support",
          ]}
          isBestOffer={true}
          isMonthly={true}
        />
        <PlanCard
          planType="Enterprise"
          price={19.99}
          planDescription="Get started with the enterprise"
          features={[
            "Unlimited Storage",
            "Unlimited Transfer",
            "Unlimited Bandwidth",
          ]}
        />
      </section>
    </main>
  );
}
