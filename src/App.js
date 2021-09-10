//developed by Bhavya!
import React , {useState, useEffect} from 'react' 
import './App.css';
import TodoList from "./components/TodoList"
import Form from './components/Form'
function App() {
  //STATE STUFF
  /*2*/const [inputText,setInputText] = useState("");// To Get the data from the user, then change that into states.
  const [todos, setTodos] = useState([]);
  const [filteredTodos,setFilteredTodos] = useState([]);
  const[status,setStatus] = useState("all"); //state for filtering items by clicking on 'all','completed' and 'uncompleted'.
  
  const filterHandler = () => {
    switch(status){
      case "completed" : 
      setFilteredTodos(todos.filter((todo)=> todo.completed === true));
      break;
      case "uncompleted" :
      setFilteredTodos(todos.filter((todo)=> todo.completed === false));
      break;
      default : 
        setFilteredTodos(todos);
        break;
    }
  }
  // SAVE TO LOCAL
  const saveLocalTodos = () =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }; 
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null ){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
     let todoLocal =  JSON.parse(localStorage.getItem("todos"));
    //  console.log(todoLocal);
    setTodos(todoLocal);
    }
  };
  //USE EFFECT
  useEffect(()=>{
    getLocalTodos();
  },[]);
  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  }, [todos,status]);//every time our todos,status changes the functions inside useEffect will re run.
  return (
    <div>
      <header><h1>Bhavya's To do List!! </h1></header>
      <Form setStatus={setStatus} setTodos={setTodos} todos={todos} inputText={inputText} setInputText = {setInputText}/>
      <TodoList filteredTodos = {filteredTodos} todos={todos} setTodos={setTodos}/>
      </div>
  );
}

export default App;
