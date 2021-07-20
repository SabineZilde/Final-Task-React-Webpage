import Breadcrumbs from '../Components/Breadcrumbs';
import Signup from '../Components/Register/Signup';
import { useState } from 'react';
import Success from '../Components/Register/Success';
import '../Assets/CSS/Register.css';
import logo from '../Assets/Img/Fox-Logo.png';

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

        <div className="container-fluid" style={{ backgroundColor: 'lightgrey' }}>
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>Register</h4>
                </div>
            </div>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src={logo} alt="logo img" className="form-img" />
                </div>
            {!isSubmitted ? (<Signup submitForm={submitForm} />) : (<Success />)}

            </div>


        </div>


    );
}

export default Register;
