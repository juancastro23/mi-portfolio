import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import kuboo from "../../Assets/Projects/kuboo.jpg";
import neobiosur from "../../Assets/Projects/Neobiosur.jpeg";
import godstyleWeb from "../../Assets/Projects/godstyle_web.png";
import godstyleApp from "../../Assets/Projects/godstyle_app.png";
import dptelemetry from "../../Assets/Projects/dptelemetry.png";
import inmalua from "../../Assets/Projects/inmalua.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}  className="g-4">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kuboo}
              isBlog={false}
              title="Kuboo"
              description="Kubo is a technology company specialized in creating innovative digital solutions. With over 15 years of experience and more than 150 completed projects, they offer services in web platforms, mobile applications, fintech solutions, and Industry 4.0. Their work combines consulting, design, implementation, and continuous support to drive the digital transformation of SMEs, startups, and large companies."
              /*
              ghLink="https://github.com/soumyajit4419/Chatify"
              */
              demoLink="https://kuboo.es/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neobiosur}
              isBlog={false}
              title="Neobiosur"
              description="Neobiosur, based in Dos Hermanas (Seville), is a leading company in biomass heating systems for homes. Specializing in wood pellets, they offer personalized advice, efficient distribution, and professional technical support. Their solutions combine environmental sustainability, economic savings, and customer satisfaction, delivering projects that ensure comfort and energy efficiency."
            // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.neobiosur.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={godstyleWeb}
              isBlog={false}
              title="GodStyle - Web"
              description="GodStyle is a web platform specialized in appointment management for hairdressers and their clients. For customers, it offers fast online booking, service and price consultation, appointment history, and automatic notifications. For professionals, it provides schedule management, service and pricing control, client communication, and performance statistics. GodStyle streamlines the client-stylist relationship, enhancing both efficiency and user experience."
              ghLink="https://github.com/juancastro23/juanrepo"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={godstyleApp}
              isBlog={false}
              title="GodStyle - App"
              description="GodStyle is a mobile application focused on appointment management for hair salons. It offers clients quick bookings, access to services and prices, appointment history, and automatic notifications. For professionals, it provides agenda management, control of services and rates, direct communication with clients, and real-time performance statistics. Its proposal combines convenience, efficiency, and an improved customer experience."
              ghLink="https://github.com/juancastro23/juanrepo"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dptelemetry}
              isBlog={false}
              title="DPTelemetry"
              description="DPTelemetry is a mobile application designed to analyze real-time telemetry data during racing sessions. Compatible with the CPA5420 device, it enables drivers and teams to study every detail of their track performance."
              demoLink="https://dptelemetry.com"  // ← Enlace a la web
              storeLink="https://play.google.com/store/apps/details?id=com.xtrangersoftware.dptelemetry&hl=es_419"  // ← Enlace a la app
              />
            </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inmalua}
              isBlog={false}
              title="Inma Lua Completos y Modas"
              description="Inma Lua is a boutique that brings together style, elegance, and personality. Our collection features carefully selected clothing and accessories designed to make every woman feel confident and unique. From timeless classics to the latest trends, Inma Lua offers pieces that combine quality, comfort, and a touch of sophistication — perfect for any occasion."
              demoLink="https://www.inmalua.com/"  // ← Enlace a la web
              />
            </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
