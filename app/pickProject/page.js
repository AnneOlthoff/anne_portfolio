'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../globals.css';

import Link from 'next/link';


export default function Projects() {
  const [data, setData] = useState([]);
  const sectionsRefs = useRef([]);
  const [isDark, setIsDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Hämta JSON-data
  useEffect(() => {
    fetch('../data/file.json')
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
         
        <Link key={project} href={`/projects/${project.id}`}>
            <button style={{ padding: '1rem', background: '#eee' }}>
                {project.what}
            </button>
        </Link>

        ))}
      </div>
      <br />

      
    
    </section>
  );
}

const styles = {
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '3rem',
    textAlign: 'left',
    maxWidth: '1400px',
    margin: "0 auto",
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
