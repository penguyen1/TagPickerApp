import React, { Component } from 'react';
// import tags from '../tags';

class Items extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      history: {0: this.props.showItems()},
      selectedTags: [],
      parent: null
    }
  }

  folderClick = (id) => {
    // get items with new parent id
    let newitems = this.props.showItems(id);
    let count = this.state.counter+1;
    console.log('history: ', this.state.history)
    
    // rerender component with new state
    this.setState((prevState, props) => {
      return {
        parent: id,
        counter: prevState.counter+1,
        history: { ...prevState.history, [count]: newitems},
        items: (props.items).splice(0, props.items.length, ...newitems)
      }
    })
  }

  onTagSelectionChange = (id) => {
    // if tag.id exists in selectedTags[], remove from array. otherwise, add to array
    this.setState({
      selectedTags: this.state.selectedTags.indexOf(id) !== -1 ? this.state.selectedTags.splice(+(this.state.selectedTags.indexOf(id)), 1) : this.state.selectedTags.concat(id)
    })
  }

  isSelected = (id) => {
    // if tag.id exists in selectedTags[], set className="selected". otherwise, className=""
    return this.state.selectedTags.includes(id) ? "selected" : ""
  }

  goBack = () => {
    // revert back to previous history[counter - 1] -- TODO
    let count = this.state.counter-1;
    console.log('count: ', count)
    console.log('history: ', this.state.history)

    // rerender component with prev state
    this.setState((prevState, props) => {
      console.log('BACK -- prevState: ', prevState)
      console.log('BACK -- props: ', props)

      return {
        parent: prevState.items[0].parent,
        counter: prevState.counter-1,
        history: { ...prevState.history, [count]: []},
        items: (props.items).splice(0, props.items.length, ...prevState.history[count])
      }
    })
  }

  // Things left to do: Back functionality, Style Components, tagToggle logic

  render() {
    return (
      <div>
        {(this.state.parent === null || this.state.counter === 0) ? '' : <button onClick={this.goBack}>Go Back</button>}
        <ul>
        {
          this.props.items.map((item, index) => {
            return (item.isFolder) 
              ? <li key={`folder-${index}`} onClick={() => this.folderClick(item._id)}> {item.name} </li>
              : <li key={`tag-${index}`} onClick={() => this.onTagSelectionChange(item._id)} className={this.isSelected(item._id)}> {item.name} </li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default Items;
