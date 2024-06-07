import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import my from "../../Assets/ava2.png";

import {
  AiFillGithub,
} from "react-icons/ai";
import {FaLinkedinIn, FaTelegram} from "react-icons/fa";

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
              I fell in love with programming and I have at least learnt
              something, My key specialties include… 🤷‍♂️
              <br/>
              <br/>✅Programming Languages:
              <i>
                <b className="purple"> Solidity, JavaScript, Python, Go </b>
              </i>
              <br/>✅Tools & Platforms:
              <i>
                <b className="purple"> Hardhat, Truffle, Foundry, MythX, Ethereum Virtual Machine (EVM), React </b>
              </i>
              <br/>✅Libraries/APIs:
              <i>
                <b className="purple"> Node.js, ether.js, web3.js, Openzepplin </b>
              </i>
              <br/>✅CI/CD tools:
              <i>
                <b className="purple"> Jenkins, Git, Docker </b>
              </i>
              <br/>✅Machine learning skills:
              <i>
                <b className="purple"> Machine learning algorithms, Generative models, System Design </b>
              </i>
              <br/>✅Generative AI Tools:
              <i>
                <b className="purple"> GANs, Stable Diffusion, SD inpaint, Deepfloyd-if, SDXL, Fine-Tuning
                  </b>
              </i>
              <br/>✅Languages:
              <i>
                <b className="purple">
                  Chinese (native), English (full professional proficiency, IELTS 6.5) </b>
              </i>
              <br/>
              <br/>
              I have obtained two certifications in the field of AI &nbsp;
              <i>
                <b className="purple">AWS Certified Machine Learning-Specialty </b> and &nbsp;
                <b className="purple">
                  Certified Artificial Intelligence (AI) Application Engineer (Advanced) by MIIT
                </b>
              </i>
              <br/>
              <br/>
              Additionally, I won a &nbsp;
              <i>
                <b className="purple">Silver Medal </b> in the
                <b className="purple">Kaggle-LLM Science Exam competition</b>
              </i>
              <br/>
              <br/>
              I published an article titled &nbsp;
              <i>
                <b className="purple">Dynamic Style Adaptation Network: A Comprehensive Approach for Video Style Transfer. </b> It was presented at the &nbsp;
                <b className="purple">International Conference on Image, Algorithms, and Artificial Intelligence (ICIAAI2023)</b> in Singapore
              </i>
              <br/>
              <br/>
              I am now channeling my passion into
              with <b className="purple">blockchain.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={my} className="img-fluid" alt="avatar"/>
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
                  href="https://github.com/973398769"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/Freyanini"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
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
