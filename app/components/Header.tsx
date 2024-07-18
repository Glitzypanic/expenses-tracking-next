export default function Header() {
  return (
    <header className="flex justify-between items-center rounded-lg p-6 mx-5 my-4 bg-[#0A0A0A]">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <h2 className="text-[#9ca3af]">
          Hi Jose, here are your financial stats
        </h2>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="rounded-lg p-2 border-none bg-[#1A1A1A] placeholder:text-[#9ca3af] focus:outline outline-[#CCFF00]"
      />
    </header>
  );
}
