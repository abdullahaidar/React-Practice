import React, { useState} from 'react';

// function AddToDo() {
//     return (
//         <>
//         <input type="text" placeholder="Add a Task"/>
//         <button> Add Task</button>
//             </>
//     )
// }

// we can also used Arrow function

const AddToDo = (props) => {
    // hook useState
    //1- create initial state object
    //2- state array destructuring 

    const initState = {
        todoValue: ''

    };

    const [state, setState] = useState(initState);

    const AddBtnClick = () => {
        if (state.todoValue.trim()) { //to not add white spaces
            props.add(state.todoValue); 
        }
        setState({ todoValue: '' })
    }

    return (
        <>
            <input
                value={state.todoValue}
                onChange={(e)=> {setState({todoValue: e.target.value})}}
                type="text" placeholder="Add a Task" />
            <button onClick={ AddBtnClick}
            > Add Task</button>
            </>
    )
}

export default AddToDo