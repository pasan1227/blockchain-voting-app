import React, { useEffect, useState } from "react";
import { Table, Container, Button, Row, Card } from "react-bootstrap";

const Polls = (props) => {
  const [disableButton, setDisableButton] = useState(false);
  const [promptList, setPromptList] = useState([]);

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
            <th>Go to Poll</th>
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
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
      {promptList.length > 0 ? null : (
        <Row className="justify-content-center my-4">
          <Card className="text-center" style={{ width: "20rem" }}>
            No Polls to Show
          </Card>
        </Row>
      )}
      <Row className="justify-content-center">
        <Button variant="danger" className="mb-4">
          Clear Polls
        </Button>
      </Row>
    </Container>
  );
};

export default Polls;
