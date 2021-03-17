import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/head';
import './css/main.css';
import Todo from './components/todo';

class App extends React.Component {
  render() {
    const todos = [
      {
        todo: 'Teach FBW43',
        done: false,
      },
      {
        todo: 'dentist appointment',
        done: false,
      },
      {
        todo: 'go for run',
        done: true,
      },
    ];
    let x = 5;
    return (
      <>
        <h1 className="border">Hello World</h1>
        <Head someNumber={x} content="content from parent" />
        <Todo todolist={todos} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
