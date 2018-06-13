import React, { Component } from 'react';

class Tag extends Component {
  update = (e) => {
    console.log('Toggle tag id: ', e);
    this.props.tagToggle('peter');
    // setState of selected array
  }

  render() {
    const { data } = this.props;
    return (
      <li key={`tag_${data.id}`} value={data.id} onClick={() => this.update}> {data.name} </li>
    );
  }
}

export default Tag;
