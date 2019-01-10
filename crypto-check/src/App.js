import React, { Component } from 'react';
import Header from './components/header';
import List from './components/list';
import './App.css';

class App extends Component {
  
  render() {
   
    return (
      <div className="App">
      <Header />
      <List />
       <h1>Hello World</h1>
      
      </div>
    );
  }
}

export default App;
