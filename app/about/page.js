'use client'; 

import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {

  // const YearsCounter = ({ startYear }) => {
  //   const [years, setYears] = useState(0);
  
  //   useEffect(() => {
  //     const currentYear = new Date().getFullYear();
  //     setYears(currentYear - startYear);
  //   }, [startYear]);
  
  //   return <span>{years}</span>;
  // };
  
  
    return (
    <div style= {styles.container}>
      <Header />
      <main style={styles.main}>
        <div style={styles.content}>
       
        <div style={styles.inNumbers}>
          <div style={styles.head}>

          <h1> About me</h1>
             
          <p> Hi! I&apos;m Anne, a UX Designer and Engineer currently based in Berlin. I&apos;m passionate about creating intuitive and functional user experiences and am now planning my next chapter.</p>    
             <p> And of course, I believe in the power of numbers and data to tell compelling stories—so let&apos;s explore those too!</p>
          </div>
         
         <div style = {styles.facts}>
         <div style={styles.row}>
          
         <div style={styles.fact}>
             <h1> 1 </h1> 
             <p> One bike since I moved to Linköping, and it&apos;s still not stolen</p>
       
          </div>
          <div style={styles.fact}>
             
             <h1>  2+ </h1> 
             <p>  Over two years of experience working in UX </p>
             <br/>
          </div>

          <div style={styles.fact} >
            <h1> 3 </h1> 
             <p> Three Cups of black coffee every day </p>

          </div>

          </div> 
          
          <div  style={styles.row}>
          
       
          <div style={styles.fact}>
             <h1> 4 </h1> 
             <p>I lied, four cups of coffee </p>
          </div>
          <div style={styles.fact} >
            <h1> 5 </h1> 
             <p> I have lived in five different cities </p>

          </div>

          <div style={styles.fact} >
            <h1> 6+ </h1> 
             <p>6+ years using Figma </p>

          </div>

          </div> 
          
          </div>
          </div>
        </div>

        
      </main>
      <Footer/>
    </div>
  );
}
const styles = {
 
  container: {
    display: 'flex',
   flexDirection: 'column',
   minHeight: '100vh',
   marginLeft: 'auto',
   marginRight: 'auto',
   maxWidth: '1400px',
  },
  
  main: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    
  },
  content: {
    flex: 1,
    padding: '2rem' ,
    paddingTop: "6rem",

    paddingLeft: '10%',
    paddingRight: '10%',
   
  },


  inNumbers: {

    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '2rem',
    
  },
  head: {
    flex: 1,
    minWidth: '300px',
    flexWrap: 'wrap',
    gap: '20rem',

  }, 
  
  facts: {
    flex: 2,
    flexDirection: 'column',
    minWidth: '200px',
    position: 'relative',
    flexWrap: 'wrap',
    
    
    

  },

  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    gap: '2rem',
  },

  fact: {
    
    flex: '1 1 calc(33.333% - 2rem)',
    flex: 2,
    minWidth: '200px', 

  }
 
  
  
};