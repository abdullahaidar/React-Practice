import React from 'react';

class ShowList extends React.Component {
  state = {};

  deleteBtn = (index) => {
    //console.log(index)
    this.props.deleteItem(index);
    // const arr = this.props.showTasks; (sara solution)
    //arr.splice(index, 1);
    //this.setState({ showTasks: arr })
    //console.log(this.state.taskList)
  };

  render() {
    return (
      <ul>
        {this.props.showTasks.map((element, index) => (
          <li style={{}} key={index}>
            {element}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => {
                this.deleteBtn(index);
              }}
            >
              {' '}
              done
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ShowList;
