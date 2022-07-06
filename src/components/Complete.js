import React from 'react';


export default class Complete extends React.Component {

  
  render(){
    return(
      <>
      <div>Name: {this.props.nameTextBoxVal }</div>
      <div>Email: { this.props.emailTextBoxVal }</div>
      <div>Phone Number: { this.props.phoneTextBoxVal }</div>
      <br/>
      <div> Company Name: { this.props.companyNameTextBoxVal }</div>
      <div>Position: { this.props.companyPositionTextBoxVal }</div>
      <div>School Name: { this.props.schoolNameTextBoxVal }</div>
      <div>Study: { this.props.schoolStudyTextBoxVal }</div>

      

      </>
    )
  

   
  }
}
