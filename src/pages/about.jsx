import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div>
      {/* About Section */}
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h1>About Us</h1>
            <p>
              We are a leading company in tech innovation, providing quality products and services to
              customers worldwide. Our mission is to empower people with cutting-edge technology that
              improves their everyday lives.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Mission Section */}
      <Container>
        <Row className="my-5">
          <Col>
            <h2>Our Mission</h2>
            <p>
              Our mission is to create products that seamlessly blend design with functionality, making
              technology more accessible and enjoyable for everyone. We strive to foster a culture of
              innovation, collaboration, and excellence.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Team Section */}
      <Container>
        <Row className="my-5">
          <Col>
            <h2>Meet the Team</h2>
            <p>Our team consists of passionate and talented individuals dedicated to delivering the best for our customers.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  John is our CEO, a visionary leader with over 20 years of experience in the tech industry.
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>
                  Jane is our Lead Developer, responsible for turning ideas into cutting-edge software products.
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Michael Brown</Card.Title>
                <Card.Text>
                  Michael is our Chief Designer, ensuring that all our products are both functional and beautiful.
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="my-5">
        <Row>
          <Col>
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to know more, feel free to reach out!</p>
            <Button variant="success" href="mailto:info@company.com">Contact Us</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
