import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Juan Castro </span>
        from <span className="purple">Spain.</span>
        <br />
        I’m currently completing a double degree in Web and Multiplatform Development.
        <br />
        I have experience in real-world projects, both academic and professional, building useful and efficient software solutions.
        <br />
        <br />
        Apart from coding, some other activities that I enjoy:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Playing video games
        </li>
        <li className="about-activity">
          <ImPointRight /> Learning new technologies
        </li>
        <li className="about-activity">
          <ImPointRight /> Watching anime and series
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Focus on creating technology that simplifies life and solves real problems."
      </p>
      <footer className="blockquote-footer">Juan Castro</footer>
    </blockquote>
    </Card.Body>
    </Card>

  );
}

export default AboutCard;
