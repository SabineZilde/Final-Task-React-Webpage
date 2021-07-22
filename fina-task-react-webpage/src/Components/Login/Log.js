import React from 'react'
import { NavLink } from 'react-router-dom'
import LogForm from '../Login/LogForm';
import LogValid from './LogValid';
import '../../Assets/CSS/Register.css';

function Log({ submitForm }) {
    const { handleChange, handleSubmit, values, errors } = LogForm(submitForm, LogValid);


    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Welcome to Fox Club!</h1>
                <h2>Please login to your account.</h2>
                <div className="form-inputs">
                    <label className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="form-input-btn btn btn-warning" type="submit">
                    Log up
                </button>
                <span className="form-input-login">
                    Don't have an account yet? Register <NavLink to="/register">here</NavLink>.
                </span>
            </form>
        </div >
    )
}
export default Log;