import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from './AppContent';

const Form = () => {
	const [text, setText] = useState('');
	const [date, setDate] = useState('');
	const [priority, setPriority] = useState(false);

	const handleChange = e => {
		const value = e.target.value;
		const type = e.target.type;

		if (type === 'text') {
			setText(value);
		} else if (type === 'date') {
			setDate(value);
		} else if (type === 'checkbox') {
			setPriority(e.target.checked);
		}
	};

	const handleSubmit = (addTask) =>{
		const add = addTask(text,date,priority)
		if(add){
			setText('');
			setDate('');
			setPriority(false)
		}
		console.log('dupa')
	}
		


	return (
		<>
		
			<NavLink to='/'>
				<button className='back'>
					<i className='fa-solid fa-angle-left'></i>
				</button>
			</NavLink>
			<div className='form'>
					<label htmlFor='tittle'>Add task tittle: </label>
					<input
						id='tittle'
						type='text'
						placeholder='Add task tittle'
						value={text}
						onChange={handleChange}
					/>
					<label htmlFor='date'>Set finish date: </label>
					<input type='date' id='date' value={date} onChange={handleChange} />
					<label htmlFor='priority'>Set task priority: </label>
					<input
						type='checkbox'
						id='priority'
						checked={priority}
						onChange={handleChange}
					/>
					<AppContext.Consumer>
			{
				({addTask}) => (
					<button onClick={() => handleSubmit(addTask)}>Submit</button>
				)
			}
			</AppContext.Consumer>
			</div>
		</>
	);
};

export default Form;
