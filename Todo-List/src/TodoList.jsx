import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
    const [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    const [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=> {
        if(newTodo.trim() === "") return;
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false} ];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event)=> {
        setNewTodo(event.target.value);
    };

    let deleteTodo=(id)=> {
        setTodos((prevTodos)=>prevTodos.filter((todo)=> todo.id !== id));
    };

    let markAllDone= ()=> {
        setTodos((todos)=>
            todos.map((todo)=>(
              {
                ...todo,
                isDone: true,
              }
            ))
        )
    };

    let markAsDone=(id)=> {
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {
                    ...todo,
                    isDone: true
                }
            }else{
                    return todo;
                }
            })
        )
    };
    return(
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
        <h4>Task todo</h4>
        <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>
                       <span style={{textDecoration: todo.isDone ? "line-through" : "none"}}>{todo.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                       <button onClick={()=>deleteTodo(todo.id)}>delete</button>  &nbsp;
                       <button onClick={()=> markAsDone(todo.id)}>Mark as Done</button>
                        </li>
                ))
            }
        </ul>
        <br></br>
        <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    )
}

export default TodoList;