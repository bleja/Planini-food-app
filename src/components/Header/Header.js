import React from "react";
import './Header.scss';

const Header = () => {
    return (
        <h1 className="App-header">
            <span>
                <a href="/">Planini</a>
                <img src="plant-1.png" alt="Leaf logo" width="50" height="50"></img>
            </span>
        </h1>
    )
}

export default Header;
