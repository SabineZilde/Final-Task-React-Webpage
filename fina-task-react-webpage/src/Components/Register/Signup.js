import React from 'react'
import { NavLink } from 'react-router-dom'
import useForm from './useForm';
import validate from './validateInfo';
import '../../Assets/CSS/Register.css';

function Signup({ submitForm }) {
    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</h1>
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
                        E-mail
                    </label>
                    <input
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
                <div className="form-inputs">
                    <label className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className="form-inputs">
                    <label className="form-label">
                    </label>
                    <select
                        name="country"
                        className="form-input"
                        onChange={handleChange}>
                        <option selected disabled value="">Country</option>
                        <option value="LV">Latvia</option>
                        <option value="LT">Lithuania</option>
                        <option value="EE">Estonia</option>
                        <option value="NO">Norway</option>
                        <option value="SE">Sweden</option>
                        <option value="FI">Finland</option>
                        <option value="UK">United Kingdom</option>
                        <option value="DK">Denmark</option>
                        <option value="DE">Germany</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.country && <p>{errors.country}</p>}
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="agree"
                        className="form-check-input"
                        value={values.agree}
                        onChange={handleChange}
                    />
                    <label className="form-label">
                        &nbsp; Agree with terms and condition
                    </label>
                    {errors.agree && <p className="form-agree">{errors.agree}</p>}
                </div>
                <button className="form-input-btn btn btn-warning" type="submit">
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