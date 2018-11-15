import React, { Component } from 'react';




class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      count: 0
    };
  }

incrementCount() {
    this.setState({
      count: this.state.count + +this.state.value
    });
  };
  reset(){
    this.setState({
      count: 0
    });
  };
  handleChange = (event) => {
    this.setState({
      value:event.target.value
    });
  };
  
   

  render() {
  
    return (
        <div>  
            <div>      
         Licznik:  <span>{this.state.count}</span><br/>
            </div>
        <button onClick={this.incrementCount.bind(this)}><span>Zwiększ o:{this.state.value}</span></button>
        <button onClick={this.reset.bind(this)}>Reset</button>
        <div> 
        <span>Krok : </span><input type="number" onChange={this.handleChange.bind(this)} />  
        </div> 
        <hr />        
      </div>
    );
  }

}


export default Step;