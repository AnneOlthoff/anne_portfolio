'use client';
// components/projects.js
import Link from 'next/link';



import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';


export default function Projects() {
  const [data, setData] = useState([]);

 

  useEffect(() => {
    fetch('/data/file.json') // Stig till filen i public-mappen
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((json) => setData(json.projects)) // Antag att "projects" är roten i JSON-strukturen
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

 

  return (
    <section style={styles.container}>
      <div style={styles.heading}>
        <h1>My work</h1>
        <p>Learn more about where I am today and how I got here. Check out some of my small projects or my university thesis – and stay tuned, as more projects will be added soon!</p>
      </div>
      
      
      <br />

     


        <div>
          {data.map(project => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.introduction}</p>
              <Link href={`/project/${project.id}`}>Läs mer</Link>
            </div>
          ))}
        </div>
      


      
    </section>
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