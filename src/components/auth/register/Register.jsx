import React from 'react';
import { useState } from 'react';
import { register } from '../../../core/api/users.api';
import { Redirect, Link } from 'react-router-dom';
import './Register.css';

export function Register(props) {

    const [userData, setUserData] = useState({});
    const [isRegistered, setRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const onInputChange = (event) => {
        event.persist();
        console.log(event);

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
        setErrorMessage();
    }


    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
        register(userData).then(() => {
            setRegistered(true);
        })
            .catch((err) => setErrorMessage(err.message));

    };

    return (
        <>
            {isRegistered && <Redirect to="/login" />}
            <div className="register-wrapper">
                <form className="register-form" onSubmit={onFormSubmit}>
                    {errorMessage && <span className="text-danger">{errorMessage}</span>}
                    <div className="form-group">
                        <label labelfor="name">Name: </label>
                        <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} required />
                    </div>
                    <div className="form-group">
                        <label labelfor="age">Age: </label>
                        <input type="number" name="age" id="age" className="form-control" onChange={onInputChange} required />
                    </div>
                    <div className="form-group">
                        <label labelfor="email">Email: </label>
                        <input type="email" name="email" id="email" className="form-control" onChange={onInputChange} required />
                    </div>
                    <div className="form-group">
                        <label labelfor="password">Password: </label>
                        <input type="password" name="password" id="password" className="form-control" onChange={onInputChange} required />
                    </div>
                    <button className="btn btn-primary" >Register</button>
                    <Link to="/login">Already have an account?</Link>
                </form>
            </div>
        </>
    )
}