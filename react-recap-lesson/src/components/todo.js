import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'aqua',
      textColor: 'none',
    };
  }
  // add event to any React element should be done without (). check onclick down
  // you need to assign function to onclick without directly invoking the function
  changeColorBtn = () => {
    // alert('hi');
    // cant change state directly instead use setState() method
    //this.state.bgColor = 'red';
    this.setState({
      bgColor: 'yellow',
      textColor: 'blue',
    });
  };

  render() {
    const { todolist } = this.props;

    console.log(todolist);

    // let listElement = [];
    // for (let i = 0; i < this.props.todolist.length; i++) {
    //   const item = (
    //     <div>
    //       <span>{this.props.todolist[i].todo}</span>
    //       <span>{this.props.todolist[i].done ? 'done' : 'not yet'}</span>
    //     </div>
    //   );
    //   listElement.push(item);
    // }
    // without {} no need to write return in the map method
    let listElement = todolist.map((element, index) => {
      return (
        <div key={index}>
          <span>{element.todo}</span>
          <span>{element.done ? 'done' : 'not yet'}</span>
        </div>
      );
    });

    return (
      <div
        style={{
          backgroundColor: this.state.bgColor,
          color: this.state.textColor,
        }}
      >
        {listElement}
        {/* <button onClick={() => { alert('hi') }} >change color </button> */}
        <button onClick={this.changeColorBtn}> change colors</button>
      </div>
    );
  }
}

export default Todo;
