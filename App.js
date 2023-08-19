
import './App.css';
import { useState } from "react";
import { Task } from './Task'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  //  FIRST ADD THE TASKS
  const handleChange = (event) => {
    setNewTask(event.target.value)

  }
  // SECOND ADD THE TASK ACCORDING TO ID AND TASKNAME
  const handleTask = () => {
    // todoList.push(newTask)
    // setNewTask("")
    // setTodoList(todoList)
    const task ={
      id: todoList.length === 0 ? 1: todoList[todoList.length-1].id+1,
      taskName : newTask,
      completed : false
    }
    setTodoList([...todoList,task])
    document.querySelector('.myInput').value = ""
  }

  // THIRD DELETE THE TASK ACCORDINGLY TO ID
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id!== id))
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task)=> task.id === id ? {...task,completed: true} : task )
    )
    }  



  return (
    <div className="App">
      <div className="addTask">
        <input className="myInput" onChange={handleChange} />
        <button onClick={handleTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map(
          (task)=>{
            return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask} completed={task.completed}/>

          }

        )}
      </div>

    </div>
  );
}

export default App;
