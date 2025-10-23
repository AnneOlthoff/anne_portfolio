"use client";

import Header from "../components/header";
import Footer from "../components/footer";

import { useEffect } from "react";

import "../globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  // const YearsCounter = ({ startYear }) => {
  //   const [years, setYears] = useState(0);

  //   useEffect(() => {
  //     const currentYear = new Date().getFullYear();
  //     setYears(currentYear - startYear);
  //   }, [startYear]);

  //   return <span>{years}</span>;
  // };
  useEffect(() => {
      AOS.init({ duration: 800, once: true });
      
    }, []);

  return (
    
    
        <div style={styles.container} data-aos="fade-up">
        
            <div style={styles.aboutme}>
              <h1> About me</h1>
              <div>
              <p>
                {" "}
                Hi! I&apos;m Anne, a UX Designer and Engineer currently based in
                Berlin. I&apos;m passionate about creating intuitive and
                functional user experiences and am now planning my next chapter.
              </p>
              <p>
                {" "}
                And of course, I believe in the power of numbers and data to
                tell compelling stories—so let&apos;s explore those too!
              </p>
              </div>
            </div>

            <div className= "facts">
             
                <div style={styles.fact}>
                  <h1> 1 </h1>
                  <p>
                    {" "}
                    One bike since I moved to Linköping, and it&apos;s still not
                    stolen
                  </p>
                </div>
                <div style={styles.fact}>
                  <h1> 2+ </h1>
                  <p> Over two years of experience working in UX </p>
                  <br />
                </div>

                <div style={styles.fact}>
                  <h1> 3 </h1>
                  <p> Three Cups of black coffee every day </p>
                </div>
             

                <div style={styles.fact}>
                  <h1> 4 </h1>
                  <p>I lied, four cups of coffee </p>
                </div>
                <div style={styles.fact}>
                  <h1> 5 </h1>
                  <p> I have lived in five different cities </p>
                </div>

                <div style={styles.fact}>
                  <h1> 6+ </h1>
                  <p>6+ years using Figma </p>
                </div>
              </div>
            
          </div>
       
    
  );
}
const styles = {
  container: {
    paddingTop: "20%", 
    flex: "1 1 100px",
    display: "flex",
    position: "relative",
    margin: "0 auto",
    gap: "4rem",
    flexWrap: "wrap",

    alignItems: "start",
  },

  
  aboutme: {
    
  flex: 1,
  flexWrap: "wrap",
  maxWidth: "35rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  textAlign: "left",
  

  
  },

  

  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },

  fact: {
    flex: "1 1 43%",
    flex: 2,
    minWidth: "200px",
  },
};
