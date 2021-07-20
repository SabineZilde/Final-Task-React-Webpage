import Signup from '../Components/Register/Signup';
import { useState } from 'react';
import Success from '../Components/Register/Success';
import '../Assets/CSS/Register.css';
import logo from '../Assets/Img/Fox-Logo.png';
import Breadcrumbs from '../Components/Breadcrumbs';

function Register() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true)
    };

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Register' },
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
                    <h4>Register</h4>
                </div>
            </div>
            <div className="row mt-3 mb-5">
                <div className="col p-0">
                    <div className="form-container">
                        <div className="form-content-left">
                            <img src={logo} alt="Fox logo" className="form-img" />
                        </div>
                        {!isSubmitted ? (<Signup submitForm={submitForm} />) : (<Success />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
