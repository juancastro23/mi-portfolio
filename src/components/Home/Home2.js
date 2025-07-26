import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
           <p className="home-about-body">
              I’m passionate about software development and continuous learning.
              <br />
              <br />I have hands-on experience with technologies like
              <i>
                <b className="purple"> C#, JavaScript, PHP, and Java. </b>
              </i>
              <br />
              <br />
              I focus on building
              <i>
                <b className="purple"> modern web and mobile applications, </b>
              </i>
              always aiming to create efficient, scalable, and user-friendly solutions.
              <br />
              <br />
              My areas of interest include
              <i>
                <b className="purple"> web technologies and backend development, </b>
              </i>
              as well as exploring fields like
              <i>
                <b className="purple"> blockchain and cloud computing. </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my skills using
              <b className="purple"> Node.js </b> and
              <i>
                <b className="purple"> modern JavaScript libraries and frameworks </b>
              </i>
              such as
              <i>
                <b className="purple"> React.js and Next.js. </b>
              </i>
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/juancastro23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/OneCastro__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/juan-castro-rodríguez-15a6862b0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/onecastro_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
