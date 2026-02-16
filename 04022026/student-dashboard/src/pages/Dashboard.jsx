export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Dashboard Overview</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={card("#22c55e")}>
          <h3>Attendance</h3>
          <p>92%</p>
        </div>

        <div style={card("#3b82f6")}>
          <h3>CGPA</h3>
          <p>8.4</p>
        </div>

        <div style={card("#f97316")}>
          <h3>Backlogs</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

function card(color) {
  return {
    flex: 1,
    padding: "20px",
    borderRadius: "16px",
    color: "white",
    background: `linear-gradient(135deg, ${color}, #000)`,
  };
}
