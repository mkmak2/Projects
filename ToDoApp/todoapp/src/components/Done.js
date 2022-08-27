import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from './AppContent';

const Done = () => {
    const {tasks, handleUnactive} = useContext(AppContext);
    const compleatedTasks = tasks.filter(task => task.compleated)
    const doneList = compleatedTasks.map(el =>(
        <li key={el.id}><strong>{el.tittle} </strong> compleated: {el.endDate}
        <i className='fa-solid fa-xmark' style={{color: 'red'}} onClick={() =>handleUnactive(el.id)}></i> </li>
    ))
    return ( 
        <>
        <NavLink to='/'><button className="back"><i className="fa-solid fa-angle-left"></i></button></NavLink>
        <div className='list'>
            <ul>
                {doneList}
            </ul>
        </div>
        </>
     );
}
 
export default Done;