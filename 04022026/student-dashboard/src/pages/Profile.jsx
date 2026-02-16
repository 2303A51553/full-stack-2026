export default function Profile() {
  return (
    <div style={{ padding: "30px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "350px",
          padding: "25px",
          borderRadius: "18px",
          background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
          color: "white",
        }}
      >
        <h2>Student Profile</h2>
        <p><b>Name:</b> Student</p>
        <p><b>Branch:</b> CSE</p>
        <p><b>Year:</b> 3rd Year</p>
        <p><b>College:</b> ABC Engineering</p>
      </div>
    </div>
  );
}
