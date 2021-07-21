import '../../Assets/CSS/Register.css';
import Username from './Log';

function LoginSuccess() {
    return (
        <div className="form-content-right">
            <div className="form-success">
                Hello, friend!
                {/* <Username usernameForSuccess={usernameForSuccess} /> */}
            </div>
            {/* <img src="https://image.flaticon.com/icons/png/512/1646/1646832.png" alt="success" className="form-img-2" /> */}
        </div>
    )
}

export default LoginSuccess;