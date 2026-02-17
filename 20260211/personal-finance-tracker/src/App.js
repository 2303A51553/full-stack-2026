import Dashboard from "./components/Dashboard";
import Expenses from "./components/Expenses";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>
      <Dashboard income={50000} expenses={22000} />
      <Expenses />
    </div>
  );
}

export default App;
