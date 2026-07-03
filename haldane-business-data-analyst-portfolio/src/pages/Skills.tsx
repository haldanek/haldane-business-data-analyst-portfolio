function Skills() {
  return (
    <main>
      <h1>Skills Dashboard</h1>

      <p>
        This dashboard tracks my development as a Data Analyst and provides
        evidence of my skills through portfolio projects.
      </p>

      <section className='skills-grid'>
        <div className='skill-card'>
          <h2>Communication</h2>
          <p className='skill-score'>95%</p>
          <p className='status-complete'>Strong</p>
          <p>Executive Business Report</p>
          <button>View Project</button>
        </div>

        <div className='skill-card'>
          <h2>Stakeholder Collaboration</h2>
          <p className='skill-score'>85%</p>
          <p className='status-complete'>Strong</p>
          <p>Requirements Project</p>
          <button>View Project</button>
        </div>

        <div className='skill-card'>
          <h2>Data Analysis</h2>
          <p className='skill-score'>60%</p>
          <p className='status-progress'>Developing</p>
          <p>Retail Sales Analysis</p>
          <button>View Project</button>
        </div>

        <div className='skill-card'>
          <h2>Excel</h2>
          <p className='skill-score'>35%</p>
          <p className='status-learning'>Learning</p>
          <p>Sales Dashboard Project</p>
          <button>View Project</button>
        </div>

        <div className='skill-card'>
          <h2>SQL</h2>
          <p className='skill-score'>40%</p>
          <p className='status-learning'>Learning</p>
          <p>Customer Analysis Project</p>
          <button>View Project</button>
        </div>

        <div className='skill-card'>
          <h2>Power BI</h2>
          <p className='skill-score'>10%</p>
          <p className='status-learning'>Learning</p>
          <p>Learning In Progress</p>
          <button>View Project</button>
        </div>

        <div className='skill-card'>
          <h2>Data Cleaning</h2>
          <p className='skill-score'>55%</p>
          <p className='status-progress'>Developing</p>
          <p>Data Cleaning Case Study</p>
          <button>View Project</button>
        </div>

        <div className='skill-card'>
          <h2>Business Acumen</h2>
          <p className='skill-score'>40%</p>
          <p className='status-learning'>Learning</p>
          <p>Profitability Analysis</p>
          <button>View Project</button>
        </div>
      </section>
    </main>
  );
}

export default Skills;
