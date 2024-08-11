export default function MonthlyExpenses() {
  return (
    <section className="w-64 bg-[#0A0A0A] h-fit p-5 rounded-lg">
      <div>
        <h2>Monthly Expenses</h2>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold">$10,400</span>
        <span className="text-sm text-red-500">+10% last month</span>
      </div>
    </section>
  );
}
