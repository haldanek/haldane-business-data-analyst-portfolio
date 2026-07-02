function Home() {
  return (
    <main>
      <section className='hero'>
        <h1>Kimberlee Haldane</h1>

        <h2>Data Analyst Portfolio</h2>

        <p>
          Aspiring Data Analyst with a background in education and a passion for
          transforming data into meaningful insights. Currently building
          expertise in data analysis, visualization, and reporting through
          hands-on projects and continuous learning.
        </p>

        <div className='hero-buttons'>
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </section>

      <section className='stats-section'>
        <div className='stat-card'>
          <h3>Projects</h3>
          <p>8</p>
        </div>

        <div className='stat-card'>
          <h3>Dashboards</h3>
          <p>3</p>
        </div>

        <div className='stat-card'>
          <h3>Datasets</h3>
          <p>10+</p>
        </div>

        <div className='stat-card'>
          <h3>Skills</h3>
          <p>8</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
