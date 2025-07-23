import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiJava, DiPython } from "react-icons/di";
import { SiNextdotjs, SiFirebase, SiDocker, SiKubernetes, SiTypescript, SiMongodb } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col> {/* TS muy demandado */}
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col> {/* Contenedores */}
      <Col xs={4} md={2} className="tech-icons"><SiKubernetes /></Col> {/* Orquestación */}
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col> {/* Muy útil y versátil */}
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col> {/* NoSQL muy usado */}
    </Row>
  );
}

export default Techstack;
