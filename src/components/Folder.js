import React, { Component } from 'react';

class Folder extends Component {

  render() {
    const { data } = this.props;
    return (
      <li key={`folder_${data.id}`} id={data.id}> {data.name} </li>
    );
  }
}

export default Folder;