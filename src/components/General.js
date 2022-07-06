import React from 'react';

export default class General extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            nameTextBoxValue: "",
            emailTextBoxValue: "",
            phoneTextBoxVal: ""
            
        }
      }

      SubmitValue = () => { this.props.handleData(this.state.nameTextBoxValue, this.state.emailTextBoxValue, this.state.phoneTextBoxVal)}

      onChangeName = (val) => {
        this.setState({nameTextBoxValue: val.target.value})
      }
      onChangeEmail = (val) => {
        this.setState({emailTextBoxValue: val.target.value})
      }
      onChangePhone = (val) => {
        this.setState({phoneTextBoxVal: val.target.value})
      }

    render(){
        return ( <>
        <div>Name: 
            <input type="test" onChange={this.onChangeName}/>
        </div>
        <div>Email: 
            <input type="test" onChange={this.onChangeEmail}/>
        </div>
        <div>Phone Number: 
            <input type="test" onChange={this.onChangePhone}/>
        </div>
        <button onClick={this.SubmitValue}>Save changes to this section</button>

        </>
        
        )
    }       
}

