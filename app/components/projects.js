'use client';
import { usePathname, useRouter } from 'next/navigation';
import {useState, useEffect, useRef} from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {

  const [data, setData] = useState([]);
  const sectionsRefs = useRef([])

  console.log('Hämtar från URL:', '/data/file.json');
  useEffect(() => {
    fetch('data/file.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);


  

  const router = useRouter();
  const pathname = usePathname();
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
            {project.title}
          </button>
        ))}
      </div>
    

    <div>
         <h1>{data.title}</h1>
         <p>{data.content}</p>
    
      </div>
          
      {/* Lägg till sektionerna som ska scrollas till */}
      {data.map((item) => (
          <div key={item.id} ref={addToRefs} style={{ marginTop: '6rem',
          paddingBottom: '2rem', 
           }}>
            <h2>{item.title}</h2>
            <br/>
            <div style={styles.project_grid}>
            
               <Image src={item.image} alt={item.title} width={400} height={300} />
               <p >
            
                {item.content.split("\n").map((line, index) => (
                 <span key={index}>
                     {line}
                    <br />
                 </span>
                  ))}
              </p>
            </div>
            
          </div>
        ))}

     
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem',
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
  project_grid: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
   
  },

  card: {
   
    borderRadius: '8px',
    padding: '8px',
    backgroundColor: '#232323',
    color: '#ffffff',
    cursor: 'pointer',
  },
};