import React, {useState}from 'react';
import ReactDOM from 'react-dom';
import AddToDo from './components/addtodo';
import ShowToDos from './components/showtodos'
    
function App() {

    const initState = {
        todoList: [
            'teach react',
            'meeting with DCI',
            'another meeting',
        ]
    }

    const addToDo = (todo) => {
        setState({
            todoList: [...state.todoList, todo]
        })
    }

    const [state, setState] = useState(initState);

  return (
    <>
      <h1>Functional component</h1>
          <AddToDo add={addToDo}/>
          <ShowToDos list={state.todoList}/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
