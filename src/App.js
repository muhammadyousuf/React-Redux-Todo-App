import React, { Component } from 'react';
import './App.css';
import HoverIncrement from './Component/Screens/Hover-Increment/Hover-Increment.jsx';
import ButtonIncrement from './Component/Screens/Button-Increment/Button-Increment.jsx'; 
class App extends Component {
  render() {
    return (
      <div className="App">
         <HoverIncrement name="Yousuf" />
         <ButtonIncrement />
      </div>
    );
  }
}

export default App;
