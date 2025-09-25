'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../globals.css';

export default function Projects() {
  const [data, setData] = useState([]);
  const sectionsRefs = useRef([]);
  const [isDark, setIsDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Hämta JSON-data
  useEffect(() => {
    fetch('/data/file.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((json) => setData(json.projects))
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  // Lyssna på systemets färgtema
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setIsDark(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRefs.current.includes(el)) {
      sectionsRefs.current.push(el);
    }
  };

  const scrollToSection = (index) => {
    sectionsRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={styles.container}>
      <div style={styles.heading}>
        <h1>My work</h1>
        <p>
          Learn more about where I am today and how I got here. Check out some of my small projects
          or my university thesis – and stay tuned, as more projects will be added soon!
        </p>
      </div>

      {/* Knappar överst */}
      <div style={styles.grid}>
        {data.map((project, index) => (
          <button
            key={project.id || index}
            onClick={() => scrollToSection(index)}
            style={styles.card}
          >
            {project.what}
          </button>
        ))}
      </div>
      <br />

      {/* Projektens innehåll */}
      <div style={styles.projects}>
        {data.map((project, index) => {
          // Filtrera endast för logoprojektet
          const imagesToShow =
            project.id === 'media-tech-logo'
              ? project.images.filter((img) =>
                  isDark ? img.theme === 'dark' : img.theme === 'light'
                )
              : project.images;

          return (
            <div key={index} ref={addToRefs} style={styles.projectContainer}>
              <h2>{project.heading}</h2>
              <h5>{project.subheading}</h5>
              <br />
              <div className="project_grid">
                <div style={styles.imageColumn}>
                  {imagesToShow.map((image, secIndex) => (
                    <div key={secIndex} style={styles.imageContainer}>
                      <Image
                        src={image.image || '/default-image.jpg'}
                        alt={image.imcap || 'Project Image'}
                        width={500}
                        height={300}
                        onClick={() => setSelectedImage(image)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  ))}
                </div>

                <div style={styles.textColumn}>
                  {project.sections.map((section, secIndex) => (
                    <div key={secIndex} style={styles.step}>
                      <h3>{section.title}</h3>
                      <p>{section.sectionOne}</p>

                      {section.subsections &&
                        section.subsections.map((sub, subIndex) => (
                          <div key={subIndex} style={styles.step}>
                            <h4>{sub.title}</h4>
                            <p>{sub.sectionOne}</p>
                            {section.steps && (
                              <ul>
                                {section.subSteps.map((step, stepIndex) => (
                                  <li key={stepIndex} style={styles.step}>
                                    {'• ' + step}
                                  </li>
                                ))}
                              </ul>
                            )}
                            <p>{sub.sectionTwo}</p>
                          </div>
                        ))}

                      {section.steps && (
                        <ul>
                          {section.steps.map((step, stepIndex) => (
                            <li key={stepIndex} style={styles.step}>
                              {'• ' + step}
                            </li>
                          ))}
                        </ul>
                      )}
                      <p>{section.sectionTwo}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Popup-modal för förstoring av bild */}
      {selectedImage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.image}
              alt={selectedImage.imcap || 'Enlarged Project Image'}
              width={600}
              height={100}
              style={{
                objectFit: 'contain',
                width: '100%',
                height: 'auto',
                maxHeight: '80vh'
              }}
            />
            {selectedImage.imcap && <p style={styles.imcap}>{selectedImage.imcap}</p>}

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
  );
}

const styles = {
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '3rem',
    textAlign: 'left',
    maxWidth: '1800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  imageColumn: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  textColumn: { flex: '2' },
  projectContainer: {
    marginTop: '4rem',
    marginBottom: '1rem'
  },
  imageContainer: {
    paddingBottom: '1rem',
    paddingTop: '2rem',
    flexShrink: 0,
    maxWidth: '100%',
    height: 'auto'
  },
  step: { marginTop: '4px' },
  heading: { marginBottom: '1rem', color: 'white' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 150px)',
    gap: '1rem'
  },
  card: {
    borderRadius: '8px',
    padding: '8px',
    backgroundColor: 'var(--background-third)',
    color: 'var(--foreground)',
    cursor: 'pointer'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    position: 'relative',
    padding: '1rem',
    background: 'var(--background)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px'
  },
  imcap: {
    textAlign: 'left',
    paddingTop: '1rem',
    maxWidth: '100%',
    wordWrap: 'break-word'
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'white',
    borderRadius: '24px',
    color: '#131313',
    padding: '4px 10px',
    fontSize: '14px',
    cursor: 'pointer'
  }
};
