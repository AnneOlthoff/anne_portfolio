'use client';
import {useState, useEffect, useRef} from 'react'
import Image from 'next/image';

export default function Projects() {

  const [data, setData] = useState([]);
  const sectionsRefs = useRef([])

  console.log('Hämtar från URL:', '/data/file.json');
  useEffect(() => {
    fetch('/data/file.json') // Stig till filen i public-mappen
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((json) => setData(json.projects)) // Antag att "projects" är roten i JSON-strukturen
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  
  //const data = JSON.parse(file);
   
  // Lägg till referenser för varje sektion
   
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
      <p>Where I am today and how I got here, read more about my current possition at Bitvis or about my thesis from Univiersity</p>
      </div>
    
      {/* scrollknappar */}
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
    <br></br>

   <div style={styles.projects}>
          
      {/* Lägg till sektionerna som ska scrollas till */}
        {/* Rendera projekt */}
        {data.map((project, index) => (
          
        <div key={index} ref={addToRefs} style={styles.projectContainer}>
          <h2>{project.heading}</h2>
          <h4>{project.subheading}</h4>
          <br></br>

          <div style={styles.project_grid}>
          <p>
          {project.images.map((image, secIndex) => (
            <div key={secIndex} style={styles.imageContainer}>
            <Image
                src={image.image || '/default-image.jpg'}
                alt={image.title || 'Project Image'}
                width = {300}
                height={300} // Fast höjd, ändra vid behov
                onError={(e) => (e.target.src = '/default-image.jpg')}
            />

            </div>
            
            ))}
            </p>
            <p >
          
                  {project.sections.map((section, secIndex) => (
                    
                    <div key={secIndex} style={styles.step}>
                      
                      <h3>{section.title}</h3>
                      <p>{section.content}</p>
                      <p>
                      {section.steps && (
                        <ul >
                          {section.steps.map((step, stepIndex) => (
                            <li key={stepIndex} style ={styles.step}>{step}</li>
                          ))}
                        </ul>
                      )}
                      </p>
                      
                    </div>
                  ))}
               
            </p>
          
          </div>
         
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
    textAlign: 'left',
    
  },

  project_grid: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
   
  },

  projectContainer:{
  
    marginTop: "4rem", //mellanrum mellan projekten
    marginBottom: "1rem",
  
  },

  imageContainer:{
    paddingBottom: "1rem",
    paddingTop: "2rem",
    flexShrink: 0, // Förhindrar att bilden skalas ned
    width: '300px', // Fast bredd för bilden
    height: 'auto', // Behåll proportioner
   
  },

  step:{
    marginTop: "4px",
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