export default function PayoutsCards({ payouts }) {
  return (
    <div className="space-y-3 text-sm">
      {payouts.map((p, i) => (
        <div key={i} className="border rounded p-3 space-y-1">
          <p>
            <strong>Дата:</strong> {p.date}
          </p>
          <p>
            <strong>Сумма:</strong> {p.sum}
          </p>
          <p>
            <strong>Запрос:</strong> {p.request}
          </p>
          <p>
            <strong>Куда перевести:</strong> {p.to}
          </p>
          <p>
            <strong>Статус:</strong>{" "}
            <span className="px-2 py-1 rounded bg-green-200">{p.status}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
