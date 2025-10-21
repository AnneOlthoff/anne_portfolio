

import Head from 'next/head';
//import { ReactComponent as Logo } from "./assets/testlogga.svg"; // Importera SVG som React-komponent


import Header from './components/header';
import Projects from './pickProject/page';
import Footer from './components/footer';
import SVGAnimation from './components/svganimation';


export default function Home() {


  return (
    
    <div >
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Whoo" />
      </Head>
      <div>
        <Header />
      
        <SVGAnimation/>
        
        <div id="my-work" style={{marginTop: '4px'}}  >
           <Projects/>
        </div>
        <Footer />
      </div>
      </div>
   
  );
}
