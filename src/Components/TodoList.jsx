import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});


    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput('');
        }
        };  

    const handleHeadingInputChange = (e) =>{
        setHeadingInput(e.target.value);
    };

    const handleDeleteTodo = (index) =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }

    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];
            newTodos[index].lists.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({ ...listInputs, [index]: '' });
        }
    };
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value });
    };

    const handleDeleteListItem = (index,listIndex) => {
        const newTodos = [...todos];
        newTodos[index].lists.splice(listIndex,1);
        setTodos(newTodos);
    }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={handleHeadingInputChange} 
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
            {todos.map((todo, index) => (
                <div key={index} className="todo-card">
                    <div className="heading_todo">      
                        <h3>{todo.heading}</h3> {/* Display the heading here */}
                        <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                    </div>

                    <ul>
                        {todo.lists.map((list, listIndex) => (
                        <li key={listIndex} className='todo_inside_list'>
                            <h5>{list}</h5>
                            <button className="delete-button-item" onClick={() => handleDeleteListItem(index,listIndex)}>Delete Item </button>
                        </li>
                        ))}
                    </ul>

                    <div className='add_list'>
                        <input
                            type="text"
                            className="list-input"
                            placeholder="Add List"
                            value={listInputs[index] || ''}
                            onChange={(e) => handleListInputChange(index, e.target.value)}/>
                        <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
                    </div>

                </div>
            ))}
      </div>
    </>
  );
};

export default TodoList;
