function Journey() {
  return (
    <main>
      <h1>Learning Journey</h1>

      <p>
        My career journey has been focused on helping people understand
        information, solve problems, and make better decisions.
      </p>

      <section className='journey-container'>
        <div className='journey-card'>
          <h2>Teacher</h2>

          <p>
            Developed communication, data interpretation, assessment analysis,
            and problem-solving skills.
          </p>
        </div>
        <div className='journey-arrow'>⬇</div>

        <div className='journey-card'>
          <h2>Instructional Designer</h2>

          <p>
            Learned how to analyze needs, design solutions, and create learning
            experiences based on evidence.
          </p>
        </div>
        <div className='journey-arrow'>⬇</div>

        <div className='journey-card'>
          <h2>Technical Writer</h2>

          <p>
            Strengthened documentation, stakeholder communication, process
            mapping, and information organization skills.
          </p>
        </div>
        <div className='journey-arrow'>⬇</div>

        <div className='journey-card'>
          <h2>Business Data Analyst</h2>

          <p>
            Combining communication, analysis, business thinking, and technical
            skills to support data-driven decision making.
          </p>
        </div>
        <div className='fancy-divider'>
          <span></span>
        </div>
      </section>
      <section className='career-summary'>
        <h2>Why Analytics?</h2>

        <p>
          Throughout my career I have been responsible for collecting
          information, identifying patterns, solving problems, and communicating
          insights.
        </p>

        <p>
          Data Analytics allows me to combine these strengths with
          technical tools such as Excel, SQL, Power BI, and Python to support
          business decisions.
        </p>

        <h3>Transferable Skills</h3>

        <ul className='skills-list'>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Data Interpretation</li>
          <li>Stakeholder Collaboration</li>
          <li>Documentation</li>
          <li>Research</li>
          <li>Process Improvement</li>
        </ul>
      </section>

      <section className='career-summary'>
        <h2>Current Learning Goals</h2>

        <ul className='skills-list'>
          <li>Advanced Excel</li>
          <li>SQL Query Development</li>
          <li>Power BI Dashboard Design</li>
          <li>Business Intelligence Reporting</li>
          <li>Data Visualization</li>
          <li>Business Analysis</li>
        </ul>
      </section>
    </main>
  );
}

export default Journey;
