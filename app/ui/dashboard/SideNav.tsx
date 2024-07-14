export default function SideNav() {
  return (
    <nav className="w-64 h-full border-r-2">
      <header className="flex justify-center items-center gap-2 py-10">
        <img className="rounded-lg" src="Logo-xs.png" alt="Company logo" />
        <span className=" text-3xl font-bold">GTracking</span>
      </header>
      <ul className="text-gray-700 px-5 text-lg">
        <li className="py-2 px-4 hover:bg-gray-200">Dashboard</li>
        <li className="py-2 px-4 hover:bg-gray-200">Transactions</li>
        <li className="py-2 px-4 hover:bg-gray-200">Categories</li>
      </ul>
    </nav>
  );
}
