import React, { useRef, useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

import Footer from "../components/Footer";

const NewPoll = (props) => {
  const candidateName1 = useRef();
  const candidateName2 = useRef();
  const candidateName1URL = useRef();
  const candidateName2URL = useRef();
  const promptRef = useRef();

  const [disableButton, setDisableButton] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

  const sendToBlockchain = async () => {
    setDisableButton(true);
    await props.callMethod("addCandidatePair", {
      prompt: promptRef.current.value,
      name1: candidateName1.current.value,
      name2: candidateName2.current.value,
      url1: candidateName1URL.current.value,
      url2: candidateName2URL.current.value,
    });

    await props.callMethod("addToPromptArray", {
      prompt: promptRef.current.value,
    });

    await props.callMethod("initializeVotes", {
      prompt: promptRef.current.value,
    });

    alert("Return back to Home Screen");
  };

  return (
    <>
      <Container style={{ marginTop: "25px" }}>
        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="text-center">
              Create a new poll by filling out the form below. Enter a poll
              prompt, the names and image URLs of two candidates, and click the
              "Create Poll" button.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={12}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  Create a New Poll
                </Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Poll Prompt</Form.Label>
                    <Form.Control
                      ref={promptRef}
                      placeholder="Enter Poll Prompt"
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "3vh" }}>
          <Col lg={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Candidate 1</Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Candidate Name</Form.Label>
                    <Form.Control
                      ref={candidateName1}
                      placeholder="Enter Candidate Name"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                      ref={candidateName1URL}
                      placeholder="Enter Image URL"
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Candidate 2</Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Candidate Name</Form.Label>
                    <Form.Control
                      ref={candidateName2}
                      placeholder="Enter Candidate Name"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                      ref={candidateName2URL}
                      placeholder="Enter Image URL"
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Button
            disabled={disableButton}
            onClick={sendToBlockchain}
            variant="primary"
          >
            Create Poll
          </Button>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default NewPoll;
