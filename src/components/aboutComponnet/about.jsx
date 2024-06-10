import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="aboutComponent">
      <div className="aboutComponentDiv1">
        <h1>About</h1>
        <p>
          To inspire innovation and entrepreneurship among students, the
          Entrepreneurship & Innovation (E & I)
          <br />
          Club at Khan Lab School is organizing the first ever Pitch Day contest
          at KLS on Saturday, June 1st 2024.
        </p>
      </div>
      <div className="aboutComponentDiv1">
        <h1>What is Pitch Day?</h1>
        <p>
          It's a day when aspiring student entrepreneurs present their
          innovative ideas, products or solutions to a panel <br />
          of investors and entrepreneurs! The top pitches will receive monetary
          awards to help build their ideas.
        </p>
      </div>
      <div className="aboutComponentDiv1">
        <h1>Eligibility & Contest Rules:</h1>
        <div style={{ textAlign: "left", display: "inline-block" }}>
          <ul>
            <li>Open to any HS student from KLS or other schools.</li>
            <li>Participate individually or as a team of upto 4 students.</li>
            <li>
              Live Pitch your idea for 4-6 minutes followed by Q & A from
              judges/audience.
            </li>
            <li>
              Your idea can be a for-profit, non-profit or a project that
              benefits numerous people or the world around us.
            </li>
            <li>
              Student makers can also pitch their creative products for an
              entrepreneurial venture.
            </li>
            <li>No prior experience or incorporation required!</li>
            <li>
              Your pitch should be business-like and the dress code is smart
              casual.
            </li>
          </ul>
        </div>
      </div>
      <div className="aboutComponentDiv1">
        <h1>Sponsors</h1>
        <div className="aboutComponentImg">
          <img src="images/sponser1.webp" />
          <img src="images/sponser3.webp" />
          <img src="images/sponser2.webp" />
        </div>
      </div>
    </div>
  );
}
