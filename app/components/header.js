"use client";

import { useRouter } from "next/navigation";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  const handleScroll = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#my-work");
    if (targetElement) {
      // Scrolla till sektionen om vi är på startsidan
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigera till startsidan först

      router.push("/#my-work");
    }
  };

  return (
    <header style={styles.header}>
      
 
  <nav style={styles.navGroup}>
    <Link href="#my-work" onClick={handleScroll} scroll={false} style={styles.link}>My work</Link>
    <Link href="/about" style={styles.link}>About me</Link>
  </nav>

  <nav style={styles.navGroup}>
     <a href="/files/resume_anne_olthoff.pdf" target="_blank" style={styles.resumeLink}>Resume</a>

    <view style={styles.verticleLine}></view>
    <a href="https://github.com/AnneOlthoff" style={styles.iconLink}><Github size={18} /> </a>

    <a href="https://www.linkedin.com/in/anne-olthoff/" style={styles.iconLink}><Linkedin size={18} /></a>
   
  </nav>
</header>
  );
}
const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "end",
    gap: "1rem",
    alignItems: "center",
    padding: "1.5rem 2rem",
    backgroundColor: "var(--background-secondary)",
    borderBottom: "1px solid var(--divider-color)",
  },
  verticleLine:{
    borderLeft: "1px solid green",
    height:"2rem",
    color: "var(--divider-color)"
  },
  navGroup: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    color: "var(--heading)",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s ease",
  },
  iconLink: {
    color: "var(--heading-secondary)",
    opacity: 0.8,
    textDecoration: "none",
    transition: "opacity 0.3s ease",
  },
  resumeLink: {
    padding: "0.6rem 1.2rem",
    borderRadius: "2rem",
    border: "1px solid var(--heading)",
    color: "var(--heading)",
    textDecoration: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
  },
};
