function Projects() {
  return (
    <main>
      <h1>Projects</h1>

      <p>
        A collection of analytics projects demonstrating data analysis,
        reporting, visualization, and problem-solving skills.
      </p>

      <section className='projects-grid'>
        <div className='project-card'>
          <h2>Excel Sales Dashboard</h2>
          <p className='project-status'>Planned</p>
          <p className='project-tags'>
            Excel • Pivot Tables • Data Visualization
          </p>
          <p>
            Interactive sales dashboard built using Excel formulas, Pivot
            Tables, and business KPIs.
          </p>
          <button>View Details</button>
        </div>

        <div className='project-card'>
          <h2>SQL Customer Analysis</h2>
          <p className='project-status'>Planned</p>
          <p className='project-tags'>SQL • Data Analysis</p>
          <p>
            Customer and sales analysis using SQL queries to identify trends and
            opportunities.
          </p>
          <button>View Details</button>
        </div>

        <div className='project-card'>
          <h2>Power BI Executive Dashboard</h2>
          <p className='project-status'>Planned</p>
          <p className='project-tags'>Power BI • Business Intelligence</p>
          <p>
            Executive-level dashboard designed to support business decision
            making.
          </p>
          <button>View Details</button>
        </div>

        <div className='project-card'>
          <h2>Data Cleaning Case Study</h2>
          <p className='project-status'>Planned</p>
          <p className='project-tags'>Data Cleaning • Data Quality</p>
          <p>
            Demonstrates the process of transforming messy data into reliable
            business information.
          </p>
          <button>View Details</button>
        </div>

        <div className='project-card'>
          <h2>Retail Sales Analysis</h2>
          <p className='project-status'>Planned</p>
          <p className='project-tags'>Analytics • Business Insights</p>
          <p>
            Analysis of retail sales data to uncover trends, opportunities, and
            recommendations.
          </p>
          <button>View Details</button>
        </div>

        <div className='project-card'>
          <h2>Profitability Analysis</h2>
          <p className='project-status'>Planned</p>
          <p className='project-tags'>Business Acumen • Finance</p>
          <p>
            Evaluation of product profitability and strategic business
            recommendations.
          </p>
          <button>View Details</button>
        </div>

        <div className='project-card'>
          <h2>Executive Business Report</h2>
          <p className='project-status'>Planned</p>
          <p className='project-tags'>Communication • Data Storytelling</p>
          <p>
            Executive summary and recommendations based on business performance
            metrics.
          </p>
          <button>View Details</button>
        </div>

        <div className='project-card'>
          <h2>Stakeholder Requirements Project</h2>
          <p className='project-status'>Planned</p>
          <p className='project-tags'>
            Business Analysis • Requirements Gathering
          </p>
          <p>
            Example stakeholder engagement and requirements analysis project.
          </p>
          <button>View Details</button>
        </div>
      </section>
    </main>
  );
}

export default Projects;
