import React from 'react';

class ShowToDos extends React.Component {

    doneBtnClick = (index) => {

       // console.log(index);
        this.props.deleteItem(index)
    }


  render() {
    // return this.props.showList.map((element, index) => <div key={index}>{element}</div>);
    return (
      <ul>
        {this.props.showList.map((element, index) => (
          <li key={index}>
                {element}
                <button onClick={() => { this.doneBtnClick(index) }}> done</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ShowToDos;


// <button onClick={() => { this.doneBtnClick(index) }}> done</button>
// call a method using event which require a parameter it need to be inside arrow function
