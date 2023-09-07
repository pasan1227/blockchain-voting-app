import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faUserCheck,
  faPoll,
  faClock,
  faUsers,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const FeatureSection = () => {
  const features = [
    {
      icon: faShieldAlt,
      title: "Secure & Trustworthy",
      description:
        "Our blockchain-based system ensures the highest level of security and trust in the voting process.",
    },
    {
      icon: faUserCheck,
      title: "Verified Voters",
      description:
        "We use multi-factor authentication to verify the identity of eligible voters, ensuring a fair election.",
    },
    {
      icon: faPoll,
      title: "Transparent Voting",
      description:
        "Our platform provides complete transparency, allowing voters to verify the authenticity of each vote.",
    },
    {
      icon: faClock,
      title: "Real-time Updates",
      description:
        "Stay informed with real-time updates on voting progress and results.",
    },
    {
      icon: faUsers,
      title: "Scalable Solutions",
      description:
        "Our system scales effortlessly to accommodate elections of any size, from local to national.",
    },
    {
      icon: faLock,
      title: "Privacy Protection",
      description:
        "We prioritize voter privacy by encrypting and securely storing personal information.",
    },
  ];

  return (
    <section id="features" className="p-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Why Choose B-Vote?</h2>
        <Row>
          {features.map((feature, index) => (
            <Col className="p-2" key={index} md={4}>
              <Card className="text-center h-100">
                <Card.Body className="p-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="fa-3x mb-3"
                  />
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;
