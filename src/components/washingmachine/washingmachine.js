import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import washrepair from "../../Assets/Projects/wash repair.jpeg";
import washmaintainence from "../../Assets/Projects/washmaintainence.jpeg";
import washinstall from "../../Assets/Projects/washinstall.jpeg";
import washtroubleshoot from "../../Assets/Projects/washtroubleshoot.jpeg";
import washdrum from "../../Assets/Projects/wahdrum.jpeg";
import replacingparts from "../../Assets/Projects/replacingparts.jpeg";
import washupgrade from "../../Assets/Projects/washupgrade.jpeg";
import washdrain from "../../Assets/Projects/washdrain.jpeg";
import washfilter from "../../Assets/Projects/washfilter.jpeg";
import washleak from "../../Assets/Projects/washleaking.jpeg";
import washnoise from "../../Assets/Projects/washnoise.jpeg";
import washnotclean from "../../Assets/Projects/washnotclean.jpeg";
import washspin from "../../Assets/Projects/washspin.jpeg";
import wash1 from "../../Assets/Projects/wash1.jpg";
import wash2 from "../../Assets/Projects/wash2.jpg";
import wash3 from "../../Assets/Projects/wash3.jpg";
import wash4 from "../../Assets/Projects/wash4.jpg";
import wash5 from "../../Assets/Projects/wash5.jpg";
import wash6 from "../../Assets/Projects/wash6.jpg";
import wash7 from "../../Assets/Projects/wash7.jpg";
import wash8 from "../../Assets/Projects/wash8.jpg";
import wash9 from "../../Assets/Projects/wash9.jpg";
import wash10 from "../../Assets/Projects/wash10.jpg";
import wash11 from "../../Assets/Projects/wash11.jpg";
import wash12 from "../../Assets/Projects/wash12.jpg";
import wash13 from "../../Assets/Projects/wash13.jpg";
import wash14 from "../../Assets/Projects/wash14.jpg";
import wash15 from "../../Assets/Projects/wash15.jpg";
import wash16 from "../../Assets/Projects/wash16.jpg";
import wash17 from "../../Assets/Projects/wash17.jpg";
import wash18 from "../../Assets/Projects/wash18.jpg";
import wash19 from "../../Assets/Projects/wash19.jpg";
import wash20 from "../../Assets/Projects/wash20.jpg";
import wash21 from "../../Assets/Projects/wash21.jpg";
import wash22 from "../../Assets/Projects/wash22.jpg";
import wash23 from "../../Assets/Projects/wash23.jpg";
import wash24 from "../../Assets/Projects/wash24.jpg";
import wash25 from "../../Assets/Projects/wash25.jpg";



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
          Washing Machine <strong className="purple">Repair Services</strong>
        </h1>
        <p style={{ color: "white" }}>
        Welcome to Obhur al Shamaliya premier destination for expert Washing Machines  services. At Faisaliah Cooling, we specialize in delivering reliable solutions to keep your home or office cool and comfortable year-round. Whether you need emergency AC repair, professional HVAC maintenance, or top-rated installation services, our experienced technicians are here to ensure your satisfaction.<br></br>

Experience peace of mind with our comprehensive AC repair solutions, designed to be fast and efficient, ensuring your air conditioner operates at its best when you need it most. We pride ourselves on being trusted service providers in Obhur al Shamaliah, delivering quality you can count on for every cooling need.<br></br>

Maintain optimal performance and extend the lifespan of your air conditioner with our affordable maintenance plans, tailored to suit your budget and schedule. Our team of experienced HVAC technicians is your go-to for expert advice and seamless repairs, ensuring your comfort is always our priority.<br></br>

Choose Faisaliah Cooling for all your air conditioning needs in Obhur al Shamaliya and discover why we're the preferred choice for homes and businesses alike. Contact us today to schedule your next service and experience the difference firsthand.
Our skilled technicians specialize in repairing top brands such as GE, Samsung, LG, Bosch, and Whirlpool washing machines. Whether you're dealing with a front load washer issue or need Maytag washer repairs, we offer comprehensive solutions. Our services include clothes washer maintenance, parts replacement, and troubleshooting for various models. Explore our affordable options for commercial and residential washing machine repairs. Contact us today for quality service and reliable repairs for your laundry appliances!


        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washrepair}
      title="Washing Machine Repair"
      description="We handle all types of washing machine problems, from minor issues to major repairs, ensuring your machine operates efficiently."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washinstall}
      title="Washing Machine Installation"
      description="Expert washing machine installation services to ensure optimal performance and energy efficiency for your home."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washmaintainence}
      title="Washing Machine Maintenance"
      description="Regular maintenance services to keep your washing machine running smoothly and prevent future breakdowns."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washtroubleshoot}
      title="Washing Machine Troubleshooting"
      description="Diagnose and troubleshoot common washing machine problems to restore functionality quickly and efficiently."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washdrum}
      title="Washing Machine Drum Cleaning"
      description="Comprehensive drum cleaning services to improve performance and extend the life of your washing machine."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washupgrade}
      title="Washing Machine System Upgrade"
      description="Upgrade your washing machine system for improved efficiency, performance, and cost savings."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washfilter}
      title="Washing Machine Filter cleaning"
      description="Replace your washing machine filters regularly to maintain clean operation and optimize performance."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washdrain}
      title="Washing Machine Not Draining"
      description="Resolve drainage issues to ensure your washing machine works efficiently and effectively."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washleak}
      title="Washing Machine Leaking Water"
      description="Identify and repair leaks to keep your home dry and your washing machine efficient."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washnoise}
      title="Washing Machine Making Strange Noises"
      description="Pinpoint and resolve noise issues from rattling to squealing to restore quiet operation."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washnotclean}
      title="Washing Machine Not Cleaning Properly"
      description="Diagnose and fix issues preventing your washing machine from cleaning effectively, ensuring your clothes come out spotless."
      imgClass="project-image"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={washspin}
      title="Washing Machine Not Spinning"
      description="Address spinning issues to restore proper function and ensure your clothes are cleaned thoroughly."
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
              imgPath={wash1}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash2}
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash3}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash4}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash5}
           
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash6}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash7}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash8}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash9}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash10}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash11}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash12}
              
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash13}
             
              imgClass="project-image"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash14}
             
              imgClass="project-image"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash15}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash16}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash17}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash18}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash19}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash20}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash21}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash22}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash23}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash24}
             
              imgClass="project-image"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wash25}
             
              imgClass="project-image"
            />
          </Col>


         
                   
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
