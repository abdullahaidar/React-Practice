import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const initState = {
    val1: '',
    val2: '',
  };

  const [state, setState] = useState(initState);

  useEffect(() => {
    // same as componentDidMount in a class component
    // any code written here will be called one time after first render
      console.log('1- after first render one time');
      
      return () => {
          //any code is going to be called directly before component is deleted
          console.log('will be called before component is deleted')
      }

  }, []);

  useEffect(() => {
    //NOT same as componentDidUpdate as in class component because componentDidUpdate
    //is going to be called only after state changes but not on the first time
    //any code is written will be called first time after render and
    //  after each change on the state
    console.log('2- first time after render, after each change on the state');
  });

  useEffect(() => {
    // code will be called on the first time after render and every time when val1 inside the state is changed
    console.log(
      '3- on the first time after render and every time when val1 inside the state is changed'
    );
  }, [state.val1]);

    
    
    
  const BtnClick = () => {
    setState({ ...state, val1: 'anything' });
  };

  //console.log(state.val);

  return (
    <>
      <h2>lifecycle methods on functional components</h2>
      <button onClick={BtnClick}>Click me</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
