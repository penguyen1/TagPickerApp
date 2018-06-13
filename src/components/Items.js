import React, { Component } from 'react';
import tags from '../tags';
// import Tag from './Tag';
// import Folder from './Folder';

class Items extends Component {
  // constructor(props){
  //   super(props);

  //   // this.state = {
  //   //   count: 0,
  //   //   history: [],
  //   //   parent: null,
  //   //   items: data,
  //   //   name: 'Kaymbu TagPicker App',
  //   //   selected: []
  //   // }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('scu1: ', nextProps)
    console.log('scu2: ', nextState)

    const diffItems = this.props.items !== nextState.items;
    console.log('scu: ', diffItems)
    return diffItems;
    // if (this.props.items !== nextProps.items) {
    //   console.log('scu true')
    //    return true;
    // } else {
    //   console.log('scu false')
    //    return false;
    // }
  }

  folderClick = (val) => {
    console.log('going into Folder id: ', val);
    let newitems = this.props.showItems(val);
    
    // set parent to val id
    // set items to new array
    this.setState({
      parent: val,
      items: newitems
    })
  }

  tagToggle = (val) => {
    console.log('Toggle tag id: ', val);
    // toggle selected tag
  }

  render() {
    // const { items } = this.props;
    // let items = this.props.showItems();
    
    return (
      <div>
        <ul>
        {
          this.props.items.map( (item, index) => {
            return (item.isFolder) 
              ? <li key={`folder-${index}`} value={item.id} onClick={() => this.folderClick(item._id)}> {item.name} </li>
              : <li key={`tag-${index}`} value={item.id} onClick={() => this.tagToggle(item._id)}> {item.name} </li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default Items;
