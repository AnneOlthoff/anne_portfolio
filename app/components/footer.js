export default function Footer() {
  return (
    <footer if="footer" style={styles.footer}>
      <p>© 2025 Anne Olthoff. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "var(--background-secondary)",
    marginTop: "2rem",
    borderTop: "1px solid var(--divider-color)",
  },
};
