export default function Dashboard({ income, expenses }) {
  const balance = income - expenses;

  return (
    <div className="cards">
      <div className="card income">
        <h3>Income</h3>
        <h2>₹{income}</h2>
      </div>

      <div className="card expense">
        <h3>Expenses</h3>
        <h2>₹{expenses}</h2>
      </div>

      <div className="card balance">
        <h3>Balance</h3>
        <h2>₹{balance}</h2>
      </div>
    </div>
  );
}
