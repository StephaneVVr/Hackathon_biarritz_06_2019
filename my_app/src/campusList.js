import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Input } from "reactstrap";
import axios from "axios";
import Layout from "./Layout.jsx";

// Component for listed Campuses

class CampusList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      campus: []
    };
  }

  // Call API with Axios in /campuses root and edit the campus state with campuses datas

  componentDidMount() {
    axios
      .get("http://localhost:8000/campuses")
      .then(response => {
        this.setState({
          campus: response.data.campuses
        });
      })
      .catch(err => console.log(err));
  }

  // Make a method for searchbar

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    // Make a searchbar
    console.log(this.state.campus);

    let filteredCampus = this.state.campus.filter(campuseSearch => {
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
            {filteredCampus.map((campus) => (
              <div  key={campus.uid}>
                <Link
                  to={`/campusList/${campus.name}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListGroupItem>
                    {buttonLabel} {campus.name}
                  </ListGroupItem>
                </Link>
              </div>
            ))}
          </ListGroup>
        </div>
      </Layout>
    );
  }
}

export default CampusList;
