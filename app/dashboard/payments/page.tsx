import { generateData, User } from "@/lib/utils/generateData";
import { Pagination } from "@nextui-org/pagination";
import clsx from "clsx";

const PaymentsPage = () => {
  const users: User[] = generateData(15); // Genera 10 registros de ejemplo

  return (
    <div className="bg-[#0A0A0A] rounded-lg col-span-2 px-6 h-full m-5">
      <div className="flex justify-between py-6">
        <h2 className="text-3xl font-bold">Transactions</h2>
        <button className="border border-white px-4 rounded-lg hover:border-[#CCFF00]">
          + Create payment
        </button>
      </div>
      <table className="min-w-full text-left  mb-[26px] border-b border-white">
        <thead className="border border-white">
          <tr>
            <th className="py-3 px-4">Id</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Amount</th>
            <th className="py-3 px-4">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 text-[#9ca3af]">#{user.id}</td>
              <div className="py-2">
                <td
                  className={clsx("rounded-lg flex w-fit px-3 font-medium", {
                    "bg-[#c4f9e4]  text-[#28895e]": user.status === "Paid",
                    "bg-[#dfd3ff] text-[#7d62ca]": user.status === "Unpaid",
                  })}
                >
                  {user.status}
                </td>
              </div>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">$ {user.amount}</td>
              <td className="py-2 px-4">{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <Pagination
          total={5}
          initialPage={1}
          classNames={{ cursor: "bg-[#CCFF00]" }}
          showControls
        />
      </div>
    </div>
  );
};

export default PaymentsPage;
