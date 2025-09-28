export default function PayoutsCards({ payouts }) {
  return (
    <div className="space-y-3 text-sm">
      {payouts.map((p, i) => (
        <div key={i} className="border rounded p-3 space-y-1">
          <p>
            <strong>Date:</strong> {p.date}
          </p>
          <p>
            <strong>Sum:</strong> {p.sum}
          </p>
          <p>
            <strong>Order Details:</strong> {p.request}
          </p>
          <p>
            <strong>Country:</strong> {p.to}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="px-2 py-1 rounded bg-green-200">{p.status}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
