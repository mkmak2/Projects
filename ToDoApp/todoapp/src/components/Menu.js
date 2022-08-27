import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    const menuButtons = [
        {text: 'Add task', icon: "fa-solid fa-plus", path: '/add'},
        {text: 'Show tasks list', icon: "fa-solid fa-list", path: '/list'},
        {text: 'Show compleated', icon: "fa-solid fa-calendar-check", path: '/done'},
        {text: 'Show canceled', icon: "fa-solid fa-ban", path: '/canceled'},
    ]

    const menu = menuButtons.map(btn => (
            <NavLink to={btn.path}>
                <div key={btn.text}>
                    <i className={btn.icon}></i>
                    <h3>{btn.text}</h3>
                </div>
            </NavLink>
        
    ))
    return ( 
        <>
            {menu}
        </>
     );
}
 
export default Menu;