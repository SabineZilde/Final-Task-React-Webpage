import React from 'react'
import { NavLink } from 'react-router-dom'
import useForm from './useForm';
import validate from './validateInfo';
import '../../Assets/CSS/Register.css';

function Signup({ submitForm }) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h4>Get started with us today! Create your account by fillin out the information below.</h4>
                <div className="form-inputs">
                    <label
                        htmlFor="username"
                        className="form-label">
                        Username
                    </label>
                    <input
                        id="username"
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
                    <label
                        htmlFor="email"
                        className="form-label">
                        E-mail
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label
                        htmlFor="password"
                        className="form-label">
                        Password
                    </label>
                    <input id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label
                        htmlFor="password2"
                        className="form-label">
                        Confirm Password
                    </label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button
                    className="form-input-btn"
                    type="submit">
                    Sign up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <NavLink to="/login">here</NavLink>.
                </span>
            </form>
        </div>
    )
}
export default Signup;