import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdfES from "../../Assets/JUAN CASTRO RODRÍGUEZ_ES_CV.pdf";
import pdfEN from "../../Assets/JUAN CASTRO RODRÍGUEZ_EN_CV.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeViewer() {
  const [lang, setLang] = useState("en");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setPageNumber(1);
  }, [lang]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const pdfFile = lang === "es" ? pdfES : pdfEN;

  // Textos según idioma
  const texts = {
    es: {
      switchLangBtn: "Ver en Inglés",
      downloadBtn: "Descargar CV",
      nextBtn: "Siguiente",
      prevBtn: "Anterior",
      pageInfo: `Página ${pageNumber} de ${numPages || "--"}`,
    },
    en: {
      switchLangBtn: "View in Spanish",
      downloadBtn: "Download CV",
      nextBtn: "Next",
      prevBtn: "Previous",
      pageInfo: `Page ${pageNumber} of ${numPages || "--"}`,
    },
  };

  const t = texts[lang];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Botón para cambiar idioma */}
        <Row style={{ justifyContent: "center", position: "relative", margin: "20px 0" }}>
          <Button
            variant="secondary"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{ maxWidth: "250px" }}
          >
            {t.switchLangBtn}
          </Button>
        </Row>

        {/* Botón descargar arriba */}
        <Row style={{ justifyContent: "center", position: "relative", margin: "20px 0" }}>
          <Button variant="primary" href={pdfFile} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;{t.downloadBtn}
          </Button>
        </Row>

        {/* PDF y navegación */}
        <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Navegación con botones */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: 10,
            marginBottom: 20,
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Button
            variant="primary"
            onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
            disabled={pageNumber === numPages}
            style={{ maxWidth: "250px", flexGrow: 1 }}
          >
            {t.nextBtn} <AiOutlineRight style={{ marginLeft: "8px" }} />
          </Button>

          <span style={{ color: "#555", fontWeight: "600", minWidth: "150px", textAlign: "center" }}>
            {t.pageInfo}
          </span>

          <Button
            variant="primary"
            onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
            disabled={pageNumber === 1}
            style={{ maxWidth: "250px", flexGrow: 1 }}
          >
            <AiOutlineLeft style={{ marginRight: "8px" }} /> {t.prevBtn}
          </Button>
        </Row>

        {/* Botón descargar abajo */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdfFile} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;{t.downloadBtn}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeViewer;
