import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';

class App extends Component {
  render() {
    return (
      <div>
      	<div>
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />

     		 <NewComponent text='GG'/>
          </header>
     	</div>	 
       </div>
    );
  }
}

export default App;
