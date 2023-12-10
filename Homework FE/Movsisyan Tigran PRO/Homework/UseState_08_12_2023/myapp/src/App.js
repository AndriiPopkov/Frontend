import './App.css';
import Header from './components/Header';

function App() {

  const addTask = (event) => {
    event.preventDefault();
    console.log(event.target);

    const {task, day} = event.target;
    const newTask = {
        id: Date.now(),
        day: day.value,
        // prioritet: pri.value,
        task: task.value
    }
    console.log(newTask);
  }


  return (
    <div>
      <Header addTask={addTask}/>
    </div>
  );
}

export default App;
