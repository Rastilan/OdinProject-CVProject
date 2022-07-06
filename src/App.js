import './App.css';
import './styles/style.css';
import General from './components/General.js';
import Educational from './components/Educational.js';
import {Practical}from './components/Practical';
import React, {Component } from 'react';
import Complete from './components/Complete'


class App extends Component{

    constructor(){
      super();
      this.state = {
        companyName: '',
        companyNameTextBoxVal: '',
        nameTextBoxVal: '',
        emailTextBoxVal: '',
        phoneTextBoxVal: '',
        schoolNameTextBoxVal: '',
        schoolStudyTextBoxVal: ''
      };
    }
  handlePracticalData = (val, val2) => {
    this.setState({ companyNameTextBoxVal: val, companyPositionTextBoxVal: val2 })
  }
  handleGeneralData = (val, val2, val3) => {
    this.setState({ nameTextBoxVal: val, emailTextBoxVal: val2, phoneTextBoxVal: val3 })
  }
  handleEducationalData = (val, val2) => {
    this.setState({ schoolNameTextBoxVal: val, schoolStudyTextBoxVal: val2})
  }



  render() {
    return (
    <div id="root">
      <div id="header">Proof of concept CV Builder : An Odin Project ReactJS Lesson</div>
      <div id="primary-layout">
        <div id="left">
          <div id="filling-cv">
            <General handleData={this.handleGeneralData}/>
            <Practical handleData={this.handlePracticalData}/>
            <Educational handleData={this.handleEducationalData}/>
            
            
          </div>
        </div>
        <div id="right">
          
          <div id="filled-cv">
            <Complete 

            companyNameTextBoxVal={this.state.companyNameTextBoxVal} 
            companyPositionTextBoxVal={this.state.companyPositionTextBoxVal}
            nameTextBoxVal={this.state.nameTextBoxVal}
            emailTextBoxVal={this.state.emailTextBoxVal}
            phoneTextBoxVal={this.state.phoneTextBoxVal}
            schoolNameTextBoxVal={this.state.schoolNameTextBoxVal}
            schoolStudyTextBoxVal={this.state.schoolStudyTextBoxVal}

            />

          </div>
        </div>


      </div>




    </div>
    );

  }
}

export default App;
