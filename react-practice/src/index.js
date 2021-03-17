import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/addtodos';
import ShowList from './components/showlist';
import getToDos from './api';

class App extends React.Component {
  state = {
    taskList: [],
  };

  // it will be called ONCE after render
  componentDidMount() {
    getToDos().then((data) => {
      const titles = data.map((element) => element.title);
      console.log(titles);
      this.setState({ taskList: titles });
    });
  }
  // it is going to be called after render on each update for the component
  // update means change the state or render the component
  componentDidUpdate() {}
  // it will be executed directly before deleting the component from the DOM
  componentWillUnmount() {}

  addTaskFun = (task) => {
    // console.log(task);
    this.setState({ taskList: [...this.state.taskList, task] });
  };

  deleteTask = (index) => {
    //solution with splice
    //  const tempArr = this.state.taskList;
    // tempArr.splice(index, 1);
    //save the array on the state one more time
    // this.setState({taskList: tempArr});
    //this.setState(this.state.taskList.splice(index, 1)); //solution 2

    //solution with filter
    const tempArr = this.state.taskList.filter((element, idx) => index !== idx);
    this.setState({ taskList: tempArr });
  };

  render() {
    //  console.log(this.state.taskList);

    return (
      <>
        <h1 style={{ color: 'red' }}>hello tasks</h1>
        <AddTask addFun={this.addTaskFun} />
        <ShowList
          showTasks={this.state.taskList}
          deleteItem={this.deleteTask}
        />
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
