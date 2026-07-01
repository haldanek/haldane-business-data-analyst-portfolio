function Home() {
  return (
    <main>
      <section className='hero'>
        <h1>Kimberlee Haldane</h1>

        <h2>Business Data Analyst Portfolio</h2>

        <p>
          Transforming data into actionable business insights through analysis,
          visualization, and communication.
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
