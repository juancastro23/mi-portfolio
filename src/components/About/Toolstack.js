import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiDocker,
  SiJenkins,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiMacos /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col> {/* Control de versiones */}
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col> {/* Contenedores */}
      <Col xs={4} md={2} className="tech-icons"><SiJenkins /></Col> {/* CI/CD */}
      <Col xs={4} md={2} className="tech-icons"><SiSlack /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVercel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col> {/* Diseño UI/UX */}
    </Row>
  );
}

export default Toolstack;
