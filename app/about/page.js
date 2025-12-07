"use client";

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
            Hi! I&apos;m Anne — a UX Designer and Engineer based in Berlin. I
            love designing clear, scalable systems that make complex data and
            technology feel intuitive.
          </p>
          <p>
            At Bitvis, I joined as the company’s first UX designer, where I
            built the foundation for a design system used across multiple
            products. My background in engineering helps me bridge the gap
            between design and development, making collaboration smoother and
            decisions more data-informed.
          </p>
          <p>
            I’m driven by curiosity, empathy, and a love for clean, purposeful
            design — and yes, fueled by a few too many cups of black coffee.
          </p>
        </div>
      </div>

      <div className="facts">
        <div style={styles.fact}>
          <h1>1st</h1>
          <p>First UX designer at Bitvis - building structure from scratch</p>
        </div>
        <div style={styles.fact}>
          <h1> 2 </h1>
          <p> Two cups of black coffee every day </p>
          <br />
        </div>

        <div style={styles.fact}>
          <h1> 3 </h1>
          <p> Years of hands-on UX experience in product teams</p>
        </div>

        <div style={styles.fact}>
          <h1> 4 </h1>
          <p>German level: 4 words mastered… and counting 😅 </p>
        </div>
        <div style={styles.fact}>
          <h1> 5 </h1>
          <p> Cities I’ve lived in - now calling Berlin home </p>
        </div>

        <div style={styles.fact}>
          <h1> 6+ </h1>
          <p>Years designing in Figma and building scalable design systems </p>
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
    display: "flex",
    flexDirection: "column",

    textAlign: "left",
  },

  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  },

  fact: {
    flex: "1 1 50%",
  },
};
