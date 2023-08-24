import React, { useEffect, useState } from "react";
import { Table, Container, Button, Row, Card } from "react-bootstrap";

const Home = (props) => {
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
    getInfo()
  },[]);

  return (
    <Container>
      <Table style={{ margin: "5vh" }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>List of Polls</th>
            <th>Go to Poll</th>
          </tr>
        </thead>
        <tbody>
          {promptList.map((item, index) => {
            if (promptList.length) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <Button>Go to Poll</Button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
      {promptList.length > 0 ? null : (
        <Row className="justify-content-center d-flex">
          <Card style={{ width: "20vw", height: "10vh" }}>
            No Prompt to show
          </Card>
        </Row>
      )}
      <Row>
        <Button
          style={{
            width: "20vh",
            marginLeft: "10vh",
          }}
        >
          Clear Polls
        </Button>
      </Row>
    </Container>
  );
};

export default Home;
