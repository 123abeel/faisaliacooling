import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import notcool from "../../Assets/Projects/notcooling .jpeg";
import acmaintainenece from "../../Assets/Projects/acmaintainence.jpeg";
import ice from "../../Assets/Projects/ice.jpeg";
import appliance from "../../Assets/Projects/appliance.jpeg";
import troubleshoot from "../../Assets/Projects/actroubleshooting.jpeg";
import replacingparts from "../../Assets/Projects/replacingparts.jpeg";
import filter from "../../Assets/Projects/filter.jpeg";
import freeze from "../../Assets/Projects/acfreeze.jpeg";
import install from "../../Assets/Projects/installation.jpeg";
import leaking from "../../Assets/Projects/leaking.jpeg";
import noise from "../../Assets/Projects/noise.jpeg";
import parts from "../../Assets/Projects/parts.jpeg";
import duct from "../../Assets/Projects/acductclean.jpeg";
import repair from "../../Assets/Projects/acrepair.jpeg";
import warm from "../../Assets/Projects/warmair.jpeg";
import ac1 from "../../Assets/Projects/ac1.jpg";
import ac2 from "../../Assets/Projects/ac2.jpg";
import ac3 from "../../Assets/Projects/ac3.jpg";
import ac4 from "../../Assets/Projects/ac4.jpg";
import ac5 from "../../Assets/Projects/ac5.jpg";
import ac6 from "../../Assets/Projects/ac6.jpg";
import ac7 from "../../Assets/Projects/ac7.jpg";
import ac8 from "../../Assets/Projects/ac8.jpg";
import ac9 from "../../Assets/Projects/ac9.jpg";
import ac10 from "../../Assets/Projects/ac10.jpg";
import ac11 from "../../Assets/Projects/ac11.jpg";
import ac12 from "../../Assets/Projects/ac12.jpg";
import ac13 from "../../Assets/Projects/ac13.jpg";
import ac14 from "../../Assets/Projects/ac14.jpg";
import ac15 from "../../Assets/Projects/ac15.jpg";


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
          Air Conditioner <strong className="purple">Repair Services</strong>
        </h1>
        <p style={{ color: "white" }}>
        Welcome to Obhur al Shamaliya premier destination for expert air conditioning services. At Faisaliah Cooling, we specialize in delivering reliable solutions to keep your home or office cool and comfortable year-round. Whether you need emergency AC repair, professional HVAC maintenance, or top-rated installation services, our experienced technicians are here to ensure your satisfaction.<br></br>

Experience peace of mind with our comprehensive AC repair solutions, designed to be fast and efficient, ensuring your air conditioner operates at its best when you need it most. We pride ourselves on being trusted service providers in Obhur al Shamaliah, delivering quality you can count on for every cooling need.<br></br>

Maintain optimal performance and extend the lifespan of your air conditioner with our affordable maintenance plans, tailored to suit your budget and schedule. Our team of experienced HVAC technicians is your go-to for expert advice and seamless repairs, ensuring your comfort is always our priority.<br></br>

Choose Faisaliah Cooling for all your air conditioning needs in Obhur al Shamaliya and discover why we're the preferred choice for homes and businesses alike. Contact us today to schedule your next service and experience the difference firsthand.


        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
    <ProjectCard
      imgPath={repair}
      title="AC Repair"
      description="We handle all types of AC problems, from minor issues to major repairs, ensuring your air conditioner operates efficiently."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={install}
      title="AC Installation"
      description="Expert AC installation services to ensure optimal performance and energy efficiency for your home or office."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={acmaintainenece}
      title="AC Maintenance"
      description="Regular maintenance services to keep your AC system running smoothly and prevent future breakdowns."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={troubleshoot}
      title="AC Troubleshooting"
      description="Diagnose and troubleshoot common AC problems to restore comfort quickly and efficiently."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={duct}
      title="AC Duct Cleaning"
      description="Comprehensive duct cleaning services to improve indoor air quality and AC efficiency."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={parts}
      title="AC System Upgrade"
      description="Upgrade your AC system for improved efficiency, comfort, and cost savings."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={filter}
      title="AC Filter Replacement"
      description="Replace your AC filters regularly to maintain clean indoor air and optimize AC performance."
      imgClass="project-image"
    />
  </Col>
        <Col md={4} className="project-card">
    <ProjectCard
      imgPath={freeze}
      title="AC Freezing Up"
      description="Resolve freezing issues by addressing airflow problems and refrigerant levels for optimal performance."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={leaking}
      title="AC Leaking Water"
      description="Identify and repair leaks to keep your home dry and your AC efficient."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={warm}
      title="AC Blowing Warm Air"
      description="Tackle airflow issues and refrigerant leaks to restore cool, refreshing air to your home."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={notcool}
      title="AC Making Strange Noises"
      description="Pinpoint and resolve noise issues from rattling to squealing to restore quiet comfort."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={noise}
      title="AC Not Cooling Properly"
      description="Diagnose and fix issues preventing your AC from cooling effectively, ensuring year-round comfort."
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
              imgPath={ac1}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac2}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac3}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac4}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac5}
           
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac6}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac7}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac8}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac9}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac10}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac11}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac12}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac13}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac14}
             
              imgClass="project-image"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ac15}
             
              imgClass="project-image"
            />
          </Col>

         
                   
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
