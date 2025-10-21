"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../globals.css";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import projectsData from "../../../public/data/file.json";

export default function DisplayProject({ params }) {
  const [isDark, setIsDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projectsData.projects.find(
    (p) => p.id.toString() === params.id
  );
  if (!project) return <div>Projektet hittades inte.</div>;

  // Lyssna på systemets färgtema
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setIsDark(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Filtrera bilder om det är logoprojekt
  const imagesToShow =
    project.id === "media-tech-logo"
      ? project.images.filter((img) =>
          isDark ? img.theme === "dark" : img.theme === "light"
        )
      : project.images;

  return (
    <div>
      <Header></Header>
      <section style={styles.container}>
        {/* Rubrik */}

        <div className="heading_grid">
          <div style={styles.headingColumn}>
            <h1>{project.heading}</h1>
            <h3>{project.subheading}</h3>
          </div>

          <div style={styles.bullets}>
            <ul>
              {project.bullets.map((bullet, index) => (
                <li className="mainli" key={index}>
                  {" "}
                  • {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bilder */}
        <div style={styles.imageGrid}>
          {imagesToShow.map((image, index) => (
            <div key={index} style={styles.imageContainer}>
              <Image
                src={image.image || "/default-image.jpg"}
                alt={image.imcap || "Project Image"}
                width="500"
                height="300"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(image)}
              />
              {image.imcap && <p style={styles.imcap}>{image.imcap}</p>}
            </div>
          ))}
        </div>

        {/* Textsektioner */}
        <div>
          {project.sections.map((section, index) => (
            <div key={index} className="text_grid">
              <div style={styles.headingColumn}>
                <h2>{section.title}</h2>
              </div>
              <div style={styles.textSection}>
                <p>{section.sectionOne}</p>

                {section.subsections?.map((sub, subIndex) => (
                  <div key={subIndex}>
                    <h3>{sub.title}</h3>
                    <p>{sub.sectionOne}</p>
                    {sub.subSteps && (
                      <ul>
                        {sub.subSteps.map((step, stepIndex) => (
                          <li key={stepIndex}>• {step}</li>
                        ))}
                      </ul>
                    )}
                    <p>{sub.sectionTwo}</p>
                  </div>
                ))}

                {section.steps && (
                  <ul>
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>• {step}</li>
                    ))}
                  </ul>
                )}
                <p>{section.sectionTwo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal för förstoring */}
        {selectedImage && (
          <div
            style={styles.modalOverlay}
            onClick={() => setSelectedImage(null)}
          >
            <div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.imcap || "Enlarged Project Image"}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
              {selectedImage.imcap && (
                <p style={styles.imcap}>{selectedImage.imcap}</p>
              )}
              <button
                style={styles.closeButton}
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer></Footer>
    </div>
  );
}

const styles = {
  container: {
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "3rem",
    textAlign: "left",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  headingRow: {
    flex: "1",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    animationDelay: "2s",
  },
  headingColumn: {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  },
  bullets: {
    flex: "1",
    minWidth: "200px",
    display: "flex",
    justifyContent: "flex-end", // flyttar innehållet till höger
    alignItems: "flex-start",
  },

  imageGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",

    animation: "mymove 5s infinite",
    animationDelay: "20s",
  },

  imageContainer: {
    flex: "1 1 500px",
    padding: "4rem",
    backgroundColor: "var(--background-third)",
    borderRadius: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
  },
  imcap: {
    marginTop: "0.5rem",
    fontStyle: "italic",
  },
  titleSection: {
    flex: "1",
    minWidth: "250px",
    textAlign: "left",
  },
  textSection: {
    flex: "1",
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    background: "white",
    padding: "1rem",
    borderRadius: "8px",
    position: "relative",
    maxWidth: "800px",
    width: "100%",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "white",
    border: "none",
    borderRadius: "50%",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
};
