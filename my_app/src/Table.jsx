import React from "react";
import Axios from "axios";

export default class Table extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         campuses: []
      };
   }
   // get data from API/campuses
   componentDidMount() {
      Axios.get("https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/campuses").then(response => {
         this.setState({ campuses: response.data });
      });
   }
   render() {
      return (
         <>
            {this.state.campuses.map((campus, i) => {
               return (
                  <tr key={i}>
                     <th scope="row">{i + 1}</th>
                     <td>{campus.name}</td>
                     <td>{campus.score}</td>
                  </tr>
               );
            })}
         </>
      );
   }
}