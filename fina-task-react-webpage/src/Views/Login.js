import Log from '../Components/Login/Log';
import LoginSuccess from '../Components/Login/LoginSuccess';
import { useState } from 'react';
import '../Assets/CSS/Register.css';
import logo from '../Assets/Img/Fox-Logo.png';
import Breadcrumbs from '../Components/Breadcrumbs';

function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true)
    };

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Login' },
    ];

    return (
        <div className="container-fluid pb-5" style={{ backgroundColor: 'lightgrey' }}>
            <div className="row mx-5">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row mx-5">
                <div className="col">
                    <h4>Login</h4>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col p-0">
                    <div className="form-container-login">
                        <div className="form-content-left">
                            <img src={logo} alt="Fox logo" className="form-img" />
                        </div>
                        {!isSubmitted ? (<Log submitForm={submitForm} />) : (<LoginSuccess />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
