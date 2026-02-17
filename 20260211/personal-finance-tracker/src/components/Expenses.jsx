export default function Expenses() {
  const data = [
    { name: "Food", amount: 5000 },
    { name: "Rent", amount: 15000 },
    { name: "Transport", amount: 2000 },
  ];

  return (
    <div className="list">
      <h3>Expenses List</h3>
      {data.map((e, i) => (
        <p key={i}>
          {e.name} – ₹{e.amount}
        </p>
      ))}
    </div>
  );
}
