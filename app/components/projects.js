'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [data, setData] = useState([]);
  const sectionsRefs = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('/data/file.json') // Stig till filen i public-mappen
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((json) => setData(json.projects)) // Antag att "projects" är roten i JSON-strukturen
      .catch((error) => console.error('Error loading JSON:', error));
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
        <p>Learn more about where I am today and how I got here. Check out some of my small projects or my university thesis – and stay tuned, as more projects will be added soon!</p>
      </div>
      
      <div style={styles.grid}>
        {data.map((project, index) => (
          <button
            key={project.id}
            onClick={() => scrollToSection(index)}
            style={styles.card}
          >
            {project.what}
          </button>
        ))}
      </div>
      <br />

      <div style={styles.projects}>
        {data.map((project, index) => (
          <div key={index} ref={addToRefs} style={styles.projectContainer}>
            <h2>{project.heading}</h2>
            <h4>{project.subheading}</h4>
            <br />
            <div style={styles.project_grid}>
              <div style={styles.imageColumn}>
                {project.images.map((image, secIndex) => (
                  <div key={secIndex} style={styles.imageContainer}>
                    <Image
                      src={image.image || '/default-image.jpg'}
                      alt={image.title || 'Project Image'}
                      width={300}
                      height={300}
                      onClick={() => setSelectedImage(image.image)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                ))}
              </div>
              <div style={styles.textColumn}>
                {project.sections.map((section, secIndex) => (
                  <div key={secIndex} style={styles.step}>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                    {section.steps && (
                      <ul>
                        {section.steps.map((step, stepIndex) => (
                          <li key={stepIndex} style={styles.step}>{"• " + step}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Enlarged Project Image"  width={600}
                height={100} 
                style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "80vh" }}
      />
            <button style={styles.closeButton} onClick={() => setSelectedImage(null)}>✕</button>
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
  },
  project_grid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '8px',
    flexWrap: 'wrap',
  },
  imageColumn: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  textColumn: {
    flex: '2',
  },
  projectContainer: {
    marginTop: "4rem",
    marginBottom: "1rem",
  },
  imageContainer: {
    paddingBottom: "1rem",
    paddingTop: "2rem",
    flexShrink: 0,
    maxWidth: '100%',
    height: 'auto',
  },
  step: {
    marginTop: "4px",
  },
  heading: {
    marginBottom: '1rem',
    color: 'white',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 150px)',
    gap: '1rem',
  },
  card: {
    borderRadius: '8px',
    padding: '8px',
    backgroundColor: 'var(--background-third)',
    color: 'var( --foreground)',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    position: 'relative',
    padding: '1rem',
    background: '#131313',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'white',
    borderRadius: '24px',
    color: '#131313',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  '@media (max-width: 768px)': {
    project_grid: {
      flexDirection: 'column',
    },
    imageColumn: {
      width: '100%',
      alignItems: 'center',
    },
    textColumn: {
      width: '100%',
    },
  },
};
