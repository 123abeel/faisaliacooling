import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import rf from "../../Assets/Projects/refrigeratorrepair.jpeg";
import freezer from "../../Assets/Projects/freezer.jpeg";
import maintainenece from "../../Assets/Projects/refmaintainence.jpeg";
import ice from "../../Assets/Projects/ice.jpeg";
import appliance from "../../Assets/Projects/appliance.jpeg";
import troubleshoot from "../../Assets/Projects/refrigeratortroubleshooting.jpeg";
import replacingparts from "../../Assets/Projects/replacingparts.jpeg";
import compressor from "../../Assets/Projects/compressor.jpeg";
import ref1 from "../../Assets/Projects/ref1.jpg";
import ref2 from "../../Assets/Projects/ref2.jpg";
import ref3 from "../../Assets/Projects/ref3.jpg";
import ref4 from "../../Assets/Projects/ref4.jpg";
import ref5 from "../../Assets/Projects/ref5.jpg";
import ref6 from "../../Assets/Projects/ref6.jpg";
import ref7 from "../../Assets/Projects/ref7.jpg";
import ref8 from "../../Assets/Projects/ref8.jpg";
import ref9 from "../../Assets/Projects/ref9.jpg";
import ref10 from "../../Assets/Projects/ref10.jpg";
import ref11 from "../../Assets/Projects/ref11.jpg";
import ref12 from "../../Assets/Projects/ref12.jpg";
import ref13 from "../../Assets/Projects/ref13.jpg";
import ref14 from "../../Assets/Projects/ref14.jpg";
import ref15 from "../../Assets/Projects/ref15.jpg";
import ref16 from "../../Assets/Projects/ref16.jpg";
import ref17 from "../../Assets/Projects/ref17.jpg";
import ref18 from "../../Assets/Projects/ref18.jpg";
import ref19 from "../../Assets/Projects/ref19.jpg";
import ref20 from "../../Assets/Projects/ref20.jpg";
import ref21 from "../../Assets/Projects/ref21.jpg";
import ref22 from "../../Assets/Projects/ref22.jpg";
import ref23 from "../../Assets/Projects/ref23.jpg";
import ref24 from "../../Assets/Projects/ref24.jpg";
// import ref25 from "../../Assets/Projects/ref25.jpg"; // Remove this line
import ref26 from "../../Assets/Projects/ref26.jpg";

// Custom CSS for image sizing
const styles = {
  projectImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '250px',
    objectFit: 'cover',
  },
};

function ProjectCard({ imgPath, title, description, imgClass }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} className={imgClass} style={styles.projectImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Refrigerator and Freezer <strong className="purple">Repair Services</strong>
        </h1>
        <p style={{ color: "white" }}>
          If your refrigerator or freezer is not cooling or has stopped working altogether, it's crucial to find a reliable repair service. Our expert technicians specialize in refrigerator and freezer repairing in Obhur-al-Shamaliya, ensuring your appliance is up and running in no time.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rf}
              title="Refrigerator Repair"
              description="We handle all types of refrigerator problems, from minor issues to major repairs, including refrigerator compressor repair and refrigerator ice maker repair."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freezer}
              title="Freezer Repairs"
              description="Whether it's a freezer compressor problem or a general issue, our technicians provide comprehensive freezer repair services."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maintainenece}
              title="Fridge Maintenance"
              description="Regular maintenance services for your fridge to prevent future breakdowns."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ice}
              title="Ice Maker Repair"
              description="Expert repair services for ice makers in your refrigerator."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appliance}
              title="Appliance Repair Service"
              description="Comprehensive repair services for all your home appliances, including washers and dryers."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={troubleshoot}
              title="Refrigerator Troubleshoot"
              description="Diagnose and troubleshoot common refrigerator problems like refrigerator not cooling or fridge not working."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={replacingparts}
              title="Fridge Replacement Parts"
              description="We provide high-quality refrigerator repair parts and fridge replacement parts to ensure long-lasting solutions."
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compressor}
              title="Compressor Gas Filling"
              description="Expert refrigerator compressor gas filling and repair services, ensuring your fridge and freezer are efficiently cooling."
              imgClass="project-image"
            />
          </Col>
        </Row>

        <h2 className="project-heading" style={{ paddingTop: "20px" }}>
          Our <strong className="purple">Recent Works</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref1}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref2}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref3}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref4}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref5}
           
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref6}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref7}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref8}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref9}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref10}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref11}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref12}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref13}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref14}
             
              imgClass="project-image"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref15}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref16}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref17}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref18}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref19}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref20}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref21}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref22}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref23}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref24}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ref26}
             
              imgClass="project-image"
            />
          </Col>

                   
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
