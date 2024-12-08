import Link from 'next/link';


export default function Projects() {
    const projects = [
      { id: 'test-one', name: 'Project One', description: 'A cool project.' },
      { id: 'test-two',name: 'Project Two', description: 'Another cool project.'},
      { id: 'test-three',name: 'Project Three', description: 'Yet another one!' },
    ];
  
    return (
      <section style={styles.container}>
        <h2 style={styles.heading}>Mydd s</h2>
        <div style={styles.grid}>
          
             
             {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}` } >
            
              <p> {project.name}</p>
           
       
          </Link>
        ))}

            </div>
       
      </section>
    );
  }
  
  const styles = {
    container: {
      padding: '2rem',
      textAlign: 'center',
    },
    
    links: {
      alignItems: 'left'
     },
    
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      border: '1px solid #D3CDC0',
      borderRadius: '8px',
      padding: '1rem',
      
      backgroundColor: '#232323',
    },
    link: {
      color: '#0070f3',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };