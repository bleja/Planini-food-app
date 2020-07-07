import React from 'react';
import './Navigation.scss';
import { NavLink, Link } from "react-router-dom";


function Navigation() {
    return (
    <div className="Nav-style">
        <ul>
            <li><NavLink exact to="/">Start</NavLink></li>
            <li><NavLink to="/meals">Posiłki</NavLink></li>
            <li><NavLink to="/plans">Plany posiłków</NavLink></li>
            <li><NavLink to="/lists">Listy zakupów</NavLink></li>
        </ul>
    </div>
    )
}

export default Navigation;
