import Header from '../components/Header';
import Footer from '../components/Footer';
export default function About() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Me</h1>
        <p>Hi! I'm Anne, a UX designer based in Linköping, Sweden.</p>
        <p>
          I have over two years of experience working at Bitvis, a scale-up
          company where I help create intuitive and engaging user experiences.
        </p>
        <p>Feel free to explore the website to learn more!</p>
      </main>
      <Footer/>
    </>
  );
}