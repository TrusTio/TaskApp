import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../../core/api/users.api';
import { useState } from 'react';

const styles = {
    backgroundColor: 'lightblue',
};

export function Header(){

    const [isLoggedOut, setLogoutFlag] = useState(false);

    const onLogout = (event) => {
        logout();
        setLogoutFlag(true);
      }

    return(
        <>
            {isLoggedOut && <Redirect to="/login"/>}
        <nav className="navbar navbar-expand-lg navbar-light bg-lightblue" style={styles}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link to="/" className="nav-link"> Home </Link>
                </li>
                <li className="nav-item">
                <Link to="/users" className="nav-link"> Users </Link>
                </li>
                <li className="nav-item">
                <Link to="/users/create" className="nav-link"> Create Users </Link>
                </li>
                <li className="nav-item">
                <Link to="/tasks" className="nav-link"> Tasks </Link>
                </li>
                <li className="nav-item">
                <Link to="/tasks/create" className="nav-link"> Create Task </Link>
                </li>
            </ul>
            <button className="btn btn-warning" onClick={onLogout} >Logout</button>
            </div>
      </nav>
      </>
    );
}