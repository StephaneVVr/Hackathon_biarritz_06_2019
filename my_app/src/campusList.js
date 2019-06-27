import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Input } from "reactstrap";
import * as campusData from "./campuses.json";
import Layout from "./Layout.jsx";

class CampusList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredcampus = campusData.data.filter(campuseSearch => {
      return (
        campuseSearch.name
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    const { buttonLabel } = this.props;
    return (
      <Layout>
        <div className="mt-3">
          <h4 style={{ textAlign: "center" }}>Campus List</h4>
          <Input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            className="col-7"
            placeholder="Recherche"
          />
          <ListGroup className="mt-2">
            {filteredcampus.map(campus => (
              <div>
                {/* <Link to={`/${campus.name}`} style={{ textDecoration: 'none', color: 'black' }}> */}
                <ListGroupItem>
                  {buttonLabel} {campus.name}
                </ListGroupItem>
                {/* </Link> */}
              </div>
            ))}
          </ListGroup>
        </div>
      </Layout>
    );
  }
}

export default CampusList;
