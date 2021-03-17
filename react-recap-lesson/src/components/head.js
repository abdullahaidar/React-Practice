import React from 'react';

class Head extends React.Component {
    render() {
      // use passed prop
        console.log(this.props);
        return <h1>{this.props.content}</h1>
  }
}

export default Head;
