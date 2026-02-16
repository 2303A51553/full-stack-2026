import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/dashboard");
      if (!res.ok) throw new Error();
      const result = await res.json();
      setData(result);
    } catch {
      setError("Error loading data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const balance = data.totalIncome - data.totalExpenses;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Income: ₹{data.totalIncome.toLocaleString()}</p>
      <p>Total Expenses: ₹{data.totalExpenses.toLocaleString()}</p>
      <p>Balance: ₹{balance.toLocaleString()}</p>
      <button onClick={fetchData}>Refresh</button>
    </div>
  );
}

export default Dashboard;
