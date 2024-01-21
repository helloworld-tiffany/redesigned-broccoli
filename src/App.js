import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: '치과예약',
        day: '2월 7일 15시 30분',
        reminder: true, 
    },
    {
      id: 2,
      text: '식당예약',
      day: '2월 8일 15시 55분',
      reminder: true, 
  },
])

//add task 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10)+1 
  const newTask = {id, ...task} 
  setTasks([...tasks, newTask]) 
}

//delete task
const deleteTask = (id) => {          
  // console.log('delete', id) 
  setTasks(tasks.filter((task)=> task.id !== 
  id))
}
//toggle reminder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> 
  task.id === id? {...task, reminder: !task.reminder}:task))
}

  return (
    <div className= "container">
      <Header onAdd = {() => setShowAddTask
      (!showAddTask)}
      showAdd = {showAddTask}
      /> 
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks = {tasks}
      onDelete = {deleteTask} onToggle = {toggleReminder}/>) : '' }
    </div>
  );
}

// class App extends React.Componet {
//   render(){
//     return <h1> Hello from a clss </h1>
//   }
// }
export default App;
