import React, { Component } from "react";
import axios from "axios";

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
                <div className="mt-3 d-flex flex-column align-items-center">
                    <p>Berlin : {this.state.campus.ber}</p>
                    <p> Biarritz : {this.state.campus.bia}</p>
                    <p> Bordeaux : {this.state.campus.bor}</p>
                    <p> Bruxelle: {this.state.campus.bru}</p>
                    <p>Bucarest: {this.state.campus.buc}</p>
                    <p> Biarritz : {this.state.campus.lil}</p>
                    <p> Lisbonne : {this.state.campus.lis}</p>
                    <p> Londres : {this.state.campus.lon}</p>
                    <p> Madrid: {this.state.campus.mad}</p>
                    <p> Marseille: {this.state.campus.mar}</p>
                    <p>Paris : {this.state.campus.par}</p>
                    <p> Strasbourg : {this.state.campus.stra}</p>
                    <p> Toulouse : {this.state.campus.toul}</p>
                    <p> tour : {this.state.campus.tour}</p>


                </div>
            </div>
        );
    }
}

export default RankingTest;