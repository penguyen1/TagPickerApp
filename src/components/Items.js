import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import tags from '../tags';
// import Tag from './Tag';
// import Folder from './Folder';

class Items extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('scu1: ', nextProps)
    console.log('scu2: ', nextState)

    const diffItems = this.props.items !== nextState.items;
    console.log('scu: ', diffItems)
    return diffItems;
  }

  folderClick = (id) => {
    console.log('going into Folder id: ', id);
    let newitems = this.props.showItems(id);
    console.log('showing Folder: ', newitems);
    
    this.setState((prevState, props) => {
      console.log('prevState: ', prevState);
      console.log('props: ', props);
      return {items: (props.items).splice(0, props.items.length, ...newitems)}
    })
  }

  tagToggle = (id) => {
    console.log('Toggle tag id: ', id);
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
