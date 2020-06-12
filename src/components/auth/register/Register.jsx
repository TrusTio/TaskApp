import React from 'react';
import { useState } from 'react';
import { register } from '../../../core/api/users.api';
import { Redirect } from 'react-router-dom';
import './Register.css';

export function Register(props) {

    const [userData, setUserData] = useState({});

    const onInputChange = (event) => {
        event.persist();
        console.log(event);

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const [isRegistered, setRegistered] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
        register(userData).then(() => {
            setRegistered(true);
        })
            .catch((err) => console.error(err));
    };

    return (
        <>
            {isRegistered && <Redirect to="/login" />}
            <div className="register-wrapper">
                <form className="register-form" onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label labelfor="name">Name: </label>
                        <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} />
                    </div>
                    <div className="form-group">
                        <label labelfor="age">Age: </label>
                        <input type="number" name="age" id="age" className="form-control" onChange={onInputChange} />
                    </div>
                    <div className="form-group">
                        <label labelfor="email">Email: </label>
                        <input type="email" name="email" id="email" className="form-control" onChange={onInputChange} />
                    </div>
                    <div className="form-group">
                        <label labelfor="password">Password: </label>
                        <input type="password" name="password" id="password" className="form-control" onChange={onInputChange} />
                    </div>
                    <button className="btn btn-primary" >Register</button>
                </form>
            </div>
        </>
    )
}