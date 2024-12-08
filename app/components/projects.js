'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    { id: 'bitvis', name: 'Bitvis', description: 'A cool project.' },
    { id: 'openspace', name: 'Master thesis', description: 'Another cool project.' },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (id) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  return (
    <section style={styles.container}>
      <div style={styles.heading}>
      <h1>My work</h1>
      <p>Where I am today and how I got here, read more about my current possition at Bitvis or about some project from Univiersity</p>
      </div>
      <div style={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            style={styles.card}
            onClick={(e) => {
              e.preventDefault(); // Förhindra standardnavigering
              handleScroll(project.id); // Scrolla smidigt till sektionen
            }}
          >
            <h3 style={styles.links}>{project.name}</h3>
          
          </a>
        ))}
      </div>

      {/* Lägg till sektionerna som ska scrollas till */}
           

      {projects.map((project) => (
        <div
          key={project.id}
          id={project.id}
          style={{
            marginTop: '4rem',
            padding: '2rem',
            border: '1px solid #D3CDC0',
            backgroundColor: 'red',
            borderRadius: '8px',
          }}
        >
          <h2>{project.name}</h2>
          <p>Details about {project.name}: {project.description}</p>
     
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    padding: '4rem',
    textAlign: 'left',
  },

  
  links: {
    alignItems: 'left',
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
    backgroundColor: '#232323',
    color: '#ffffff',
    cursor: 'pointer',
  },
};