import './App.css';
import './styles/style.css';
import General from './components/General.js';
import Educational from './components/Educational.js';
import Practical from './components/Practical';
import Complete from './components/Complete';
import { CompanyName } from './components/Practical';
import React, {Component } from 'react';



class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        value: ""
        
    }

   
    }


  render() {
    return (
    <div id="root">
      <div id="header">HEADER</div>
      <div id="primary-layout">
        <div id="left">
          <div id="filling-cv">
            <General />
            <Educational />
            <Practical />
          </div>
        </div>
        <div id="right">
          
          <div id="filled-cv">
            <Complete companyName = {this.props.companyName}/>
          </div>
        </div>


      </div>




    </div>
    );

  }
}

export default App;
