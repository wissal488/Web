import React from 'react';
//import logo from './logo.svg';
//import ReactDOM from 'react-dom';
import {Remarkable} from 'remarkable';
import './App.css';

class MarkdownEditor extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'Entrer votre texte'
    };
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }

  getRawMarkup(){
    const md = new Remarkable();
    return{__html:md.render(this.state.value)};
  }
  render(){
  return (
    <div className="Acontainer">
      <div className="input">
        <h3>Input</h3>
        <textarea className="input-text" 
        onChange={this.handleChange}
        defaultValue={this.state.value}/>
      </div>
      <div>
        <div className="output">
          <h3>Markdown</h3>
          <div dangerouslySetInnerHTML={this.getRawMarkup()}
          className="output-text"></div>
        </div>
      </div>
    </div>
  );
  }
}

export default MarkdownEditor;
