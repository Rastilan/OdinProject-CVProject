import React from 'react';



export class Practical extends React.Component{

    

  
    constructor(props){
        super(props);
        this.state = {
            companyNameTextBoxValue: "",
            companyPositionTextBoxValue: ""
            
        }

       

      }

      SubmitValue = () => { this.props.handleData(this.state.companyNameTextBoxValue, this.state.companyPositionTextBoxValue)}

      onChangeName = (val) => {
        this.setState({companyNameTextBoxValue: val.target.value})
      }
      onChangePosition = (val) => {
        this.setState({companyPositionTextBoxValue: val.target.value})
      }

    render(){
        return ( <>
        <div>Company Name: 
            <input type="test" onChange={this.onChangeName}/>
        </div>
        <div>Company Position:
            <input type="test" onChange={this.onChangePosition}/>
        </div>
        <button onClick={this.SubmitValue}>Save changes to this section</button>

        </>
        
        )
    }


    
      
}

