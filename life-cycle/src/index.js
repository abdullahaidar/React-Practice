import React from 'react';
import ReactDOM from 'react-dom';

import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos';

class App extends React.Component {
  // trick to pass value from child component to parent
  // 1- create a function/method on the parent component "mainAddTodo"
  // 2- pass this method as prop to child "addtodo"
  // 3- call the method from a child with a PARAMETER "todo"
  // 4- the parameter is going to be the value that we want to pass
  //    from child to parent

  state = {
    todoStorge: [],
  };

  mainAddTodo = (todo) => {
    //console.log(todo);
    //add the new todo to the storge inside the state of the App
    this.setState({ todoStorge: [...this.state.todoStorge, todo] });
    // or use push
    //const tempArr = this.state.todoStorge;
    //tempArr.push(todo);
    //this.setState({todoStorge: tempArr})
  };

  //delete Task
  deleteListItem = (index) => {
    //console.log('delete', index); //testing
    //solution with splice
    // const tempArr = this.state.todoStorage;
    //tempArr.splice(index, 1);
    //save the array on the state one more time
    //this.setState({todoStorge: tempArr});
    this.setState(this.state.todoStorge.splice(index, 1));
  };

  render() {
    console.log(this.state.todoStorge);

    return (
      <>
        <h1> ToDo list</h1>
        <AddToDo addtodo={this.mainAddTodo} />
        <ShowToDos
          showList={this.state.todoStorge}
          deleteItem={this.deleteListItem}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
