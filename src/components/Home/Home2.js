import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myimg.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import WhatsAppButton from "./WhatsAppButton"; // Import the WhatsAppButton component
import CallLogButton from "./CallLogButton"; // Import the CallLogButton component

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Us <span className="purple"> INTRODUCE </span> Ourself
            </h1>
            <p className="home-about-body">
              <span className="purple">
                Expert AC, Washing Machine, Fridge/Refrigerator Repair Services
                in Obhur Al Shamaliya
              </span>
              <br />
              <br />
              For over <span className="purple">25 years</span>, our team at{" "}
              <span className="purple">Al-Faisalia Cooling</span> has been
              dedicated to providing{" "}
              <span className="purple">
                top-notch AC, washing machine, fridge/refrigerator repair
                services
              </span>{" "}
              to the residents of <span className="purple">Obhur Al Shamaliya</span>
              . With a proven track record of <span className="purple">high success rates</span> and a{" "}
              <span className="purple">friendly, approachable attitude</span>, we
              have established ourselves as the <span className="purple">go-to experts</span> for all
              your <span className="purple">appliance repair needs</span>.
              <br />
              <br />
              Our team of <span className="purple">highly trained and experienced technicians</span> is
              equipped to handle a wide range of appliances, from{" "}
              <span className="purple">air conditioners</span> to{" "}
              <span className="purple">washing machines</span>,{" "}
              <span className="purple">fridges/refrigerator</span>, ensuring that
              your appliances are in <span className="purple">good hands</span>.
              <br />
              <br />
              Whether you need <span className="purple">AC repair</span>,{" "}
              <span className="purple">washing machine repair </span>,{" "}
              <span className="purple">fridge </span>, or{" "}
              <span className="purple">refrigerator repair </span> in{" "}
              <span className="purple">Obhur Al Shamaliya</span>, we are here to
              help you get your appliances{" "}
              <span className="purple">up and running quickly and efficiently</span>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
              />
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
                  href="https://www.facebook.com/profile.php?id=100093370307467&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/faisa.lashraf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/faisal-ashraf-014601283"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://business.google.com/v/_/08055064693609408714/8ca5/_?"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGooglemybusiness />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <WhatsAppButton /> {/* Add the WhatsAppButton component */}
      <CallLogButton /> {/* Add the CallLogButton component */}
    </Container>
  );
}

export default Home2;
