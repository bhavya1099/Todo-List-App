import React from "react"
import Todo from "./Todo"
function TodoList({todos, setTodos,filteredTodos}) {
    console.log(todos);
    return (
        <div>
            <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredTodos.map(todo => (
            <Todo todo={todo} todos={todos} setTodos={setTodos} text={todo.text} key={todo.id}/>
            ))}
            </div>
        </div>
    )
}

export default TodoList;