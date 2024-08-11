export default function TotalBalance() {
  return (
    <section className="w-64 bg-[#0A0A0A] h-fit p-5 rounded-lg">
      <div>
        <h2>Total Balance</h2>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold">$7400</span>
        <span className="text-sm text-green-500">+5.4% last month</span>
      </div>
    </section>
  );
}
