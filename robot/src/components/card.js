import React, { Component } from "react";
import "./card.css";
class card extends Component {
  // url = "https://robohash.org/";

  render() {
    const url = "https://robohash.org/" + this.props.Users.id;
    return (
      <li>
        <div className="Img-users">
          <img src={url} alt="" />
          <div className="user-infos">
           <strong>id</strong> : {this.props.Users.id} {" - "} 
           <strong>Nom</strong> : {this.props.Users.nom}{" - "}
           <strong>Filière</strong> :{this.props.Users.filiere}
           </div> 
        </div>
      </li>
    );
  }
}
export default card;
