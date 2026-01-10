import React from 'react'

export default function Journey() {
  return (
    <>
      <section className="journey" id="journey">
        <h2>My Foundational Journey</h2>
        <p>
          During my studies in Data Science at TH OWL, I developed a strong foundation in various aspects of computer
          science:
        </p>
        <ul>
          <li>Fundamentals in Mathematics and Statistics</li>
          <li>Object-Oriented and Procedural Programming</li>
          <li>Experience in Python, C#, JavaScript, Java, SQL</li>
          <li>Experience with PyTorch, Pandas, and Matplotlib</li>
          <li>
            Experience in Machine Learning in Supervised and Unsupervised Learning (in the context of Computer
            Vision)
          </li>
          <li>Experience with Image Data, Tabular Data, and Geodata</li>
          <li>Experience in Mobile App Development with .NET MAUI, Android Studio (Java), and React Native (JavaScript)</li>
          <li>Experience in Optimizing Memory Usage and Code Performance in Python</li>
          <li>Experience in Integrating LLM APIs into Own Applications</li>
          <li>Soft Skills in Time Management, Project Management, and Presentations</li>
        </ul>
      </section>

      <section className="container journey">
        <h3>Work Experience</h3>
        <div className="timeline" aria-label="Career and learning timeline">
          <div className="timeline-item">
            <div>
              <div className="timeline-dot"></div>
              <div className="timeline-date">07/2021-01/2024</div>
            </div>
            <div className="timeline-content">
              <h4>Apprenticeship as Computer Science Expert</h4>
              <p className="muted">Phoenix Contact GmbH & Co. KG.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">01/2024-08/2025</div>
            <div className="timeline-content">
              <h4>Working Student in the field of Data-Driven Apps and Computer Vision Tasks</h4>
              <p className="muted">Phoenix Contact GmbH & Co. KG.</p>
            </div>
          </div>
        </div>

        <h3>Learning path</h3>
        <div className="timeline" aria-label="Career and learning timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">09/2022-08/2025</div>
            <div className="timeline-content">
              <h4>B.Sc. Data Science</h4>
              <p className="muted">TH OWL — University of Applied Sciences.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
