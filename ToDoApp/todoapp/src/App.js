import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Form from './components/Form';
import Done from './components/Done';
import Canceled from './components/Canceled';
import List from './components/List';
import { AppContext } from './components/AppContent';

let counter = 0;

function App() {

  
	const [tasks, setTasks] = useState([]);



  const addTask = (text, date, priority) => {
    const task = {
      id: counter,
      tittle: text,
      date,
      priority,
      endDate: null,
      active: true,
      compleated: false,
      canceled: false
    }
    counter++;
    setTasks(prevState => [...prevState,task])
    return counter;
  }

  const handleDone = id =>{
    const newTasks = [...tasks];
		newTasks.forEach(task => {
			if (task.id === id) {
        const finish = new Date().getTime();
				task.active = false;
        task.compleated = true;
				task.endDate = new Date(finish).toLocaleString();
			}
		});

		setTasks(newTasks)
  }

  const handleUnactive = id => {
    const newTasks = [...tasks];
		newTasks.forEach(task => {
			if (task.id === id) {
				task.active = false;
        task.compleated = false;
        task.canceled = true;
			}
		});

		setTasks(newTasks)
  }

  console.log(tasks)
	return (
		<AppContext.Provider value={{
      id: tasks.id,
      tittle: tasks.tittle,
      date: tasks.date,
      endDate: tasks.endDate,
      priority: tasks.priority,
      active: tasks.active,
      compleated: tasks.compleated,
      addTask,
      tasks: tasks,
      handleDone,
      handleUnactive,
    }}>
			<Router>
				<div className='main'>
					<Header />
					<div className='menu'>
						<Routes>
							<Route path='/' element={<Menu />} />
							<Route path='add' element={<Form />}></Route>
							<Route path='done' element={<Done />}></Route>
							<Route path='list' element={<List />}></Route>
							<Route path='canceled' element={<Canceled />}></Route>
						</Routes>
					</div>
				</div>
			</Router>
		</AppContext.Provider>
	);
}

export default App;
