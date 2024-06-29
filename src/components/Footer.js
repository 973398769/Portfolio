import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {FaLinkedinIn, FaTelegram} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Freya Liu</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} FL</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                  href="https://github.com/973398769"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <AiFillGithub/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://t.me/Freyanini"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
              >
                <FaTelegram/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/freya-liu-01354b289/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/*<li className="social-icons">*/}
            {/*  <a*/}
            {/*    href="https://www.instagram.com/soumyajit4419"*/}
            {/*    style={{ color: "white" }}*/}
            {/*    target="_blank" */}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    <AiFillInstagram />*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
