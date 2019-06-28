import React from "react";
import { Table, Container, Col } from "reactstrap";
import Match from "./Match";
import Layout from "./Layout";

export default class Matches extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Col>
            <Table borderless>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Home Team</th>
                  <th>Away Team</th>
                  <th>Winner</th>
                </tr>
              </thead>
              <tbody>
                <Match />
              </tbody>
            </Table>
          </Col>
        </Container>
      </Layout>
    );
  }
}
