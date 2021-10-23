import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e)
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <div class='login'>
            <h1>Login</h1>
            <div className="card-body">
                {data ? (
                    <p>
                        Logged In!
                        <Link to='/'></Link>
                    </p>
                ) : (
                    <form onSubmit={handleLoginSubmit}>
                        <label>
                            <p>Username</p>
                            <input
                                className="form-input"
                                type='email'
                                placeholder='Email'
                                name='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <p>Password</p>
                            <input
                                className="form-input"
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={formState.Password}
                                onChange={handleChange}
                            />
                        </label>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                )};

                {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                )}
            </div>
        </div>
    );
};


export default Login;