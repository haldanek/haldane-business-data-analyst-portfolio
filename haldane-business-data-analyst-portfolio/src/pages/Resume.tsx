function Resume() {
  return (
    <main>
      <h1>Resume</h1>

      <p>
        A summary of my qualifications, experience, and professional development
        as I transition into Data Analytics.
      </p>

      <section className='resume-download'>
        <a
          href='/Kimberlee-Haldane-Resume.pdf'
          download
          className='download-button'
        >
          Download Resume (PDF)
        </a>
      </section>

      <section className='resume-section'>
        <h2>Professional Summary</h2>

        <p>
          Former educator and detail-oriented professional transitioning into
          Data Analytics. Strengths include research, documentation,
          communication, data analysis, and process improvement. Experienced in
          managing complex workflows, supporting stakeholders, and translating
          ambiguity into structured systems. Brings a teacher’s approach to
          operations—organizing information clearly, identifying gaps, and
          building efficient, scalable processes.
        </p>
      </section>

      <section className='resume-section'>
        <h2>Core Skills</h2>

        <ul>
          <li>Data Cleaning</li>
          <li>Data Visualization</li>
          <li>Risk & Compliance</li>
          <li>Stakeholder Communication</li>
          <li>Documentation</li>
          <li>Research</li>
          <li>Problem Solving</li>
          <li>Excel</li>
          <li>Word</li>
          <li>Outlook</li>
          <li>Git/GitHub</li>
          <li>ChatGPT</li>
          <li>SQL</li>
          <li>Power BI</li>
        </ul>
      </section>

      <section className='resume-section'>
        <h2>Experience</h2>

        <div className='experience-item'>
          <h3>Cybersecurity Compliance Intern (Apprenticeship)</h3>
          <p>
            Delaware Department of Technology & Information (DTI) | 11/2025 –
            03/2026
          </p>

          <ul>
            <li>
              Conducted research and supported compliance efforts aligned with
              IRS Publication 1075 (Pub 1075) standards.
            </li>
            <li>
              Analyzed Corrective Action Plans (CAPs) across multiple agencies
              to identify gaps and track remediation efforts.
            </li>
            <li>
              Compiled and organized large datasets into structured Excel
              spreadsheets to monitor outstanding compliance items.
            </li>
            <li>
              Supported cross-agency coordination by maintaining accurate
              records and highlighting items requiring follow-up.
            </li>
          </ul>
        </div>

        <div className='experience-item'>
          <h3>Technical Writer (Externship)</h3>
          <p>Secured Health | 12/2024 – 02/2025</p>

          <ul>
            <li>
              Documented and standardized operational workflows, improving
              onboarding clarity and process consistency.
            </li>
            <li>
              Collaborated with product, engineering, and design teams to align
              on requirements and system updates.
            </li>
            <li>
              Identified process gaps and recommended improvements to streamline
              workflows.
            </li>
            <li>
              Produced clear, structured documentation to support
              cross-functional teams and end users.
            </li>
          </ul>
        </div>

        <div className='experience-item'>
          <h3>Software Development Trainee</h3>
          <p>Code Differently | 08/2024 - 02/2025</p>

          <ul>
            <li>
              Completed 800+ hours of training in full-stack development and
              systems design.
            </li>
            <li>
              Built applications using Java, JavaScript, and databases,
              strengthening data and logic skills.
            </li>
            <li>
              Participated in Agile workflows, supporting iterative development
              and team coordination.
            </li>
            <li>
              Applied structured problem-solving to debug systems and improve
              performance.
            </li>
          </ul>
        </div>

        <div className='experience-item'>
          <h3>Instructional Leader</h3>
          <p>Various Institutions | 2011 – 2022</p>

          <ul>
            <li>
              Managed high-volume workflows and competing priorities in
              fast-paced environments.
            </li>
            <li>
              Designed data-driven systems that improved performance outcomes by
              up to 78%.
            </li>
            <li>
              Analyzed performance data to identify trends, gaps, and actionable
              insights.
            </li>
            <li>
              Collaborated with cross-functional stakeholders to implement
              process improvements.
            </li>
            <li>
              Investigated discrepancies, identified root causes, and
              implemented targeted solutions.
            </li>
            <li>
              Maintained detailed records and documentation to ensure accuracy
              and accountability.
            </li>
          </ul>
        </div>
      </section>

      <section className='resume-section'>
        <h2>Education</h2>

        <ul>
          <li>Software Development Certificate – Code Differently (2025)</li>
          <li>
            Post-Master Certification (Curriculum, Instruction & Assessment) –
            Walden University (2023)
          </li>
          <li>M.S. Education – Holy Family University (2014)</li>
          <li>B.A. English – College of New Rochelle (2010)</li>
        </ul>
      </section>

      <section className='resume-section'>
        <h2>Certifications</h2>

        <ul>
          <li>Certified ScrumMaster – Scrum Alliance (2024)</li>
          <li>Responsive Web Design – FreeCodeCamp (2024)</li>
          <li>Learn JavaScript – Codecademy (2024)</li>
          <li>Introduction to Cybersecurity – Cisco (2026)</li>
          <li>
            Pennsylvania Level II Teaching Certification – English (Grades 7–12)
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Resume;
