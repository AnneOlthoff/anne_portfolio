export default function Footer() {
    return (
      <footer if ='footer' style={styles.footer}>
        <p>© 2024 Anne. All rights reserved.</p>
       
      </footer>
    );
  }
  
  const styles = {
    footer: {
      padding: '1rem',
      textAlign: 'center',
      backgroundColor: '#282727',
      marginTop: '2rem',
      
    },
   
  };