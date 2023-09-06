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
      title: "Blockchain Security",
      description:
        "Utilizes blockchain technology to provide a highly secure and tamper-proof voting process, ensuring the integrity of the election results.",
    },
    {
      icon: faUserCheck,
      title: "User Verification",
      description:
        "Verifies the identity of eligible voters through multi-factor authentication, ensuring that only authorized individuals can cast their votes.",
    },
    {
      icon: faPoll,
      title: "Transparency",
      description:
        "Offers complete transparency in the voting process, allowing voters and observers to independently verify the authenticity of each vote.",
    },
    {
      icon: faClock,
      title: "Real-time Updates",
      description:
        "Provides real-time updates on the voting progress and results, giving stakeholders immediate access to election data.",
    },
    {
      icon: faUsers,
      title: "Scalability",
      description:
        "Scales effortlessly to accommodate elections of any size, from small local elections to large national or international ones.",
    },
    {
      icon: faLock,
      title: "Privacy",
      description:
        "Ensures voter privacy by encrypting and securely storing personal information, making it inaccessible to unauthorized parties.",
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
                  <FontAwesomeIcon icon={feature.icon} className="fa-3x mb-2" />
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
