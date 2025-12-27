"use client";

import { useState } from "react";
import Link from "next/link";

const COMPONENTS = [
  "api",
  "database",
  "cache",
  "queue",
  "cdn",
  "auth",
  "websocket",
];

export default function ArenaClient({ id }: { id: string }) {
  const [selected, setSelected] = useState<string[]>([]);
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const toggleComponent = (c: string) => {
    if (selected.includes(c)) {
      setSelected(selected.filter((x) => x !== c)); // REMOVE
    } else {
      setSelected([...selected, c]); // ADD
    }
  };

  const testDesign = async () => {
    setLoading(true);
    setResult(null);

    const res = await fetch("http://localhost:4000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionId: id,
        userComponents: selected,
      }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="arena-container">
      {/* HEADER */}
      <div className="arena-header">
        <Link href="/" className="back-btn">
          ← Back
        </Link>

        <h1>System Design Arena</h1>
      </div>

      <p className="subtitle">
        Design Challenge: {id.toUpperCase()}
      </p>

      {/* PALETTE */}
      <div className="palette">
        {COMPONENTS.map((c) => {
          const active = selected.includes(c);
          return (
            <div
              key={c}
              className={`palette-item ${active ? "active" : ""}`}
              onClick={() => toggleComponent(c)}
            >
              {c.toUpperCase()}
            </div>
          );
        })}
      </div>

      {/* CANVAS */}
      <div className="canvas">
        {selected.length === 0 && (
          <span className="hint">
            Click components to add / remove them
          </span>
        )}

        {selected.map((c) => (
          <div
            key={c}
            className="canvas-node removable"
            onClick={() => toggleComponent(c)}
            title="Click to remove"
          >
            {c}
          </div>
        ))}
      </div>

      {/* TEST BUTTON */}
      <button
        className="test-btn"
        onClick={testDesign}
        disabled={loading || selected.length === 0}
      >
        {loading ? "Testing System..." : "🚀 Test System"}
      </button>

      {/* RESULT */}
      {result && (
        <div className="result">
          <h2>Result</h2>
          <p>
            Status: <b>{result.loadTest.systemStatus}</b>
          </p>
          <p>
            Score: <b>{result.score}/100</b>
          </p>
          <p>
            Latency: {result.loadTest.avgLatencyMs} ms
          </p>
          <p>
            Success Rate: {result.loadTest.successRate}
          </p>
        </div>
      )}
    </div>
  );
}
