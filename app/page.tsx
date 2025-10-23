

import Head from 'next/head';
//import { ReactComponent as Logo } from "./assets/testlogga.svg"; // Importera SVG som React-komponent


import Projects from './pickProject/page';
import SVGAnimation from './components/svganimation';


export default function Home() {


  return (
    
    <div >
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Whoo" />
      </Head>
      <div>
        
      
        <SVGAnimation/>
        
        <div id="my-work"  >
           <Projects/>
        </div>
       
      </div>
      </div>
   
  );
}
