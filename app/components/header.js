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
      document.querySelector('#my-work').scrollIntoView({ behavior: 'smooth' });
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
          <a href="https://github.com/yourusername" style={styles.link}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" style={styles.link}>
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
      justifyContent: 'space-between', /* Fördelar elementen till vänster och höger */
      alignItems: 'center', /* Justerar vertikalt (valfritt) */
      paddingLeft: '24px',
      paddingTop: '32px',
      
      paddingRight: '20px', /* Marginal runt om (valfritt) */
      backgroundColor: '#282727' /* Bakgrundsfärg (valfritt) */
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
      color: '#0070f3',
      textDecoration: 'none',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
    },
  };