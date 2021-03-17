import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/title.js';

class App extends React.Component {
  // in any class component, it must have a render method
  render() {
    return (
      <>
        <h1 className="red-color"> Hello World</h1>
        <Title />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
