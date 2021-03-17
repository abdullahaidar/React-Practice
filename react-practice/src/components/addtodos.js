import React from 'react';

class AddTask extends React.Component {
  state = {
    taskValue: '',
  };

  addTaskBtn = () => {
    this.props.addFun(this.state.taskValue);
    this.setState({ taskValue: '' });
  };

  render() {
    return (
      <>
        <input
          onChange={(e) => {
            this.setState({ taskValue: e.target.value });
          }}
          value={this.state.taskValue}
        />
        <button onClick={this.addTaskBtn}> Add Task</button>
      </>
    );
  }
}

export default AddTask;
