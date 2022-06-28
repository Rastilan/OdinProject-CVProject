import React from 'react';



class Practical extends React.Component{

    

  
    constructor(props){
        super(props);
        this.state = {
            value: "test"
            
        }

       
        this.handleNameChange = this.handleNameChange.bind(this);
      }


      handleNameChange(event) {    this.setState({value: event.target.value});  }

    render(){
        return ( <>
        <div id="practical-name">Company Name: {this.state.value}
            <input type="test" id="practical-name"  value={this.state.value} onChange={this.handleNameChange}/>
        </div>
        <div id="practical-position">Position</div>
        <div id="practical-task">Primary Task</div>
        <div id="practical-date">Primary Task</div>
        
        </>
        
        )
    }


    
      
}

export default Practical;