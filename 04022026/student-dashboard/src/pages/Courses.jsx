export default function Courses() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>My Courses</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {["DBMS", "OS", "CN", "React"].map((course) => (
          <div
            key={course}
            style={{
              padding: "20px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #facc15, #f97316)",
              color: "#111",
              fontWeight: "600",
            }}
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
}
