import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import Footer from "../components/Footer";

const PollingStation = (props) => {
  const [candidate1URL, setCandidate1URL] = useState(
    "https://cdn3.iconfinder.com/data/icons/iconpark-vol-9/48/loading-one-1024.png"
  );

  const [candidate2URL, setCandidate2URL] = useState(
    "https://cdn3.iconfinder.com/data/icons/iconpark-vol-9/48/loading-one-1024.png"
  );

  const [showResults, setShowResults] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [candidate1Votes, setCandidate1Votes] = useState(0);
  const [candidate2Votes, setCandidate2Votes] = useState(0);
  const [prompt, setPrompt] = useState("--");

  useEffect(() => {
    const getInfo = async () => {
      let promptName = localStorage.prompt;

      let voteCount = await props.viewMethod("getVotes", {
        prompt: promptName,
      });

      console.log(voteCount);
      setCandidate1Votes(voteCount[0]);
      setCandidate2Votes(voteCount[1]);

      setCandidate1URL(
        await props.viewMethod("getUrl", {
          prompt: localStorage.getItem("prompt"),
          name: localStorage.getItem("Candidate1"),
        })
      );

      setCandidate2URL(
        await props.viewMethod("getUrl", {
          prompt: localStorage.getItem("prompt"),
          name: localStorage.getItem("Candidate2"),
        })
      );

      setPrompt(localStorage.getItem("prompt"));

      let didUserVote = await props.viewMethod("didParticipate", {
        prompt: localStorage.getItem("prompt"),
        user: props.wallet.accountId,
      });

      setShowResults(didUserVote);
      setButtonStatus(didUserVote);
    };

    getInfo();
  }, [showResults]);

  const addVote = async (index) => {
    setButtonStatus(true);
    await props.callMethod("addVote", {
      prompt: localStorage.getItem("prompt"),
      index: index,
    });

    await props.callMethod("recordUser", {
      prompt: localStorage.getItem("prompt"),
      user: props.wallet.accountId,
    });

    let voteCount = await props.viewMethod("getVotes", {
      prompt: localStorage.getItem("prompt"),
    });

    setCandidate1Votes(voteCount[0]);
    setCandidate2Votes(voteCount[1]);

    alert("Thanks for voting!");

    setShowResults(true);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center my-5">
          <Col lg={4}>
            <div className="text-center">
              <h2>Poll Prompt</h2>
              <p>{prompt}</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-5">
          <Col lg={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Candidate 1</Card.Title>
                <Card.Text>
                  Vote for your favorite candidate by clicking the "Vote" button
                  below.
                </Card.Text>
                <img
                  src={candidate1URL}
                  alt="Candidate 1"
                  className="img-fluid rounded"
                />
                {showResults && (
                  <div className="mt-3">
                    <h4>Total Votes</h4>
                    <p>{candidate1Votes}</p>
                  </div>
                )}
                <Button
                  disabled={buttonStatus}
                  onClick={() => addVote(0)}
                  variant="primary"
                  className="mt-3"
                >
                  Vote
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Candidate 2</Card.Title>
                <Card.Text>
                  Vote for your favorite candidate by clicking the "Vote" button
                  below.
                </Card.Text>
                <img
                  src={candidate2URL}
                  alt="Candidate 2"
                  className="img-fluid rounded"
                />
                {showResults && (
                  <div className="mt-3">
                    <h4>Total Votes</h4>
                    <p>{candidate2Votes}</p>
                  </div>
                )}
                <Button
                  disabled={buttonStatus}
                  onClick={() => addVote(1)}
                  variant="primary"
                  className="mt-3"
                >
                  Vote
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PollingStation;
