import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Defi-Yield Farming"
              description="I developed a DeFi project focused on Yield Farming. The contract is developed in Solidity, and its primary function is to distribute ERC20 token rewards to users based on their proportion of staked LP tokens. Users stake their LP tokens into a pool and receive ERC20 rewards based on the amount and duration of their stake."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Defi-Token Sale&Airdrop"
              description="I successfully implemented the Token Sales feature on a DeFi platform, offering project developers a safe, transparent, and efficient means for token distribution. Through this platform, developers can launch their initial token offerings, allowing investors to partake in the sales and obtain tokens."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NFT launchpad"
              description="I developed an NFT launchpad feature, which is part of a decentralized NFT trading platform. We offer a simple and straightforward trading process, along with multiple payment options, to provide users with a safe, efficient, and reliable trading experience."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Video Style Transfer"
              description="I designed the SCTAda model, which is a GAN-based video style transfer model. It achieves high-quality, realistic content generation with coherent styling."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Quality Enhancement for Images and Videos"
              description="I significantly enhanced the quality of images and videos by integrating AI models specialized in image and video processing. Additionally, I introduced motion guidance into video generation to control the movement of generated characters, further refining the dynamics and realism of video content."
              demoLink="https://replicate.com/973398769/hands-restoration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Multi-headed Computer Vision Model "
              description="Developed 'Ladon,' a multi-functional computer vision model, integrating background segmentation and gesture recognition using MobileNetV2 and DeepLabV3Plus for enhanced accuracy."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
