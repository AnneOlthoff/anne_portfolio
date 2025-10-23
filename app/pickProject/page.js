"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../globals.css";

import Link from "next/link";

export default function Projects() {
  const [data, setData] = useState([]);
  const sectionsRefs = useRef([]);

  // Hämta JSON-data
  useEffect(() => {
    fetch("../data/file.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => setData(json.projects))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);


  return (
    <section style={styles.container} data-aos="fade-up">
      <div>
        <h1>My work</h1>
        <p>
          Learn more about where I am today and how I got here. Check out some
          of my small projects or my university thesis – and stay tuned, as more
          projects will be added soon!
        </p>
      </div>

      {/* Knappar överst */}
      <div className="projectGrid">
        {data.map((project, index) => (
          <Link key={index} href={`/projects/${project.id}`}>
            <div key={index} style={styles.projectContainer}>
              <div style={styles.imageWrapper}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3 / 2",
                    position: "relative",
                  }}
                >
                  <Image
                    src={project.prevImage || "/default-image.jpg"}
                    alt={project.what || "Project Image"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "50rem", height: "auto" }}
                     
                  />
                </div>

                <p style={styles.overlayText}>{project.what}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center", // centrerar vertikalt
    textAlign: "left",
    gap: "2rem",
    margin: "0 auto",
    flexDirection: "column",
  },

  projectContainer: {
    flex: "1 1 500px",
    backgroundColor: "var(--background-third)",
    cursor: "pointer",
    borderWidth: "1px",
    borderRadius: "1rem",
    borderColor: "var(--divider-color)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    minHeight: "200px",
  },
  imageWrapper: {
    width: "auto",
    height: "200px",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
  },

  overlayText: {
    position: "absolute",
    bottom: "1rem",
    left: "60%", // starta vid 2/3 av bildens bredd
    zIndex: 2,
    color: "var(--heading-secondary)",
   
    borderRadius: "0.1rem",
    fontWeight: "bold",
    textAlign: "left",
    maxWidth: "34%", // resten av utrymmet
    whiteSpace: "normal",
    wordWrap: "break-word",
    overflow: "hidden",
  },
};
