import React, { Component } from "react";
import { ListGroup, ListGroupItem, Input } from "reactstrap";
import axios from "axios";
import Layout from "./Layout.jsx";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

// Component for listed Wilders

class WilderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      wilder: [],
      redirect: false
    };
  }

  // Call API with Axios in /wilders root and edit the wilder state with wilders datas

  componentDidMount() {
    axios
      .get("http://localhost:8000/wilders")
      .then(response => {
        this.setState({
          wilder: response.data.wilders
        });
      })
      .catch(err => console.log(err));
  }

  // Make a method for searchbar

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect exact to="/" />;
    }
  };
  render() {
    // Make a searchbar

    let filteredWilders = this.state.wilder.filter(wilderSearch => {
      return (
        wilderSearch.firstname
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    const { buttonLabel } = this.props;
    return (
      <Layout>
        <div className="mt-3">
          <h4 style={{ textAlign: "center" }}>Wilders List</h4>
          <Input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            className="col-7"
            placeholder="Recherche"
          />
          <div className="d-flex col-11">
            <Button outline color="danger" onClick={this.setRedirect}>
              Retour
            </Button>
          </div>
          <ListGroup className="mt-2">
            {filteredWilders.map((wilder, i) => (
              <div key={i}>
                <ListGroupItem>
                  {buttonLabel} Wilder : {wilder.firstname} {wilder.lastname}{" "}
                  Campus de : {wilder.campus}
                </ListGroupItem>
              </div>
            ))}
          </ListGroup>
        </div>
      </Layout>
    );
  }
}

export default WilderList;
