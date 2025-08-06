'use client'; 

import { usePathname, useRouter } from 'next/navigation';

import Link from "next/link";


export default function Header() {
  
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      // Scrolla till sektionen om vi är på startsidan
      document.querySelector('#my-work').scrollIntoView({ behavior: 'smooth'});
    } else {
      // Navigera till startsidan först
      router.push('/#my-work');
    }
  };
  
    return (
      <header style={styles.header}>
       
          <div style={styles.links}>
          </div>
          <div style={styles.links}>
          
            <Link href="#my-work" onClick={handleScroll} scroll={false} style={styles.link}>My work</Link>
            <Link href="/about" style={styles.link}>About me</Link>
          <a href="https://github.com/AnneOlthoff" style={styles.link}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/anne-olthoff/" style={styles.link}>
            LinkedIn
          </a>
          </div>
       
       
      </header>
    );
  }
  
  const styles = {
    header: {
      position: 'sticky',
      top: '0px',
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      paddingLeft: '24px',
      paddingTop: '32px',
      paddingBottom: '8px',
      
      paddingRight: '20px',
      backgroundColor: 'var(--background-secondary)',
    
    },
    links: {
     alignItems: 'left'
    },
    
    top: {
      textAlign: "right"
    },
    title: {
      fontSize: '2.5rem',
      margin: '0',
    },
    social: {
      marginTop: '0.5rem',
    },
    link: {
      margin: '0 0.5rem',
      color: 'var( --text-color-secondary)',
      textDecoration: 'none',
    },
   
  };