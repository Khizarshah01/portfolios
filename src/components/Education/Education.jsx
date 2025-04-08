import React from "react";
import "../Education/Education.css";

const educationData = [
  {
    title: "Diploma in Computer Engineering",
    institute: "Siddhivinayak Technical Campus",
    year: "2020 - 2023",
    gpa: "PERCENT: 91%"
  },
  {
    title: "B.E in Computer Science",
    institute: "Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)",
    year: "2023 - 2027",
    gpa: "CGPA: 7.5"
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-heading">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.institute}</p>
              <span>{item.year}</span>
              <span>{item.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
