import React from "react";
import Tablee from "./Table";
import Layout from "./Layout";
import { Container, Col, Table } from "reactstrap";

export default function Tables() {
  return (
    <div>
      <Layout>
        <Container>
          <Col md={{ size: 6, offset: 3 }}>
          <h4>LEADERBOARD</h4>
          <Table responsive dark>
            <thead>
              <tr>
                <th />
                <th>
                  <h5>Campus</h5>
                </th>
                <th>
                  <h5>Score</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <Tablee />
            </tbody>
          </Table>
          </Col>
        </Container>
      </Layout>
    </div>
  );
}
