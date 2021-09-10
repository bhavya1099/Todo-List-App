import React from 'react';

function Form({setInputText,todos,setTodos, inputText,setStatus}){
    // In here we can write our javascript code and function.
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    //to not to refresh the page.
    const submitTodoHandler = (e) =>{
        e.preventDefault();//to prevent app from reseting everything, once we click on the submit button.
        setTodos([
          ...todos, {text : inputText, completed : false, id: Math.random()*1000 },
        ]);
        setInputText("");//to reset the form after hitting the submit button.
    }
    const statusHandler = (e) => {
      setStatus(e.target.value);//to update our state whenever we click
    }
    return (
        <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick ={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}
export default Form;