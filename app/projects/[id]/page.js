"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import "../../globals.css";
import projectsData from "../../../public/data/file.json";
import ImLoad from "../../components/imLoad.js";

import AOS from "aos";
import "aos/dist/aos.css";

export default function DisplayProject() {
  const [isDark, setIsDark] = useState(false);
  
  // const [selectedImage, setSelectedImage] = useState(null);
  const params = useParams();
  const project = projectsData.projects.find(
    (p) => p.id.toString() === params.id
  );

  // Lyssna på systemets färgtema
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setIsDark(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!project) return <div>Projektet hittades inte.</div>;

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
            <ImLoad
             src={image.image}
             alt={image.imcap}
            />
           
            
          </div>
        ))}
      </div>

      {/* Textsektioner */}
      <div>
        {project.sections.map((section, index) => (
          <div key={index} style={{ marginTop: "2rem" }}>
            {/* Bilder inuti sektioner */}
            {section.sectionImages && section.sectionImages.length > 0 && (
              <div className= "subImageGrid">
                {section.sectionImages.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    style={styles.subImageContainer}
                    data-aos="fade-up"
                    data-aos-duration="1800"
                    onClick={() => setSelectedImage(image)}
                  >
                    <ImLoad
                      src={image.image}
                      alt={image.imcap}
                    />
                  </div>
                ))}
              </div>
            )}
            <div key={index} className="text_grid" data-aos="fade-up">
              <div style={styles.headingColumn}>
                <h2>{section.title}</h2>
                {section.steps && (
                  <ul>
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>• {step}</li>
                    ))}
                  </ul>
                )}
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

                <p>{section.sectionTwo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* More info about a procejt */}
      {project.link && (
        <div
          style={styles.linkGrid}
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <a href={project.link.link} target="_blank" style={styles.linkButton}>
            {project.link.linkcap}{" "}
          </a>
        </div>
      )}

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
    width: "98vw",
    marginLeft: "calc(-10%)",
    marginRight: "calc(-10%)",
  },

  imageContainer: {
    flex: "1 1 600px",
    padding: "10rem 2rem",
    backgroundColor: "var(--background-third)",
    cursor: "pointer",
    borderColor: "var(--divider-color)  ",
    display: "flex", // aktiverar flexbox
    alignItems: "center", // centrerar horisontellt
    justifyContent: "center", //centrerar vertikalt
    flexDirection: "column",
  },

  

  subImageContainer: {
    flex: "1 1 600px",
    padding: "4rem 4rem 2rem 4rem",
    backgroundColor: "var(--background-third)",
    cursor: "pointer",
    borderColor: "var(--divider-color)  ",
    display: "flex", // aktiverar flexbox
    alignItems: "center", // centrerar horisontellt
    justifyContent: "center", //centrerar vertikalt
    flexDirection: "column",
    width: "100%"
  },
  imcap: {
    marginTop: "1rem",
    fontStyle: "italic",
    maxWidth: "34rem",
    width: "100%",
    heit: "auto",
    objectFit: "cover",
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

  linkGrid: {
    width: "100%",
    display: "flex",
    paddingTop: "4rem",
    height: "auto",
    justifyContent: "right",
    alignItems: "end",
  },
  linkButton: {
    padding: "0.6rem 1.2rem",
    borderRadius: "2rem",
    border: "1px solid var(--heading)",
    color: "var(--heading)",
    textDecoration: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
  },
};
