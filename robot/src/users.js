import React, { Component } from "react";
import Card from "./components/card";
import Form from "react-bootstrap/Form";
//import { Form } from 'react-bootstrap-validation';
class App extends Component {
    state={
      value :"",
      users:[
        {
          id: 1,
          nom: "Fala Omar",
          filiere: "ISIL"
        },
        {
          id: 2,
          nom: "Wissal Ajbabdi",
          filiere: "ISIL"
        },
        {
          id: 3,
          nom: "Mouna Mabrouk",
          filiere: "ISIL"
        },
        {
          id: 4,
          nom: "Hamza Jebrane",
          filiere: "ISIL"
        },
        {
          id: 5,
          nom: "imad Aagida",
          filiere: "MGE"
        },
        {
          id: 6,
          nom: "jaiti Mohammed",
          filiere: "ISIL"
        },
        {
          id: 7,
          nom: "Soufiane Hmimssa",
          filiere: "ISIL"
        },
        {
          id: 8,
          nom: "Toto ElGrande",
          filiere: "BNJ"
        },
        {
          id: 9,
          nom: "Cristiano Ronaldo",
          filiere: "JUV"
        }
      ]
    }
    
  render() {
    let result=this.state.users.filter(x=>x.nom.toLowerCase().indexOf(this.state.value)!==-1);

    return (
      <div className="App">
        <div className="desc">
                <h1>App - React ROBOT</h1>
                <h3>By Fala Omar - Wissal Ejbabdi</h3>
        </div>
      <div className="Header">
        <div className="Search" />
        <center>
          <Form className="input-search"> 
            <Form.Control
              type="search"
              placeholder="rechercher ici"
              id="InputForm"
              onChange={(e)=>{this.setState({value:e.target.value})}}
            />
          </Form>
        </center>
        <div className="Flex-Data">
        <ul>
          {result.map(user => (
            <Card Users={user} />
          ))}
        </ul>
      </div>
      </div>
    </div>
      
    );
  }
}

export default App;
