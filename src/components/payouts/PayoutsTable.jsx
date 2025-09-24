export default function PayoutsTable({ payouts }) {
  return (
    <table className="w-full border text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-left">Дата</th>
          <th className="p-2 text-left">Сумма</th>
          <th className="p-2 text-left">Запрос</th>
          <th className="p-2 text-left">Куда перевести</th>
          <th className="p-2 text-left">Статус</th>
        </tr>
      </thead>
      <tbody>
        {payouts.map((p, i) => (
          <tr key={i} className="border-t">
            <td className="p-2">{p.date}</td>
            <td className="p-2">{p.sum}</td>
            <td className="p-2">{p.request}</td>
            <td className="p-2">{p.to}</td>
            <td className="p-2">
              <span className="px-2 py-1 rounded bg-green-200">{p.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
