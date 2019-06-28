import React, { Component } from "react";
import axios from "axios";
import Layout from './Layout';
import { Container, Col, Table } from 'reactstrap';

class RankingTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campus: [
                {
                    ber: "",
                    bia: "",
                    bor: "",
                    bru: "",
                    buc: "",
                    lil: "",
                    lis: "",
                    lon: "",
                    mad: "",
                    mar: "",
                    par: "",
                    stra: "",
                    toul: "",
                    tour: "",
                }

            ]
        };
    }
    componentDidMount() {
        axios
            .get(
                "http://localhost:8000/ranking"
            )
            .then(response => {
                console.log(response);

                this.setState({
                    campus: response.data
                });
            })
    }


    render() {
        return (
            <div>
                <Layout>
                    <Container>
                        <Col md={{ size: 6, offset: 3 }}>
                            <h4>LEADERBOARD</h4>
                            <Table responsive dark>
                                <thead>
                                    <tr>
                                        <th>
                                            <h5>Campus</h5>
                                        </th>
                                        <th>
                                            <h5>Score</h5>
                                        </th>
                                    </tr>
                                </thead>

                                <tr>

                                    <td>Berlin </td>
                                    <td> {this.state.campus.ber}</td>
                                </tr>
                                <tr>
                                    <td> Biarritz :</td>
                                    <td> {this.state.campus.bia}</td>
                                </tr>
                                <tr>
                                    <td> Bordeaux : </td>
                                    <td> {this.state.campus.bor}</td>
                                </tr>
                                <tr>
                                    <td> Bruxelle: </td>
                                    <td> {this.state.campus.bru}</td>
                                </tr>
                                <tr>
                                    <td>Bucarest:</td>
                                    <td>{this.state.campus.buc}</td>
                                </tr>
                                <tr>
                                    <td> Biarritz : </td>
                                    <td>{this.state.campus.lil}</td>
                                </tr>
                                <tr>
                                    <td> Lisbonne : </td>
                                    <td> {this.state.campus.lis}</td>
                                </tr>
                                <tr>
                                    <td> Londres : </td>
                                    <td> {this.state.campus.lon}</td>
                                </tr>
                                <tr>
                                    <td> Madrid: </td>
                                    <td> {this.state.campus.mad}</td>
                                </tr>
                                <tr>
                                    <td> Marseille:</td>
                                    <td> {this.state.campus.mar}</td>
                                </tr>
                                <tr>
                                    <td>Paris : </td>
                                    <td>{this.state.campus.par}</td>
                                </tr>
                                <tr>
                                    <td> Strasbourg : </td>
                                    <td> {this.state.campus.stra}</td>
                                </tr>
                                <tr>
                                    <td> Toulouse : </td>
                                    <td> {this.state.campus.toul}</td>
                                </tr>
                                <tr>
                                    <td> tour : </td>
                                    <td> {this.state.campus.tour}</td>
                                </tr>
                            </Table>
                        </Col>
                    </Container>
                </Layout>

            </div>

        );
    }
}

export default RankingTest;