import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

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
    console.log(voteCount);

    alert("Thanks for voting!");

    setShowResults(true);
  };

  return (
    <Container>
      <Row>
        <Col
          className="justify-content-center d-flex"
          style={{ width: "20vw" }}
        >
          <Container>
            <Row style={{ marginTop: "5vh", backgroundColor: "#c4c4c4" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                }}
              >
                <img
                  style={{ height: "35vh", width: "35vw" }}
                  src={candidate1URL}
                />
              </div>
            </Row>
            {showResults ? (
              <Row
                className="justify-content-center d-flex"
                style={{ marginTop: "5vh" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "8vw",
                    padding: "10px",
                    backgroundColor: "#c4c4c4",
                  }}
                >
                  {candidate1Votes}
                </div>
              </Row>
            ) : null}
            <Row
              className="justify-content-center d-flex"
              style={{ marginTop: "5vh" }}
            >
              <Button disabled={buttonStatus} onClick={() => addVote[0]}>
                Vote
              </Button>
            </Row>
          </Container>
        </Col>

        <Col
          className="justify-content-center d-flex"
          style={{ width: "10vw" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "20vh",
              padding: "10==2vw",
              backgroundColor: "#c4c4c4",
              alignItems: "center",
              textAlign: "center",
              marginTop: "5vh",
            }}
          >
            {prompt}
          </div>
        </Col>
        <Col
          className="justify-content-center d-flex"
          style={{ width: "20vw" }}
        >
          <Container>
            <Row style={{ marginTop: "5vh", backgroundColor: "#c4c4c4" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                }}
              >
                <img
                  style={{ height: "35vh", width: "35vw" }}
                  src={candidate2URL}
                />
              </div>
            </Row>
            {showResults ? (
              <Row
                className="justify-content-center d-flex"
                style={{ marginTop: "5vh" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "8vw",
                    padding: "10px",
                    backgroundColor: "#c4c4c4",
                  }}
                >
                  {candidate2Votes}
                </div>
              </Row>
            ) : null}
            <Row
              className="justify-content-center d-flex"
              style={{ marginTop: "5vh" }}
            >
              <Button disabled={buttonStatus} onClick={() => addVote[1]}>
                Vote
              </Button>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PollingStation;
