"use client";

import React, { useState } from "react";
import Link from "next/link";


 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40">
            <circle cx="50" cy="50" r="40" fill="blue" />
          </svg>
        </Link>
      </div>
      <button
        style={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div style={styles.links(isOpen)}>
        <Link href="/" style={styles.link}>Hem</Link>
        <Link href="/about" style={styles.link}>Om oss</Link>
        <Link href="/contact" style={styles.link}>Kontakt</Link>
      </div>
    </nav>
  );

}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8f9fa",
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  toggle: {
    display: "none",
    fontSize: "24px",
    background: "red",
    border: "none",
    cursor: "pointer",
  },
  links: (isOpen, boolean) => ({
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    gap: "10px",
    position: "absolute",
    top: "50px",
    right: "20px",
    background: "#f8f9fa",
    padding: "10px 20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
  }),
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    transition: "color 0.2s ease",
  },
};
