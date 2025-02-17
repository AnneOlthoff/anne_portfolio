'use client'; 

import { useRef } from 'react';

export default function Svganimation() {
    const targetRef = useRef(null);

    const handleAnimationEnd = () => {
      const targetElement = targetRef.current;
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    
    
    
     return (
       
         <div style={styles.logostyle}>
         <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 901.001 880.002"
         width="300"
         height="300"
         onAnimationEnd={handleAnimationEnd} // Triggar scroll när animationen är klar
         className="animate"
       > <style>
       {`
         .animate {
           fill: none; /* Ingen fyllning, bara stroke */
           stroke: #B2A9A0; /* Linjefärgen */
           stroke-width: 8; /* Tjocklek på linjen */
           stroke-dasharray: 10000; /* Total längd på streckad linje */
           stroke-dashoffset: -10000; /* Börja utanför synfältet */
           animation: draw 4s ease-out forwards; /* Animering som ritar linjen */
           onAnimationEnd={handleAnimationEnd} 
          
           stroke-linecap: round;
           stroke-linejoin: round;
         }
         @keyframes draw {
           to {
             stroke-dashoffset: 0;
           }
         }
       `}
     </style>
     <path d="M822.3,806.6h0s-746.2,0-746.2,0c-.6,0-1-.5-1-1l.3-731.2c0-.6.5-1,1-1h1.5s747,.9,747,.9c.6,0,1,.5,1,1v698.5c0,1-1.2,1.4-1.8.7l-15.1-16.4s0,0,0,0c-5.2-6.9-11.2-10.3-17.1-10-6,.3-11.7,4.6-16,11.9-6,10-15.2,15.5-24.2,14.4-8.2-1-14.6-7.2-17.6-17.1,0,0,0,0,0,0-2.6-6.5-8.3-10.7-15-11.1-7.2-.4-13.8,3.9-17.6,11.3,0,0,0,0,0,0-4.3,10.3-11.6,16.1-20.2,15.8-9.3-.3-18-7.6-21.7-18.3-2.6-6.5-8.2-10.8-15.1-11.4-7.3-.7-14.2,2.9-18.4,9.5,0,0,0,0,0,0-8.7,16-22.5,20.9-32.6,20-10.6-.9-19.1-7.7-22.8-18.3L372.2,181.9c-.3-.9-1.6-.9-2,0L128,767.8"/>

   </svg>
   <div ref={targetRef} style={styles.target}>
        
   </div>
   </div>
     );
   }
  
   const styles = {
     logostyle: {
         display: "flex",
         alignItems: "center",
         justifyContent: 'center',
         minHeight: '100vh', //vill vi ha något som är skärmstorlek it för fixed
    
       },
    
     target: {
         marginTop: '100vh', //vill vi ha något som är skärmstorlek it för fixed
         //paddingBottom: '5%',
         //minHeight: '200%',
        
         
       },
   
   };


