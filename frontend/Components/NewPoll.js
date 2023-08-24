import React, { useRef, useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

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
    <Container style={{ marginTop: "10px" }}>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Voting Prompt</Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Prompt</Form.Label>
                <Form.Control
                  ref={promptRef}
                  placeholder="Add Prompt"
                ></Form.Control>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Row>
      <Row style={{ marginTop: "5vh" }}>
        <Col className="justify-content-center d-flex">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Candidate 1 Information</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Enter Your Information for your first candidate
              </Card.Subtitle>
              <Form.Group className="mb-3">
                <Form.Label>Candidate 1 Name</Form.Label>
                <Form.Control
                  ref={candidateName1}
                  placeholder="Enter Candidate Name"
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Candidate 1 Image URL</Form.Label>
                <Form.Control
                  ref={candidateName1URL}
                  placeholder="Enter Candidate Image URL"
                ></Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col className="justify-content-center d-flex">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Candidate 2 Information</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Enter Your Information for your second candidate
              </Card.Subtitle>
              <Form.Group className="mb-3">
                <Form.Label>Candidate 2 Name</Form.Label>
                <Form.Control
                  ref={candidateName2}
                  placeholder="Enter Candidate Name"
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Candidate 2 Image URL</Form.Label>
                <Form.Control
                  ref={candidateName2URL}
                  placeholder="Enter Candidate Image URL"
                ></Form.Control>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "10vh" }}>
        <Button
          disabled={disableButton}
          onClick={sendToBlockchain}
          variant="primary"
        >
          Submit
        </Button>
      </Row>
    </Container>
  );
};

export default NewPoll;
