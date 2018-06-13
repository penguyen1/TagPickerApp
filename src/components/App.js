import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import tags from '../tags';
import Items from './Items';
// import Selected from './Selected';
// <Selected selected={this.state.selected} />

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      history: [],
      parent: null,
      tags: tags,
      name: 'Kaymbu TagPicker App',
      selectedTags: []
    }
  }

  // showRootItems = () => {
  //   console.log('FIRST :: showing Root items');
  //   return tags.map(item => {
  //     if(item.parent === this.state.parent){ return item }
  //   })
  //   .filter(x => x !== undefined);
  // }  

  showItems = (id = null) => {
    console.log('FIRST :: showing Root items');
    return tags.map(item => {
      if(item.parent === id){ return item }
    })
    .filter(x => x !== undefined);
  }

  componentWillUpdate = () => {
    let rItems = this.showItems();
    this.setState({ history: [...this.state.history, rItems] });
    console.log('History: ', this.state.history);
  }

  render() {
    let showItems = this.showItems();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <Items items={showItems} showItems={this.showItems}/>
      </div>
    );
  }
}

export default App;
