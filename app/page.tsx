

import Head from 'next/head';
//import { ReactComponent as Logo } from "./assets/testlogga.svg"; // Importera SVG som React-komponent
import Logo from "./assets/testlogga_line.svg";

import Header from './components/header';
import Projects from './components/projects';
import Footer from './components/footer';
import SVGAnimation from './components/svganimation'

export default function Home() {


  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Whoo" />
      </Head>
      <div>
        <Header />
      
        <SVGAnimation/>
        
        <div id="my-work" >
           <Projects/>
        </div>
        <Footer />
      </div>
    </>
  );
}
const styles = {
 
 
};