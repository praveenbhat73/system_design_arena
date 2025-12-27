"use client";

import { useState } from "react";
import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  const questions = [
    { id: "1", title: "Design Uber", desc: "Real-time rides, GPS, pricing, scale" },
    { id: "2", title: "Design Twitter", desc: "Feeds, timelines, fanout, scale" },
    { id: "3", title: "Design Netflix", desc: "Video streaming, CDN, recommendations" },
    { id: "4", title: "Design WhatsApp", desc: "Messaging, WebSockets, reliability" },
    { id: "5", title: "Design Spotify", desc: "Music streaming, caching, ML" },
    { id: "6", title: "Design Airbnb", desc: "Search, bookings, payments" },
  ];

  return (
    <main className="container">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>System Design Arena</h1>
        <p>
          Practice real-world system design questions.  
          Design, scale, and break systems like a senior engineer.
        </p>
      </section>

      {/* QUESTIONS GRID */}
      <section className="grid">
        {questions.map((q) => (
          <Link key={q.id} href={`/arena/${q.id}`} className="card">
            <h3>{q.title}</h3>
            <p>{q.desc}</p>
            <span>Start Designing →</span>
          </Link>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 System Design Arena • Built with Next.js</p>
      </footer>
    </main>
  );
}
