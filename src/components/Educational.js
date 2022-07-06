import React from 'react';

export default class Educational extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            schoolNameTextBoxValue: "",
            schoolStudyTextBoxValue: ""
            
        }
      }

      SubmitValue = () => { this.props.handleData(this.state.schoolNameTextBoxValue, this.state.schoolStudyTextBoxValue)}

      onChangeName = (val) => {
        this.setState({schoolNameTextBoxValue: val.target.value})
      }
      onChangeStudy = (val) => {
        this.setState({schoolStudyTextBoxValue: val.target.value})
      }

    render(){
        return ( <>
        <div>School Name: 
            <input type="test" onChange={this.onChangeName}/>
        </div>
        <div>Study:  
            <input type="test" onChange={this.onChangeStudy}/>
        </div>

        <button onClick={this.SubmitValue}>Save changes to this section</button>

        </>
        
        )
    }       
}

