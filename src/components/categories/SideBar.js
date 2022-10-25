import React from 'react';
import classes from './SideBar.module.css';

const sideBar = (props) => {
    let items = props.items.map(item => {
        return (
        <li key={item.id}>
            <a href={'/categorie/' + item.id}>{item.name}</a>
        </li>
        );
    })
    
    return (
        <nav className={classes.SideBar}>
            <ul>
                {items}
            </ul>
        </nav>
        );
}

export default sideBar;