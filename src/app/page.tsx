import Link from "next/link";

export default function HomePage() {
  const questions = [
    { id: "1", title: "Design Uber" },
    { id: "2", title: "Design Twitter" },
    { id: "3", title: "Design Netflix" },
    { id: "4", title: "Design WhatsApp" },
    { id: "5", title: "Design Spotify" },
    { id: "6", title: "Design Airbnb" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Hero Section */}
      <div className="hero">
        <h1>System Design Arena</h1>
        <p>
          Practice your system design skills in a fun, interactive way! Choose a question and start designing your own architecture.
        </p>
      </div>

      {/* Questions Section */}
      <h2 style={{ fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>
        Select a Question
      </h2>

      <div className="cards-container">
        {questions.map((q) => (
          <Link key={q.id} href={`/arena/${q.id}`}>
            <div className="card">
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{q.title}</h3>
              <p style={{ fontSize: "14px", color: "#94a3b8" }}>Click to open design playground</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer>
        &copy; 2025 System Design Arena. All rights reserved.
      </footer>
    </div>
  );
}
