
import Head from 'next/head';
//import { ReactComponent as Logo } from "./assets/testlogga.svg"; // Importera SVG som React-komponent
import Logo from "./assets/testlogga_line.svg";

import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Whoo" />
      </Head>
      <div>
        <Header />
        <div style={styles.logostyle}>
        <img src={Logo} alt="My SVG Image"
            width="300" height="300" color='blue' />
        
        </div>
        <div id="my-work">
    <Projects/>
  </div>
        <Footer />
      </div>
    </>
  );
}
const styles = {
  logostyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    minHeight: '100vh',

  },
};