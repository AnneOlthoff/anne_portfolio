"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../../globals.css";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import projectsData from "../../../public/data/file.json";

import AOS from "aos";
import "aos/dist/aos.css";

export default function DisplayProject({ params }) {
  const [isDark, setIsDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projectsData.projects.find(
    (p) => p.id.toString() === params.id
  );
  if (!project) return <div>Projektet hittades inte.</div>;

  // Lyssna på systemets färgtema
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setIsDark(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Filtrera bilder om det är logoprojekt
  const imagesToShow =
    project.id === "education"
      ? project.images.filter((img) =>
          isDark ? img.theme === "dark" : img.theme === "light"
        )
      : project.images;

  return (
    <section
      style={styles.container}
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {/* Rubrik */}

      <div className="heading_grid" data-aos="fade-up">
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
          <div
            key={index}
            style={styles.imageContainer}
            data-aos="fade-up"
            data-aos-duration="1800"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.image || "/default-image.jpg"}
              alt={image.imcap || "Project Image"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "40rem", height: "auto" }}
            />
            {image.imcap && <p style={styles.imcap}>{image.imcap}</p>}
          </div>
        ))}
      </div>

      {/* Textsektioner */}
      <div>
        {project.sections.map((section, index) => (
          <div key={index} className="text_grid" data-aos="fade-up">
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

      {/* Modal för förstoring 
        
            !!!---------------------------------------TO DO----------------------------------!!! 
        
      {selectedImage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.image || "/default-image.jpg"}
              alt={selectedImage.imcap || "Enlarged Project Image"}
              width="500"
              height="300"
              style={{
                width: "100%",
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
      )}*/}
    </section>
  );
}

const styles = {
  container: {
    display: "flex", // aktiverar flexbox
    alignItems: "center", // centrerar vertikalt
    flexDirection: "column",
    paddingBottom: "8rem",
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
    textAlign: "center",
    justifyContent: "center",
    width: "98vw",
    marginLeft: "calc(-10%)",
    marginRight: "calc(-10%)",
  },

  imageContainer: {
    flex: "1 1 600px",
    padding: "10rem 2rem",
    backgroundColor: "var(--background-third)",
    cursor: "pointer",
    borderWidth: "1px",
    borderColor: "var(--divider-color)  ",
    display: "flex", // aktiverar flexbox
    alignItems: "center", // centrerar horisontellt
    justifyContent: "center", //centrerar vertikalt
    flexDirection: "column",
  },
  imcap: {
    marginTop: "1rem",
    fontStyle: "italic",
    maxWidth: "34rem",
    width: "100%",
    heit: "auto",
    objectFit: "cover",
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
