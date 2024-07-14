export default function SideNav() {
  return (
    <nav className="w-64 h-full border-r-2">
      <header className="flex justify-center items-center gap-2 py-10">
        <img className="rounded-lg" src="Logo-xs.png" alt="Company logo" />
        <span className=" text-3xl font-bold">GTracking</span>
      </header>
      <ul className="flex flex-col gap-2 text-gray-700 px-5 text-lg">
        <li className="flex gap-2 py-2 px-4 hover:bg-gray-200 cursor-pointer hover:rounded-lg">
          <img src="Dashboard.svg" alt="" width={25} />
          Dashboard
        </li>
        <li className="flex gap-2 py-2 px-4 hover:bg-gray-200 cursor-pointer hover:rounded-lg">
          <img src="Expenses.svg" alt="" width={25} />
          Expenses
        </li>
        <li className="flex gap-2 py-2 px-4 hover:bg-gray-200 cursor-pointer hover:rounded-lg">
          <img src="Report.svg" alt="" width={25} />
          Reports
        </li>
      </ul>
    </nav>
  );
}
