import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import tags from '../tags';
import Items from './Items';

class App extends Component {
  constructor(props){
    super(props);
  }

  showItems = (id = null) => {
    // filter json data with parent id
    return tags.map(item => {
      if(item.parent === id){ return item }
    }).filter(x => x !== undefined);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kaymbu TagPicker App</h1>
        </header>
        <Items items={this.showItems()} showItems={this.showItems}/>
      </div>
    );
  }
}

export default App;
