import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from './AppContent';

const List = () => {

    
	const { tasks, handleUnactive, handleDone } = useContext(AppContext);
	const activeTasks = tasks.filter(task => task.active);
	const list = activeTasks.map(el => (
		<li key={el.id}>
            {el.priority ? <i class="fa-solid fa-exclamation"></i> : null}
			<strong >{el.tittle} </strong>to: {' '}
			{el.date} <i className='fa-solid fa-xmark' style={{color: 'red'}} onClick={() =>handleUnactive(el.id)}></i>
			<i className='fa-solid fa-check' style={{color: 'green'}}  onClick={() =>handleDone(el.id)}></i>
		</li>
	));

	

	return (
		<>
			<NavLink to='/'>
				<button className='back'>
					<i className='fa-solid fa-angle-left'></i>
				</button>
			</NavLink>
			<div className='list'>
				<ul>{list}</ul>
			</div>
		</>
	);
};

export default List;
