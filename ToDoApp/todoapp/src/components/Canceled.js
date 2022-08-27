import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './AppContent';

const Canceled = () => {

    const {tasks} = useContext(AppContext);
    const canceledTasks = tasks.filter(task => task.canceled)
    const canceledList = canceledTasks.map(el =>(
        <li key={el.id}><strong>{el.tittle} </strong>: <em>canceled</em>
        <i className='fa-solid fa-xmark' style={{color: 'red'}}></i> </li>
    ))
    return ( 
        <>
        <NavLink to='/'><button className="back"><i className="fa-solid fa-angle-left"></i></button></NavLink>
        <div className="list">
            <ul>
                {canceledList}
            </ul>
        </div>
        </>
     );
}
 
export default Canceled;