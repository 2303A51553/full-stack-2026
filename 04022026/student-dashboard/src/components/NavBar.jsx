import { NavLink } from "react-router-dom";

export default function NavBar() {
  const linkStyle = ({ isActive }) => ({
    color: "white",
    padding: "10px 18px",
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "600",
    background: isActive
      ? "linear-gradient(135deg, #22c55e, #16a34a)"
      : "transparent",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 30px",
        background: "linear-gradient(135deg, #2563eb, #9333ea)",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>🎓 Student Portal</h2>

      <div style={{ display: "flex", gap: "12px" }}>
        <NavLink to="/" style={linkStyle}>Dashboard</NavLink>
        <NavLink to="/courses" style={linkStyle}>Courses</NavLink>
        <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
      </div>
    </div>
  );
}
