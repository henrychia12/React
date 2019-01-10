import React, { Component } from 'react';

class NewComponent extends Component {

    constructor() {
        super();
        this.state = {
            stateText: "Balance:",
            stateNumber: 100000,
            Amount: " "
            }
        }

    updateText=() => this.setState({
        stateText: "New Balance: "
    });

    updateNumber=() => this.setState({
        stateNumber: this.state.stateNumber - document.getElementById("information").value
    });



    render() {
        return (
            <header className="App header">
            <p></p>
               <h1>{this.state.stateText}</h1>
               <h1>£{this.state.stateNumber}</h1>
               <h1>{this.props.text}</h1>
               <button onClick={this.updateNumber}>Withdraw</button>
               <button onClick={this.updateText}>Click Me!</button><br></br> 
               <input type="number" id="information" ></input>
            </header>

            
           
        );
    }

}

export default NewComponent;

