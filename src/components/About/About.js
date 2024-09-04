import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import WhatsAppButton from "../Home/WhatsAppButton"; // Import the WhatsAppButton component
import CallLogButton from "../Home/CallLogButton"; // Import the CallLogButton component

function About() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
              Welcome to <strong className="purple">Faisaliah Cooling</strong>
            </h1>
            <div style={{ textAlign: "left" }}>
              <p>Hey there, welcome to Faisaliah Cooling!</p>
              <p>
                We’ve been fixing ACs, fridges, and washing machines for over 25
                years now, and we’re still loving every minute of it. Our story
                began with a simple idea: to provide our community with
                reliable, efficient, and affordable appliance repair services.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="mb-4"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Card.Body>
                <h2 style={{ textAlign: "center" }}>Our Story</h2>
                <p>
                  Back in 2000, we started as a small, local business with a big
                  passion for helping people keep their homes running smoothly.
                  Fast forward to today, and we’ve become a trusted name in
                  appliance repairs. Our secret? We really care about what we
                  do, and we’re always looking for ways to improve our services.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col md={6}>
            <Card
              className="mb-4"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Card.Body>
                <h2 style={{ textAlign: "center" }}>Our Mission</h2>
                <p>
                  At Faisaliah Cooling, our mission is to make sure your
                  appliances are working perfectly so you can go about your day
                  without any hitches. We know how frustrating it can be when
                  something breaks down, and that’s why we aim to provide fast,
                  efficient repairs that get you back on track in no time.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card
              className="mb-4"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Card.Body>
                <h2 style={{ textAlign: "center" }}>Why Choose Us?</h2>
                <ul>
                  <li>
                    Experience: With over 25 years under our belt, there’s no
                    appliance issue we haven’t seen and fixed.
                  </li>
                  <li>
                    Quality Service: Our technicians are pros who make sure
                    every repair is done right the first time.
                  </li>
                  <li>
                    Customer Satisfaction: You’re our priority. We go the extra
                    mile to make sure you’re happy with our service.
                  </li>
                  <li>
                    Affordable Pricing: Great service doesn’t have to break the
                    bank. We offer competitive rates without compromising
                    quality.
                  </li>
                  <li>
                    Comprehensive Solutions: Whether it’s your AC, fridge, or
                    washing machine, we’ve got you covered.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col md={6}>
            <Card
              className="mb-4"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <Card.Body>
                <h2 style={{ textAlign: "center" }}>Meet Our Team</h2>
                <p>
                  Our team is made up of certified technicians who are
                  passionate about what they do. Each member brings a wealth of
                  experience and a commitment to providing the best service
                  possible. We’re like a family here, and we treat our customers
                  the same way.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <Card
              className="mb-4"
              style={{ backgroundColor: "transparent", borderRadius: "10px" }}
            >
              <Card.Body style={{ padding: "20px" }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                  Customer Reviews
                </h2>
                <div
                  className="elfsight-app-0e06d567-07e7-443b-ad17-b21844d7e5e2"
                  data-elfsight-app-lazy
                ></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          Get in <strong className="purple">Touch</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8}>
            <h2 style={{ textAlign: "center" }}>Contact Us</h2>
            <p style={{ textAlign: "left" }}>
              We at Faisaliah Cooling are always here to help you with your AC,
              fridge, and washing machine repair needs. With over 25 years of
              experience, our expert technicians are committed to providing
              top-notch service and customer satisfaction. Contact us today to
              schedule a repair or for any inquiries.
            </p>
            <h3 style={{ textAlign: "center" }}>Get in Touch</h3>
            <p style={{ textAlign: "left" }}>
              <strong>Phone:</strong> 0505321681 <br />
              <strong>Address:</strong>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.6042872704156!2d39.1029698!3d21.7568616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c1637bdbbda3f3%3A0xa2cc9bea97b0e9df!2z2YHZiti12YTZitmHINmE2YTYqtio2LHZitivINmI2KfZhNiq2YPZitmK2YE!5e0!3m2!1sen!2s!4v1721391090212!5m2!1sen!2s"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <h3 style={{ textAlign: "center" }}>Business Hours:</h3>
            <p style={{ textAlign: "left" }}>
              <strong>Saturday - Thursday:</strong> 10:00 AM - 11:30 PM <br />
              <strong>Friday:</strong> 4:30 AM - 11:30 PM <br />
            </p>

            <p>
              We value your feedback and are here to answer any questions you
              may have. Reach out to us today and experience the best in
              appliance repair services!
            </p>
          </Col>
        </Row>
      </Container>
      <WhatsAppButton /> {/* Add the WhatsAppButton component */}
      <CallLogButton /> {/* Add the CallLogButton component */}
    </Container>
  );
}

export default About;
