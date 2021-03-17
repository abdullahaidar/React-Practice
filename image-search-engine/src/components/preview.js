import React from 'react';

class Preview extends React.Component {
  state = {};

  componentWillUnmount = () => {
    console.log('preview will be deleted from the DOM');
  }
  render() {
    return (
      <div className="container">
            <div>
            <img src={this.props.photoUrl}/>
        </div>
      </div>
    );
  }
}

export default Preview;
