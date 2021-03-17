import React from 'react';

class AddToDo extends React.Component {
  state = {
    todoValue: '',
  };

  addTodoClick = () => {
    // alert(this.state.todoValue);
    this.props.addtodo(this.state.todoValue);
    this.setState({ todoValue: '' }); //reset input value
  };

  render() {
    return (
      <>
        <input
          onChange={(e) => {
            this.setState({ todoValue: e.target.value });
          }}
          value={this.state.todoValue}
        />
        <button onClick={this.addTodoClick}>click to add</button>
      </>
    );
  }
}

export default AddToDo;
