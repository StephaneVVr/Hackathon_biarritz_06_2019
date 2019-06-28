import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Card, Container, Col } from "reactstrap";
import axios from "axios";

class CampusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCampus: [],
      campus: [
        {
          name: "",
          country: "",
          uid: "",
          creation: "",
          manager: {
            firstname: "",
            lastname: ""
          }
        }
      ]
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/campuses"
      )
      .then(response => {
        console.log(response);

        this.setState({
          campus: response.data
        });
      })
      .then(() => {
        const { campusName } = this.props.match.params;
        this.setState({
          currentCampus: this.state.campus.find(
            campus => campus.name === campusName
          )
        });
      });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect exact to="/campusList" />;
    }
  };

  render() {
    const { currentCampus } = this.state;
    return (
      <div>
        <Container>
          <Col md={{ size: 6, offset: 3 }}>
            <Card>
              {this.renderRedirect()}
              {currentCampus && (
                <div className="mt-3 d-flex flex-column align-items-center">
                  <h4 className="card-header">
                    Nom du Campus : {currentCampus.name}
                  </h4>
                  <p>Ville : {currentCampus.city}</p>
                  <p> Pays : {currentCampus.country}</p>
                  <p> Identifiant : {currentCampus.uid}</p>
                  <p> Date de création : {currentCampus.creation}</p>
                  {
                    //<p>{currentCampus.manager.firstname}</p>
                    // <p>{currentCampus.manager.lastname}</p>}
                    <div className="d-flex justify-content-center col-11">
                      <Button outline color="danger" onClick={this.setRedirect}>
                        Retour
                      </Button>
                    </div>
                  }
                </div>
              )}
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default CampusPage;
