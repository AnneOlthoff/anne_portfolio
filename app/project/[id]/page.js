'use client'; 



import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';



export default function ProjectPage() {
 

  const sectionsRefs = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();

  const [data, setData] = useState([]);

    
  useEffect(() => {
  fetch('/data/file.json')
      .then((response) => {
      console.log('Response status:', response.status);
      if (!response.ok) throw new Error('Failed to fetch data');
      return response.json();
      })
      .then((json) => {
      console.log('Loaded JSON:', json);
      setData(json.projects);
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);


  const addToRefs = (el) => {
      if (el && !sectionsRefs.current.includes(el)) {
      sectionsRefs.current.push(el);
      }
  };


  const project = data.find(p => String(p.id) === id);

  if (!project) return <div>Projektet hittades inte.</div>;


    
  return (
    <>
     
          <div  ref={addToRefs} style={styles.projectContainer}>
            <h2>{project.heading}</h2>
            <h5>{project.subheading}</h5>
            <br />
            <div className="projectWrapper">
              <div style={styles.imageColumn}>
                {project.images.map((image, secIndex) => (
                  <div style={styles.imageContainer}>
                    <Image
                      src={image.image || '/default-image.jpg'}
                      alt={image.imcap || 'Project Image'}
                      layout="responsive"
                      width={20}
                      height={600}
                      style={{
                        objectFit: "contain",
                        maxHeight: '400px',
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                        backgroundColor: "red",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={styles.textColumn}>
                {project.sections.map((section, secIndex) => (
                  <div key={secIndex} style={styles.step}>
                    <h3>{section.title}</h3>
                    <p>{section.sectionOne}</p>

                    {/* Underrubriker (t.ex. för design process) */}
                    {section.subsections && section.subsections.map((sub, subIndex) => (
                      <div key={subIndex} style={styles.step}>
                        <h4>{sub.title}</h4>
                        <p>{sub.sectionOne}</p>
                         {section.steps && (
                        <ul>
                          {section.subSteps.map((step, stepIndex) => (
                            <li key={stepIndex} style={styles.step}>{"• " + step}</li>
                          ))}
                        </ul>
                        )}
                         <p>{sub.sectionTwo}</p>
                      </div>
                    ))}

                    {section.steps && (
                      <ul>
                        {section.steps.map((step, stepIndex) => (
                          <li key={stepIndex} style={styles.step}>{"• " + step}</li>
                        ))}
                      </ul>
                    )}
                     <p>{section.sectionTwo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Image Popup Modal */}
      {selectedImage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage.image}
                alt={selectedImage.imcap || 'Enlarged Project Image'} 
                width={600}
                height={100} 
                style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "80vh" }}
            />
            {/* Här visas titeln eller en fallback */}
            {selectedImage.imcap && (
              <p style={styles.imcap}>{selectedImage.imcap}</p>
            )}
            
            <button style={styles.closeButton} onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
      {/* Här kan du lägga till ditt minispel */}
      <div style={{ marginTop: '2rem' }}>
        <h2>🎉 Bra jobbat! Nu firar vi med ett spel:</h2>
        {/* <MiniGame /> */}
      </div>
    </>
  );
}

const styles = {
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '3rem',
    textAlign: 'left',
    maxWidth: '2000px',
    margin: '0 auto',
    
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
    paddingTop: '1rem' , 
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