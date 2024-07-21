import { generateData, User } from "@/lib/utils/generateData";
import clsx from "clsx";

const PaymentsPage = () => {
  const users: User[] = generateData(10); // Genera 10 registros de ejemplo

  return (
    <div className="bg-[#0A0A0A] rounded-lg col-span-2 p-5 h-full m-5">
      <h1>Lista de Usuarios</h1>
      <table className="min-w-full text-left mt-7 mb-[26px]">
        <thead className="border border-white">
          <tr>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Nombre</th>
            <th className="py-3 px-4">Edad</th>
            <th className="py-3 px-4">Ocupación</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.order}</td>
              <td className="py-2 px-4">{user.amount}</td>
              <div className="py-2">
                <td
                  className={clsx("rounded-lg flex w-fit px-3 font-medium", {
                    "bg-[#c4f9e4]  text-[#28895e]": user.payment === "Paid",
                    "bg-[#dfd3ff] text-[#7d62ca]": user.payment === "Unpaid",
                  })}
                >
                  {user.payment}
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsPage;
