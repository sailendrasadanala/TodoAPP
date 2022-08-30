import React,{useState} from "react";
import "../styles/App.css"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editTodos, setEdittodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }


  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editTodos;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
	  <center>
      <form onSubmit={handleSubmit}>
        <input
          type="text" id="task" onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo,index) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">				
            {todo.id === todoEditing ? (<input type="text" id="task" onChange={(e) => setEdittodo(e.target.value)} />) : 
			  (<div>{index+1+"."} {todo.text}</div>)}
			
            {todo.id === todoEditing ? (<button onClick={() => submitEdits(todo.id)}>Save Task</button>) : 
			(<button onClick={() => setTodoEditing(todo.id)}>Edit</button>)}

			{todo.id === todoEditing ? (<button onClick={() => deleteTodo(todo.id)}>Delete Task</button>) : 
			(<button onClick={() => deleteTodo(todo.id)}>Delete</button>)}
			
          </div>
         
        </div>
      ))}
	  </center>
    </div>
  );
};

export default App;