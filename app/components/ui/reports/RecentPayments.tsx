import { generateData, User } from "@/app/lib/utils/generateData";
import clsx from "clsx";

export default function RecentPayments() {
  const users: User[] = generateData(5);
  return (
    <section className="mt-5 border-2">
      <div className="text-2xl font-bold">Recent Payments</div>
      <div>
        <table className="min-w-full text-left mt-7">
          <thead className="border-b-2 border-white">
            <th className="pl-3">Id</th>
            <th>Order</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 pl-3 text-[#9ca3af]">INV0{user.id}</td>
                <td>{user.order}</td>
                <td>{user.amount}</td>
                <td>{user.date}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
