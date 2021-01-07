import './App.css';
import React, { useState } from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';


const ToDoItems = ({ text, todo, todos, setTodos }) => {
  //Events

  const deleteHandler = () => {
    // console.log(todo); //output the current element we are on
    setTodos(todos.filter((el) => el.id !== todo.id));
  }; 

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return{
          ...item, completed: !item.completed,
        }
      }
      return item;
    }));
  }

  return(
    <li className={`todo-item ${todo.completed ? "completed-item" : ""}`}>{text}
      <div className="twoButtons">
        <button onClick={completeHandler} className="checkButton"><FaCheck /></button>
        <button onClick={deleteHandler} className="trashButton"><FaTrash /></button>
      </div>
    </li> 
  );
};

const ToDoList = ({ todos, setTodos }) => {
  return(
    <ul>
      {todos.map(todo => (
        <ToDoItems 
          todos={todos}
          setTodos={setTodos}
          text={todo.text} 
          todo={todo}
          key={todo.id}/>
      ))}
    </ul>
  );
};


function ToDo(){
  const [inputText, SetInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputTextHandler = (e) => {
    SetInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();//it does not refresh everytime
    if(inputText.length > 0){
      setTodos([
        ...todos, 
        {text: inputText, completed: false, id: Math.random() * 1000},
      ]);
    }
    SetInputText("");
  };

  return(
    <div className="list-container">
      <input type="text"
        placeholder="Enter A Task To Do..."
        onChange={inputTextHandler} 
        className="inputBox"
        value={inputText}/>
      <br/>
      <button className="btn" 
        title="Add the task ToDO" 
        onClick={submitTodoHandler}>Add ToDo</button>
      <br/>
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

function App() {
  return (
    <div className="root-container">
      {/* <ToDOComponent /> */}
      <ToDo />
    </div>
  );
}

export default App;
