import React, { useEffect, useState } from "react";
import { Table, Container, Button, Row, Card, Modal } from "react-bootstrap";

const Polls = (props) => {
  const [disableButton, setDisableButton] = useState(false);
  const [promptList, setPromptList] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedPollLink, setSelectedPollLink] = useState("");
  const [copyLinkSuccess, setCopyLinkSuccess] = useState(false);

  const handleShareClick = (promptName) => {
    // Generate the sharable link for the selected poll
    const pollLink = `${
      window.location.origin
    }/polling-station?poll=${encodeURIComponent(promptName)}`;

    // Set the link in the state
    setSelectedPollLink(pollLink);

    // Show the modal
    setShowModal(true);

    // Reset copy link success status
    setCopyLinkSuccess(false);
  };

  const handleCopyLink = () => {
    const inputLink = document.getElementById("pollLinkInput");

    inputLink.select();
    document.execCommand("copy");

    setCopyLinkSuccess(true);
  };

  useEffect(() => {
    const getInfo = async () => {
      let output = await props.getPrompts();
      setPromptList(output);
      if (output.length === 0) {
        setDisableButton(true);
      }
    };
    getInfo();
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">Polls</h2>
      <p className="text-center">
        Browse and access the list of available polls below. Click the "Go to
        Poll" button to view the details of a specific poll.
      </p>

      <Table className="mb-4" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>List of Polls</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {promptList.map((promptName, index) => {
            if (promptList.length) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{promptName}</td>
                  <td>
                    <Button
                      onClick={() => {
                        props.changeCandidates(promptName);
                      }}
                    >
                      Go to Poll
                    </Button>
                    {"  "}
                    <Button
                      onClick={() => {
                        handleShareClick(promptName);
                      }}
                      variant="danger"
                    >
                      Share
                    </Button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Share Poll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Share this link to the poll:</p>
          <input
            id="pollLinkInput"
            type="text"
            readOnly
            className="form-control"
            value={selectedPollLink}
          />
          {copyLinkSuccess ? (
            <div className="alert alert-success mt-3">
              Link copied to clipboard!
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCopyLink}>
            Copy Link
          </Button>
        </Modal.Footer>
      </Modal>

      {promptList.length > 0 ? null : (
        <Row className="justify-content-center my-4">
          <Card className="text-center" style={{ width: "20rem" }}>
            No Polls to Show
          </Card>
        </Row>
      )}
    </Container>
  );
};

export default Polls;
