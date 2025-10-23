'use client';

import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SVGAnimation() {
  const pathRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const [hasAnimatedBefore, setHasAnimatedBefore] = useState(false);

  

useEffect(() => {
  if (typeof window === 'undefined') return;

  AOS.init({ duration: 1000, once: true });

  if (pathRef.current) {
    const length = pathRef.current.getTotalLength();
    setPathLength(length);
  }

  const hasAnimated = sessionStorage.getItem('svgAnimated');
  if (!hasAnimated) {
    setShouldAnimate(true);
    sessionStorage.setItem('svgAnimated', 'true');
  } else {
    setHasAnimatedBefore(true);
  }
}, []);

useEffect(() => {
  if (shouldAnimate) {
    const timeout = setTimeout(() => {
      // Vänta tills browser är redo
      requestAnimationFrame(() => {
        const targetElement = document.querySelector('#my-work');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.warn('Element #my-work hittades inte');
        }
      });
    }, 5000); 
    return () => clearTimeout(timeout);
  }
}, [shouldAnimate]);


  return (
    <div style={styles.logostyle}>
      <div
        data-aos={hasAnimatedBefore ? 'fade-down' : undefined}
        data-aos-offset="1200"
        data-aos-duration="1800"
        data-aos-easing="ease-out"
        data-aos-once="true"
        style={{
          opacity: hasAnimatedBefore ? 1 : 1,
          transition: 'opacity 1s ease-down',
        }}
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 901.001 880.002"
          width="300"
          height="300"
        >
          <path
            ref={pathRef}
            d="M822.3,806.6h0s-746.2,0-746.2,0c-.6,0-1-.5-1-1l.3-731.2c0-.6.5-1,1-1h1.5s747,.9,747,.9c.6,0,1,.5,1,1v698.5c0,1-1.2,1.4-1.8.7l-15.1-16.4s0,0,0,0c-5.2-6.9-11.2-10.3-17.1-10-6,.3-11.7,4.6-16,11.9-6,10-15.2,15.5-24.2,14.4-8.2-1-14.6-7.2-17.6-17.1,0,0,0,0,0,0-2.6-6.5-8.3-10.7-15-11.1-7.2-.4-13.8,3.9-17.6,11.3,0,0,0,0,0,0-4.3,10.3-11.6,16.1-20.2,15.8-9.3-.3-18-7.6-21.7-18.3-2.6-6.5-8.2-10.8-15.1-11.4-7.3-.7-14.2,2.9-18.4,9.5,0,0,0,0,0,0-8.7,16-22.5,20.9-32.6,20-10.6-.9-19.1-7.7-22.8-18.3L372.2,181.9c-.3-.9-1.6-.9-2,0L128,767.8"
            style={{
              fill: 'none',
              stroke: '#B2A9A0',
              strokeWidth: 8,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeDasharray: pathLength,
              strokeDashoffset: shouldAnimate ? -pathLength : 0,
              animation: shouldAnimate ? 'draw 4s ease-in forwards' : 'none',
            }}
          />
          <style>{`
            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </svg>
      </div>
    </div>
  );
}

const styles = {
  logostyle: {
    flex: '1 1 100px',
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100vh',
    minHeight: '100vh',
    paddingTop: '20vh',
  },
};