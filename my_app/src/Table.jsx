import React from "react";
import Axios from "axios";

export default class Table extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         campuses: []
      };
   }
   // Rafraichissement du tableau (timer 100 ms)
   componentDidMount() {
      this.tableRefresh = setInterval(() => this.refresh(), 250);
   }
   componentWillUnmount() {
      clearInterval(this.tableRefresh);
   }
   // Récupération des campus (mapping)
   refresh() {
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