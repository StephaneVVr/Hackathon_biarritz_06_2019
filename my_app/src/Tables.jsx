import React from "react";
import Table from "./Table";
import Layout from "./Layout";

export default function Tables() {
  return (
    <div>
      <Layout>
        <p>LEADERBOARD</p>
        <table className="table-dark">
          <thead>
            <tr>
              <th />
              <th>
                <h3>Campus</h3>
              </th>
              <th>
                <h3>Score</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <Table />
          </tbody>
        </table>
      </Layout>
    </div>
  );
}
