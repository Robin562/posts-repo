const About = () => {
  const year = new Date().getFullYear();
  return (
    <main className="about">
      <h1 style={{ textAlign: "center", marginBottom: "0.5rem" }}>About us</h1>
      <p>Copyright &copy; {year} Krishna</p>
    </main>
  );
};

export default About;
